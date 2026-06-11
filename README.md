# BAM Development Website Starter

This is the fast and proper static website base for Cloudflare Pages.

## Files included
- `index.html` — complete landing page
- `style.css` — responsive styling
- `_redirects` — domain redirects for Cloudflare Pages
- `_headers` — basic security headers
- `robots.txt` — search engine crawl file
- `sitemap.xml` — starter sitemap
- `site.webmanifest` — app/site metadata
- `assets/` — place logo and social preview image here

## Cloudflare Pages settings
- Framework preset: None
- Build command: leave blank
- Build output directory: `/`
- Production branch: `main`

## Replace before going live
1. Replace `https://calendly.com/YOUR-CALENDLY-LINK/project-review` in `index.html` with your real Calendly URL.
2. Replace `bmirza@bamdevelopment.co.uk` if you want a different receiving email.
3. Add `assets/og-image.png` for LinkedIn/WhatsApp previews.
4. Add the final logo if you want it instead of the text BAM mark.
5. Update address/company number if required.

## GitHub upload
Create a GitHub repo called `bamdev-website`, upload these files to the root, then connect that repo to Cloudflare Pages.
