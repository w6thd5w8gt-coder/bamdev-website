# BAM Development Website — Final Calendly Version

Live domain: https://bamdevelopment.co.uk/

Primary booking link:
https://calendly.com/bmirza-bamdevelopment/new-meeting

## Cloudflare deployment

Use this structure in the GitHub repo root:

```text
public/
wrangler.jsonc
package.json
README.md
.gitignore
```

Cloudflare Workers & Pages settings:

```text
Build command: leave blank
Deploy command: npx wrangler deploy
Root directory: /
Production branch: main
```

The site is a static Worker assets deployment using:

```json
"assets": {
  "directory": "./public/"
}
```

## Notes

- Calendly is embedded in the booking section and also linked from all main CTAs.
- Do not add full absolute domain redirects inside `public/_redirects`.
- Handle www to non-www redirects using Cloudflare Redirect Rules at zone level.
- Leave MX, SPF, DKIM and Apple verification records untouched in DNS.
