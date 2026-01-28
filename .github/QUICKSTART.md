# Quick Start: Vercel CI/CD Setup

## What Was Created

✅ **`.github/workflows/preview.yaml`** - Deploys preview environments for all branches except `main`  
✅ **`.github/workflows/production.yaml`** - Deploys production for `main` branch  
✅ **`.github/SETUP_SECRETS.md`** - Detailed guide for getting and setting secrets

---

## Next Steps (5 Minutes)

### 1. Get Your Vercel Token

Go to: **https://vercel.com/account/tokens**

- Click **Create Token**
- Name: `GitHub Actions - fimetech.com`
- Scope: Full Account
- Click **Create** and **copy the token**

### 2. Link Your Project & Get IDs

```bash
cd /Users/arsen/workspace/fimetech/fimetech.com
vercel link
cat .vercel/project.json
```

You'll see:
```json
{
  "orgId": "team_xxxxx",
  "projectId": "prj_xxxxx"
}
```

### 3. Add Secrets to GitHub

Go to: **https://github.com/Fimetech/fimetech.com/settings/secrets/actions**

Click **New repository secret** for each:

| Name | Value |
|------|-------|
| `VERCEL_TOKEN` | [token from step 1] |
| `VERCEL_ORG_ID` | [orgId from step 2] |
| `VERCEL_PROJECT_ID` | [projectId from step 2] |

### 4. Push and Deploy

```bash
git push origin main
```

Go to: **https://github.com/Fimetech/fimetech.com/actions**

Watch your deployment! 🚀

---

## How It Works

### Main Branch → Production
```
git push origin main
  ↓
GitHub Actions triggers production.yaml
  ↓
Builds with: vercel build --prod
  ↓
Deploys to: https://fimetech.vercel.app (production)
```

### Feature Branch → Preview
```
git push origin feature/new-design
  ↓
GitHub Actions triggers preview.yaml
  ↓
Builds with: vercel build
  ↓
Deploys to: https://fimetech-git-feature-new-design.vercel.app
```

---

## Need More Details?

Read: **`.github/SETUP_SECRETS.md`** for comprehensive troubleshooting and explanations.

---

**Official Vercel Reference:**  
https://github.com/vercel/examples/tree/main/ci-cd/github-actions
