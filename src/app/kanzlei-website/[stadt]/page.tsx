import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityLandingPage } from "@/components/cities/CityLandingPage";
import { CITY_PAGES_PUBLICLY_ACCESSIBLE } from "@/lib/cities/cityPagesRollout";
import {
  getCityRecord,
  isLiveCitySlug,
  LIVE_CITIES,
} from "@/lib/cities/citiesMeta";

type Params = { stadt: string };

export const dynamicParams = CITY_PAGES_PUBLICLY_ACCESSIBLE;

export function generateStaticParams() {
  if (!CITY_PAGES_PUBLICLY_ACCESSIBLE) return [];
  return LIVE_CITIES.map((c) => ({ stadt: c.slug }));
}

function metadataForCity(slug: string): Metadata | null {
  const city = getCityRecord(slug);
  if (!city) return null;

  const title = `Kanzlei-Website ${city.name} — Modern, lokal sichtbar`;
  const description = `Website-Entwicklung für Kanzleien in ${city.name}. ${city.primaryLegalArea}, Gerichtszuständigkeit ${city.courts.amtsgericht} → ${city.courts.landgericht}. Persönlich, DSGVO-konform.`;

  return {
    title,
    description,
    alternates: { canonical: `/kanzlei-website/${city.slug}` },
    openGraph: {
      title: `${title} | Verdex`,
      description,
      type: "website",
    },
  };
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  if (!CITY_PAGES_PUBLICLY_ACCESSIBLE) {
    return { robots: { index: false, follow: false } };
  }
  return metadataForCity(params.stadt) ?? {};
}

export default function CityPage({ params }: { params: Params }) {
  if (!CITY_PAGES_PUBLICLY_ACCESSIBLE) notFound();
  if (!isLiveCitySlug(params.stadt)) notFound();
  const city = getCityRecord(params.stadt);
  if (!city) notFound();
  return <CityLandingPage city={city} />;
}
