import { PageHero } from "../components/PageHero";

export function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog & News"
        title={<>Latest updates from FDH Agrovet.</>}
        intro="Company news, product announcements, industry insights and event coverage. Content will be added here soon."
      />

      <section className="container-x py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <article key={i} className="group rounded-xl border border-stone bg-ivory p-6 transition-all hover:shadow-lg hover:border-forest/20">
              <div className="eyebrow">Coming soon</div>
              <h2 className="mt-3 font-display text-xl text-forest">Blog post placeholder {i + 1}</h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                This is a placeholder for a future blog post or news article. Replace this text with the actual content once it is ready.
              </p>
              <div className="mt-5 inline-flex items-center rounded-full border border-stone bg-cream px-4 py-1.5 text-xs font-medium text-forest group-hover:bg-forest group-hover:text-ivory transition-colors">
                Read more
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
