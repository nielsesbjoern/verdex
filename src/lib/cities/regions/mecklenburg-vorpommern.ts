import { lonLatToMapCoords } from "../germanyMap";
import type { CityFacts, CityRecord } from "../types";
import {
  MV,
  MV_MAHNGERICHT,
  MV_OLG,
  standardCityFaq,
} from "./mecklenburg-vorpommern-shared";

type CityDef = CityFacts & {
  content: CityRecord["content"];
};

function coords(lon: number, lat: number) {
  return { ...lonLatToMapCoords(lon, lat), anchor: "start" as const };
}

const cities: CityDef[] = [
  {
    slug: "neubrandenburg",
    name: "Neubrandenburg",
    bundesland: MV,
    kreisOrBezirk: "Mecklenburgische Seenplatte",
    stadtTyp: "Oberzentrum",
    population: {
      approx: 60300,
      label: "rund 60.300",
      year: 2024,
      zensusStrittig: true,
    },
    courts: {
      amtsgericht: "Amtsgericht Neubrandenburg",
      landgericht: "Landgericht Neubrandenburg",
      oberlandesgericht: MV_OLG,
      besonderheiten: [MV_MAHNGERICHT],
    },
    economy: {
      sectors: [
        "Verwaltung",
        "Handel",
        "Gesundheitswirtschaft",
        "Seenplatte-Tourismus",
      ],
      profile:
        "Oberzentrum der Mecklenburgischen Seenplatte mit Verwaltung und Tourismus",
    },
    primaryLegalArea: "Tourismusrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Mietrecht"],
    landmarks: ["Stadtmauer mit vier Toren", "Konzertkirche"],
    mapCoords: coords(13.26, 53.56),
    nearbySlugs: ["schwerin", "greifswald", "stralsund", "guestrow"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "neubrandenburg",
      heroSubtitle:
        "Für Kanzleien in der Seenplatte — wo Verwaltung, Gesundheitswirtschaft und Tourismus typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Neubrandenburg ist Oberzentrum der Mecklenburgischen Seenplatte. Verwaltung, Handel, Gesundheitswirtschaft und Seenplatte-Tourismus prägen den Markt — die mittelalterliche Stadtmauer mit vier Toren ist das sichtbare Wahrzeichen.",
        "Die Einwohnerzahl ist zwischen Melderegister und Zensus umstritten (Klage vor dem VG Greifswald anhängig). Für Mandanten zählt vor allem: Tourismus-, Arbeits- und Mietrecht sind hier häufige Suchthemen.",
      ],
      courtsNarrative:
        "Amtsgericht Neubrandenburg, Landgericht Neubrandenburg, OLG Rostock. Beide Instanzen liegen in Neubrandenburg — für Mandanten ein klarer regionaler Bezug. Mahnverfahren laufen zentral über das Amtsgericht Hamburg.",
      economyNarrative:
        "Seenplatte-Tourismus, Gesundheitswirtschaft und Verwaltung erzeugen Mandate in Tourismus-, Arbeits- und Mietrecht. Kanzleien mit diesen Schwerpunkten profitieren von einem Auftritt, der Neubrandenburg als Seenplatte-Zentrum benennt.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Ferienhausvermieter streitet über Stornobedingungen nach Hochwasser — der Eigentümer sucht 'Tourismusrecht Neubrandenburg'.",
      faq: standardCityFaq(
        "Neubrandenburg",
        {
          amtsgericht: "Amtsgericht Neubrandenburg",
          landgericht: "Landgericht Neubrandenburg",
          oberlandesgericht: MV_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Neubrandenburg?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Seenplatte.",
          },
          {
            q: "Welche Rechtsgebiete passen zur Seenplatte?",
            a: "Tourismus-, Arbeits- und Mietrecht stehen im Kontext von Ferienvermietung, Saisonbetrieben und Wohnraum oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Neubrandenburg und die Mecklenburgische Seenplatte — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "greifswald",
    name: "Greifswald",
    bundesland: MV,
    kreisOrBezirk: "Vorpommern-Greifswald",
    stadtTyp: "Universitäts- und Hansestadt",
    population: { approx: 58000, label: "rund 58.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Greifswald",
      landgericht: "Landgericht Stralsund",
      oberlandesgericht: MV_OLG,
      besonderheiten: [MV_MAHNGERICHT],
    },
    economy: {
      sectors: ["Universität/Medizin", "Forschung", "Wachstumsstadt"],
      profile:
        "Universitäts- und Hansestadt mit Medizin, Plasmaphysik und Forschung",
    },
    primaryLegalArea: "Mietrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Medizinrecht"],
    landmarks: ["Dom St. Nikolai", "Caspar-David-Friedrich-Stadt"],
    mapCoords: coords(13.39, 54.09),
    nearbySlugs: ["rostock", "stralsund", "schwerin", "wismar"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "greifswald",
      heroSubtitle:
        "Für Kanzleien an der Ostsee — wo Universität, Medizin und Forschung einen wachsenden Wohn- und Arbeitsmarkt prägen.",
      introParagraphs: [
        "Greifswald ist Universitäts- und Hansestadt in Vorpommern. Medizin, Plasmaphysik und Forschung treiben das Wachstum — dazu kommt ein angespannter Wohnungsmarkt für Studierende und Zuzügler.",
        "Miet-, Arbeits- und Medizinrecht sind hier zentral. Mandanten erwarten online Orientierung zu Wohnraum, Arbeitsverträgen und medizinischen Fragestellungen.",
      ],
      courtsNarrative:
        "Amtsgericht Greifswald, Landgericht Stralsund, OLG Rostock. Der Sprung von Greifswald nach Stralsund ist für Mandanten nicht offensichtlich — eine verständliche Darstellung schafft Vertrauen. Mahnverfahren laufen über das Amtsgericht Hamburg.",
      economyNarrative:
        "Universität, Medizin und Forschung machen Mietrecht zum Kernsuchfeld — daneben Arbeitsrecht in Forschungseinrichtungen und Medizinrecht im Klinikumfeld.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Medizinstudent streitet über Kaution nach WG-Wechsel — er sucht 'Mietrecht Greifswald'.",
      faq: standardCityFaq(
        "Greifswald",
        {
          amtsgericht: "Amtsgericht Greifswald",
          landgericht: "Landgericht Stralsund",
          oberlandesgericht: MV_OLG,
        },
        [
          {
            q: "Warum ist für Greifswald das LG Stralsund zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Mecklenburg-Vorpommern. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Greifswald?",
            a: "Mietrecht, Arbeitsrecht und Medizinrecht stehen im Universitäts- und Klinik-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Greifswald und Vorpommern — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "guestrow",
    name: "Güstrow",
    bundesland: MV,
    kreisOrBezirk: "Landkreis Rostock",
    stadtTyp: "Kreisstadt",
    population: { approx: 28000, label: "rund 28.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Güstrow",
      landgericht: "Landgericht Rostock",
      oberlandesgericht: MV_OLG,
      besonderheiten: [MV_MAHNGERICHT],
    },
    economy: {
      sectors: ["Agrar/Lebensmittel", "Mittelstand"],
      profile: "Kreisstadt mit Agrarwirtschaft und Ernst-Barlach-Tradition",
    },
    primaryLegalArea: "Agrarrecht",
    secondaryLegalAreas: ["Erbrecht", "Handelsrecht"],
    landmarks: ["Schloss Güstrow", "Ernst-Barlach-Stadt"],
    mapCoords: coords(12.18, 53.79),
    nearbySlugs: ["schwerin", "rostock", "neubrandenburg", "wismar"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "guestrow",
      heroSubtitle:
        "Für Kanzleien im Landkreis Rostock — wo Agrarwirtschaft, Mittelstand und Schloss Güstrow einen klassischen Mandatsmarkt bilden.",
      introParagraphs: [
        "Güstrow ist Kreisstadt im Landkreis Rostock — kleiner als das übliche Zielband, aber wirtschaftlich relevant für Agrar, Lebensmittel und Mittelstand. Schloss Güstrow und die Ernst-Barlach-Tradition prägen die Stadt.",
        "Agrar- und Erbrecht sind hier zentral. Mandanten aus Landwirtschaft und Familienbetrieben suchen gezielt nach Kanzleien mit regionalem Bezug.",
      ],
      courtsNarrative:
        "Amtsgericht Güstrow, Landgericht Rostock, OLG Rostock. Der Sprung nach Rostock ist für Mandanten nicht offensichtlich. Mahnverfahren laufen über das Amtsgericht Hamburg.",
      economyNarrative:
        "Agrarwirtschaft, Lebensmittel und Mittelstand erzeugen Mandate in Agrar-, Erb- und Handelsrecht. Kanzleien sollten das online erkennbar machen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Landwirt prüft Hofübergabe an den Sohn — der sucht 'Erbrecht Güstrow'.",
      faq: standardCityFaq(
        "Güstrow",
        {
          amtsgericht: "Amtsgericht Güstrow",
          landgericht: "Landgericht Rostock",
          oberlandesgericht: MV_OLG,
        },
        [
          {
            q: "Warum ist für Güstrow das LG Rostock zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Mecklenburg-Vorpommern. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Branchen prägen Güstrow?",
            a: "Agrarwirtschaft, Lebensmittel und Mittelstand erzeugen typischerweise Mandate in Agrar-, Erb- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Güstrow und den Landkreis Rostock — ohne erfundene Referenzen.",
    },
  },
];

export const mecklenburgVorpommernFacts: CityFacts[] = cities.map((city) => {
  const { content, ...facts } = city;
  void content;
  return facts;
});

export const mecklenburgVorpommernContent: Record<string, CityRecord["content"]> =
  Object.fromEntries(cities.map((c) => [c.slug, c.content]));

export const mecklenburgVorpommernRecords: CityRecord[] = cities.map(
  ({ content, ...facts }) => ({ ...facts, content }),
);
