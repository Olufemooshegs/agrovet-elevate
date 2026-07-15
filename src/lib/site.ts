export const site = {
  name: "FDH Agrovet Nigeria Limited",
  short: "FDH Agrovet",
  tagline: "Advancing animal health across Nigeria",
  phone: "07030784315",
  phoneIntl: "+2347030784315",
  whatsapp: "09019463255",
  whatsappIntl: "+2349019463255",
  whatsappLink: "https://wa.me/2349019463255",
  email: "info@fdhagrovet.com.ng",
  address: "Ibadan, Oyo State",
  yearFounded: 2013,
  social: {
    facebook: "https://www.facebook.com/fdhagrovet.ng/",
    linkedin: "https://www.linkedin.com/company/fdh-agrovet-nigeria-limited",
    instagram: "https://www.instagram.com/fdhagrovet.ng/",
  },
};

import schippers from "@/assets/partners/schippers.jpg.asset.json";
import biomed from "@/assets/partners/biomed.jpg.asset.json";
import avivac from "@/assets/partners/avivac.jpg.asset.json";
import cavac from "@/assets/partners/cavac.jpg.asset.json";
import apa from "@/assets/partners/apa.jpg.asset.json";
import melan from "@/assets/partners/melan.jpg.asset.json";
import platalab from "@/assets/partners/platalab.jpg.asset.json";
import medicavet from "@/assets/partners/medicavet.jpg.asset.json";
import interuac from "@/assets/partners/interuac.jpg.asset.json";

export type Partner = { slug: string; name: string; country?: string; logo: string };

export const partners: readonly Partner[] = [
  { slug: "schippers", name: "MS Schippers", country: "Netherlands", logo: schippers.url },
  { slug: "biomed", name: "Bio-Med", country: "India", logo: biomed.url },
  { slug: "avivac", name: "AVIVAC", country: "Russia", logo: avivac.url },
  { slug: "cavac", name: "ChoongAng Vaccine Lab (CAvac)", country: "South Korea", logo: cavac.url },
  { slug: "apa", name: "APA United Nano Technology", country: "China", logo: apa.url },
  { slug: "melan", name: "Melan Biotech", country: "China", logo: melan.url },
  { slug: "platalab", name: "PlataLab — Vacunas Aviares", country: "Argentina", logo: platalab.url },
  { slug: "medicavet", name: "MedicaVet", country: "Turkey", logo: medicavet.url },
  { slug: "interuac", name: "Interuac (Pvt) Ltd", logo: interuac.url },
];

export type EventItem = {
  slug: string;
  title: string;
  location: string;
  date: string;
  blurb?: string;
  photoCount: number;
};

export const events: readonly EventItem[] = [
  {
    slug: "aba-2026",
    title: "IMMUNO-IgY Seminar",
    location: "Aba",
    date: "2026",
    blurb: "Farmer engagement seminar introducing the IMMUNO-IgY Booster range to poultry producers in Aba.",
    photoCount: 6,
  },
  {
    slug: "port-harcourt-2026",
    title: "IMMUNO-IgY Seminar",
    location: "Port Harcourt",
    date: "2026",
    blurb: "Regional seminar on egg-yolk antibody technology and modern flock immunity for Rivers State farmers.",
    photoCount: 6,
  },
  {
    slug: "benin-2026",
    title: "IMMUNO-IgY Seminar",
    location: "Benin",
    date: "2026",
    blurb: "Technical seminar with veterinarians and farm managers across Edo and Delta.",
    photoCount: 6,
  },
  {
    slug: "nipoli",
    title: "NIPOLI Expo",
    location: "Nigeria Poultry & Livestock Expo",
    date: "2024",
    blurb: "FDH Agrovet at the Nigeria Poultry & Livestock Expo (NIPOLI) — knowledge sharing and innovative regional advisory for the B2C market.",
    photoCount: 4,
  },
  {
    slug: "egg-boss-launch-2025",
    title: "Product Launch — Egg Boss",
    location: "Nigeria",
    date: "2025",
    blurb: "Official market launch of Egg Boss, our layer performance formulation.",
    photoCount: 3,
  },
  {
    slug: "havana-cuba-2025",
    title: "International Conference on Biotechnology",
    location: "Havana, Cuba",
    date: "21–27 September 2025",
    blurb: "MD, FDH Agrovet Ibadan, representing Nigeria at the International Conference on Biotechnology in Havana.",
    photoCount: 4,
  },
];

