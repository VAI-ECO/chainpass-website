#!/bin/bash
# deploy-site.sh — put the live ChainPass release on chainpass.io.
#
# The repo root IS the live release (go-live.sh copies a release into root and
# records it in .live). This ships the root static files to the same Hetzner box
# that already serves chainpass.io, behind Coolify/Traefik.
#
# STATE.md says deploys go via GitHub Actions -> Azure Static Web Apps. That
# workflow does not exist in this repo or on origin, so nothing has ever
# deployed. This script is the direct path; restoring the Azure workflow later
# replaces it.
#
#   ./deploy-site.sh            # deploy whatever .live points at (root files)
#   ./deploy-site.sh --what     # show what is on the box now, change nothing
#   ./deploy-site.sh --back     # roll back to the previous image
set -euo pipefail
cd "$(dirname "$0")"

KEY=~/.ssh/id_ed25519_hetzner
BOX=root@2.28.18.138
NAME=vai-chainpass-site
DOMAIN=chainpass.io

if [[ "${1:-}" == "--what" ]]; then
  echo "containers on the box routing $DOMAIN:"
  ssh -i $KEY $BOX "docker ps --format '{{.Names}}\t{{.Image}}\t{{.Status}}' | sed 's/^/   /'
    echo '   -- traefik host rules --'
    docker ps -q | xargs -r docker inspect --format '{{.Name}} {{index .Config.Labels \"traefik.http.routers.\"}}' 2>/dev/null | grep -i chainpass || true
    docker ps -q | xargs -r docker inspect --format '{{.Name}} {{range \$k,\$v := .Config.Labels}}{{if eq \$k \"traefik.enable\"}}{{end}}{{end}}{{range \$k,\$v := .Config.Labels}}{{\$v}} {{end}}' 2>/dev/null | grep -i 'chainpass.io' | sed 's/^/   /' || true"
  exit 0
fi

if [[ "${1:-}" == "--back" ]]; then
  echo "rolling back $NAME to :prev"
  ssh -i $KEY $BOX "docker image inspect $NAME:prev >/dev/null 2>&1 || { echo 'No :prev image on the box.'; exit 1; }
    docker stop $NAME >/dev/null 2>&1 || true
    docker rm   $NAME >/dev/null 2>&1 || true
    docker tag $NAME:prev $NAME:latest
    docker run -d --name $NAME --network coolify \
      --label 'coolify.managed=true' \
      --label 'traefik.enable=true' \
      --label 'traefik.http.routers.$NAME.rule=Host(\`$DOMAIN\`) || Host(\`www.$DOMAIN\`)' \
      --label 'traefik.http.routers.$NAME.entrypoints=http,https' \
      --label 'traefik.http.routers.$NAME.tls=true' \
      --label 'traefik.http.routers.$NAME.tls.certresolver=letsencrypt' \
      $NAME:latest >/dev/null
    sleep 3; docker ps --filter name=$NAME --format '   {{.Names}} {{.Status}}'"
  echo "rolled back."
  exit 0
fi

test -f index.html || { echo "No index.html in repo root. Run ./go-live.sh R1 first."; exit 1; }
echo "live release: $(cat .live 2>/dev/null || echo unknown)   index.html: $(wc -c <index.html) bytes"

echo "0/4 checking nothing else already claims $DOMAIN"
CLAIMANTS=$(ssh -i $KEY $BOX "docker inspect \$(docker ps -q) 2>/dev/null \
  | grep -E '\"Name\": \"/|Host\(' \
  | grep -B1 'Host(\`$DOMAIN\`)' \
  | grep '\"Name\"' | sed 's/.*\"\\/\\(.*\\)\",*/\\1/' | grep -v '^$NAME\$' || true")
if [[ -n "$CLAIMANTS" ]]; then
  echo "STOP. These containers already route $DOMAIN:"
  echo "$CLAIMANTS" | sed 's/^/   /'
  echo "Two routers on one host makes Traefik reject both and the site goes dark."
  echo "Stop the old one first:  ssh -i $KEY $BOX \"docker stop <name>\""
  echo "Nothing was changed."
  exit 1
fi
echo "   clear — only $NAME will claim $DOMAIN"

