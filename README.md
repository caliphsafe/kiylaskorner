# Kiyla's Korner — 43 Build v2

A complete dark-first, mobile-first restaurant experience designed from the supplied Kiyla's Korner brand reference. This version intentionally takes a new visual/UX direction rather than reskinning No Problemo.

## Structure
- `index.html` — site markup, SEO/AEO metadata, Restaurant JSON-LD
- `styles.css` — responsive dark visual system
- `app.js` — menu filtering, search, builder, ordering panel interactions
- `assets/kiylas-korner-reference.png` — supplied brand photo
- `assets/kiylas-sign.png` — cropped brand photo for hero
- `robots.txt`
- `sitemap.xml`

## Deployment
Static site. No build command or dependency installation is required. The files are intended to sit at the repository root for Vercel.

No `package-lock.json` is included.

## Ordering
The site provides a native-feeling menu/order interface and a live-order handoff to the restaurant's current DoorDash-powered ordering page. Payment processing is not falsely represented as connected.

## Source notes
Menu names/prices and current ordering/location information were cross-checked against the restaurant's current Order Online and Grubhub listings. Some platform pricing/availability can vary; the live ordering platform remains the source of truth.
