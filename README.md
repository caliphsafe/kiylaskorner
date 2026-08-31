# Kiyla's Korner — 43 Build V3

Dark, ordering-first restaurant experience for Kiyla's Korner, New Bedford.

## Notes
- No package-lock.json.
- Static deployment: index.html at repository root.
- Menu/pricing was cross-checked against the current Kiyla's Korner online ordering page and Grubhub listing.
- Checkout currently hands off to the live online ordering platform; no payment integration is falsely represented as live.
- The supplied Kiyla's Korner brand/reference photography is included in `assets/`.
- Food cards use image-forward presentation with remote food photography fallbacks because the ordering platform exposes its individual CDN image assets through its rendered application rather than stable public image URLs in the accessible page data. Replace the `IMG` map in `app.js` with the merchant-authorized CDN URLs when available for production.
