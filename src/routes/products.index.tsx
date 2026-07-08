import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { productCategories, site } from "@/lib/site";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: `Products — ${site.name}` },
      { name: "description", content: "Explore FDH Agrovet's range of poultry vaccines, livestock vaccines, canine vaccines, poultry drugs, large animal drugs and disinfectants." },
      { property: "og:title", content: `Products — ${site.name}` },
      { property: "og:description", content: "Vaccines, drugs and biosecurity for Nigerian animal health." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  const groups = ["Vaccines", "Drugs", "Biosecurity"] as const;
  return (
    <>
      <PageHero
        eyebrow="Product range"
        title={<>Vaccines, drugs and biosecurity — sourced to a global standard.</>}
        intro="Our catalogue spans poultry, livestock and canine health. Every product is selected for efficacy, regulatory compliance and consistent quality."
      />

      {groups.map((group) => {
        const items = productCategories.filter((c) => c.group === group);
        if (!items.length) return null;
        return (
          <section key={group} className="container-x py-14 border-b border-stone last:border-none">
            <div className="flex items-baseline justify-between gap-6">
              <h2 className="font-display text-3xl text-forest">{group}</h2>
              <div className="eyebrow text-muted-foreground">{items.length} categories</div>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((c) => (
                <Link
                  key={c.slug}
                  to="/products/$slug"
                  params={{ slug: c.slug }}
                  className="group block rounded-lg border border-stone bg-ivory p-8 hover:border-forest/40 hover:shadow-sm transition-all"
                >
                  {c.subgroup && <div className="eyebrow text-forest/70">{c.subgroup}</div>}
                  <div className="mt-3 font-display text-2xl text-forest">{c.name}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.blurb}</p>
                  <div className="mt-6 text-sm text-forest group-hover:translate-x-1 transition-transform">
                    View category →
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
