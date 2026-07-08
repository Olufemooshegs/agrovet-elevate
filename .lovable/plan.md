## FDH Agrovet Nigeria — Premium Corporate Website

A full redesign of fdhagrovet.com.ng on the project's TanStack Start stack (React + TS + Tailwind v4 + SSR). Content is faithfully carried over from the old site; every page is rebuilt with a modern, restrained corporate aesthetic — no cartoon illustrations, no flashy gradients.

### Design direction

- **Palette (deep, editorial green + warm neutrals):**
  - Forest `#1F3B2D` (primary), Moss `#2E5D3A` (secondary), Sage highlight `#7FA97F`
  - Cream `#F6F2E9` background, Ivory `#FFFDF8`, Charcoal `#1A1A1A` text, Stone `#E9E4D8` borders
- **Typography:** Instrument Serif (display headlines) + Inter (body/UI). Tight leading on display, generous body leading.
- **Layout language:** wide max-widths (1280–1440), 12-col grid, generous whitespace, thin hairline dividers, small caps eyebrows, subtle motion only (fade/slide on scroll), no gradients except one soft hero wash.
- **Imagery:** clean placeholder blocks (labeled, aspect-locked) throughout About + Home so real photos can be dropped in later.
- **Logo:** uploaded FDH Agro logo used in header, footer, favicon, and OG image.

### Information architecture (mirrors old site)

- `/` Home
- `/about` About Us
- `/products` Products overview (grid of categories)
  - `/products/live-vaccines`
  - `/products/oil-vaccines`
  - `/products/livestock-vaccines`
  - `/products/canine-vaccines`
  - `/products/poultry`
  - `/products/large-animal-drugs`
  - `/products/disinfectant`
- `/services` Services
- `/events` Events
- `/contact` Contact

Each product category page shows a header, category description, and a grid of 4–6 sample product placeholder cards (name, use, target animal) that can be edited later.

### Page contents

**Home**
- Hero: logo mark + tagline "Advancing animal health across Nigeria", short intro, two CTAs (Explore Products / Contact Us), placeholder hero image right side.
- Company positioning strip (est. 2013, veterinary pharmaceutical marketing).
- Four pillars from old site: Reputable, Efficient, Industry Compliant, International Partnerships.
- Product categories grid (7 categories, each with icon + link).
- Why choose us (Trust, Quality, Compliance, Global partners).
- Partners logo strip (10 placeholder tiles).
- Vision / Mission / Core Values band.
- Contact CTA section with phone + WhatsApp.

**About Us** — carried-over copy (2013 founding, exclusive distributor, focus areas). Image placeholders (team, warehouse, field) clearly labeled for later replacement.

**Services** — product development, sales & distribution, data-driven insights, regulatory compliance assistance.

**Events** — placeholder timeline/grid ready for real event entries.

**Contact** — address block, phone `0703 078 4315`, WhatsApp `0901 946 3255`, email, static map placeholder, contact form (posts to a server function stub that logs; can be wired to email later).

### Global components

- **Header:** sticky, transparent-to-solid on scroll, logo left, nav center, "Get in touch" pill right. Mobile: slide-over menu.
- **Footer:** four columns (Company, Products, Contact, Social), fine legal row.
- **Floating action buttons (all pages):** stacked bottom-right, phone (`tel:+2347030784315`) and WhatsApp (`https://wa.me/2349019463255`). Circular, brand green, subtle shadow, hover lift, safe-area padding on mobile, ARIA-labeled.

### SEO & performance

- Per-route `head()` with unique title, description, og:title/description/url, canonical (relative paths). Root sets sitewide defaults + Organization JSON-LD.
- Semantic HTML, single H1 per page, alt text on all images.
- Image placeholders use fixed aspect ratios to prevent CLS; real images later served as WebP via `vite-imagetools`.
- Lazy-load below-the-fold imagery, preload hero.
- `public/robots.txt` and `public/sitemap.xml` with all routes (relative base until domain confirmed).

### Technical notes

- Stack: TanStack Start (as in this project). Fonts via `@fontsource/instrument-serif` + `@fontsource/inter`, imported in `src/start.ts`; families registered in `src/styles.css` `@theme`.
- Design tokens (colors, radii, shadows) defined in `src/styles.css`; all components use semantic tokens — no hard-coded colors.
- Logo saved via `lovable-assets` from the uploaded file; used across header/footer.
- Contact form: `createServerFn` handler that validates with Zod and returns success (email wiring can be added later with Resend when requested).
- No auth, no database, no dashboard.

### Out of scope (per your brief)

- No user accounts, no login, no admin dashboard.
- No AI-generated hero art — placeholders only for photos you'll supply.
- Email delivery for the contact form (stub only; ready to wire on request).