echo "1/4 building the config locally, then pushing"
# Generated HERE, not over ssh. Quoting $uri through bash -> ssh -> sh -> printf
# ate the variable and left `try_files /index.html;`, which makes nginx redirect
# /index.html to itself and return 500. That took vairify.io down on 3 Sep.
# Never build this file remotely.
STAGE=$(mktemp -d)
trap 'rm -rf "$STAGE"' EXIT
mkdir -p "$STAGE/site"
rsync -a \
  --exclude '.git' --exclude 'releases' --exclude 'node_modules' \
  --exclude '*.md' --exclude 'go-live.sh' --exclude 'deploy-site.sh' \
  --exclude '.live' --exclude '.live-prev' --exclude '.gitignore' \
  ./ "$STAGE/site/"

# The repo files are mode 600 on the Mac and rsync -a preserves that. nginx runs
# as the `nginx` user and cannot read them -> 403 Forbidden. Normalise before build.
find "$STAGE/site" -type d -exec chmod 755 {} +
find "$STAGE/site" -type f -exec chmod 644 {} +
echo "   permissions normalised (dirs 755, files 644)"

cat > "$STAGE/nginx.conf" <<NGINX
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    root /usr/share/nginx/html;
    index index.html;
    location / {
        try_files \$uri \$uri/ \$uri.html =404;
    }
}
NGINX

cat > "$STAGE/Dockerfile.deploy" <<'DOCKER'
FROM nginx:alpine
COPY site /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
DOCKER

grep -q 'try_files \$uri' "$STAGE/nginx.conf" || { echo "FAILED: nginx.conf lost \$uri"; exit 1; }
echo "   config OK: try_files intact"
echo "   pages: $(ls "$STAGE/site"/*.html 2>/dev/null | wc -l | tr -d ' ')"

ssh -i $KEY $BOX "rm -rf /tmp/$NAME && mkdir -p /tmp/$NAME"
rsync -a -e "ssh -i $KEY" "$STAGE"/ $BOX:/tmp/$NAME/

echo "2/4 verifying the bytes arrived intact"
LOCAL=$(md5 -q index.html 2>/dev/null || md5sum index.html | cut -d' ' -f1)
REMOTE=$(ssh -i $KEY $BOX "md5sum /tmp/$NAME/site/index.html | cut -d' ' -f1")
[[ "$LOCAL" == "$REMOTE" ]] || { echo "FAILED: checksum mismatch ($LOCAL vs $REMOTE)"; exit 1; }
echo "   index.html matches: $LOCAL"

echo "3/4 building the image (keeping the current one as :prev)"
ssh -i $KEY $BOX "cd /tmp/$NAME
  grep -q 'try_files \\\$uri' nginx.conf || { echo 'FAILED: nginx.conf on the box lost \$uri'; exit 1; }
  docker image inspect $NAME:latest >/dev/null 2>&1 && docker tag $NAME:latest $NAME:prev || true
  docker build -q -f Dockerfile.deploy -t $NAME:latest . >/dev/null"

echo "4/4 swapping the container"
ssh -i $KEY $BOX "docker stop $NAME >/dev/null 2>&1 || true
  docker rm $NAME >/dev/null 2>&1 || true
  docker run -d --name $NAME --network coolify \
    --label 'coolify.managed=true' \
    --label 'traefik.enable=true' \
    --label 'traefik.http.routers.$NAME.rule=Host(\`$DOMAIN\`) || Host(\`www.$DOMAIN\`)' \
    --label 'traefik.http.routers.$NAME.entrypoints=http,https' \
    --label 'traefik.http.routers.$NAME.tls=true' \
    --label 'traefik.http.routers.$NAME.tls.certresolver=letsencrypt' \
    $NAME:latest >/dev/null
  sleep 3
  docker ps --filter name=$NAME --format '   {{.Names}} {{.Status}}'"

echo
echo "Verifying what https://$DOMAIN now serves:"
sleep 4
curl -s "https://$DOMAIN/?cb=$RANDOM" | head -c 400 | grep -oiE '<title>[^<]*</title>|Unpacking' | head -1 | sed 's/^/   /'
echo "   roll back with: ./deploy-site.sh --back"
