import { ImagePlaceholder } from "./ImagePlaceholder";
import mdPhoto from "@/assets/team/md.jpg.asset.json";
import asstMdPhoto from "@/assets/team/asst-md.jpg.asset.json";
import farmManagerPhoto from "@/assets/team/farm-manager.jpg.asset.json";
import accountant1Photo from "@/assets/team/accountant-1.jpg.asset.json";
import accountant2Photo from "@/assets/team/accountant-2.jpg.asset.json";
import adminManagerPhoto from "@/assets/team/admin-manager.jpg.asset.json";
import productionPhoto from "@/assets/team/production.jpg.asset.json";
import salesAfolabiPhoto from "@/assets/team/sales-afolabi.jpg.asset.json";
import mao1Photo from "@/assets/team/mao-1.jpg.asset.json";
import mediaPhoto from "@/assets/team/media.jpg.asset.json";

type Member = {
  name?: string;
  role: string;
  region?: string;
  label: string;
  aspect?: string;
  photo?: string;
};

const leadership: Member[] = [
  {
    name: "Dr. Peter Olufemi Akinwale",
    role: "Managing Director",
    label: "Portrait — Managing Director",
    aspect: "3/4",
    photo: mdPhoto.url,
  },
  {
    name: "Mrs. Grace Akinwale",
    role: "Assistant Managing Director",
    label: "Portrait — Assistant Managing Director",
    aspect: "3/4",
    photo: asstMdPhoto.url,
  },
];

const marketing: Member[] = [
  {
    name: "Dr. Abimbola Oyewale",
    role: "National Marketing Manager",
    label: "Portrait — National Marketing Manager",
    aspect: "3/4",
  },
  {
    name: "Mr. Oluwole Adenuga",
    role: "South West Region Marketing Manager",
    label: "Portrait — South West Regional Marketing Manager",
    aspect: "3/4",
  },
];

const sales: Member[] = [
  {
    name: "Akanni Taiwo Babatunde",
    role: "Sales Manager",
    region: "Oyo, Ondo, Ekiti, Osun & Kwara",
    label: "Portrait — Sales Manager 1",
    aspect: "1/1",
  },
  {
    name: "Oluwatobi Adepoju",
    role: "Sales Manager",
    region: "Edo & Delta",
    label: "Portrait — Sales Manager 2",
    aspect: "1/1",
  },
  {
    name: "Awoniyi Quyum",
    role: "Sales Manager",
    region: "Bauchi, Gombe, Adamawa & Taraba",
    label: "Portrait — Sales Manager 3",
    aspect: "1/1",
  },
  {
    name: "Ogbodo Chukwudi Lazarus",
    role: "Sales Manager",
    region: "Enugu, Anambra & Ebonyi",
    label: "Portrait — Sales Manager 4",
    aspect: "1/1",
  },
  {
    name: "Lukman Raji Mustapha",
    role: "Sales Manager",
    region: "Kaduna, Kebbi, Zamfara, Katsina (Funtua) & Niger",
    label: "Portrait — Sales Manager 5",
    aspect: "1/1",
  },
  {
    name: "Adelakun Adedotun Abdullahi",
    role: "Sales Manager",
    region: "Rivers, Abia and Environs",
    label: "Portrait — Sales Manager 6",
    aspect: "1/1",
  },
];

// Operations, admin, finance & support staff
const operations: Member[] = [
  {
    name: "Richards Oluwafemi",
    role: "Admin Manager",
    label: "Portrait — Admin Manager",
    aspect: "1/1",
    photo: adminManagerPhoto.url,
  },
  {
    name: "Ajayi Amose Olakunle",
    role: "Farm Manager",
    label: "Portrait — Farm Manager",
    aspect: "1/1",
    photo: farmManagerPhoto.url,
  },
  {
    name: "Arinola Olakunle",
    role: "Store Manager",
    label: "Portrait — Store Manager",
    aspect: "1/1",
  },
  {
    name: "Afolabi Olayinka",
    role: "Sales",
    label: "Portrait — Sales",
    aspect: "1/1",
    photo: salesAfolabiPhoto.url,
  },
  {
    name: "Eunice Oghenetega",
    role: "Production",
    label: "Portrait — Production",
    aspect: "1/1",
    photo: productionPhoto.url,
  },
  {
    name: "Agbebi Tolulope",
    role: "Import Logistics & Finance Manager",
    label: "Portrait — Import Logistics & Finance Manager",
    aspect: "1/1",
  },
  {
    name: "Chukwuemeka Nduka",
    role: "Logistics Officer",
    label: "Portrait — Logistics Officer",
    aspect: "1/1",
  },
  {
    name: "Ogunleye Damilola John",
    role: "Media Team",
    label: "Portrait — Media Team",
    aspect: "1/1",
    photo: mediaPhoto.url,
  },
];

