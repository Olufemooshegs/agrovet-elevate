import { useEffect, useState } from "react";

const slides = [
  { label: "Field marketing — IMMUNO IgY BOOSTER", caption: "On-farm product engagement" },
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
      <div className="relative w-full overflow-hidden rounded-md border border-stone bg-cream shadow-sm" style={{ aspectRatio: aspect }}>
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-all duration-[1400ms] ease-out"
            style={{ opacity: i === idx ? 1 : 0, transform: `scale(${i === idx ? 1.02 : 1.1})` }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center text-ivory"
              style={{ background: "linear-gradient(135deg, #2e5d3a 0%, #1f3b2d 60%, #14261c 100%)" }}
            >
              <div className="text-center px-6">
                <div className="eyebrow text-sage">Photo placeholder</div>
                <div className="mt-2 font-display text-xl">{s.label}</div>
                {s.caption && <div className="mt-1 text-xs text-ivory/60">{s.caption}</div>}
              </div>
            </div>
          </div>
        ))}
        <div className="absolute top-3 right-3 flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className="h-1.5 rounded-full transition-all"
              style={{ width: i === idx ? 22 : 7, background: i === idx ? "#fffdf8" : "rgba(255,253,248,0.5)" }}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
        <span>{idx + 1} / {slides.length}</span>
        <span>Auto-advancing</span>
      </div>
    </div>
  );
}
