/**
 * Regionale Landingpages (Städte + Bundesländer) sind im Code vorbereitet,
 * aber bis zum Rollout nicht öffentlich erreichbar.
 *
 * Go-Live: NEXT_PUBLIC_CITY_PAGES_PUBLIC=true setzen und neu deployen.
 */
export const REGIONAL_PAGES_PUBLICLY_ACCESSIBLE =
  process.env.NEXT_PUBLIC_CITY_PAGES_PUBLIC === "true";

export const CITY_PAGES_PUBLICLY_ACCESSIBLE = REGIONAL_PAGES_PUBLICLY_ACCESSIBLE;
export const BUNDESLAND_PAGES_PUBLICLY_ACCESSIBLE =
  REGIONAL_PAGES_PUBLICLY_ACCESSIBLE;

export function areCityPagesPubliclyAccessible(): boolean {
  return CITY_PAGES_PUBLICLY_ACCESSIBLE;
}

export function areBundeslandPagesPubliclyAccessible(): boolean {
  return BUNDESLAND_PAGES_PUBLICLY_ACCESSIBLE;
}
