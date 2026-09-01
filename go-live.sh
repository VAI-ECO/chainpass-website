#!/usr/bin/env bash
# go-live.sh — switch the live release, reversibly.
#
#   ./go-live.sh R1        make R1 live
#   ./go-live.sh --status  what is live now
#   ./go-live.sh --back    roll back to the previous release
#
# Every switch records what was live before it, so there is always a way back.
# RULES §19: a switch is not done until the file it claims to have written matches.

set -euo pipefail
cd "$(dirname "$0")"

STATE=".live"          # name of the release currently live
PREV=".live-prev"      # name of the release live before that
BACKUPS="backup-live"  # byte-for-byte copies, one per switch

usage() { sed -n '2,9p' "$0" | sed 's/^# \{0,1\}//'; exit "${1:-1}"; }

status() {
  if [[ -f "$STATE" ]]; then
    echo "live: $(cat "$STATE")"
  else
    echo "live: unknown (no $STATE yet)"
  fi
  [[ -f "$PREV" ]] && echo "prev: $(cat "$PREV")" || true
  [[ -f index.html ]] && echo "index.html: $(wc -c < index.html) bytes" || echo "index.html: MISSING"
}

# Copy $1 to index.html and refuse to claim success unless the bytes match.
publish() {
  local src="$1"
  cp "$src" index.html
  if ! cmp -s "$src" index.html; then
    echo "FAILED: index.html does not match $src — nothing is guaranteed live." >&2
    exit 1
  fi
}

case "${1:-}" in
  ""|-h|--help) usage 0 ;;

  --status) status; exit 0 ;;

  --back)
    [[ -f "$PREV" ]] || { echo "No previous release recorded — nothing to roll back to." >&2; exit 1; }
    target="$(cat "$PREV")"
    snap="$BACKUPS/$target.html"
    [[ -f "$snap" ]] || { echo "No snapshot for $target at $snap" >&2; exit 1; }
    current="$(cat "$STATE" 2>/dev/null || echo unknown)"
    publish "$snap"
    echo "$target" > "$STATE"
    echo "$current" > "$PREV"
    echo "rolled back: $current -> $target (verified)"
    ;;

  *)
    name="$1"
    matches=( releases/"$name"-*.html )
    [[ -e "${matches[0]}" ]] || { echo "No release matching releases/$name-*.html" >&2; exit 1; }
    (( ${#matches[@]} == 1 )) || { echo "Ambiguous: ${matches[*]}" >&2; exit 1; }
    src="${matches[0]}"

    mkdir -p "$BACKUPS"
    # Snapshot whatever is live right now, under its own name, before overwriting.
    if [[ -f index.html ]]; then
      current="$(cat "$STATE" 2>/dev/null || echo pre-rollback)"
      cp index.html "$BACKUPS/$current.html"
      echo "$current" > "$PREV"
    fi

    publish "$src"
    cp "$src" "$BACKUPS/$name.html"
    echo "$name" > "$STATE"
    echo "live: $name (verified, $(wc -c < index.html) bytes)"
    echo "roll back with: ./go-live.sh --back"
    ;;
esac
