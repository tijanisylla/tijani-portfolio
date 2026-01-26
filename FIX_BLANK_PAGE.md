# Fix for Blank GitHub Pages Site

## Problem
The site was blank because the `homepage` in `package.json` was set to `https://tijanisylla.dev`, but GitHub Pages serves it from `https://tijanisylla.github.io/tijani-portfolio/`, causing all asset paths to break.

## Solution Applied
1. Updated `homepage` in `package.json` to `https://tijanisylla.github.io/tijani-portfolio`
2. Updated `404.html` to use `pathSegmentsToKeep = 1` for project pages

## Next Steps
Run these commands to rebuild and redeploy:

```bash
cd frontend
npm run deploy
```

This will rebuild with the correct asset paths and redeploy to GitHub Pages.

## After Deployment
1. Wait 1-2 minutes for GitHub to rebuild
2. Visit `https://tijanisylla.github.io/tijani-portfolio/`
3. The site should now load correctly

## When You Set Up Custom Domain
Once you configure `tijanisylla.dev` as the custom domain:
1. Update `homepage` in `package.json` back to `https://tijanisylla.dev`
2. Update `pathSegmentsToKeep` in `404.html` back to `0`
3. Run `npm run deploy` again
