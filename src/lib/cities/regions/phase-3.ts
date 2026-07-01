import { lonLatToMapCoords } from "../germanyMap";
import { getPhase3NearbySlugs } from "../phase-3-plan";
import type { CityFacts, CityRecord } from "../types";
import { BW } from "./baden-wuerttemberg-shared";
import { BY } from "./bayern-shared";
import { HE, HESSEN_OLG } from "./hessen-shared";
import { NRW } from "./nrw-shared";
import { standardCityFaq } from "./phase-2-shared";
import { SACHSEN_OLG, SN } from "./sachsen-shared";
import { phase3Batch2Cities } from "./phase-3-batch2";

type CityDef = CityFacts & {
  content: CityRecord["content"];
};

function coords(lon: number, lat: number) {
  return { ...lonLatToMapCoords(lon, lat), anchor: "start" as const };
}

const cities: CityDef[] = [
  {
    slug: "muenchen",
    name: "München",
    bundesland: BY,
    kreisOrBezirk: "Oberbayern",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 1578000, label: "rund 1,58 Mio.", year: 2024 },
    courts: {
      amtsgericht: "Amtsgerichte München (bezirksweise)",
      landgericht: "Landgericht München I",
      oberlandesgericht: "OLG München",
      besonderheiten: [
        "In München sind Amtsgerichte nach Stadtbezirken organisiert — die örtliche Zuständigkeit richtet sich nach Wohn- oder Geschäftssitz",
      ],
    },
    economy: {
      sectors: ["Automotive", "Versicherungen", "Tech"],
      profile:
        "Bayerische Landeshauptstadt mit Automotive, Versicherungen und wachsendem Tech-Sektor",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Mietrecht", "Handelsrecht"],
    landmarks: ["Marienplatz", "Englischer Garten"],
    mapCoords: coords(11.582, 48.135),
    nearbySlugs: getPhase3NearbySlugs("muenchen"),
    rolloutPhase: 3,
    status: "live",
    content: {
      slug: "muenchen",
      heroSubtitle:
        "Für Kanzleien in der Landeshauptstadt — wo Automotive, Versicherungen und Tech typische Mandatsfelder verbinden.",
      introParagraphs: [
        "München ist mit rund 1,58 Millionen Einwohnern deutlich über dem üblichen Einwohner-Zielband — eine bewusste Ausnahme für die größte bayerische Metropole. Automotive, Versicherungen und Tech prägen den Arbeits- und Wohnungsmarkt.",
        "Arbeits-, Miet- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten, Bezirkszuständigkeit und typischen Suchthemen in Oberbayern.",
      ],
      courtsNarrative:
        "In München sind Amtsgerichte bezirksweise organisiert — die Zuständigkeit hängt vom Wohn- oder Geschäftssitz ab. Landgericht München I und OLG München bilden den überregionalen Instanzenweg. Eine Kanzlei-Website kann diese Struktur verständlich erklären, ohne juristische Vorab-Beratung zu ersetzen.",
      economyNarrative:
        "Automotive, Versicherungen und Tech machen Arbeitsrecht zum Kernsuchfeld — daneben Mietrecht im angespannten Wohnungsmarkt und Handelsrecht in wachsenden Betrieben.",
      localCaseExample:
        'Stellen Sie sich vor: Ein IT-Mitarbeiter prüft nach Restrukturierung seinen Aufhebungsvertrag — er sucht „Arbeitsrecht München AG“.',
      faq: standardCityFaq(
        "München",
        {
          amtsgericht: "Amtsgerichte München (bezirksweise)",
          landgericht: "Landgericht München I",
          oberlandesgericht: "OLG München",
        },
        [
          {
            q: "Welches Amtsgericht ist in München zuständig?",
            a: "In München sind mehrere Amtsgerichte nach Stadtbezirken aufgeteilt. Die örtliche Zuständigkeit richtet sich nach Wohn- oder Geschäftssitz — eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu München?",
            a: "Arbeitsrecht, Mietrecht und Handelsrecht stehen im Kontext von Automotive, Versicherungen und Tech oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert München und die Landeshauptstadtregion — Gerichte, Wirtschaft, typisches Suchverhalten — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "koeln",
    name: "Köln",
    bundesland: NRW,
    kreisOrBezirk: "Köln",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 1087000, label: "rund 1,09 Mio.", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Köln",
      landgericht: "Landgericht Köln",
      oberlandesgericht: "OLG Köln",
    },
    economy: {
      sectors: ["Medien", "Versicherungen", "Handel"],
      profile:
        "Rheinmetropole mit Medienwirtschaft, Versicherungen und starkem Einzelhandel",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Medienrecht", "Handelsrecht"],
    landmarks: ["Kölner Dom", "Rheinpromenade"],
    mapCoords: coords(6.96, 50.937),
    nearbySlugs: getPhase3NearbySlugs("koeln"),
    rolloutPhase: 3,
    status: "live",
    content: {
      slug: "koeln",
      heroSubtitle:
        "Für Kanzleien am Rhein — wo Medien, Versicherungen und Handel typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Köln ist mit rund 1,09 Millionen Einwohnern die größte Stadt in Nordrhein-Westfalen ohne bisherige Verdex-Seite — bewusst über dem üblichen Einwohner-Zielband. Medien, Versicherungen und Handel prägen den regionalen Arbeitsmarkt.",
        "Arbeits-, Medien- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen im Rheinland.",
      ],
      courtsNarrative:
        "Amtsgericht Köln, Landgericht Köln und OLG Köln bilden einen klar benennbaren Instanzenweg in derselben Metropole. Für Mandanten ist das ein seltener Vorteil — eine verständliche Darstellung auf der Website schafft Vertrauen.",
      economyNarrative:
        "Medien, Versicherungen und Handel machen Arbeitsrecht zum Kernsuchfeld — daneben medienrechtliche Fragen in Redaktionen und Agenturen sowie Handelsrecht im Einzelhandel.",
      localCaseExample:
        'Stellen Sie sich vor: Eine Redaktion prüft Nutzungsrechte an Bildmaterial — der Verantwortliche sucht „Medienrecht Köln“.',
      faq: standardCityFaq(
        "Köln",
        {
          amtsgericht: "Amtsgericht Köln",
          landgericht: "Landgericht Köln",
          oberlandesgericht: "OLG Köln",
        },
        [
          {
            q: "Liegen AG, LG und OLG für Köln in derselben Stadt?",
            a: "Ja — Amtsgericht, Landgericht und Oberlandesgericht Köln sind in der Metropole angesiedelt und für Mandanten gut benennbar.",
          },
          {
            q: "Welche Branchen prägen Köln?",
            a: "Medien, Versicherungen und Handel erzeugen typischerweise Mandate in Arbeits-, Medien- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Köln und das Rheinland — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "frankfurt-am-main",
    name: "Frankfurt am Main",
    bundesland: HE,
    kreisOrBezirk: "Frankfurt am Main",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 759000, label: "rund 759.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Frankfurt am Main",
      landgericht: "Landgericht Frankfurt am Main",
      oberlandesgericht: HESSEN_OLG,
    },
    economy: {
      sectors: ["Finanzwirtschaft", "Banken", "Messe/Logistik"],
      profile:
        "Finanzmetropole mit Banken, Börsenumschlag und internationalem Flughafen",
    },
    primaryLegalArea: "Gesellschaftsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Mietrecht"],
    landmarks: ["Römer", "Bankenviertel"],
    mapCoords: coords(8.682, 50.11),
    nearbySlugs: getPhase3NearbySlugs("frankfurt-am-main"),
    rolloutPhase: 3,
    status: "live",
    content: {
      slug: "frankfurt-am-main",
      heroSubtitle:
        "Für Kanzleien im Finanzzentrum — wo Banken, Gesellschaftsrecht und internationaler Arbeitsmarkt typische Mandatsfelder bilden.",
      introParagraphs: [
        "Frankfurt am Main ist Finanzmetropole und mit rund 759.000 Einwohnern deutlich über dem üblichen Einwohner-Zielband. Banken, Börsenumschlag und Messe prägen den Wirtschaftsstandort — dazu kommt ein international geprägter Arbeitsmarkt.",
        "Gesellschafts-, Arbeits- und Mietrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen im Rhein-Main-Gebiet.",
      ],
      courtsNarrative:
        "Amtsgericht Frankfurt am Main, Landgericht Frankfurt am Main und OLG Frankfurt am Main bilden einen klar benennbaren Instanzenweg. Für Mandanten aus dem Finanz- und Dienstleistungssektor ist die lokale Gerichtsstruktur oft ein wichtiges Orientierungskriterium.",
      economyNarrative:
        "Finanzwirtschaft und internationale Konzerne machen Gesellschaftsrecht zum Kernsuchfeld — daneben Arbeitsrecht in Banken und Dienstleistern sowie Mietrecht im angespannten Wohnungsmarkt.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Geschäftsführer prüft Gesellschafterbeschlüsse vor einer Kapitalmaßnahme — er sucht „Gesellschaftsrecht Frankfurt“.',
      faq: standardCityFaq(
        "Frankfurt am Main",
        {
          amtsgericht: "Amtsgericht Frankfurt am Main",
          landgericht: "Landgericht Frankfurt am Main",
          oberlandesgericht: HESSEN_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Frankfurt am Main?",
            a: "Ja — beide Instanzen sind in Frankfurt angesiedelt. Oberinstanz ist das OLG Frankfurt am Main.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Frankfurt?",
            a: "Gesellschaftsrecht, Arbeitsrecht und Mietrecht stehen im Finanz- und Rhein-Main-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Frankfurt am Main und das Rhein-Main-Gebiet — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "stuttgart",
    name: "Stuttgart",
    bundesland: BW,
    kreisOrBezirk: "Stuttgart",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 635000, label: "rund 635.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Stuttgart",
      landgericht: "Landgericht Stuttgart",
      oberlandesgericht: "OLG Stuttgart",
    },
    economy: {
      sectors: ["Automotive", "Maschinenbau", "Mittelstand"],
      profile:
        "Landeshauptstadt Baden-Württembergs mit Automotive, Maschinenbau und starkem Mittelstand",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Gewerblicher Rechtsschutz"],
    landmarks: ["Fernsehturm", "Schlossplatz"],
    mapCoords: coords(9.182, 48.776),
    nearbySlugs: getPhase3NearbySlugs("stuttgart"),
    rolloutPhase: 3,
    status: "live",
    content: {
      slug: "stuttgart",
      heroSubtitle:
        "Für Kanzleien in der Landeshauptstadt — wo Automotive, Maschinenbau und Mittelstand typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Stuttgart ist Landeshauptstadt Baden-Württembergs und mit rund 635.000 Einwohnern über dem üblichen Einwohner-Zielband. Automotive, Maschinenbau und Mittelstand prägen den regionalen Arbeitsmarkt — der Speckgürtel erweitert das Mandatsfeld.",
        "Arbeits-, Handelsrecht und gewerblicher Rechtsschutz sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen in der Region Stuttgart.",
      ],
      courtsNarrative:
        "Amtsgericht Stuttgart, Landgericht Stuttgart und OLG Stuttgart bilden einen klar stuttgarter Instanzenweg. Für Mandanten aus Stadt und Speckgürtel ist das ein wichtiger Orientierungspunkt — besonders wenn das Amtsgericht in einer Nachbarstadt liegt.",
      economyNarrative:
        "Automotive und Maschinenbau machen Arbeitsrecht zum Kernsuchfeld — daneben Handelsrecht in mittelständischen Betrieben und gewerblicher Rechtsschutz in innovationsgetriebenen Branchen.",
      localCaseExample:
        'Stellen Sie sich vor: Nach Betriebsratswahl sucht ein Teamleiter „Arbeitsrecht Stuttgart“ — und vergleicht mehrere Kanzlei-Websites.',
      faq: standardCityFaq(
        "Stuttgart",
        {
          amtsgericht: "Amtsgericht Stuttgart",
          landgericht: "Landgericht Stuttgart",
          oberlandesgericht: "OLG Stuttgart",
        },
        [
          {
            q: "Liegen AG und LG in Stuttgart?",
            a: "Ja — beide Instanzen sind in Stuttgart angesiedelt. Oberinstanz ist das OLG Stuttgart.",
          },
          {
            q: "Welche Branchen prägen Stuttgart?",
            a: "Automotive, Maschinenbau und Mittelstand erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Stuttgart und die Region — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "leipzig",
    name: "Leipzig",
    bundesland: SN,
    kreisOrBezirk: "Leipzig",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 601000, label: "rund 601.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Leipzig",
      landgericht: "Landgericht Leipzig",
      oberlandesgericht: SACHSEN_OLG,
    },
    economy: {
      sectors: ["Logistik", "Messe", "Kulturwirtschaft"],
      profile:
        "Sächsische Metropole mit Logistik, Messe und wachsender Kultur- und Dienstleistungswirtschaft",
    },
    primaryLegalArea: "Mietrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Handelsrecht"],
    landmarks: ["Thomaskirche", "Augustusplatz"],
    mapCoords: coords(12.373, 51.34),
    nearbySlugs: getPhase3NearbySlugs("leipzig"),
    rolloutPhase: 3,
    status: "live",
    content: {
      slug: "leipzig",
      heroSubtitle:
        "Für Kanzleien in der sächsischen Metropole — wo Logistik, Messe und wachsender Wohnungsmarkt typische Mandatsfelder bilden.",
      introParagraphs: [
        "Leipzig ist mit rund 601.000 Einwohnern die größte sächsische Stadt — bewusst über dem üblichen Einwohner-Zielband. Logistik, Messe und Kulturwirtschaft prägen den Arbeitsmarkt, der Wohnungsmarkt wächst dynamisch.",
        "Miet-, Arbeits- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und typischen Suchthemen in Mitteldeutschland.",
      ],
      courtsNarrative:
        "Amtsgericht Leipzig und Landgericht Leipzig bilden den regionalen Instanzenweg in der Metropole. Oberinstanz ist das OLG Dresden — für Mandanten ein wichtiger Hinweis, der auf einer Kanzlei-Website verständlich erklärt werden sollte.",
      economyNarrative:
        "Logistik, Messe und wachsender Wohnungsmarkt machen Mietrecht zum Kernsuchfeld — daneben Arbeitsrecht in expandierenden Betrieben und Handelsrecht im Dienstleistungssektor.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Mieter in einer sanierten Gründerzeitwohnung prüft Mietpreisbremse — er sucht „Mietrecht Leipzig“.',
      faq: standardCityFaq(
        "Leipzig",
        {
          amtsgericht: "Amtsgericht Leipzig",
          landgericht: "Landgericht Leipzig",
          oberlandesgericht: SACHSEN_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Leipzig?",
            a: "Ja — beide Instanzen sind in Leipzig angesiedelt. Oberinstanz ist das OLG Dresden.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Leipzig?",
            a: "Mietrecht, Arbeitsrecht und Handelsrecht stehen im Kontext von Wachstum, Logistik und Messewirtschaft oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Leipzig und Mitteldeutschland — ohne erfundene Referenzen.",
    },
  },
  ...phase3Batch2Cities,
];

export const phase3Facts: CityFacts[] = cities.map((city) => {
  const { content, ...facts } = city;
  void content;
  return facts;
});

export const phase3Content: Record<string, CityRecord["content"]> =
  Object.fromEntries(cities.map((c) => [c.slug, c.content]));

export const phase3Records: CityRecord[] = cities.map(
  ({ content, ...facts }) => ({ ...facts, content }),
);
