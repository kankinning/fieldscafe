import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
const origin = process.env.TEST_BASE_URL || "http://127.0.0.1:5173";
if (!["localhost", "127.0.0.1"].includes(new URL(origin).hostname))
  throw new Error("Integration tests are restricted to loopback.");
const fixture = JSON.parse(
  await readFile(process.env.TEST_CREDENTIAL_FILE, "utf8"),
);
let cookie = "";
let checks = 0;
async function call(path, options = {}) {
  return fetch(origin + path, {
    ...options,
    headers: {
      Origin: origin,
      ...(cookie ? { Cookie: cookie } : {}),
      ...options.headers,
    },
  });
}
function check(value, expected, label) {
  assert.equal(value, expected, label);
  checks++;
  console.log("PASS " + label);
}
check((await call("/api/staff")).status, 200, "staff status");
check(
  (await call("/api/menus/ordinary", { method: "PUT", body: "bad" })).status,
  401,
  "unauthenticated upload denied",
);
check(
  (
    await call("/api/staff", {
      method: "POST",
      headers: {
        Origin: "https://evil.example",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fixture),
    })
  ).status,
  403,
  "cross-origin login denied",
);
check(
  (
    await call("/api/staff", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...fixture, password: "incorrect" }),
    })
  ).status,
  401,
  "invalid password denied",
);
let r = await call("/api/staff", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(fixture),
});
check(r.status, 200, "valid login");
const set = r.headers.get("set-cookie");
assert.match(set, /HttpOnly/);
assert.match(set, /Secure/);
assert.match(set, /SameSite=Strict/);
cookie = set.split(";")[0];
check(
  (await (await call("/api/staff")).json()).authenticated,
  true,
  "signed session verified",
);
const validCookie = cookie;
cookie = cookie + "x";
check(
  (await (await call("/api/staff")).json()).authenticated,
  false,
  "tampered session denied",
);
cookie = validCookie;
let f = new FormData();
f.set("file", new File(["not a PDF"], "bad.pdf", { type: "application/pdf" }));
check(
  (await call("/api/menus/ordinary", { method: "PUT", body: f })).status,
  400,
  "PDF content validation",
);
f = new FormData();
f.set(
  "file",
  new File([new Uint8Array(10 * 1024 * 1024 + 1)], "huge.pdf", {
    type: "application/pdf",
  }),
);
check(
  (await call("/api/menus/ordinary", { method: "PUT", body: f })).status,
  413,
  "oversized upload rejected",
);
for (const [kind, file] of [
  ["ordinary", "Fields-menu-May-2026-v6.pdf"],
  ["catering", "Woozoo-catering-menu-2026.pdf"],
]) {
  const bytes = await readFile("public/menus/" + file);
  f = new FormData();
  f.set("file", new File([bytes], file, { type: "application/pdf" }));
  check(
    (
      await call("/api/menus/" + kind, {
        method: "PUT",
        body: f,
        headers: { Origin: "https://evil.example" },
      })
    ).status,
    403,
    "cross-origin " + kind + " upload denied",
  );
  f = new FormData();
  f.set("file", new File([bytes], file, { type: "application/pdf" }));
  check(
    (await call("/api/menus/" + kind, { method: "PUT", body: f })).status,
    200,
    kind + " durable upload",
  );
  const download = await call("/api/menus/" + kind);
  check(download.status, 200, kind + " download");
  assert.match(download.headers.get("content-disposition"), /^attachment/);
  check(
    download.headers.get("x-content-type-options"),
    "nosniff",
    kind + " safe headers",
  );
  assert.deepEqual(Buffer.from(await download.arrayBuffer()), bytes);
  console.log("PASS " + kind + " stored bytes match original");
  checks++;
}
check((await call("/api/staff", { method: "DELETE" })).status, 200, "logout");
cookie = "";
check(
  (await call("/api/menu-status")).status,
  401,
  "protected metadata denied after logout",
);
for (let i = 0; i < 5; i++)
  r = await call("/api/staff", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...fixture, password: "wrong" }),
  });
check(r.status, 429, "durable login rate limit");
await writeFile(
  "/tmp/fields-backend-test-result.json",
  JSON.stringify({ checks, passed: true }),
);
console.log(`${checks} checks passed`);
