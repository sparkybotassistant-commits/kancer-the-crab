# Kancer Design Sprint — Gap Analysis

## Reference Analysis

### Teletech (Craft Reference)
**What makes it premium:**
- **Typography**: Extremely bold, condensed display fonts (tall, narrow) with tight tracking
- **Heading sizes**: ~80-120px on desktop, very impactful
- **Background**: Deep pure black (#000000) with subtle noise texture
- **Accent**: Neon cyan/green — minimal but strategic
- **Whitespace**: Generous section padding (~150-200px)
- **Layout**: Full-height sections, dramatic scroll reveals
- **Mobile**: Maintains bold typography, single column, large touch targets

### Hvnter (Aesthetic Reference)
**Underground/street/rave visual language:**
- **Typography**: Aggressive, distorted, glitchy text effects
- **Background**: Black with heavy grain/noise texture
- **Colors**: Monochrome with strategic accent (often red/orange)
- **Effects**: Chromatic aberration, scan lines, distortion
- **Vibe**: Dark, aggressive, anti-establishment, premium streetwear feel

## Gap Analysis — Kancer vs Teletech Standard

### Critical Issues (Fix First)

1. **Typography too friendly**
   - Current: Syne font — rounded, friendly, approachable
   - Target: Condensed, bold, aggressive display font
   - Fix: Replace with "Bebas Neue" or "Oswald" (condensed) for headings

2. **Background not deep enough**
   - Current: #0a0a0f — slightly blue-tinted dark
   - Target: #000000 pure black or very deep #050505
   - Fix: Darken all backgrounds

3. **Heading sizes too small**
   - Current: clamp(4rem, 12vw, 7rem)
   - Target: Much more aggressive, especially on desktop
   - Fix: Increase max to 10-12rem, add condensed font

4. **Section padding insufficient**
   - Current: 100px sections, 60px on mobile
   - Target: 140-160px for more breathing room
   - Fix: Increase section padding

5. **Grain texture too subtle**
   - Current: opacity 0.04
   - Target: More visible noise for premium feel
   - Fix: Increase grain opacity to 0.06-0.08

### Secondary Improvements

6. **Hero too busy**
   - Current: Slideshow + work strip + multiple CTAs
   - Target: Cleaner, more focused hero like Teletech
   - Fix: Simplify hero, reduce elements

7. **Accent color**
   - Current: Red (#c41230) is good for brand
   - Could be more vibrant/impactful
   - Consider brightening slightly

8. **Card borders**
   - Current: Subtle borders
   - Could be more refined or removed entirely

9. **Mobile nav**
   - Current: Basic mobile menu
   - Could be more polished

10. **Scroll animations**
    - Current: Basic fade-in
    - Target: More dramatic reveals

## Implementation Priority

### Sprint 1: Typography & Foundation
- Add condensed font (Bebas Neue)
- Darken backgrounds
- Increase heading sizes
- Increase section padding

### Sprint 2: Hero Redesign
- Simplify hero layout
- Remove work strip from hero
- Focus on typography impact

### Sprint 3: Polish
- Enhance grain texture
- Refine card hover states
- Improve mobile experience
- Add more dramatic scroll effects
