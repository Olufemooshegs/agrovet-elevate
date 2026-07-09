import { ImagePlaceholder } from "./ImagePlaceholder";

type Member = { name?: string; role: string; label: string; aspect?: string };

const leadership: Member[] = [
  {
    name: "Dr. Peter Olufemi Akinwale",
    role: "Managing Director",
    label: "Portrait — Managing Director",
    aspect: "3/4",
  },
  {
    role: "Assistant Managing Director",
    label: "Portrait — Assistant Managing Director",
    aspect: "3/4",
  },
];

const marketing: Member[] = [
  { role: "National Marketing Manager", label: "Portrait — National Marketing Manager", aspect: "3/4" },
  { role: "South West Region Marketing Manager", label: "Portrait — South West Regional Marketing Manager", aspect: "3/4" },
];

const sales: Member[] = Array.from({ length: 6 }).map((_, i) => ({
  role: `Sales Manager`,
  label: `Portrait — Sales Manager ${i + 1}`,
  aspect: "1/1",
}));

const admin: Member[] = [
  ...Array.from({ length: 2 }).map((_, i) => ({
    role: "Accountant",
    label: `Portrait — Accountant ${i + 1}`,
    aspect: "1/1",
  })),
  ...Array.from({ length: 10 }).map((_, i) => ({
    role: "Admin Staff",
    label: `Portrait — Admin Staff ${i + 1}`,
    aspect: "1/1",
  })),
];

function MemberCard({ m, size = "md" }: { m: Member; size?: "lg" | "md" | "sm" }) {
  const rotate = ["-rotate-[0.6deg]", "rotate-[0.4deg]", "-rotate-[0.3deg]", "rotate-[0.7deg]"];
  const r = rotate[(m.label.length) % rotate.length];
  return (
    <figure
      className={`group relative bg-ivory border border-stone rounded-sm p-3 pb-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${r} hover:rotate-0`}
    >
      <ImagePlaceholder label={m.label} aspect={m.aspect ?? "1/1"} />
      <figcaption className="pt-3 px-1">
        {m.name && (
          <div className="font-display text-lg text-forest leading-tight">{m.name}</div>
        )}
        <div className={`${m.name ? "mt-0.5 text-xs" : "text-sm text-forest"} uppercase tracking-[0.18em] text-muted-foreground`}>
          {m.role}
        </div>
      </figcaption>
      {/* tape */}
      <span
        aria-hidden
        className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-16 bg-sage/40 rounded-sm rotate-[-2deg] shadow-sm"
      />
      {size === "sm" ? null : null}
    </figure>
  );
}

function GroupHeading({ eyebrow, title, count }: { eyebrow: string; title: string; count?: string }) {
  return (
    <div className="flex items-end justify-between gap-6 flex-wrap">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h3 className="mt-2 font-display text-3xl text-forest">{title}</h3>
      </div>
      {count && <div className="text-sm text-muted-foreground">{count}</div>}
    </div>
  );
}

export function TeamAlbum() {
  return (
    <section className="container-x py-24">
      <div className="max-w-2xl">
        <div className="eyebrow">Our people</div>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl text-forest">
          The team behind FDH Agrovet.
        </h2>
        <p className="mt-5 text-lg text-charcoal/75 leading-relaxed">
          A photo album of the people who lead, sell, support and keep the
          company running every day.
        </p>
      </div>

      {/* Leadership */}
      <div className="mt-16">
        <GroupHeading eyebrow="Leadership" title="Executive leadership" />
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <MemberCard m={leadership[0]} size="lg" />
          </div>
          <div className="lg:col-span-1">
            <MemberCard m={leadership[1]} size="lg" />
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="text-sm text-muted-foreground max-w-[220px] leading-relaxed border-l border-stone pl-6">
              Setting the direction for FDH Agrovet — from clinical standards to
              national distribution strategy.
            </div>
          </div>
        </div>
      </div>

      <div className="my-16 flex items-center gap-4">
        <span className="h-px flex-1 bg-stone" />
        <span className="eyebrow text-forest/60">Commercial</span>
        <span className="h-px flex-1 bg-stone" />
      </div>

      {/* Marketing */}
      <GroupHeading eyebrow="Marketing" title="Marketing managers" count="2 members" />
      <div className="mt-8 grid gap-8 sm:grid-cols-2 max-w-3xl">
        {marketing.map((m, i) => (
          <MemberCard key={i} m={m} />
        ))}
      </div>

      {/* Sales */}
      <div className="mt-16">
        <GroupHeading eyebrow="Sales" title="Sales managers" count="6 members" />
        <div className="mt-8 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {sales.map((m, i) => (
            <MemberCard key={i} m={m} size="sm" />
          ))}
        </div>
      </div>

      <div className="my-16 flex items-center gap-4">
        <span className="h-px flex-1 bg-stone" />
        <span className="eyebrow text-forest/60">Operations</span>
        <span className="h-px flex-1 bg-stone" />
      </div>

      {/* Admin */}
      <GroupHeading eyebrow="Finance & admin" title="Accountants & admin staff" count="12 members" />
      <div className="mt-8 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {admin.map((m, i) => (
          <MemberCard key={i} m={m} size="sm" />
        ))}
      </div>
    </section>
  );
}