type ProductCat = {
  slug: string;
  name: string;
  group: string;
  subgroup?: string;
  blurb: string;
};

export const productCategories: readonly ProductCat[] = [
  {
    slug: "live-vaccines",
    name: "Live Vaccines",
    group: "Vaccines",
    subgroup: "Poultry Vaccines",
    blurb:
      "Live attenuated poultry vaccines for broad protection against common viral challenges.",
  },
  {
    slug: "oil-vaccines",
    name: "Oil Vaccines",
    group: "Vaccines",
    subgroup: "Poultry Vaccines",
    blurb:
      "Inactivated oil-emulsion vaccines delivering long, durable protective immunity.",
  },
  {
    slug: "livestock-vaccines",
    name: "Livestock Vaccines",
    group: "Vaccines",
    blurb:
      "Vaccines formulated for cattle, sheep and goat herds across Nigerian farms.",
  },
  {
    slug: "canine-vaccines",
    name: "Canine Vaccines",
    group: "Vaccines",
    blurb:
      "Core and non-core canine vaccines meeting international veterinary standards.",
  },
  {
    slug: "poultry",
    name: "Poultry Drugs",
    group: "Drugs",
    blurb:
      "Antibiotics, coccidiostats, vitamins and supportive therapy for poultry health.",
  },
  {
    slug: "large-animal-drugs",
    name: "Large Animal Drugs",
    group: "Drugs",
    blurb:
      "Therapeutics and nutritional support for cattle, small ruminants and equines.",
  },
  {
    slug: "disinfectant",
    name: "Disinfectants",
    group: "Biosecurity",
    blurb:
      "Farm-grade disinfectants for hatcheries, pens, equipment and vehicle wash bays.",
  },
];

export type ProductCategory = ProductCat;

// -------- Animals --------
export type Animal =
  | "broilers"
  | "layers"
  | "cattle"
  | "goats"
  | "sheep"
  | "dogs";

export const animalLabel: Record<Animal, string> = {
  broilers: "Broilers",
  layers: "Layers",
  cattle: "Cattle",
  goats: "Goats",
  sheep: "Sheep",
  dogs: "Dogs",
};

export const categoryAnimals: Record<string, Animal[]> = {
  "live-vaccines": ["broilers", "layers"],
  "oil-vaccines": ["layers", "broilers"],
  "livestock-vaccines": ["cattle", "goats", "sheep"],
  "canine-vaccines": ["dogs"],
  poultry: ["broilers", "layers"],
  "large-animal-drugs": ["cattle", "goats", "sheep"],
  disinfectant: ["broilers", "layers", "cattle"],
};

export type Product = {
  slug: string;
  category: string;
  name: string;
  blurb: string;
  targets: Animal[];
};

