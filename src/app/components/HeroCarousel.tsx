import { useEffect, useState } from "react";

const slides = [
  { label: "Veterinary team on farm visit" },
  { label: "Poultry health inspection" },
  { label: "Cold-chain vaccine handling" },
  { label: "Cattle herd wellness check" },
];

export function HeroCarousel({ aspect = "4/5", intervalMs = 3800 }: { aspect?: string; intervalMs?: number }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), intervalMs);
    return () => clearInterval(t);
  }, [intervalMs]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-md border border-stone bg-cream shadow-sm"
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={slides[idx].label}
    >
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-[1400ms] ease-out"
          style={{ opacity: i === idx ? 1 : 0, transform: `scale(${i === idx ? 1.02 : 1.08})` }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: i % 2 === 0
                ? "linear-gradient(135deg, #2e5d3a 0%, #1f3b2d 60%, #14261c 100%)"
                : "linear-gradient(135deg, #7fa97f 0%, #2e5d3a 55%, #1f3b2d 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-25"
            style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent 0 18px, rgba(255,253,248,0.08) 18px 19px)" }}
          />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-ivory">
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.28em] text-ivory/70">Featured</div>
              <div className="mt-1 font-display text-2xl">{s.label}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute top-4 right-4 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIdx(i)}
            className="h-1.5 rounded-full transition-all"
            style={{ width: i === idx ? 24 : 8, background: i === idx ? "#fffdf8" : "rgba(255,253,248,0.45)" }}
          />
        ))}
      </div>
    </div>
  );
}
