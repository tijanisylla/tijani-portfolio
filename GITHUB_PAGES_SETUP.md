# GitHub Pages Deployment Guide

## Quick Setup

### 1. Install gh-pages

```bash
cd frontend
npm install --save-dev gh-pages
# or
yarn add -D gh-pages
```

### 2. Deploy to GitHub Pages

```bash
cd frontend
npm run deploy
# or
yarn deploy
```

This will:
- Build your React app
- Create a `gh-pages` branch
- Push the build folder to that branch
- Make it available at `https://tijanisylla.github.io/tijani-portfolio/`

## Custom Domain Setup (tijanisylla.dev)

### Step 1: Deploy First

Run the deploy command above to create the gh-pages branch.

### Step 2: Configure Custom Domain

1. Go to your GitHub repository: `https://github.com/tijanisylla/tijani-portfolio`
2. Click **Settings** → **Pages**
3. Under **Custom domain**, enter: `tijanisylla.dev`
4. Click **Save**

### Step 3: DNS Configuration

GitHub will create a `CNAME` file. You need to configure your DNS:

**Option A: Apex Domain (tijanisylla.dev)**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**Option B: CNAME (www.tijanisylla.dev)**
```
Type: CNAME
Name: www
Value: tijanisylla.github.io
```

**Option C: Both (Recommended)**
- Set up A records for apex domain
- Set up CNAME for www subdomain

### Step 4: SSL Certificate

GitHub will automatically provision an SSL certificate once DNS is configured (can take a few minutes to 24 hours).

## Important Notes

⚠️ **React Router**: GitHub Pages serves static files. For client-side routing to work:

1. The `homepage` field in `package.json` is already set to `https://tijanisylla.dev`
2. This ensures all asset paths are correct
3. The 404 page will work for invalid routes

## Troubleshooting

### Build Fails
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build` locally first

### 404 on Routes
- GitHub Pages needs a `404.html` file for SPA routing
- We can add this if needed

### Images Not Loading
- All images are in `public/images/` and should work
- Check that paths start with `/images/...` (absolute paths)

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Check DNS with: `dig tijanisylla.dev` or `nslookup tijanisylla.dev`
- Verify CNAME file exists in gh-pages branch

## After Deployment

1. Visit `https://tijanisylla.dev` (or the GitHub Pages URL)
2. Test all sections
3. Verify images load
4. Test navigation
5. Check mobile responsiveness

## Updating the Site

After making changes:

```bash
cd frontend
npm run deploy
```

This will rebuild and redeploy automatically.
