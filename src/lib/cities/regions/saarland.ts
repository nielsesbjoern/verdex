import { lonLatToMapCoords } from "../germanyMap";
import type { CityFacts, CityRecord } from "../types";
import {
  SAARLAND_LG,
  SAARLAND_OLG,
  SL,
  standardCityFaq,
} from "./saarland-shared";

type CityDef = CityFacts & {
  content: CityRecord["content"];
};

function coords(lon: number, lat: number) {
  return { ...lonLatToMapCoords(lon, lat), anchor: "start" as const };
}

const cities: CityDef[] = [
  {
    slug: "neunkirchen",
    name: "Neunkirchen",
    bundesland: SL,
    kreisOrBezirk: "Landkreis Neunkirchen",
    stadtTyp: "Kreisstadt",
    population: { approx: 47300, label: "rund 47.300", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Neunkirchen",
      landgericht: SAARLAND_LG,
      oberlandesgericht: SAARLAND_OLG,
    },
    economy: {
      sectors: ["Strukturwandel", "Handel", "Automotive"],
      profile: "Kreisstadt im Strukturwandel nach Stahl und Bergbau",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Sozialrecht", "Strukturwandel"],
    landmarks: ["Alte Schmelz", "Neunkircher Zoo"],
    mapCoords: coords(7.18, 49.35),
    nearbySlugs: ["saarbruecken", "voelklingen", "homburg", "st-ingbert"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "neunkirchen",
      heroSubtitle:
        "Für Kanzleien im Saarland — wo Strukturwandel, Automotive und Handel typische Mandatsfelder bilden.",
      introParagraphs: [
        "Neunkirchen ist Kreisstadt im Landkreis Neunkirchen. Ehemalige Stahl- und Bergbau-Tradition, Strukturwandel, Handel und Automotive prägen die Wirtschaft — die Alte Schmelz erinnert an die industrielle Vergangenheit.",
        "Arbeits-, Sozial- und strukturwandelbezogene Rechtsfragen sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und regionalen Besonderheiten.",
      ],
      courtsNarrative:
        "Amtsgericht Neunkirchen, Landgericht Saarbrücken, Saarländisches OLG Saarbrücken. Der Sprung nach Saarbrücken ist für Mandanten nicht offensichtlich — eine verständliche Darstellung schafft Vertrauen.",
      economyNarrative:
        "Strukturwandel, Handel und Automotive machen Arbeitsrecht zum Kernsuchfeld — daneben Sozialrecht im Kontext von Betriebsübergängen und Transformation.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Werkschließung im Strukturwandel sucht ein Beschäftigter 'Arbeitsrecht Neunkirchen Sozialplan'.",
      faq: standardCityFaq(
        "Neunkirchen",
        {
          amtsgericht: "Amtsgericht Neunkirchen",
          landgericht: SAARLAND_LG,
          oberlandesgericht: SAARLAND_OLG,
        },
        [
          {
            q: "Welches Landgericht ist für Neunkirchen zuständig?",
            a: "Das Landgericht Saarbrücken — für alle genannten Saarland-Städte außer dem AG-Sitz. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Neunkirchen?",
            a: "Arbeitsrecht und Sozialrecht stehen im Strukturwandel-Kontext oft im Vordergrund — daneben Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Neunkirchen und das Saarland — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "voelklingen",
    name: "Völklingen",
    bundesland: SL,
    kreisOrBezirk: "Regionalverband Saarbrücken",
    stadtTyp: "Großstadt im RV",
    population: { approx: 39000, label: "rund 39.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Völklingen",
      landgericht: SAARLAND_LG,
      oberlandesgericht: SAARLAND_OLG,
    },
    economy: {
      sectors: ["Stahl/Ehem. Hütte", "Industrie", "UNESCO-Welterbe"],
      profile: "Industriestadt mit UNESCO-Welterbe Völklinger Hütte",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Umweltrecht", "Industrierecht"],
    landmarks: ["UNESCO-Welterbe Völklinger Hütte"],
    mapCoords: coords(6.86, 49.25),
    nearbySlugs: ["saarbruecken", "neunkirchen", "saarlouis", "st-ingbert"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "voelklingen",
      heroSubtitle:
        "Für Kanzleien an der Hütte — wo UNESCO-Welterbe, Industriekultur und Strukturwandel typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Völklingen liegt im Regionalverband Saarbrücken — knapp unter dem üblichen Einwohner-Zielband, aber wirtschaftlich und kulturell bedeutsam. Die Völklinger Hütte ist UNESCO-Welterbe; ehemalige Stahlindustrie und laufender Strukturwandel prägen das Mandatsumfeld.",
        "Arbeits-, Umwelt- und Industrierecht sind hier zentral. Mandanten erwarten online Orientierung zu Industrie, Denkmalschutz und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Völklingen, Landgericht Saarbrücken, Saarländisches OLG Saarbrücken. Der Bezug zu Saarbrücken gilt für das gesamte Saarland gleichermaßen.",
      economyNarrative:
        "Ehemalige Hütte, UNESCO-Welterbe und Industrie erzeugen Mandate in Arbeits-, Umwelt- und Industrierecht — auch im Kontext von Sanierung und Nutzungsänderung.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Betreiber prüft Nutzungsänderung in einem Industrieareal — er sucht 'Umweltrecht Völklingen'.",
      faq: standardCityFaq(
        "Völklingen",
        {
          amtsgericht: "Amtsgericht Völklingen",
          landgericht: SAARLAND_LG,
          oberlandesgericht: SAARLAND_OLG,
        },
        [
          {
            q: "Welche Rechtsgebiete passen zu Völklingen?",
            a: "Arbeitsrecht, Umweltrecht und Industrierecht stehen im Hütten- und Welterbe-Kontext oft im Vordergrund.",
          },
          {
            q: "Liegt das OLG im Saarland?",
            a: "Ja — das Saarländische OLG sitzt in Saarbrücken und ist für das gesamte Saarland zuständig.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Völklingen und das Saarland — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "saarlouis",
    name: "Saarlouis",
    bundesland: SL,
    kreisOrBezirk: "Landkreis Saarlouis",
    stadtTyp: "Kreisstadt",
    population: { approx: 34000, label: "rund 34.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Saarlouis",
      landgericht: SAARLAND_LG,
      oberlandesgericht: SAARLAND_OLG,
    },
    economy: {
      sectors: ["Automotive", "Stahl", "Transformation"],
      keyEmployersOrClusters: ["Ford-Werk Saarlouis"],
      profile: "Automobilstandort mit Ford-Werk und Werksumbau",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Vertragsrecht"],
    landmarks: ["Festung Saarlouis (Vauban)", "Großer Markt"],
    mapCoords: coords(6.76, 49.32),
    nearbySlugs: ["saarbruecken", "voelklingen", "neunkirchen"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "saarlouis",
      heroSubtitle:
        "Für Kanzleien an der Festung — wo Ford-Werk, Werksumbau und Automotive-Transformation typische Mandatsfelder bilden.",
      introParagraphs: [
        "Saarlouis ist Kreisstadt im Landkreis Saarlouis — unter dem üblichen Einwohner-Zielband, aber wirtschaftlich relevant durch das Ford-Werk und laufende Transformation. Festung Saarlouis (Vauban) und Großer Markt prägen die Stadt.",
        "Arbeitsrecht im Kontext von Werksumbau und Transformation ist hier zentral. Mandanten erwarten online Orientierung zu Automotive, Gerichten und Rechtsgebieten.",
      ],
      courtsNarrative:
        "Amtsgericht Saarlouis, Landgericht Saarbrücken, Saarländisches OLG Saarbrücken. Der Instanzenweg über Saarbrücken sollte für Mandanten transparent sein.",
      economyNarrative:
        "Automotive (Ford), Stahl und Werksumbau machen Arbeitsrecht zum Kernsuchfeld — daneben Handels- und Vertragsrecht in Zulieferbetrieben.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Ankündigung eines Werksumbaus sucht ein Mitarbeiter 'Arbeitsrecht Saarlouis Ford'.",
      faq: standardCityFaq(
        "Saarlouis",
        {
          amtsgericht: "Amtsgericht Saarlouis",
          landgericht: SAARLAND_LG,
          oberlandesgericht: SAARLAND_OLG,
        },
        [
          {
            q: "Welche Branchen prägen Saarlouis?",
            a: "Automotive (Ford-Werk) und Stahl erzeugen typischerweise Mandate in Arbeits- und Handelsrecht — oft im Kontext von Transformation.",
          },
          {
            q: "Welches Landgericht ist für Saarlouis zuständig?",
            a: "Das Landgericht Saarbrücken. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Saarlouis und das Saarland — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "homburg",
    name: "Homburg",
    bundesland: SL,
    kreisOrBezirk: "Saarpfalz-Kreis",
    stadtTyp: "Kreisstadt",
    population: { approx: 43400, label: "rund 43.400", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Homburg",
      landgericht: SAARLAND_LG,
      oberlandesgericht: SAARLAND_OLG,
    },
    economy: {
      sectors: ["Automotive", "Medizin/Universitätsklinikum"],
      keyEmployersOrClusters: ["Bosch", "Schaeffler", "Universitätsklinikum des Saarlandes"],
      profile: "Kreisstadt mit Automotive, Bosch/Schaeffler und Universitätsklinikum",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Medizinrecht", "Handelsrecht"],
    landmarks: ["Schlossberghöhlen", "Universitätsklinikum des Saarlandes"],
    mapCoords: coords(7.34, 49.32),
    nearbySlugs: ["saarbruecken", "neunkirchen", "st-ingbert", "voelklingen"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "homburg",
      heroSubtitle:
        "Für Kanzleien in der Saarpfalz — wo Bosch, Schaeffler und Universitätsklinikum typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Homburg ist Kreisstadt im Saarpfalz-Kreis. Automotive (Bosch, Schaeffler) und das Universitätsklinikum des Saarlandes prägen Wirtschaft und Arbeitsmarkt — Schlossberghöhlen sind das bekannte Wahrzeichen.",
        "Arbeits- und Medizinrecht sind hier zentral. Mandanten erwarten online Orientierung zu Industrie, Klinikumfeld und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Homburg, Landgericht Saarbrücken, Saarländisches OLG Saarbrücken. Der Sprung nach Saarbrücken ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Automotive und Universitätsklinikum machen Arbeitsrecht zum Kernsuchfeld — daneben Medizinrecht im Klinik- und Forschungsumfeld.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Klinikmitarbeiter prüft Arbeitszeitregelungen — er sucht 'Arbeitsrecht Homburg Klinikum'.",
      faq: standardCityFaq(
        "Homburg",
        {
          amtsgericht: "Amtsgericht Homburg",
          landgericht: SAARLAND_LG,
          oberlandesgericht: SAARLAND_OLG,
        },
        [
          {
            q: "Welche Rechtsgebiete passen zu Homburg?",
            a: "Arbeitsrecht und Medizinrecht stehen im Automotive- und Klinik-Kontext oft im Vordergrund.",
          },
          {
            q: "Liegt das AG in Homburg?",
            a: "Ja — erstinstanzlich Amtsgericht Homburg. Berufung und Oberlandesgericht laufen über Saarbrücken.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Homburg und die Saarpfalz — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "st-ingbert",
    name: "St. Ingbert",
    bundesland: SL,
    kreisOrBezirk: "Saarpfalz-Kreis",
    stadtTyp: "Großstadt im Kreis",
    population: { approx: 35000, label: "rund 35.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht St. Ingbert",
      landgericht: SAARLAND_LG,
      oberlandesgericht: SAARLAND_OLG,
    },
    economy: {
      sectors: ["Mittelstand", "Forschung"],
      keyEmployersOrClusters: ["Fraunhofer"],
      profile: "Mittelstand und Forschung (Fraunhofer) mit Industriekultur",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Vertragsrecht"],
    landmarks: ["Alte Schmelz", "Industriekultur"],
    mapCoords: coords(7.12, 49.28),
    nearbySlugs: ["saarbruecken", "homburg", "neunkirchen", "voelklingen"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "st-ingbert",
      heroSubtitle:
        "Für Kanzleien in der Saarpfalz — wo Fraunhofer, Mittelstand und Industriekultur typische Mandatsfelder bilden.",
      introParagraphs: [
        "St. Ingbert liegt im Saarpfalz-Kreis — unter dem üblichen Einwohner-Zielband, aber mit Fraunhofer-Standort und breitem Mittelstand. Alte Schmelz und Industriekultur erinnern an die regionale Vergangenheit.",
        "Arbeits- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Forschung, Mittelstand und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht St. Ingbert, Landgericht Saarbrücken, Saarländisches OLG Saarbrücken. Der Instanzenweg über Saarbrücken gilt für das gesamte Saarland.",
      economyNarrative:
        "Mittelstand und Fraunhofer-Forschung erzeugen Mandate in Arbeits- und Handelsrecht — daneben Vertragsrecht in Forschungskooperationen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Mittelständler prüft Kooperationsvertrag mit Fraunhofer — der Inhaber sucht 'Handelsrecht St. Ingbert'.",
      faq: standardCityFaq(
        "St. Ingbert",
        {
          amtsgericht: "Amtsgericht St. Ingbert",
          landgericht: SAARLAND_LG,
          oberlandesgericht: SAARLAND_OLG,
        },
        [
          {
            q: "Welche Branchen prägen St. Ingbert?",
            a: "Mittelstand und Forschung (Fraunhofer) erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
          {
            q: "Welches Landgericht ist für St. Ingbert zuständig?",
            a: "Das Landgericht Saarbrücken — wie für alle Saarland-Städte außer dem jeweiligen AG-Sitz.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert St. Ingbert und das Saarland — ohne erfundene Referenzen.",
    },
  },
];

export const saarlandFacts: CityFacts[] = cities.map((city) => {
  const { content, ...facts } = city;
  void content;
  return facts;
});

export const saarlandContent: Record<string, CityRecord["content"]> =
  Object.fromEntries(cities.map((c) => [c.slug, c.content]));

export const saarlandRecords: CityRecord[] = cities.map(
  ({ content, ...facts }) => ({ ...facts, content }),
);
