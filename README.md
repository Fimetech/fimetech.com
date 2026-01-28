# Fimetech Website

Elite engineering consultancy website built with Next.js 16, TypeScript, and Tailwind CSS 4.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React Server Components)
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 4 + CSS Modules
- **Motion:** Framer Motion 12
- **Content:** MDX for case studies
- **Fonts:** Geist, Inter, JetBrains Mono (Google Fonts)

## Design Philosophy

"Engineered Minimalism" — Glass & Steel aesthetic with glassmorphism effects, animated gradient mesh, and smooth scroll-triggered animations.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Project Structure

```
fimetech.com/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── page.tsx           # Homepage (Hero, Services, TechTicker, Lab, CTA)
│   │   ├── expertise/         # Expertise pages (AI/ML, Embedded, Robotics)
│   │   ├── lab/               # Case studies / project showcase
│   │   ├── manifesto/         # Company philosophy & values
│   │   └── connect/           # Contact page
│   ├── components/
│   │   ├── sections/          # Homepage sections
│   │   ├── layout/            # Header, Footer
│   │   ├── motion/            # Animation components
│   │   └── ui/                # Reusable UI primitives
│   └── lib/
│       ├── constants.ts       # Site config, navigation, services
│       ├── projects.ts        # Case study data
│       └── utils.ts           # Utility functions
└── public/                    # Static assets
```

## Key Features

- **Scroll-based Storytelling:** 5-block homepage with parallax and reveals
- **Glassmorphism UI:** Dark theme with frosted glass effects
- **Animated Gradient Mesh:** Mouse-reactive hero background
- **Tech Ticker:** Infinite scrolling technology showcase
- **Responsive Design:** Mobile-first with smooth transitions
- **SEO Optimized:** Dynamic sitemap, robots.txt, Open Graph images
- **Accessibility:** WCAG 2.1 AA compliant, reduced motion support

## Deployment

### Automatic Deployment with Vercel + GitHub

This project is configured for automatic deployment to Vercel when changes are pushed to the `main` branch.

#### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/fimetech.com.git
git branch -M main
git push -u origin main
```

#### Step 2: Connect to Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign up/login with GitHub
2. **Click "Add New Project"**
3. **Import your GitHub repository:** `YOUR_USERNAME/fimetech.com`
4. **Configure project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)
5. **Environment Variables** (if needed):
   - Add any required environment variables
   - For now, leave empty (form submission can be added later)
6. **Click "Deploy"**

#### Step 3: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to **Project Settings → Domains**
2. **Add domain:** `fimetech.com`
3. **Update DNS records** at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Wait for DNS propagation (5-60 minutes)

#### Automatic Deployment Workflow

Once connected, Vercel automatically:
- ✅ **Deploys `main` branch** to production (fimetech.com)
- ✅ **Creates preview deployments** for every PR
- ✅ **Runs builds** on every commit
- ✅ **Generates unique URLs** for each deployment
- ✅ **Enables instant rollbacks** if needed

```bash
# Example workflow
git checkout -b feature/new-design
# Make changes...
git commit -m "Update hero animation"
git push origin feature/new-design
# Vercel creates: https://fimetech-git-feature-new-design.vercel.app

# After review, merge to main
git checkout main
git merge feature/new-design
git push origin main
# Vercel deploys to production: https://fimetech.com
```

## Development

### Available Scripts

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Environment Variables

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

## Performance

- **Lighthouse Score Target:** 100/100
- **Zero Layout Shift:** All images with width/height
- **Minimal JS:** CSS animations where possible
- **Code Splitting:** Automatic per-route
- **Font Loading:** Optimized with `next/font`

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 15+)
- Chrome Android (last 2 versions)

## License

© 2026 Fimetech. All rights reserved.
