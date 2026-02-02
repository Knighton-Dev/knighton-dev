# Quick Start Guide

Get your Knighton Dev LLC website up and running in minutes.

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- Git
- Vercel account (free)

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit http://localhost:3000

### 3. Make Your Changes
- Edit components in `/components`
- Modify pages in `/app`
- Customize colors in `tailwind.config.ts`

### 4. Build for Production
```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Import your repository
   - Click "Deploy"

3. **Add Custom Domain**
   - Project Settings → Domains
   - Add `knighton.dev`
   - Update DNS with provided records

### Option 2: Vercel CLI

```bash
# Install CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## Customization Checklist

- [ ] Update contact information in [components/Contact.tsx](components/Contact.tsx)
- [ ] Modify services in [components/Services.tsx](components/Services.tsx)
- [ ] Update experience timeline in [components/Experience.tsx](components/Experience.tsx)
- [ ] Customize skills in [components/Skills.tsx](components/Skills.tsx)
- [ ] Adjust colors in [tailwind.config.ts](tailwind.config.ts)
- [ ] Add your logo to `/public`
- [ ] Update metadata in [app/layout.tsx](app/layout.tsx)

## DNS Configuration

Point your domain to Vercel:

```
# A Record
Type: A
Name: @
Value: 76.76.21.21

# CNAME Record
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Troubleshooting

### Port 3000 in use
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Dependencies issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. ✅ Local development working
2. ✅ Push to GitHub
3. ✅ Deploy to Vercel
4. ✅ Configure custom domain
5. ✅ Test on mobile devices
6. ✅ Run Lighthouse audit
7. ✅ Set up email forwarding

## Support

- Documentation: [README.md](README.md)
- Deployment: [DEPLOYMENT.md](DEPLOYMENT.md)
- Email: ian@knighton.dev

---

**Need help?** Open an issue or contact ian@knighton.dev
