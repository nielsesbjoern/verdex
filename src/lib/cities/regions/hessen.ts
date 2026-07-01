import { lonLatToMapCoords } from "../germanyMap";
import type { CityFacts, CityRecord } from "../types";
import { HE, HESSEN_OLG, standardCityFaq } from "./hessen-shared";

type CityDef = CityFacts & {
  content: CityRecord["content"];
};

function coords(lon: number, lat: number) {
  return { ...lonLatToMapCoords(lon, lat), anchor: "start" as const };
}

const cities: CityDef[] = [
  {
    slug: "fulda",
    name: "Fulda",
    bundesland: HE,
    kreisOrBezirk: "Landkreis Fulda",
    stadtTyp: "Kreisstadt",
    population: {
      approx: 65000,
      label: "rund 65.000",
      year: 2024,
      zensusStrittig: true,
    },
    courts: {
      amtsgericht: "Amtsgericht Fulda",
      landgericht: "Landgericht Fulda",
      oberlandesgericht: HESSEN_OLG,
    },
    economy: {
      sectors: ["Reifen/Gummi", "Logistik", "Mittelstand"],
      profile: "Kreisstadt an A7 und Bahnknoten mit Reifenindustrie und Logistik",
    },
    primaryLegalArea: "Transportrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Handelsrecht"],
    landmarks: ["Barockdom", "Schloss Fulda"],
    mapCoords: coords(9.68, 50.55),
    nearbySlugs: ["kassel", "marburg", "giessen"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "fulda",
      heroSubtitle:
        "Für Kanzleien an der A7 — wo Reifenindustrie, Logistik und Mittelstand typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Fulda ist Kreisstadt in Nordosthessen — Bahnknoten und Autobahnkreuz A7 prägen die Lage. Reifen- und Gummiindustrie, Logistik und Mittelstand machen Transport- und Arbeitsrecht zu zentralen Suchthemen.",
        "Die Einwohnerzahl ist zwischen Melderegister und Zensus umstritten (Klage anhängig). Für Ihre Website zählt vor allem: Mandanten suchen lokal — Gerichte, Wirtschaft und Rechtsgebiete müssen erkennbar sein.",
      ],
      courtsNarrative:
        "Amtsgericht Fulda, Landgericht Fulda, OLG Frankfurt am Main. Beide Instanzen liegen in Fulda — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Reifenindustrie, Logistik und Mittelstand erzeugen Mandate in Transport-, Arbeits- und Handelsrecht. Kanzleien mit diesen Schwerpunkten profitieren von einem Auftritt, der Fulda als Verkehrsknoten benennt.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Spediteur streitet über Frachtschäden nach Unfall auf der A7 — der Disponent sucht 'Transportrecht Fulda'.",
      faq: standardCityFaq(
        "Fulda",
        {
          amtsgericht: "Amtsgericht Fulda",
          landgericht: "Landgericht Fulda",
          oberlandesgericht: HESSEN_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Fulda?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Region.",
          },
          {
            q: "Welche Branchen prägen Fulda?",
            a: "Reifen- und Gummiindustrie, Logistik und Mittelstand erzeugen typischerweise Mandate in Transport- und Arbeitsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Fulda und Nordosthessen — Gerichte, Wirtschaft, typisches Suchverhalten — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "marburg",
    name: "Marburg",
    bundesland: HE,
    kreisOrBezirk: "Landkreis Marburg-Biedenkopf",
    stadtTyp: "Kreisstadt",
    population: { approx: 77000, label: "rund 77.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Marburg",
      landgericht: "Landgericht Marburg",
      oberlandesgericht: HESSEN_OLG,
    },
    economy: {
      sectors: ["Pharma/Biotech", "Universität"],
      keyEmployersOrClusters: ["BioNTech", "CSL Behring"],
      profile: "Universitäts- und Biotech-Stadt an der Lahn",
    },
    primaryLegalArea: "Pharmarecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Mietrecht"],
    landmarks: ["Elisabethkirche", "Landgrafenschloss"],
    mapCoords: coords(8.77, 50.81),
    nearbySlugs: ["kassel", "giessen", "fulda", "wetzlar"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "marburg",
      heroSubtitle:
        "Für Kanzleien an der Lahn — wo BioNTech, CSL Behring und eine lebendige Studentenstadt typische Mandatsfelder bilden.",
      introParagraphs: [
        "Marburg verbindet mittelalterliche Altstadt mit modernem Biotech-Cluster. BioNTech, CSL Behring und die Philipps-Universität prägen Wirtschaft und Wohnungsmarkt — eine Studentenstadt mit Pharma-Schwerpunkt.",
        "Pharma-, Arbeits- und Mietrecht sind hier zentral. Mandanten erwarten online Orientierung zu Arzneimittelregulierung, Arbeitsverträgen und Wohnraumfragen.",
      ],
      courtsNarrative:
        "Amtsgericht Marburg, Landgericht Marburg, OLG Frankfurt am Main. Beide Instanzen liegen in Marburg.",
      economyNarrative:
        "Pharma, Biotech und Universität machen Pharmarecht und Mietrecht zu relevanten Suchthemen — daneben Arbeitsrecht in Forschungsbetrieben. Kanzleien sollten das online erkennbar machen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Biotech-Mitarbeiter prüft Wettbewerbsklausel nach Jobwechsel — er sucht 'Arbeitsrecht Marburg Pharma'.",
      faq: standardCityFaq(
        "Marburg",
        {
          amtsgericht: "Amtsgericht Marburg",
          landgericht: "Landgericht Marburg",
          oberlandesgericht: HESSEN_OLG,
        },
        [
          {
            q: "Welche Rechtsgebiete passen zu Marburg?",
            a: "Pharmarecht, Arbeitsrecht und Mietrecht stehen im Biotech- und Universitätskontext oft im Vordergrund — abhängig von Ihrer Kanzleiausrichtung.",
          },
          {
            q: "Liegen AG und LG in Marburg?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Region.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Marburg und die Lahnregion — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "giessen",
    name: "Gießen",
    bundesland: HE,
    kreisOrBezirk: "Landkreis Gießen",
    stadtTyp: "Kreisstadt",
    population: {
      approx: 87217,
      label: "rund 87.000",
      year: 2022,
      zensusStrittig: true,
    },
    courts: {
      amtsgericht: "Amtsgericht Gießen",
      landgericht: "Landgericht Gießen",
      oberlandesgericht: HESSEN_OLG,
    },
    economy: {
      sectors: ["Universität/Hochschule", "Logistik", "Verwaltung"],
      keyEmployersOrClusters: ["Regierungspräsidium Gießen"],
      profile: "Universitätsstadt und Verwaltungssitz in Mittelhessen",
    },
    primaryLegalArea: "Mietrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Verwaltungsrecht"],
    landmarks: ["Mathematikum", "Altes Schloss"],
    mapCoords: coords(8.67, 50.59),
    nearbySlugs: ["kassel", "marburg", "wetzlar", "fulda"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "giessen",
      heroSubtitle:
        "Für Kanzleien in Mittelhessen — wo Universität, Regierungspräsidium und Studentenwohnmarkt typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Gießen ist Universitäts- und Verwaltungssitz in Mittelhessen. Justus-Liebig-Universität, Regierungspräsidium und Logistik prägen den Markt — dazu kommt ein angespannter Studentenwohnungsmarkt.",
        "Die Einwohnerzahl ist zwischen Melderegister und Zensus umstritten (Klage anhängig). Für Mandanten zählt vor allem: Miet-, Arbeits- und Verwaltungsrecht sind hier häufige Suchthemen.",
      ],
      courtsNarrative:
        "Amtsgericht Gießen, Landgericht Gießen, OLG Frankfurt am Main. Beide Instanzen liegen in Gießen.",
      economyNarrative:
        "Universität, Verwaltung und Logistik machen Mietrecht zum Kernsuchfeld — daneben Arbeitsrecht und Verwaltungsrecht im Regierungspräsidium-Umfeld.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Student streitet über Kaution nach WG-Wechsel — er sucht 'Mietrecht Gießen'.",
      faq: standardCityFaq(
        "Gießen",
        {
          amtsgericht: "Amtsgericht Gießen",
          landgericht: "Landgericht Gießen",
          oberlandesgericht: HESSEN_OLG,
        },
        [
          {
            q: "Welche Rechtsgebiete passen zu Gießen?",
            a: "Mietrecht, Arbeitsrecht und Verwaltungsrecht stehen im Universitäts- und Verwaltungskontext oft im Vordergrund.",
          },
          {
            q: "Liegen AG und LG in Gießen?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus Mittelhessen.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Gießen und Mittelhessen — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "wetzlar",
    name: "Wetzlar",
    bundesland: HE,
    kreisOrBezirk: "Lahn-Dill-Kreis",
    stadtTyp: "Sonderstatusstadt",
    population: { approx: 52000, label: "rund 52.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Wetzlar",
      landgericht: "Landgericht Limburg a. d. Lahn",
      oberlandesgericht: HESSEN_OLG,
    },
    economy: {
      sectors: ["Optik/Feinmechanik", "Maschinenbau"],
      keyEmployersOrClusters: ["Leica"],
      profile: "Optik- und Feinmechanikstadt an der Lahn",
    },
    primaryLegalArea: "Gewerblicher Rechtsschutz",
    secondaryLegalAreas: ["Arbeitsrecht", "Handelsrecht"],
    landmarks: ["Dom", "Altstadt (Goethes Werther)"],
    mapCoords: coords(8.5, 50.55),
    nearbySlugs: ["giessen", "marburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "wetzlar",
      heroSubtitle:
        "Für Kanzleien an der Lahn — wo Leica, Optik und Feinmechanik typische Mandatsfelder bilden.",
      introParagraphs: [
        "Wetzlar ist Optik- und Feinmechanikstadt — Leica prägt die Tradition. Dom, Altstadt und Goethes Werther-Verbindung machen die Stadt bekannt; wirtschaftlich dominieren Präzisionsoptik und Maschinenbau.",
        "Gewerblicher Rechtsschutz und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Patenten, Marken und Arbeitsverträgen.",
      ],
      courtsNarrative:
        "Amtsgericht Wetzlar, Landgericht Limburg a. d. Lahn, OLG Frankfurt am Main. Der Sprung von Wetzlar nach Limburg ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Optik, Feinmechanik und Maschinenbau machen gewerblichen Rechtsschutz zum Kernsuchfeld — daneben Arbeitsrecht in Präzisionsbetrieben.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Optikhersteller prüft Markenverletzung durch Importprodukt — der Geschäftsführer sucht 'Markenrecht Wetzlar'.",
      faq: standardCityFaq(
        "Wetzlar",
        {
          amtsgericht: "Amtsgericht Wetzlar",
          landgericht: "Landgericht Limburg a. d. Lahn",
          oberlandesgericht: HESSEN_OLG,
        },
        [
          {
            q: "Warum ist für Wetzlar das LG Limburg zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Hessen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Branchen prägen Wetzlar?",
            a: "Optik, Feinmechanik (Leica) und Maschinenbau erzeugen typischerweise Mandate in gewerblichem Rechtsschutz und Arbeitsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Wetzlar und die Lahnregion — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "bad-homburg",
    name: "Bad Homburg vor der Höhe",
    bundesland: HE,
    kreisOrBezirk: "Hochtaunuskreis",
    stadtTyp: "Sonderstatusstadt",
    population: { approx: 52000, label: "rund 52.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Bad Homburg v. d. Höhe",
      landgericht: "Landgericht Frankfurt am Main",
      oberlandesgericht: HESSEN_OLG,
    },
    economy: {
      sectors: ["Finanzdienstleister", "Versicherungen", "Vermögende Wohnstadt"],
      profile: "Kurstadt und Finanzstandort im Rhein-Main-Raum",
    },
    primaryLegalArea: "Erbrecht",
    secondaryLegalAreas: ["Steuerrecht", "Gesellschaftsrecht", "Arbeitsrecht"],
    landmarks: ["Schloss Bad Homburg", "Kurpark"],
    mapCoords: coords(8.62, 50.23),
    nearbySlugs: ["wiesbaden", "frankfurt-am-main", "ruesselsheim", "hanau"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "bad-homburg",
      heroSubtitle:
        "Für Kanzleien im Taunus — wo Finanzdienstleister, Versicherungen und vermögende Klientel typische Mandatsfelder bilden.",
      introParagraphs: [
        "Bad Homburg vor der Höhe ist Kurstadt und Finanzstandort im Rhein-Main-Raum. Finanzdienstleister, Versicherungen und eine vermögende Wohnbevölkerung prägen das Mandatsumfeld — neben klassischem Arbeitsrecht.",
        "Erb-, Steuer- und Gesellschaftsrecht sind hier häufige Suchthemen. Mandanten erwarten einen Auftritt, der Diskretion und regionale Verankerung verbindet — ohne werbliche Übertreibung.",
      ],
      courtsNarrative:
        "Amtsgericht Bad Homburg v. d. Höhe, Landgericht Frankfurt am Main, OLG Frankfurt am Main. Der Bezug zu Frankfurt ist für Mandanten oft bekannt — das AG in Bad Homburg weniger.",
      economyNarrative:
        "Finanzdienstleister, Versicherungen und vermögende Wohnstadt machen Erb-, Steuer- und Gesellschaftsrecht zu relevanten Suchthemen. Kanzleien sollten das online erkennbar machen, ohne konkrete Mandatsbehauptungen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Eigentümer prüft Schenkung an Kinder — er sucht 'Erbrecht Bad Homburg'.",
      faq: standardCityFaq(
        "Bad Homburg vor der Höhe",
        {
          amtsgericht: "Amtsgericht Bad Homburg v. d. Höhe",
          landgericht: "Landgericht Frankfurt am Main",
          oberlandesgericht: HESSEN_OLG,
        },
        [
          {
            q: "Welches Landgericht ist für Bad Homburg zuständig?",
            a: "Das Landgericht Frankfurt am Main — nicht Limburg oder Darmstadt. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Bad Homburg?",
            a: "Erb-, Steuer- und Gesellschaftsrecht stehen im Finanz- und Vermögens-Kontext oft im Vordergrund — daneben Arbeitsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Bad Homburg und den Taunus — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "ruesselsheim",
    name: "Rüsselsheim am Main",
    bundesland: HE,
    kreisOrBezirk: "Kreis Groß-Gerau",
    stadtTyp: "Sonderstatusstadt",
    population: { approx: 59000, label: "rund 59.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Rüsselsheim",
      landgericht: "Landgericht Darmstadt",
      oberlandesgericht: HESSEN_OLG,
    },
    economy: {
      sectors: ["Automotive", "Flughafennähe"],
      keyEmployersOrClusters: ["Opel/Stellantis"],
      profile: "Automobilstandort am Main mit Opel-Stammwerk und Flughafennähe",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Vertragsrecht"],
    landmarks: ["Festung Rüsselsheim", "Opel-Werk"],
    mapCoords: coords(8.41, 49.99),
    nearbySlugs: ["frankfurt-am-main", "darmstadt", "bad-homburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "ruesselsheim",
      heroSubtitle:
        "Für Kanzleien am Main — wo Opel/Stellantis, Werksumfeld und Flughafennähe typische Mandatsfelder bilden.",
      introParagraphs: [
        "Rüsselsheim am Main ist Automobilstandort mit Opel-Stammwerk. Transformation, Zulieferer und Flughafennähe prägen den Arbeitsmarkt — Arbeitsrecht ist hier kein Randthema.",
        "Mandanten aus Werk und Mittelstand suchen gezielt nach Arbeits- und Handelsrecht. Die Website entscheidet über den ersten Kontakt.",
      ],
      courtsNarrative:
        "Amtsgericht Rüsselsheim, Landgericht Darmstadt, OLG Frankfurt am Main. Der Sprung nach Darmstadt ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Automotive und Werksumfeld machen Arbeitsrecht zum Kernsuchfeld — daneben Handels- und Vertragsrecht in Zulieferbetrieben.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Betriebsänderungsankündigung sucht ein Werksmitarbeiter 'Arbeitsrecht Rüsselsheim Opel'.",
      faq: standardCityFaq(
        "Rüsselsheim am Main",
        {
          amtsgericht: "Amtsgericht Rüsselsheim",
          landgericht: "Landgericht Darmstadt",
          oberlandesgericht: HESSEN_OLG,
        },
        [
          {
            q: "Warum ist für Rüsselsheim das LG Darmstadt zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Hessen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Branchen prägen Rüsselsheim?",
            a: "Automotive (Opel/Stellantis) und Zulieferer erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Rüsselsheim und den Main-Taunus-Raum — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "hanau",
    name: "Hanau",
    bundesland: HE,
    kreisOrBezirk: "Main-Kinzig-Kreis",
    stadtTyp: "Sonderstatusstadt",
    population: {
      approx: 93600,
      label: "rund 93.600",
      year: 2022,
      zensusStrittig: true,
    },
    courts: {
      amtsgericht: "Amtsgericht Hanau",
      landgericht: "Landgericht Hanau",
      oberlandesgericht: HESSEN_OLG,
    },
    economy: {
      sectors: ["Edelmetall/Chemie", "Maschinenbau"],
      keyEmployersOrClusters: ["Heraeus", "Umicore"],
      profile: "Industriestadt am Main mit Edelmetall- und Chemietradition",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Umweltrecht", "Handelsrecht"],
    landmarks: ["Brüder-Grimm-Denkmal", "Schloss Philippsruhe"],
    mapCoords: coords(8.92, 50.13),
    nearbySlugs: ["frankfurt-am-main", "darmstadt", "ruesselsheim"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "hanau",
      heroSubtitle:
        "Für Kanzleien am Main — wo Heraeus, Umicore und Edelmetallindustrie typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Hanau ist Industriestadt am Main mit Edelmetall- und Chemietradition. Heraeus, Umicore und Maschinenbau prägen den Arbeitsmarkt — dazu kommt eine umstrittene Einwohnerzahl: Das Hessische Statistische Landesamt wies zum Zensus-Stichtag 2022 rund 93.600 Einwohner aus, das Melderegister deutlich mehr; die Stadt klagt vor dem Verwaltungsgericht Frankfurt.",
        "Arbeits-, Umwelt- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Industrie, Gerichten und Rechtsgebieten — unabhängig von der Zensus-Debatte.",
      ],
      courtsNarrative:
        "Amtsgericht Hanau, Landgericht Hanau, OLG Frankfurt am Main. Beide Instanzen liegen in Hanau — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Edelmetall, Chemie und Maschinenbau machen Arbeitsrecht zum Kernsuchfeld — daneben Umweltrecht in industriell geprägten Betrieben und Handelsrecht im Mittelstand.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Umweltauflagen-Änderung im Chemiewerk sucht ein Betriebsrat 'Umweltrecht Hanau'.",
      faq: standardCityFaq(
        "Hanau",
        {
          amtsgericht: "Amtsgericht Hanau",
          landgericht: "Landgericht Hanau",
          oberlandesgericht: HESSEN_OLG,
        },
        [
          {
            q: "Warum ist die Einwohnerzahl in Hanau umstritten?",
            a: "Zwischen Zensus und Melderegister liegen erhebliche Differenzen; die Stadt klagt. Für Ihre Kanzlei-Website ist das kein zentrales Thema — Gerichte und Wirtschaft sind wichtiger für Mandanten.",
          },
          {
            q: "Welche Branchen prägen Hanau?",
            a: "Edelmetall und Chemie (Heraeus, Umicore) sowie Maschinenbau erzeugen typischerweise Mandate in Arbeits-, Umwelt- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Hanau und den Main-Kinzig-Kreis — sachlich, ohne erfundene Referenzen.",
    },
  },
];

export const hessenFacts: CityFacts[] = cities.map((city) => {
  const { content, ...facts } = city;
  void content;
  return facts;
});

export const hessenContent: Record<string, CityRecord["content"]> =
  Object.fromEntries(cities.map((c) => [c.slug, c.content]));

export const hessenRecords: CityRecord[] = cities.map(
  ({ content, ...facts }) => ({ ...facts, content }),
);
