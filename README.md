# Kiyla's Korner — 43 Build V7

## This version
This is the V7 full build focused on menu accuracy and item-level options.

### User asset assumptions
This build expects the following files in `/assets/`:
- `kiylas-sign.png`
- `hero.png`
- `space1.png`
- `space2.png`
- `space3.png`

The current ZIP includes the existing packaged logo/reference assets. Upload your own `hero.png`, `space1.png`, `space2.png`, and `space3.png` to the repo's `assets/` folder.

## Menu source priority
1. Current Order Online / DoorDash storefront for live category names, Most Ordered items, current prices, and address.
2. Uber Eats / Postmates for expanded current descriptions.
3. DoorDash older storefront + SinglePlatform + Kiyla's public food-menu listing for published dog toppings, included specialty dog ingredients, and historical customization structure.

## Modifier accuracy note
The public pages expose the item names, prices, descriptions, included ingredients, and published hot-dog topping/add-on system. They do not expose DoorDash's private live modifier JSON. This build replaces the old generic modifier list with the most accurate public-source reconstruction:
- Build Your Own Dogs use free basic condiments + $0.50 specialty toppings + $0.75 meat toppings.
- Specialty dogs show their included ingredients as removable options, then allow the published specialty and meat add-ons.
- Burgers, wraps, sandwiches, loaded fries, and sides now have item-specific included ingredient removals and context-appropriate add-ons instead of one universal topping list.
- Price-changing add-ons update the local cart total.

## No standalone Build Your Own promo section
Build Your Own Burger lives under Kiyla's Specialty Burgers.
Build Your Own Wrap lives under Sandwiches & wraps.
Build Your Own Dogs lives under Build Your Own Dogs.
