## Fix the Partners section with real partner logos

### Partners to feature (9 total, from your uploads)

1. **MS Schippers** (Netherlands) — Passion for Farming
2. **Bio-Med** — Promise for Healthier Life
3. **AVIVAC** (Russia) — the 3rd image (blue vaccine emblem)
4. **CAvac** — ChoongAng Vaccine Lab (South Korea)
5. **APA United Nano Technology** (China)
6. **Melan Biotech** (China)
7. **PlataLab — Vacunas Aviares** (Argentina)
8. **MedicaVet** (Turkey)
9. **Interuac (Pvt) Ltd**

### 1. Upload logos as CDN assets

Upload each of the 9 files under `/mnt/user-uploads/` via `lovable-assets create` → write pointers to `src/assets/partners/<slug>.jpg.asset.json` (slugs: `schippers`, `biomed`, `avivac`, `cavac`, `apa`, `melan`, `platalab`, `medicavet`, `interuac`). Binaries stay on the CDN, not in the repo.

### 2. Add typed partners data in `src/lib/site.ts`

```ts
export type Partner = { slug: string; name: string; country?: string; logo: string };
export const partners: readonly Partner[] = [ /* 9 entries importing the pointer .url */ ];
```

### 3. Rebuild the Partners section on the home page

Replace the current 10 grey placeholder tiles in `src/routes/index.tsx` with a premium logo wall:

- Section keeps the cream band and centered eyebrow/heading.
- Grid: 2 cols on mobile → 3 sm → 5 md, `gap-6`.
- Each tile: white card, subtle border, rounded, generous padding, `aspect-[3/2]`, logo centered with `object-contain`, grayscale by default that lifts to full color on hover, name shown as `sr-only` (title tooltip for sighted users).
- Lazy loading on every `<img>`.
- No credits used (no image generation) — only the tiny `lovable-assets create` calls per file.

### Files touched

- `src/lib/site.ts` — add `partners` array + `Partner` type.
- `src/routes/index.tsx` — swap placeholder loop for real partner cards.
- `src/assets/partners/*.asset.json` — 9 new pointer files.

No other pages, styles, or components change.