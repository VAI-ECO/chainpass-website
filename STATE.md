> ⚠️ **Parts of this file are stale.** Verified live state is in
> `~/vai-workspaces/OPS-01_LIVE_STATE.md` — read that first. (3 Sep 2026)

# STATE — chainpass-website

Read this first. It is written so a seat arriving cold knows where it is without asking the owner
a single question. If something here is wrong, fix this file in the same commit as the work.

**Last verified:** 8 Sep 2026

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
| Working branch | `main` |
| Deploy branch | `main` |
| Deploys via | ⚠️ **NOT Azure. There is no Azure and no `.github/workflows` in this repo.** Hetzner `2.28.18.138` via `./deploy-site.sh`. [V] 3 Sep 2026 |

Not Vercel. A `vercel.json` was left behind by the old template and means nothing.

---

## Layout

```
index.html                       root copy of the selected live release
releases/R1-no-video/            launch site; one V.A.I.; six audited pages
releases/R2-with-video/          later release with video slots
releases/R3-three-levels/        Go / Access / Pro release; months out
go-live.sh                       selects R1, R2, or R3 locally
deploy-site.sh                   deploys the selected root release to Hetzner
```

There is no `docs/`, no canon and no screen register. **That is deliberate** — owner's call,
31 Aug: this is an info site, not a product. If a project card's rules point at `docs/canon` or
`docs/screens/00-SCREEN-REGISTER.md`, ignore those lines rather than creating the folders.

---

## Current launch boundary

- R1 is the public launch: one V.A.I., without video.
- R2 preserves the with-video version for later.
- R3 preserves Go / Access / Pro for a later launch measured in months.
- R1 has a real Get Your V.A.I. page and six audited public pages.
- Until a form endpoint is activated, platform and preregistration forms open a prepared email;
  they do not claim that a server submission occurred.
- API rows distinguish Built, Activation required, and Planned endpoints.
- Production deployment is manual through `./deploy-site.sh`; pushing alone does not deploy.

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
