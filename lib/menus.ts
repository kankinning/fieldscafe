import { env } from "cloudflare:workers";
export const defaults = {
  ordinary: {
    filename: "Fields-menu-May-2026-v6.pdf",
    path: "/menus/Fields-menu-May-2026-v6.pdf",
  },
  catering: {
    filename: "Woozoo-catering-menu-2026.pdf",
    path: "/menus/Woozoo-catering-menu-2026.pdf",
  },
};
export type MenuKind = keyof typeof defaults;
export function isKind(s: string): s is MenuKind {
  return s === "ordinary" || s === "catering";
}
export async function current(kind: string) {
  return env.DB
    ? env.DB.prepare(
        "SELECT object_key,filename,updated_at FROM menus WHERE kind=?",
      )
        .bind(kind)
        .first<{ object_key: string; filename: string; updated_at: number }>()
    : null;
}
export async function validPdf(bytes: ArrayBuffer) {
  const b = new Uint8Array(bytes);
  const start = new TextDecoder().decode(b.slice(0, 8));
  const tail = new TextDecoder().decode(b.slice(-1024));
  return start.startsWith("%PDF-") && tail.includes("%%EOF");
}
