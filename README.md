# ChainPass — website

The public ChainPass site. **Static HTML.** No framework, no build step, no server.

Start with **[STATE.md](./STATE.md)** — what this repo is, what works, what is blocked.
Then **[RELEASES.md](./RELEASES.md)** — the three releases and how to switch which one is live.

```
index.html          the live release — a COPY, never edited directly
releases/           the three finished versions
go-live.sh          switch which one is live, with rollback
public/             favicons, trust badges, partner logos
```

## Switch the live release

```bash
./go-live.sh --status     # what is live now
./go-live.sh R1           # make R1 live, byte-verified
./go-live.sh --back       # undo
```

Then commit and push. A switch that is not pushed has changed nothing.

## Hosting

**Hetzner.**

How files get from this repo to that box **is not documented anywhere**, including here. That gap
is real and is recorded in `STATE.md`. Do not guess it from leftover config.

This repo previously carried config for hosts it does not use — a GitHub Actions workflow for
Azure Static Web Apps, and a `vercel.json` from the Vite template it was built on. Both were
deleted on 31 Aug 2026 after they sent a session down the wrong path. If you find another such
file, it is a leftover: delete it rather than following it.

## History

Until 31 Aug 2026 this was a Vite + React + TypeScript SPA. That is gone. Anything you read
elsewhere about `src/`, `npm run build`, `dist/`, Tailwind config or component APIs is describing
the old repo. The docs that described it — `DEVELOPMENT.md`, `DEPLOYMENT.md`, `COMPONENTS.md`,
`CUSTOMIZATION.md` — were deleted with it.

The folder on the Mac is `chainpass-splash`. The repo is `chainpass-website`. They do not match.
