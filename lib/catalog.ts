import catalog from "./catalog.json";

export type OfferingItem = {
  id: string;
  title: string;
  desc: string;
  detailedContent: string;
  image: string;
  tags: string[];
  capabilities: string[];
  steps: string[];
};

export type OfferingCategory = {
  category: string;
  items: OfferingItem[];
};

export type SolutionItem = {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  capabilities: string[];
  steps: string[];
  logo: string;
  cover: string;
};

export const catalogSolutions = catalog.solutions as SolutionItem[];
export const catalogServices = catalog.services as OfferingCategory[];
export const catalogManagedCloud = catalog.managedCloud as OfferingCategory[];
export const catalogAiServices = catalog.aiServices as OfferingCategory[];
export const catalogTestimonials = catalog.testimonials as {
  quote: string;
  name: string;
  role: string;
  init: string;
}[];
export const catalogTeam = catalog.team as {
  name: string;
  role: string;
  image: string;
}[];

export function flattenOfferings(cats: OfferingCategory[]) {
  return cats.flatMap((c) =>
    c.items.map((item) => ({ ...item, category: c.category }))
  );
}

export function findOffering(
  cats: OfferingCategory[],
  id: string
): (OfferingItem & { category: string }) | undefined {
  for (const c of cats) {
    const item = c.items.find((i) => i.id === id);
    if (item) return { ...item, category: c.category };
  }
  return undefined;
}

export const allServiceItems = flattenOfferings(catalogServices);
export const allManagedItems = flattenOfferings(catalogManagedCloud);
export const allAiItems = flattenOfferings(catalogAiServices);
