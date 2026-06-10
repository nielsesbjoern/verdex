import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { translations } from "@/lib/i18n";
import { SolutionDetail } from "@/components/solutions/SolutionDetail";
import {
  SOLUTIONS,
  ID_BY_SLUG,
  isVisibleSlug,
} from "@/components/solutions/solutionsMeta";

type Params = { slug: string };

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

/** German is the canonical language used for metadata. */
function copyForSlug(slug: string) {
  if (!isVisibleSlug(slug)) return null;
  const id = ID_BY_SLUG[slug];
  const d = translations.de.solutions;
  if (id === "websites") return d.websites;
  if (id === "authority") return d.authority;
  return d.amicus;
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const copy = copyForSlug(params.slug);
  if (!copy) return {};

  const description =
    copy.body.length > 155 ? `${copy.body.slice(0, 152)}…` : copy.body;

  return {
    title: copy.title,
    description,
    alternates: { canonical: `/leistungen/${params.slug}` },
    openGraph: { title: `${copy.title} — Verdex`, description, type: "website" },
  };
}

export default function SolutionPage({ params }: { params: Params }) {
  if (!isVisibleSlug(params.slug)) notFound();
  return <SolutionDetail solutionId={ID_BY_SLUG[params.slug]} />;
}
