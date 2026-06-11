# BAM Development live site

Final Cloudflare Workers static asset package for bamdevelopment.co.uk.

## Deploy settings

- Build command: leave blank
- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Static assets directory: `./public/`

## Important fix

This version includes both `style.css` and `styles.css`, plus critical inline CSS in `index.html`, so the page will not fall back to an unstyled browser layout if a cached or misnamed CSS reference is used.
