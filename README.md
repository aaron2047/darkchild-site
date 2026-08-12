# Ms. Darkchild — Official Site
**Absolute Soul Entertainment LLC**  
The Princess of Comedy · Philadelphia, PA · Est. 1999

---

## 🚀 Deploy to GitHub Pages (5 steps)

### Step 1 — Create the repo
1. Go to [github.com/new](https://github.com/new)
2. Name it: `darkchild-site`
3. Set to **Public** (required for free GitHub Pages)
4. Do NOT initialize with README (we have our own)
5. Click **Create repository**

### Step 2 — Push this code
Open Terminal (Mac/Linux) or Command Prompt (Windows):

```bash
# Navigate to this folder
cd path/to/darkchild-deploy

# Initialize git
git init
git add .
git commit -m "feat: initial Ms. Darkchild site"

# Connect to GitHub (replace aaron2047)
git remote add origin https://github.com/aaron2047/darkchild-site.git
git branch -M main
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Source: **GitHub Actions**
4. Save

The site auto-deploys on every push to `main`. First deploy takes ~2 minutes.

### Step 4 — Your live URL
```
https://aaron2047.github.io/darkchild-site/
```

### Step 5 — Custom domain (optional)
If pointing `msdarkchildcomedy.com` to GitHub Pages:

In your domain registrar DNS settings, add:
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   aaron2047.github.io
```
Then in GitHub repo Settings → Pages → Custom domain → enter `msdarkchildcomedy.com`

---

## 🔧 Two Things to Configure Before Launch

### 1. Formspree (booking form)
1. Sign up free at [formspree.io](https://formspree.io)
2. Create a new form → copy the endpoint ID
3. Open `index.html`, find:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. Replace `YOUR_FORM_ID` with your actual ID

### 2. YouTube Video ID (reel embed)
1. Go to any video on [youtube.com/@Datgirlcomedy](https://www.youtube.com/@Datgirlcomedy)
2. Copy the video ID — the part after `watch?v=` in the URL
3. Open `assets/js/main.js`, find:
   ```js
   const VIDEO_ID = 'YOUR_VIDEO_ID';
   ```
4. Replace with the real ID

---

## 📁 File Structure

```
darkchild-site/
├── index.html              ← Main homepage
├── 404.html                ← On-brand error page
├── sitemap.xml             ← SEO sitemap
├── robots.txt              ← Search crawler rules
├── CNAME                   ← Custom domain config
├── .github/
│   └── workflows/
│       └── deploy.yml      ← Auto-deploy pipeline
├── assets/
│   ├── css/
│   │   └── styles.css      ← All styles + design tokens
│   ├── js/
│   │   └── main.js         ← Nav, filter, carousel, cart, form
│   └── images/
│       ├── hero.webp       ← Hero photo (replace with hi-res)
│       └── headshot.webp   ← About section photo (replace with hi-res)
└── pages/
    └── epk.html            ← Electronic Press Kit (build next)
```

---

## 🖼️ Replacing Images (Priority)

Source photos were low resolution. For the best results, replace with:

| File | Ideal Spec |
|------|-----------|
| `assets/images/hero.webp` | 1200×800px min, portrait or 3:2, transparent bg preferred |
| `assets/images/headshot.webp` | 600×800px min, portrait 3:4, transparent bg preferred |

**Recommended sources:**
- Direct download from Facebook/Instagram (right-click → Save Image)
- Ask Ms. Darkchild for hi-res headshot files (phone photos work great)
- After Claude Design polish, drop refined images here

---

## 🎯 Next Steps

| Priority | Task | Who |
|----------|------|-----|
| 🔴 Now | Set Formspree form ID | DevOps |
| 🔴 Now | Set YouTube video ID | DevOps |
| 🔴 Now | Replace hero/headshot with hi-res photos | Designer |
| 🟡 Soon | Build `pages/epk.html` | Developer |
| 🟡 Soon | Submit sitemap to Google Search Console | SEO |
| 🟢 Later | Claude Design handoff for visual polish | Designer |
| 🟢 Later | Custom domain DNS config | DevOps |

---

## 📞 Contact
**MsDarkChild@msdarkchildcomedy.com**  
267-702-DARK (3275)  
[@datgirlcomedy](https://instagram.com/datgirlcomedy) on Instagram

© 2026 Absolute Soul Entertainment LLC
