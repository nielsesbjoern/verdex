import type { Bundesland } from "./bundeslaender";
import { LIVE_CITIES } from "./citiesMeta";
import type { BundeslandPageRecord } from "./types";
import type { BundeslandPageSlug } from "./bundeslandSlugs";

function frequencyTop(values: string[], n: number): string[] {
  const counts = new Map<string, number>();
  for (const value of values) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "de"))
    .slice(0, n)
    .map(([value]) => value);
}

function sharedPricingFaq(bundesland: string) {
  return [
    {
      q: `Arbeitet Verdex remote mit Kanzleien in ${bundesland}?`,
      a: "Ja — vom Erstgespräch bis zum Launch. Hosting und Datenschutz bleiben in Deutschland.",
    },
    {
      q: "Was kostet eine Kanzlei-Website bei Verdex?",
      a: "Eine individuelle Kanzlei-Website beginnt bei 6.900 €; Pakete mit lokaler Sichtbarkeit starten bei 11.000 €. Nach dem Erstgespräch erhalten Sie ein verbindliches Festpreis-Angebot.",
    },
  ];
}

/** Builds a Bundesland hub page from aggregated live city data. */
export function buildBundeslandPage(
  name: Bundesland,
  slug: BundeslandPageSlug,
): BundeslandPageRecord {
  const cities = LIVE_CITIES.filter((c) => c.bundesland === name).sort(
    (a, b) => b.population.approx - a.population.approx,
  );

  const largest = cities[0];
  const legalAreas = frequencyTop(
    cities.map((c) => c.primaryLegalArea),
    3,
  );
  const sectors = Array.from(
    new Set(cities.flatMap((c) => c.economy.sectors)),
  ).slice(0, 6);
  const mapHighlightSlugs = cities.slice(0, 5).map((c) => c.slug);
  const olgs = Array.from(
    new Set(cities.map((c) => c.courts.oberlandesgericht)),
  );
  const sampleCities = cities
    .slice(0, 4)
    .map((c) => c.name)
    .join(", ");

  return {
    slug,
    name,
    stadtTyp: "Bundesland",
    populationLabel: `${cities.length} Standorte in ${name}`,
    courts: {
      amtsgericht: `Amtsgerichte in ${name} (standortabhängig)`,
      landgericht: `Landgerichte in ${name} (zuständigkeitsabhängig)`,
      oberlandesgericht: largest.courts.oberlandesgericht,
      besonderheiten:
        olgs.length > 1
          ? [
              `In ${name} sind mehrere Oberlandesgerichte vertreten — die Zuständigkeit hängt vom konkreten Standort ab.`,
            ]
          : undefined,
    },
    economy: {
      sectors,
      profile: `Wirtschaftlich vielfältiges Bundesland mit Schwerpunkten u. a. in ${sectors.slice(0, 3).join(", ")}`,
    },
    primaryLegalAreas: legalAreas,
    mapHighlightSlugs,
    content: {
      heroSubtitle: `Für Kanzleien in ${name} — wo ${legalAreas.join(", ")} und regionale Wirtschaftsstrukturen typische Mandatsfelder prägen.`,
      introParagraphs: [
        `${name} umfasst ${cities.length} Standorte, für die Verdex dedizierte Kanzlei-Websites entwickelt — von ${sampleCities}${cities.length > 4 ? " und weiteren Städten" : ""}. Mandanten suchen online nach Rechtsgebiet plus Ort; eine Website, die Gerichte und regionale Besonderheiten benennt, gewinnt Vertrauen vor dem ersten Gespräch.`,
        `Als Flächenland variiert die Gerichtszuständigkeit je nach Wohn- oder Geschäftssitz. Kanzleien in ${name} profitieren von Standortseiten, die Amts- und Landgericht, Oberlandesgericht und typische Branchen verständlich verknüpfen — ohne generische Baukasten-Texte.`,
      ],
      courtsNarrative: `In ${name} sind Amts- und Landgerichte regional verteilt; als Oberlandesgericht ist ${largest.courts.oberlandesgericht} maßgeblich${olgs.length > 1 ? ", je nach Standort können weitere OLG-Bezirke relevant sein" : ""}. Mandanten erwarten auf Kanzleiseiten eine nachvollziehbare Instanzenkette — das schafft Kompetenz, bevor sie anrufen.`,
      economyNarrative: `${sectors.slice(0, 4).join(", ")} prägen die Wirtschaft in ${name}. Daraus entstehen Mandate in ${legalAreas.join(", ")} und weiteren Rechtsgebieten — Kanzleien, die Branche und Rechtsschwerpunkt sichtbar machen, werden eher gefunden als Seiten mit einer allgemeinen Leistungsliste.`,
      whyVerdexParagraph: `Verdex recherchiert ${name} strukturiert — von Gerichtsstrukturen bis zu regionalen Wirtschaftsschwerpunkten. Daraus entstehen Kanzlei-Auftritte, die lokal nachvollziehbar wirken, ohne erfundene Referenzen oder Mandatsversprechen.`,
      faq: [
        {
          q: `Für welche Städte in ${name} gibt es Standortseiten?`,
          a: `Aktuell ${cities.length} Städte — darunter ${sampleCities}. Jede Seite verbindet lokale Gerichte, Wirtschaft und typische Suchintentionen mit Ihrem Kanzlei-Profil.`,
        },
        {
          q: `Welche Rechtsgebiete sind in ${name} besonders relevant?`,
          a: `Häufig gesucht werden ${legalAreas.join(", ")} — abhängig von Standort und Kanzleischwerpunkt. Eine spezialisierte Website benennt beides klar.`,
        },
        ...sharedPricingFaq(name),
      ],
    },
  };
}
