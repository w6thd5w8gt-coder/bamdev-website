#!/usr/bin/env bash
set -euo pipefail
BRANCH="${1:-release/website-v5}"
npm install
npm run validate
git checkout -b "$BRANCH"
git add -A
git commit -m "Launch BAM Development website v5"
git push -u origin "$BRANCH"
echo "Open a pull request from $BRANCH to main and verify the Cloudflare preview before merging."
