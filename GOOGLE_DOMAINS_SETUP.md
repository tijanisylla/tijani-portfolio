# Squarespace DNS Configuration for GitHub Pages

**Note:** Google Domains was acquired by Squarespace in 2023. All domains have been migrated to Squarespace as of July 2024. You'll need to manage your domain through Squarespace.

## Step 1: Configure DNS in Squarespace

1. Go to [Squarespace](https://www.squarespace.com) and sign in
2. Navigate to **Settings** → **Domains** (or go directly to your domain management)
3. Select your domain: `tijanisylla.dev`
4. Click on **DNS Settings** or **DNS Records**
5. Look for **Custom Records** or **DNS Records** section

### Option A: Apex Domain (tijanisylla.dev) - Recommended

Add these **4 A records**:

| Name | Type | TTL | Data |
|------|------|-----|------|
| @ | A | 3600 | 185.199.108.153 |
| @ | A | 3600 | 185.199.109.153 |
| @ | A | 3600 | 185.199.110.153 |
| @ | A | 3600 | 185.199.111.153 |

**Note:** The "@" symbol represents the apex/root domain (tijanisylla.dev)

### Option B: CNAME for www (Optional)

If you want `www.tijanisylla.dev` to work:

| Name | Type | TTL | Data |
|------|------|-----|------|
| www | CNAME | 3600 | tijanisylla.github.io |

## Step 2: Configure GitHub Pages Custom Domain

1. Go to your GitHub repository: `https://github.com/tijanisylla/tijani-portfolio`
2. Click **Settings** → **Pages**
3. Scroll to **Custom domain**
4. Enter: `tijanisylla.dev`
5. Check **Enforce HTTPS** (will be available after DNS propagates)
6. Click **Save**

GitHub will automatically create a `CNAME` file in your `gh-pages` branch.

## Step 3: Wait for DNS Propagation

- DNS changes can take **15 minutes to 48 hours** to propagate
- You can check propagation status: https://www.whatsmydns.net/#A/tijanisylla.dev
- Once all locations show the GitHub IPs (185.199.108.153, etc.), DNS is ready

## Step 4: Redeploy with Updated Configuration

After DNS is configured, redeploy your site:

```bash
cd frontend
npm run deploy
```

This will rebuild with:
- `homepage: "https://tijanisylla.dev"` (no subdirectory)
- `basename: "/"` (for custom domain)
- All asset paths will use the root path

## Step 5: Verify SSL Certificate

1. GitHub will automatically provision an SSL certificate
2. This usually takes **10 minutes to 24 hours** after DNS is configured
3. Once ready, you'll see a green checkmark next to "Enforce HTTPS" in GitHub Pages settings
4. Your site will be available at `https://tijanisylla.dev`

## Troubleshooting

### DNS Not Propagating
- Wait at least 24 hours
- Clear your DNS cache: `sudo dscacheutil -flushcache` (Mac) or `ipconfig /flushdns` (Windows)
- Try accessing from a different network

### SSL Certificate Not Issuing
- Ensure DNS is fully propagated
- Make sure the CNAME file exists in your gh-pages branch
- Wait up to 24 hours
- Check GitHub Pages settings for any error messages

### Site Still Shows Old Content
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Clear browser cache
- Wait a few minutes for CDN cache to clear

### Mixed Content Warnings
- Ensure all asset paths use HTTPS
- Check browser console for any HTTP resources

## After Setup

Your site will be available at:
- ✅ `https://tijanisylla.dev` (primary)
- ✅ `https://www.tijanisylla.dev` (if CNAME is configured)
- ✅ `https://tijanisylla.github.io/tijani-portfolio` (still works as backup)

All three URLs will serve the same content!
