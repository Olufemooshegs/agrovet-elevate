import { useParams, Link } from "react-router";
import { Breadcrumbs, PageHero } from "../components/PageHero";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { AnimalChip } from "../components/AnimalChip";
import { productCategories, products, categoryAnimals, site } from "../lib/site";

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = productCategories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="font-display text-4xl text-forest">Category not found</h1>
        <Link to="/products" className="mt-4 inline-block text-forest underline">Back to products</Link>
      </div>
    );
  }

  const items = products.filter((p) => p.category === category.slug);
  const heroAnimals = categoryAnimals[category.slug] ?? [];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Products", to: "/products" },
          { label: category.name },
        ]}
      />
      <PageHero eyebrow={category.subgroup ?? category.group} title={category.name} intro={category.blurb} />

      <section className="container-x -mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {heroAnimals.slice(0, 4).map((a) => (
            <ImagePlaceholder key={a} label={`${a} photo`} aspect="1/1" />
          ))}
          {heroAnimals.length < 4 && Array.from({ length: 4 - heroAnimals.length }).map((_, i) => (
            <ImagePlaceholder key={`f-${i}`} label={`${category.name} photo`} aspect="1/1" />
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="font-display text-3xl text-forest">Products in this range</h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
          {items.length} products currently listed. Contact us for full technical data sheets, pack sizes and pricing.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {items.map((p) => (
            <article key={p.slug} className="relative flex flex-col rounded-2xl bg-white border border-stone shadow-[0_10px_30px_-15px_rgba(31,59,45,0.25)] overflow-hidden">
              <div className="relative">
                <ImagePlaceholder label={`${p.name} product photo`} aspect="16/10" className="rounded-none border-0 border-b border-stone" />
                <div className="absolute top-3 left-3 rounded-full bg-forest/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ivory">
                  {category.group}
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-display text-xl text-forest">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.blurb}</p>
                <div className="mt-4">
                  <div className="eyebrow mb-2 text-forest/70">Recommended for</div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.targets.map((t) => <AnimalChip key={t} animal={t} />)}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between gap-3 pt-4 border-t border-stone">
                  <div className="text-xs text-charcoal/60">Ref: {p.slug.toUpperCase()}</div>
                  <a
                    href={site.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-forest px-4 py-2 text-xs font-semibold text-ivory hover:bg-moss transition-colors"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-stone bg-cream p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="eyebrow text-forest/70">Need something not listed?</div>
            <p className="mt-2 font-display text-2xl text-forest">Talk to our team.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/contact" className="inline-flex items-center rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-ivory hover:bg-moss">Contact us</Link>
            <a href={site.whatsappLink} className="inline-flex items-center rounded-full border border-forest/20 px-5 py-2.5 text-sm font-medium text-forest hover:bg-stone/60">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}