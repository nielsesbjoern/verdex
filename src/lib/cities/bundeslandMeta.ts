import type { Bundesland } from "./bundeslaender";
import { LIVE_CITIES } from "./citiesMeta";
import { getBundeslandPage } from "./bundeslandPages";
import {
  hrefForBundesland,
  isBundeslandPageSlug,
  slugToBundeslandName,
  bundeslandNameToSlug,
} from "./bundeslandSlugs";
import type { CityFacts } from "./types";

export {
  hrefForBundesland,
  isBundeslandPageSlug,
  slugToBundeslandName,
  bundeslandNameToSlug,
};
export { getBundeslandPage, getLiveBundeslandPages } from "./bundeslandPages";
export {
  BUNDESLAND_PAGE_SLUGS,
  type BundeslandPageSlug,
} from "./bundeslandSlugs";

export function getCitiesInBundesland(bundeslandName: string): CityFacts[] {
  return LIVE_CITIES.filter((c) => c.bundesland === bundeslandName).sort(
    (a, b) => a.name.localeCompare(b.name, "de"),
  );
}

export function hasBundeslandPage(bundeslandName: Bundesland): boolean {
  return Boolean(bundeslandName);
}

export function getBundeslandPageRecord(slug: string) {
  if (!isBundeslandPageSlug(slug)) return null;
  const page = getBundeslandPage(slug);
  if (!page) return null;
  const cities = getCitiesInBundesland(page.name);
  return { ...page, cities };
}
