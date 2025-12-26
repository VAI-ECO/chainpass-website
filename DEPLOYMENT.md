# Deployment Guide

This guide covers deploying the ChainPass site to various hosting platforms.

## Table of Contents

- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Vercel (Recommended)](#vercel-recommended)
- [Netlify](#netlify)
- [AWS S3 + CloudFront](#aws-s3--cloudfront)
- [GitHub Pages](#github-pages)
- [Custom Server](#custom-server)
- [Environment Configuration](#environment-configuration)
- [Post-Deployment](#post-deployment)

## Pre-Deployment Checklist

Before deploying, ensure:

### Content
- [ ] Replace trust badge placeholders with actual SVG logos
- [ ] Add ChainPass logo (replace "CP" placeholder)
- [ ] Replace hero image placeholder
- [ ] Add real video to VideoPlaceholder
- [ ] Review all copy for accuracy
- [ ] Test all external links

### Assets
- [ ] Generate PWA icons (72, 96, 128, 144, 152, 192, 384, 512px)
- [ ] Optimize images (WebP format, compressed)
- [ ] Add favicon (16x16, 32x32)
- [ ] Add Apple Touch Icon (180x180)

### Functionality
- [ ] Connect integration form to backend/email service
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Configure error tracking (Sentry, etc.)
- [ ] Test all routes
- [ ] Test mobile responsiveness
- [ ] Test PWA installation

### Build
- [ ] `npm run build` succeeds
- [ ] `npx tsc --noEmit` passes with no errors
- [ ] No console warnings in production build
- [ ] Test production build locally with `npm run preview`

## Vercel (Recommended)

Vercel provides the best DX for Vite projects with automatic deployments.

### Setup

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? `chainpass-splash`
   - Directory? `./` (press Enter)
   - Override settings? **N**

### Configuration

Create `vercel.json` in project root:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/sw.js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Custom Domain

1. Go to Vercel dashboard → Project → Settings → Domains
2. Add your custom domain (e.g., `chainpass.id`)
3. Configure DNS records as instructed by Vercel
4. Wait for SSL certificate to provision (automatic)

### Environment Variables

If needed (currently not required):
```bash
vercel env add VARIABLE_NAME
```

## Netlify

Netlify provides easy drag-and-drop deployment or Git integration.

### Option 1: Drag and Drop

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://netlify.com) and drag `dist/` folder

### Option 2: Git Integration

1. Push code to GitHub/GitLab/Bitbucket

2. Connect repository on Netlify:
   - New site from Git
   - Choose repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

### Configuration

Create `netlify.toml` in project root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"

[[headers]]
  for = "/sw.js"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

## AWS S3 + CloudFront

For enterprise deployments with AWS infrastructure.

### S3 Bucket Setup

1. Create S3 bucket:
   ```bash
   aws s3 mb s3://chainpass-splash
   ```

2. Enable static website hosting:
   ```bash
   aws s3 website s3://chainpass-splash \
     --index-document index.html \
     --error-document index.html
   ```

3. Set bucket policy:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::chainpass-splash/*"
       }
     ]
   }
   ```

4. Build and upload:
   ```bash
   npm run build
   aws s3 sync dist/ s3://chainpass-splash --delete
   ```

### CloudFront Distribution

1. Create CloudFront distribution pointing to S3 bucket
2. Set default root object: `index.html`
3. Configure custom error responses:
   - 404 → `/index.html` (status 200) - for client-side routing

4. Add custom domain and SSL certificate via ACM

### Deployment Script

Create `deploy-aws.sh`:
```bash
#!/bin/bash
npm run build
aws s3 sync dist/ s3://chainpass-splash --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## GitHub Pages

Good for demo/staging environments.

### Setup

1. Install `gh-pages` package:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/chainpass-splash"
   }
   ```

3. Update `vite.config.ts`:
   ```ts
   export default defineConfig({
     base: '/chainpass-splash/',
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

**Note:** GitHub Pages doesn't support client-side routing well. Consider using hash router or deploying elsewhere.

## Custom Server

For deploying to your own server.

### Build

```bash
npm run build
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name chainpass.id;

    root /var/www/chainpass/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Security headers
    add_header X-Frame-Options "DENY";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";

    # Client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Service worker - no cache
    location /sw.js {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    # Static assets - cache forever
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Apache Configuration

Create `.htaccess` in `dist/`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Frame-Options "DENY"
  Header set X-Content-Type-Options "nosniff"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript
</IfModule>

# Service worker - no cache
<FilesMatch "sw\.js$">
  Header set Cache-Control "no-cache, no-store, must-revalidate"
</FilesMatch>

# Static assets - cache
<FilesMatch "\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$">
  Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>
```

### Deployment Commands

```bash
# Build
npm run build

# Copy to server
scp -r dist/* user@server:/var/www/chainpass/

# Or use rsync
rsync -avz --delete dist/ user@server:/var/www/chainpass/
```

## Environment Configuration

### Analytics

Add to `index.html` before `</head>`:

**Google Analytics:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Plausible (privacy-friendly):**
```html
<script defer data-domain="chainpass.id" src="https://plausible.io/js/script.js"></script>
```

### Error Tracking

**Sentry:**
```bash
npm install @sentry/react
```

Add to `src/main.tsx`:
```tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production",
});
```

## Post-Deployment

### Testing

- [ ] Test all pages load correctly
- [ ] Test all links work
- [ ] Test form submissions
- [ ] Test PWA installation on mobile
- [ ] Test service worker caching
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test on multiple browsers
- [ ] Test on mobile devices

### SEO

- [ ] Submit sitemap to Google Search Console
- [ ] Add robots.txt
- [ ] Verify meta tags
- [ ] Test Open Graph tags
- [ ] Test Twitter Cards

### Monitoring

- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure error alerts
- [ ] Monitor analytics
- [ ] Set up performance monitoring

### Security

- [ ] Enable HTTPS (SSL certificate)
- [ ] Configure security headers
- [ ] Set up CSP (Content Security Policy) if needed
- [ ] Review CORS settings
- [ ] Enable DDoS protection (Cloudflare)

## Troubleshooting

### 404 on Refresh

**Problem:** Navigating to `/faq` directly returns 404.

**Solution:** Configure server rewrites (see platform-specific configs above).

### Service Worker Not Updating

**Problem:** Changes don't appear after deployment.

**Solution:**
1. Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
2. Clear service worker in DevTools → Application → Service Workers
3. Increment cache version in `sw.js`

### PWA Not Installing

**Problem:** Install prompt doesn't appear.

**Solution:**
1. Ensure HTTPS is enabled
2. Generate all required icon sizes
3. Validate `manifest.json`
4. Check service worker registration

### Performance Issues

**Problem:** Site loads slowly.

**Solution:**
1. Enable Gzip/Brotli compression
2. Use CDN (Cloudflare, AWS CloudFront)
3. Optimize images (WebP, compression)
4. Enable browser caching
5. Minify assets (already done by Vite)

---

For development instructions, see [DEVELOPMENT.md](./DEVELOPMENT.md).
For component reference, see [COMPONENTS.md](./COMPONENTS.md).
