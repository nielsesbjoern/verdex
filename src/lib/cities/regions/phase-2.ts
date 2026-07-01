import { lonLatToMapCoords } from "../germanyMap";
import type { CityFacts, CityRecord } from "../types";
import { getPhase2NearbySlugs } from "../phase-2-plan";
import { BW } from "./baden-wuerttemberg-shared";
import { BY } from "./bayern-shared";
import { BB, BRANDENBURG_OLG } from "./brandenburg-shared";
import { HE, HESSEN_OLG } from "./hessen-shared";
import {
  MV,
  MV_MAHNGERICHT,
  MV_OLG,
} from "./mecklenburg-vorpommern-shared";
import { NI } from "./niedersachsen-shared";
import { NRW } from "./nrw-shared";
import {
  BE,
  BERLIN_OLG,
  BREMEN_OLG,
  HAMBURG_OLG,
  HB,
  HH,
  standardCityFaq,
} from "./phase-2-shared";
import { OLG_KOBLENZ, RLP } from "./rheinland-pfalz-shared";
import { SAARLAND_LG, SAARLAND_OLG, SL } from "./saarland-shared";
import { ST, ST_OLG } from "./sachsen-anhalt-shared";
import { SH, SH_OLG } from "./schleswig-holstein-shared";
import { TH, TH_OLG } from "./thueringen-shared";

type CityDef = CityFacts & {
  content: CityRecord["content"];
};

function coords(lon: number, lat: number) {
  return { ...lonLatToMapCoords(lon, lat), anchor: "start" as const };
}

