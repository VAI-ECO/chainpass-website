# STATE — chainpass-website

Read this first. It is written so a seat arriving cold knows where it is without asking the owner
a single question. If something here is wrong, fix this file in the same commit as the work.

**Last verified:** 31 Aug 2026

---

## What this repo is

The public ChainPass website. **Static HTML — not an app.** No build step, no framework, no server.

Until 31 Aug it was a Vite + React + TypeScript SPA. That is gone; the branch
`static-site-2026-08-31` replaced it with design-tool exports. Anything you read about `src/`,
`vite.config`, `tailwind.config` or `package.json` is describing the old repo and no longer
applies.

**The folder on the Mac is called `chainpass-splash`. The repo is `chainpass-website`.** They do
not match and that has cost sessions before.

| | |
|---|---|
| Remote | `VAI-ECO/chainpass-website` (public) |
| Container path | `/data/vai-workspaces/chainpass-website` |
| Mac path | `~/vai-workspaces/chainpass-splash` |
| Working branch | `static-site-2026-08-31` |
| Deploy branch | `main` |
| Deploys via | GitHub Actions → Azure Static Web Apps |

Not Vercel. A `vercel.json` was left behind by the old template and means nothing.

---

## Layout

```
index.html                  the live release — a COPY, never edit it directly
releases/R1-go-live.html    front page, no video          ← ships first
releases/R2-go-live-video.html   same page + 3 video slots ← waiting on video
releases/R3-three-levels.html    different front page      ← months out
go-live.sh                  switches which release is live, with rollback
RELEASES.md                 the release process in full
ChainPass API.dc.html       ┐
ChainPass Features.dc.html  │ back pages, shared by all three releases
Partner Dashboard.dc.html   ┘
public/                     favicons, trust badges, partner logos
```

There is no `docs/`, no canon and no screen register. **That is deliberate** — owner's call,
31 Aug: this is an info site, not a product. If a project card's rules point at `docs/canon` or
`docs/screens/00-SCREEN-REGISTER.md`, ignore those lines rather than creating the folders.

---

## What blocks going live

Three things. All three are named in `RELEASES.md` and none is started.

1. **The signup form collects nothing.** `LEAD_ENDPOINT` is still `PASTE_ENDPOINT_URL_HERE`. The
   form behaves honestly — it tells the visitor it did not send and offers
   `platforms@chainpass.io` — but no lead is captured. Owner has a Proton SMTP token sealed in the
   BMacOS Vault; the endpoint to receive the POST does not exist yet.
   **Changing it means changing all four files** — the three releases and `index.html`.
2. **`ChainPass Get Your VAI.dc.html` does not exist.** Every release links to it. It is the main
   CTA on every page and it 404s. The page was never built. Either build it, or point the CTA at
   `#signup` until it is.
3. **The Azure workflow is stale.** `output_location: "dist"` — a Vite build directory that no
   longer exists. It must be `"/"` or a push to `main` deploys nothing. The workflow file was also
   removed from the working branch to get past a token missing `workflow` scope, and has to be
   restored before merge.

---

## What was done 31 Aug

- Replaced the React app with the design exports (`c318b65`).
- **Fixed the fake signup form.** It was `submit: (e) => { e.preventDefault();
  this.setState({ sent: true }); }` — no network call at all — and it displayed *"Received. We
  will call you within one business day."* Every lead was lost and every visitor was told
  otherwise. Now it does a real POST and only claims success on a 2xx. Six cases tested.
- **Rewrote `go-live.sh`.** It was one line, `cp releases/$1-*.html index.html`, with no rollback.
  It now snapshots what is live, verifies the copy with `cmp`, and has `--back` and `--status`.
- Added `RELEASES.md`.

---

## Rules for working here

- **`index.html` is a copy.** Edit `releases/R<n>-*.html`, then `./go-live.sh R<n>`.
- **A change to the form or a CTA touches all four files**, or the next switch silently undoes it.
- **These are design-tool exports.** The real markup is escaped inside a `__bundler/template`
  script tag — one JSON string. Edit it by decoding, changing, re-encoding, and escaping `</` as
  `</` or the page breaks. A fresh export from the design tool overwrites every fix here,
  including the form.
- **Done means pushed.** `git commit` exiting 0 proves bytes reached local disk and nothing else
  (§19).
- Switching releases is chair-class under §18 — reversible in one command, destroys nothing. Do not
  ask permission for a switch. Do ask before a first deploy to `main`.
