#!/usr/bin/env bash
# go-live.sh — switch the live release, reversibly.
#   ./go-live.sh R1|R2|R3   ./go-live.sh --status   ./go-live.sh --back
set -euo pipefail
cd "$(dirname "$0")"
STATE=.live; PREV=.live-prev
pages() { ls releases/"$1"*/ >/dev/null 2>&1 && echo releases/"$1"*/; }
status() {
  [[ -f $STATE ]] && echo "live: $(cat $STATE)" || echo "live: unknown"
  [[ -f $PREV ]] && echo "prev: $(cat $PREV)" || true
  [[ -f index.html ]] && echo "index.html: $(wc -c < index.html) bytes" || echo "index.html: MISSING"
}
publish() {
  local d="$1"
  rm -f ./*.html
  cp -a "$d"/. .
  for f in "$d"/*.html; do
    cmp -s "$f" "$(basename "$f")" || { echo "FAILED: $(basename "$f") does not match $f" >&2; exit 1; }
  done
}
case "${1:-}" in
  ""|-h|--help) echo "usage: ./go-live.sh R1|R2|R3 | --status | --back"; exit 0 ;;
  --status) status ;;
  --back)
    [[ -f $PREV ]] || { echo "No previous release recorded." >&2; exit 1; }
    t=$(cat $PREV); d=$(pages "$t") || { echo "No release $t" >&2; exit 1; }
    c=$(cat $STATE 2>/dev/null || echo unknown)
    publish "$d"; echo "$t" > $STATE; echo "$c" > $PREV
    echo "rolled back: $c -> $t (verified)" ;;
  *)
    t="$1"; d=$(pages "$t") || { echo "No release matching releases/$t*" >&2; exit 1; }
    [[ -f $STATE ]] && cat $STATE > $PREV || true
    publish "$d"; echo "$t" > $STATE
    echo "live: $t (verified, $(ls ./*.html | wc -l) pages, $(wc -c < index.html) bytes)"
    echo "roll back with: ./go-live.sh --back" ;;
esac
