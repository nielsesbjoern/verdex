/**
 * Stadt-Landingpages unter /kanzlei-website/[stadt] sind im Code vorbereitet,
 * aber bis zum Rollout nicht öffentlich erreichbar.
 *
 * Go-Live: NEXT_PUBLIC_CITY_PAGES_PUBLIC=true setzen und neu deployen.
 */
export const CITY_PAGES_PUBLICLY_ACCESSIBLE =
  process.env.NEXT_PUBLIC_CITY_PAGES_PUBLIC === "true";

export function areCityPagesPubliclyAccessible(): boolean {
  return CITY_PAGES_PUBLICLY_ACCESSIBLE;
}