const finance: Member[] = [
  {
    name: "Smart Emmanuel Oyayimika",
    role: "Accountant",
    label: "Portrait — Accountant 1",
    aspect: "1/1",
    photo: accountant1Photo.url,
  },
  {
    name: "Adedeji Omotayo David",
    role: "Accountant",
    label: "Portrait — Accountant 2",
    aspect: "1/1",
    photo: accountant2Photo.url,
  },
  {
    name: "Adelakun Rofiat Abidemi",
    role: "Management Analysis Officer",
    label: "Portrait — Management Analysis Officer 1",
    aspect: "1/1",
    photo: mao1Photo.url,
  },
  {
    name: "Aliu Olabisi",
    role: "Management Analysis Officer",
    label: "Portrait — Management Analysis Officer 2",
    aspect: "1/1",
  },
];

function MemberCard({ m }: { m: Member }) {
  const rotate = ["-rotate-[0.6deg]", "rotate-[0.4deg]", "-rotate-[0.3deg]", "rotate-[0.7deg]"];
  const r = rotate[m.label.length % rotate.length];
  return (
    <figure
      className={`group relative bg-ivory border border-stone rounded-sm p-3 pb-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${r} hover:rotate-0`}
    >
      {m.photo ? (
        <div
          className="relative w-full overflow-hidden rounded-sm bg-cream"
          style={{ aspectRatio: m.aspect ?? "1/1" }}
        >
          <img
            src={m.photo}
            alt={m.name ? `${m.name} — ${m.role}` : m.label}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ) : (
        <ImagePlaceholder label={m.label} aspect={m.aspect ?? "1/1"} />
      )}
      <figcaption className="pt-3 px-1">
        {m.name && (
          <div className="font-display text-lg text-forest leading-tight">{m.name}</div>
        )}
        <div
          className={`${m.name ? "mt-0.5 text-xs" : "text-sm text-forest"} uppercase tracking-[0.18em] text-muted-foreground`}
        >
          {m.role}
        </div>
        {m.region && (
          <div className="mt-1.5 text-[11px] leading-snug text-charcoal/60">{m.region}</div>
        )}
      </figcaption>
      <span
        aria-hidden
        className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-16 bg-sage/40 rounded-sm rotate-[-2deg] shadow-sm"
      />
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

function Divider({ label }: { label: string }) {
  return (
    <div className="my-16 flex items-center gap-4">
      <span className="h-px flex-1 bg-stone" />
      <span className="eyebrow text-forest/60">{label}</span>
      <span className="h-px flex-1 bg-stone" />
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
            <MemberCard m={leadership[0]} />
          </div>
          <div className="lg:col-span-1">
            <MemberCard m={leadership[1]} />
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="text-sm text-muted-foreground max-w-[220px] leading-relaxed border-l border-stone pl-6">
              Setting the direction for FDH Agrovet — from clinical standards to
              national distribution strategy.
            </div>
          </div>
        </div>
      </div>

      <Divider label="Commercial" />

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
            <MemberCard key={i} m={m} />
          ))}
        </div>
      </div>

      <Divider label="Operations & Admin" />

      {/* Operations */}
      <GroupHeading eyebrow="Operations" title="Operations, admin & support" count={`${operations.length} members`} />
      <div className="mt-8 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {operations.map((m, i) => (
          <MemberCard key={i} m={m} />
        ))}
      </div>

      <Divider label="Finance" />

      {/* Finance */}
      <GroupHeading eyebrow="Finance" title="Accountants & analysis" count={`${finance.length} members`} />
      <div className="mt-8 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {finance.map((m, i) => (
          <MemberCard key={i} m={m} />
        ))}
      </div>
    </section>
  );
}
