import {
  badenWuerttembergContent,
  badenWuerttembergFacts,
} from "./regions/baden-wuerttemberg";
import { bayernContent, bayernFacts } from "./regions/bayern";
import {
  brandenburgContent,
  brandenburgFacts,
} from "./regions/brandenburg";
import { hessenContent, hessenFacts } from "./regions/hessen";
import {
  mecklenburgVorpommernContent,
  mecklenburgVorpommernFacts,
} from "./regions/mecklenburg-vorpommern";
import {
  niedersachsenContent,
  niedersachsenFacts,
} from "./regions/niedersachsen";
import { nrwContent, nrwFacts } from "./regions/nrw";
import {
  rheinlandPfalzContent,
  rheinlandPfalzFacts,
} from "./regions/rheinland-pfalz";
import { saarlandContent, saarlandFacts } from "./regions/saarland";
import { sachsenContent, sachsenFacts } from "./regions/sachsen";
import {
  sachsenAnhaltContent,
  sachsenAnhaltFacts,
} from "./regions/sachsen-anhalt";
import {
  schleswigHolsteinContent,
  schleswigHolsteinFacts,
} from "./regions/schleswig-holstein";
import { phase2Content, phase2Facts } from "./regions/phase-2";
import { phase3Content, phase3Facts } from "./regions/phase-3";
import { phase4Content, phase4Facts } from "./regions/phase-4";
import { thueringenContent, thueringenFacts } from "./regions/thueringen";
import { stralsundContent } from "./content/stralsund";
import { wismarContent } from "./content/wismar";
import {
  areBundeslandPagesPubliclyAccessible,
  areCityPagesPubliclyAccessible,
} from "./cityPagesRollout";
import type { CityContent, CityFacts, CityRecord } from "./types";

export const wismarFacts: CityFacts = {
  slug: "wismar",
  name: "Wismar",
  bundesland: "Mecklenburg-Vorpommern",
  kreisOrBezirk: "Nordwestmecklenburg",
  stadtTyp: "Hansestadt",
  population: {
    approx: 43000,
    label: "rund 43.000",
    year: 2024,
  },
  courts: {
    amtsgericht: "Amtsgericht Wismar",
    landgericht: "Landgericht Schwerin",
    oberlandesgericht: "OLG Rostock",
    besonderheiten: [
      "Mahnverfahren laufen über das Amtsgericht Hamburg (zentrales Mahngericht)",
    ],
  },
  economy: {
    sectors: ["Werft/Schiffbau", "Seehafen", "Holzindustrie", "Tourismus"],
    keyEmployersOrClusters: ["Leibnitz-Werft", "Hafen Wismar"],
    profile:
      "Hafen- und Industriestadt an der Ostsee mit UNESCO-Welterbe-Altstadt",
  },
  primaryLegalArea: "See- und Speditionsrecht",
  secondaryLegalAreas: [
    "Tourismus-/Saisonarbeitsrecht",
    "Handels- und Gesellschaftsrecht",
  ],
  landmarks: ["UNESCO-Welterbe Altstadt", "Alter Hafen", "Marktplatz"],
  mapCoords: { x: 60.9, y: 20.4, anchor: "start" },
  nearbySlugs: ["schwerin", "stralsund", "greifswald", "rostock"],
  rolloutPhase: 1,
  status: "live",
};

