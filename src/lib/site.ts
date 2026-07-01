/** Canonical site origin — used for sitemaps, JSON-LD, and Open Graph. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://verdex.de";

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
