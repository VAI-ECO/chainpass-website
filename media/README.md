# media — drop videos here

Put the files in this folder with these exact names, then tell the chair
**"videos are in, put R2 up."** Everything below is what it does — it needs no further instruction
and should not ask for any.

---

## The three files

| File | Goes in section | Which part of the page |
|---|---|---|
| `how-video.mp4` | `#how-video` | after "KYC SECURE + CHAINPASS PRIVACY" |
| `cases-video.mp4` | `#cases-video` | after "ChainPass Provides the Technology. Your Platform Defines the Experience" |
| `compliance-video.mp4` | `#compliance-video` | in the compliance section |

Optional, same base name — a still shown before play, worth adding because the videos are large:

```
how-video.jpg · cases-video.jpg · compliance-video.jpg
```

Names are fixed. A file named anything else is not wired to anything.

---

## What the chair does with them

**Edit `releases/R2-go-live-video.html` only.** Not `index.html` — that is a copy and gets
overwritten by the next switch. Not R1, not R3.

R2 is a design-tool export: the real markup is one JSON-encoded string inside a
`<script type="__bundler/template">` tag. To edit it, decode the string, change it, re-encode, and
escape `</` as `</` — miss that and the page breaks silently. `RELEASES.md` covers this.

Inside each of the three sections, add:

```html
<video controls preload="none" playsinline
       poster="media/how-video.jpg"
       style="width:100%;height:auto;display:block">
  <source src="media/how-video.mp4" type="video/mp4">
</video>
```

- `preload="none"` — the page is already 3MB. Do not make every visitor download three videos
  before deciding to watch one.
- `playsinline` — without it iOS hijacks the page into fullscreen on play.
- Omit `poster` if there is no still for that slot. Do not invent one.

Then switch and deploy:

```bash
./go-live.sh R2
git add -A && git commit -m "R2 live with video" && git push
```

Then follow `docs/global/DEPLOY.md` — **the push alone deploys nothing.**

---

## Rules

1. **All three or none.** R2 is called "with video". A filled slot beside two empty ones is worse
   than R1, which promises nothing. If only one video exists, R2 does not ship.
2. **Play each one in a browser before calling it done.** A `<video>` tag that renders is not a
   video that plays — wrong codec, wrong path and zero-byte files all render as an empty black box.
   §19: prove it crossed the boundary it claims.
3. **Never commit a video that has not been compressed.** These land in a Docker image that is
   rebuilt on every deploy. A 200MB video makes every future deploy slower, permanently, and git
   keeps it forever even after deletion.
4. **Do not edit `index.html`.** Edit the release, then switch.
5. **Do not re-export R2 from the design tool.** The signup form fix lives in the export and a
   fresh one overwrites it.

---

## Rollback

```bash
./go-live.sh --back
```

Returns to R1, byte-verified, then deploy again.
