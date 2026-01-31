# Fix: Custom Domain Disappearing After Deploy

## Problem
Every time you add `https://tijanisylla.dev` as the custom domain in GitHub Pages, it works, but then disappears after you redeploy. This happens because:

1. GitHub creates a `CNAME` file in your `gh-pages` branch when you add the custom domain
2. When you run `npm run deploy`, it overwrites the entire `gh-pages` branch with just the `build` folder
3. The `CNAME` file gets deleted because it's not in your build folder

## Solution
I've created a `CNAME` file in your `frontend/public/` folder. This file will be included in every build and automatically deployed to the `gh-pages` branch, so it will persist across deployments.

## What I Did
- Created `frontend/public/CNAME` with content: `tijanisylla.dev`
- This file will be copied to the build folder during `npm run build`
- It will be included in every deployment

## Next Steps

1. **Deploy again:**
   ```bash
   cd frontend
   npm run deploy
   ```

2. **Verify the CNAME file:**
   - Go to your GitHub repository
   - Switch to the `gh-pages` branch
   - You should see `CNAME` file with `tijanisylla.dev` in it

3. **Configure custom domain in GitHub:**
   - Go to Settings → Pages
   - Enter `tijanisylla.dev` in the Custom domain field
   - Click Save
   - This time it should stay!

## Why This Works
- Files in `public/` are copied to the build root during build
- The `CNAME` file will always be in your build
- Every deployment will include it
- GitHub won't remove it because it's part of your repository

## Alternative: Manual CNAME Creation
If you prefer to create it manually in the gh-pages branch:
1. Go to your repository on GitHub
2. Switch to the `gh-pages` branch
3. Click "Add file" → "Create new file"
4. Name it `CNAME` (all caps, no extension)
5. Add content: `tijanisylla.dev`
6. Commit

But the automatic method (CNAME in public/) is better because it persists across all deployments.
