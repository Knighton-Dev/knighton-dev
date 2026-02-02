# Knighton Dev LLC - Marketing Website

Professional marketing website for Knighton Dev LLC, showcasing platform engineering, DevOps, and site reliability engineering services.

🌐 **Live Site**: [knighton.dev](https://knighton.dev)

## Overview

This is a Next.js-based marketing website built with TypeScript, Tailwind CSS, and optimized for deployment on Vercel. The site features a dark theme with forest service green accents and highlights 10+ years of experience in cloud migrations, Kubernetes, CI/CD, and infrastructure as code.

## Features

- 🎨 Dark mode design with forest green accent colors
- 📱 Fully responsive layout
- ⚡ Built with Next.js 15 and React 18
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 🚀 Optimized for Vercel deployment
- 📊 SEO optimized with metadata
- ♿ Accessible design

## Project Structure

```
knighton-dev/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer with links
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services offered
│   ├── Experience.tsx       # Work experience timeline
│   ├── Skills.tsx           # Technical skills
│   └── Contact.tsx          # Contact form
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vercel.json              # Vercel deployment configuration
└── package.json             # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/knighton-dev.git
cd knighton-dev
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

### Making Changes

1. Component files are in `/components`
2. Page routes are in `/app`
3. Global styles are in `/app/globals.css`
4. Tailwind configuration is in `tailwind.config.ts`

## Deployment to Vercel

### Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will automatically detect Next.js and configure everything
6. Click "Deploy"

Your site will be live at `your-project.vercel.app` and you can add your custom domain `knighton.dev` in the Vercel dashboard.

### Manual Deployment

If you prefer to deploy manually:

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Custom Domain Setup

1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Add `knighton.dev` and `www.knighton.dev`
4. Update your domain's DNS settings with the provided records:
   - Add an A record pointing to Vercel's IP
   - Add a CNAME record for www subdomain
5. Wait for DNS propagation (usually 5-60 minutes)

### Environment Variables

If you need to add environment variables (e.g., for contact form integration):

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your variables
3. Redeploy the application

## Customization

### Colors

The forest green theme can be customized in [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  forest: {
    50: '#f0f7f4',
    // ... modify these values
    900: '#1c382e',
  },
}
```

### Content

- Update services in [components/Services.tsx](components/Services.tsx)
- Modify experience in [components/Experience.tsx](components/Experience.tsx)
- Change skills in [components/Skills.tsx](components/Skills.tsx)
- Edit contact info in [components/Contact.tsx](components/Contact.tsx)

### Metadata & SEO

Update SEO metadata in [app/layout.tsx](app/layout.tsx):

```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  keywords: ["Your", "Keywords"],
};
```

## Performance

This site is optimized for performance:
- Static generation where possible
- Image optimization with Next.js Image component
- Minimal JavaScript bundle size
- CSS purging with Tailwind
- Vercel Edge Network CDN

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a personal business website, but suggestions are welcome! Please open an issue for discussions.

## License

© 2026 Knighton Dev LLC. All rights reserved.

## Contact

- **Email**: ian@knighton.dev
- **Phone**: +1 (208) 419-9489
- **LinkedIn**: [linkedin.com/in/probablynotian](https://linkedin.com/in/probablynotian)
- **Website**: [knighton.dev](https://knighton.dev)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
