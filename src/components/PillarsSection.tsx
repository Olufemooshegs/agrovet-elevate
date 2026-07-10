import { useState } from "react";

type Pillar = {
  n: string;
  title: string;
  tagline: string;
  body: string;
  proof: string;
  icon: React.ReactNode;
};

const stroke = {
  className: "h-full w-full",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const pillars: Pillar[] = [
  {
    n: "01",
    title: "Reputable",
    tagline: "Trusted since 2013",
    body: "A decade-long track record with Nigerian veterinarians, integrated farms and distributors — built on consistency, not promises.",
    proof: "12+ years in market",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" />
        <path d="M9 12.5l2.2 2.2L15.5 10" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Efficient",
    tagline: "From port to paddock",
    body: "Product development, cold-chain distribution, regulatory support and technical advisory — coordinated as one workflow.",
    proof: "Nationwide logistics",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M3 12h13l-3-3M3 12l3 3M20 5v14" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Industry Compliant",
    tagline: "NAFDAC-aligned",
    body: "Every product line follows NAFDAC and international veterinary standards — audited paperwork, traceable batches, honest labelling.",
    proof: "Full regulatory trail",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M15 3v4h4" />
        <path d="M9 13l2 2 4-4" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Global Partnerships",
    tagline: "Exclusive distribution",
    body: "Sole Nigerian distributor for a curated set of international veterinary manufacturers — real access, not middle-man mark-ups.",
    proof: "Multi-continent supply",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" />
      </svg>
    ),
  },
];

export function PillarsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-forest text-ivory">
      {/* Layered backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--ivory) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--sage) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #7fa97f 0%, transparent 70%)",
        }}
      />

      <div className="relative container-x py-28">
        {/* Header row */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-sage">
              <span className="h-px w-10 bg-sage/60" />
              <span className="eyebrow text-sage">The FDH way</span>
            </div>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              Four working standards.
              <br />
              <span className="italic text-sage">Not a mission statement.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ivory/75 leading-relaxed">
              Below is how we actually operate — the internal rules that decide
              which products we carry, which partners we sign with, and how a
              vaccine reaches a farm 900 km from Lagos with its cold chain
              intact.
            </p>
          </div>
        </div>

        {/* Big active-pillar showcase */}
        <div className="mt-16 rounded-2xl border border-sage/20 bg-ivory/[0.03] p-8 sm:p-12 backdrop-blur-sm">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-2">
              <div className="font-display text-6xl text-sage/70 leading-none">
                {pillars[active].n}
              </div>
              <div className="mt-4 h-14 w-14 text-sage">
                {pillars[active].icon}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="eyebrow text-sage/70">
                {pillars[active].tagline}
              </div>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl">
                {pillars[active].title}
              </h3>
              <p className="mt-5 text-lg text-ivory/80 leading-relaxed max-w-xl">
                {pillars[active].body}
              </p>
            </div>
            <div className="lg:col-span-3 lg:border-l lg:border-sage/20 lg:pl-8">
              <div className="eyebrow text-sage/70">Proof</div>
              <div className="mt-3 font-display text-2xl text-ivory">
                {pillars[active].proof}
              </div>
            </div>
          </div>
        </div>

        {/* Selector rail */}
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-sage/15 bg-sage/15 md:grid-cols-4">
          {pillars.map((p, i) => {
            const isActive = i === active;
            return (
              <button
                key={p.n}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`group relative text-left p-6 transition-colors ${
                  isActive
                    ? "bg-forest text-ivory"
                    : "bg-forest/80 text-ivory/70 hover:bg-forest hover:text-ivory"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm text-sage/70">
                    {p.n}
                  </span>
                  <span
                    className={`h-1.5 rounded-full transition-all ${
                      isActive ? "w-8 bg-sage" : "w-3 bg-sage/40"
                    }`}
                  />
                </div>
                <div className="mt-3 font-display text-xl">{p.title}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-ivory/50">
                  {p.tagline}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
