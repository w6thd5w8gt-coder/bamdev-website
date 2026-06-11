# BAMDev Cloudflare Worker Static Site

Upload these files to the root of the `bamdev-website` GitHub repo.

Cloudflare settings:
- Build command: leave blank
- Deploy command: npx wrangler deploy
- Root directory: /

The website assets live in `/public` and Wrangler is told to deploy only that folder.
