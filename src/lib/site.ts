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
  address: "Lagos, Nigeria",
  yearFounded: 2013,
};

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
] as const;

export type ProductCategory = (typeof productCategories)[number];
