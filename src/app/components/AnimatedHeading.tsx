import { useEffect, useState } from "react";

type Props = {
  lines: string[];
  className?: string;
};

export function AnimatedHeading({ lines, className = "" }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  let globalIdx = 0;
  return (
    <h1
      className={`font-display leading-[0.95] tracking-[-0.01em] text-forest ${className}`}
    >
      {lines.map((line, li) => (
        <span key={li} className="block">
          {Array.from(line).map((ch, i) => {
            const delay = globalIdx * 35;
            globalIdx += 1;
            const isSpace = ch === " ";
            return (
              <span
                key={`${li}-${i}`}
                className="inline-block will-change-transform"
                style={{
                  transform: mounted ? "translateY(0) rotate(0deg)" : "translateY(0.5em) rotate(-4deg)",
                  opacity: mounted ? 1 : 0,
                  transition: `transform 900ms cubic-bezier(.2,.7,.15,1) ${delay}ms, opacity 700ms ease ${delay}ms`,
                  fontStyle: /[aeiouy]/i.test(ch) ? "italic" : "normal",
                }}
              >
                {isSpace ? " " : ch}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
