import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { productCategories, site } from "@/lib/site";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const category = productCategories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const cat = loaderData?.category;
    const title = cat ? `${cat.name} — ${site.name}` : `Products — ${site.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: cat?.blurb ?? "Veterinary products from FDH Agrovet." },
        { property: "og:title", content: title },
        { property: "og:description", content: cat?.blurb ?? "" },
        { property: "og:url", content: `/products/${cat?.slug ?? ""}` },
      ],
      links: [{ rel: "canonical", href: `/products/${cat?.slug ?? ""}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="font-display text-4xl text-forest">Category not found</h1>
      <Link to="/products" className="mt-4 inline-block text-forest underline">Back to products</Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="container-x py-24 text-center">
      <h1 className="font-display text-4xl text-forest">Something went wrong</h1>
      <button onClick={reset} className="mt-4 text-forest underline">Try again</button>
    </div>
  ),
  component: ProductCategoryPage,
});

function ProductCategoryPage() {
  const { category } = Route.useLoaderData();

  // Sample placeholder products per category (editable later)
  const samples = Array.from({ length: 6 }).map((_, i) => ({
    name: `${category.name.replace(/s$/, "")} ${String.fromCharCode(65 + i)}`,
    use: sampleUse(category.slug, i),
    target: sampleTarget(category.slug),
  }));

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Products", to: "/products" },
          { label: category.name },
        ]}
      />
      <PageHero
        eyebrow={category.subgroup ?? category.group}
        title={category.name}
        intro={category.blurb}
      />

      <section className="container-x py-16 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <ImagePlaceholder label={`${category.name} — product photography`} aspect="3/4" />
          <div className="mt-6 rounded-lg border border-stone bg-cream p-6 text-sm">
            <div className="eyebrow">Need this range?</div>
            <p className="mt-3 text-charcoal/80">
              Contact our team for availability, pricing and distribution across Nigeria.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link to="/contact" className="inline-flex items-center rounded-full bg-forest px-4 py-2 text-xs font-medium text-ivory hover:bg-moss">
                Request info
              </Link>
              <a href={site.whatsappLink} className="inline-flex items-center rounded-full border border-forest/20 px-4 py-2 text-xs font-medium text-forest hover:bg-stone/60">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {samples.map((p) => (
              <article key={p.name} className="rounded-lg border border-stone bg-ivory p-6">
                <div className="eyebrow text-forest/70">{category.group}</div>
                <h3 className="mt-2 font-display text-xl text-forest">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.use}</p>
                <div className="mt-4 text-xs text-charcoal/60">Target: {p.target}</div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Sample listings shown for layout. Real product data can be added on request.
          </p>
        </div>
      </section>
    </>
  );
}

function sampleUse(slug: string, i: number) {
  const map: Record<string, string[]> = {
    "live-vaccines": [
      "Live attenuated vaccine for Newcastle Disease prevention.",
      "Live vaccine against Infectious Bursal Disease (Gumboro).",
      "Live vaccine against Infectious Bronchitis.",
      "Live Fowl Pox vaccine for young birds.",
      "Combined live vaccine for broad respiratory protection.",
      "Live vaccine for early Marek's Disease protection.",
    ],
    "oil-vaccines": [
      "Inactivated oil-emulsion vaccine against ND + IB.",
      "Inactivated vaccine for EDS 76 in layers.",
      "Multivalent oil vaccine for breeding flocks.",
      "Inactivated vaccine against Avian Influenza (H9).",
      "Long-duration inactivated ND vaccine.",
      "Combined inactivated vaccine for layer performance.",
    ],
    "livestock-vaccines": [
      "Vaccine against PPR in small ruminants.",
      "Vaccine against Contagious Bovine Pleuropneumonia.",
      "Foot and Mouth Disease vaccine.",
      "Blackleg vaccine for cattle.",
      "Anthrax spore vaccine for livestock.",
      "Brucellosis vaccine for cattle herds.",
    ],
    "canine-vaccines": [
      "Rabies vaccine — annual booster.",
      "DHPPi core vaccine for dogs.",
      "Leptospira canine vaccine.",
      "Kennel cough (Bordetella) vaccine.",
      "Puppy primary series vaccine.",
      "Multivalent canine booster.",
    ],
    poultry: [
      "Broad-spectrum antibiotic for poultry.",
      "Coccidiostat for prevention of coccidiosis.",
      "Multivitamin & electrolyte oral solution.",
      "Antistress liver support formula.",
      "Growth performance premix.",
      "Deworming solution for poultry.",
    ],
    "large-animal-drugs": [
      "Broad-spectrum injectable antibiotic.",
      "Anti-parasitic injection for cattle.",
      "Mineral & vitamin supplement.",
      "NSAID for pain and inflammation.",
      "Calcium & magnesium solution for milk fever.",
      "Trypanocide for cattle.",
    ],
    disinfectant: [
      "Broad-spectrum farm disinfectant concentrate.",
      "Footbath disinfectant for biosecurity gates.",
      "Hatchery-grade fumigant.",
      "Vehicle wash disinfectant.",
      "Water-line sanitiser for poultry houses.",
      "Equipment and surface sanitiser.",
    ],
  };
  return map[slug]?.[i] ?? "Veterinary product placeholder.";
}
function sampleTarget(slug: string) {
  if (slug.includes("canine")) return "Dogs";
  if (slug.includes("livestock") || slug === "large-animal-drugs") return "Cattle, sheep, goats";
  if (slug === "disinfectant") return "Farm, hatchery, equipment";
  return "Poultry";
}
