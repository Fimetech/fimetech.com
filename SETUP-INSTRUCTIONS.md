# Quick Setup Instructions

Follow these steps to deploy Fimetech website to Vercel with automatic GitHub integration.

## Prerequisites

✅ GitHub repository created  
✅ Code pushed to GitHub  
✅ Vercel account (free)

---

## Option 1: Vercel Dashboard (Recommended - 5 Minutes)

This is the **easiest** method and provides full automation without any configuration.

### Steps:

1. **Go to [vercel.com/new](https://vercel.com/new)**

2. **Sign in with GitHub**
   - Click "Continue with GitHub"
   - Authorize Vercel

3. **Import Repository**
   - Find `fimetech.com` in the list
   - Click "Import"

4. **Configure (auto-detected)**
   ```
   Framework Preset: Next.js ✓
   Root Directory: ./ ✓
   Build Command: npm run build ✓
   Output Directory: .next ✓
   Install Command: npm install ✓
   ```
   
5. **Click "Deploy"**
   - Wait 2-3 minutes
   - Get your URL: `https://fimetech.vercel.app`

### ✨ That's It!

**Automatic Deployment is Now Active:**
- Push to `main` → Deploys to production
- Push to any branch → Creates preview deployment
- Open PR → Vercel bot comments with preview URL

---

## Option 2: Vercel CLI (Alternative - 2 Minutes)

For developers who prefer command line:

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy from project root
cd /Users/arsen/workspace/fimetech/fimetech.com
vercel

# Follow prompts (just press Enter to accept defaults)
```

---

## What Happens Next?

### Automatic Workflow:

```bash
# Example: Add a new feature
git checkout -b feature/new-animation
# ... make changes ...
git commit -m "Add hero animation"
git push origin feature/new-animation

# ✓ Vercel creates preview: 
#   https://fimetech-git-feature-new-animation.vercel.app

# Merge to main when ready
git checkout main
git merge feature/new-animation
git push origin main

# ✓ Vercel deploys to production:
#   https://fimetech.vercel.app
```

### Every Deployment:
- ✅ Runs TypeScript checks
- ✅ Builds production bundle
- ✅ Generates static pages
- ✅ Optimizes images
- ✅ Deploys to global CDN
- ✅ Generates unique URL
- ✅ Free SSL certificate

---

## Add Custom Domain (Optional)

After initial deployment:

1. **In Vercel Dashboard:**
   - Project Settings → Domains
   - Add: `fimetech.com`

2. **Update DNS:**
   ```
   A Record: @ → 76.76.19.61
   CNAME: www → cname.vercel-dns.com
   ```

3. **Wait 5-60 minutes** for DNS propagation

---

## Verify Deployment

Check these URLs after deployment:

```
https://YOUR-PROJECT.vercel.app/              # Homepage
https://YOUR-PROJECT.vercel.app/expertise     # Expertise
https://YOUR-PROJECT.vercel.app/lab           # Lab
https://YOUR-PROJECT.vercel.app/manifesto     # Manifesto
https://YOUR-PROJECT.vercel.app/connect       # Contact
https://YOUR-PROJECT.vercel.app/sitemap.xml   # Sitemap
https://YOUR-PROJECT.vercel.app/robots.txt    # Robots
```

---

## Troubleshooting

### Build Failed?
```bash
# Test locally first
npm run build

# If errors, fix them and push again
git add .
git commit -m "Fix build errors"
git push
```

### Need Help?
- Check `DEPLOYMENT.md` for detailed guide
- View build logs in Vercel dashboard
- [Vercel Support](https://vercel.com/support)

---

## Next Steps

1. ✅ Deploy to Vercel (follow Option 1 above)
2. ✅ Test all pages on preview URL
3. ✅ Configure custom domain (optional)
4. ✅ Share preview with team
5. ✅ Merge to main for production

---

**Ready to deploy? Go to [vercel.com/new](https://vercel.com/new) now!**
