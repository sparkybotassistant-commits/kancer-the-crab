# Kancer The Crab — Freelance Design Website

A bold, dark-themed single-page website for Kancer The Crab (Michael), a freelance graphic designer based in Cyprus.

## 🎨 What This Is

A client-facing business website designed to attract local business owners in Cyprus (restaurants, cafes, bars, real estate agencies, startups, tourism businesses) who need professional design work.

**Live Site:** https://[YOUR_USERNAME].github.io/kancer-the-crab

## ✨ Features

- **Dark theme** with vibrant red accent color
- **Fully responsive** (mobile-first design)
- **SEO optimized** with proper meta tags
- **Smooth scroll animations**
- **WhatsApp integration** (key for Cyprus business culture)
- **Contact form** with mailto functionality
- **Portfolio grid** with hover effects

## 📁 Structure

- `index.html` — Main page with all sections
- `styles.css` — All styling (no frameworks, pure CSS)
- `script.js` — Interactions and animations
- `README.md` — This file

## 🚀 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `kancer-the-crab`
3. Make it **Public**
4. Click **Create repository**

### Step 2: Push Your Code

Run these commands in your terminal (inside this folder):

```bash
# Make sure you're in the kancer-the-crab folder
cd /path/to/kancer-the-crab

# Add the GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/kancer-the-crab.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** (in left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Select **main** branch and **/ (root)** folder
6. Click **Save**

Wait 2-3 minutes, then visit: `https://YOUR_USERNAME.github.io/kancer-the-crab`

## 📝 Customization Checklist

Before sharing your site, update these placeholders:

### Contact Info
- [ ] `[INSERT_WHATSAPP_NUMBER]` — Replace with your WhatsApp number (format: 357XXXXXXXX)
- [ ] `[INSERT_EMAIL]` — Replace with your email address
- [ ] `[INSERT_PHONE]` — Optional: add phone number

### Portfolio Images
Replace the placeholder blocks in the Work section:
- [ ] `[INSERT PROJECT IMAGE 1]` through `[INSERT PROJECT IMAGE 6]`
- Recommended size: 800x600px, optimized JPG or WebP
- Update the project titles and client info in the overlays

### Testimonials
- [ ] Replace `[INSERT_TESTIMONIAL]` placeholders with real client quotes
- [ ] Update names, business names, and locations

### Service Icons
- [ ] Replace `[INSERT ICON]` with actual icons or illustrations

### Meta Tags (Optional)
Update these in the `<head>` of index.html:
- `og:url` — Change to your actual domain once you have one

## 🎨 Color Reference

| Variable | Value | Usage |
|----------|-------|-------|
| `--accent` | `#e63946` | Primary accent (buttons, highlights) |
| `--bg-primary` | `#0a0a0f` | Main background |
| `--bg-secondary` | `#12121a` | Section backgrounds |
| `--text-primary` | `#ffffff` | Headings, main text |
| `--text-secondary` | `#a0a0b0` | Body text |

## 📱 WhatsApp Tips for Cyprus

The site includes multiple WhatsApp CTAs because it's the preferred business communication method in Cyprus. To get your WhatsApp link:

1. Use your phone number with country code (357 for Cyprus)
2. Format: `https://wa.me/357XXXXXXXX` (no spaces or +)
3. Example: `https://wa.me/35799123456`

## 🔧 Local Development

To preview locally:

```bash
# Simple HTTP server (Python 3)
python -m http.server 8000

# Then open http://localhost:8000
```

Or just open `index.html` directly in your browser.

## 📸 Adding Your Work

1. Create an `images/` folder
2. Add your project images
3. In `index.html`, find the work items and replace:
   ```html
   <div class="work-placeholder">
       <span>[INSERT PROJECT IMAGE 1]</span>
   ```
   With:
   ```html
   <img src="images/project1.jpg" alt="Project description">
   ```

## 🎯 SEO Keywords Used

- graphic designer Cyprus
- logo design Limassol
- menu design Cyprus
- freelance designer
- branding Cyprus

## 🦀 Credits

Built for **Kancer The Crab**
Instagram: [@kancerthecrab](https://www.instagram.com/kancerthecrab)

---

**Questions?** Message me on WhatsApp or Instagram!
