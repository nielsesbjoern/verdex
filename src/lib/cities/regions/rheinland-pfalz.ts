import { lonLatToMapCoords } from "../germanyMap";
import type { CityFacts, CityRecord } from "../types";
import {
  OLG_KOBLENZ,
  OLG_ZWEIBRUECKEN,
  RLP,
  standardCityFaq,
} from "./rheinland-pfalz-shared";

type CityDef = CityFacts & {
  content: CityRecord["content"];
};

function coords(lon: number, lat: number) {
  return { ...lonLatToMapCoords(lon, lat), anchor: "start" as const };
}

const cities: CityDef[] = [
  {
    slug: "neuwied",
    name: "Neuwied",
    bundesland: RLP,
    kreisOrBezirk: "Landkreis Neuwied",
    stadtTyp: "Kreisstadt",
    population: { approx: 65000, label: "rund 65.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Neuwied",
      landgericht: "Landgericht Koblenz",
      oberlandesgericht: OLG_KOBLENZ,
    },
    economy: {
      sectors: ["Metall/Glas/Verpackung", "Rhein-Logistik"],
      profile: "Rheinstadt mit Industrie und Logistik am Mittelrhein",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Industrierecht"],
    landmarks: ["Schloss Neuwied", "Rheinpromenade"],
    mapCoords: coords(7.47, 50.43),
    nearbySlugs: ["koblenz", "neuwied", "bad-kreuznach"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "neuwied",
      heroSubtitle:
        "Für Kanzleien am Rhein — wo Metall, Glas, Verpackung und Rhein-Logistik typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Neuwied ist Kreisstadt am Rhein. Metall-, Glas- und Verpackungsindustrie sowie Rhein-Logistik prägen die Wirtschaft — Schloss und Rheinpromenade sind die sichtbaren Wahrzeichen.",
        "Arbeits-, Handels- und Industrierecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und regionalen Schwerpunkten.",
      ],
      courtsNarrative:
        "Amtsgericht Neuwied, Landgericht Koblenz, OLG Koblenz. Der Sprung nach Koblenz ist für Mandanten nicht offensichtlich — eine verständliche Darstellung schafft Vertrauen.",
      economyNarrative:
        "Metall, Glas, Verpackung und Logistik machen Arbeitsrecht zum Kernsuchfeld — daneben Handels- und Industrierecht in mittelständischen Betrieben.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Verpackungshersteller streitet über Lieferverzug — der Geschäftsführer sucht 'Handelsrecht Neuwied'.",
      faq: standardCityFaq(
        "Neuwied",
        {
          amtsgericht: "Amtsgericht Neuwied",
          landgericht: "Landgericht Koblenz",
          oberlandesgericht: OLG_KOBLENZ,
        },
        [
          {
            q: "Warum ist für Neuwied das LG Koblenz zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Rheinland-Pfalz. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Branchen prägen Neuwied?",
            a: "Metall-, Glas- und Verpackungsindustrie sowie Rhein-Logistik erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Neuwied und den Mittelrhein — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "worms",
    name: "Worms",
    bundesland: RLP,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 87000, label: "rund 87.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Worms",
      landgericht: "Landgericht Mainz",
      oberlandesgericht: OLG_KOBLENZ,
    },
    economy: {
      sectors: ["Chemie", "Weinhandel", "Logistik"],
      profile: "Nibelungen- und Reformationsstadt mit Chemie und Weinhandel",
    },
    primaryLegalArea: "Handelsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Agrarrecht"],
    landmarks: ["Wormser Dom", "Lutherdenkmal"],
    mapCoords: coords(8.36, 49.63),
    nearbySlugs: ["mannheim", "mainz", "speyer", "frankenthal-pfalz"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "worms",
      heroSubtitle:
        "Für Kanzleien an Rhein und Wein — wo Chemie, Liebfrauenmilch und Nibelungenstadt typische Mandatsfelder bilden.",
      introParagraphs: [
        "Worms ist kreisfreie Stadt an Rhein und Weinstraße. Chemie, Weinhandel und Logistik prägen die Wirtschaft — Dom, Lutherdenkmal und Nibelungentradition prägen das Stadtbild.",
        "Handels-, Arbeits- und Agrarrecht (Weinbau) sind hier zentral. Mandanten erwarten online Orientierung zu Industrie, Weinwirtschaft und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Worms, Landgericht Mainz, OLG Koblenz. Der Sprung nach Mainz ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Chemie, Weinhandel und Logistik erzeugen Mandate in Handels-, Arbeits- und Agrarrecht — besonders im Weinbau-Kontext.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Winzer prüft neue Etikettierungsvorschriften — er sucht 'Weinrecht Worms'.",
      faq: standardCityFaq(
        "Worms",
        {
          amtsgericht: "Amtsgericht Worms",
          landgericht: "Landgericht Mainz",
          oberlandesgericht: OLG_KOBLENZ,
        },
        [
          {
            q: "Welches Landgericht ist für Worms zuständig?",
            a: "Das Landgericht Mainz — nicht Worms selbst. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Worms?",
            a: "Handelsrecht, Arbeitsrecht und Agrarrecht (Weinbau) stehen im Chemie- und Wein-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Worms und die Rheinregion — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "landau-in-der-pfalz",
    name: "Landau in der Pfalz",
    bundesland: RLP,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 48000, label: "rund 48.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Landau in der Pfalz",
      landgericht: "Landgericht Landau in der Pfalz",
      oberlandesgericht: OLG_ZWEIBRUECKEN,
    },
    economy: {
      sectors: ["Weinbau", "Tourismus", "Universität"],
      profile: "Universitäts- und Weinstadt an der Südlichen Weinstraße",
    },
    primaryLegalArea: "Weinrecht",
    secondaryLegalAreas: ["Agrarrecht", "Erbrecht", "Tourismusrecht"],
    landmarks: ["Festungsanlagen", "Südliche Weinstraße"],
    mapCoords: coords(8.12, 49.2),
    nearbySlugs: ["trier", "neustadt-an-der-weinstrasse", "speyer", "pirmasens"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "landau-in-der-pfalz",
      heroSubtitle:
        "Für Kanzleien in der Pfalz — wo Weinbau, Universität und Festungsstadt typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Landau in der Pfalz ist kreisfreie Stadt an der Südlichen Weinstraße. Weinbau, Tourismus und Universität prägen Wirtschaft und Mandatsumfeld — Festungsanlagen und Weinregion sind die Wahrzeichen.",
        "Agrar-, Wein-, Erb- und Tourismusrecht sind hier zentral. Mandanten aus Weinwirtschaft und Gastronomie suchen gezielt nach Kanzleien mit regionalem Bezug.",
      ],
      courtsNarrative:
        "Amtsgericht Landau in der Pfalz, Landgericht Landau in der Pfalz, Pfälzisches OLG Zweibrücken. Beide Instanzen liegen in Landau — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Weinbau, Tourismus und Universität erzeugen Mandate in Agrar-, Wein-, Erb- und Tourismusrecht. Kanzleien sollten das online erkennbar machen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Weingut prüft Hofübergabe an den Sohn — der Winzer sucht 'Erbrecht Landau Pfalz'.",
      faq: standardCityFaq(
        "Landau in der Pfalz",
        {
          amtsgericht: "Amtsgericht Landau in der Pfalz",
          landgericht: "Landgericht Landau in der Pfalz",
          oberlandesgericht: OLG_ZWEIBRUECKEN,
        },
        [
          {
            q: "Liegen AG und LG in Landau?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Pfalz.",
          },
          {
            q: "Welche Rechtsgebiete passen zur Pfalz?",
            a: "Wein-, Agrar-, Erb- und Tourismusrecht stehen im Weinstraßen-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Landau und die Südliche Weinstraße — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "neustadt-an-der-weinstrasse",
    name: "Neustadt an der Weinstraße",
    bundesland: RLP,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 53000, label: "rund 53.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Neustadt an der Weinstraße",
      landgericht: "Landgericht Frankenthal (Pfalz)",
      oberlandesgericht: OLG_ZWEIBRUECKEN,
    },
    economy: {
      sectors: ["Weinbau", "Tourismus"],
      profile: "Größte Weinbaugemeinde Deutschlands mit Hambacher Schloss",
    },
    primaryLegalArea: "Weinrecht",
    secondaryLegalAreas: ["Agrarrecht", "Erbrecht"],
    landmarks: ["Hambacher Schloss", "Weinstraße"],
    mapCoords: coords(8.15, 49.35),
    nearbySlugs: ["landau-in-der-pfalz", "speyer", "frankenthal-pfalz"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "neustadt-an-der-weinstrasse",
      heroSubtitle:
        "Für Kanzleien an der Weinstraße — wo Deutschlands größte Weinbaugemeinde und das Hambacher Schloss typische Mandatsfelder bilden.",
      introParagraphs: [
        "Neustadt an der Weinstraße ist kreisfreie Stadt und größte Weinbaugemeinde Deutschlands. Weinbau und Tourismus prägen die Wirtschaft — das Hambacher Schloss ist die „Wiege der Demokratie“.",
        "Agrar-, Wein- und Erbrecht sind hier zentral. Mandanten aus Weinwirtschaft und Familienbetrieben suchen gezielt nach Kanzleien mit regionalem Bezug.",
      ],
      courtsNarrative:
        "Amtsgericht Neustadt an der Weinstraße, Landgericht Frankenthal (Pfalz), Pfälzisches OLG Zweibrücken. Der Sprung nach Frankenthal ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Weinbau und Tourismus erzeugen Mandate in Agrar-, Wein- und Erbrecht — besonders bei Hofübergaben und Weingüter-Nachfolge.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Weingut prüft Schenkung an Kinder — der Winzer sucht 'Erbrecht Neustadt Weinstraße'.",
      faq: standardCityFaq(
        "Neustadt an der Weinstraße",
        {
          amtsgericht: "Amtsgericht Neustadt an der Weinstraße",
          landgericht: "Landgericht Frankenthal (Pfalz)",
          oberlandesgericht: OLG_ZWEIBRUECKEN,
        },
        [
          {
            q: "Warum ist für Neustadt das LG Frankenthal zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Rheinland-Pfalz. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Neustadt?",
            a: "Wein-, Agrar- und Erbrecht stehen im Weinbau-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Neustadt und die Deutsche Weinstraße — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "frankenthal-pfalz",
    name: "Frankenthal (Pfalz)",
    bundesland: RLP,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 49000, label: "rund 49.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Frankenthal (Pfalz)",
      landgericht: "Landgericht Frankenthal (Pfalz)",
      oberlandesgericht: OLG_ZWEIBRUECKEN,
    },
    economy: {
      sectors: ["Maschinen-/Pumpenbau", "Industrie"],
      keyEmployersOrClusters: ["KSB"],
      profile: "Industriestadt in der Pfalz mit Pumpenbau (KSB)",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Vertragsrecht"],
    landmarks: ["Erkenbert-Ruine", "Strohhutfest"],
    mapCoords: coords(8.35, 49.54),
    nearbySlugs: ["mannheim", "mainz", "worms", "speyer"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "frankenthal-pfalz",
      heroSubtitle:
        "Für Kanzleien in der Pfalz — wo KSB, Pumpenbau und Industrie typische Mandatsfelder bilden.",
      introParagraphs: [
        "Frankenthal (Pfalz) ist kreisfreie Industriestadt. KSB und Pumpenbau prägen den Arbeitsmarkt — Erkenbert-Ruine und Strohhutfest sind die Wahrzeichen.",
        "Arbeits- und Handelsrecht sind hier zentral. Mandanten aus Werk und Mittelstand erwarten online schnelle Orientierung.",
      ],
      courtsNarrative:
        "Amtsgericht Frankenthal (Pfalz), Landgericht Frankenthal (Pfalz), Pfälzisches OLG Zweibrücken. Beide Instanzen liegen in Frankenthal.",
      economyNarrative:
        "Maschinen- und Pumpenbau (KSB) machen Arbeitsrecht zum Kernsuchfeld — daneben Handels- und Vertragsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Betriebsänderung bei KSB sucht ein Mitarbeiter 'Arbeitsrecht Frankenthal'.",
      faq: standardCityFaq(
        "Frankenthal (Pfalz)",
        {
          amtsgericht: "Amtsgericht Frankenthal (Pfalz)",
          landgericht: "Landgericht Frankenthal (Pfalz)",
          oberlandesgericht: OLG_ZWEIBRUECKEN,
        },
        [
          {
            q: "Liegen AG und LG in Frankenthal?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Pfalz.",
          },
          {
            q: "Welche Branchen prägen Frankenthal?",
            a: "Maschinen- und Pumpenbau (KSB) erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Frankenthal und die Pfalz — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "bad-kreuznach",
    name: "Bad Kreuznach",
    bundesland: RLP,
    kreisOrBezirk: "Landkreis Bad Kreuznach",
    stadtTyp: "Kreisstadt",
    population: { approx: 51000, label: "rund 51.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Bad Kreuznach",
      landgericht: "Landgericht Bad Kreuznach",
      oberlandesgericht: OLG_KOBLENZ,
    },
    economy: {
      sectors: ["Weinbau", "Kur/Gesundheit", "Maschinenbau"],
      profile: "Kur- und Weinstadt an der Nahe",
    },
    primaryLegalArea: "Weinrecht",
    secondaryLegalAreas: ["Agrarrecht", "Arbeitsrecht"],
    landmarks: ["Brückenhäuser", "Salinental"],
    mapCoords: coords(7.87, 49.85),
    nearbySlugs: ["mainz", "koblenz", "trier", "neuwied"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "bad-kreuznach",
      heroSubtitle:
        "Für Kanzleien an der Nahe — wo Weinbau, Kur und Brückenhäuser typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Bad Kreuznach ist Kreisstadt an der Nahe. Weinbau, Kur/Gesundheit und Maschinenbau prägen die Wirtschaft — Brückenhäuser und Salinental sind die Wahrzeichen.",
        "Agrar-, Wein- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Weinwirtschaft, Gesundheitswesen und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Bad Kreuznach, Landgericht Bad Kreuznach, OLG Koblenz. Beide Instanzen liegen in Bad Kreuznach — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Weinbau, Kur und Maschinenbau erzeugen Mandate in Agrar-, Wein- und Arbeitsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Winzer an der Nahe prüft neue Düngemittelvorschriften — er sucht 'Weinrecht Bad Kreuznach'.",
      faq: standardCityFaq(
        "Bad Kreuznach",
        {
          amtsgericht: "Amtsgericht Bad Kreuznach",
          landgericht: "Landgericht Bad Kreuznach",
          oberlandesgericht: OLG_KOBLENZ,
        },
        [
          {
            q: "Liegen AG und LG in Bad Kreuznach?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Region.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Bad Kreuznach?",
            a: "Wein-, Agrar- und Arbeitsrecht stehen im Wein- und Kur-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Bad Kreuznach und die Nahe — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "speyer",
    name: "Speyer",
    bundesland: RLP,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 49000, label: "rund 49.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Speyer",
      landgericht: "Landgericht Frankenthal (Pfalz)",
      oberlandesgericht: OLG_ZWEIBRUECKEN,
    },
    economy: {
      sectors: ["Tourismus", "Technik-Museum", "Verwaltung"],
      profile: "UNESCO-Welterbestadt mit Kaiserdom und Technik-Museum",
    },
    primaryLegalArea: "Tourismusrecht",
    secondaryLegalAreas: ["Verwaltungsrecht", "Erbrecht"],
    landmarks: ["UNESCO-Welterbe Kaiserdom Speyer"],
    mapCoords: coords(8.43, 49.32),
    nearbySlugs: ["mannheim", "mainz", "worms", "frankenthal-pfalz"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "speyer",
      heroSubtitle:
        "Für Kanzleien am Kaiserdom — wo UNESCO-Welterbe, Technik-Museum und Tourismus typische Mandatsfelder bilden.",
      introParagraphs: [
        "Speyer ist kreisfreie UNESCO-Welterbestadt. Kaiserdom, Technik-Museum und Tourismus prägen die Wirtschaft — dazu kommen Verwaltung durch Kirchen und Hochschule.",
        "Tourismus-, Verwaltungs- und Erbrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gastronomie, Denkmalschutz und Nachfolgefragen.",
      ],
      courtsNarrative:
        "Amtsgericht Speyer, Landgericht Frankenthal (Pfalz), Pfälzisches OLG Zweibrücken. Der Sprung nach Frankenthal ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Tourismus, Technik-Museum und Verwaltung erzeugen Mandate in Tourismus-, Verwaltungs- und Erbrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Gastronom nahe dem Dom prüft neue Lärmschutzauflagen — er sucht 'Gastronomierecht Speyer'.",
      faq: standardCityFaq(
        "Speyer",
        {
          amtsgericht: "Amtsgericht Speyer",
          landgericht: "Landgericht Frankenthal (Pfalz)",
          oberlandesgericht: OLG_ZWEIBRUECKEN,
        },
        [
          {
            q: "Warum ist für Speyer das LG Frankenthal zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Rheinland-Pfalz. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Speyer?",
            a: "Tourismus-, Verwaltungs- und Erbrecht stehen im Welterbe- und Tourismus-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Speyer und die Pfalz — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "pirmasens",
    name: "Pirmasens",
    bundesland: RLP,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 39500, label: "rund 39.500", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Pirmasens",
      landgericht: "Landgericht Zweibrücken",
      oberlandesgericht: OLG_ZWEIBRUECKEN,
    },
    economy: {
      sectors: ["Schuhindustrie", "Strukturwandel", "Chemie/Kunststoff"],
      profile: "Schuhstadt im Strukturwandel mit Chemie und Kunststoff",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Insolvenzrecht", "Sozialrecht"],
    landmarks: ["Schuhmuseum", "Exe"],
    mapCoords: coords(7.6, 49.2),
    nearbySlugs: ["landau-in-der-pfalz", "idar-oberstein"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "pirmasens",
      heroSubtitle:
        "Für Kanzleien in der Westpfalz — wo Schuhindustrie, Strukturwandel und Chemie typische Mandatsfelder bilden.",
      introParagraphs: [
        "Pirmasens ist kreisfreie Stadt in der Westpfalz — etwas unter dem üblichen Einwohner-Zielband, aber wirtschaftlich relevant. Schuhindustrie-Tradition, Strukturwandel und Chemie/Kunststoff prägen den Markt.",
        "Arbeits-, Insolvenz- und Sozialrecht sind hier zentral. Mandanten erwarten online Orientierung zu Industriewandel und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Pirmasens, Landgericht Zweibrücken, Pfälzisches OLG Zweibrücken. Der Bezug zu Zweibrücken ist für Mandanten oft bekannt — das OLG sitzt in der Region.",
      economyNarrative:
        "Schuhindustrie-Strukturwandel und Chemie machen Arbeitsrecht zum Kernsuchfeld — daneben Insolvenz- und Sozialrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Insolvenzantrag eines Zulieferers sucht ein Arbeitnehmer 'Arbeitsrecht Pirmasens Insolvenz'.",
      faq: standardCityFaq(
        "Pirmasens",
        {
          amtsgericht: "Amtsgericht Pirmasens",
          landgericht: "Landgericht Zweibrücken",
          oberlandesgericht: OLG_ZWEIBRUECKEN,
        },
        [
          {
            q: "Welche Rechtsgebiete passen zu Pirmasens?",
            a: "Arbeitsrecht, Insolvenzrecht und Sozialrecht stehen im Strukturwandel-Kontext oft im Vordergrund.",
          },
          {
            q: "Warum ist für Pirmasens das LG Zweibrücken zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Rheinland-Pfalz. Eine Kanzlei-Website kann das verständlich erklären.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Pirmasens und die Westpfalz — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "idar-oberstein",
    name: "Idar-Oberstein",
    bundesland: RLP,
    kreisOrBezirk: "Landkreis Birkenfeld",
    stadtTyp: "Kreisstadt",
    population: { approx: 28000, label: "rund 28.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Idar-Oberstein",
      landgericht: "Landgericht Bad Kreuznach",
      oberlandesgericht: OLG_KOBLENZ,
    },
    economy: {
      sectors: ["Edelstein/Schmuck"],
      profile: "Weltzentrum der Edelstein- und Schmuckindustrie",
    },
    primaryLegalArea: "Handels- und Markenrecht",
    secondaryLegalAreas: ["Gewerblicher Rechtsschutz", "Handelsrecht"],
    landmarks: ["Felsenkirche", "Edelsteinminen"],
    mapCoords: coords(7.31, 49.71),
    nearbySlugs: ["bad-kreuznach", "pirmasens"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "idar-oberstein",
      heroSubtitle:
        "Für Kanzleien im Edelsteinland — wo Schmuckindustrie, Felsenkirche und Markenrecht typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Idar-Oberstein liegt im Landkreis Birkenfeld — deutlich unter dem üblichen Einwohner-Zielband, aber weltweit bekannt für Edelstein- und Schmuckindustrie. Felsenkirche und Edelsteinminen sind die Wahrzeichen.",
        "Handels- und Markenrecht sind hier zentral. Mandanten aus Schmuckhandel und Verarbeitung suchen gezielt nach Kanzleien mit Branchenbezug.",
      ],
      courtsNarrative:
        "Amtsgericht Idar-Oberstein, Landgericht Bad Kreuznach, OLG Koblenz. Der Sprung nach Bad Kreuznach ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Edelstein- und Schmuckindustrie erzeugen Mandate in Handels-, Marken- und gewerblichem Rechtsschutz.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Schmuckhändler prüft Markenverletzung durch Importprodukt — er sucht 'Markenrecht Idar-Oberstein'.",
      faq: standardCityFaq(
        "Idar-Oberstein",
        {
          amtsgericht: "Amtsgericht Idar-Oberstein",
          landgericht: "Landgericht Bad Kreuznach",
          oberlandesgericht: OLG_KOBLENZ,
        },
        [
          {
            q: "Welche Rechtsgebiete passen zu Idar-Oberstein?",
            a: "Handels- und Markenrecht stehen im Edelstein- und Schmuck-Kontext oft im Vordergrund.",
          },
          {
            q: "Warum ist für Idar-Oberstein das LG Bad Kreuznach zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Rheinland-Pfalz. Eine Kanzlei-Website kann das verständlich erklären.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Idar-Oberstein und das Edelsteinland — ohne erfundene Referenzen.",
    },
  },
];

export const rheinlandPfalzFacts: CityFacts[] = cities.map((city) => {
  const { content, ...facts } = city;
  void content;
  return facts;
});

export const rheinlandPfalzContent: Record<string, CityRecord["content"]> =
  Object.fromEntries(cities.map((c) => [c.slug, c.content]));

export const rheinlandPfalzRecords: CityRecord[] = cities.map(
  ({ content, ...facts }) => ({ ...facts, content }),
);