const cities: CityDef[] = [
  {
    slug: "berlin",
    name: "Berlin",
    bundesland: BE,
    kreisOrBezirk: "Berlin",
    stadtTyp: "Stadtstaat",
    population: { approx: 3700000, label: "rund 3,7 Mio.", year: 2024 },
    courts: {
      amtsgericht: "Amtsgerichte Berlin (bezirksweise)",
      landgericht: "Landgericht Berlin",
      oberlandesgericht: BERLIN_OLG,
      besonderheiten: [
        "In Berlin sind Amtsgerichte nach Bezirken organisiert (z. B. Mitte, Charlottenburg, Tempelhof-Kreuzberg) — die örtliche Zuständigkeit richtet sich nach Wohn- oder Geschäftssitz",
      ],
    },
    economy: {
      sectors: ["Verwaltung", "Kreativwirtschaft", "Tech"],
      profile: "Hauptstadt mit Verwaltung, Kreativwirtschaft und wachsendem Tech-Sektor",
    },
    primaryLegalArea: "Mietrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Verwaltungsrecht"],
    landmarks: ["Reichstag", "Brandenburger Tor"],
    mapCoords: coords(13.405, 52.52),
    nearbySlugs: getPhase2NearbySlugs("berlin"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "berlin",
      heroSubtitle:
        "Für Kanzleien in der Hauptstadt — wo Verwaltung, Kreativwirtschaft und Tech typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Berlin ist Stadtstaat und mit rund 3,7 Millionen Einwohnern deutlich über dem üblichen Einwohner-Zielband — eine bewusste Ausnahme für die vollständige Bundesland-Abdeckung. Verwaltung, Kreativwirtschaft und Tech prägen den Arbeits- und Wohnungsmarkt — Reichstag und Brandenburger Tor sind die sichtbaren Wahrzeichen.",
        "Miet-, Arbeits- und Verwaltungsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten, Bezirkszuständigkeit und typischen Suchthemen in der Hauptstadt.",
      ],
      courtsNarrative:
        "In Berlin sind Amtsgerichte bezirksweise organisiert — die Zuständigkeit hängt vom Wohn- oder Geschäftssitz ab. Landgericht Berlin und Kammergericht Berlin (OLG) bilden den überregionalen Instanzenweg. Eine Kanzlei-Website kann diese Struktur verständlich erklären, ohne juristische Vorab-Beratung zu ersetzen.",
      economyNarrative:
        "Verwaltung, Kreativwirtschaft und Tech machen Mietrecht zum Kernsuchfeld — daneben Arbeitsrecht in wachsenden Betrieben und Verwaltungsrecht im Behördenumfeld.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Mieter in Kreuzberg streitet über Mietpreisbremse — er sucht „Mietrecht Berlin Neukölln AG“.',
      faq: standardCityFaq(
        "Berlin",
        {
          amtsgericht: "Amtsgerichte Berlin (bezirksweise)",
          landgericht: "Landgericht Berlin",
          oberlandesgericht: BERLIN_OLG,
        },
        [
          {
            q: "Welches Amtsgericht ist in Berlin zuständig?",
            a: "In Berlin sind mehrere Amtsgerichte nach Bezirken aufgeteilt. Die örtliche Zuständigkeit richtet sich nach Wohn- oder Geschäftssitz — eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Berlin?",
            a: "Mietrecht, Arbeitsrecht und Verwaltungsrecht stehen im Hauptstadt-Kontext mit angespanntem Wohnungsmarkt, Kreativwirtschaft und Behörden oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Berlin und die Hauptstadtregion — Gerichte, Wirtschaft, typisches Suchverhalten — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    bundesland: HH,
    kreisOrBezirk: "Hamburg",
    stadtTyp: "Stadtstaat",
    population: { approx: 1900000, label: "rund 1,9 Mio.", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Hamburg",
      landgericht: "Landgericht Hamburg",
      oberlandesgericht: HAMBURG_OLG,
    },
    economy: {
      sectors: ["Hafen/Logistik", "Medien"],
      profile: "Hansestadt mit Hafen, Logistik und Medienwirtschaft",
    },
    primaryLegalArea: "Handelsrecht",
    secondaryLegalAreas: ["Transportrecht", "Arbeitsrecht"],
    landmarks: ["Elbphilharmonie", "Speicherstadt"],
    mapCoords: coords(9.993, 53.551),
    nearbySlugs: getPhase2NearbySlugs("hamburg"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "hamburg",
      heroSubtitle:
        "Für Kanzleien an Elbe und Hafen — wo Logistik, Medien und Handel typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Hamburg ist Stadtstaat und mit rund 1,9 Millionen Einwohnern über dem üblichen Einwohner-Zielband — eine bewusste Ausnahme für die vollständige Bundesland-Abdeckung. Hafen, Logistik und Medienwirtschaft prägen die Wirtschaft — Elbphilharmonie und Speicherstadt sind die Wahrzeichen.",
        "Handels-, Transport- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Hafenwirtschaft, Medienbranche und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Hamburg, Landgericht Hamburg, OLG Hamburg. Alle drei Instanzen liegen in Hamburg — für Mandanten ein klarer regionaler Bezug in der Hansestadt.",
      economyNarrative:
        "Hafen, Logistik und Medien machen Handelsrecht zum Kernsuchfeld — daneben Transportrecht für Reedereien und Speditionen sowie Arbeitsrecht in großen Betrieben.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Spediteur streitet über Frachtschäden im Hafen — der Geschäftsführer sucht „Transportrecht Hamburg“.',
      faq: standardCityFaq(
        "Hamburg",
        {
          amtsgericht: "Amtsgericht Hamburg",
          landgericht: "Landgericht Hamburg",
          oberlandesgericht: HAMBURG_OLG,
        },
        [
          {
            q: "Liegen AG, LG und OLG in Hamburg?",
            a: "Ja — alle drei Instanzen sind in Hamburg benennbar. Das ist ein starker Vertrauensfaktor für Mandanten aus der Hansestadt.",
          },
          {
            q: "Welche Branchen prägen Hamburg?",
            a: "Hafen, Logistik und Medien erzeugen typischerweise Mandate in Handels-, Transport- und Arbeitsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Hamburg und die Metropolregion — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "bremen",
    name: "Bremen",
    bundesland: HB,
    kreisOrBezirk: "Stadt Bremen",
    stadtTyp: "Stadtstaat",
    population: { approx: 570000, label: "rund 570.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Bremen",
      landgericht: "Landgericht Bremen",
      oberlandesgericht: BREMEN_OLG,
    },
    economy: {
      sectors: ["Hafen/Logistik", "Luft- und Raumfahrt", "Automotive"],
      profile: "Hansestadt mit Hafen, Luft- und Raumfahrt und Automotive",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Transportrecht"],
    landmarks: ["Roland", "Bremer Stadtmusikanten"],
    mapCoords: coords(8.801, 53.079),
    nearbySlugs: getPhase2NearbySlugs("bremen"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "bremen",
      heroSubtitle:
        "Für Kanzleien an der Weser — wo Hafen, Luft- und Raumfahrt und Automotive typische Mandatsfelder bilden.",
      introParagraphs: [
        "Bremen ist Stadtstaat und Hansestadt — über dem üblichen Einwohner-Zielband, aber mit eigenem Land- und Oberlandesgericht gerichtlich zentral. Hafen, Luft- und Raumfahrt sowie Automotive prägen die Wirtschaft.",
        "Arbeits-, Handels- und Transportrecht sind hier zentral. Mandanten erwarten online Orientierung zu Industrie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Bremen, Landgericht Bremen, OLG Bremen. Alle drei Instanzen liegen in Bremen — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Hafen, Luft- und Raumfahrt und Automotive machen Arbeitsrecht zum Kernsuchfeld — daneben Handels- und Transportrecht.",
      localCaseExample:
        'Stellen Sie sich vor: Nach Betriebsänderung in der Luftfahrtindustrie sucht ein Ingenieur „Arbeitsrecht Bremen“.',
      faq: standardCityFaq(
        "Bremen",
        {
          amtsgericht: "Amtsgericht Bremen",
          landgericht: "Landgericht Bremen",
          oberlandesgericht: BREMEN_OLG,
        },
        [
          {
            q: "Liegen AG, LG und OLG in Bremen?",
            a: "Ja — alle drei Instanzen sind in Bremen benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Hansestadt.",
          },
          {
            q: "Welche Branchen prägen Bremen?",
            a: "Hafen, Luft- und Raumfahrt und Automotive erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Bremen und die Weserregion — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "bremerhaven",
    name: "Bremerhaven",
    bundesland: HB,
    kreisOrBezirk: "Stadt Bremen",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 113000, label: "rund 113.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Bremerhaven",
      landgericht: "Landgericht Bremen",
      oberlandesgericht: BREMEN_OLG,
    },
    economy: {
      sectors: ["Seehafen", "Fischerei", "Logistik"],
      profile: "Seehafenstadt an der Nordsee mit Fischerei und Logistik",
    },
    primaryLegalArea: "Transportrecht",
    secondaryLegalAreas: ["Handelsrecht", "Arbeitsrecht"],
    landmarks: ["Deutsches Schifffahrtsmuseum", "Havenwelten"],
    mapCoords: coords(8.581, 53.539),
    nearbySlugs: getPhase2NearbySlugs("bremerhaven"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "bremerhaven",
      heroSubtitle:
        "Für Kanzleien an der Nordsee — wo Seehafen, Fischerei und Logistik typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Bremerhaven ist kreisfreie Stadt im Bundesland Bremen und einer der bedeutendsten Seehäfen Deutschlands. Seehafen, Fischerei und Logistik prägen die Wirtschaft — Deutsches Schifffahrtsmuseum und Havenwelten sind die Wahrzeichen.",
        "Transport-, Handels- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Hafenwirtschaft und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Bremerhaven, Landgericht Bremen, OLG Bremen. Das Amtsgericht liegt in Bremerhaven — LG und OLG in Bremen. Der Sprung zur Weserstadt ist für Mandanten nicht immer offensichtlich.",
      economyNarrative:
        "Seehafen, Fischerei und Logistik machen Transportrecht zum Kernsuchfeld — daneben Handels- und Arbeitsrecht im Hafenumfeld.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Reederei-Inhaber streitet über Liegegebühren — er sucht „Handelsrecht Bremerhaven“.',
      faq: standardCityFaq(
        "Bremerhaven",
        {
          amtsgericht: "Amtsgericht Bremerhaven",
          landgericht: "Landgericht Bremen",
          oberlandesgericht: BREMEN_OLG,
        },
        [
          {
            q: "Warum ist für Bremerhaven das LG Bremen zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur im Bundesland Bremen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Branchen prägen Bremerhaven?",
            a: "Seehafen, Fischerei und Logistik erzeugen typischerweise Mandate in Transport- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Bremerhaven und die Nordseeküste — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "schwerin",
    name: "Schwerin",
    bundesland: MV,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "Landeshauptstadt",
    population: { approx: 99000, label: "rund 99.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Schwerin",
      landgericht: "Landgericht Schwerin",
      oberlandesgericht: MV_OLG,
      besonderheiten: [MV_MAHNGERICHT],
    },
    economy: {
      sectors: ["Verwaltung", "Tourismus", "Gesundheitswirtschaft"],
      profile: "Landeshauptstadt mit Seen, Verwaltung und Tourismus",
    },
    primaryLegalArea: "Verwaltungsrecht",
    secondaryLegalAreas: ["Mietrecht", "Tourismusrecht"],
    landmarks: ["Schweriner Schloss", "Pfaffenteich"],
    mapCoords: coords(11.417, 53.629),
    nearbySlugs: getPhase2NearbySlugs("schwerin"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "schwerin",
      heroSubtitle:
        "Für Kanzleien in der Landeshauptstadt — wo Verwaltung, Seen-Tourismus und Gesundheitswirtschaft typische Mandatsfelder bilden.",
      introParagraphs: [
        "Schwerin ist Landeshauptstadt Mecklenburg-Vorpommerns. Verwaltung, Seen-Tourismus und Gesundheitswirtschaft prägen die Wirtschaft — Schweriner Schloss und Pfaffenteich sind die Wahrzeichen.",
        "Verwaltungs-, Miet- und Tourismusrecht sind hier zentral. Mandanten erwarten online Orientierung zu Landeshauptstadt, Gerichten und regionalen Besonderheiten.",
      ],
      courtsNarrative:
        "Amtsgericht Schwerin, Landgericht Schwerin, OLG Rostock. Beide Instanzen liegen in Schwerin — für Mandanten ein klarer regionaler Bezug. Mahnverfahren laufen zentral über das Amtsgericht Hamburg.",
      economyNarrative:
        "Verwaltung, Tourismus und Gesundheitswirtschaft erzeugen Mandate in Verwaltungs-, Miet- und Tourismusrecht.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Ferienhausvermieter am Pfaffenteich streitet über Stornobedingungen — der Eigentümer sucht „Tourismusrecht Schwerin“.',
      faq: standardCityFaq(
        "Schwerin",
        {
          amtsgericht: "Amtsgericht Schwerin",
          landgericht: "Landgericht Schwerin",
          oberlandesgericht: MV_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Schwerin?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das OLG hat seinen Sitz in Rostock.",
          },
          {
            q: "Wo laufen Mahnverfahren in MV?",
            a: "Mahnverfahren in Mecklenburg-Vorpommern laufen zentral über das Amtsgericht Hamburg — ein wichtiger regionaler Fakt für Ihre Seite.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Schwerin und die Landeshauptstadt — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "erfurt",
    name: "Erfurt",
    bundesland: TH,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "Landeshauptstadt",
    population: { approx: 214000, label: "rund 214.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Erfurt",
      landgericht: "Landgericht Erfurt",
      oberlandesgericht: TH_OLG,
    },
    economy: {
      sectors: ["Verwaltung", "Optik/Photonik", "Logistik"],
      profile: "Landeshauptstadt mit Verwaltung, Optik und Logistik",
    },
    primaryLegalArea: "Verwaltungsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Mietrecht"],
    landmarks: ["Krämerbrücke", "Dom St. Marien"],
    mapCoords: coords(11.033, 50.978),
    nearbySlugs: getPhase2NearbySlugs("erfurt"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "erfurt",
      heroSubtitle:
        "Für Kanzleien in der Landeshauptstadt — wo Verwaltung, Optik und Logistik typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Erfurt ist Landeshauptstadt Thüringens — über dem üblichen Einwohner-Zielband, aber mit eigenem Landgericht gerichtlich zentral. Verwaltung, Optik/Photonik und Logistik prägen die Wirtschaft — Krämerbrücke und Dom sind die Wahrzeichen.",
        "Verwaltungs-, Arbeits- und Mietrecht sind hier zentral. Mandanten erwarten online Orientierung zu Landeshauptstadt, Industrie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Erfurt, Landgericht Erfurt, Thüringer OLG (Sitz Jena). AG und LG liegen in Erfurt — für Mandanten ein klarer regionaler Bezug. Das Thüringer OLG hat seinen Sitz in Jena.",
      economyNarrative:
        "Verwaltung, Optik und Logistik erzeugen Mandate in Verwaltungs-, Arbeits- und Mietrecht.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Beamter prüft dienstrechtliche Fragen — er sucht „Verwaltungsrecht Erfurt“.',
      faq: standardCityFaq(
        "Erfurt",
        {
          amtsgericht: "Amtsgericht Erfurt",
          landgericht: "Landgericht Erfurt",
          oberlandesgericht: TH_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Erfurt?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das Thüringer OLG hat seinen Sitz in Jena.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Erfurt?",
            a: "Verwaltungsrecht, Arbeitsrecht und Mietrecht stehen im Landeshauptstadt-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Erfurt und Mittelthüringen — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "rostock",
    name: "Rostock",
    bundesland: MV,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "Hansestadt",
    population: { approx: 209000, label: "rund 209.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Rostock",
      landgericht: "Landgericht Rostock",
      oberlandesgericht: MV_OLG,
      besonderheiten: [MV_MAHNGERICHT],
    },
    economy: {
      sectors: ["Hafen/Logistik", "Schiffbau", "Universität"],
      profile: "Hansestadt mit Hafen, Schiffbau und Universität",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Transportrecht", "Mietrecht"],
    landmarks: ["St. Marien-Kirche", "Warnemünde"],
    mapCoords: coords(12.099, 54.088),
    nearbySlugs: getPhase2NearbySlugs("rostock"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "rostock",
      heroSubtitle:
        "Für Kanzleien an der Ostsee — wo Hafen, Schiffbau und Universität typische Mandatsfelder bilden.",
      introParagraphs: [
        "Rostock ist Hansestadt und größte Stadt Mecklenburg-Vorpommerns — über dem üblichen Einwohner-Zielband und Sitz des OLG. Hafen, Schiffbau und Universität prägen die Wirtschaft — St. Marien-Kirche und Warnemünde sind die Wahrzeichen.",
        "Arbeits-, Transport- und Mietrecht sind hier zentral. Mandanten erwarten online Orientierung zu Hafenwirtschaft, Studentenwohnmarkt und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Rostock, Landgericht Rostock, OLG Rostock. Alle drei Instanzen liegen in Rostock — für Mandanten ein klarer regionaler Bezug. Mahnverfahren laufen zentral über das Amtsgericht Hamburg.",
      economyNarrative:
        "Hafen, Schiffbau und Universität machen Arbeitsrecht zum Kernsuchfeld — daneben Transportrecht und Mietrecht im Universitätsumfeld.",
      localCaseExample:
        'Stellen Sie sich vor: Nach Werftrestrukturierung sucht ein Schiffbauer „Arbeitsrecht Rostock“.',
      faq: standardCityFaq(
        "Rostock",
        {
          amtsgericht: "Amtsgericht Rostock",
          landgericht: "Landgericht Rostock",
          oberlandesgericht: MV_OLG,
        },
        [
          {
            q: "Liegen AG, LG und OLG in Rostock?",
            a: "Ja — alle drei Instanzen sind in Rostock benennbar. Das ist ein starker Vertrauensfaktor für Mandanten aus der Region.",
          },
          {
            q: "Wo laufen Mahnverfahren in MV?",
            a: "Mahnverfahren in Mecklenburg-Vorpommern laufen zentral über das Amtsgericht Hamburg — ein wichtiger regionaler Fakt für Ihre Seite.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Rostock und die Ostseeküste — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "potsdam",
    name: "Potsdam",
    bundesland: BB,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "Landeshauptstadt",
    population: { approx: 183000, label: "rund 183.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Potsdam",
      landgericht: "Landgericht Potsdam",
      oberlandesgericht: BRANDENBURG_OLG,
    },
    economy: {
      sectors: ["Verwaltung", "Film/Babelsberg", "Forschung"],
      profile: "Landeshauptstadt mit Filmstadt Babelsberg und Forschung",
    },
    primaryLegalArea: "Mietrecht",
    secondaryLegalAreas: ["Urheberrecht", "Verwaltungsrecht"],
    landmarks: ["Schloss Sanssouci", "Filmpark Babelsberg"],
    mapCoords: coords(13.064, 52.391),
    nearbySlugs: getPhase2NearbySlugs("potsdam"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "potsdam",
      heroSubtitle:
        "Für Kanzleien in der Landeshauptstadt — wo Film, Forschung und Berlin-Nähe typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Potsdam ist Landeshauptstadt Brandenburgs — über dem üblichen Einwohner-Zielband und nahe Berlin. Verwaltung, Filmstadt Babelsberg und Forschung prägen die Wirtschaft — Schloss Sanssouci und Filmpark Babelsberg sind die Wahrzeichen.",
        "Miet-, Urheber- und Verwaltungsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Filmbranche, Wohnungsmarkt und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Potsdam, Landgericht Potsdam, Brandenburgisches OLG (Sitz Brandenburg an der Havel). AG und LG liegen in Potsdam — das OLG hat seinen Sitz in Brandenburg an der Havel.",
      economyNarrative:
        "Film, Forschung und Berlin-Nähe machen Mietrecht zum Kernsuchfeld — daneben Urheberrecht in der Filmbranche und Verwaltungsrecht.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Produktionsleiter prüft Nutzungsrechte — er sucht „Urheberrecht Potsdam Babelsberg“.',
      faq: standardCityFaq(
        "Potsdam",
        {
          amtsgericht: "Amtsgericht Potsdam",
          landgericht: "Landgericht Potsdam",
          oberlandesgericht: BRANDENBURG_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Potsdam?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das Brandenburgische OLG hat seinen Sitz in Brandenburg an der Havel.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Potsdam?",
            a: "Mietrecht, Urheberrecht und Verwaltungsrecht stehen im Kontext von Filmstadt, Forschung und Landeshauptstadt oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Potsdam und die Hauptstadtregion — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "mainz",
    name: "Mainz",
    bundesland: RLP,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "Landeshauptstadt",
    population: { approx: 218000, label: "rund 218.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Mainz",
      landgericht: "Landgericht Mainz",
      oberlandesgericht: OLG_KOBLENZ,
    },
    economy: {
      sectors: ["Medien/ZDF", "Verwaltung", "Pharma"],
      profile: "Landeshauptstadt mit Medien, Verwaltung und Pharma",
    },
    primaryLegalArea: "Medienrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Verwaltungsrecht"],
    landmarks: ["Mainzer Dom", "Gutenberg-Museum"],
    mapCoords: coords(8.247, 50.001),
    nearbySlugs: getPhase2NearbySlugs("mainz"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "mainz",
      heroSubtitle:
        "Für Kanzleien an Rhein und Main — wo Medien, Verwaltung und Pharma typische Mandatsfelder bilden.",
      introParagraphs: [
        "Mainz ist Landeshauptstadt Rheinland-Pfalz — über dem üblichen Einwohner-Zielband. Medien (ZDF), Verwaltung und Pharma prägen die Wirtschaft — Mainzer Dom und Gutenberg-Museum sind die Wahrzeichen.",
        "Medien-, Arbeits- und Verwaltungsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Medienbranche und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Mainz, Landgericht Mainz, OLG Koblenz. AG und LG liegen in Mainz — das OLG hat seinen Sitz in Koblenz.",
      economyNarrative:
        "Medien, Verwaltung und Pharma machen Medienrecht zum Kernsuchfeld — daneben Arbeits- und Verwaltungsrecht.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Journalist prüft Persönlichkeitsrechte — er sucht „Medienrecht Mainz“.',
      faq: standardCityFaq(
        "Mainz",
        {
          amtsgericht: "Amtsgericht Mainz",
          landgericht: "Landgericht Mainz",
          oberlandesgericht: OLG_KOBLENZ,
        },
        [
          {
            q: "Liegen AG und LG in Mainz?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das OLG hat seinen Sitz in Koblenz.",
          },
          {
            q: "Welche Branchen prägen Mainz?",
            a: "Medien, Verwaltung und Pharma erzeugen typischerweise Mandate in Medien-, Arbeits- und Verwaltungsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Mainz und die Rhein-Main-Region — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "saarbruecken",
    name: "Saarbrücken",
    bundesland: SL,
    kreisOrBezirk: "Regionalverband Saarbrücken",
    stadtTyp: "Landeshauptstadt",
    population: { approx: 180000, label: "rund 180.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Saarbrücken",
      landgericht: SAARLAND_LG,
      oberlandesgericht: SAARLAND_OLG,
    },
    economy: {
      sectors: ["Verwaltung", "Automotive", "Forschung"],
      profile: "Landeshauptstadt mit Verwaltung, Automotive und Forschung",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Verwaltungsrecht", "Handelsrecht"],
    landmarks: ["Ludwigskirche", "Saarlandmuseum"],
    mapCoords: coords(7.006, 49.235),
    nearbySlugs: getPhase2NearbySlugs("saarbruecken"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "saarbruecken",
      heroSubtitle:
        "Für Kanzleien in der Landeshauptstadt — wo Verwaltung, Automotive und Forschung typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Saarbrücken ist Landeshauptstadt des Saarlands — über dem üblichen Einwohner-Zielband und Sitz von Land- und Oberlandesgericht. Verwaltung, Automotive und Forschung prägen die Wirtschaft — Ludwigskirche und Saarlandmuseum sind die Wahrzeichen.",
        "Arbeits-, Verwaltungs- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und regionalen Schwerpunkten.",
      ],
      courtsNarrative:
        "Amtsgericht Saarbrücken, Landgericht Saarbrücken, Saarländisches OLG Saarbrücken. Alle drei Instanzen liegen in Saarbrücken — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Verwaltung, Automotive und Forschung machen Arbeitsrecht zum Kernsuchfeld — daneben Verwaltungs- und Handelsrecht.",
      localCaseExample:
        'Stellen Sie sich vor: Nach Betriebsänderung im Automotive-Umfeld sucht ein Beschäftigter „Arbeitsrecht Saarbrücken“.',
      faq: standardCityFaq(
        "Saarbrücken",
        {
          amtsgericht: "Amtsgericht Saarbrücken",
          landgericht: SAARLAND_LG,
          oberlandesgericht: SAARLAND_OLG,
        },
        [
          {
            q: "Liegen AG, LG und OLG in Saarbrücken?",
            a: "Ja — alle drei Instanzen sind in Saarbrücken benennbar. Das ist ein starker Vertrauensfaktor für Mandanten aus dem Saarland.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Saarbrücken?",
            a: "Arbeitsrecht, Verwaltungsrecht und Handelsrecht stehen im Landeshauptstadt-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Saarbrücken und das Saarland — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "magdeburg",
    name: "Magdeburg",
    bundesland: ST,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "Landeshauptstadt",
    population: { approx: 240000, label: "rund 240.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Magdeburg",
      landgericht: "Landgericht Magdeburg",
      oberlandesgericht: ST_OLG,
    },
    economy: {
      sectors: ["Maschinenbau", "Logistik", "Verwaltung"],
      profile: "Landeshauptstadt mit Maschinenbau, Logistik und Verwaltung",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Verwaltungsrecht"],
    landmarks: ["Magdeburger Dom", "Grüne Zitadelle"],
    mapCoords: coords(11.627, 52.131),
    nearbySlugs: getPhase2NearbySlugs("magdeburg"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "magdeburg",
      heroSubtitle:
        "Für Kanzleien an Elbe und Elbe-Havel — wo Maschinenbau, Logistik und Verwaltung typische Mandatsfelder bilden.",
      introParagraphs: [
        "Magdeburg ist Landeshauptstadt Sachsen-Anhalts — über dem üblichen Einwohner-Zielband. Maschinenbau, Logistik und Verwaltung prägen die Wirtschaft — Magdeburger Dom und Grüne Zitadelle sind die Wahrzeichen.",
        "Arbeits-, Handels- und Verwaltungsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Industrie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Magdeburg, Landgericht Magdeburg, OLG Naumburg. AG und LG liegen in Magdeburg — das OLG hat seinen Sitz in Naumburg.",
      economyNarrative:
        "Maschinenbau, Logistik und Verwaltung machen Arbeitsrecht zum Kernsuchfeld — daneben Handels- und Verwaltungsrecht.",
      localCaseExample:
        'Stellen Sie sich vor: Nach Betriebsänderung im Maschinenbau sucht ein Mitarbeiter „Arbeitsrecht Magdeburg“.',
      faq: standardCityFaq(
        "Magdeburg",
        {
          amtsgericht: "Amtsgericht Magdeburg",
          landgericht: "Landgericht Magdeburg",
          oberlandesgericht: ST_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Magdeburg?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das OLG hat seinen Sitz in Naumburg.",
          },
          {
            q: "Welche Branchen prägen Magdeburg?",
            a: "Maschinenbau, Logistik und Verwaltung erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Magdeburg und Sachsen-Anhalt — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "neumuenster",
    name: "Neumünster",
    bundesland: SH,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 82000, label: "rund 82.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Neumünster",
      landgericht: "Landgericht Kiel",
      oberlandesgericht: SH_OLG,
    },
    economy: {
      sectors: ["Einzelhandel", "Lebensmittel", "Logistik"],
      profile: "Handels- und Logistikstadt zwischen Hamburg und Kiel",
    },
    primaryLegalArea: "Handelsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Mietrecht"],
    landmarks: ["Holsten-Tor", "Tuch + Technik"],
    mapCoords: coords(9.984, 54.073),
    nearbySlugs: getPhase2NearbySlugs("neumuenster"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "neumuenster",
      heroSubtitle:
        "Für Kanzleien zwischen Hamburg und Kiel — wo Handel, Lebensmittel und Logistik typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Neumünster ist kreisfreie Stadt in Schleswig-Holstein — die größte Stadt im Bundesland ohne eigene Landeshauptstadt-Seite. Einzelhandel, Lebensmittel und Logistik prägen die Wirtschaft — Holsten-Tor und Tuch + Technik sind die Wahrzeichen.",
        "Handels-, Arbeits- und Mietrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und regionalen Schwerpunkten.",
      ],
      courtsNarrative:
        "Amtsgericht Neumünster, Landgericht Kiel, OLG Schleswig. Das Amtsgericht liegt in Neumünster — LG und OLG in Kiel bzw. Schleswig. Der Sprung nach Kiel ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Einzelhandel, Lebensmittel und Logistik machen Handelsrecht zum Kernsuchfeld — daneben Arbeits- und Mietrecht.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Lebensmittelhändler streitet über Lieferverzug — der Inhaber sucht „Handelsrecht Neumünster“.',
      faq: standardCityFaq(
        "Neumünster",
        {
          amtsgericht: "Amtsgericht Neumünster",
          landgericht: "Landgericht Kiel",
          oberlandesgericht: SH_OLG,
        },
        [
          {
            q: "Warum ist für Neumünster das LG Kiel zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Schleswig-Holstein. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Branchen prägen Neumünster?",
            a: "Einzelhandel, Lebensmittel und Logistik erzeugen typischerweise Mandate in Handels- und Arbeitsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Neumünster und die Region zwischen Hamburg und Kiel — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "trier",
    name: "Trier",
    bundesland: RLP,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 110000, label: "rund 110.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Trier",
      landgericht: "Landgericht Trier",
      oberlandesgericht: OLG_KOBLENZ,
    },
    economy: {
      sectors: ["Universität", "Tourismus", "Weinbau"],
      profile: "Universitätsstadt mit römischer Geschichte, Tourismus und Weinbau",
    },
    primaryLegalArea: "Tourismusrecht",
    secondaryLegalAreas: ["Mietrecht", "Arbeitsrecht"],
    landmarks: ["Porta Nigra", "Römerbrücke"],
    mapCoords: coords(6.643, 49.756),
    nearbySlugs: getPhase2NearbySlugs("trier"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "trier",
      heroSubtitle:
        "Für Kanzleien an der Mosel — wo Universität, Römerstadt und Weinbau typische Mandatsfelder bilden.",
      introParagraphs: [
        "Trier ist kreisfreie Stadt und älteste Stadt Deutschlands. Universität, Tourismus und Weinbau prägen die Wirtschaft — Porta Nigra und Römerbrücke sind die Wahrzeichen.",
        "Tourismus-, Miet- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gastronomie, Studentenwohnmarkt und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Trier, Landgericht Trier, OLG Koblenz. AG und LG liegen in Trier — das OLG hat seinen Sitz in Koblenz.",
      economyNarrative:
        "Universität, Tourismus und Weinbau erzeugen Mandate in Tourismus-, Miet- und Arbeitsrecht.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Weingut prüft neue Kennzeichnungspflichten — der Winzer sucht „Lebensmittelrecht Trier“.',
      faq: standardCityFaq(
        "Trier",
        {
          amtsgericht: "Amtsgericht Trier",
          landgericht: "Landgericht Trier",
          oberlandesgericht: OLG_KOBLENZ,
        },
        [
          {
            q: "Liegen AG und LG in Trier?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das OLG hat seinen Sitz in Koblenz.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Trier?",
            a: "Tourismusrecht, Mietrecht und Arbeitsrecht stehen im Universitäts- und Tourismus-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Trier und die Mosel-Region — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "koblenz",
    name: "Koblenz",
    bundesland: RLP,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 114000, label: "rund 114.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Koblenz",
      landgericht: "Landgericht Koblenz",
      oberlandesgericht: OLG_KOBLENZ,
    },
    economy: {
      sectors: ["Verwaltung", "Tourismus", "Logistik"],
      profile: "Rhein-Mosel-Stadt mit Verwaltung, Tourismus und Logistik",
    },
    primaryLegalArea: "Verwaltungsrecht",
    secondaryLegalAreas: ["Tourismusrecht", "Handelsrecht"],
    landmarks: ["Deutsches Eck", "Festung Ehrenbreitstein"],
    mapCoords: coords(7.593, 50.362),
    nearbySlugs: getPhase2NearbySlugs("koblenz"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "koblenz",
      heroSubtitle:
        "Für Kanzleien an Rhein und Mosel — wo Verwaltung, Tourismus und OLG-Sitz typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Koblenz ist kreisfreie Stadt an der Mündung von Rhein und Mosel und Sitz des OLG Koblenz. Verwaltung, Tourismus und Logistik prägen die Wirtschaft — Deutsches Eck und Festung Ehrenbreitstein sind die Wahrzeichen.",
        "Verwaltungs-, Tourismus- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und regionalen Schwerpunkten.",
      ],
      courtsNarrative:
        "Amtsgericht Koblenz, Landgericht Koblenz, OLG Koblenz. Alle drei Instanzen liegen in Koblenz — für Mandanten ein klarer regionaler Bezug als OLG-Sitzstadt.",
      economyNarrative:
        "Verwaltung, Tourismus und Logistik erzeugen Mandate in Verwaltungs-, Tourismus- und Handelsrecht.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Hotelier nahe dem Deutschen Eck prüft neue Lärmschutzauflagen — er sucht „Gastronomierecht Koblenz“.',
      faq: standardCityFaq(
        "Koblenz",
        {
          amtsgericht: "Amtsgericht Koblenz",
          landgericht: "Landgericht Koblenz",
          oberlandesgericht: OLG_KOBLENZ,
        },
        [
          {
            q: "Liegen AG, LG und OLG in Koblenz?",
            a: "Ja — alle drei Instanzen sind in Koblenz benennbar. Das ist ein starker Vertrauensfaktor für Mandanten aus der Region.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Koblenz?",
            a: "Verwaltungsrecht, Tourismusrecht und Handelsrecht stehen im Rhein-Mosel-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Koblenz und den Mittelrhein — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "oldenburg",
    name: "Oldenburg",
    bundesland: NI,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 170000, label: "rund 170.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Oldenburg",
      landgericht: "Landgericht Oldenburg",
      oberlandesgericht: "OLG Oldenburg",
    },
    economy: {
      sectors: ["Universität", "Verwaltung", "Ernährungswirtschaft"],
      profile: "Universitätsstadt mit Verwaltung und Ernährungswirtschaft",
    },
    primaryLegalArea: "Mietrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Verwaltungsrecht"],
    landmarks: ["Schloss Oldenburg", "Lambertikirche"],
    mapCoords: coords(8.214, 53.143),
    nearbySlugs: getPhase2NearbySlugs("oldenburg"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "oldenburg",
      heroSubtitle:
        "Für Kanzleien im Oldenburger Land — wo Universität, Verwaltung und Ernährungswirtschaft typische Mandatsfelder bilden.",
      introParagraphs: [
        "Oldenburg ist kreisfreie Stadt und OLG-Bezirksstadt — über dem üblichen Einwohner-Zielband. Universität, Verwaltung und Ernährungswirtschaft prägen die Wirtschaft — Schloss Oldenburg und Lambertikirche sind die Wahrzeichen.",
        "Miet-, Arbeits- und Verwaltungsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Studentenwohnmarkt und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Oldenburg, Landgericht Oldenburg, OLG Oldenburg. Alle drei Instanzen liegen in Oldenburg — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Universität, Verwaltung und Ernährungswirtschaft machen Mietrecht zum Kernsuchfeld — daneben Arbeits- und Verwaltungsrecht.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Student streitet über Kautionsrückzahlung — er sucht „Mietrecht Oldenburg“.',
      faq: standardCityFaq(
        "Oldenburg",
        {
          amtsgericht: "Amtsgericht Oldenburg",
          landgericht: "Landgericht Oldenburg",
          oberlandesgericht: "OLG Oldenburg",
        },
        [
          {
            q: "Liegen AG, LG und OLG in Oldenburg?",
            a: "Ja — alle drei Instanzen sind in Oldenburg benennbar. Das ist ein starker Vertrauensfaktor für Mandanten aus der Region.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Oldenburg?",
            a: "Mietrecht, Arbeitsrecht und Verwaltungsrecht stehen im Universitäts- und Verwaltungskontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Oldenburg und das Oldenburger Land — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "regensburg",
    name: "Regensburg",
    bundesland: BY,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 153000, label: "rund 153.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Regensburg",
      landgericht: "Landgericht Regensburg",
      oberlandesgericht: "OLG Nürnberg",
    },
    economy: {
      sectors: ["Automotive", "Universität", "IT"],
      profile: "Universitätsstadt mit Automotive, IT und UNESCO-Altstadt",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["IT-Recht", "Handelsrecht"],
    landmarks: ["UNESCO-Welterbe Altstadt", "Steinerne Brücke"],
    mapCoords: coords(12.102, 49.013),
    nearbySlugs: getPhase2NearbySlugs("regensburg"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "regensburg",
      heroSubtitle:
        "Für Kanzleien an der Donau — wo Automotive, Universität und IT typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Regensburg ist kreisfreie Stadt an der Donau — über dem üblichen Einwohner-Zielband. Automotive, Universität und IT prägen die Wirtschaft — UNESCO-Welterbe Altstadt und Steinerne Brücke sind die Wahrzeichen.",
        "Arbeits-, IT- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Industrie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Regensburg, Landgericht Regensburg, OLG Nürnberg. AG und LG liegen in Regensburg — das OLG hat seinen Sitz in Nürnberg.",
      economyNarrative:
        "Automotive, Universität und IT machen Arbeitsrecht zum Kernsuchfeld — daneben IT-Recht und Handelsrecht.",
      localCaseExample:
        'Stellen Sie sich vor: Ein IT-Dienstleister prüft AGB-Klauseln — der Geschäftsführer sucht „IT-Recht Regensburg“.',
      faq: standardCityFaq(
        "Regensburg",
        {
          amtsgericht: "Amtsgericht Regensburg",
          landgericht: "Landgericht Regensburg",
          oberlandesgericht: "OLG Nürnberg",
        },
        [
          {
            q: "Liegen AG und LG in Regensburg?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das OLG hat seinen Sitz in Nürnberg.",
          },
          {
            q: "Welche Branchen prägen Regensburg?",
            a: "Automotive, IT und Universität erzeugen typischerweise Mandate in Arbeits- und IT-Recht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Regensburg und die Oberpfalz — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "reutlingen",
    name: "Reutlingen",
    bundesland: BW,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 116000, label: "rund 116.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Reutlingen",
      landgericht: "Landgericht Rottweil",
      oberlandesgericht: "OLG Stuttgart",
    },
    economy: {
      sectors: ["Textil", "Maschinenbau", "Mittelstand"],
      profile: "Textil- und Maschinenbau-Stadt in der Region Stuttgart",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Gewerblicher Rechtsschutz"],
    landmarks: ["Spreuerhofstraße", "Achalm"],
    mapCoords: coords(9.204, 48.491),
    nearbySlugs: getPhase2NearbySlugs("reutlingen"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "reutlingen",
      heroSubtitle:
        "Für Kanzleien in der Region Stuttgart — wo Textil, Maschinenbau und Mittelstand typische Mandatsfelder bilden.",
      introParagraphs: [
        "Reutlingen ist kreisfreie Stadt in Baden-Württemberg. Textiltradition, Maschinenbau und Mittelstand prägen die Wirtschaft — Spreuerhofstraße und Achalm sind die Wahrzeichen.",
        "Arbeits-, Handelsrecht und gewerblicher Rechtsschutz sind hier zentral. Mandanten erwarten online Orientierung zu Industrie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Reutlingen, Landgericht Rottweil, OLG Stuttgart. Der Sprung nach Rottweil ist für Mandanten nicht offensichtlich — eine verständliche Darstellung schafft Vertrauen.",
      economyNarrative:
        "Textil, Maschinenbau und Mittelstand machen Arbeitsrecht zum Kernsuchfeld — daneben Handelsrecht und gewerblicher Rechtsschutz.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Textilhersteller prüft Markenverletzung — der Geschäftsführer sucht „Markenrecht Reutlingen“.',
      faq: standardCityFaq(
        "Reutlingen",
        {
          amtsgericht: "Amtsgericht Reutlingen",
          landgericht: "Landgericht Rottweil",
          oberlandesgericht: "OLG Stuttgart",
        },
        [
          {
            q: "Warum ist für Reutlingen das LG Rottweil zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Baden-Württemberg. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Branchen prägen Reutlingen?",
            a: "Textil, Maschinenbau und Mittelstand erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Reutlingen und die Region Stuttgart — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "heilbronn",
    name: "Heilbronn",
    bundesland: BW,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 126000, label: "rund 126.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Heilbronn",
      landgericht: "Landgericht Heilbronn",
      oberlandesgericht: "OLG Stuttgart",
    },
    economy: {
      sectors: ["Automotive", "Weinbau", "Logistik"],
      profile: "LG-Sitzstadt mit Automotive, Weinbau und Logistik",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Agrarrecht"],
    landmarks: ["Kilianskirche", "Experimenta"],
    mapCoords: coords(9.217, 49.143),
    nearbySlugs: getPhase2NearbySlugs("heilbronn"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "heilbronn",
      heroSubtitle:
        "Für Kanzleien am Neckar — wo Automotive, Weinbau und Logistik typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Heilbronn ist kreisfreie Stadt und Sitz des Landgerichts Heilbronn. Automotive, Weinbau und Logistik prägen die Wirtschaft — Kilianskirche und Experimenta sind die Wahrzeichen.",
        "Arbeits-, Handels- und Agrarrecht sind hier zentral. Mandanten erwarten online Orientierung zu Industrie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Heilbronn, Landgericht Heilbronn, OLG Stuttgart. AG und LG liegen in Heilbronn — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Automotive, Weinbau und Logistik machen Arbeitsrecht zum Kernsuchfeld — daneben Handels- und Agrarrecht im Weinbaukontext.",
      localCaseExample:
        'Stellen Sie sich vor: Nach Betriebsänderung im Automotive-Umfeld sucht ein Beschäftigter „Arbeitsrecht Heilbronn“.',
      faq: standardCityFaq(
        "Heilbronn",
        {
          amtsgericht: "Amtsgericht Heilbronn",
          landgericht: "Landgericht Heilbronn",
          oberlandesgericht: "OLG Stuttgart",
        },
        [
          {
            q: "Liegen AG und LG in Heilbronn?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das OLG hat seinen Sitz in Stuttgart.",
          },
          {
            q: "Welche Branchen prägen Heilbronn?",
            a: "Automotive, Weinbau und Logistik erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Heilbronn und die Region Neckar-Franken — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "darmstadt",
    name: "Darmstadt",
    bundesland: HE,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "Wissenschaftsstadt",
    population: { approx: 159000, label: "rund 159.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Darmstadt",
      landgericht: "Landgericht Darmstadt",
      oberlandesgericht: HESSEN_OLG,
    },
    economy: {
      sectors: ["Forschung/TU", "Chemie/Pharma", "IT"],
      profile: "Wissenschaftsstadt mit TU, Chemie und IT",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["IT-Recht", "Mietrecht"],
    landmarks: ["Mathildenhöhe", "Waldspirale"],
    mapCoords: coords(8.651, 49.872),
    nearbySlugs: getPhase2NearbySlugs("darmstadt"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "darmstadt",
      heroSubtitle:
        "Für Kanzleien in der Wissenschaftsstadt — wo TU, Chemie und IT typische Mandatsfelder bilden.",
      introParagraphs: [
        "Darmstadt ist kreisfreie Wissenschaftsstadt — über dem üblichen Einwohner-Zielband. TU Darmstadt, Chemie/Pharma und IT prägen die Wirtschaft — Mathildenhöhe und Waldspirale sind die Wahrzeichen.",
        "Arbeits-, IT- und Mietrecht sind hier zentral. Mandanten erwarten online Orientierung zu Forschung, Studentenwohnmarkt und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Darmstadt, Landgericht Darmstadt, OLG Frankfurt am Main. AG und LG liegen in Darmstadt — das OLG hat seinen Sitz in Frankfurt.",
      economyNarrative:
        "Forschung, Chemie und IT machen Arbeitsrecht zum Kernsuchfeld — daneben IT-Recht und Mietrecht im Universitätsumfeld.",
      localCaseExample:
        'Stellen Sie sich vor: Ein Forschungsinstitut prüft Datenschutz bei Kooperationen — der Leiter sucht „IT-Recht Darmstadt“.',
      faq: standardCityFaq(
        "Darmstadt",
        {
          amtsgericht: "Amtsgericht Darmstadt",
          landgericht: "Landgericht Darmstadt",
          oberlandesgericht: HESSEN_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Darmstadt?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das OLG hat seinen Sitz in Frankfurt am Main.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Darmstadt?",
            a: "Arbeitsrecht, IT-Recht und Mietrecht stehen im Wissenschaftsstadt-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Darmstadt und die Rhein-Main-Region — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "siegen",
    name: "Siegen",
    bundesland: NRW,
    kreisOrBezirk: "Kreis Siegen-Wittgenstein",
    stadtTyp: "Kreisstadt",
    population: { approx: 102000, label: "rund 102.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Siegen",
      landgericht: "Landgericht Siegen",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Universität", "Metall", "Mittelstand"],
      profile: "Universitätsstadt im Siegerland mit Metall und Mittelstand",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Mietrecht"],
    landmarks: ["Oberes Schloss", "Nikolaikirche"],
    mapCoords: coords(8.024, 50.875),
    nearbySlugs: getPhase2NearbySlugs("siegen"),
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "siegen",
      heroSubtitle:
        "Für Kanzleien im Siegerland — wo Universität, Metall und Mittelstand typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Siegen ist Kreisstadt im Kreis Siegen-Wittgenstein. Universität, Metallindustrie und Mittelstand prägen die Wirtschaft — Oberes Schloss und Nikolaikirche sind die Wahrzeichen.",
        "Arbeits-, Handels- und Mietrecht sind hier zentral. Mandanten erwarten online Orientierung zu Industrie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Siegen, Landgericht Siegen, OLG Hamm. AG und LG liegen in Siegen — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Universität, Metall und Mittelstand machen Arbeitsrecht zum Kernsuchfeld — daneben Handels- und Mietrecht.",
      localCaseExample:
        'Stellen Sie sich vor: Nach Betriebsänderung in der Metallindustrie sucht ein Beschäftigter „Arbeitsrecht Siegen“.',
      faq: standardCityFaq(
        "Siegen",
        {
          amtsgericht: "Amtsgericht Siegen",
          landgericht: "Landgericht Siegen",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Liegen AG und LG in Siegen?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das OLG hat seinen Sitz in Hamm.",
          },
          {
            q: "Welche Branchen prägen Siegen?",
            a: "Metallindustrie, Mittelstand und Universität erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Siegen und das Siegerland — ohne erfundene Referenzen.",
    },
  },
];

export const phase2Facts: CityFacts[] = cities.map((city) => {
  const { content, ...facts } = city;
  void content;
  return facts;
});

export const phase2Content: Record<string, CityRecord["content"]> =
  Object.fromEntries(cities.map((c) => [c.slug, c.content]));

export const phase2Records: CityRecord[] = cities.map(
  ({ content, ...facts }) => ({ ...facts, content }),
);
