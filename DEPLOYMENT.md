# Deployment Guide for tijanisylla.dev

## Current Configuration

Your project is now configured to deploy to **https://tijanisylla.dev**

### What's Been Set Up

1. ✅ **Homepage field** added to `package.json`
2. ✅ **SEO meta tags** configured with your domain
3. ✅ **Sitemap.xml** and **robots.txt** ready
4. ✅ **All images** are local (no external dependencies)

## Deployment Options

### Option 1: GitHub Pages (if using gh-pages)

If you're using GitHub Pages, install gh-pages:

```bash
cd frontend
npm install --save-dev gh-pages
```

Then deploy:
```bash
npm run deploy
```

### Option 2: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd frontend
vercel
```

3. Connect to your domain in Vercel dashboard

### Option 3: Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Deploy:
```bash
cd frontend
npm run build
netlify deploy --prod --dir=build
```

### Option 4: Custom Server/Hosting

If you have your own server:

1. Build the project:
```bash
cd frontend
npm run build
```

2. The `build` folder contains all static files
3. Upload the contents of `build` to your web server
4. Configure your server to serve `index.html` for all routes (for React Router)

## Important Notes

- **Build output**: The build folder will be created in `frontend/build/`
- **React Router**: Make sure your server is configured to serve `index.html` for all routes (SPA routing)
- **Assets**: All images are in `public/images/` and will be included in the build
- **Domain**: All URLs are configured for `https://tijanisylla.dev`

## Pre-Deployment Checklist

- [ ] Test the build locally: `npm run build && npm install -g serve && serve -s build`
- [ ] Verify all images load correctly
- [ ] Check that the 404 page works
- [ ] Test on mobile devices
- [ ] Verify SEO meta tags
- [ ] Check that CV download works

## After Deployment

1. Verify the site loads at https://tijanisylla.dev
2. Test all navigation links
3. Check that images load correctly
4. Verify contact form (if backend is connected)
5. Test CV download functionality
