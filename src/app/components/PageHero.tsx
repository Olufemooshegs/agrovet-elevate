import { Link } from "react-router";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, intro }: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-stone bg-cream">
      <div className="container-x pt-16 pb-14 sm:pt-24 sm:pb-20 max-w-4xl">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1 className="mt-4 font-display text-4xl sm:text-6xl text-forest leading-[1.02]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{intro}</p>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #fffdf8)" }} />
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-x pt-8 text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {it.to ? (
              <Link to={it.to} className="hover:text-forest">{it.label}</Link>
            ) : (
              <span>{it.label}</span>
            )}
            {i < items.length - 1 && <span className="text-stone">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
