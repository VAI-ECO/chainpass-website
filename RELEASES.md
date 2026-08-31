# ChainPass website — releases

This repo holds **three finished versions of the site at once.** Exactly one is live at a time.
Switching between them is a one-line command, and it is reversible.

The owner switches releases by asking the chair. The chair does not need permission for a switch —
it is reversible in one command and destroys nothing (§18: all five tests no).

---

## What is live

```
./go-live.sh --status
```

Prints the live release, the previous one, and the size of `index.html`.

## Switch

```
./go-live.sh R1     # or R2, R3
git add -A && git commit -m "live: R1" && git push
```

`go-live.sh` copies `releases/R<n>-*.html` over `index.html` and then **verifies the bytes with
`cmp`** before saying it worked. It snapshots whatever was live into `backup-live/` first and
records the previous release, so there is always a way back.

The push is what actually deploys — see *How it goes live* below. A switch that is committed but
not pushed has changed nothing.

## Roll back

```
./go-live.sh --back
git add -A && git commit -m "rollback" && git push
```

Returns to the previously live release from its snapshot, byte-verified.

---

## The three releases

All three share the same back pages — API, Features, Partner Dashboard — and the same two entry
points. Only the front page differs.

| | File | What it is | Status |
|---|---|---|---|
| **R1** | `releases/R1-go-live.html` | Front page, no video | **Ships first.** Complete. |
| **R2** | `releases/R2-go-live-video.html` | Same page with three video slots | Waiting on video files |
| **R3** | `releases/R3-three-levels.html` | Different front page — the three V.A.I. levels | Scheduled, months out |

R1 and R2 are the same page apart from one nav link and the video sections. R3 is a different
front page entirely.

### R2 — what it still needs

The three slots exist and are empty. They are `<section>` ids in the page:

- `#how-video` — after "KYC SECURE + CHAINPASS PRIVACY"
- `#cases-video` — after "ChainPass Provides the Technology…"
- `#compliance-video` — in the compliance section

Each needs a `<video>` element with a poster image. **R2 does not ship until all three are filled
and play.** An empty slot on a page called "with video" is a broken promise to the visitor.

---

## The two entry points — identical in all three

Every release has exactly two ways in, and they are the same page-for-page:

1. **Schedule a Call** (`#signup`) — the platform signup form.
2. **Get Your V.A.I.** — the individual enrolment CTA.

### Both are unfinished

**The form posts nowhere yet.** `LEAD_ENDPOINT` at the top of the page script is still
`PASTE_ENDPOINT_URL_HERE`. Until it is set, the form tells the visitor honestly that it did not
send and gives them `platforms@chainpass.io` — it never claims a lead it does not have (§19).

Setting it is a one-line change, and it must be made in **all three releases plus `index.html`**,
or a switch silently reverts the site to a non-collecting form.

**`ChainPass Get Your VAI.dc.html` does not exist.** Every release links to it and every release
404s on it. It is the main CTA. **No release should go live with that link dead** — either the page
gets built, or the CTA points at the signup form until it does.

---

## How it goes live

GitHub Actions → Azure Static Web Apps, on push to `main`. The workflow is
`.github/workflows/azure-static-web-apps-orange-coast-047448e10.yml`.

Two things to know before the first push to `main`:

1. The workflow sets `output_location: "dist"`, left over from the Vite app this repo used to hold.
   There is no `dist` any more — the site is static HTML at the repo root. **It must be `"/"` or
   Azure deploys nothing.**
2. Pushing a branch that touches that workflow file needs a token with `workflow` scope. The
   `static-site-2026-08-31` branch had the file removed to get around that; it has to be restored
   before merge.

---

## Rules for this repo

- **One release live at a time.** `index.html` is a copy, never edited directly. Edit
  `releases/R<n>-*.html` and switch.
- **A switch is not done until it is pushed.** `git commit` exiting 0 proves bytes reached local
  disk and nothing else (§19).
- **Anything that changes the form or a CTA changes all four files** — the three releases and
  `index.html` — or the next switch quietly undoes it.
- These are design-tool exports. The real markup lives escaped inside a `__bundler/template`
  script tag. **A fresh export from the design tool overwrites every fix made here**, including the
  form. Re-apply after any re-export, or make the fix in the design source too.
