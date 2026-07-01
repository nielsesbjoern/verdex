import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BundeslandLandingPage } from "@/components/cities/BundeslandLandingPage";
import { REGIONAL_PAGES_PUBLICLY_ACCESSIBLE } from "@/lib/cities/cityPagesRollout";
import {
  BUNDESLAND_PAGE_SLUGS,
  getBundeslandPageRecord,
  isBundeslandPageSlug,
} from "@/lib/cities/bundeslandMeta";

type Params = { slug: string };

export const dynamicParams = REGIONAL_PAGES_PUBLICLY_ACCESSIBLE;

export function generateStaticParams() {
  if (!REGIONAL_PAGES_PUBLICLY_ACCESSIBLE) return [];
  return BUNDESLAND_PAGE_SLUGS.map((slug) => ({ slug }));
}

const STADTSTAATEN = new Set(["Berlin", "Hamburg", "Bremen"]);

function metadataForBundesland(slug: string): Metadata | null {
  const record = getBundeslandPageRecord(slug);
  if (!record) return null;

  const titleSuffix = STADTSTAATEN.has(record.name)
    ? "Stadtstaat & Gerichte"
    : "Regional & lokal sichtbar";
  const title = `Kanzlei-Website ${record.name} — ${titleSuffix}`;
  const description = `Website-Entwicklung für Kanzleien in ${record.name}. ${record.primaryLegalAreas.join(", ")}. Gerichte: ${record.courts.amtsgericht} → ${record.courts.landgericht}. Remote, DSGVO-konform.`;

  return {
    title,
    description,
    alternates: { canonical: `/deutschlandweit/bundesland/${record.slug}` },
    openGraph: {
      title: `${title} | Verdex`,
      description,
      type: "website",
    },
  };
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  if (!REGIONAL_PAGES_PUBLICLY_ACCESSIBLE) {
    return { robots: { index: false, follow: false } };
  }
  return metadataForBundesland(params.slug) ?? {};
}

export default function BundeslandPage({ params }: { params: Params }) {
  if (!REGIONAL_PAGES_PUBLICLY_ACCESSIBLE) notFound();
  if (!isBundeslandPageSlug(params.slug)) notFound();
  const record = getBundeslandPageRecord(params.slug);
  if (!record) notFound();

  const { cities, ...page } = record;
  return <BundeslandLandingPage page={page} cities={cities} />;
}
