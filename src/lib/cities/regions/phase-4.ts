import { lonLatToMapCoords } from "../germanyMap";
import { getPhase4NearbySlugs } from "../phase-4-plan";
import type { CityFacts, CityRecord } from "../types";
import { BW } from "./baden-wuerttemberg-shared";
import { HE, HESSEN_OLG } from "./hessen-shared";
import { NI } from "./niedersachsen-shared";
import { NRW } from "./nrw-shared";
import { standardCityFaq } from "./phase-2-shared";
import { ST, ST_OLG } from "./sachsen-anhalt-shared";
import { SH, SH_OLG } from "./schleswig-holstein-shared";

type CityDef = CityFacts & {
  content: CityRecord["content"];
};

function coords(lon: number, lat: number) {
  return { ...lonLatToMapCoords(lon, lat), anchor: "start" as const };
}

const KARLSRUHE_OLG = "OLG Karlsruhe" as const;
const OLDENBURG_OLG = "OLG Oldenburg" as const;

function city(
  def: Omit<CityDef, "nearbySlugs" | "rolloutPhase" | "status">,
): CityDef {
  return {
    ...def,
    nearbySlugs: getPhase4NearbySlugs(def.slug),
    rolloutPhase: 4,
    status: "live",
  };
}

const cities: CityDef[] = [
  city({
    slug: "muenster",
    name: "Münster",
    bundesland: NRW,
    kreisOrBezirk: "Münster",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 315000, label: "rund 315.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Münster",
      landgericht: "Landgericht Münster",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Universität", "Verwaltung", "Versicherungen"],
      profile: "Westfälisches Zentrum mit Universität, Verwaltung und Versicherungswirtschaft",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Verwaltungsrecht", "Handelsrecht"],
    landmarks: ["Prinzipalmarkt", "Lambertikirche"],
    mapCoords: coords(7.626, 51.961),
    content: {
      slug: "muenster",
      heroSubtitle:
        "Für Kanzleien im Münsterland — wo Universität, Verwaltung und Versicherungen typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Münster ist mit rund 315.000 Einwohnern das westfälische Zentrum zwischen Bielefeld und dem Ruhrgebiet — bewusst über dem üblichen Einwohner-Zielband. Universität, Verwaltung und Versicherungswirtschaft prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Verwaltungs- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen im Münsterland.",
      ],
      courtsNarrative:
        "Amtsgericht Münster und Landgericht Münster bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Hamm — für Mandanten ein wichtiger regionaler Hinweis, der auf einer Kanzlei-Website verständlich erklärt werden sollte.",
      economyNarrative:
        "Universität, Verwaltung und Versicherungen machen Arbeitsrecht zum Kernsuchfeld — daneben Verwaltungsrecht im Behördenumfeld und Handelsrecht in mittelständischen Betrieben.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Versicherungsmitarbeiter prüft Kündigung nach Restrukturierung — er sucht „Arbeitsrecht Münster“.',
      faq: standardCityFaq(
        "Münster",
        {
          amtsgericht: "Amtsgericht Münster",
          landgericht: "Landgericht Münster",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Liegen AG und LG in Münster?",
            a: "Ja — beide Instanzen sind in Münster angesiedelt. Oberinstanz ist das OLG Hamm.",
          },
          {
            q: "Welche Branchen prägen Münster?",
            a: "Universität, Verwaltung und Versicherungen erzeugen typischerweise Mandate in Arbeits- und Verwaltungsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Münster und das Münsterland — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "gelsenkirchen",
    name: "Gelsenkirchen",
    bundesland: NRW,
    kreisOrBezirk: "Münster",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 259000, label: "rund 259.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Gelsenkirchen",
      landgericht: "Landgericht Gelsenkirchen",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Energie", "Handel", "Dienstleistung"],
      profile: "Ruhrgebietsstadt mit Energie, Handel und Dienstleistungen nach dem Strukturwandel",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Insolvenzrecht", "Handelsrecht"],
    landmarks: ["ZOOM Erlebniswelt", "Nordsternpark"],
    mapCoords: coords(7.084, 51.518),
    content: {
      slug: "gelsenkirchen",
      heroSubtitle:
        "Für Kanzleien im Ruhrgebiet — wo Energie, Handel und Dienstleistung typische Mandatsfelder nach dem Strukturwandel bilden.",
      introParagraphs: [
        "Gelsenkirchen ist mit rund 259.000 Einwohnern eine zentrale Ruhrgebietsstadt — bewusst über dem üblichen Einwohner-Zielband. Energie, Handel und Dienstleistungen prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Insolvenz- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Essen und Bochum.",
      ],
      courtsNarrative:
        "Amtsgericht Gelsenkirchen und Landgericht Gelsenkirchen bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Hamm — ein regionaler Bezug, den Mandanten auf einer Kanzlei-Website verständlich erklärt haben möchten.",
      economyNarrative:
        "Energie, Handel und Dienstleistung machen Arbeitsrecht zum Kernsuchfeld — daneben Insolvenzrecht im Strukturwandel und Handelsrecht in mittelständischen Betrieben.",
      localCaseExample:
        'Stellen Sie sich vor: Nach Betriebsschließung sucht ein Energiearbeiter „Insolvenzrecht Gelsenkirchen“.',
      faq: standardCityFaq(
        "Gelsenkirchen",
        {
          amtsgericht: "Amtsgericht Gelsenkirchen",
          landgericht: "Landgericht Gelsenkirchen",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Liegen AG und LG in Gelsenkirchen?",
            a: "Ja — beide Instanzen sind in Gelsenkirchen angesiedelt. Oberinstanz ist das OLG Hamm.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Gelsenkirchen?",
            a: "Arbeitsrecht, Insolvenzrecht und Handelsrecht stehen im Ruhrgebiets-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Gelsenkirchen und das Ruhrgebiet — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "aachen",
    name: "Aachen",
    bundesland: NRW,
    kreisOrBezirk: "Köln",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 249000, label: "rund 249.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Aachen",
      landgericht: "Landgericht Aachen",
      oberlandesgericht: "OLG Köln",
    },
    economy: {
      sectors: ["Forschung/RWTH", "Maschinenbau", "Grenzhandel"],
      profile: "Grenzstadt mit RWTH, Maschinenbau und Euregio-Handel",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Gewerblicher Rechtsschutz"],
    landmarks: ["Aachener Dom", "Elisenbrunnen"],
    mapCoords: coords(6.083, 50.776),
    content: {
      slug: "aachen",
      heroSubtitle:
        "Für Kanzleien an der Euregio — wo RWTH, Maschinenbau und Grenzhandel typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Aachen ist mit rund 249.000 Einwohnern das westlichste Großzentrum NRWs — bewusst über dem üblichen Einwohner-Zielband. RWTH, Maschinenbau und Grenzhandel prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Handelsrecht und gewerblicher Rechtsschutz sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Köln und der niederländischen Grenze.",
      ],
      courtsNarrative:
        "Amtsgericht Aachen und Landgericht Aachen bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Köln — für Mandanten ein wichtiger regionaler Hinweis.",
      economyNarrative:
        "Forschung, Maschinenbau und Grenzhandel machen Arbeitsrecht zum Kernsuchfeld — daneben Handelsrecht in grenznahen Betrieben und gewerblicher Rechtsschutz in innovationsgetriebenen Branchen.",
      localCaseExample:
        'Stellen Sie sich vor: Ein RWTH-Spin-off prüft Lizenzvertrag — der Gründer sucht „gewerblicher Rechtsschutz Aachen“.',
      faq: standardCityFaq(
        "Aachen",
        {
          amtsgericht: "Amtsgericht Aachen",
          landgericht: "Landgericht Aachen",
          oberlandesgericht: "OLG Köln",
        },
        [
          {
            q: "Liegen AG und LG in Aachen?",
            a: "Ja — beide Instanzen sind in Aachen angesiedelt. Oberinstanz ist das OLG Köln.",
          },
          {
            q: "Welche Branchen prägen Aachen?",
            a: "Forschung, Maschinenbau und Grenzhandel erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Aachen und die Euregio — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "halle-saale",
    name: "Halle (Saale)",
    bundesland: ST,
    kreisOrBezirk: "Halle (Saale)",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 239000, label: "rund 239.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Halle (Saale)",
      landgericht: "Landgericht Halle",
      oberlandesgericht: ST_OLG,
    },
    economy: {
      sectors: ["Chemie", "Universität", "Logistik"],
      profile: "Chemiestandort an der Saale mit Universität und Logistik",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Umweltrecht", "Handelsrecht"],
    landmarks: ["Marktplatz", "Moritzburg"],
    mapCoords: coords(11.969, 51.482),
    content: {
      slug: "halle-saale",
      heroSubtitle:
        "Für Kanzleien in Sachsen-Anhalt — wo Chemie, Universität und Logistik typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Halle (Saale) ist mit rund 239.000 Einwohnern die zweitgrößte Stadt Sachsen-Anhalts — bewusst über dem üblichen Einwohner-Zielband. Chemie, Universität und Logistik prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Umwelt- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Leipzig und Magdeburg.",
      ],
      courtsNarrative:
        "Amtsgericht Halle (Saale) und Landgericht Halle bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Naumburg — für Mandanten ein wichtiger regionaler Hinweis, der auf einer Kanzlei-Website verständlich erklärt werden sollte.",
      economyNarrative:
        "Chemie, Universität und Logistik machen Arbeitsrecht zum Kernsuchfeld — daneben Umweltrecht in der Chemiebranche und Handelsrecht in mittelständischen Betrieben.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Chemiearbeiter prüft Betriebsübergang — er sucht „Arbeitsrecht Halle“.',
      faq: standardCityFaq(
        "Halle (Saale)",
        {
          amtsgericht: "Amtsgericht Halle (Saale)",
          landgericht: "Landgericht Halle",
          oberlandesgericht: ST_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Halle?",
            a: "Ja — beide Instanzen sind in Halle angesiedelt. Oberinstanz ist das OLG Naumburg.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Halle?",
            a: "Arbeitsrecht, Umweltrecht und Handelsrecht stehen im Chemie- und Universitätskontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Halle und Sachsen-Anhalt — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "krefeld",
    name: "Krefeld",
    bundesland: NRW,
    kreisOrBezirk: "Düsseldorf",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 227000, label: "rund 227.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Krefeld",
      landgericht: "Landgericht Krefeld",
      oberlandesgericht: "OLG Düsseldorf",
    },
    economy: {
      sectors: ["Textil", "Metall", "Handel"],
      profile: "Niederrheinische Stadt mit Textiltradition, Metall und Handel",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Insolvenzrecht"],
    landmarks: ["Kaiser-Wilhelm-Museum", "Stadtwald"],
    mapCoords: coords(6.562, 51.339),
    content: {
      slug: "krefeld",
      heroSubtitle:
        "Für Kanzleien am Niederrhein — wo Textiltradition, Metall und Handel typische Mandatsfelder bilden.",
      introParagraphs: [
        "Krefeld ist mit rund 227.000 Einwohnern ein Zentrum am Niederrhein — bewusst über dem üblichen Einwohner-Zielband. Textiltradition, Metall und Handel prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Handels- und Insolvenzrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Düsseldorf und Mönchengladbach.",
      ],
      courtsNarrative:
        "Amtsgericht Krefeld und Landgericht Krefeld bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Düsseldorf — für Mandanten ein wichtiger regionaler Hinweis.",
      economyNarrative:
        "Textil, Metall und Handel machen Arbeitsrecht zum Kernsuchfeld — daneben Handelsrecht in mittelständischen Betrieben und Insolvenzrecht im Strukturwandel.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Textilzulieferer prüft Lieferverzug — er sucht „Handelsrecht Krefeld“.',
      faq: standardCityFaq(
        "Krefeld",
        {
          amtsgericht: "Amtsgericht Krefeld",
          landgericht: "Landgericht Krefeld",
          oberlandesgericht: "OLG Düsseldorf",
        },
        [
          {
            q: "Liegen AG und LG in Krefeld?",
            a: "Ja — beide Instanzen sind in Krefeld angesiedelt. Oberinstanz ist das OLG Düsseldorf.",
          },
          {
            q: "Welche Branchen prägen Krefeld?",
            a: "Textil, Metall und Handel erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Krefeld und den Niederrhein — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "luebeck",
    name: "Lübeck",
    bundesland: SH,
    kreisOrBezirk: "Lübeck",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 217000, label: "rund 217.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Lübeck",
      landgericht: "Landgericht Lübeck",
      oberlandesgericht: SH_OLG,
    },
    economy: {
      sectors: ["Hafen", "Lebensmittel", "Tourismus"],
      profile: "Hansestadt mit Hafen, Lebensmittelindustrie und Tourismus",
    },
    primaryLegalArea: "Handelsrecht",
    secondaryLegalAreas: ["See- und Schifffahrtsrecht", "Arbeitsrecht"],
    landmarks: ["Holstentor", "Buddenbrookhaus"],
    mapCoords: coords(10.687, 53.866),
    content: {
      slug: "luebeck",
      heroSubtitle:
        "Für Kanzleien an der Trave — wo Hafen, Lebensmittel und Tourismus typische Mandatsfelder in der Hansestadt bilden.",
      introParagraphs: [
        "Lübeck ist mit rund 217.000 Einwohnern das zweite Zentrum Schleswig-Holsteins — bewusst über dem üblichen Einwohner-Zielband. Hafen, Lebensmittelindustrie und Tourismus prägen den regionalen Arbeitsmarkt.",
        "Handelsrecht, See- und Schifffahrtsrecht sowie Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Kiel und Hamburg.",
      ],
      courtsNarrative:
        "Amtsgericht Lübeck und Landgericht Lübeck bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Schleswig — für Mandanten ein wichtiger regionaler Hinweis.",
      economyNarrative:
        "Hafen, Lebensmittel und Tourismus machen Handelsrecht zum Kernsuchfeld — daneben See- und Schifffahrtsrecht im Hafenumfeld und Arbeitsrecht in der Lebensmittelbranche.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Hafenunternehmer streitet über Frachtvertrag — er sucht „Schifffahrtsrecht Lübeck“.',
      faq: standardCityFaq(
        "Lübeck",
        {
          amtsgericht: "Amtsgericht Lübeck",
          landgericht: "Landgericht Lübeck",
          oberlandesgericht: SH_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Lübeck?",
            a: "Ja — beide Instanzen sind in Lübeck angesiedelt. Oberinstanz ist das OLG Schleswig.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Lübeck?",
            a: "Handelsrecht, See- und Schifffahrtsrecht und Arbeitsrecht stehen im Hafen- und Hansekontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Lübeck und Schleswig-Holstein — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "oberhausen",
    name: "Oberhausen",
    bundesland: NRW,
    kreisOrBezirk: "Duisburg",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 211000, label: "rund 211.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Oberhausen",
      landgericht: "Landgericht Duisburg",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Handel", "Logistik", "Kultur/Tourismus"],
      profile: "Ruhrgebietsstadt mit Handel, Logistik und Kulturwirtschaft",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Mietrecht", "Handelsrecht"],
    landmarks: ["Gasometer", "Centro"],
    mapCoords: coords(6.851, 51.472),
    content: {
      slug: "oberhausen",
      heroSubtitle:
        "Für Kanzleien im Ruhrgebiet — wo Handel, Logistik und Kultur typische Mandatsfelder zwischen Essen und Duisburg bilden.",
      introParagraphs: [
        "Oberhausen ist mit rund 211.000 Einwohnern eine zentrale Ruhrgebietsstadt — bewusst über dem üblichen Einwohner-Zielband. Handel, Logistik und Kulturwirtschaft prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Miet- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen im westlichen Ruhrgebiet.",
      ],
      courtsNarrative:
        "Amtsgericht Oberhausen und Landgericht Duisburg bilden den relevanten Instanzenweg. Oberinstanz ist das OLG Hamm — der Sprung nach Duisburg sollte für Mandanten auf einer Kanzlei-Website verständlich erklärt werden.",
      economyNarrative:
        "Handel, Logistik und Kultur machen Arbeitsrecht zum Kernsuchfeld — daneben Mietrecht im Einzelhandel und Handelsrecht in Logistikbetrieben.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Einzelhandelsmitarbeiter prüft Kündigung — er sucht „Arbeitsrecht Oberhausen“.',
      faq: standardCityFaq(
        "Oberhausen",
        {
          amtsgericht: "Amtsgericht Oberhausen",
          landgericht: "Landgericht Duisburg",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Liegt das LG für Oberhausen in Oberhausen?",
            a: "Nein — zuständig ist das Landgericht Duisburg. Das Amtsgericht Oberhausen liegt in der Stadt.",
          },
          {
            q: "Welche Branchen prägen Oberhausen?",
            a: "Handel, Logistik und Kultur erzeugen typischerweise Mandate in Arbeits- und Mietrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Oberhausen und das Ruhrgebiet — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "kassel",
    name: "Kassel",
    bundesland: HE,
    kreisOrBezirk: "Kassel",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 201000, label: "rund 201.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Kassel",
      landgericht: "Landgericht Kassel",
      oberlandesgericht: HESSEN_OLG,
    },
    economy: {
      sectors: ["Verwaltung", "Kultur", "Logistik"],
      profile: "Nordhessisches Zentrum mit Verwaltung, Kultur und Logistik",
    },
    primaryLegalArea: "Verwaltungsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Mietrecht"],
    landmarks: ["Bergpark Wilhelmshöhe", "documenta-Halle"],
    mapCoords: coords(9.501, 51.312),
    content: {
      slug: "kassel",
      heroSubtitle:
        "Für Kanzleien in Nordhessen — wo Verwaltung, Kultur und Logistik typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Kassel ist mit rund 201.000 Einwohnern das nordhessische Zentrum — bewusst über dem üblichen Einwohner-Zielband. Verwaltung, Kultur und Logistik prägen den regionalen Arbeitsmarkt.",
        "Verwaltungs-, Arbeits- und Mietrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Hannover und Frankfurt.",
      ],
      courtsNarrative:
        "Amtsgericht Kassel und Landgericht Kassel bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Frankfurt am Main — für Mandanten ein wichtiger regionaler Hinweis.",
      economyNarrative:
        "Verwaltung, Kultur und Logistik machen Verwaltungsrecht zum Kernsuchfeld — daneben Arbeitsrecht in Behörden und Kultureinrichtungen sowie Mietrecht im Wohnungsmarkt.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Verwaltungsangestellter prüft Bescheid — er sucht „Verwaltungsrecht Kassel“.',
      faq: standardCityFaq(
        "Kassel",
        {
          amtsgericht: "Amtsgericht Kassel",
          landgericht: "Landgericht Kassel",
          oberlandesgericht: HESSEN_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Kassel?",
            a: "Ja — beide Instanzen sind in Kassel angesiedelt. Oberinstanz ist das OLG Frankfurt am Main.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Kassel?",
            a: "Verwaltungsrecht, Arbeitsrecht und Mietrecht stehen im nordhessischen Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Kassel und Nordhessen — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "hagen",
    name: "Hagen",
    bundesland: NRW,
    kreisOrBezirk: "Arnsberg",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 189000, label: "rund 189.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Hagen",
      landgericht: "Landgericht Hagen",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Stahl", "Metall", "Mittelstand"],
      profile: "Südliches Ruhrgebiet mit Stahl, Metall und Mittelstand",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Insolvenzrecht"],
    landmarks: ["Osthaus Museum", "Hohenhof"],
    mapCoords: coords(7.471, 51.359),
    content: {
      slug: "hagen",
      heroSubtitle:
        "Für Kanzleien im südlichen Ruhrgebiet — wo Stahl, Metall und Mittelstand typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Hagen ist mit rund 189.000 Einwohnern ein Zentrum im südlichen Ruhrgebiet — bewusst über dem üblichen Einwohner-Zielband. Stahl, Metall und Mittelstand prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Handels- und Insolvenzrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Dortmund und Wuppertal.",
      ],
      courtsNarrative:
        "Amtsgericht Hagen und Landgericht Hagen bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Hamm — für Mandanten ein wichtiger regionaler Hinweis.",
      economyNarrative:
        "Stahl, Metall und Mittelstand machen Arbeitsrecht zum Kernsuchfeld — daneben Handelsrecht in Industriebetrieben und Insolvenzrecht im Strukturwandel.",
      localCaseExample:
        'Stellen Sie sich vor: Nach Werksschließung sucht ein Stahlarbeiter „Arbeitsrecht Hagen“.',
      faq: standardCityFaq(
        "Hagen",
        {
          amtsgericht: "Amtsgericht Hagen",
          landgericht: "Landgericht Hagen",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Liegen AG und LG in Hagen?",
            a: "Ja — beide Instanzen sind in Hagen angesiedelt. Oberinstanz ist das OLG Hamm.",
          },
          {
            q: "Welche Branchen prägen Hagen?",
            a: "Stahl, Metall und Mittelstand erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Hagen und das Ruhrgebiet — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "hamm",
    name: "Hamm",
    bundesland: NRW,
    kreisOrBezirk: "Arnsberg",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 179000, label: "rund 179.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Hamm",
      landgericht: "Landgericht Hamm",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Logistik", "Stahl", "Energie"],
      profile: "Logistik-Knoten zwischen Ruhrgebiet und Münsterland mit Stahl und Energie",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Transportrecht", "Handelsrecht"],
    landmarks: ["Gustav-Lübcke-Museum", "Maximilianpark"],
    mapCoords: coords(7.814, 51.674),
    content: {
      slug: "hamm",
      heroSubtitle:
        "Für Kanzleien am Logistik-Knoten — wo Verkehr, Stahl und Energie typische Mandatsfelder zwischen Ruhr und Münsterland bilden.",
      introParagraphs: [
        "Hamm ist mit rund 179.000 Einwohnern ein wichtiger Logistik-Knoten in Westfalen — bewusst über dem üblichen Einwohner-Zielband. Stahl, Energie und Verkehr prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Transport- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen im Grenzbereich von Ruhrgebiet und Münsterland.",
      ],
      courtsNarrative:
        "Amtsgericht Hamm, Landgericht Hamm und OLG Hamm bilden einen klar benennbaren Instanzenweg in derselben Stadt — für Mandanten ein seltener Vorteil.",
      economyNarrative:
        "Logistik, Stahl und Energie machen Arbeitsrecht zum Kernsuchfeld — daneben Transportrecht im Güterverkehr und Handelsrecht in Logistikbetrieben.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Spediteur streitet über Frachtkosten — er sucht „Transportrecht Hamm“.',
      faq: standardCityFaq(
        "Hamm",
        {
          amtsgericht: "Amtsgericht Hamm",
          landgericht: "Landgericht Hamm",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Liegen AG, LG und OLG für Hamm in derselben Stadt?",
            a: "Ja — alle drei Instanzen sind in Hamm angesiedelt und für Mandanten gut benennbar.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Hamm?",
            a: "Arbeitsrecht, Transportrecht und Handelsrecht stehen im Logistik-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Hamm und Westfalen — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "muelheim",
    name: "Mülheim an der Ruhr",
    bundesland: NRW,
    kreisOrBezirk: "Düsseldorf",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 172000, label: "rund 172.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Mülheim an der Ruhr",
      landgericht: "Landgericht Duisburg",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Mittelstand", "Chemie", "Dienstleistung"],
      profile: "Ruhrstadt am Rhein mit Mittelstand, Chemie und Dienstleistungen",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Mietrecht"],
    landmarks: ["Aquarius Wassermuseum", "MüGa-Park"],
    mapCoords: coords(6.884, 51.427),
    content: {
      slug: "muelheim",
      heroSubtitle:
        "Für Kanzleien an der Ruhr — wo Mittelstand, Chemie und Dienstleistung typische Mandatsfelder zwischen Essen und Düsseldorf bilden.",
      introParagraphs: [
        "Mülheim an der Ruhr ist mit rund 172.000 Einwohnern eine Ruhrstadt am Rhein — bewusst über dem üblichen Einwohner-Zielband. Mittelstand, Chemie und Dienstleistungen prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Handels- und Mietrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen im westlichen Ruhrgebiet.",
      ],
      courtsNarrative:
        "Amtsgericht Mülheim an der Ruhr und Landgericht Duisburg bilden den relevanten Instanzenweg. Oberinstanz ist das OLG Hamm — der Sprung nach Duisburg sollte für Mandanten verständlich erklärt werden.",
      economyNarrative:
        "Mittelstand, Chemie und Dienstleistung machen Arbeitsrecht zum Kernsuchfeld — daneben Handelsrecht in mittelständischen Betrieben und Mietrecht im Wohnungsmarkt.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Chemiearbeiter prüft Tarifänderung — er sucht „Arbeitsrecht Mülheim“.',
      faq: standardCityFaq(
        "Mülheim an der Ruhr",
        {
          amtsgericht: "Amtsgericht Mülheim an der Ruhr",
          landgericht: "Landgericht Duisburg",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Liegt das LG für Mülheim in Mülheim?",
            a: "Nein — zuständig ist das Landgericht Duisburg. Das Amtsgericht liegt in Mülheim an der Ruhr.",
          },
          {
            q: "Welche Branchen prägen Mülheim?",
            a: "Mittelstand, Chemie und Dienstleistung erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Mülheim und das Ruhrgebiet — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "leverkusen",
    name: "Leverkusen",
    bundesland: NRW,
    kreisOrBezirk: "Köln",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 166000, label: "rund 166.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Leverkusen",
      landgericht: "Landgericht Köln",
      oberlandesgericht: "OLG Köln",
    },
    economy: {
      sectors: ["Chemie/Pharma", "Forschung", "Sport/Events"],
      profile: "Chemiestandort am Rhein mit Pharma, Forschung und Sportwirtschaft",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Produkthaftungsrecht", "Handelsrecht"],
    landmarks: ["BayArena", "Japanischer Garten"],
    mapCoords: coords(6.984, 51.045),
    content: {
      slug: "leverkusen",
      heroSubtitle:
        "Für Kanzleien am Rhein — wo Chemie, Pharma und Forschung typische Mandatsfelder im Kölner Umland bilden.",
      introParagraphs: [
        "Leverkusen ist mit rund 166.000 Einwohnern ein Chemie- und Forschungsstandort am Rhein — bewusst über dem üblichen Einwohner-Zielband. Pharma, Chemie und Forschung prägen den regionalen Arbeitsmarkt.",
        "Arbeitsrecht, Produkthaftung und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Köln und Düsseldorf.",
      ],
      courtsNarrative:
        "Amtsgericht Leverkusen und Landgericht Köln bilden den relevanten Instanzenweg. Oberinstanz ist das OLG Köln — der Sprung nach Köln sollte für Mandanten auf einer Kanzlei-Website verständlich erklärt werden.",
      economyNarrative:
        "Chemie, Pharma und Forschung machen Arbeitsrecht zum Kernsuchfeld — daneben Produkthaftung in der Industrie und Handelsrecht in Zulieferbetrieben.",
      localCaseExample:
        'Stellen Sie sich vor: Nach Produktrückruf sucht ein Pharmaunternehmen „Produkthaftung Leverkusen“.',
      faq: standardCityFaq(
        "Leverkusen",
        {
          amtsgericht: "Amtsgericht Leverkusen",
          landgericht: "Landgericht Köln",
          oberlandesgericht: "OLG Köln",
        },
        [
          {
            q: "Liegt das LG für Leverkusen in Leverkusen?",
            a: "Nein — zuständig ist das Landgericht Köln. Das Amtsgericht Leverkusen liegt in der Stadt.",
          },
          {
            q: "Welche Branchen prägen Leverkusen?",
            a: "Chemie, Pharma und Forschung erzeugen typischerweise Mandate in Arbeitsrecht und Produkthaftung.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Leverkusen und das Rheinland — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "osnabrueck",
    name: "Osnabrück",
    bundesland: NI,
    kreisOrBezirk: "Osnabrück",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 165000, label: "rund 165.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Osnabrück",
      landgericht: "Landgericht Osnabrück",
      oberlandesgericht: OLDENBURG_OLG,
    },
    economy: {
      sectors: ["Lebensmittel", "Maschinenbau", "Universität"],
      profile: "Westfälisches Zentrum mit Lebensmittel, Maschinenbau und Universität",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Lebensmittelrecht"],
    landmarks: ["Rathaus", "Felix-Nussbaum-Haus"],
    mapCoords: coords(8.047, 52.279),
    content: {
      slug: "osnabrueck",
      heroSubtitle:
        "Für Kanzleien in Westfalen — wo Lebensmittel, Maschinenbau und Universität typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Osnabrück ist mit rund 165.000 Einwohnern ein westfälisches Zentrum in Niedersachsen — bewusst über dem üblichen Einwohner-Zielband. Lebensmittel, Maschinenbau und Universität prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Handels- und Lebensmittelrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Münster und Hannover.",
      ],
      courtsNarrative:
        "Amtsgericht Osnabrück und Landgericht Osnabrück bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Oldenburg — für Mandanten ein wichtiger regionaler Hinweis.",
      economyNarrative:
        "Lebensmittel, Maschinenbau und Universität machen Arbeitsrecht zum Kernsuchfeld — daneben Handelsrecht in mittelständischen Betrieben und Lebensmittelrecht in der Ernährungswirtschaft.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Lebensmittelhersteller prüft Kennzeichnungspflichten — er sucht „Lebensmittelrecht Osnabrück“.',
      faq: standardCityFaq(
        "Osnabrück",
        {
          amtsgericht: "Amtsgericht Osnabrück",
          landgericht: "Landgericht Osnabrück",
          oberlandesgericht: OLDENBURG_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Osnabrück?",
            a: "Ja — beide Instanzen sind in Osnabrück angesiedelt. Oberinstanz ist das OLG Oldenburg.",
          },
          {
            q: "Welche Branchen prägen Osnabrück?",
            a: "Lebensmittel, Maschinenbau und Universität erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Osnabrück und Westfalen — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "solingen",
    name: "Solingen",
    bundesland: NRW,
    kreisOrBezirk: "Düsseldorf",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 160000, label: "rund 160.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Solingen",
      landgericht: "Landgericht Wuppertal",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Metall/Klingen", "Mittelstand", "Handwerk"],
      profile: "Klingenstadt im Bergischen Land mit Metall, Mittelstand und Handwerk",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Produkthaftungsrecht"],
    landmarks: ["Müngstener Brücke", "Schloss Burg"],
    mapCoords: coords(7.084, 51.173),
    content: {
      slug: "solingen",
      heroSubtitle:
        "Für Kanzleien im Bergischen Land — wo Metall, Klingen und Handwerk typische Mandatsfelder zwischen Köln und Wuppertal bilden.",
      introParagraphs: [
        "Solingen ist mit rund 160.000 Einwohnern die Klingenstadt im Bergischen Land — bewusst über dem üblichen Einwohner-Zielband. Metall, Mittelstand und Handwerk prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Handelsrecht und Produkthaftung sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen im Bergischen Land.",
      ],
      courtsNarrative:
        "Amtsgericht Solingen und Landgericht Wuppertal bilden den relevanten Instanzenweg. Oberinstanz ist das OLG Hamm — der Sprung nach Wuppertal sollte für Mandanten verständlich erklärt werden.",
      economyNarrative:
        "Metall, Mittelstand und Handwerk machen Arbeitsrecht zum Kernsuchfeld — daneben Handelsrecht in mittelständischen Betrieben und Produkthaftung in der Metallindustrie.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Klingenhersteller prüft Gewährleistungsanspruch — er sucht „Handelsrecht Solingen“.',
      faq: standardCityFaq(
        "Solingen",
        {
          amtsgericht: "Amtsgericht Solingen",
          landgericht: "Landgericht Wuppertal",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Liegt das LG für Solingen in Solingen?",
            a: "Nein — zuständig ist das Landgericht Wuppertal. Das Amtsgericht Solingen liegt in der Stadt.",
          },
          {
            q: "Welche Branchen prägen Solingen?",
            a: "Metall, Mittelstand und Handwerk erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Solingen und das Bergische Land — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "heidelberg",
    name: "Heidelberg",
    bundesland: BW,
    kreisOrBezirk: "Karlsruhe",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 160000, label: "rund 160.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Heidelberg",
      landgericht: "Landgericht Heidelberg",
      oberlandesgericht: KARLSRUHE_OLG,
    },
    economy: {
      sectors: ["Universität", "Forschung", "Medizintechnik"],
      profile: "Universitätsstadt in der Rhein-Neckar-Region mit Forschung und Medizintechnik",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Medizinrecht", "Mietrecht"],
    landmarks: ["Heidelberger Schloss", "Alte Brücke"],
    mapCoords: coords(8.672, 49.409),
    content: {
      slug: "heidelberg",
      heroSubtitle:
        "Für Kanzleien in der Rhein-Neckar-Region — wo Universität, Forschung und Medizintechnik typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Heidelberg ist mit rund 160.000 Einwohnern eine der bekanntesten Universitätsstädte Deutschlands — bewusst über dem üblichen Einwohner-Zielband. Forschung, Medizintechnik und Tourismus prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Medizin- und Mietrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Mannheim und Karlsruhe.",
      ],
      courtsNarrative:
        "Amtsgericht Heidelberg und Landgericht Heidelberg bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Karlsruhe — für Mandanten ein wichtiger regionaler Hinweis.",
      economyNarrative:
        "Universität, Forschung und Medizintechnik machen Arbeitsrecht zum Kernsuchfeld — daneben Medizinrecht in Kliniken und Forschungseinrichtungen sowie Mietrecht im angespannten Wohnungsmarkt.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Forscher prüft Dienstvertrag nach Projektende — er sucht „Arbeitsrecht Heidelberg“.',
      faq: standardCityFaq(
        "Heidelberg",
        {
          amtsgericht: "Amtsgericht Heidelberg",
          landgericht: "Landgericht Heidelberg",
          oberlandesgericht: KARLSRUHE_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Heidelberg?",
            a: "Ja — beide Instanzen sind in Heidelberg angesiedelt. Oberinstanz ist das OLG Karlsruhe.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Heidelberg?",
            a: "Arbeitsrecht, Medizinrecht und Mietrecht stehen im Universitäts- und Forschungskontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Heidelberg und die Rhein-Neckar-Region — ohne erfundene Referenzen.",
    },
  }),
];

export const phase4Facts: CityFacts[] = cities.map((city) => {
  const { content, ...facts } = city;
  void content;
  return facts;
});

export const phase4Content: Record<string, CityRecord["content"]> =
  Object.fromEntries(cities.map((c) => [c.slug, c.content]));

export const phase4Records: CityRecord[] = cities.map(
  ({ content, ...facts }) => ({ ...facts, content }),
);
