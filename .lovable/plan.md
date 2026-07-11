# Restructure Products Section

## New browse flow

```
/products              → one card per product TYPE (7 types)
/products/$slug        → grid of individual PRODUCTS in that type (≈4 each)
                         + short description + target animal chip + animal photo
```

## 1. `/products` index — "one of each type"

Replace the grouped list with a single clean grid of 7 category cards (Live Vaccines, Oil Vaccines, Livestock Vaccines, Canine Vaccines, Poultry Drugs, Large Animal Drugs, Disinfectants). Each card shows:
- Category name + group tag (Vaccines / Drugs / Biosecurity)
- Short blurb
- A representative animal illustration/photo (chicken for poultry types, cow for livestock, dog for canine, mixed farm for disinfectant)
- "View products →"

## 2. `/products/$slug` — product cards in the attached style

Redesign into a stacked/floating card grid matching the reference (rounded white cards, soft shadow, category chip top-left, heart/save icon top-right optional, footer row with target animal + CTA). Each type gets **4 real product cards** with:
- Product name (e.g. "IMMUNO IgY Booster")
- Short description (1–2 lines)
- **Target animal chip** with matching mini-icon: Broilers 🐔, Layers 🥚, Cattle 🐄, Goat 🐐, Sheep 🐑, Dogs 🐕
- Small animal photo strip / thumbnail on the card
- "Enquire" button → WhatsApp / Contact

Above the grid: category hero with a large animal photo placeholder (e.g. cow herd for Livestock Vaccines, poultry house for Poultry Drugs).

## 3. Animal imagery system

Add reusable placeholder image slots (`AnimalImage` component) for:
- Broiler chickens
- Layers with eggs
- Cows / cattle
- Goats
- Sheep
- Dogs (canine range only)

Each uses `ImagePlaceholder` now, easy to swap for real photos later. Category → default animal(s) mapping lives in `src/lib/site.ts` alongside a new `products` array (4 per category, with `name`, `blurb`, `targets: Animal[]`).

## Technical notes

- Extend `src/lib/site.ts`: add `Animal` union + `products: Product[]` (28 entries, 4 per category).
- New `src/components/AnimalChip.tsx` (icon + label) and `src/components/AnimalImage.tsx` (placeholder with label).
- Rewrite `src/routes/products.index.tsx` — flat 7-card grid, no group sections.
- Rewrite `src/routes/products.$slug.tsx` — 4-card floating layout inspired by the reference, animal chips, hero image.
- Keep existing SEO head(), breadcrumbs, WhatsApp/Contact CTAs.
- No new dependencies; icons via inline SVG.

## Out of scope
- No real product photos yet (placeholders only — you'll upload later).
- Product data (names/descriptions) will be sensible defaults per category; you can rename in `site.ts`.
