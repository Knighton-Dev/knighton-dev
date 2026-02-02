# Knighton Dev LLC Website

A modern marketing website for Knighton Dev LLC built with Next.js 14, Tailwind CSS, and TypeScript. Hosted on Vercel at [knighton.dev](https://knighton.dev).

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Dark Mode Design**: Professional dark theme with Forest Service Green (#228B22) accents
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance**: Optimized for Core Web Vitals
- **Accessibility**: Built with accessibility best practices

## 📁 Project Structure

```
knighton-dev/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── layout.tsx        # Root layout with Navbar/Footer
│   │   ├── globals.css       # Global styles and CSS variables
│   │   ├── services/
│   │   │   └── page.tsx      # Services page
│   │   ├── about/
│   │   │   └── page.tsx      # About page
│   │   └── contact/
│   │       └── page.tsx      # Contact page
│   └── components/
│       ├── Navbar.tsx        # Navigation component
│       ├── Footer.tsx        # Footer component
│       └── ContactForm.tsx   # Contact form component
├── public/                   # Static assets
├── vercel.json              # Vercel configuration
├── tailwind.config.ts       # Tailwind configuration
└── .github/
    └── workflows/
        └── deploy.yml        # GitHub Actions CI/CD
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🚀 Deployment to Vercel

### Option 1: One-Click Deploy (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/knighton-dev)

### Option 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Option 3: GitHub Integration (CI/CD)

1. **Connect your GitHub repository to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js settings

2. **Set up GitHub Actions (Optional)**:
   
   The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) for automated deployments.

   **Required Secrets**:
   - `VERCEL_TOKEN`: Get from [Vercel Settings > Tokens](https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID`: Found in `.vercel/project.json` after running `vercel link`
   - `VERCEL_PROJECT_ID`: Found in `.vercel/project.json` after running `vercel link`

   **To set up**:
   ```bash
   # Link your project to Vercel
   vercel link
   
   # This creates .vercel/project.json with orgId and projectId
   cat .vercel/project.json
   ```

   Add these values as secrets in your GitHub repository settings.

### Custom Domain Setup

1. Go to your Vercel project dashboard
2. Navigate to "Settings" > "Domains"
3. Add `knighton.dev`
4. Configure your DNS:
   - Add an `A` record pointing to `76.76.21.21`
   - Or add a `CNAME` record pointing to `cname.vercel-dns.com`

## 🎨 Customization

### Colors

The color scheme uses CSS variables defined in `globals.css`:

```css
:root {
  --color-primary: #228B22;        /* Forest Service Green */
  --color-primary-light: #2ea82e;
  --color-primary-dark: #1a6b1a;
  --color-bg-primary: #0a0a0a;
  --color-bg-secondary: #111111;
  /* ... more colors */
}
```

### Content

- **Company Info**: Update in `src/app/layout.tsx` metadata
- **Services**: Edit `src/app/services/page.tsx`
- **About Content**: Edit `src/app/about/page.tsx`
- **Contact Info**: Edit `src/app/contact/page.tsx`
- **Social Links**: Edit `src/components/Footer.tsx`

## 📧 Contact Form

The contact form currently uses a `mailto:` link as a fallback. To enable server-side form handling:

1. **Option A: Formspree**
   - Sign up at [formspree.io](https://formspree.io)
   - Update `ContactForm.tsx` with your form endpoint

2. **Option B: Vercel Functions**
   - Create an API route at `src/app/api/contact/route.ts`
   - Integrate with email service (SendGrid, Resend, etc.)

## 📝 License

© 2026 Knighton Dev LLC. All rights reserved.
