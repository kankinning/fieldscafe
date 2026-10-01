import { env } from "cloudflare:workers";
import {
  authorized,
  COOKIE,
  createSession,
  json,
  passwordMatches,
  ready,
  sameOrigin,
} from "@/lib/staff";
export async function GET(req: Request) {
  return json({ configured: ready(), authenticated: await authorized(req) });
}
export async function POST(req: Request) {
  if (!sameOrigin(req)) return json({ error: "Request origin rejected." }, 403);
  if (!ready())
    return json(
      {
        error:
          "Staff sign-in has not been provisioned. Please contact the site owner.",
      },
      503,
    );
  if (Number(req.headers.get("content-length")) > 4096)
    return json({ error: "Request too large." }, 413);
  let body: Record<string, unknown>;
  try {
    const input = await req.json();
    if (!input || typeof input !== "object") throw new Error();
    body = input as Record<string, unknown>;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  if (
    typeof body.email !== "string" ||
    typeof body.password !== "string" ||
    body.email.length > 254 ||
    body.password.length > 512
  )
    return json({ error: "Invalid sign-in details." }, 400);
  const window = Math.floor(Date.now() / 900000);
  const identity =
    (req.headers.get("cf-connecting-ip") || "local") + ":" + window;
  const hash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(identity),
  );
  const id = Array.from(new Uint8Array(hash), (x) =>
    x.toString(16).padStart(2, "0"),
  ).join("");
  await env
    .DB!.prepare("DELETE FROM login_attempts WHERE until < ?")
    .bind(Date.now())
    .run();
  const row = await env
    .DB!.prepare(
      "INSERT INTO login_attempts (key,count,until) VALUES (?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1 RETURNING count",
    )
    .bind(id, (window + 1) * 900000)
    .first<{ count: number }>();
  if (!row || row.count > 5)
    return json(
      { error: "Too many attempts. Please try again in 15 minutes." },
      429,
      { "Retry-After": "900" },
    );
  const valid = await passwordMatches(body.password);
  if (!valid || body.email.toLowerCase() !== env.STAFF_EMAIL!.toLowerCase())
    return json({ error: "Email or password is incorrect." }, 401);
  const session = await createSession();
  return json({ ok: true }, 200, {
    "Set-Cookie": `${COOKIE}=${session}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=28800`,
  });
}
export async function DELETE(req: Request) {
  if (!sameOrigin(req)) return json({ error: "Request origin rejected." }, 403);
  return json({ ok: true }, 200, {
    "Set-Cookie": `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`,
  });
}
