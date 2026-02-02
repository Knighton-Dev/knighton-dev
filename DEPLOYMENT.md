# Vercel Deployment Guide

Complete guide for deploying Knighton Dev LLC website to Vercel.

## Quick Start

The fastest way to deploy is through the Vercel dashboard with GitHub integration.

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Import to Vercel

1. Go to https://vercel.com/new
2. Sign in with GitHub
3. Click "Import Project"
4. Select your `knighton-dev` repository
5. Vercel will auto-detect Next.js settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
6. Click "Deploy"

### Step 3: Add Custom Domain

1. After deployment, go to Project Settings → Domains
2. Add your domain: `knighton.dev`
3. Add www subdomain: `www.knighton.dev`
4. Vercel will provide DNS records

### Step 4: Configure DNS

Add these records to your domain registrar:

**For root domain (knighton.dev):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

DNS propagation typically takes 5-60 minutes.

## Alternative: Vercel CLI Deployment

### Install Vercel CLI

```bash
npm install -g vercel
```

### Login

```bash
vercel login
```

### Deploy to Preview

```bash
vercel
```

### Deploy to Production

```bash
vercel --prod
```

## Environment Variables

If you need environment variables (e.g., for API keys):

### Via Dashboard

1. Go to Project Settings → Environment Variables
2. Add variables for Production, Preview, and Development
3. Redeploy for changes to take effect

### Via CLI

```bash
vercel env add VARIABLE_NAME
```

## Continuous Deployment

Once connected to GitHub, Vercel automatically:

- **Production Deployments**: Every push to `main` branch
- **Preview Deployments**: Every push to other branches and PRs
- **Automatic HTTPS**: SSL certificates are automatically managed

## Build Settings

The `vercel.json` file is configured with optimal settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

## Monitoring & Analytics

### Enable Vercel Analytics

1. Go to your project dashboard
2. Navigate to Analytics tab
3. Enable Web Analytics
4. Add the following to your `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Enable Speed Insights

```bash
npm install @vercel/speed-insights
```

Add to layout:
```typescript
import { SpeedInsights } from '@vercel/speed-insights/next';
```

## Troubleshooting

### Build Fails

Check the build logs in Vercel dashboard:
```bash
# Test build locally
npm run build
```

### Domain Not Working

1. Verify DNS records are correct
2. Check DNS propagation: https://www.whatsmydns.net/
3. Ensure HTTPS is redirecting properly
4. Clear browser cache

### Deployment Rollback

In the Vercel dashboard:
1. Go to Deployments
2. Find the previous working deployment
3. Click "..." → "Promote to Production"

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic image optimization
- ✅ Edge caching
- ✅ Compression (Gzip/Brotli)
- ✅ HTTP/2 & HTTP/3

## Custom Configuration

### Edge Functions

To use Edge Runtime (faster cold starts):

```typescript
// app/api/route.ts
export const runtime = 'edge';
```

### Caching Headers

Add custom headers in `next.config.ts`:

```typescript
async headers() {
  return [
    {
      source: '/api/:path*',
      headers: [
        { key: 'Cache-Control', value: 's-maxage=3600' }
      ],
    },
  ];
}
```

## Security

Vercel provides:
- Automatic SSL/TLS certificates
- DDoS protection
- Web Application Firewall (on Pro plan)

### Security Headers

Add to `next.config.ts`:

```typescript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ];
}
```

## Costs

- **Hobby Plan**: Free for personal projects
  - Includes custom domain, HTTPS, and deployments
  - Perfect for this site

- **Pro Plan**: $20/month if you need:
  - Team collaboration
  - Advanced analytics
  - Password protection
  - More build minutes

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Community: https://github.com/vercel/next.js/discussions

## Useful Commands

```bash
# View deployment logs
vercel logs

# List all deployments
vercel ls

# Remove a deployment
vercel rm [deployment-url]

# View environment variables
vercel env ls

# Pull environment variables locally
vercel env pull
```

## CI/CD Pipeline

The repository includes a basic GitHub Actions workflow. Create `.github/workflows/vercel.yml` for custom CI/CD:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run lint
```

## Next Steps

After deployment:

1. ✅ Verify site loads at your domain
2. ✅ Test all links and forms
3. ✅ Check mobile responsiveness
4. ✅ Run Lighthouse audit
5. ✅ Set up monitoring/analytics
6. ✅ Configure email forwarding for `ian@knighton.dev`

---

For questions or issues, contact ian@knighton.dev
