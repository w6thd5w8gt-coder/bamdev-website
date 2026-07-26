# Deployment runbook

1. Run `npm install` and `npm run validate`.
2. Review `public/assets/js/config.js` for contact email and booking URL.
3. Create a release branch such as `release/website-v5`.
4. Commit the complete repository.
5. Push and open a pull request into `main`.
6. Confirm the Cloudflare preview deployment.
7. Test home, service pages, Control Room tabs, portal demo and intake email flow.
8. Merge into `main`.
9. Confirm `https://bamdevelopment.co.uk/` and sitemap.
10. Record the release SHA.

Do not add an absolute domain redirect to `_redirects`; handle www/non-www through Cloudflare Redirect Rules.
