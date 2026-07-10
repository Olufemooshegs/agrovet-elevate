import { useEffect, useState } from "react";
import why1 from "@/assets/why-1.jpg.asset.json";

type Slide = {
  src?: string;
  label: string;
  caption?: string;
};

// Add more slides here as photos come in — just create another
// pointer with `lovable-assets create` and drop it in.
const slides: Slide[] = [
  {
    src: why1.url,
    label: "Field marketing — IMMUNO IgY BOOSTER",
    caption: "On-farm product engagement",
  },
  { label: "Cold-chain logistics", caption: "Add photo here" },
  { label: "Farm advisory visit", caption: "Add photo here" },
  { label: "Distributor training session", caption: "Add photo here" },
  { label: "Warehouse operations", caption: "Add photo here" },
];

export function WhyUsCarousel({ aspect = "4/3" }: { aspect?: string }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative">
      <div
        className="relative w-full overflow-hidden rounded-md border border-stone bg-cream shadow-sm"
        style={{ aspectRatio: aspect }}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-all duration-[1400ms] ease-out"
            style={{
              opacity: i === idx ? 1 : 0,
              transform: `scale(${i === idx ? 1.02 : 1.1})`,
            }}
          >
            {s.src ? (
              <img
                src={s.src}
                alt={s.label}
                className="h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center text-ivory"
                style={{
                  background:
                    "linear-gradient(135deg, #2e5d3a 0%, #1f3b2d 60%, #14261c 100%)",
                }}
              >
                <div className="text-center px-6">
                  <div className="eyebrow text-sage">Photo placeholder</div>
                  <div className="mt-2 font-display text-xl">{s.label}</div>
                  {s.caption && (
                    <div className="mt-1 text-xs text-ivory/60">{s.caption}</div>
                  )}
                </div>
              </div>
            )}
            {s.src && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4">
                <div className="text-[0.65rem] uppercase tracking-[0.28em] text-ivory/80">
                  Featured
                </div>
                <div className="text-ivory font-display text-lg">{s.label}</div>
              </div>
            )}
          </div>
        ))}

        <div className="absolute top-3 right-3 flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === idx ? 22 : 7,
                background: i === idx ? "var(--ivory)" : "rgba(255,253,248,0.5)",
              }}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
        <span>
          {idx + 1} / {slides.length}
        </span>
        <span>Auto-advancing</span>
      </div>
    </div>
  );
}
