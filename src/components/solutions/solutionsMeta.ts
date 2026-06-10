import { AMICUS_VISIBLE } from "@/lib/features";

/** Stable internal id (matches i18n keys under `solutions`). */
export type SolutionId = "websites" | "authority" | "amicus";
/** Public, German URL slug under `/leistungen/[slug]`. */
export type SolutionSlug = "websites" | "sichtbarkeit" | "amicus";
export type SolutionVariant = "light" | "gray" | "dark";

export const ID_BY_SLUG: Record<SolutionSlug, SolutionId> = {
  websites: "websites",
  sichtbarkeit: "authority",
  amicus: "amicus",
};

export const SLUG_BY_ID: Record<SolutionId, SolutionSlug> = {
  websites: "websites",
  authority: "sichtbarkeit",
  amicus: "amicus",
};

type SolutionMeta = {
  id: SolutionId;
  slug: SolutionSlug;
  variant: SolutionVariant;
};

/** Display order of the solution cards. Amicus only when the flag is on. */
export const SOLUTIONS: SolutionMeta[] = [
  { id: "websites", slug: "websites", variant: "light" },
  { id: "authority", slug: "sichtbarkeit", variant: "gray" },
  ...(AMICUS_VISIBLE
    ? [{ id: "amicus", slug: "amicus", variant: "dark" } as const]
    : []),
];

export function isVisibleSlug(slug: string): slug is SolutionSlug {
  return SOLUTIONS.some((s) => s.slug === slug);
}

export function hrefForSlug(slug: SolutionSlug): string {
  return `/leistungen/${slug}`;
}
