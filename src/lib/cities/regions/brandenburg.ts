import { lonLatToMapCoords } from "../germanyMap";
import type { CityFacts, CityRecord } from "../types";
import { BB, BRANDENBURG_OLG, standardCityFaq } from "./brandenburg-shared";

type CityDef = CityFacts & {
  content: CityRecord["content"];
};

function coords(lon: number, lat: number) {
  return { ...lonLatToMapCoords(lon, lat), anchor: "start" as const };
}

const cities: CityDef[] = [
  {
    slug: "brandenburg-an-der-havel",
    name: "Brandenburg an der Havel",
    bundesland: BB,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 72200, label: "rund 72.200", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Brandenburg an der Havel",
      landgericht: "Landgericht Potsdam",
      oberlandesgericht: BRANDENBURG_OLG,
      besonderheiten: [
        "Das Amtsgericht Brandenburg an der Havel ist nach dem Brandenburgischen Justizportal landesweit zuständiges Binnenschifffahrtsgericht (Stand vor Veröffentlichung über das Landesjustizportal verifizieren)",
      ],
    },
    economy: {
      sectors: ["Stahl/Metall", "Binnenschifffahrt", "Medizintechnik"],
      profile:
        "Havelstadt mit Stahlindustrie, Binnenschifffahrt und Medizintechnik",
    },
    primaryLegalArea: "Arbeits- und Industrierecht",
    secondaryLegalAreas: [
      "Binnenschifffahrtsrecht",
      "Handelsrecht",
    ],
    landmarks: ["Dom St. Peter und Paul", "Havelseen"],
    mapCoords: coords(12.53, 52.41),
    nearbySlugs: ["potsdam", "berlin", "oranienburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "brandenburg-an-der-havel",
      heroSubtitle:
        "Für Kanzleien an der Havel — wo Stahlindustrie, Binnenschifffahrt und Medizintechnik typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Brandenburg an der Havel liegt an der Havel zwischen Berlin und Magdeburg. Stahl- und Metallindustrie, Binnenschifffahrt und Medizintechnik prägen die Wirtschaft — dazu kommt der Sitz des Brandenburgischen Oberlandesgerichts.",
        "Arbeitsrecht in Industriebetrieben und Fragen der Binnenschifffahrt erzeugen spezifische Suchanfragen. Mandanten erwarten online Orientierung zu Gerichten und Rechtsgebieten — nicht nur generische Kanzlei-Texte.",
      ],
      courtsNarrative:
        "Erstinstanzlich Amtsgericht Brandenburg an der Havel, in der Berufung Landgericht Potsdam, als Oberlandesgericht das Brandenburgische OLG (Sitz Brandenburg an der Havel). Der Sprung von der Havelstadt nach Potsdam ist für Mandanten nicht offensichtlich. Nach dem Brandenburgischen Justizportal ist das Amtsgericht Brandenburg zudem landesweit zuständiges Binnenschifffahrtsgericht — ein seltener Spezialbezug, den eine Kanzlei-Website sachlich benennen kann (aktuellen Stand vor Veröffentlichung über das Landesjustizportal verifizieren).",
      economyNarrative:
        "Stahl, Binnenschifffahrt und Medizintechnik machen Arbeits- und Industrierecht zum Kernsuchfeld — daneben Binnenschifffahrtsrecht für Reedereien und Hafenbetriebe. Kanzleien mit diesen Schwerpunkten profitieren von einem Auftritt, der Havellage und Gerichtsstruktur zusammenführt.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Schiffsführer streitet über Frachtansprüche nach Havarie — der Reederei-Inhaber sucht 'Binnenschifffahrt Anwalt Brandenburg'.",
      faq: standardCityFaq(
        "Brandenburg an der Havel",
        {
          amtsgericht: "Amtsgericht Brandenburg an der Havel",
          landgericht: "Landgericht Potsdam",
          oberlandesgericht: BRANDENBURG_OLG,
        },
        [
          {
            q: "Ist das AG Brandenburg ein Binnenschifffahrtsgericht?",
            a: "Nach dem Brandenburgischen Justizportal ist das Amtsgericht Brandenburg an der Havel landesweit zuständiges Binnenschifffahrtsgericht. Vor Veröffentlichung auf Ihrer Website sollten Sie den aktuellen Stand über das Landesjustizportal verifizieren.",
          },
          {
            q: "Warum ist für Brandenburg das LG Potsdam zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Brandenburg — nicht dem Stadtnamen auf dem Briefkopf. Eine Kanzlei-Website kann das verständlich erklären, ohne juristische Vorab-Beratung zu ersetzen.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Brandenburg an der Havel und die Havelregion — Gerichte, Wirtschaft, typisches Suchverhalten — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "cottbus",
    name: "Cottbus",
    bundesland: BB,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 99700, label: "rund 99.700", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Cottbus",
      landgericht: "Landgericht Cottbus",
      oberlandesgericht: BRANDENBURG_OLG,
    },
    economy: {
      sectors: ["Energie/Braunkohle", "Strukturwandel", "Bahn", "Universität"],
      keyEmployersOrClusters: ["BTU Cottbus-Senftenberg", "DB-Werk"],
      profile:
        "Lausitzer Großstadt im Strukturwandel zwischen Energie, Bahn und Universität",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Energie- und Umweltrecht", "Strukturwandel-/Sozialplanrecht"],
    landmarks: ["Branitzer Park", "Staatstheater Cottbus"],
    mapCoords: coords(14.33, 51.76),
    nearbySlugs: ["potsdam", "frankfurt-oder", "brandenburg-an-der-havel"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "cottbus",
      heroSubtitle:
        "Für Kanzleien in der Lausitz — wo Braunkohle-Strukturwandel, DB-Werk und BTU ein breites Mandatsfeld bilden.",
      introParagraphs: [
        "Cottbus ist das Zentrum der Lausitz — knapp unter der 100.000-Einwohner-Grenze, aber mit Großstadt-Funktion. Braunkohle-Strukturwandel, DB-Werk und die BTU prägen Wirtschaft und Arbeitsmarkt.",
        "Arbeitsrecht, Energie- und Umweltrecht stehen im Zusammenhang mit Strukturwandel oft im Vordergrund. Mandanten suchen gezielt nach Kanzleien, die das regional verstehen.",
      ],
      courtsNarrative:
        "Amtsgericht Cottbus, Landgericht Cottbus, Brandenburgisches OLG. Beide Instanzen liegen in Cottbus — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Energie, Strukturwandel und Bahnindustrie machen Arbeitsrecht zum Kernsuchfeld — daneben Energie- und Umweltrecht im Kohleausstieg. Kanzleien sollten das online erkennbar machen, ohne konkrete Fallbehauptungen.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Ankündigung eines Werksausstiegs sucht ein BTU-Beschäftigter 'Arbeitsrecht Cottbus Strukturwandel'.",
      faq: standardCityFaq(
        "Cottbus",
        {
          amtsgericht: "Amtsgericht Cottbus",
          landgericht: "Landgericht Cottbus",
          oberlandesgericht: BRANDENBURG_OLG,
        },
        [
          {
            q: "Welche Rechtsgebiete passen zu Cottbus?",
            a: "Arbeitsrecht, Energie- und Umweltrecht stehen im Lausitzer Strukturwandel oft im Vordergrund — abhängig von der Ausrichtung Ihrer Kanzlei.",
          },
          {
            q: "Liegen AG und LG in Cottbus?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Region.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Cottbus und die Lausitz — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "frankfurt-oder",
    name: "Frankfurt (Oder)",
    bundesland: BB,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 57800, label: "rund 57.800", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Frankfurt (Oder)",
      landgericht: "Landgericht Frankfurt (Oder)",
      oberlandesgericht: BRANDENBURG_OLG,
    },
    economy: {
      sectors: ["Halbleiter", "Logistik", "Grenzhandel Polen"],
      profile:
        "Oderstadt mit Halbleiterwerk, Logistik und polnischer Nachbarschaft",
    },
    primaryLegalArea: "Grenzüberschreitendes Recht",
    secondaryLegalAreas: ["Arbeitsrecht", "Handelsrecht"],
    landmarks: ["Europa-Universität Viadrina", "Oderbrücke nach Słubice"],
    mapCoords: coords(14.55, 52.34),
    nearbySlugs: ["potsdam", "berlin", "cottbus", "eberswalde"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "frankfurt-oder",
      heroSubtitle:
        "Für Kanzleien an der Oder — wo Halbleiterindustrie, Viadrina und polnische Nachbarschaft typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Frankfurt (Oder) liegt an der polnischen Grenze. Halbleiterwerk, Logistik und die Europa-Universität Viadrina prägen die Stadt — die Oderbrücke nach Słubice verbindet zwei Rechtsordnungen.",
        "Grenzüberschreitendes Recht und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu polnischen Bezügen und lokalen Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Frankfurt (Oder), Landgericht Frankfurt (Oder), Brandenburgisches OLG. Beide Instanzen liegen in derselben Stadt — für Mandanten ein seltener Vorteil.",
      economyNarrative:
        "Halbleiter, Logistik und Grenzhandel machen grenzüberschreitendes Recht und Arbeitsrecht zu relevanten Suchthemen. Kanzleien mit polnischen Bezügen profitieren von einem Auftritt, der Oderstadt und Gerichtsstruktur benennt.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Logistikunternehmen streitet mit polnischem Partner über Lieferverzug — der Geschäftsführer sucht 'Grenzrecht Frankfurt Oder'.",
      faq: standardCityFaq(
        "Frankfurt (Oder)",
        {
          amtsgericht: "Amtsgericht Frankfurt (Oder)",
          landgericht: "Landgericht Frankfurt (Oder)",
          oberlandesgericht: BRANDENBURG_OLG,
        },
        [
          {
            q: "Spielt die Grenze zu Polen eine Rolle?",
            a: "Wirtschaftlich und mandatsbezogen ja — Ihre Website kann grenzüberschreitende Bezüge benennen, ohne juristische Vorab-Beratung zu ersetzen.",
          },
          {
            q: "Liegen AG und LG in Frankfurt (Oder)?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Oderregion.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Frankfurt (Oder) und die Oderregion — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "oranienburg",
    name: "Oranienburg",
    bundesland: BB,
    kreisOrBezirk: "Landkreis Oberhavel",
    stadtTyp: "Kreisstadt",
    population: { approx: 45700, label: "rund 45.700", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Oranienburg",
      landgericht: "Landgericht Neuruppin",
      oberlandesgericht: BRANDENBURG_OLG,
    },
    economy: {
      sectors: ["Berlin-Speckgürtel", "Pharma", "Logistik"],
      profile: "Kreisstadt im Berliner Speckgürtel mit Pharma und Logistik",
    },
    primaryLegalArea: "Mietrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Altlasten- und Umweltrecht"],
    landmarks: ["Schloss Oranienburg", "Gedenkstätte Sachsenhausen"],
    mapCoords: coords(13.24, 52.75),
    nearbySlugs: ["potsdam", "berlin", "brandenburg-an-der-havel", "eberswalde"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "oranienburg",
      heroSubtitle:
        "Für Kanzleien im Speckgürtel — wo Berlin-Nähe, Pharma und Altlastenfragen typische Mandatsfelder bilden.",
      introParagraphs: [
        "Oranienburg liegt nördlich von Berlin im Speckgürtel. Pharma, Logistik und Pendlerströme prägen den Markt — dazu kommen Altlasten- und Umweltfragen in industriell geprägten Gebieten.",
        "Miet- und Arbeitsrecht sind hier zentral. Mandanten erwarten online schnelle Orientierung zu Miete, Kündigung und Umweltauflagen.",
      ],
      courtsNarrative:
        "Amtsgericht Oranienburg, Landgericht Neuruppin, Brandenburgisches OLG. Der Sprung nach Neuruppin ist für Mandanten nicht offensichtlich — eine verständliche Darstellung schafft Vertrauen.",
      economyNarrative:
        "Speckgürtel-Wirtschaft, Pharma und Logistik machen Mietrecht zum Kernsuchfeld — daneben Arbeitsrecht und Altlasten-/Umweltrecht in industriell belasteten Gebieten.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Mieter erhält Kündigung nach Modernisierung — er sucht 'Mietrecht Oranienburg'.",
      faq: standardCityFaq(
        "Oranienburg",
        {
          amtsgericht: "Amtsgericht Oranienburg",
          landgericht: "Landgericht Neuruppin",
          oberlandesgericht: BRANDENBURG_OLG,
        },
        [
          {
            q: "Welches Landgericht ist für Oranienburg zuständig?",
            a: "Das Landgericht Neuruppin — nicht Potsdam oder Berlin. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
          {
            q: "Welche Rechtsgebiete passen zum Speckgürtel?",
            a: "Mietrecht und Arbeitsrecht stehen im Ballungsraum oft im Vordergrund — daneben Umweltrecht bei Altlasten und Industriearealen.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Oranienburg und Oberhavel — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "eberswalde",
    name: "Eberswalde",
    bundesland: BB,
    kreisOrBezirk: "Landkreis Barnim",
    stadtTyp: "Kreisstadt",
    population: { approx: 39400, label: "rund 39.400", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Eberswalde",
      landgericht: "Landgericht Frankfurt (Oder)",
      oberlandesgericht: BRANDENBURG_OLG,
    },
    economy: {
      sectors: ["Forstwirtschaft", "Hochschule", "Industrie"],
      profile: "Forststadt im Barnim mit Hochschule für nachhaltige Entwicklung",
    },
    primaryLegalArea: "Forst- und Umweltrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Handelsrecht"],
    landmarks: ["Familiengarten Eberswalde", "Forstbotanischer Garten"],
    mapCoords: coords(13.81, 52.83),
    nearbySlugs: ["potsdam", "berlin", "oranienburg", "frankfurt-oder"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "eberswalde",
      heroSubtitle:
        "Für Kanzleien im Barnim — wo Forstwirtschaft, Nachhaltigkeit und Industrie typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Eberswalde ist Kreisstadt im Barnim — eine Forststadt mit Hochschule für nachhaltige Entwicklung und industrieller Tradition. Wald, Forschung und Mittelstand prägen das Mandatsumfeld.",
        "Forst- und Umweltrecht sind hier keine Randthemen. Mandanten aus Forstwirtschaft und Verarbeitung suchen gezielt nach Kanzleien mit regionalem Bezug.",
      ],
      courtsNarrative:
        "Amtsgericht Eberswalde, Landgericht Frankfurt (Oder), Brandenburgisches OLG. Der Sprung von Eberswalde nach Frankfurt (Oder) ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Forstwirtschaft, Nachhaltigkeitsforschung und Industrie erzeugen Mandate in Forst-, Umwelt- und Arbeitsrecht. Kanzleien sollten das online erkennbar machen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Forstbetrieb prüft neue Rodungsauflagen — der Inhaber sucht 'Forstrecht Eberswalde'.",
      faq: standardCityFaq(
        "Eberswalde",
        {
          amtsgericht: "Amtsgericht Eberswalde",
          landgericht: "Landgericht Frankfurt (Oder)",
          oberlandesgericht: BRANDENBURG_OLG,
        },
        [
          {
            q: "Warum ist für Eberswalde das LG Frankfurt (Oder) zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Brandenburg. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Branchen prägen Eberswalde?",
            a: "Forstwirtschaft, Hochschule für nachhaltige Entwicklung und Industrie erzeugen typischerweise Mandate in Forst-, Umwelt- und Arbeitsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Eberswalde und den Barnim — ohne erfundene Referenzen.",
    },
  },
];

export const brandenburgFacts: CityFacts[] = cities.map((city) => {
  const { content, ...facts } = city;
  void content;
  return facts;
});

export const brandenburgContent: Record<string, CityRecord["content"]> =
  Object.fromEntries(cities.map((c) => [c.slug, c.content]));

export const brandenburgRecords: CityRecord[] = cities.map(
  ({ content, ...facts }) => ({ ...facts, content }),
);
