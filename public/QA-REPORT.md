# BAM Development Website v5 QA report

## Automated checks completed

- 17 HTML pages parsed successfully
- 28 public files found
- All internal routes and asset references validated
- JavaScript syntax checked with Node
- CSS parsed with no syntax errors
- Homepage contains one main landmark, eight primary sections, one Control Room demo and one footer
- No separate-brand wording such as “BAM Diagnostic”, “BAM Recovery” or “BAM Delivery”
- No unapproved £368m claim, named-client proof or quantified savings claims
- No inline style attributes remain
- Content Security Policy includes the SHA-256 hash for the shared JSON-LD payload

## Cloudflare compatibility

- Static asset directory: `./public/`
- Custom 404 handling: `assets.not_found_handling = "404-page"`
- `_headers` and `_redirects` live inside the static asset directory
- Redirect rules are relative only; www/non-www remains a Cloudflare Redirect Rule

## Manual launch checks still required on the Cloudflare preview

- Desktop and iPhone visual review
- Calendly link opens correctly
- Intake email opens in the configured mail client
- Custom domain and canonical URL resolve to `https://bamdevelopment.co.uk/`
- Workers preview URL is marked `noindex` if retained publicly
