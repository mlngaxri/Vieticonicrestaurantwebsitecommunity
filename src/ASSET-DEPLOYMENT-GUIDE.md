# Asset Deployment Guide for Viet Iconic Website

This guide explains how to deploy your assets for the Viet Iconic website on Vercel using the Next.js public folder structure.

## Overview

All asset references have been converted to use relative paths from the `/public/assets/` folder. In Next.js/Vercel, files in the `public` folder are automatically served from the root path.

**No domain configuration needed** - the paths like `/assets/filename.png` will automatically work on any domain (localhost, Vercel preview, or production).

## Project Structure

Your assets should be organized as follows:

```
your-project/
├── public/
│   └── assets/
│       ├── logo.png
│       ├── logo.png
│       ├── 64.jpg
│       ├── hero-sky-background.png
│       ├── hero-mountain-silhouette.png
│       ├── menu.jpg
│       ├── menu-drinks.png
│       ├── Jon.jpg
│       └── Dan.jpg
├── components/
└── ... (other files)
```

## Asset Mapping

Below is the complete mapping of all assets used in your website:

### Logo Assets
| Asset Name | Original Figma ID | File Path | Used In |
|------------|------------------|-----------|---------|
| **Full Logo** | `314694a93c5d77...` | `public/assets/viet-iconic-logo-full.png` | PremiumHeader.tsx, PremiumFooter.tsx |
| **Icon Logo** | `0b294d0c3a297d...` | `public/assets/viet-iconic-logo-icon.png` | PremiumHeader.tsx (mobile) |
| **Builder Logo** | `d1ae0f73914afd...` | `public/assets/builder-logo.png` | PremiumFooter.tsx |

### Hero Section Assets
| Asset Name | Original Figma ID | File Path | Used In |
|------------|------------------|-----------|---------|
| **Sky Background** | `ae54c74b66c75f...` | `public/assets/hero-sky-background.png` | HeroSection.tsx |
| **Mountain Silhouette** | `7934d21e2f899b...` | `public/assets/hero-mountain-silhouette.png` | HeroSection.tsx |

### Menu Assets
| Asset Name | Original Figma ID | File Path | Used In |
|------------|------------------|-----------|---------|
| **Menu Preview** | `b558915d2d179e...` | `public/assets/menu-preview.png` | MenuPreview.tsx, MenuSection.tsx |
| **Menu Drinks** | `b52a2d25624e76...` | `public/assets/menu-drinks.png` | MenuSection.tsx |

### Review Photos
| Asset Name | Original Figma ID | File Path | Used In |
|------------|------------------|-----------|---------|
| **Review Photo 1** | `12ec9911af10fa...` | `public/assets/review-photo-1.png` | GoogleReviews.tsx |
| **Review Photo 2** | `664756cecd2844...` | `public/assets/review-photo-2.png` | GoogleReviews.tsx |

## Deployment Steps

### Step 1: Create the Assets Directory

In your project root, create the necessary folder structure:

```bash
mkdir -p public/assets
```

### Step 2: Export Assets from Figma

For each asset listed above:

1. Open your Figma file
2. Select the asset layer
3. Export as PNG (use 2x or 3x for retina displays)
4. Save with the exact filename shown in the "File Path" column

**Recommended Export Settings:**
- **Logos**: PNG with transparency, 2x scale
- **Hero images**: PNG or JPG, optimize for web (compress if needed)
- **Menu images**: PNG or JPG, ensure text is readable
- **Review photos**: JPG, standard quality

### Step 3: Place Assets in the Public Folder

Copy all exported assets into `public/assets/` with these exact filenames:

- ✅ `viet-iconic-logo-full.png`
- ✅ `viet-iconic-logo-icon.png`
- ✅ `builder-logo.png`
- ✅ `hero-sky-background.png`
- ✅ `hero-mountain-silhouette.png`
- ✅ `menu-preview.png`
- ✅ `menu-drinks.png`
- ✅ `review-photo-1.png`
- ✅ `review-photo-2.png`

### Step 4: Verify Locally

Before deploying, test locally:

```bash
npm run dev
# or
yarn dev
```

Open `http://localhost:3000` and check that all images load correctly.

### Step 5: Deploy to Vercel

```bash
vercel deploy
```

The assets will automatically be deployed with your application. **No additional configuration needed!**

## How It Works

In Next.js, files in the `public` folder are served at the root path:

```
public/assets/logo.png  →  accessible at /assets/logo.png
```

Your code references assets like this:

```tsx
const logoFull = "/assets/viet-iconic-logo-full.png";
```

This works on:
- ✅ Local development: `http://localhost:3000/assets/...`
- ✅ Vercel preview: `https://your-app-git-branch.vercel.app/assets/...`
- ✅ Production: `https://your-domain.com/assets/...`

## Affected Files

The following files use assets from `/public/assets/`:

1. ✅ `/components/premium/PremiumHeader.tsx` - Logo assets
2. ✅ `/components/premium/HeroSection.tsx` - Hero parallax images
3. ✅ `/components/premium/PremiumFooter.tsx` - Logo and builder logo
4. ✅ `/components/premium/MenuPreview.tsx` - Menu preview image
5. ✅ `/components/premium/GoogleReviews.tsx` - Review photos
6. ✅ `/components/MenuSection.tsx` - Menu images

## Image Optimization Tips

### For Better Performance:

1. **Compress images** before uploading:
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Target: Logos < 100KB, Photos < 500KB

2. **Use appropriate formats**:
   - Logos with transparency → PNG
   - Photos → JPG or WebP
   - Icons → SVG (if possible)

3. **Optimize hero images**:
   - Sky background: ~1920px width recommended
   - Mountain silhouette: ~1920px width recommended
   - Use progressive JPG or optimized PNG

4. **Use Next.js Image component** (optional upgrade):
   ```tsx
   import Image from 'next/image';
   
   <Image
     src="/assets/hero-sky-background.png"
     alt="Sky background"
     width={1920}
     height={1080}
     priority
   />
   ```

## Troubleshooting

### Images Not Loading?

1. **Check file paths** - Ensure filenames match exactly (case-sensitive)
   ```bash
   ls -la public/assets/
   ```

2. **Clear cache** - Hard refresh in browser:
   - Chrome/Edge: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
   - Firefox: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)

3. **Check browser console** - Look for 404 errors showing which assets failed to load

4. **Verify build** - Make sure assets are included in the build:
   ```bash
   npm run build
   ```

### Assets Work Locally But Not on Vercel?

1. **Check .gitignore** - Ensure `public/` is not ignored
2. **Verify deployment** - Check Vercel build logs
3. **Case sensitivity** - Vercel is case-sensitive; ensure exact filename matches

## Asset Checklist

Before deploying, verify:

- [ ] All 9 asset files are in `public/assets/` folder
- [ ] Filenames match exactly (no spaces, correct extensions)
- [ ] Images are optimized for web (compressed)
- [ ] Images load correctly on localhost
- [ ] No broken image icons appear on the site
- [ ] Hero parallax effect works with images
- [ ] Logos appear in header and footer
- [ ] Menu images display properly
- [ ] Review photos show in carousel

## Need Help?

If you encounter issues:

1. Check that all assets exist in the correct location
2. Verify filenames match the code references exactly
3. Check browser console for error messages
4. Test locally before deploying to Vercel
5. Review Vercel deployment logs for any errors

---

**Last Updated**: December 5, 2024  
**Project**: Viet Iconic Premium Website  
**Color Palette**: Deep Green (#0D3423) + Gold (#B3853E)
