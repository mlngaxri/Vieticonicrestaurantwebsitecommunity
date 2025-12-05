# Viet Iconic - Developer Handoff Documentation

## Project Overview
Premium, modern but warm website for Viet Iconic Vietnamese restaurant in Hawthorne, QLD.

## Color System (CSS Variables)

```css
:root {
  /* Brand Colors - Exact RGBA */
  --brand-dark: rgba(13,52,35,1);         /* #0D3423 primary deep green */
  --brand-gold: rgba(179,133,62,1);       /* #B3853E warm accent */
  --accent-olive: rgba(139,158,82,1);     /* #8B9E52 secondary light-olive */
  --accent-moss: rgba(50,98,52,1);        /* #326234 secondary dark-olive */
  
  /* Background & Neutrals */
  --bg: #fbfaf7;                          /* warm near-white */
  --bg-cream: #f5f3ef;                    /* soft cream */
  --text: #111;                           /* primary text */
  --text-muted: rgba(17,17,17,0.7);       /* muted text */
}
```

## Typography System

- **Headings**: 'Playfair Display', Georgia, serif (warm serif for premium feel)
- **Body**: 'Inter', system fonts (clean, legible sans-serif)

## Spline 3D Integration (Visual Brand Mark)

### Implementation Details

The 3D Hero is implemented in `/components/premium/HeroSection.tsx`.
It is designed as a visual brand mark, not a generic interactive widget.

**Key Features:**
- **Lazy Loading**: Uses `IntersectionObserver` AND `React.lazy` to load the heavy Spline scene only when needed.
- **Scroll Interaction**: Rotates the logo on Y-axis based on scroll progress through the hero section.
- **Idle Animation**: Subtle floating/bobbing motion when static.
- **Material Overrides**: Programmatically re-colors the model to match `--brand-dark` and `--brand-gold` at runtime.
- **Mobile Fallback**: Shows a high-quality static image (or logo) on mobile/initial load.

### Spline Scene Requirements

For the code to work correctly, the Spline scene at `https://prod.spline.design/hQMUf7yYRvYkhqh4/scene.splinecode` must be set up as follows:

1.  **Object Naming**: The main rotatable logo mesh/group MUST be named `HeroObject`.
2.  **Accents**: Any gold trim or accent parts should be named `trim`, `accent`, or `gold`.
3.  **Material**: Standard materials that accept color overrides are preferred.

### Code Snippet (HeroSpline Logic)

This logic is already integrated into `HeroSection.tsx`. If you need to extract it for a Framer component:

```javascript
// See /components/premium/HeroSection.tsx for full React implementation
// Key override logic:
function applyMaterialOverrides(targetName) {
  const obj = splineRef.current.findObjectByName(targetName);
  if (obj && obj.material) {
    // Base Dark Green
    obj.material.color.set("rgb(13,52,35)");
    obj.material.roughness = 0.35;
    
    // If Accent/Gold
    if (targetName === "accent" || targetName === "gold") {
      obj.material.color.set("rgb(179,133,62)");
      obj.material.emissive.set("rgb(179,133,62)");
      obj.material.emissiveIntensity = 0.3;
    }
  }
}
```

## Component Structure

- `HeroSection.tsx`: 3D Integration + Split Layout
- `GoogleReviews.tsx`: Carousel with 7+ strong 5-star reviews (ShadCN Carousel)
- `MenuPreview.tsx`: Static menu image preview
- `SignatureDishes.tsx`: 3-column grid of top items
- `LocationHours.tsx`: Contact info + Map placeholder

## Asset Management

- **Images**: Currently using Figma asset imports. For production, replace with optimized WebP/AVIF.
- **3D Fallback**: Ensure `/images/hero-fallback.jpg` exists for production (currently falling back to logo).

## Build Credits

Built by **SixtyFour Studio**
