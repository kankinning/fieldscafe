# Fields Café

Private-review redesign of Fields Café, with a separate Little Fields page, current PDF downloads, ResDiary booking embed and authenticated staff menu management.

## Develop

Use Node.js 22.13+ and npm. Run `npm ci`, `npm run dev`, `npm run lint`, `npx tsc --noEmit`, and `npm run build`. The build produces a Cloudflare Worker plus static assets in `dist/`. This is a full-stack application; GitHub Pages cannot run the backend.

## Runtime and storage

The application uses standard Cloudflare Workers, D1 (`DB`) and R2 (`BUCKET`). React pages are built by Vinext/Vite. Sites provides the private review deployment; it is not the sole deployment option. Source belongs in `kankinning/fieldscafe`.

For an independent Cloudflare account, create one D1 database and one R2 bucket, then use `wrangler.portable.example.jsonc` as a configuration template. Insert the account's resource IDs, build, apply the checked-in D1 migrations with `wrangler d1 migrations apply DB --remote --config wrangler.portable.jsonc`, and deploy using `wrangler deploy --config wrangler.portable.jsonc`. Configure the secrets below through the provider's secure secret UI or `wrangler secret put`. Preserve `nodejs_compat`, both bindings and the generated asset directory. Never expose database IDs as authorization or run staff storage in GitHub Pages.

Menu files supplied with the build are the initial downloads. Authenticated replacements are written to R2 first; D1 then atomically changes the current pointer. Failed metadata writes remove the new orphan and leave the previous menu unchanged. Previous successful versions remain in R2 for recovery. Storage failures return a recoverable error instead of a false success.

## Staff access — provisioning required

There are **no default production credentials**. Sign-in remains disabled until all bindings and these secrets exist:

- `STAFF_EMAIL`: owner-approved staff account email.
- `STAFF_PASSWORD_HASH`: `salt:hexHash`, using PBKDF2-HMAC-SHA256, 600,000 iterations, 32 output bytes, and UTF-8 salt. Generate securely from a staff-chosen password; do not send the password through chat or commit it.
- `SESSION_SECRET`: at least 32 random characters, generated securely and stored as a runtime secret.

`node scripts/hash-staff-password.mjs` accepts the password through hidden terminal input and prints only the salted hash. Copy that hash into the secure hosting settings. Passwords are never logged or stored by the app. This is one shared staff account; individual accounts, password recovery, MFA and role administration are not implemented. For multiple staff identities, replace the small auth adapter with an established identity provider before rollout.

Sessions use Web Crypto HMAC-SHA256 signatures, an eight-hour expiry and Secure/HttpOnly/SameSite=Strict cookies. Staff mutations require exact same-origin requests. Login attempts are rate-limited in D1 to five per 15-minute window per hashed IP. Rotate the session secret to revoke all sessions. Staff uploads require server-side auth, PDF MIME and signature/EOF checks, a 10 MB maximum, generated object names and attachment/no-sniff/sandbox response headers. PDF signature checks are not antivirus scanning.

## Local tests

`tests/backend.mjs` is restricted to loopback. Supply `TEST_CREDENTIAL_FILE` pointing to a local-only JSON fixture with `email` and `password`, and configure the corresponding ignored `.dev.vars`. Never deploy that fixture. It checks login, cookie verification/tampering, unauthorized requests, CSRF, PDF validation, size limits, both storage/download paths, byte equality, logout and rate limiting. It mutates the isolated local database and bucket.

The private preview intentionally shows the unprovisioned staff state. Local fixtures and storage are excluded from Git and deployment artifacts.

## Content and launch decisions

The downloadable café menu is the supplied May 2026 v6 PDF. Catering is the owner-approved original Woozoo Group 2026 PDF. Keep their contents and branding intact. The café menu's dietary claims should be confirmed by staff before public launch; do not infer dietary safety from imagery.

Main café address/hours and bookings follow the current official Fields site. Little Fields hours come from supplied branch materials and await final owner confirmation. Instagram retains the live site's `@fieldscafe_albany`; supplied menu materials list a different handle. The existing email destination is `info@fieldscafe.co.nz` while the live site displays `hello@fieldscafe.co.nz`; this review uses a consistently labelled `info@` action pending owner confirmation. No email submissions or bookings were sent.

Photography is authentic supplied imagery, with selected web-sized WebP derivatives. No objects, dishes or spaces were generated or changed. Original photography, logo PDFs, internal reviews and source archives are retained outside the checkout. Public release still needs rights/currentness confirmation, particularly historic venue photography. Logo SVG paths are cleanly exported from the supplied green vector master; no desktop-only webfonts are embedded. System Arial/Georgia are used.

Do not switch the production domain or change the private review audience without owner approval. Review metadata is `noindex` until launch approval.
