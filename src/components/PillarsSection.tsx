type Pillar = {
  n: string;
  title: string;
  body: string;
  icon: React.ReactNode;
};

const icon = {
  shield: (
    <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" />
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" />
    </>
  ),
};

const pillars: Pillar[] = [
  {
    n: "01",
    title: "Reputable",
    body: "A trusted veterinary pharmaceutical marketing company delivering innovative, high-quality products.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">{icon.shield}</svg>,
  },
  {
    n: "02",
    title: "Efficient",
    body: "Product development, distribution, data-driven insights and regulatory compliance support.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">{icon.spark}</svg>,
  },
  {
    n: "03",
    title: "Industry Compliant",
    body: "We adhere to every regulatory guideline while maintaining integrity and quality.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">{icon.check}</svg>,
  },
  {
    n: "04",
    title: "International Partnerships",
    body: "Exclusive collaboration with leading global manufacturers, expanding access to innovation.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">{icon.globe}</svg>,
  },
];

export function PillarsSection() {
  return (
    <section className="relative overflow-hidden bg-forest text-ivory">
      {/* subtle background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--ivory) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative container-x py-24">
        <div className="max-w-2xl">
          <div className="eyebrow text-sage">What we stand for</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Four pillars that shape every decision.
          </h2>
          <p className="mt-5 text-ivory/70 leading-relaxed max-w-xl">
            The principles below aren't marketing lines — they're the working
            standards that guide our sourcing, distribution and partnerships.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-4 lg:gap-8">
          {pillars.map((p, i) => (
            <div key={p.n} className="relative group">
              {/* Decorative separator between pillars 2 and 3 (desktop only) */}
              {i === 2 && (
                <div
                  aria-hidden
                  className="hidden lg:flex absolute -left-4 top-0 bottom-0 -translate-x-full items-center justify-center"
                >
                  <div className="flex flex-col items-center gap-2 text-sage/60">
                    <span className="h-16 w-px bg-sage/30" />
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 3c3 3 3 6 0 9-3-3-3-6 0-9zM12 21c-3-3-3-6 0-9 3 3 3 6 0 9z" />
                    </svg>
                    <span className="h-16 w-px bg-sage/30" />
                  </div>
                </div>
              )}

              {/* Mobile separator between 2 and 3 */}
              {i === 2 && (
                <div aria-hidden className="lg:hidden -mt-5 mb-5 flex items-center gap-3 text-sage/60">
                  <span className="h-px flex-1 bg-sage/25" />
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3c3 3 3 6 0 9-3-3-3-6 0-9zM12 21c-3-3-3-6 0-9 3 3 3 6 0 9z" />
                  </svg>
                  <span className="h-px flex-1 bg-sage/25" />
                </div>
              )}

              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-sage/40 bg-ivory/5 text-sage transition-all group-hover:bg-sage group-hover:text-forest">
                  <div className="h-6 w-6">{p.icon}</div>
                </div>
                <div className="font-display text-3xl text-sage/60">{p.n}</div>
              </div>
              <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
              <div className="mt-3 h-px w-10 bg-sage/50 transition-all group-hover:w-20" />
              <p className="mt-4 text-sm text-ivory/70 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
