import { lonLatToMapCoords } from "../germanyMap";
import type { CityFacts, CityRecord } from "../types";
import { SH, SH_OLG, standardCityFaq } from "./schleswig-holstein-shared";

type CityDef = CityFacts & {
  content: CityRecord["content"];
};

function coords(lon: number, lat: number) {
  return { ...lonLatToMapCoords(lon, lat), anchor: "start" as const };
}

const cities: CityDef[] = [
  {
    slug: "flensburg",
    name: "Flensburg",
    bundesland: SH,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 96300, label: "rund 96.300", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Flensburg",
      landgericht: "Landgericht Flensburg",
      oberlandesgericht: SH_OLG,
    },
    economy: {
      sectors: ["Verkehr/KBA", "Maritime Wirtschaft", "Brauerei", "Grenzregion Dänemark"],
      keyEmployersOrClusters: ["Kraftfahrt-Bundesamt"],
      profile: "Nördlichste Stadt Deutschlands mit KBA, Hafen und dänischer Nachbarschaft",
    },
    primaryLegalArea: "Verkehrsrecht",
    secondaryLegalAreas: [
      "Grenzüberschreitendes Recht",
      "See- und Hafenrecht",
    ],
    landmarks: ["Hafen", "Nordertor"],
    mapCoords: coords(9.44, 54.78),
    nearbySlugs: ["kiel", "rendsburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "flensburg",
      heroSubtitle:
        "Für Kanzleien an der Flensburger Förde — wo KBA, Hafen und dänische Nachbarschaft typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Flensburg ist kreisfreie Stadt und nördlichste Stadt Deutschlands. Das Kraftfahrt-Bundesamt, maritime Wirtschaft, Brauerei und die Nähe zu Dänemark prägen Wirtschaft und Mandatsumfeld — Hafen und Nordertor sind die Wahrzeichen.",
        "Verkehrsrecht (KBA/Punkte), grenzüberschreitendes Recht und See-/Hafenrecht sind hier zentral. Mandanten erwarten online Orientierung zu diesen Schwerpunkten und lokalen Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Flensburg, Landgericht Flensburg, OLG Schleswig. Beide Instanzen liegen in Flensburg — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "KBA, maritime Wirtschaft und Grenzlage zu Dänemark machen Verkehrsrecht und grenzüberschreitendes Recht zu relevanten Suchthemen — daneben See- und Hafenrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Autofahrer widerspricht Punkteeintrag im Fahreignungsregister — er sucht 'Verkehrsrecht Flensburg KBA'.",
      faq: standardCityFaq(
        "Flensburg",
        {
          amtsgericht: "Amtsgericht Flensburg",
          landgericht: "Landgericht Flensburg",
          oberlandesgericht: SH_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Flensburg?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Region.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Flensburg?",
            a: "Verkehrsrecht (KBA), grenzüberschreitendes Recht (Dänemark) und See-/Hafenrecht stehen oft im Vordergrund — abhängig von Ihrer Kanzleiausrichtung.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Flensburg und die Flensburger Förde — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "norderstedt",
    name: "Norderstedt",
    bundesland: SH,
    kreisOrBezirk: "Kreis Segeberg",
    stadtTyp: "Große Kreisstadt",
    population: { approx: 84000, label: "rund 84.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Norderstedt",
      landgericht: "Landgericht Kiel",
      oberlandesgericht: SH_OLG,
    },
    economy: {
      sectors: ["Hamburg-Speckgürtel", "Mittelstand", "Dienstleistung"],
      profile: "Speckgürtel-Stadt nördlich von Hamburg mit Dienstleistung und Mittelstand",
    },
    primaryLegalArea: "Mietrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Handelsrecht"],
    landmarks: ["Stadtpark", "TriBühne"],
    mapCoords: coords(9.98, 53.71),
    nearbySlugs: ["kiel", "hamburg", "pinneberg", "neumuenster"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "norderstedt",
      heroSubtitle:
        "Für Kanzleien im Speckgürtel — wo Hamburg-Nähe, Mittelstand und angespannter Wohnungsmarkt typische Mandatsfelder bilden.",
      introParagraphs: [
        "Norderstedt liegt im Kreis Segeberg im Hamburger Speckgürtel. Mittelstand, Dienstleistung und Pendlerströme nach Hamburg prägen Wirtschaft und Wohnungsmarkt.",
        "Miet-, Arbeits- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Wohnraum, Arbeitsverträgen und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Norderstedt, Landgericht Kiel, OLG Schleswig. Der Sprung nach Kiel ist für Mandanten nicht offensichtlich — eine verständliche Darstellung schafft Vertrauen.",
      economyNarrative:
        "Speckgürtel-Wirtschaft und Hamburg-Pendler machen Mietrecht zum Kernsuchfeld — daneben Arbeits- und Handelsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Mieter erhält Mieterhöhung nach Modernisierung — er sucht 'Mietrecht Norderstedt'.",
      faq: standardCityFaq(
        "Norderstedt",
        {
          amtsgericht: "Amtsgericht Norderstedt",
          landgericht: "Landgericht Kiel",
          oberlandesgericht: SH_OLG,
        },
        [
          {
            q: "Warum ist für Norderstedt das LG Kiel zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Schleswig-Holstein. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Rechtsgebiete passen zum Speckgürtel?",
            a: "Mietrecht und Arbeitsrecht stehen im Ballungsraum oft im Vordergrund — daneben Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Norderstedt und den Hamburger Speckgürtel — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "elmshorn",
    name: "Elmshorn",
    bundesland: SH,
    kreisOrBezirk: "Kreis Pinneberg",
    stadtTyp: "Große Kreisstadt",
    population: { approx: 51000, label: "rund 51.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Elmshorn",
      landgericht: "Landgericht Itzehoe",
      oberlandesgericht: SH_OLG,
    },
    economy: {
      sectors: ["Lebensmittel", "Logistik", "Hamburg-Nähe"],
      profile: "Elbestadt im Kreis Pinneberg mit Lebensmittel und Logistik",
    },
    primaryLegalArea: "Handelsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Lebensmittelrecht"],
    landmarks: ["Marktplatz", "Industriemuseum"],
    mapCoords: coords(9.65, 53.75),
    nearbySlugs: ["kiel", "pinneberg", "norderstedt", "itzehoe"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "elmshorn",
      heroSubtitle:
        "Für Kanzleien an der Elbe — wo Lebensmittel, Logistik und Hamburg-Nähe typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Elmshorn liegt im Kreis Pinneberg an der Elbe. Lebensmittelwirtschaft, Logistik und Hamburg-Nähe prägen die Wirtschaft — Marktplatz und Industriemuseum sind die Wahrzeichen.",
        "Handels- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Industrie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Elmshorn, Landgericht Itzehoe, OLG Schleswig. Der Sprung nach Itzehoe ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Lebensmittel, Logistik und Mittelstand erzeugen Mandate in Handels-, Arbeits- und Lebensmittelrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Lebensmittelhersteller streitet über Lieferverzug — der Geschäftsführer sucht 'Handelsrecht Elmshorn'.",
      faq: standardCityFaq(
        "Elmshorn",
        {
          amtsgericht: "Amtsgericht Elmshorn",
          landgericht: "Landgericht Itzehoe",
          oberlandesgericht: SH_OLG,
        },
        [
          {
            q: "Warum ist für Elmshorn das LG Itzehoe zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Schleswig-Holstein. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Branchen prägen Elmshorn?",
            a: "Lebensmittel, Logistik und Mittelstand erzeugen typischerweise Mandate in Handels- und Arbeitsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Elmshorn und den Kreis Pinneberg — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "pinneberg",
    name: "Pinneberg",
    bundesland: SH,
    kreisOrBezirk: "Kreis Pinneberg",
    stadtTyp: "Kreisstadt",
    population: { approx: 44000, label: "rund 44.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Pinneberg",
      landgericht: "Landgericht Itzehoe",
      oberlandesgericht: SH_OLG,
    },
    economy: {
      sectors: ["Baumschulen", "Hamburg-Pendler"],
      profile: "Kreisstadt mit größtem Baumschulgebiet Europas und Hamburg-Pendlern",
    },
    primaryLegalArea: "Agrarrecht",
    secondaryLegalAreas: ["Mietrecht", "Arbeitsrecht"],
    landmarks: ["Drosteipark"],
    mapCoords: coords(9.79, 53.65),
    nearbySlugs: ["kiel", "hamburg", "norderstedt", "elmshorn"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "pinneberg",
      heroSubtitle:
        "Für Kanzleien im Kreis Pinneberg — wo Baumschulen, Hamburg-Pendler und Speckgürtel typische Mandatsfelder bilden.",
      introParagraphs: [
        "Pinneberg ist Kreisstadt im Kreis Pinneberg. Das größte Baumschulgebiet Europas und Hamburg-Pendler prägen Wirtschaft und Wohnungsmarkt — Drosteipark ist das Wahrzeichen.",
        "Agrar-, Miet- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Baumschulwirtschaft, Wohnraum und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Pinneberg, Landgericht Itzehoe, OLG Schleswig. Der Sprung nach Itzehoe ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Baumschulen, Agrarwirtschaft und Speckgürtel-Pendler erzeugen Mandate in Agrar-, Miet- und Arbeitsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Baumschulbetrieb prüft neue Pflanzenschutzauflagen — der Inhaber sucht 'Agrarrecht Pinneberg'.",
      faq: standardCityFaq(
        "Pinneberg",
        {
          amtsgericht: "Amtsgericht Pinneberg",
          landgericht: "Landgericht Itzehoe",
          oberlandesgericht: SH_OLG,
        },
        [
          {
            q: "Welche Rechtsgebiete passen zu Pinneberg?",
            a: "Agrarrecht (Baumschulen), Mietrecht und Arbeitsrecht stehen im Speckgürtel-Kontext oft im Vordergrund.",
          },
          {
            q: "Warum ist für Pinneberg das LG Itzehoe zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Schleswig-Holstein. Eine Kanzlei-Website kann das verständlich erklären.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Pinneberg und den Kreis Pinneberg — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "itzehoe",
    name: "Itzehoe",
    bundesland: SH,
    kreisOrBezirk: "Kreis Steinburg",
    stadtTyp: "Kreisstadt",
    population: { approx: 32000, label: "rund 32.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Itzehoe",
      landgericht: "Landgericht Itzehoe",
      oberlandesgericht: SH_OLG,
    },
    economy: {
      sectors: ["Mikroelektronik", "Zement"],
      keyEmployersOrClusters: ["Fraunhofer ISIT"],
      profile: "Kreisstadt an der Stör mit Fraunhofer ISIT und Zementindustrie",
    },
    primaryLegalArea: "Handelsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Vertragsrecht"],
    landmarks: ["Störschleife", "Theater Itzehoe"],
    mapCoords: coords(9.52, 53.92),
    nearbySlugs: ["neumuenster", "elmshorn", "norderstedt", "rendsburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "itzehoe",
      heroSubtitle:
        "Für Kanzleien an der Stör — wo Fraunhofer ISIT, Mikroelektronik und Zement typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Itzehoe ist Kreisstadt im Kreis Steinburg — unter dem üblichen Einwohner-Zielband, aber mit Fraunhofer ISIT und Landgericht-Sitz wirtschaftlich und gerichtlich relevant. Mikroelektronik und Zementindustrie prägen den Markt.",
        "Handels- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Forschung, Industrie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Itzehoe, Landgericht Itzehoe, OLG Schleswig. Beide Instanzen liegen in Itzehoe — für Mandanten aus dem Kreis Steinburg ein klarer regionaler Bezug.",
      economyNarrative:
        "Mikroelektronik (Fraunhofer ISIT), Zement und Mittelstand erzeugen Mandate in Handels- und Arbeitsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Forschungsinstitut prüft Kooperationsvertrag — der Leiter sucht 'Handelsrecht Itzehoe'.",
      faq: standardCityFaq(
        "Itzehoe",
        {
          amtsgericht: "Amtsgericht Itzehoe",
          landgericht: "Landgericht Itzehoe",
          oberlandesgericht: SH_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Itzehoe?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus dem Kreis Steinburg.",
          },
          {
            q: "Welche Branchen prägen Itzehoe?",
            a: "Mikroelektronik (Fraunhofer ISIT) und Zementindustrie erzeugen typischerweise Mandate in Handels- und Arbeitsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Itzehoe und den Kreis Steinburg — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "rendsburg",
    name: "Rendsburg",
    bundesland: SH,
    kreisOrBezirk: "Kreis Rendsburg-Eckernförde",
    stadtTyp: "Kreisstadt",
    population: { approx: 28000, label: "rund 28.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Rendsburg",
      landgericht: "Landgericht Kiel",
      oberlandesgericht: SH_OLG,
    },
    economy: {
      sectors: ["Schiffbau/Werften", "NOK-Logistik"],
      profile: "Kreisstadt am Nord-Ostsee-Kanal mit Werften und Schwebefähre",
    },
    primaryLegalArea: "See- und Schifffahrtsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Transportrecht"],
    landmarks: ["Eisenbahnhochbrücke", "Schwebefähre"],
    mapCoords: coords(9.66, 54.3),
    nearbySlugs: ["kiel", "neumuenster", "flensburg", "itzehoe"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "rendsburg",
      heroSubtitle:
        "Für Kanzleien am Nord-Ostsee-Kanal — wo Werften, Schwebefähre und Kanal-Logistik typische Mandatsfelder bilden.",
      introParagraphs: [
        "Rendsburg ist Kreisstadt im Kreis Rendsburg-Eckernförde — unter dem üblichen Einwohner-Zielband, aber zentral am Nord-Ostsee-Kanal. Schiffbau, Werften und Kanal-Logistik prägen die Wirtschaft — Eisenbahnhochbrücke und Schwebefähre sind die Wahrzeichen.",
        "See-, Schifffahrts- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu maritimen Fragen und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Rendsburg, Landgericht Kiel, OLG Schleswig. Der Sprung nach Kiel ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Schiffbau, Werften und NOK-Logistik erzeugen Mandate in See-, Schifffahrts- und Arbeitsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Werftarbeiter streitet über Frachtansprüche nach Havarie — er sucht 'Schifffahrtsrecht Rendsburg'.",
      faq: standardCityFaq(
        "Rendsburg",
        {
          amtsgericht: "Amtsgericht Rendsburg",
          landgericht: "Landgericht Kiel",
          oberlandesgericht: SH_OLG,
        },
        [
          {
            q: "Welche Rechtsgebiete passen zu Rendsburg?",
            a: "See- und Schifffahrtsrecht sowie Arbeitsrecht stehen im Werft- und Kanal-Kontext oft im Vordergrund.",
          },
          {
            q: "Warum ist für Rendsburg das LG Kiel zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Schleswig-Holstein. Eine Kanzlei-Website kann das verständlich erklären.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Rendsburg und den Nord-Ostsee-Kanal — sachlich, ohne erfundene Referenzen.",
    },
  },
];

export const schleswigHolsteinFacts: CityFacts[] = cities.map((city) => {
  const { content, ...facts } = city;
  void content;
  return facts;
});

export const schleswigHolsteinContent: Record<string, CityRecord["content"]> =
  Object.fromEntries(cities.map((c) => [c.slug, c.content]));

export const schleswigHolsteinRecords: CityRecord[] = cities.map(
  ({ content, ...facts }) => ({ ...facts, content }),
);
