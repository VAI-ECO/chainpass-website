# ChainPass website — releases

This repository preserves three distinct website versions. Exactly one is selected in the root
and exactly one is deployed to `chainpass.io`.

| Release | Purpose | Public status |
|---|---|---|
| `R1-no-video` | Launch site without video; one V.A.I.; six audited pages | Current launch |
| `R2-with-video` | Launch presentation with video surfaces | Held until videos are ready |
| `R3-three-levels` | Go / Access / Pro presentation | Held for the later tiered launch |

R2 and R3 must not be folded into R1. The owner’s 8 Sep 2026 launch ruling is one public V.A.I.;
Go and Access wait a few months.

## Select a release locally

```bash
./go-live.sh --status
./go-live.sh R1
./go-live.sh R2
./go-live.sh R3
./go-live.sh --back
```

`go-live.sh` copies the selected release directory into the repository root, compares every HTML
page with its release source, records the selection in `.live`, and preserves the previous selection
in `.live-prev`.

## Deploy

A push does not deploy. The production site runs in the `vai-chainpass-site` nginx container on the
Hetzner host recorded in `~/vai-workspaces/OPS-01_LIVE_STATE.md`.

```bash
./deploy-site.sh --what
./deploy-site.sh
./deploy-site.sh --back
```

The deploy script refuses a competing Traefik route, normalizes static-file permissions, verifies
the transferred homepage checksum, retains the previous image as `vai-chainpass-site:prev`, and then
swaps the container. After deployment, verify every page on the public domain.

## R1 launch behavior

- Public product: one V.A.I.
- Video: absent.
- Pages: Home, Features, API, FAQ, For Platforms, and Get Your V.A.I.
- Pricing: current annual price is displayed before enrollment; it is not hard-coded on the site.
- Forms: open prepared email messages until a server-side capture endpoint is activated; no false
  submission success is displayed.
- API: Built, Activation required, and Planned labels expose the actual delivery boundary.
- Vendor display: only the current verification path and infrastructure are shown.

## Updating a release

Edit the applicable `releases/R<n>-*/` directory and select it with `go-live.sh`; the root is a copy.
A fresh design export must be re-audited for links, form behavior, vendor claims, pricing, product
levels, endpoint status, JavaScript syntax, and responsive rendering before it replaces a release.
