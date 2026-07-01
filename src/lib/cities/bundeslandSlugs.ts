import { BUNDESLAENDER, type Bundesland } from "./bundeslaender";

function bundeslandToSlug(name: Bundesland): string {
  return name
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** All 16 Bundesländer with a dedicated hub page under `/deutschlandweit/bundesland/[slug]`. */
export const BUNDESLAND_PAGE_SLUGS = BUNDESLAENDER.map(
  bundeslandToSlug,
) as unknown as readonly [
  "baden-wuerttemberg",
  "bayern",
  "berlin",
  "brandenburg",
  "bremen",
  "hamburg",
  "hessen",
  "mecklenburg-vorpommern",
  "niedersachsen",
  "nordrhein-westfalen",
  "rheinland-pfalz",
  "saarland",
  "sachsen",
  "sachsen-anhalt",
  "schleswig-holstein",
  "thueringen",
];

export type BundeslandPageSlug = (typeof BUNDESLAND_PAGE_SLUGS)[number];

const SLUG_TO_NAME = Object.fromEntries(
  BUNDESLAENDER.map((name) => [bundeslandToSlug(name), name]),
) as Record<BundeslandPageSlug, Bundesland>;

const NAME_TO_SLUG = Object.fromEntries(
  BUNDESLAENDER.map((name) => [name, bundeslandToSlug(name)]),
) as Record<Bundesland, BundeslandPageSlug>;

export function slugToBundeslandName(slug: string): Bundesland | null {
  if (!(BUNDESLAND_PAGE_SLUGS as readonly string[]).includes(slug)) {
    return null;
  }
  return SLUG_TO_NAME[slug as BundeslandPageSlug] ?? null;
}

export function bundeslandNameToSlug(name: Bundesland): BundeslandPageSlug {
  return NAME_TO_SLUG[name];
}

export function isBundeslandPageSlug(
  slug: string,
): slug is BundeslandPageSlug {
  return (BUNDESLAND_PAGE_SLUGS as readonly string[]).includes(slug);
}

export function hrefForBundesland(slug: BundeslandPageSlug): string {
  return `/deutschlandweit/bundesland/${slug}`;
}
