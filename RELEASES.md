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

**To ship it:** drop the files into `media/` with the exact names in `media/README.md`, then say
*"videos are in, put R2 up."* That file holds the slot map, the markup, the compression rule and
the switch — the chair needs nothing else and should not ask.

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

## Changing copy or a section — the design-tool round trip

The releases are design-tool exports. To change a word or a section, change it in the design tool,
not in the HTML.

1. **Edit in the design tool.** Export.
2. **Replace the release file it came from** — `releases/R1-go-live.html`, R2 or R3. Keep the
   filename. Do not drop it on `index.html`; that is a copy and the next switch overwrites it.
3. **Re-apply the signup-form fix.** ⚠️ **A fresh export always ships the broken form back.** The
   design source has `submit: (e) => { e.preventDefault(); this.setState({ sent: true }); }` — no
   network call — showing *"Received. We will call you within one business day."* while storing
   nothing. Every export carries it until the design source itself is fixed.
   Check before shipping:

   ```bash
   grep -c "fetch(LEAD_ENDPOINT" releases/R1-go-live.html   # must be 1, not 0
   ```

4. **Switch and verify:** `./go-live.sh R1`
5. **Commit and push.**
6. **Deploy** — see `docs/global/DEPLOY.md`. The push alone does nothing.
7. **Prove it:** `curl -s "https://chainpass.io/?cb=$RANDOM" | head -c 200`

### Fix it once, in the design source

Step 3 repeats forever until the `submit` handler is changed **in the design tool**, so exports
come out correct. Until then every copy change silently reintroduces a form that tells platforms
they will get a call and loses the lead. That is the single highest-value thing to fix about this
site.

---

## How it goes live

**Hetzner. Not Azure, not Vercel, not Netlify** — those were pre-migration and their config files
have been deleted from this repo.

The site runs as a Docker container, `chainpass-website`, serving nginx, routed by Traefik.

**There is no auto-deploy. Pushing to `main` deploys nothing.** A commit is not a deployment. The
deploy is a manual step on the server, documented in `docs/global/DEPLOY.md`, and it clones
**`main`** — work on a branch ships nothing.

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
