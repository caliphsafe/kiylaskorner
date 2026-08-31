# Kiyla's Korner — 43 Build V5

## Creative direction
Dark-first, colorful, playful food-truck experience inspired by Kiyla's real-world sign, bright seating area, and chunky retro/prehistoric visual language.

## Ordering hierarchy
The site keeps the source menu category names but reorders them for a better online-ordering flow:
1. Most Ordered
2. Sandwiches & wraps
3. Kiyla's Specialty Burgers
4. Kiyla's Loaded Fries
5. Kiyla's Specialty Dogs
6. Build Your Own Dogs
7. Sides
8. Milk Shakes
9. Desert
10. Drinks

There is NO standalone "Build Your Own Hot Dog" promotional section. Build Your Own Dogs lives in the menu like Build Your Own Burger and Build Your Own Wrap.

## Menu data
Current pricing and menu naming were checked against:
- https://order.online/store/kiyla-s-korner-cove-rd-31271415
- DoorDash / Uber Eats / Grubhub cross-reference where needed.

## Food imagery
The build uses Kiyla's real restaurant/food imagery throughout the food cards and site sections, plus the provided Kiyla's Korner brand-reference photo.
Image URLs currently point to public Kiyla's gallery images. For production, download/store merchant-owned copies locally or in your own CDN when available.

## Checkout
Cart interactions are local front-end UX. Final checkout hands off to Kiyla's existing online ordering page until a direct merchant ordering/payment API is connected.

## Deploy
Upload the CONTENTS of this folder to the root of the GitHub repository:
- index.html
- styles.css
- app.js
- robots.txt
- sitemap.xml
- assets/

No package-lock.json is included.
