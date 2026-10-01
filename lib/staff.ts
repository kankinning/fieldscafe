import { env } from "cloudflare:workers";
const encoder = new TextEncoder();
export const COOKIE = "__Host-fields_staff";
export const ready = () =>
  !!(
    env.STAFF_EMAIL &&
    env.STAFF_PASSWORD_HASH &&
    env.SESSION_SECRET &&
    env.SESSION_SECRET.length >= 32 &&
    env.DB &&
    env.BUCKET
  );
function encode(bytes: Uint8Array) {
  return btoa(String.fromCharCode(...bytes))
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
}
function decode(s: string) {
  return Uint8Array.from(
    atob(s.replaceAll("-", "+").replaceAll("_", "/")),
    (c) => c.charCodeAt(0),
  );
}
async function key() {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(env.SESSION_SECRET!),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}
export async function createSession() {
  const payload = encode(
    encoder.encode(
      JSON.stringify({
        email: env.STAFF_EMAIL,
        exp: Date.now() + 8 * 60 * 60 * 1000,
        nonce: crypto.randomUUID(),
      }),
    ),
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    await key(),
    encoder.encode(payload),
  );
  return payload + "." + encode(new Uint8Array(signature));
}
export async function authorized(request: Request) {
  if (!ready()) return false;
  const token = request.headers
    .get("cookie")
    ?.split(";")
    .map((s) => s.trim())
    .find((s) => s.startsWith(COOKIE + "="))
    ?.slice(COOKIE.length + 1);
  if (!token) return false;
  try {
    const [payload, sig, extra] = token.split(".");
    if (extra || !payload || !sig) return false;
    if (
      !(await crypto.subtle.verify(
        "HMAC",
        await key(),
        decode(sig),
        encoder.encode(payload),
      ))
    )
      return false;
    const data = JSON.parse(new TextDecoder().decode(decode(payload)));
    return (
      data.email === env.STAFF_EMAIL &&
      Number.isFinite(data.exp) &&
      data.exp > Date.now()
    );
  } catch {
    return false;
  }
}
export function sameOrigin(req: Request) {
  return req.headers.get("origin") === new URL(req.url).origin;
}
export async function passwordMatches(password: string) {
  const [salt, expected] = env.STAFF_PASSWORD_HASH!.split(":");
  if (!salt || !expected) return false;
  const material = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const hash = new Uint8Array(
    await crypto.subtle.deriveBits(
      {
        name: "PBKDF2",
        salt: encoder.encode(salt),
        iterations: 600000,
        hash: "SHA-256",
      },
      material,
      256,
    ),
  );
  const actual = Array.from(hash, (x) => x.toString(16).padStart(2, "0")).join(
    "",
  );
  let diff = actual.length ^ expected.length;
  for (let i = 0; i < actual.length; i++)
    diff |= actual.charCodeAt(i) ^ (expected.charCodeAt(i) || 0);
  return diff === 0;
}
export function json(
  data: unknown,
  status = 200,
  headers: Record<string, string> = {},
) {
  return Response.json(data, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}
