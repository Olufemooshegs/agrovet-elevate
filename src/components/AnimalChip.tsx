import { animalLabel, type Animal } from "@/lib/site";

const icons: Record<Animal, string> = {
  broilers: "🐔",
  layers: "🥚",
  cattle: "🐄",
  goats: "🐐",
  sheep: "🐑",
  dogs: "🐕",
};

export function AnimalChip({ animal, size = "sm" }: { animal: Animal; size?: "sm" | "md" }) {
  const pad = size === "md" ? "px-3 py-1.5 text-xs" : "px-2.5 py-1 text-[11px]";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-cream ${pad} font-medium text-forest`}
    >
      <span aria-hidden className="text-sm leading-none">{icons[animal]}</span>
      {animalLabel[animal]}
    </span>
  );
}

export function AnimalChips({ animals }: { animals: Animal[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {animals.map((a) => (
        <AnimalChip key={a} animal={a} />
      ))}
    </div>
  );
}
