# BAM Development Website v5

Production-ready static website for `https://bamdevelopment.co.uk` deployed through Cloudflare Workers static assets.

## Brand hierarchy

BAM Development is the sole master brand. Diagnostic, Recovery, Delivery and Control Room are service routes within BAM Development.

## Local validation

```bash
npm install
npm run validate
npm run dev
```

## Deployment

```bash
npm run deploy
```

Cloudflare Git integration may deploy automatically from `main`. Root directory is `/`; assets directory is `./public/`.

## Release controls

- The intake creates a structured email; it does not upload files to the website.
- The portal and Control Room are explicitly labelled as demonstrations.
- Case studies remain anonymised.
- Do not publish client names, project values, quantified outcomes or portfolio claims without evidence and written approval.
- BAM does not replace statutory or regulated professionals where their appointment is required.
