# Quick Deployment Guide for Vercel

## Option 1: Drag & Drop (Easiest - 2 Minutes)

1. Go to https://vercel.com and sign up/login
2. Click "Add New..." → "Project"
3. Drag and drop the entire `carlift-website` folder
4. Click "Deploy"
5. Done! Your site will be live at a vercel.app URL

## Option 2: Vercel CLI (Recommended for Updates)

### First Time Setup:
```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to your project folder
cd carlift-website

# Login to Vercel
vercel login

# Deploy
vercel
```

### For Future Updates:
```bash
# Just run this command from the project folder
vercel --prod
```

## Option 3: GitHub Integration (Best for Teams)

1. Create a new GitHub repository
2. Upload these files to the repository
3. Go to https://vercel.com
4. Click "Add New..." → "Project"
5. Import your GitHub repository
6. Vercel will auto-deploy on every commit

## Custom Domain Setup

After deployment:
1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., dubaicarlift.ae)
4. Follow Vercel's DNS configuration instructions
5. SSL certificate is automatically provided

## Environment Variables (If Needed)

If you add backend functionality later:
1. Go to Project Settings → Environment Variables
2. Add your API keys or configuration
3. Redeploy for changes to take effect

## Important Files for Vercel

- `vercel.json` - Already configured ✓
- `index.html` - Homepage (entry point) ✓
- All HTML files are static and ready ✓

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Verify contact form works
- [ ] Check all navigation links
- [ ] Test on different browsers
- [ ] Update phone numbers and email addresses
- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up domain redirects if needed

## Performance Tips

1. Vercel automatically optimizes:
   - Image compression
   - Caching headers
   - Global CDN distribution
   - Automatic HTTPS

2. Your site is already optimized with:
   - Minimal CSS/JS
   - No external dependencies
   - Fast loading times
   - Mobile-first design

## Troubleshooting

**Issue**: Site not loading
- Solution: Check vercel.json is in root directory

**Issue**: Custom domain not working
- Solution: Verify DNS settings, wait 24-48 hours for propagation

**Issue**: Need to update content
- Solution: Edit HTML files and redeploy with `vercel --prod`

## Support

For Vercel-specific issues: https://vercel.com/support
For website customization: Contact TechHive AI

---

**Deployment Time**: ~2-5 minutes
**Cost**: Free for personal projects
**SSL**: Automatically included
**CDN**: Global edge network included