export const products: readonly Product[] = [
  { slug: "nd-lasota", category: "live-vaccines", name: "ND LaSota", blurb: "Live attenuated Newcastle Disease vaccine for routine flock protection.", targets: ["broilers", "layers"] },
  { slug: "gumboro-ibd", category: "live-vaccines", name: "Gumboro (IBD)", blurb: "Live vaccine against Infectious Bursal Disease in young birds.", targets: ["broilers", "layers"] },
  { slug: "ib-h120", category: "live-vaccines", name: "IB H120", blurb: "Live vaccine for prevention of Infectious Bronchitis in poultry.", targets: ["broilers", "layers"] },
  { slug: "fowl-pox", category: "live-vaccines", name: "Fowl Pox", blurb: "Live vaccine administered by wing-web stab for pox prevention.", targets: ["broilers", "layers"] },

  { slug: "nd-ib-oil", category: "oil-vaccines", name: "ND + IB Oil", blurb: "Inactivated oil-emulsion vaccine for long-duration ND and IB cover.", targets: ["layers", "broilers"] },
  { slug: "eds-76", category: "oil-vaccines", name: "EDS 76", blurb: "Inactivated vaccine against Egg Drop Syndrome in commercial layers.", targets: ["layers"] },
  { slug: "ai-h9", category: "oil-vaccines", name: "Avian Influenza H9", blurb: "Inactivated oil vaccine supporting flock immunity against H9.", targets: ["layers", "broilers"] },
  { slug: "multi-oil-breeder", category: "oil-vaccines", name: "Multivalent Breeder Oil", blurb: "Combined inactivated vaccine formulated for breeding flocks.", targets: ["layers"] },

  { slug: "ppr-vaccine", category: "livestock-vaccines", name: "PPR Vaccine", blurb: "Protection against Peste des Petits Ruminants in sheep and goats.", targets: ["sheep", "goats"] },
  { slug: "cbpp", category: "livestock-vaccines", name: "CBPP Vaccine", blurb: "Vaccine against Contagious Bovine Pleuropneumonia in cattle.", targets: ["cattle"] },
  { slug: "blackleg", category: "livestock-vaccines", name: "Blackleg", blurb: "Prevention of clostridial blackleg disease in cattle herds.", targets: ["cattle"] },
  { slug: "anthrax-spore", category: "livestock-vaccines", name: "Anthrax Spore", blurb: "Spore vaccine providing annual anthrax protection for livestock.", targets: ["cattle", "sheep", "goats"] },

  { slug: "rabies", category: "canine-vaccines", name: "Rabies", blurb: "Annual rabies vaccine meeting international veterinary standards.", targets: ["dogs"] },
  { slug: "dhppi", category: "canine-vaccines", name: "DHPPi", blurb: "Core multivalent vaccine for distemper, hepatitis, parvo and parainfluenza.", targets: ["dogs"] },
  { slug: "lepto", category: "canine-vaccines", name: "Leptospira", blurb: "Vaccine against canine leptospirosis for at-risk dogs.", targets: ["dogs"] },
  { slug: "kennel-cough", category: "canine-vaccines", name: "Kennel Cough", blurb: "Bordetella vaccine for dogs in kennels or high-contact environments.", targets: ["dogs"] },

  { slug: "immuno-igy-booster", category: "poultry", name: "IMMUNO IgY Booster", blurb: "Egg-yolk antibody booster for early flock immunity support.", targets: ["broilers", "layers"] },
  { slug: "coccistop", category: "poultry", name: "Coccistop", blurb: "Coccidiostat for prevention and control of coccidiosis in poultry.", targets: ["broilers", "layers"] },
  { slug: "multivit-electrolyte", category: "poultry", name: "Multivit + Electrolyte", blurb: "Oral vitamin and electrolyte solution for stress recovery.", targets: ["broilers", "layers"] },
  { slug: "liver-tonic", category: "poultry", name: "Liver Tonic", blurb: "Anti-stress liver support formula for improved performance.", targets: ["broilers", "layers"] },

  { slug: "oxytet-la", category: "large-animal-drugs", name: "Oxytetracycline LA", blurb: "Long-acting broad-spectrum injectable antibiotic for livestock.", targets: ["cattle", "sheep", "goats"] },
  { slug: "ivermectin-inj", category: "large-animal-drugs", name: "Ivermectin Injection", blurb: "Anti-parasitic injection for internal and external parasites.", targets: ["cattle", "sheep", "goats"] },
  { slug: "multimineral", category: "large-animal-drugs", name: "Multimineral Tonic", blurb: "Mineral and vitamin supplement for herd condition and fertility.", targets: ["cattle", "sheep", "goats"] },
  { slug: "cal-mag", category: "large-animal-drugs", name: "Cal-Mag Solution", blurb: "Calcium and magnesium solution for milk fever and metabolic support.", targets: ["cattle"] },

  { slug: "farm-disinfectant", category: "disinfectant", name: "Farm Disinfectant", blurb: "Broad-spectrum concentrate for pens, houses and equipment.", targets: ["broilers", "layers", "cattle"] },
  { slug: "footbath-conc", category: "disinfectant", name: "Footbath Concentrate", blurb: "Formulated for biosecurity footbaths at farm entry points.", targets: ["broilers", "layers", "cattle"] },
  { slug: "hatchery-fumigant", category: "disinfectant", name: "Hatchery Fumigant", blurb: "Hatchery-grade fumigant for incubators and setter rooms.", targets: ["broilers", "layers"] },
  { slug: "waterline-sanitiser", category: "disinfectant", name: "Waterline Sanitiser", blurb: "Sanitiser for poultry drinking-water lines and tanks.", targets: ["broilers", "layers"] },
];
