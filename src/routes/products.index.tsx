import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { AnimalChips } from "@/components/AnimalChip";
import { productCategories, categoryAnimals, site } from "@/lib/site";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: `Products — ${site.name}` },
      { name: "description", content: "Browse FDH Agrovet's product types — poultry vaccines, livestock vaccines, canine vaccines, drugs and biosecurity." },
      { property: "og:title", content: `Products — ${site.name}` },
      { property: "og:description", content: "Vaccines, drugs and biosecurity for Nigerian animal health." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Product range"
        title={<>One product family per card — pick a type to see the full range.</>}
        intro="Our catalogue spans poultry, livestock and canine health. Every product is selected for efficacy, regulatory compliance and consistent quality."
      />

      <section className="container-x py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((c) => {
            const animals = categoryAnimals[c.slug] ?? [];
            return (
              <Link
                key={c.slug}
                to="/products/$slug"
                params={{ slug: c.slug }}
                className="group flex flex-col rounded-2xl border border-stone bg-ivory overflow-hidden hover:border-forest/40 hover:shadow-lg transition-all"
              >
                <div className="relative">
                  <ImagePlaceholder
                    label={`${c.name} — ${animals.map((a) => a).join(", ")}`}
                    aspect="4/3"
                    className="rounded-none border-0 border-b border-stone"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-ivory/95 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest">
                    {c.group}
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  {c.subgroup && <div className="eyebrow text-forest/70">{c.subgroup}</div>}
                  <h3 className="mt-2 font-display text-2xl text-forest">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{c.blurb}</p>
                  <div className="mt-4">
                    <AnimalChips animals={animals} />
                  </div>
                  <div className="mt-5 text-sm font-medium text-forest group-hover:translate-x-1 transition-transform">
                    View products →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
