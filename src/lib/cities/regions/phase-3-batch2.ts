import { lonLatToMapCoords } from "../germanyMap";
import { getPhase3NearbySlugs } from "../phase-3-plan";
import type { CityFacts, CityRecord } from "../types";
import { BW } from "./baden-wuerttemberg-shared";
import { BY } from "./bayern-shared";
import { HE, HESSEN_OLG } from "./hessen-shared";
import { NI } from "./niedersachsen-shared";
import { NRW } from "./nrw-shared";
import { standardCityFaq } from "./phase-2-shared";
import { SACHSEN_OLG, SN } from "./sachsen-shared";
import { SH, SH_OLG } from "./schleswig-holstein-shared";

type CityDef = CityFacts & {
  content: CityRecord["content"];
};

function coords(lon: number, lat: number) {
  return { ...lonLatToMapCoords(lon, lat), anchor: "start" as const };
}

const KARLSRUHE_OLG = "OLG Karlsruhe" as const;
const NUERNBERG_OLG = "OLG Nürnberg" as const;
const CELLE_OLG = "OLG Celle" as const;
const BRAUNSCHWEIG_OLG = "OLG Braunschweig" as const;

function city(
  def: Omit<CityDef, "nearbySlugs" | "rolloutPhase" | "status">,
): CityDef {
  return {
    ...def,
    nearbySlugs: getPhase3NearbySlugs(def.slug),
    rolloutPhase: 3,
    status: "live",
  };
}

