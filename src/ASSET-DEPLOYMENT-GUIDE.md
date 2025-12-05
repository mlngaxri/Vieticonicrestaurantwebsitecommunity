# Asset Deployment Guide for Viet Iconic Website

This guide explains how to deploy your assets to Vercel and update the asset references in your code.

## Overview

All Figma asset references have been converted to Vercel-compatible URLs. You need to:
1. Export your assets from Figma
2. Upload them to your Vercel project's public folder
3. Update the placeholder domain in your code

## Asset Mapping

Below is the complete mapping of all assets used in your website:

### Logo Assets
| Asset Name | Figma Asset ID | Vercel Path | Used In |
|------------|----------------|-------------|---------|
| **Full Logo** | `314694a93c5d77f85214030891de1a6747e0fd21.png` | `/assets/viet-iconic-logo-full.png` | PremiumHeader.tsx, PremiumFooter.tsx |
| **Icon Logo** | `0b294d0c3a297d2fe36ec9d2e5b3f32f7c1e4d86.png` | `/assets/viet-iconic-logo-icon.png` | PremiumHeader.tsx (mobile) |
| **Builder Logo** | `d1ae0f73914afdafc28c0432729bbbb2cac0977c.png` | `/assets/builder-logo.png` | PremiumFooter.tsx |

### Hero Section Assets
| Asset Name | Figma Asset ID | Vercel Path | Used In |
|------------|----------------|-------------|---------|
| **Sky Background** | `ae54c74b66c75f4bbe229708e1e974f82e530a46.png` | `/assets/hero-sky-background.png` | HeroSection.tsx |
| **Mountain Silhouette** | `7934d21e2f899ba2949874762503d9b7a80f1560.png` | `/assets/hero-mountain-silhouette.png` | HeroSection.tsx |

### Menu Assets
| Asset Name | Figma Asset ID | Vercel Path | Used In |
|------------|----------------|-------------|---------|
| **Menu Preview** | `b558915d2d179e802d8e70c47d58cd52e3671723.png` | `/assets/menu-preview.png` | MenuPreview.tsx, MenuSection.tsx |
| **Menu Drinks** | `b52a2d25624e7690b920320ef8afd1b3de709f46.png` | `/assets/menu-drinks.png` | MenuSection.tsx |

### Review Photos
| Asset Name | Figma Asset ID | Vercel Path | Used In |
|------------|----------------|-------------|---------|
| **Review Photo 1** | `12ec9911af10fadcd591a80de0ed289b7f6dd2c4.png` | `/assets/review-photo-1.png` | GoogleReviews.tsx |
| **Review Photo 2** | `664756cecd284474fcb473409a8597217fedc690.png` | `/assets/review-photo-2.png` | GoogleReviews.tsx |

## Deployment Steps

### Step 1: Export Assets from Figma
1. Open your Figma file
2. Select each asset layer
3. Export as PNG (or original format)
4. Save with the corresponding filename from the "Vercel Path" column above

### Step 2: Create Assets Folder in Your Vercel Project
```bash
# In your project root
mkdir -p public/assets
```

### Step 3: Upload Assets
Place all exported assets in the `public/assets/` folder with the exact filenames specified above:
```
public/
└── assets/
    ├── viet-iconic-logo-full.png
    ├── viet-iconic-logo-icon.png
    ├── builder-logo.png
    ├── hero-sky-background.png
    ├── hero-mountain-silhouette.png
    ├── menu-preview.png
    ├── menu-drinks.png
    ├── review-photo-1.png
    └── review-photo-2.png
```

### Step 4: Update Domain References
Once deployed to Vercel, perform a global find and replace:

**Find:** `https://your-vercel-domain.vercel.app`  
**Replace with:** `https://YOUR-ACTUAL-DOMAIN.vercel.app`

Or if using a custom domain:

**Find:** `https://your-vercel-domain.vercel.app`  
**Replace with:** `https://www.vieticonic.com.au` (or your actual domain)

### Step 5: Verify Assets
After deployment, verify each asset loads correctly:
- ✅ Logo appears in header (desktop and mobile)
- ✅ Hero parallax images display correctly
- ✅ Menu images show properly
- ✅ Review photos appear in carousel
- ✅ Footer logo and builder logo display

## Alternative: Using Vercel's Asset Optimization

If you prefer, you can also place assets in the `public` folder at the root level and reference them directly:

**Option A - Assets subfolder (recommended):**
```
/assets/filename.png → https://your-domain.com/assets/filename.png
```

**Option B - Public root:**
```
/filename.png → https://your-domain.com/filename.png
```

The current code uses Option A (assets subfolder).

## Affected Files

The following files have been updated to use Vercel-compatible URLs:

1. `/components/premium/PremiumHeader.tsx`
2. `/components/premium/HeroSection.tsx`
3. `/components/premium/PremiumFooter.tsx`
4. `/components/premium/MenuPreview.tsx`
5. `/components/premium/GoogleReviews.tsx`
6. `/components/MenuSection.tsx`

## Notes

- All assets are currently set to the placeholder domain: `https://your-vercel-domain.vercel.app`
- You can do a single find/replace operation to update all references at once
- Ensure asset filenames match exactly (case-sensitive)
- Recommended image formats: PNG for logos with transparency, JPEG for photos
- Consider optimizing large images before deployment for better performance

## Troubleshooting

**If assets don't load:**
1. Check the browser console for 404 errors
2. Verify filenames match exactly (including case)
3. Ensure assets are in the `public/assets/` folder
4. Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
5. Check Vercel deployment logs for any build issues

**For better performance:**
- Optimize images using tools like TinyPNG or ImageOptim
- Consider using WebP format for better compression
- Ensure hero images are properly sized (don't exceed 2000px width)
