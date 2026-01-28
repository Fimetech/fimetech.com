# Deployment Guide

Complete guide for deploying Fimetech website to Vercel with GitHub integration.

## Prerequisites

- [ ] GitHub account with repository access
- [ ] Vercel account (free tier is sufficient)
- [ ] Git installed locally
- [ ] Repository pushed to GitHub

---

## Quick Start (5 Minutes)

### Option 1: Deploy via Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Follow prompts:
# Set up and deploy? [Y/n] Y
# Which scope? [Your account]
# Link to existing project? [N]
# What's your project's name? fimetech
# In which directory is your code? ./
# Want to override settings? [N]
```

That's it! Vercel will:
1. Build your project
2. Deploy to production
3. Give you a URL: `https://fimetech.vercel.app`

### Option 2: Deploy via Vercel Dashboard (Recommended for GitHub Integration)

Follow the detailed steps below.

---

## Detailed Setup: GitHub + Vercel Integration

### Step 1: Prepare GitHub Repository

1. **Ensure your code is committed:**
   ```bash
   git status
   # If changes exist:
   git add .
   git commit -m "Prepare for deployment"
   ```

2. **Push to GitHub:**
   ```bash
   # If repository doesn't exist yet
   git remote add origin https://github.com/YOUR_USERNAME/fimetech.com.git
   git branch -M main
   git push -u origin main
   
   # If repository exists
   git push origin main
   ```

3. **Verify on GitHub:**
   - Go to `https://github.com/YOUR_USERNAME/fimetech.com`
   - Ensure `main` branch has your latest code

---

### Step 2: Connect Vercel to GitHub

1. **Go to [vercel.com/new](https://vercel.com/new)**

2. **Authorize GitHub:**
   - Click "Continue with GitHub"
   - Authorize Vercel to access your repositories
   - If first time: Install Vercel GitHub App

3. **Import Repository:**
   - Search for: `fimetech.com`
   - Click "Import"

---

### Step 3: Configure Project Settings

Vercel will auto-detect Next.js. Verify settings:

#### Build & Development Settings
```
Framework Preset:     Next.js (auto-detected)
Root Directory:       ./
Build Command:        npm run build (auto-detected)
Output Directory:     .next (auto-detected)
Install Command:      npm install (auto-detected)
Development Command:  npm run dev (auto-detected)
```

#### Environment Variables (Optional)
Currently not needed. Add later when implementing:
- Form submission (Resend API key)
- Analytics (Vercel Analytics)
- CMS integration (Sanity tokens)

**Leave empty for now.**

---

### Step 4: Deploy

1. **Click "Deploy"**
   - Vercel will:
     - Install dependencies
     - Run TypeScript checks
     - Build production bundle
     - Deploy to global CDN

2. **Wait 2-3 minutes**
   - Watch build logs in real-time
   - Look for: ✓ Build completed successfully

3. **Get your URL:**
   - Production: `https://fimetech.vercel.app`
   - Preview: Copy URL from dashboard

---

### Step 5: Configure Automatic Deployments

**This is automatic!** Vercel now:

✅ **Main Branch → Production**
- Every push to `main` triggers production deployment
- URL: `https://fimetech.vercel.app` (or your custom domain)

✅ **Feature Branches → Preview**
- Every push to any branch creates preview deployment
- URL: `https://fimetech-git-BRANCH_NAME-TEAM.vercel.app`

✅ **Pull Requests → Preview Comments**
- Vercel bot comments on PRs with preview URL
- Test changes before merging

---

### Step 6: Add Custom Domain (Optional)

1. **In Vercel Dashboard:**
   - Go to: Project Settings → Domains
   - Click "Add Domain"
   - Enter: `fimetech.com`

2. **Configure DNS at your registrar:**

   **Option A: Use Vercel Nameservers (Recommended)**
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

   **Option B: Use Custom DNS**
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   TTL: 3600
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

3. **SSL Certificate:**
   - Vercel automatically provisions SSL
   - HTTPS enabled within minutes
   - Auto-renewal included

4. **Verify:**
   - Wait 5-60 minutes for DNS propagation
   - Check: `https://fimetech.com`

---

## Deployment Workflow

### Daily Development

```bash
# Create feature branch
git checkout -b feature/update-hero

# Make changes, test locally
npm run dev

# Commit and push
git add .
git commit -m "Update hero animation timing"
git push origin feature/update-hero

# Vercel automatically creates:
# https://fimetech-git-feature-update-hero.vercel.app

# Share preview URL with team for review
```

### Deploy to Production

```bash
# After preview is approved, merge to main
git checkout main
git merge feature/update-hero
git push origin main

# Vercel automatically deploys to:
# https://fimetech.com (production)
```

### Rollback if Needed

In Vercel Dashboard:
1. Go to Deployments
2. Find previous working deployment
3. Click "⋯" → "Promote to Production"
4. Instant rollback complete

---

## Monitoring & Analytics

### Built-in Vercel Analytics

1. **Enable in Dashboard:**
   - Project Settings → Analytics
   - Toggle "Enable Analytics"

2. **Add to Code:**
   ```tsx
   // src/app/layout.tsx
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

### Vercel Speed Insights

Monitor Core Web Vitals:
```bash
npm install @vercel/speed-insights

# Add to layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
<SpeedInsights />
```

---

## Troubleshooting

### Build Fails on Vercel

1. **Check build logs** in Vercel dashboard
2. **Test locally:**
   ```bash
   npm run build
   # If it fails locally, fix errors first
   ```
3. **Common issues:**
   - TypeScript errors → Run `npm run lint`
   - Missing dependencies → Check `package.json`
   - Import errors → Verify file paths

### Preview URL Not Working

- Wait 2-3 minutes for deployment to complete
- Check Deployments tab for build status
- Verify branch was pushed successfully

### Custom Domain Not Working

- Verify DNS records are correct
- Wait up to 48 hours for DNS propagation (usually faster)
- Check domain status in Vercel dashboard
- Ensure domain is not parked or redirecting elsewhere

### Environment Variables Not Working

- Add variables in Vercel Dashboard → Settings → Environment Variables
- Redeploy after adding variables
- Use `NEXT_PUBLIC_` prefix for client-side variables

---

## Production Checklist

Before launching to custom domain:

- [ ] All pages load correctly on preview URL
- [ ] Mobile responsive on all breakpoints
- [ ] Forms work (if applicable)
- [ ] All links navigate correctly
- [ ] Images load properly
- [ ] Animations smooth on mobile
- [ ] SEO meta tags verified
- [ ] OG images display correctly
- [ ] Sitemap accessible: `/sitemap.xml`
- [ ] Robots.txt correct: `/robots.txt`
- [ ] No console errors in browser
- [ ] Lighthouse score 90+ on all metrics

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Custom Domains Guide](https://vercel.com/docs/concepts/projects/domains)

---

## Support

**Vercel Issues:**
- [Vercel Support](https://vercel.com/support)
- [Vercel Discord](https://vercel.com/discord)

**Project Issues:**
- Create issue on GitHub repository
- Contact: hello@fimetech.com
