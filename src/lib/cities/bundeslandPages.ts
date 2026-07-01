import type { BundeslandPageRecord } from "./types";
import { BUNDESLAENDER } from "./bundeslaender";
import { buildBundeslandPage } from "./buildBundeslandPage";
import type { BundeslandPageSlug } from "./bundeslandSlugs";
import { bundeslandNameToSlug } from "./bundeslandSlugs";
import {
  BE,
  BERLIN_OLG,
  BREMEN_OLG,
  HAMBURG_OLG,
  HB,
  HH,
} from "./regions/phase-2-shared";

export type { BundeslandPageRecord } from "./types";

const sharedPricingFaq = (bundesland: string) => [
  {
    q: `Arbeitet Verdex remote mit Kanzleien in ${bundesland}?`,
    a: "Ja — vom Erstgespräch bis zum Launch. Hosting und Datenschutz bleiben in Deutschland.",
  },
  {
    q: "Was kostet eine Kanzlei-Website bei Verdex?",
    a: "Eine individuelle Kanzlei-Website beginnt bei 6.900 €; Pakete mit lokaler Sichtbarkeit starten bei 11.000 €. Nach dem Erstgespräch erhalten Sie ein verbindliches Festpreis-Angebot.",
  },
];

const CUSTOM_BUNDESLAND_PAGES: BundeslandPageRecord[] = [
  {
    slug: "berlin",
    name: BE,
    stadtTyp: "Stadtstaat",
    populationLabel: "rund 3,7 Mio.",
    courts: {
      amtsgericht: "Amtsgerichte Berlin (bezirksweise)",
      landgericht: "Landgericht Berlin",
      oberlandesgericht: BERLIN_OLG,
      besonderheiten: [
        "Zivilgerichtlich zuständig ist je nach Wohn- oder Geschäftssitz eines der Berliner Amtsgerichte (z. B. Mitte, Charlottenburg, Tempelhof-Kreuzberg)",
      ],
    },
    economy: {
      sectors: ["Verwaltung", "Kreativwirtschaft", "Tech", "Tourismus"],
      profile:
        "Hauptstadt mit Verwaltung, Kreativwirtschaft, Tech und internationalem Wirtschaftsumfeld",
    },
    primaryLegalAreas: ["Mietrecht", "Arbeitsrecht", "Verwaltungsrecht"],
    mapHighlightSlugs: ["berlin"],
    content: {
      heroSubtitle:
        "Für Kanzleien in der Hauptstadt — wo angespannter Wohnungsmarkt, Verwaltung und wachsende Tech-Branche typische Mandatsfelder prägen.",
      introParagraphs: [
        "Berlin ist Stadtstaat und Bundesland zugleich — mit rund 3,7 Millionen Einwohnern das größte Bundesland nach Fläche und Bevölkerung in der Stadt. Verwaltung, Kreativwirtschaft, Tech und Tourismus prägen den Markt; Miet- und Arbeitsrecht stehen für viele Kanzleien im Zentrum der Mandatsakquise.",
        "Als Stadtstaat gibt es keine umliegenden Kreisstädte — die Kanzlei-Website muss Berlin selbst klar benennen: Gerichte, Bezirke und typische Suchbegriffe sind für Mandanten online der erste Orientierungspunkt.",
      ],
      courtsNarrative:
        "In Berlin sind Amtsgerichte bezirksweise organisiert — die Zuständigkeit hängt vom Wohn- oder Geschäftssitz ab. Landgericht Berlin und Kammergericht Berlin (Oberlandesgericht) bilden den überregionalen Instanzenweg. Eine verständliche Darstellung dieser Struktur schafft Vertrauen, bevor Mandanten anrufen.",
      economyNarrative:
        "Verwaltung, Kreativwirtschaft und Tech erzeugen Mandate in Miet-, Arbeits- und Verwaltungsrecht. Der angespannte Wohnungsmarkt macht Mietrecht zum häufigsten Suchthema — daneben Arbeitsrecht in wachsenden Betrieben und Verwaltungsrecht im Behördenumfeld.",
      whyVerdexParagraph:
        "Verdex recherchiert Berlin als Stadtstaat — Gerichte, Wirtschaft und typische Suchintentionen, ohne erfundene Referenzen oder Portfolio-Vortäuschungen.",
      faq: [
        {
          q: "Welches Amtsgericht ist in Berlin zuständig?",
          a: "Das hängt vom Bezirk ab — es gibt mehrere Amtsgerichte in Berlin. Eine gute Kanzlei-Website erklärt die Struktur und verweist Mandanten an die richtige Stelle, ohne Rechtsberatung zu ersetzen.",
        },
        {
          q: "Lohnt sich lokale SEO in Berlin trotz hoher Konkurrenz?",
          a: "Ja — spezialisierte Kanzleien profitieren von klarem Rechtsgebiet plus Stadtbezug. Generische Startseiten verlieren gegen Seiten, die Gerichte und Mandatsfelder benennen.",
        },
        ...sharedPricingFaq("Berlin"),
      ],
    },
  },
  {
    slug: "hamburg",
    name: HH,
    stadtTyp: "Stadtstaat",
    populationLabel: "rund 1,9 Mio.",
    courts: {
      amtsgericht: "Amtsgericht Hamburg",
      landgericht: "Landgericht Hamburg",
      oberlandesgericht: HAMBURG_OLG,
    },
    economy: {
      sectors: ["Hafen/Logistik", "Medien", "Luftfahrt", "Handel"],
      profile:
        "Hansestadt mit Hafen, Medienstandort und internationalem Handel",
    },
    primaryLegalAreas: ["Handelsrecht", "Transport-/Speditionsrecht", "Arbeitsrecht"],
    mapHighlightSlugs: ["hamburg"],
    content: {
      heroSubtitle:
        "Für Kanzleien in der Hansestadt — wo Hafen, Logistik und Medienwirtschaft typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Hamburg ist Stadtstaat und zweitgrößte Stadt Deutschlands. Hafen, Logistik, Medien und Luftfahrt prägen die Wirtschaft — dazu kommt ein eigenes Oberlandesgericht und eine kompakte Gerichtsstruktur mit Amts- und Landgericht vor Ort.",
        "Als Stadtstaat konzentriert sich das Mandatsumfeld auf Hamburg selbst. Kanzleien mit Schwerpunkten in Handels-, Transport- oder Arbeitsrecht profitieren von einer Website, die Hafenwirtschaft und Gerichte verständlich benennt.",
      ],
      courtsNarrative:
        "Amtsgericht Hamburg, Landgericht Hamburg und OLG Hamburg liegen in derselben Stadt — für Mandanten ein klarer regionaler Bezug. Mahnverfahren und spezielle Zuständigkeiten sollten auf Kanzleiseiten transparent erklärt werden.",
      economyNarrative:
        "Hafen, Logistik und Medien machen Handels- und Transportrecht zu zentralen Suchthemen. Arbeitsrecht in großen Betrieben und KMU ergänzt das Bild — Mandanten suchen oft nach Kombination aus Rechtsgebiet und „Hamburg“.",
      whyVerdexParagraph:
        "Verdex recherchiert Hamburg als Hansestadt und Stadtstaat — sachlich, ohne erfundene Referenzen.",
      faq: [
        {
          q: "Liegen AG, LG und OLG in Hamburg?",
          a: "Ja — alle drei Instanzen sind in Hamburg ansässig. Das ist ein starker Vertrauensfaktor für Mandanten aus der Region.",
        },
        {
          q: "Welche Branchen prägen das Mandatsumfeld in Hamburg?",
          a: "Hafen, Logistik, Medien und Handel erzeugen typischerweise Mandate in Handels-, Speditions- und Arbeitsrecht.",
        },
        ...sharedPricingFaq("Hamburg"),
      ],
    },
  },
  {
    slug: "bremen",
    name: HB,
    stadtTyp: "Stadtstaat",
    populationLabel: "rund 680.000 (Land Bremen)",
    courts: {
      amtsgericht: "Amtsgerichte Bremen und Bremerhaven",
      landgericht: "Landgericht Bremen",
      oberlandesgericht: BREMEN_OLG,
    },
    economy: {
      sectors: ["Hafen/Logistik", "Automotive/Zulieferer", "Luft- und Raumfahrt", "Handel"],
      profile:
        "Zweistädtisches Stadtstaat mit Hansestadt Bremen und Seehafen Bremerhaven",
    },
    primaryLegalAreas: ["Handelsrecht", "Arbeitsrecht", "See- und Transportrecht"],
    mapHighlightSlugs: ["bremen", "bremerhaven"],
    content: {
      heroSubtitle:
        "Für Kanzleien im Land Bremen — Hansestadt und Seehafen mit gemeinsamer Gerichtsstruktur, aber unterschiedlichen Wirtschaftsschwerpunkten.",
      introParagraphs: [
        "Bremen ist das kleinste Flächenbundesland und zugleich ein Stadtstaat aus zwei Städten: Bremen und Bremerhaven. Rund 680.000 Menschen leben im Land Bremen — Hafen, Logistik, Automotive-Zulieferer und Luft- und Raumfahrt prägen die Wirtschaft.",
        "Gerichtlich bündelt das Landgericht Bremen beide Städte; Bremerhaven hat ein eigenes Amtsgericht. Kanzleien im Land Bremen sollten diese Zweiteilung auf der Website verständlich machen — Mandanten aus dem Seehafen suchen anders als Mandanten aus der Innenstadt.",
      ],
      courtsNarrative:
        "Amtsgericht Bremen und Amtsgericht Bremerhaven, gemeinsames Landgericht Bremen und OLG Bremen. Der Instanzenweg ist für Mandanten aus Bremerhaven nicht immer offensichtlich — eine klare Darstellung schafft Vertrauen.",
      economyNarrative:
        "Hafen und Logistik verbinden Bremen und Bremerhaven; Automotive und Luft- und Raumfahrt sitzen überwiegend in Bremen. Handels-, Arbeits- und See-/Transportrecht sind typische Mandatsfelder — mit unterschiedlicher Gewichtung je nach Standort.",
      whyVerdexParagraph:
        "Verdex recherchiert Bremen und Bremerhaven als Land Bremen — ohne erfundene Referenzen.",
      faq: [
        {
          q: "Warum gibt es zwei Stadtseiten für ein Bundesland?",
          a: "Bremen und Bremerhaven sind zwei getrennte Städte im Stadtstaat Bremen — mit unterschiedlicher Wirtschaft und eigenem Amtsgericht in Bremerhaven. Beide profitieren von lokaler Ausrichtung.",
        },
        {
          q: "Welches Landgericht ist für Bremerhaven zuständig?",
          a: "Das Landgericht Bremen — erstinstanzlich das Amtsgericht Bremerhaven. Das sollte auf Kanzleiseiten für den Seehafen klar benannt werden.",
        },
        ...sharedPricingFaq("Bremen"),
      ],
    },
  },
];

const STADTSTAAT_SLUGS = new Set<BundeslandPageSlug>([
  "berlin",
  "hamburg",
  "bremen",
]);

const GENERATED_PAGES: BundeslandPageRecord[] = BUNDESLAENDER.filter(
  (name) => !STADTSTAAT_SLUGS.has(bundeslandNameToSlug(name)),
).map((name) => buildBundeslandPage(name, bundeslandNameToSlug(name)));

export const BUNDESLAND_PAGES: BundeslandPageRecord[] = [
  ...CUSTOM_BUNDESLAND_PAGES,
  ...GENERATED_PAGES,
];

export function getBundeslandPage(
  slug: string,
): BundeslandPageRecord | null {
  return BUNDESLAND_PAGES.find((p) => p.slug === slug) ?? null;
}

export function getLiveBundeslandPages(): BundeslandPageRecord[] {
  return BUNDESLAND_PAGES;
}
