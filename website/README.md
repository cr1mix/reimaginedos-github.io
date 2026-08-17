# ReimaginedOS — GitHub Pages site

Static site deployed at **https://cr1mix.github.io/ReimaginedOS/**

## How to deploy (GitHub Pages)

1. Create a repository named **`ReimaginedOS`** under your GitHub account (`cr1mix`).
2. Push the contents of **this folder** (all files at the repo root) to the repo:
   ```
   git init
   git add .
   git commit -m "ReimaginedOS site"
   git branch -M main
   git remote add origin https://github.com/cr1mix/ReimaginedOS.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root)** → Save.
4. Wait ~1 minute, the site is live at `https://cr1mix.github.io/ReimaginedOS/`.

## Files

| File | Purpose |
|---|---|
| `index.html` | Landing page (Coming Soon) |
| `css/style.css` | Styles (dark theme, gradient accents, glass) |
| `js/main.js` | Nav scroll state, reveal animations, cursor glow, footer year |
| `assets/` | `logo.png`, `playbook.png`, `toolbox.png`, `background.jpg`, `DistantGalaxy.ttf` |
| `sitemap.xml` | XML sitemap (Google Search Console) |
| `robots.txt` | Crawler rules + sitemap reference |
| `404.html` | Custom 404 page |

## SEO

- Submit `sitemap.xml` in **Google Search Console** (property `cr1mix.github.io`).
- All asset links are **relative** (`assets/...`, not `/assets/...`) — required for project pages served under `/ReimaginedOS/`.

## Updating

Edit the files, commit, push — GitHub Pages rebuilds automatically (no build step, it's plain HTML/CSS/JS).