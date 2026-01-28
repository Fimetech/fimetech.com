# GitHub Secrets Setup for Vercel CI/CD

This guide will help you configure the required secrets for the GitHub Actions workflows to deploy to Vercel.

## Required Secrets

You need to add **3 secrets** to your GitHub repository:

1. `VERCEL_TOKEN` - Authentication token for Vercel CLI
2. `VERCEL_ORG_ID` - Your Vercel organization/team ID
3. `VERCEL_PROJECT_ID` - Your specific project ID

---

## Step 1: Get Your Vercel Access Token

### Option A: Via Vercel Dashboard (Recommended)

1. Go to [Vercel Account Tokens](https://vercel.com/account/tokens)
2. Click **Create Token**
3. Give it a name: `GitHub Actions - fimetech.com`
4. Set scope: **Full Account** (or select specific scopes if you prefer)
5. Set expiration: Choose based on your security policy (or no expiration)
6. Click **Create Token**
7. **Copy the token immediately** - you won't see it again!

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to your Vercel account
vercel login

# Create a token (this will open your browser)
# Then go to: https://vercel.com/account/tokens
```

⚠️ **Save this token securely** - you'll need it in Step 3.

---

## Step 2: Get Your Organization and Project IDs

### Method 1: Link Your Project (Easiest)

```bash
# Navigate to your project directory
cd /Users/arsen/workspace/fimetech/fimetech.com

# Link to your Vercel project (or create a new one)
vercel link

# Follow the prompts:
# ? Set up and link to existing project? [Y/n] Y
# ? Which scope should contain your project? [Select your account/team]
# ? Link to existing project? [Y/n] Y (or N to create new)
# ? What's your project's name? fimetech

# This creates a .vercel folder with project.json
```

### Method 2: Extract from .vercel/project.json

After running `vercel link`, check the file:

```bash
cat .vercel/project.json
```

You'll see something like:

```json
{
  "orgId": "team_xxxxxxxxxxxxxxxxxxxxxxxx",
  "projectId": "prj_xxxxxxxxxxxxxxxxxxxxxxxx"
}
```

### Method 3: Get from Vercel Dashboard

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: `fimetech`
3. Go to **Settings** → **General**
4. Scroll down to find:
   - **Project ID**: `prj_...`
   - **Team ID** (or Org ID): `team_...` (visible in the URL or settings)

---

## Step 3: Add Secrets to GitHub

1. **Go to your GitHub repository:**

   ```
   https://github.com/Fimetech/fimetech.com
   ```

2. **Navigate to Settings:**
   - Click **Settings** tab (top navigation)
   - Click **Secrets and variables** → **Actions** (left sidebar)

3. **Add Repository Secrets:**

   Click **New repository secret** for each:

   **Secret 1: VERCEL_TOKEN**
   - Name: `VERCEL_TOKEN`
   - Secret: `[paste your Vercel access token from Step 1]`
   - Click **Add secret**

   **Secret 2: VERCEL_ORG_ID**
   - Name: `VERCEL_ORG_ID`
   - Secret: `[paste your orgId from Step 2]`
   - Click **Add secret**

   **Secret 3: VERCEL_PROJECT_ID**
   - Name: `VERCEL_PROJECT_ID`
   - Secret: `[paste your projectId from Step 2]`
   - Click **Add secret**

4. **Verify secrets are added:**
   - You should see 3 secrets listed
   - You won't be able to view their values (they're encrypted)

---

## Step 4: Test the Workflow

### Test Production Deployment

```bash
# Commit and push to main branch
git add .
git commit -m "Set up Vercel CI/CD with GitHub Actions"
git push origin main
```

### Test Preview Deployment

```bash
# Create a test branch
git checkout -b test/ci-cd

# Make a small change (e.g., add a comment)
echo "<!-- CI/CD test -->" >> src/app/page.tsx

# Commit and push
git add .
git commit -m "Test preview deployment"
git push origin test/ci-cd
```

### Monitor Workflow Execution

1. Go to your GitHub repository
2. Click **Actions** tab
3. You should see:
   - ✅ "GitHub Actions Vercel Production Deployment" (for main branch)
   - ✅ "GitHub Actions Vercel Preview Deployment" (for test branch)

---

## Step 5: Verify Deployments

### Check GitHub Actions Logs

1. Click on a workflow run in the Actions tab
2. Expand each step to see:
   - Vercel CLI installation
   - Environment information pull
   - Build artifacts
   - Deployment URL

### Check Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your `fimetech` project
3. You should see:
   - **Production deployment** from `main` branch
   - **Preview deployment** from `test/ci-cd` branch (if you created one)

---

## Troubleshooting

### Error: "No credentials found"

- **Solution**: Check that `VERCEL_TOKEN` is set correctly in GitHub Secrets
- Verify the token is valid and not expired

### Error: "Project not found"

- **Solution**: Check that `VERCEL_PROJECT_ID` matches your project
- Run `vercel link` again to get the correct project ID

### Error: "Unauthorized" or "Invalid org"

- **Solution**: Check that `VERCEL_ORG_ID` is correct
- If you're part of a team, use the team ID, not your personal account ID

### Build Fails

- **Solution**: Test the build locally first:
  ```bash
  npm install
  npm run build
  ```
- Check for TypeScript errors, linting issues, or missing dependencies

### Deployment Succeeds but Site Not Updated

- **Solution**: Check Vercel dashboard to see if deployment was promoted to production
- For main branch, it should automatically be production
- Clear your browser cache

---

## Security Best Practices

1. ✅ **Never commit secrets** to your repository
2. ✅ **Use tokens with minimal required scopes**
3. ✅ **Rotate tokens periodically**
4. ✅ **Set token expiration** if your security policy requires it
5. ✅ **Revoke unused tokens** from [Vercel account settings](https://vercel.com/account/tokens)

---

## Additional Notes

### Why Two Workflow Files?

Following [Vercel's official pattern](https://github.com/vercel/examples/tree/main/ci-cd/github-actions):

- **`preview.yaml`**: Runs on all branches **except** main → Creates preview deployments
- **`production.yaml`**: Runs **only** on main branch → Creates production deployments

This separation provides:

- ✅ Clear separation of concerns
- ✅ Different build/deploy strategies per environment
- ✅ Easier debugging (separate logs per environment)

### Disabling Vercel's Auto-Deploy

If you're using GitHub Actions for CI/CD, you should disable Vercel's automatic Git integration to avoid duplicate deployments:

1. Go to your project settings in Vercel Dashboard
2. Navigate to **Git** section
3. Click **Disconnect** under the Git Integration section

Alternatively, keep both active if you want redundancy.

---

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Vercel Examples Repository](https://github.com/vercel/examples/tree/main/ci-cd/github-actions)

---

**Ready to deploy?** Follow Steps 1-4 above and you'll be live in minutes! 🚀
