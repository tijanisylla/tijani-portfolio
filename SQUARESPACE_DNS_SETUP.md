# Squarespace DNS Configuration for GitHub Pages

Since Google Domains was acquired by Squarespace, you'll need to configure DNS through Squarespace's platform.

## Step 1: Access Your Domain in Squarespace

1. Go to [Squarespace](https://www.squarespace.com) and sign in
2. Navigate to **Settings** → **Domains**
3. Find and select `tijanisylla.dev`
4. Click on **DNS Settings** or **DNS Records**

## Step 2: Configure A Records for Apex Domain

Add these **4 A records** for `tijanisylla.dev`:

| Host | Type | Points To | TTL |
|------|------|-----------|-----|
| @ | A | 185.199.108.153 | 3600 |
| @ | A | 185.199.109.153 | 3600 |
| @ | @ | 185.199.110.153 | 3600 |
| @ | A | 185.199.111.153 | 3600 |

**Note:** 
- The "@" symbol represents the apex/root domain (tijanisylla.dev)
- In some Squarespace interfaces, you might enter "@" or leave the Host field blank
- If you see "Points To" or "Value", enter the IP address

### Option B: CNAME for www (Optional)

If you want `www.tijanisylla.dev` to work:

| Host | Type | Points To | TTL |
|------|------|-----------|-----|
| www | CNAME | tijanisylla.github.io | 3600 |

## Step 3: Remove Old DNS Records (If Needed)

If you have existing A records pointing to your old site, you can either:
- **Delete them** (if you're fully migrating)
- **Keep them** (if you want both sites to work temporarily)

## Step 4: Configure GitHub Pages Custom Domain

1. Go to your GitHub repository: `https://github.com/tijanisylla/tijani-portfolio`
2. Click **Settings** → **Pages**
3. Scroll to **Custom domain**
4. Enter: `tijanisylla.dev`
5. Check **Enforce HTTPS** (will be available after DNS propagates)
6. Click **Save**

GitHub will automatically create a `CNAME` file in your `gh-pages` branch.

## Step 5: Wait for DNS Propagation

- DNS changes can take **15 minutes to 48 hours** to propagate
- You can check propagation status: https://www.whatsmydns.net/#A/tijanisylla.dev
- Once all locations show the GitHub IPs (185.199.108.153, etc.), DNS is ready

## Step 6: Redeploy with Updated Configuration

After DNS is configured, redeploy your site:

```bash
cd frontend
npm run deploy
```

This will rebuild with:
- `homepage: "https://tijanisylla.dev"` (no subdirectory)
- `basename: "/"` (for custom domain)
- All asset paths will use the root path

## Step 7: Verify SSL Certificate

1. GitHub will automatically provision an SSL certificate
2. This usually takes **10 minutes to 24 hours** after DNS is configured
3. Once ready, you'll see a green checkmark next to "Enforce HTTPS" in GitHub Pages settings
4. Your site will be available at `https://tijanisylla.dev`

## Troubleshooting

### Can't Find DNS Settings in Squarespace
- Look for **"DNS"**, **"DNS Settings"**, or **"DNS Records"** in the domain management area
- Some Squarespace accounts might have domains managed through a different interface
- Contact Squarespace support if you can't locate DNS settings

### DNS Not Propagating
- Wait at least 24 hours
- Clear your DNS cache: `sudo dscacheutil -flushcache` (Mac) or `ipconfig /flushdns` (Windows)
- Try accessing from a different network
- Verify the A records are saved correctly in Squarespace

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

## Alternative: If Squarespace Interface is Different

If Squarespace's DNS interface looks different, look for:
- **"Custom Records"**
- **"Advanced DNS"**
- **"External DNS"**
- **"DNS Management"**

The key is to add A records pointing to GitHub's IP addresses.

## After Setup

Your site will be available at:
- ✅ `https://tijanisylla.dev` (primary)
- ✅ `https://www.tijanisylla.dev` (if CNAME is configured)
- ✅ `https://tijanisylla.github.io/tijani-portfolio` (still works as backup)

All three URLs will serve the same content!

## Need Help?

If you're having trouble finding DNS settings in Squarespace:
1. Check Squarespace's help documentation: https://support.squarespace.com
2. Search for "DNS settings" or "custom DNS records"
3. Contact Squarespace support if needed
