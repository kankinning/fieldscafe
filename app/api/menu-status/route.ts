import { current } from "@/lib/menus";
import { json, authorized } from "@/lib/staff";
export async function GET(req: Request) {
  if (!(await authorized(req))) return json({ error: "Please sign in." }, 401);
  try {
    return json({
      ordinary: await current("ordinary"),
      catering: await current("catering"),
    });
  } catch {
    return json({ error: "Menu storage is unavailable." }, 503);
  }
}
