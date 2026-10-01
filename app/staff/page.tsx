"use client";
import { useEffect, useState } from "react";
type State = { configured: boolean; authenticated: boolean };
export default function Staff() {
  const [state, setState] = useState<State | null>(null);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<
    Record<string, { updated_at: number } | null>
  >({});
  async function refresh() {
    const r = await fetch("/api/staff");
    setState(await r.json());
  }
  useEffect(() => {
    fetch("/api/staff")
      .then((r) => r.json())
      .then((data) => setState(data as State))
      .catch(() =>
        setMessage("Sign-in is temporarily unavailable. Please try again."),
      );
  }, []);
  useEffect(() => {
    if (state?.authenticated)
      fetch("/api/menu-status")
        .then((r) => r.json())
        .then((data) =>
          setStatus(data as Record<string, { updated_at: number } | null>),
        )
        .catch(() => setMessage("Unable to load menu status."));
  }, [state]);
  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setMessage("");
    const form = new FormData(e.currentTarget);
    try {
      const r = await fetch("/api/staff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
      const data = (await r.json()) as { error?: string };
      if (!r.ok) throw new Error(data.error);
      await refresh();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "Sign-in failed.");
    } finally {
      setBusy(false);
    }
  }
  async function upload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const kind = data.get("kind");
    const file = data.get("file");
    if (!(file instanceof File) || file.size > 10485760) {
      setMessage("Choose a PDF no larger than 10 MB.");
      return;
    }
    setBusy(true);
    setMessage("");
    try {
      const r = await fetch("/api/menus/" + kind, {
        method: "PUT",
        body: data,
      });
      const result = (await r.json()) as { error?: string };
      if (!r.ok) throw new Error(result.error);
      setMessage("Your menu is now published.");
      form.reset();
      await refresh();
    } catch (e) {
      setMessage(
        e instanceof Error ? e.message : "Upload failed. Please try again.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <section className="staff section">
      <p className="eyebrow">FIELDS STAFF</p>
      <h1>Menu management</h1>
      {!state ? (
        <p>Checking sign-in…</p>
      ) : !state.configured ? (
        <div className="notice">
          <h2 style={{ fontSize: 28 }}>Staff access awaits setup</h2>
          <p>
            The site owner needs to provision the staff account securely before
            sign-in and uploads can be used.
          </p>
        </div>
      ) : !state.authenticated ? (
        <form onSubmit={login}>
          <label>
            Email
            <input
              type="email"
              name="email"
              autoComplete="username"
              required
              maxLength={254}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
              maxLength={512}
            />
          </label>
          <button className="button dark" disabled={busy}>
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </form>
      ) : (
        <>
          <p>
            Update the café and catering PDFs. New files replace the download
            visitors receive.
          </p>
          {["ordinary", "catering"].map((kind) => (
            <div className="staff-card" key={kind}>
              <h2>{kind === "ordinary" ? "Café menu" : "Catering menu"}</h2>
              <p className="small">
                {status[kind]?.updated_at
                  ? "Last updated " +
                    new Date(status[kind]!.updated_at).toLocaleString()
                  : "Initial menu supplied with this website"}
              </p>
              <a className="text-link" href={"/api/menus/" + kind}>
                Download current PDF
              </a>
            </div>
          ))}
          <form onSubmit={upload}>
            <label>
              Menu to update
              <select name="kind">
                <option value="ordinary">Café menu</option>
                <option value="catering">Catering menu</option>
              </select>
            </label>
            <label>
              New PDF · up to 10 MB
              <input
                name="file"
                type="file"
                accept="application/pdf,.pdf"
                required
              />
            </label>
            <button className="button dark" disabled={busy}>
              {busy ? "Publishing…" : "Publish menu"}
            </button>
          </form>
          <button
            className="button"
            disabled={busy}
            onClick={async () => {
              await fetch("/api/staff", { method: "DELETE" });
              await refresh();
            }}
          >
            Sign out
          </button>
        </>
      )}
      <p role="status" className={message ? "notice" : ""}>
        {message}
      </p>
    </section>
  );
}