export const phase3Batch2Cities: CityDef[] = [
  city({
    slug: "duesseldorf",
    name: "Düsseldorf",
    bundesland: NRW,
    kreisOrBezirk: "Düsseldorf",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 623000, label: "rund 623.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Düsseldorf",
      landgericht: "Landgericht Düsseldorf",
      oberlandesgericht: "OLG Düsseldorf",
    },
    economy: {
      sectors: ["Mode", "Finanzdienstleister", "Messe"],
      profile: "Landeshauptstadt NRW mit Modebranche, Finanzdienstleistern und Messewirtschaft",
    },
    primaryLegalArea: "Handelsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Gesellschaftsrecht"],
    landmarks: ["Königsallee", "Rheinturm"],
    mapCoords: coords(6.773, 51.227),
    content: {
      slug: "duesseldorf",
      heroSubtitle:
        "Für Kanzleien an der Landeshauptstadt — wo Mode, Finanzdienstleister und Messe typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Düsseldorf ist Landeshauptstadt Nordrhein-Westfalens und mit rund 623.000 Einwohnern über dem üblichen Zielband. Modebranche, Finanzdienstleister und Messewirtschaft prägen den regionalen Arbeitsmarkt.",
        "Handels-, Arbeits- und Gesellschaftsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen am Rhein.",
      ],
      courtsNarrative:
        "Amtsgericht Düsseldorf, Landgericht Düsseldorf und OLG Düsseldorf bilden einen klar benennbaren Instanzenweg in derselben Stadt — für Mandanten ein seltener Vorteil.",
      economyNarrative:
        "Mode, Finanzdienstleister und Messe machen Handelsrecht zum Kernsuchfeld — daneben Arbeitsrecht in wachsenden Betrieben und Gesellschaftsrecht bei Unternehmensstrukturen.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Modehaus prüft Lieferverträge nach Saisonwechsel — der Einkaufsleiter sucht „Handelsrecht Düsseldorf“.',
      faq: standardCityFaq(
        "Düsseldorf",
        {
          amtsgericht: "Amtsgericht Düsseldorf",
          landgericht: "Landgericht Düsseldorf",
          oberlandesgericht: "OLG Düsseldorf",
        },
        [
          {
            q: "Liegen AG, LG und OLG für Düsseldorf in derselben Stadt?",
            a: "Ja — alle drei Instanzen sind in Düsseldorf angesiedelt und für Mandanten gut benennbar.",
          },
          {
            q: "Welche Branchen prägen Düsseldorf?",
            a: "Mode, Finanzdienstleister und Messe erzeugen typischerweise Mandate in Handels-, Arbeits- und Gesellschaftsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Düsseldorf und das Rheinland — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "dortmund",
    name: "Dortmund",
    bundesland: NRW,
    kreisOrBezirk: "Arnsberg",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 588000, label: "rund 588.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Dortmund",
      landgericht: "Landgericht Dortmund",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Logistik", "Technologie", "Handel"],
      profile: "Ruhrgebietsmetropole mit Logistik, Tech und Handel nach dem Strukturwandel",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Insolvenzrecht"],
    landmarks: ["Westfalenstadion", "Phoenix-See"],
    mapCoords: coords(7.466, 51.514),
    content: {
      slug: "dortmund",
      heroSubtitle:
        "Für Kanzleien im Ruhrgebiet — wo Logistik, Technologie und Handel typische Mandatsfelder nach dem Strukturwandel bilden.",
      introParagraphs: [
        "Dortmund ist mit rund 588.000 Einwohnern eine der größten Städte im Ruhrgebiet — bewusst über dem üblichen Einwohner-Zielband. Logistik, Technologie und Handel prägen die Wirtschaft nach dem Bergbau.",
        "Arbeits-, Handels- und Insolvenzrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen im Ruhrgebiet.",
      ],
      courtsNarrative:
        "Amtsgericht Dortmund und Landgericht Dortmund bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Hamm — für Mandanten ein wichtiger Hinweis, der auf einer Kanzlei-Website verständlich erklärt werden sollte.",
      economyNarrative:
        "Logistik, Tech und Handel machen Arbeitsrecht zum Kernsuchfeld — daneben Handelsrecht in mittelständischen Betrieben und Insolvenzrecht im Strukturwandel.",
      localCaseExample:
        'Stellen Sie sich vor: Nach Betriebsübergang sucht ein Logistikmitarbeiter „Arbeitsrecht Dortmund“.',
      faq: standardCityFaq(
        "Dortmund",
        {
          amtsgericht: "Amtsgericht Dortmund",
          landgericht: "Landgericht Dortmund",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Liegen AG und LG in Dortmund?",
            a: "Ja — beide Instanzen sind in Dortmund angesiedelt. Oberinstanz ist das OLG Hamm.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Dortmund?",
            a: "Arbeitsrecht, Handelsrecht und Insolvenzrecht stehen im Ruhrgebiets-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Dortmund und das Ruhrgebiet — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "essen",
    name: "Essen",
    bundesland: NRW,
    kreisOrBezirk: "Duisburg",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 578000, label: "rund 578.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Essen",
      landgericht: "Landgericht Essen",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Energie", "Handel", "Dienstleistung"],
      profile: "Zentrale Ruhrgebietsstadt mit Energiekonzerne, Handel und Dienstleistungssektor",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Energierecht", "Handelsrecht"],
    landmarks: ["Zeche Zollverein", "Baldeneysee"],
    mapCoords: coords(7.012, 51.456),
    content: {
      slug: "essen",
      heroSubtitle:
        "Für Kanzleien im Herzen des Ruhrgebiets — wo Energie, Handel und Dienstleistung typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Essen ist mit rund 578.000 Einwohnern eine zentrale Ruhrgebietsmetropole — bewusst über dem üblichen Einwohner-Zielband. Energiekonzerne, Handel und Dienstleistungen prägen den Arbeitsmarkt.",
        "Arbeits-, Energie- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Duisburg und Dortmund.",
      ],
      courtsNarrative:
        "Amtsgericht Essen und Landgericht Essen bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Hamm — ein regionaler Bezug, den Mandanten auf einer Kanzlei-Website verständlich erklärt haben möchten.",
      economyNarrative:
        "Energie, Handel und Dienstleistung machen Arbeitsrecht zum Kernsuchfeld — daneben energierechtliche Fragen in Versorgungsunternehmen und Handelsrecht im Einzelhandel.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Energieversorger prüft Tarifänderungen — der Betriebsrat sucht „Arbeitsrecht Essen“.',
      faq: standardCityFaq(
        "Essen",
        {
          amtsgericht: "Amtsgericht Essen",
          landgericht: "Landgericht Essen",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Liegen AG und LG in Essen?",
            a: "Ja — beide Instanzen sind in Essen angesiedelt. Oberinstanz ist das OLG Hamm.",
          },
          {
            q: "Welche Branchen prägen Essen?",
            a: "Energie, Handel und Dienstleistung erzeugen typischerweise Mandate in Arbeits-, Energie- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Essen und das Ruhrgebiet — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "dresden",
    name: "Dresden",
    bundesland: SN,
    kreisOrBezirk: "Dresden",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 563000, label: "rund 563.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Dresden",
      landgericht: "Landgericht Dresden",
      oberlandesgericht: SACHSEN_OLG,
    },
    economy: {
      sectors: ["Mikroelektronik", "Kultur/Tourismus", "Forschung"],
      profile: "Sächsische Landeshauptstadt mit Mikroelektronik, Kultur und Forschung",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Mietrecht", "Verwaltungsrecht"],
    landmarks: ["Frauenkirche", "Zwinger"],
    mapCoords: coords(13.738, 51.05),
    content: {
      slug: "dresden",
      heroSubtitle:
        "Für Kanzleien in der Landeshauptstadt — wo Mikroelektronik, Kultur und Forschung typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Dresden ist Landeshauptstadt Sachsens und mit rund 563.000 Einwohnern über dem üblichen Einwohner-Zielband. Mikroelektronik, Kultur und Forschung prägen den Arbeits- und Wohnungsmarkt.",
        "Arbeits-, Miet- und Verwaltungsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen in der Elbmetropole.",
      ],
      courtsNarrative:
        "Amtsgericht Dresden, Landgericht Dresden und OLG Dresden bilden einen klar benennbaren sächsischen Instanzenweg. AG und LG liegen in Dresden — für Mandanten ein wichtiger Orientierungspunkt.",
      economyNarrative:
        "Mikroelektronik, Kultur und Forschung machen Arbeitsrecht zum Kernsuchfeld — daneben Mietrecht im wachsenden Wohnungsmarkt und Verwaltungsrecht im Behördenumfeld.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Forscher prüft Dienstvertrag nach Projektende — er sucht „Arbeitsrecht Dresden“.',
      faq: standardCityFaq(
        "Dresden",
        {
          amtsgericht: "Amtsgericht Dresden",
          landgericht: "Landgericht Dresden",
          oberlandesgericht: SACHSEN_OLG,
        },
        [
          {
            q: "Liegen AG, LG und OLG für Dresden in derselben Stadt?",
            a: "Ja — alle drei Instanzen sind in Dresden angesiedelt und für Mandanten gut benennbar.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Dresden?",
            a: "Arbeitsrecht, Mietrecht und Verwaltungsrecht stehen im Landeshauptstadt-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Dresden und Sachsen — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "hannover",
    name: "Hannover",
    bundesland: NI,
    kreisOrBezirk: "Region Hannover",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 535000, label: "rund 535.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Hannover",
      landgericht: "Landgericht Hannover",
      oberlandesgericht: CELLE_OLG,
    },
    economy: {
      sectors: ["Messe", "Versicherungen", "Verwaltung"],
      profile: "Niedersächsische Landeshauptstadt mit Messe, Versicherungen und Verwaltung",
    },
    primaryLegalArea: "Mietrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Verwaltungsrecht"],
    landmarks: ["Neues Rathaus", "Herrenhäuser Gärten"],
    mapCoords: coords(9.732, 52.375),
    content: {
      slug: "hannover",
      heroSubtitle:
        "Für Kanzleien in der Landeshauptstadt — wo Messe, Versicherungen und Verwaltung typische Mandatsfelder bilden.",
      introParagraphs: [
        "Hannover ist Landeshauptstadt Niedersachsens und mit rund 535.000 Einwohnern über dem üblichen Einwohner-Zielband. Messe, Versicherungen und Verwaltung prägen den regionalen Arbeitsmarkt.",
        "Miet-, Arbeits- und Verwaltungsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen in der Region Hannover.",
      ],
      courtsNarrative:
        "Amtsgericht Hannover und Landgericht Hannover bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Celle — für Mandanten ein wichtiger Hinweis, der auf einer Kanzlei-Website verständlich erklärt werden sollte.",
      economyNarrative:
        "Messe, Versicherungen und Verwaltung machen Mietrecht zum Kernsuchfeld — daneben Arbeitsrecht in Versicherungs- und Messebetrieben und Verwaltungsrecht im Behördenumfeld.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Messeaussteller streitet über Standmiete — er sucht „Mietrecht Hannover“.',
      faq: standardCityFaq(
        "Hannover",
        {
          amtsgericht: "Amtsgericht Hannover",
          landgericht: "Landgericht Hannover",
          oberlandesgericht: CELLE_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Hannover?",
            a: "Ja — beide Instanzen sind in Hannover angesiedelt. Oberinstanz ist das OLG Celle.",
          },
          {
            q: "Welche Branchen prägen Hannover?",
            a: "Messe, Versicherungen und Verwaltung erzeugen typischerweise Mandate in Miet-, Arbeits- und Verwaltungsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Hannover und die Region — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "nuernberg",
    name: "Nürnberg",
    bundesland: BY,
    kreisOrBezirk: "Mittelfranken",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 523000, label: "rund 523.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Nürnberg",
      landgericht: "Landgericht Nürnberg",
      oberlandesgericht: NUERNBERG_OLG,
    },
    economy: {
      sectors: ["Automotive", "Elektronik", "Messe"],
      profile: "Fränkische Metropole mit Automotive, Elektronik und Messewirtschaft",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Gewerblicher Rechtsschutz"],
    landmarks: ["Kaiserburg", "Hauptmarkt"],
    mapCoords: coords(11.077, 49.452),
    content: {
      slug: "nuernberg",
      heroSubtitle:
        "Für Kanzleien in der fränkischen Metropole — wo Automotive, Elektronik und Messe typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Nürnberg ist mit rund 523.000 Einwohnern das zweite bayerische Großzentrum — bewusst über dem üblichen Einwohner-Zielband. Automotive, Elektronik und Messe prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Handelsrecht und gewerblicher Rechtsschutz sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen in Mittelfranken.",
      ],
      courtsNarrative:
        "Amtsgericht Nürnberg, Landgericht Nürnberg und OLG Nürnberg bilden einen klar benennbaren fränkischen Instanzenweg in derselben Metropole.",
      economyNarrative:
        "Automotive, Elektronik und Messe machen Arbeitsrecht zum Kernsuchfeld — daneben Handelsrecht in mittelständischen Betrieben und gewerblicher Rechtsschutz in innovationsgetriebenen Branchen.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Zulieferer prüft Patentverletzung — der Geschäftsführer sucht „gewerblicher Rechtsschutz Nürnberg“.',
      faq: standardCityFaq(
        "Nürnberg",
        {
          amtsgericht: "Amtsgericht Nürnberg",
          landgericht: "Landgericht Nürnberg",
          oberlandesgericht: NUERNBERG_OLG,
        },
        [
          {
            q: "Liegen AG, LG und OLG für Nürnberg in derselben Stadt?",
            a: "Ja — alle drei Instanzen sind in Nürnberg angesiedelt und für Mandanten gut benennbar.",
          },
          {
            q: "Welche Branchen prägen Nürnberg?",
            a: "Automotive, Elektronik und Messe erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Nürnberg und Mittelfranken — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "duisburg",
    name: "Duisburg",
    bundesland: NRW,
    kreisOrBezirk: "Duisburg",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 501000, label: "rund 501.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Duisburg",
      landgericht: "Landgericht Duisburg",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Hafen/Logistik", "Stahl", "Handel"],
      profile: "Rheinhafenstadt mit Logistik, Stahl und Handel im Ruhrgebiet",
    },
    primaryLegalArea: "Handelsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Transportrecht"],
    landmarks: ["Innenhafen", "Landschaftspark Nord"],
    mapCoords: coords(6.762, 51.434),
    content: {
      slug: "duisburg",
      heroSubtitle:
        "Für Kanzleien am Rhein — wo Hafen, Logistik und Stahl typische Mandatsfelder im Ruhrgebiet bilden.",
      introParagraphs: [
        "Duisburg ist mit rund 501.000 Einwohnern eine der größten Hafenstädte Deutschlands — bewusst über dem üblichen Einwohner-Zielband. Logistik, Stahl und Handel prägen den regionalen Arbeitsmarkt.",
        "Handels-, Arbeits- und Transportrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Essen und Düsseldorf.",
      ],
      courtsNarrative:
        "Amtsgericht Duisburg und Landgericht Duisburg bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Hamm — ein regionaler Bezug, den Mandanten auf einer Kanzlei-Website verständlich erklärt haben möchten.",
      economyNarrative:
        "Hafen, Logistik und Stahl machen Handelsrecht zum Kernsuchfeld — daneben Arbeitsrecht in Industriebetrieben und Transportrecht im Güterverkehr.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Spediteur streitet über Frachtkosten — er sucht „Transportrecht Duisburg“.',
      faq: standardCityFaq(
        "Duisburg",
        {
          amtsgericht: "Amtsgericht Duisburg",
          landgericht: "Landgericht Duisburg",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Liegen AG und LG in Duisburg?",
            a: "Ja — beide Instanzen sind in Duisburg angesiedelt. Oberinstanz ist das OLG Hamm.",
          },
          {
            q: "Welche Branchen prägen Duisburg?",
            a: "Hafen, Logistik und Stahl erzeugen typischerweise Mandate in Handels-, Arbeits- und Transportrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Duisburg und das Ruhrgebiet — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "bochum",
    name: "Bochum",
    bundesland: NRW,
    kreisOrBezirk: "Arnsberg",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 364000, label: "rund 364.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Bochum",
      landgericht: "Landgericht Bochum",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Universität", "Gesundheitswesen", "Mittelstand"],
      profile: "Ruhrgebietsstadt mit Universität, Gesundheitswesen und Mittelstand",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Medizinrecht", "Handelsrecht"],
    landmarks: ["Deutsches Bergbau-Museum", "Jahrhunderthalle"],
    mapCoords: coords(7.216, 51.481),
    content: {
      slug: "bochum",
      heroSubtitle:
        "Für Kanzleien im Ruhrgebiet — wo Universität, Gesundheitswesen und Mittelstand typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Bochum ist mit rund 364.000 Einwohnern ein zentrales Ruhrgebietszentrum — über dem üblichen Einwohner-Zielband. Universität, Gesundheitswesen und Mittelstand prägen den Arbeitsmarkt.",
        "Arbeits-, Medizin- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Essen und Dortmund.",
      ],
      courtsNarrative:
        "Amtsgericht Bochum und Landgericht Bochum bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Hamm.",
      economyNarrative:
        "Universität, Gesundheitswesen und Mittelstand machen Arbeitsrecht zum Kernsuchfeld — daneben Medizinrecht in Kliniken und Handelsrecht in mittelständischen Betrieben.",
      localCaseExample:
        'Stellen Sie sich vor: Eine Klinik prüft Behandlungsfehler-Haftung — der Patient sucht „Medizinrecht Bochum“.',
      faq: standardCityFaq(
        "Bochum",
        {
          amtsgericht: "Amtsgericht Bochum",
          landgericht: "Landgericht Bochum",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Liegen AG und LG in Bochum?",
            a: "Ja — beide Instanzen sind in Bochum angesiedelt. Oberinstanz ist das OLG Hamm.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Bochum?",
            a: "Arbeitsrecht, Medizinrecht und Handelsrecht stehen im Universitäts- und Gesundheitskontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Bochum und das Ruhrgebiet — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "wuppertal",
    name: "Wuppertal",
    bundesland: NRW,
    kreisOrBezirk: "Düsseldorf",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 358000, label: "rund 358.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Wuppertal",
      landgericht: "Landgericht Wuppertal",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Pharma/Chemie", "Textil", "Mittelstand"],
      profile: "Bergische Großstadt mit Pharma, Chemie und Textiltradition",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Produkthaftungsrecht"],
    landmarks: ["Schwebebahn", "Von-der-Heydt-Museum"],
    mapCoords: coords(7.15, 51.257),
    content: {
      slug: "wuppertal",
      heroSubtitle:
        "Für Kanzleien im Bergischen Land — wo Pharma, Chemie und Textiltradition typische Mandatsfelder bilden.",
      introParagraphs: [
        "Wuppertal ist mit rund 358.000 Einwohnern die größte Stadt im Bergischen Land — über dem üblichen Einwohner-Zielband. Pharma, Chemie und Textiltradition prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Handelsrecht und Produkthaftung sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Ruhr und Rhein.",
      ],
      courtsNarrative:
        "Amtsgericht Wuppertal und Landgericht Wuppertal bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Hamm — für Mandanten ein wichtiger regionaler Hinweis.",
      economyNarrative:
        "Pharma, Chemie und Textil machen Arbeitsrecht zum Kernsuchfeld — daneben Handelsrecht in mittelständischen Betrieben und Produkthaftung in der Industrie.",
      localCaseExample:
        'Stellen Sie sich vor: Nach Produktrückruf sucht ein Chemiebetrieb „Produkthaftung Wuppertal“.',
      faq: standardCityFaq(
        "Wuppertal",
        {
          amtsgericht: "Amtsgericht Wuppertal",
          landgericht: "Landgericht Wuppertal",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Liegen AG und LG in Wuppertal?",
            a: "Ja — beide Instanzen sind in Wuppertal angesiedelt. Oberinstanz ist das OLG Hamm.",
          },
          {
            q: "Welche Branchen prägen Wuppertal?",
            a: "Pharma, Chemie und Textil erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Wuppertal und das Bergische Land — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "bielefeld",
    name: "Bielefeld",
    bundesland: NRW,
    kreisOrBezirk: "Detmold",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 334000, label: "rund 334.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Bielefeld",
      landgericht: "Landgericht Bielefeld",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Lebensmittel", "Maschinenbau", "Dienstleistung"],
      profile: "Ostwestfalen-Lippe-Zentrum mit Lebensmittel, Maschinenbau und Dienstleistungen",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Lebensmittelrecht"],
    landmarks: ["Sparrenburg", "Altstadt"],
    mapCoords: coords(8.533, 52.02),
    content: {
      slug: "bielefeld",
      heroSubtitle:
        "Für Kanzleien in Ostwestfalen — wo Lebensmittel, Maschinenbau und Dienstleistung typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Bielefeld ist mit rund 334.000 Einwohnern das Zentrum Ostwestfalens — über dem üblichen Einwohner-Zielband. Lebensmittel, Maschinenbau und Dienstleistungen prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Handels- und Lebensmittelrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen in OWL.",
      ],
      courtsNarrative:
        "Amtsgericht Bielefeld und Landgericht Bielefeld bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Hamm.",
      economyNarrative:
        "Lebensmittel, Maschinenbau und Dienstleistung machen Arbeitsrecht zum Kernsuchfeld — daneben Handelsrecht und lebensmittelrechtliche Fragen in der Ernährungswirtschaft.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Lebensmittelhersteller prüft Kennzeichnungspflichten — er sucht „Lebensmittelrecht Bielefeld“.',
      faq: standardCityFaq(
        "Bielefeld",
        {
          amtsgericht: "Amtsgericht Bielefeld",
          landgericht: "Landgericht Bielefeld",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Liegen AG und LG in Bielefeld?",
            a: "Ja — beide Instanzen sind in Bielefeld angesiedelt. Oberinstanz ist das OLG Hamm.",
          },
          {
            q: "Welche Branchen prägen Bielefeld?",
            a: "Lebensmittel, Maschinenbau und Dienstleistung erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Bielefeld und Ostwestfalen — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "bonn",
    name: "Bonn",
    bundesland: NRW,
    kreisOrBezirk: "Köln",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 331000, label: "rund 331.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Bonn",
      landgericht: "Landgericht Bonn",
      oberlandesgericht: "OLG Köln",
    },
    economy: {
      sectors: ["Verwaltung", "Forschung", "Dienstleistung"],
      profile: "Ehemalige Bundeshauptstadt mit Verwaltung, Forschung und UN-Standort",
    },
    primaryLegalArea: "Verwaltungsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Mietrecht"],
    landmarks: ["Beethoven-Haus", "Bundesviertel"],
    mapCoords: coords(7.099, 50.738),
    content: {
      slug: "bonn",
      heroSubtitle:
        "Für Kanzleien am Rhein — wo Verwaltung, Forschung und UN-Standort typische Mandatsfelder nach der Bundeshauptstadt-Ära bilden.",
      introParagraphs: [
        "Bonn ist mit rund 331.000 Einwohnern eine der größten Städte am Rhein — über dem üblichen Einwohner-Zielband. Verwaltung, Forschung und internationale Organisationen prägen den Arbeitsmarkt.",
        "Verwaltungs-, Arbeits- und Mietrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Köln und Mainz.",
      ],
      courtsNarrative:
        "Amtsgericht Bonn und Landgericht Bonn bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Köln — für Mandanten ein wichtiger regionaler Hinweis.",
      economyNarrative:
        "Verwaltung, Forschung und internationale Organisationen machen Verwaltungsrecht zum Kernsuchfeld — daneben Arbeitsrecht in Behörden und Forschungseinrichtungen sowie Mietrecht.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Forscher streitet über Projektfinanzierung — er sucht „Verwaltungsrecht Bonn“.',
      faq: standardCityFaq(
        "Bonn",
        {
          amtsgericht: "Amtsgericht Bonn",
          landgericht: "Landgericht Bonn",
          oberlandesgericht: "OLG Köln",
        },
        [
          {
            q: "Liegen AG und LG in Bonn?",
            a: "Ja — beide Instanzen sind in Bonn angesiedelt. Oberinstanz ist das OLG Köln.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Bonn?",
            a: "Verwaltungsrecht, Arbeitsrecht und Mietrecht stehen im Verwaltungs- und Forschungskontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Bonn und das Rheinland — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "mannheim",
    name: "Mannheim",
    bundesland: BW,
    kreisOrBezirk: "Karlsruhe",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 309000, label: "rund 309.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Mannheim",
      landgericht: "Landgericht Mannheim",
      oberlandesgericht: KARLSRUHE_OLG,
    },
    economy: {
      sectors: ["Chemie", "Logistik", "IT"],
      profile: "Metropolregion Rhein-Neckar mit Chemie, Logistik und IT",
    },
    primaryLegalArea: "Handelsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Gesellschaftsrecht"],
    landmarks: ["Wasserturm", "Schloss"],
    mapCoords: coords(8.466, 49.489),
    content: {
      slug: "mannheim",
      heroSubtitle:
        "Für Kanzleien in der Metropolregion Rhein-Neckar — wo Chemie, Logistik und IT typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Mannheim ist mit rund 309.000 Einwohnern das Zentrum der Metropolregion Rhein-Neckar — über dem üblichen Einwohner-Zielband. Chemie, Logistik und IT prägen den regionalen Arbeitsmarkt.",
        "Handels-, Arbeits- und Gesellschaftsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen in der Rheinebene.",
      ],
      courtsNarrative:
        "Amtsgericht Mannheim und Landgericht Mannheim bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Karlsruhe — für Mandanten ein wichtiger regionaler Hinweis.",
      economyNarrative:
        "Chemie, Logistik und IT machen Handelsrecht zum Kernsuchfeld — daneben Arbeitsrecht in Industriebetrieben und Gesellschaftsrecht bei Unternehmensstrukturen.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Chemiekonzern prüft Lieferkettenvertrag — er sucht „Handelsrecht Mannheim“.',
      faq: standardCityFaq(
        "Mannheim",
        {
          amtsgericht: "Amtsgericht Mannheim",
          landgericht: "Landgericht Mannheim",
          oberlandesgericht: KARLSRUHE_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Mannheim?",
            a: "Ja — beide Instanzen sind in Mannheim angesiedelt. Oberinstanz ist das OLG Karlsruhe.",
          },
          {
            q: "Welche Branchen prägen Mannheim?",
            a: "Chemie, Logistik und IT erzeugen typischerweise Mandate in Handels- und Arbeitsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Mannheim und die Rhein-Neckar-Region — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "karlsruhe",
    name: "Karlsruhe",
    bundesland: BW,
    kreisOrBezirk: "Karlsruhe",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 308000, label: "rund 308.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Karlsruhe",
      landgericht: "Landgericht Karlsruhe",
      oberlandesgericht: KARLSRUHE_OLG,
    },
    economy: {
      sectors: ["IT", "Verwaltung", "Forschung"],
      profile: "Technologie- und Verwaltungsstadt mit IT, Forschung und Bundesgerichten",
    },
    primaryLegalArea: "IT-Recht",
    secondaryLegalAreas: ["Verwaltungsrecht", "Arbeitsrecht"],
    landmarks: ["Schloss", "ZKM"],
    mapCoords: coords(8.404, 49.009),
    content: {
      slug: "karlsruhe",
      heroSubtitle:
        "Für Kanzleien in der Technologiestadt — wo IT, Verwaltung und Forschung typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Karlsruhe ist mit rund 308.000 Einwohnern Sitz des OLG Karlsruhe und ein Zentrum für IT und Verwaltung — über dem üblichen Einwohner-Zielband. Forschung und Bundesgerichte prägen das Mandatsumfeld.",
        "IT-, Verwaltungs- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen in der Oberrheinregion.",
      ],
      courtsNarrative:
        "Amtsgericht Karlsruhe, Landgericht Karlsruhe und OLG Karlsruhe bilden einen klar benennbaren Instanzenweg in derselben Stadt — für Mandanten ein seltener Vorteil.",
      economyNarrative:
        "IT, Verwaltung und Forschung machen IT-Recht zum Kernsuchfeld — daneben Verwaltungsrecht im Behördenumfeld und Arbeitsrecht in Tech-Betrieben.",
      localCaseExample:
        'Stellen Sie sich vor: Ein IT-Dienstleister prüft DSGVO-Konformität — er sucht „IT-Recht Karlsruhe“.',
      faq: standardCityFaq(
        "Karlsruhe",
        {
          amtsgericht: "Amtsgericht Karlsruhe",
          landgericht: "Landgericht Karlsruhe",
          oberlandesgericht: KARLSRUHE_OLG,
        },
        [
          {
            q: "Liegen AG, LG und OLG für Karlsruhe in derselben Stadt?",
            a: "Ja — alle drei Instanzen sind in Karlsruhe angesiedelt und für Mandanten gut benennbar.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Karlsruhe?",
            a: "IT-Recht, Verwaltungsrecht und Arbeitsrecht stehen im Tech- und Verwaltungskontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Karlsruhe und die Oberrheinregion — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "augsburg",
    name: "Augsburg",
    bundesland: BY,
    kreisOrBezirk: "Schwaben",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 301000, label: "rund 301.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Augsburg",
      landgericht: "Landgericht Augsburg",
      oberlandesgericht: "OLG München",
    },
    economy: {
      sectors: ["Maschinenbau", "Luftfahrt", "Dienstleistung"],
      profile: "Schwäbisches Zentrum mit Maschinenbau, Luftfahrt und Dienstleistungen",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Insolvenzrecht"],
    landmarks: ["Rathaus", "Fuggerei"],
    mapCoords: coords(10.898, 48.37),
    content: {
      slug: "augsburg",
      heroSubtitle:
        "Für Kanzleien in Schwaben — wo Maschinenbau, Luftfahrt und Dienstleistung typische Mandatsfelder bilden.",
      introParagraphs: [
        "Augsburg ist mit rund 301.000 Einwohnern das zweite Zentrum in Schwaben — über dem üblichen Einwohner-Zielband. Maschinenbau, Luftfahrt und Dienstleistungen prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Handels- und Insolvenzrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen München und Ulm.",
      ],
      courtsNarrative:
        "Amtsgericht Augsburg und Landgericht Augsburg bilden den lokalen Instanzenweg. Oberinstanz ist das OLG München — für Mandanten ein wichtiger regionaler Hinweis.",
      economyNarrative:
        "Maschinenbau, Luftfahrt und Dienstleistung machen Arbeitsrecht zum Kernsuchfeld — daneben Handelsrecht in mittelständischen Betrieben.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Maschinenbauer prüft Lieferverzug — er sucht „Handelsrecht Augsburg“.',
      faq: standardCityFaq(
        "Augsburg",
        {
          amtsgericht: "Amtsgericht Augsburg",
          landgericht: "Landgericht Augsburg",
          oberlandesgericht: "OLG München",
        },
        [
          {
            q: "Liegen AG und LG in Augsburg?",
            a: "Ja — beide Instanzen sind in Augsburg angesiedelt. Oberinstanz ist das OLG München.",
          },
          {
            q: "Welche Branchen prägen Augsburg?",
            a: "Maschinenbau, Luftfahrt und Dienstleistung erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Augsburg und Schwaben — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "wiesbaden",
    name: "Wiesbaden",
    bundesland: HE,
    kreisOrBezirk: "Wiesbaden",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 290000, label: "rund 290.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Wiesbaden",
      landgericht: "Landgericht Wiesbaden",
      oberlandesgericht: HESSEN_OLG,
    },
    economy: {
      sectors: ["Verwaltung", "Finanzdienstleister", "Kur/Tourismus"],
      profile: "Hessische Landeshauptstadt mit Verwaltung, Finanzdienstleistern und Kurstadt-Tradition",
    },
    primaryLegalArea: "Erbrecht",
    secondaryLegalAreas: ["Verwaltungsrecht", "Arbeitsrecht"],
    landmarks: ["Kurhaus", "Neroberg"],
    mapCoords: coords(8.239, 50.078),
    content: {
      slug: "wiesbaden",
      heroSubtitle:
        "Für Kanzleien in der Landeshauptstadt — wo Verwaltung, Finanzdienstleister und Kurstadt-Tradition typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Wiesbaden ist Landeshauptstadt Hessens und mit rund 290.000 Einwohnern über dem üblichen Einwohner-Zielband. Verwaltung, Finanzdienstleister und Kurstadt-Tradition prägen das Mandatsumfeld.",
        "Erb-, Verwaltungs- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen im Rhein-Main-Gebiet.",
      ],
      courtsNarrative:
        "Amtsgericht Wiesbaden und Landgericht Wiesbaden bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Frankfurt am Main — für Mandanten ein wichtiger regionaler Hinweis.",
      economyNarrative:
        "Verwaltung, Finanzdienstleister und vermögende Wohnbevölkerung machen Erbrecht zum Kernsuchfeld — daneben Verwaltungsrecht und Arbeitsrecht.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Eigentümer prüft Schenkung an Kinder — er sucht „Erbrecht Wiesbaden“.',
      faq: standardCityFaq(
        "Wiesbaden",
        {
          amtsgericht: "Amtsgericht Wiesbaden",
          landgericht: "Landgericht Wiesbaden",
          oberlandesgericht: HESSEN_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Wiesbaden?",
            a: "Ja — beide Instanzen sind in Wiesbaden angesiedelt. Oberinstanz ist das OLG Frankfurt am Main.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Wiesbaden?",
            a: "Erbrecht, Verwaltungsrecht und Arbeitsrecht stehen im Landeshauptstadt-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Wiesbaden und das Rhein-Main-Gebiet — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "moenchengladbach",
    name: "Mönchengladbach",
    bundesland: NRW,
    kreisOrBezirk: "Düsseldorf",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 271000, label: "rund 271.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Mönchengladbach",
      landgericht: "Landgericht Mönchengladbach",
      oberlandesgericht: "OLG Düsseldorf",
    },
    economy: {
      sectors: ["Textil", "Maschinenbau", "Handel"],
      profile: "Niederrheinische Stadt mit Textiltradition, Maschinenbau und Handel",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Insolvenzrecht"],
    landmarks: ["Alter Markt", "Borussia-Park"],
    mapCoords: coords(6.443, 51.181),
    content: {
      slug: "moenchengladbach",
      heroSubtitle:
        "Für Kanzleien am Niederrhein — wo Textiltradition, Maschinenbau und Handel typische Mandatsfelder bilden.",
      introParagraphs: [
        "Mönchengladbach ist mit rund 271.000 Einwohnern ein Zentrum am Niederrhein — über dem üblichen Einwohner-Zielband. Textiltradition, Maschinenbau und Handel prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Handels- und Insolvenzrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Düsseldorf und Köln.",
      ],
      courtsNarrative:
        "Amtsgericht Mönchengladbach und Landgericht Mönchengladbach bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Düsseldorf.",
      economyNarrative:
        "Textil, Maschinenbau und Handel machen Arbeitsrecht zum Kernsuchfeld — daneben Handelsrecht und Insolvenzrecht im Strukturwandel.",
      localCaseExample:
        'Stellen Sie sich vor: Nach Insolvenzantrag sucht ein Zulieferer „Insolvenzrecht Mönchengladbach“.',
      faq: standardCityFaq(
        "Mönchengladbach",
        {
          amtsgericht: "Amtsgericht Mönchengladbach",
          landgericht: "Landgericht Mönchengladbach",
          oberlandesgericht: "OLG Düsseldorf",
        },
        [
          {
            q: "Liegen AG und LG in Mönchengladbach?",
            a: "Ja — beide Instanzen sind in Mönchengladbach angesiedelt. Oberinstanz ist das OLG Düsseldorf.",
          },
          {
            q: "Welche Branchen prägen Mönchengladbach?",
            a: "Textil, Maschinenbau und Handel erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Mönchengladbach und den Niederrhein — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "braunschweig",
    name: "Braunschweig",
    bundesland: NI,
    kreisOrBezirk: "Braunschweig",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 248000, label: "rund 248.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Braunschweig",
      landgericht: "Landgericht Braunschweig",
      oberlandesgericht: BRAUNSCHWEIG_OLG,
    },
    economy: {
      sectors: ["Automotive", "Forschung", "Verwaltung"],
      profile: "Wissenschafts- und Industriestadt mit Automotive, Forschung und Verwaltung",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Verwaltungsrecht"],
    landmarks: ["Burg Dankwarderode", "Dom"],
    mapCoords: coords(10.526, 52.269),
    content: {
      slug: "braunschweig",
      heroSubtitle:
        "Für Kanzleien in der Wissenschaftsstadt — wo Automotive, Forschung und Verwaltung typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Braunschweig ist mit rund 248.000 Einwohnern ein Zentrum für Forschung und Industrie in Niedersachsen — über dem üblichen Einwohner-Zielband. Automotive, Forschung und Verwaltung prägen den Arbeitsmarkt.",
        "Arbeits-, Handels- und Verwaltungsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Hannover und Wolfsburg.",
      ],
      courtsNarrative:
        "Amtsgericht Braunschweig, Landgericht Braunschweig und OLG Braunschweig bilden einen klar benennbaren Instanzenweg — das OLG hat seinen Sitz in Braunschweig.",
      economyNarrative:
        "Automotive, Forschung und Verwaltung machen Arbeitsrecht zum Kernsuchfeld — daneben Handelsrecht in Industriebetrieben und Verwaltungsrecht.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Ingenieur prüft Kündigung nach Restrukturierung — er sucht „Arbeitsrecht Braunschweig“.',
      faq: standardCityFaq(
        "Braunschweig",
        {
          amtsgericht: "Amtsgericht Braunschweig",
          landgericht: "Landgericht Braunschweig",
          oberlandesgericht: BRAUNSCHWEIG_OLG,
        },
        [
          {
            q: "Liegen AG, LG und OLG für Braunschweig in derselben Stadt?",
            a: "Ja — alle drei Instanzen sind in Braunschweig angesiedelt und für Mandanten gut benennbar.",
          },
          {
            q: "Welche Branchen prägen Braunschweig?",
            a: "Automotive, Forschung und Verwaltung erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Braunschweig und die Region — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "kiel",
    name: "Kiel",
    bundesland: SH,
    kreisOrBezirk: "Kiel",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 246000, label: "rund 246.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Kiel",
      landgericht: "Landgericht Kiel",
      oberlandesgericht: SH_OLG,
    },
    economy: {
      sectors: ["Marine/Schiffbau", "Hafen", "Verwaltung"],
      profile: "Landeshauptstadt Schleswig-Holsteins mit Marine, Hafen und Verwaltung",
    },
    primaryLegalArea: "See- und Schifffahrtsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Verwaltungsrecht"],
    landmarks: ["Kiellinie", "Hörnbrücke"],
    mapCoords: coords(10.123, 54.323),
    content: {
      slug: "kiel",
      heroSubtitle:
        "Für Kanzleien an der Förde — wo Marine, Hafen und Verwaltung typische Mandatsfelder in der Landeshauptstadt bilden.",
      introParagraphs: [
        "Kiel ist Landeshauptstadt Schleswig-Holsteins und mit rund 246.000 Einwohnern über dem üblichen Einwohner-Zielband. Marine, Hafen und Verwaltung prägen den regionalen Arbeitsmarkt.",
        "See- und Schifffahrtsrecht, Arbeits- und Verwaltungsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen an der Ostsee.",
      ],
      courtsNarrative:
        "Amtsgericht Kiel und Landgericht Kiel bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Schleswig — für Mandanten ein wichtiger regionaler Hinweis.",
      economyNarrative:
        "Marine, Hafen und Verwaltung machen See- und Schifffahrtsrecht zum Kernsuchfeld — daneben Arbeitsrecht in Werften und Verwaltungsrecht.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Reederei-Inhaber prüft Chartervertrag — er sucht „Schifffahrtsrecht Kiel“.',
      faq: standardCityFaq(
        "Kiel",
        {
          amtsgericht: "Amtsgericht Kiel",
          landgericht: "Landgericht Kiel",
          oberlandesgericht: SH_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Kiel?",
            a: "Ja — beide Instanzen sind in Kiel angesiedelt. Oberinstanz ist das OLG Schleswig.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Kiel?",
            a: "See- und Schifffahrtsrecht, Arbeitsrecht und Verwaltungsrecht stehen im Hafen- und Marinekontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Kiel und Schleswig-Holstein — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "chemnitz",
    name: "Chemnitz",
    bundesland: SN,
    kreisOrBezirk: "Chemnitz",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 243000, label: "rund 243.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Chemnitz",
      landgericht: "Landgericht Chemnitz",
      oberlandesgericht: SACHSEN_OLG,
    },
    economy: {
      sectors: ["Automotive", "Maschinenbau", "IT"],
      profile: "Industriestadt im Erzgebirgsvorland mit Automotive, Maschinenbau und IT",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Insolvenzrecht"],
    landmarks: ["Rathaus", "Kaßberg"],
    mapCoords: coords(12.925, 50.832),
    content: {
      slug: "chemnitz",
      heroSubtitle:
        "Für Kanzleien im Erzgebirgsvorland — wo Automotive, Maschinenbau und IT typische Mandatsfelder nach dem Strukturwandel bilden.",
      introParagraphs: [
        "Chemnitz ist mit rund 243.000 Einwohnern das dritte sächsische Zentrum — über dem üblichen Einwohner-Zielband. Automotive, Maschinenbau und IT prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Handels- und Insolvenzrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen zwischen Leipzig und Zwickau.",
      ],
      courtsNarrative:
        "Amtsgericht Chemnitz und Landgericht Chemnitz bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Dresden.",
      economyNarrative:
        "Automotive, Maschinenbau und IT machen Arbeitsrecht zum Kernsuchfeld — daneben Handelsrecht und Insolvenzrecht im Strukturwandel.",
      localCaseExample:
        'Stellen Sie sich vor: Nach Werksschließung sucht ein Mitarbeiter „Arbeitsrecht Chemnitz“.',
      faq: standardCityFaq(
        "Chemnitz",
        {
          amtsgericht: "Amtsgericht Chemnitz",
          landgericht: "Landgericht Chemnitz",
          oberlandesgericht: SACHSEN_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Chemnitz?",
            a: "Ja — beide Instanzen sind in Chemnitz angesiedelt. Oberinstanz ist das OLG Dresden.",
          },
          {
            q: "Welche Branchen prägen Chemnitz?",
            a: "Automotive, Maschinenbau und IT erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Chemnitz und Sachsen — ohne erfundene Referenzen.",
    },
  }),
  city({
    slug: "freiburg",
    name: "Freiburg",
    bundesland: BW,
    kreisOrBezirk: "Freiburg",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 234000, label: "rund 234.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Freiburg",
      landgericht: "Landgericht Freiburg",
      oberlandesgericht: KARLSRUHE_OLG,
    },
    economy: {
      sectors: ["Universität", "Solar/Umwelt", "Tourismus"],
      profile: "Universitätsstadt am Breisgau mit Solar, Umwelttechnik und Tourismus",
    },
    primaryLegalArea: "Mietrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Umweltrecht"],
    landmarks: ["Münster", "Schlossberg"],
    mapCoords: coords(7.853, 47.998),
    content: {
      slug: "freiburg",
      heroSubtitle:
        "Für Kanzleien am Breisgau — wo Universität, Solar und Tourismus typische Mandatsfelder in der Schwarzwaldtor-Stadt bilden.",
      introParagraphs: [
        "Freiburg im Breisgau ist mit rund 234.000 Einwohnern eine der wichtigsten Universitätsstädte Baden-Württembergs — über dem üblichen Einwohner-Zielband. Solar, Umwelttechnik und Tourismus prägen den Arbeitsmarkt.",
        "Miet-, Arbeits- und Umweltrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen im Südwesten.",
      ],
      courtsNarrative:
        "Amtsgericht Freiburg und Landgericht Freiburg bilden den lokalen Instanzenweg. Oberinstanz ist das OLG Karlsruhe — für Mandanten ein wichtiger regionaler Hinweis.",
      economyNarrative:
        "Universität, Solar und Tourismus machen Mietrecht zum Kernsuchfeld — daneben Arbeitsrecht in Umweltbetrieben und Umweltrecht in der Green-Tech-Branche.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Student streitet über Kautionsrückzahlung — er sucht „Mietrecht Freiburg“.',
      faq: standardCityFaq(
        "Freiburg",
        {
          amtsgericht: "Amtsgericht Freiburg",
          landgericht: "Landgericht Freiburg",
          oberlandesgericht: KARLSRUHE_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Freiburg?",
            a: "Ja — beide Instanzen sind in Freiburg angesiedelt. Oberinstanz ist das OLG Karlsruhe.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Freiburg?",
            a: "Mietrecht, Arbeitsrecht und Umweltrecht stehen im Universitäts- und Green-Tech-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Freiburg und der Breisgau — ohne erfundene Referenzen.",
    },
  }),
];
