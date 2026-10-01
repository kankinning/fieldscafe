import { env } from "cloudflare:workers";
import { authorized, json, sameOrigin } from "@/lib/staff";
import { current, defaults, isKind, validPdf } from "@/lib/menus";
type Context = { params: Promise<{ kind: string }> };
export async function GET(req: Request, { params }: Context) {
  const { kind } = await params;
  if (!isKind(kind)) return json({ error: "Menu not found." }, 404);
  try {
    const row = await current(kind);
    if (!row)
      return Response.redirect(new URL(defaults[kind].path, req.url), 302);
    const object = await env.BUCKET?.get(row.object_key);
    if (!object)
      return json(
        {
          error:
            "The menu is temporarily unavailable. Please call 09 414 5888.",
        },
        503,
      );
    return new Response(object.body, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${row.filename}"`,
        "X-Content-Type-Options": "nosniff",
        "Content-Security-Policy": "sandbox; default-src 'none'",
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return json(
      { error: "The menu is temporarily unavailable. Please try again." },
      503,
    );
  }
}
export async function PUT(req: Request, { params }: Context) {
  if (!sameOrigin(req)) return json({ error: "Request origin rejected." }, 403);
  if (!(await authorized(req))) return json({ error: "Please sign in." }, 401);
  const { kind } = await params;
  if (!isKind(kind)) return json({ error: "Unknown menu type." }, 400);
  if (!env.DB || !env.BUCKET)
    return json({ error: "Menu storage is unavailable." }, 503);
  const max = 10 * 1024 * 1024;
  const length = Number(req.headers.get("content-length"));
  if (!length || length > max + 16384)
    return json({ error: "Choose a PDF no larger than 10 MB." }, 413);
  try {
    const form = await req.formData();
    const file = form.get("file");
    if (file instanceof File && file.size > max)
      return json({ error: "Choose a PDF no larger than 10 MB." }, 413);
    if (
      !(file instanceof File) ||
      file.type !== "application/pdf" ||
      !file.size
    )
      return json({ error: "Choose a PDF no larger than 10 MB." }, 400);
    const bytes = await file.arrayBuffer();
    if (!(await validPdf(bytes)))
      return json({ error: "This file is not a valid PDF document." }, 400);
    const objectKey = `menus/${kind}/${crypto.randomUUID()}.pdf`;
    const filename = `Fields-${kind}-menu.pdf`;
    await env.BUCKET.put(objectKey, bytes, {
      httpMetadata: { contentType: "application/pdf" },
    });
    try {
      await env.DB.prepare(
        "INSERT INTO menus (kind,object_key,filename,updated_at) VALUES (?,?,?,?) ON CONFLICT(kind) DO UPDATE SET object_key=excluded.object_key,filename=excluded.filename,updated_at=excluded.updated_at",
      )
        .bind(kind, objectKey, filename, Date.now())
        .run();
    } catch (error) {
      await env.BUCKET.delete(objectKey);
      throw error;
    }
    return json({ ok: true, filename });
  } catch {
    return json(
      {
        error:
          "The menu could not be saved. Your previous menu is unchanged. Please try again.",
      },
      503,
    );
  }
}