export const stralsundFacts: CityFacts = {
  slug: "stralsund",
  name: "Stralsund",
  bundesland: "Mecklenburg-Vorpommern",
  kreisOrBezirk: "Vorpommern-Rügen",
  stadtTyp: "Hansestadt",
  population: {
    approx: 59000,
    label: "rund 59.000",
    year: 2024,
  },
  courts: {
    amtsgericht: "Amtsgericht Stralsund",
    landgericht: "Landgericht Stralsund",
    oberlandesgericht: "OLG Rostock",
    besonderheiten: [
      "Mahnverfahren laufen über das Amtsgericht Hamburg (zentrales Mahngericht)",
    ],
  },
  economy: {
    sectors: ["Werft/Schiffbau", "Hafen", "Tourismus", "Tor zu Rügen"],
    keyEmployersOrClusters: ["Ozeaneum", "Strelasund-Hafen"],
    profile:
      "Hansestadt und Hafenstadt am Strelasund mit direkter Anbindung nach Rügen",
  },
  primaryLegalArea: "See- und Schifffahrtsrecht",
  secondaryLegalAreas: [
    "Tourismus-/Saisonarbeitsrecht",
    "Miet- und Gewerberecht",
  ],
  landmarks: ["UNESCO-Welterbe Altstadt", "Ozeaneum", "Rügenbrücke"],
  mapCoords: { x: 78.6, y: 13.1, anchor: "end" },
  nearbySlugs: ["schwerin", "rostock", "wismar", "greifswald"],
  rolloutPhase: 1,
  status: "live",
};

const CONTENT_BY_SLUG: Record<string, CityContent> = {
  wismar: wismarContent,
  stralsund: stralsundContent,
  ...badenWuerttembergContent,
  ...bayernContent,
  ...brandenburgContent,
  ...hessenContent,
  ...mecklenburgVorpommernContent,
  ...niedersachsenContent,
  ...nrwContent,
  ...rheinlandPfalzContent,
  ...saarlandContent,
  ...sachsenContent,
  ...sachsenAnhaltContent,
  ...schleswigHolsteinContent,
  ...thueringenContent,
  ...phase2Content,
  ...phase3Content,
  ...phase4Content,
};

const ALL_CITIES: CityFacts[] = [
  wismarFacts,
  stralsundFacts,
  ...badenWuerttembergFacts,
  ...bayernFacts,
  ...brandenburgFacts,
  ...hessenFacts,
  ...mecklenburgVorpommernFacts,
  ...niedersachsenFacts,
  ...nrwFacts,
  ...rheinlandPfalzFacts,
  ...saarlandFacts,
  ...sachsenFacts,
  ...sachsenAnhaltFacts,
  ...schleswigHolsteinFacts,
  ...thueringenFacts,
  ...phase2Facts,
  ...phase3Facts,
  ...phase4Facts,
];

export const LIVE_CITIES = ALL_CITIES.filter((c) => c.status === "live");

export function isLiveCitySlug(slug: string): slug is string {
  return LIVE_CITIES.some((c) => c.slug === slug);
}

export function isPublicCitySlug(slug: string): boolean {
  return areCityPagesPubliclyAccessible() && isLiveCitySlug(slug);
}

export { areBundeslandPagesPubliclyAccessible, areCityPagesPubliclyAccessible };

export function getCityFacts(slug: string): CityFacts | null {
  return ALL_CITIES.find((c) => c.slug === slug) ?? null;
}

export function getCityContent(slug: string): CityContent | null {
  return CONTENT_BY_SLUG[slug] ?? null;
}

export function getCityRecord(slug: string): CityRecord | null {
  const facts = getCityFacts(slug);
  const content = getCityContent(slug);
  if (!facts || !content) return null;
  return { ...facts, content };
}

export function getLiveCityRecords(): CityRecord[] {
  return LIVE_CITIES.map((facts) => {
    const content = CONTENT_BY_SLUG[facts.slug];
    if (!content) {
      throw new Error(`Missing content for live city: ${facts.slug}`);
    }
    return { ...facts, content };
  });
}

export function getMapMarkers(): {
  slug: string;
  name: string;
  x: number;
  y: number;
  anchor?: "start" | "end";
  live: boolean;
}[] {
  return ALL_CITIES.map((c) => ({
    slug: c.slug,
    name: c.name,
    x: c.mapCoords.x,
    y: c.mapCoords.y,
    anchor: c.mapCoords.anchor,
    live: c.status === "live",
  }));
}

export function hrefForCity(slug: string): string {
  return `/kanzlei-website/${slug}`;
}
