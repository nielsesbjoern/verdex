import { lonLatToMapCoords } from "../germanyMap";
import type { CityFacts, CityRecord } from "../types";
import { NRW, standardCityFaq } from "./nrw-shared";

type CityDef = CityFacts & {
  content: CityRecord["content"];
};

function coords(lon: number, lat: number) {
  return { ...lonLatToMapCoords(lon, lat), anchor: "start" as const };
}

const cities: CityDef[] = [
  {
    slug: "detmold",
    name: "Detmold",
    bundesland: NRW,
    kreisOrBezirk: "Kreis Lippe",
    stadtTyp: "Kreisstadt und Regierungssitz",
    population: { approx: 74000, label: "rund 74.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Detmold",
      landgericht: "Landgericht Detmold",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Verwaltung", "Möbel", "Holzwirtschaft"],
      profile: "Verwaltungsstadt in Ostwestfalen mit Holz- und Möbelwirtschaft",
    },
    primaryLegalArea: "Verwaltungsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Handelsrecht"],
    landmarks: ["Hermannsdenkmal", "Residenzschloss Detmold"],
    mapCoords: coords(8.88, 51.94),
    nearbySlugs: ["muenster", "bielefeld", "guetersloh", "minden"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "detmold",
      heroSubtitle:
        "Für Kanzleien in Lippe — wo Regierungssitz, Verwaltung und Holzwirtschaft typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Detmold ist Kreisstadt im Kreis Lippe und Sitz der Bezirksregierung. Verwaltung, Möbelwirtschaft und holzverarbeitende Betriebe prägen die regionale Wirtschaftsstruktur.",
        "Verwaltungs-, Arbeits- und Handelsrecht sind hier besonders relevant. Mandanten erwarten online eine klare Einordnung der zuständigen Gerichte und regionalen Besonderheiten.",
      ],
      courtsNarrative:
        "Amtsgericht Detmold, Landgericht Detmold, OLG Hamm. Dass AG und LG direkt in Detmold sitzen, ist für viele Mandanten ein wichtiger Vertrauenspunkt.",
      economyNarrative:
        "Verwaltung sowie Möbel- und Holzwirtschaft erzeugen laufend Mandate im Verwaltungs-, Arbeits- und Handelsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Handwerksbetrieb beantragt eine baurechtliche Erweiterung und sucht nach schneller Einordnung zu Genehmigungswegen in Detmold.",
      faq: standardCityFaq(
        "Detmold",
        {
          amtsgericht: "Amtsgericht Detmold",
          landgericht: "Landgericht Detmold",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Welche Gerichte sind für Detmold zuständig?",
            a: "In Detmold liegen sowohl Amtsgericht als auch Landgericht; in der nächsten Instanz ist das OLG Hamm zuständig.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Detmold?",
            a: "Verwaltungs-, Arbeits- und Handelsrecht sind im Umfeld von Regierungssitz, Mittelstand und Möbelwirtschaft besonders sichtbar.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Detmold und den Kreis Lippe nachvollziehbar — ohne erfundene Referenzen oder Fallgeschichten.",
    },
  },
  {
    slug: "lippstadt",
    name: "Lippstadt",
    bundesland: NRW,
    kreisOrBezirk: "Kreis Soest",
    stadtTyp: "Kreisstadt",
    population: { approx: 68000, label: "rund 68.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Lippstadt",
      landgericht: "Landgericht Paderborn",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Automotive-Zulieferer", "Industrie", "Mittelstand"],
      keyEmployersOrClusters: ["Hella"],
      profile: "Industriestandort im Kreis Soest mit starker Automotive-Prägung",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Gewerberecht"],
    landmarks: ["Große Marktkirche", "Altstadt an der Lippe"],
    mapCoords: coords(8.34, 51.67),
    nearbySlugs: ["bielefeld", "guetersloh", "detmold", "ahlen"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "lippstadt",
      heroSubtitle:
        "Für Kanzleien in Lippstadt — wo Automotive, Mittelstand und Gewerbe typisch arbeits- und handelsrechtliche Themen auslösen.",
      introParagraphs: [
        "Lippstadt ist eine zentrale Wirtschaftsadresse im Kreis Soest. Industrie und Zuliefererstrukturen rund um Hella prägen den Arbeitsmarkt und die Vertragslandschaft.",
        "Arbeits-, Handels- und gewerberechtliche Fragen stehen für Unternehmen und Beschäftigte gleichermassen im Fokus. Eine klare lokale Ansprache erleichtert die Mandatsanbahnung.",
      ],
      courtsNarrative:
        "Amtsgericht Lippstadt, Landgericht Paderborn, OLG Hamm. Der Übergang zum LG Paderborn ist für viele Suchende nicht selbsterklärend.",
      economyNarrative:
        "Automotive-Zulieferung, Industrie und Gewerbe erzeugen typische Konflikte im Arbeits-, Handels- und Gewerberecht.",
      localCaseExample:
        "Stellen Sie sich vor: Nach einer Umstrukturierung im Zulieferbetrieb will ein Mitarbeiter seine Rechte aus einer Änderungskündigung prüfen lassen.",
      faq: standardCityFaq(
        "Lippstadt",
        {
          amtsgericht: "Amtsgericht Lippstadt",
          landgericht: "Landgericht Paderborn",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Warum ist für Lippstadt das LG Paderborn zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der regionalen Gerichtsorganisation in NRW und sollte auf der Kanzlei-Website transparent erklärt werden.",
          },
          {
            q: "Welche Mandatsthemen sind in Lippstadt häufig?",
            a: "Im industriellen Umfeld treten besonders arbeits-, handels- und gewerberechtliche Fragestellungen auf.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex arbeitet die lokalen Merkmale von Lippstadt strukturiert auf — ohne erfundene Referenzen oder Fallzahlen.",
    },
  },
  {
    slug: "luedenscheid",
    name: "Lüdenscheid",
    bundesland: NRW,
    kreisOrBezirk: "Märkischer Kreis",
    stadtTyp: "Kreisstadt",
    population: { approx: 71000, label: "rund 71.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Lüdenscheid",
      landgericht: "Landgericht Hagen",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Kunststoff", "Metall", "Automotive-Zulieferer"],
      profile: "Industriezentrum im Südwestfalen mit Zuliefer- und Werkstoffkompetenz",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Insolvenzrecht", "Produkthaftungsrecht"],
    landmarks: ["Stern-Center", "Phenomenta"],
    mapCoords: coords(7.63, 51.22),
    nearbySlugs: ["wuppertal", "luedenscheid", "unna", "gummersbach"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "luedenscheid",
      heroSubtitle:
        "Für Kanzleien in Lüdenscheid — wo Kunststoff, Metall und Automotive-Zulieferung typische Industriemandate formen.",
      introParagraphs: [
        "Lüdenscheid ist ein industriell geprägter Standort im Märkischen Kreis. Kunststoff- und Metallverarbeitung sowie Zulieferketten für die Automobilwirtschaft sind wirtschaftlich prägend.",
        "Arbeitsrecht, Insolvenzszenarien und produkthaftungsnahe Streitfragen tauchen im regionalen Unternehmensalltag regelmäßig auf.",
      ],
      courtsNarrative:
        "Amtsgericht Lüdenscheid, Landgericht Hagen, OLG Hamm. Für Mandanten ist die Einordnung der Instanzen zwischen Lüdenscheid und Hagen oft erklärungsbedürftig.",
      economyNarrative:
        "Zulieferindustrie und Werkstoffproduktion führen zu Mandaten im Arbeitsrecht sowie bei Insolvenz- und Produkthaftungsfragen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Zulieferer muss nach Rückrufkosten prüfen, ob Regressansprüche gegen einen Vorlieferanten bestehen.",
      faq: standardCityFaq(
        "Lüdenscheid",
        {
          amtsgericht: "Amtsgericht Lüdenscheid",
          landgericht: "Landgericht Hagen",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Welche Gerichtsinstanzen gelten für Lüdenscheid?",
            a: "Zuständig sind das Amtsgericht Lüdenscheid, das Landgericht Hagen und in der Oberinstanz das OLG Hamm.",
          },
          {
            q: "Welche Rechtsgebiete sind in Lüdenscheid besonders relevant?",
            a: "Im industriellen Umfeld spielen Arbeitsrecht, Insolvenzrecht und Produkthaftungsrecht eine wichtige Rolle.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex stellt die Wirtschafts- und Rechtslage in Lüdenscheid faktenbasiert dar — ohne erfundene Portfolio-Aussagen.",
    },
  },
  {
    slug: "iserlohn",
    name: "Iserlohn",
    bundesland: NRW,
    kreisOrBezirk: "Märkischer Kreis",
    stadtTyp: "Kreisstadt",
    population: { approx: 92000, label: "rund 92.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Iserlohn",
      landgericht: "Landgericht Hagen",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Metall", "Draht", "Maschinenbau"],
      profile: "Industriestadt mit Metall- und Drahtverarbeitung in Südwestfalen",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht"],
    landmarks: ["Dechenhöhle", "Danzturm"],
    mapCoords: coords(7.67, 51.38),
    nearbySlugs: ["wuppertal", "iserlohn", "unna", "ahlen"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "iserlohn",
      heroSubtitle:
        "Für Kanzleien in Iserlohn — wo Metall, Draht und Maschinenbau das Mandatsumfeld klar prägen.",
      introParagraphs: [
        "Iserlohn ist ein bedeutender Industriestandort im Märkischen Kreis. Metall- und Drahtverarbeitung sowie Maschinenbau bilden die wirtschaftliche Basis vieler Betriebe.",
        "Arbeits- und handelsrechtliche Fragestellungen entstehen hier oft entlang von Lieferbeziehungen, Schichtsystemen und Produktionsveränderungen.",
      ],
      courtsNarrative:
        "Amtsgericht Iserlohn, Landgericht Hagen, OLG Hamm. Der Bezug zum LG Hagen sollte für Mandanten transparent erklärt werden.",
      economyNarrative:
        "Die industrielle Prägung durch Metall, Draht und Maschinenbau führt regelmäßig zu arbeits- und handelsrechtlichen Mandaten.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Maschinenbauer streitet nach Lieferverzug über Vertragsstrafen und sucht kurzfristig rechtliche Einschätzung.",
      faq: standardCityFaq(
        "Iserlohn",
        {
          amtsgericht: "Amtsgericht Iserlohn",
          landgericht: "Landgericht Hagen",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Welche Gerichte sind für Iserlohn zuständig?",
            a: "Für Iserlohn sind AG Iserlohn, LG Hagen und OLG Hamm die maßgeblichen Instanzen.",
          },
          {
            q: "Welche Rechtsgebiete sind in Iserlohn besonders sichtbar?",
            a: "Im industriellen Alltag stehen vor allem Arbeitsrecht und Handelsrecht im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex analysiert Iserlohn mit lokalem Fokus und ohne erfundene Erfolgsgeschichten.",
    },
  },
  {
    slug: "guetersloh",
    name: "Gütersloh",
    bundesland: NRW,
    kreisOrBezirk: "Kreis Gütersloh",
    stadtTyp: "Kreisstadt",
    population: {
      approx: 101000,
      label: "rund 101.000",
      year: 2024,
      zensusStrittig: true,
    },
    courts: {
      amtsgericht: "Amtsgericht Gütersloh",
      landgericht: "Landgericht Bielefeld",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Medien", "Haushaltsgeräte", "Mittelstand"],
      keyEmployersOrClusters: ["Bertelsmann", "Miele"],
      profile: "Kreisstadt mit starkem Medien- und Industriecluster",
    },
    primaryLegalArea: "Medienrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Handelsrecht"],
    landmarks: ["Stadtpark", "Miele-/Bertelsmann-Zentralen"],
    mapCoords: coords(8.38, 51.91),
    nearbySlugs: ["muenster", "bielefeld", "detmold", "minden"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "guetersloh",
      heroSubtitle:
        "Für Kanzleien in Gütersloh — wo Bertelsmann, Miele und Mittelstand medien- und arbeitsrechtliche Themen treiben.",
      introParagraphs: [
        "Gütersloh liegt an der Schwelle zur Großstadt und wird statistisch teils unterschiedlich eingeordnet. Mit Bertelsmann und Miele hat die Stadt zugleich zwei bundesweit sichtbare Wirtschaftspräger.",
        "Medien-, Arbeits- und Handelsrecht sind im lokalen Suchverhalten besonders naheliegend. Mandanten erwarten eine präzise regionale Positionierung.",
      ],
      courtsNarrative:
        "Amtsgericht Gütersloh, Landgericht Bielefeld, OLG Hamm. Die Zuordnung zum LG Bielefeld sollte auf Kanzleiseiten klar benannt werden.",
      economyNarrative:
        "Medienunternehmen, Industrie und Mittelstand schaffen einen konstanten Bedarf bei medien-, arbeits- und handelsrechtlichen Themen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Angestellter in einem Medienunternehmen möchte eine Wettbewerbsabrede im Arbeitsvertrag prüfen lassen.",
      faq: standardCityFaq(
        "Gütersloh",
        {
          amtsgericht: "Amtsgericht Gütersloh",
          landgericht: "Landgericht Bielefeld",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Ist Gütersloh eine Großstadt?",
            a: "Gütersloh liegt rund um die Großstadtgrenze; je nach Datengrundlage kann die Einordnung unterschiedlich ausfallen.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Gütersloh?",
            a: "Im Umfeld von Medien- und Industrieunternehmen sind Medien-, Arbeits- und Handelsrecht besonders relevant.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex bildet Gütersloh sachlich ab — inklusive der zensusbezogenen Einordnung ohne spekulative Aussagen.",
    },
  },
  {
    slug: "minden",
    name: "Minden",
    bundesland: NRW,
    kreisOrBezirk: "Kreis Minden-Lübbecke",
    stadtTyp: "Kreisstadt",
    population: { approx: 80000, label: "rund 80.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Minden",
      landgericht: "Landgericht Bielefeld",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Logistik", "Industrie", "Infrastruktur"],
      keyEmployersOrClusters: ["Melitta", "Wago"],
      profile: "Standort am Wasserstraßenkreuz mit Industrie und Logistik",
    },
    primaryLegalArea: "Transportrecht",
    secondaryLegalAreas: ["Handelsrecht", "Arbeitsrecht"],
    landmarks: ["Wasserstraßenkreuz", "Mindener Dom"],
    mapCoords: coords(8.91, 52.29),
    nearbySlugs: ["bielefeld", "detmold", "herford", "guetersloh"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "minden",
      heroSubtitle:
        "Für Kanzleien in Minden — wo Wasserstraßenkreuz, Logistik und Industrie transportrechtliche Mandate erzeugen.",
      introParagraphs: [
        "Minden ist Kreisstadt im Kreis Minden-Lübbecke und durch das Wasserstraßenkreuz ein wichtiger Infrastrukturknoten. Unternehmen wie Melitta und Wago prägen das wirtschaftliche Umfeld.",
        "Transport-, Handels- und arbeitsrechtliche Themen entstehen hier regelmäßig aus Lieferketten, Logistikverträgen und Industriearbeit.",
      ],
      courtsNarrative:
        "Amtsgericht Minden, Landgericht Bielefeld, OLG Hamm. Gerade für auswärtige Mandanten ist der Gerichtsweg über Bielefeld nicht immer sofort klar.",
      economyNarrative:
        "Logistikdrehscheibe und Industriecluster begünstigen Mandate im Transportrecht sowie angrenzend im Handels- und Arbeitsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Spediteur streitet nach Verzögerungen an einer Umschlagstelle über Haftung aus dem Frachtvertrag.",
      faq: standardCityFaq(
        "Minden",
        {
          amtsgericht: "Amtsgericht Minden",
          landgericht: "Landgericht Bielefeld",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Welche Gerichte gelten für Minden?",
            a: "Für Minden sind AG Minden, LG Bielefeld und OLG Hamm die maßgeblichen Instanzen.",
          },
          {
            q: "Welche Branchen machen Minden rechtlich besonders?",
            a: "Logistik und Industrie rund um das Wasserstraßenkreuz führen häufig zu transport-, handels- und arbeitsrechtlichen Fragen.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex beschreibt Minden entlang realer Wirtschafts- und Gerichtsstrukturen — ohne erfundene Referenzfälle.",
    },
  },
  {
    slug: "herford",
    name: "Herford",
    bundesland: NRW,
    kreisOrBezirk: "Kreis Herford",
    stadtTyp: "Kreisstadt",
    population: { approx: 66000, label: "rund 66.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Herford",
      landgericht: "Landgericht Bielefeld",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Möbel", "Einzelhandel", "Dienstleistungen"],
      profile: "OWL-Standort mit Möbelwirtschaft und Handelsstrukturen",
    },
    primaryLegalArea: "Handelsrecht",
    secondaryLegalAreas: ["Arbeitsrecht"],
    landmarks: ["MARTa Herford", "Münsterkirche"],
    mapCoords: coords(8.67, 52.11),
    nearbySlugs: ["bielefeld", "dortmund", "guetersloh", "minden"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "herford",
      heroSubtitle:
        "Für Kanzleien in Herford — wo Möbelwirtschaft, Handel und Dienstleistung typische Mandatslagen erzeugen.",
      introParagraphs: [
        "Herford ist Kreisstadt in Ostwestfalen mit enger Verbindung zur Möbelregion OWL. Handel, Dienstleistung und produzierendes Gewerbe bilden das Rückgrat der lokalen Wirtschaft.",
        "Handels- und Arbeitsrecht sind für Unternehmen und Beschäftigte besonders relevant. Eine lokal verankerte Ansprache erleichtert die digitale Auffindbarkeit.",
      ],
      courtsNarrative:
        "Amtsgericht Herford, Landgericht Bielefeld, OLG Hamm. Für Suchende ist die Zuständigkeit des LG Bielefeld häufig ein zentraler Orientierungsfaktor.",
      economyNarrative:
        "Möbelwirtschaft und Handel führen typischerweise zu Mandaten im Handelsrecht und in arbeitsrechtlichen Konflikten.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Möbelhändler hat Streit über Lieferfristen und Gewährleistung bei einem Großauftrag.",
      faq: standardCityFaq(
        "Herford",
        {
          amtsgericht: "Amtsgericht Herford",
          landgericht: "Landgericht Bielefeld",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Warum ist für Herford das LG Bielefeld zuständig?",
            a: "Die Instanzzuständigkeit folgt der Gerichtsorganisation in NRW und sollte für Mandanten klar kommuniziert werden.",
          },
          {
            q: "Welche Rechtsgebiete sind in Herford naheliegend?",
            a: "Im Umfeld von Möbelwirtschaft und Handel sind vor allem Handelsrecht und Arbeitsrecht relevant.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex bereitet Herford mit regionalen Fakten auf — ohne erfundene Mandatserfolge oder Referenznamen.",
    },
  },
  {
    slug: "dinslaken",
    name: "Dinslaken",
    bundesland: NRW,
    kreisOrBezirk: "Kreis Wesel",
    stadtTyp: "Kreisstadt",
    population: { approx: 67000, label: "rund 67.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Dinslaken",
      landgericht: "Landgericht Duisburg",
      oberlandesgericht: "OLG Düsseldorf",
    },
    economy: {
      sectors: ["Logistik", "Dienstleistung", "Strukturwandel"],
      profile: "Ehemaliger Bergbaustandort mit Logistik- und Dienstleistungsfokus",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Sozialrecht", "Mietrecht"],
    landmarks: ["Burgtheater Dinslaken", "Bergpark Lohberg"],
    mapCoords: coords(6.74, 51.56),
    nearbySlugs: ["oberhausen", "duesseldorf", "essen", "kleve"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "dinslaken",
      heroSubtitle:
        "Für Kanzleien in Dinslaken — wo Strukturwandel, Logistik und sozialrechtliche Fragen zusammenlaufen.",
      introParagraphs: [
        "Dinslaken im Kreis Wesel ist von Bergbaugeschichte und wirtschaftlichem Strukturwandel geprägt. Logistik, Dienstleistungen und neue Gewerbeflächen prägen die heutige Entwicklung.",
        "Arbeits-, Sozial- und mietrechtliche Themen treten im Alltag vieler Mandanten sichtbar hervor, gerade bei beruflichen und wohnungsbezogenen Veränderungen.",
      ],
      courtsNarrative:
        "Amtsgericht Dinslaken, Landgericht Duisburg, OLG Düsseldorf. Die Zuordnung zwischen Dinslaken und Duisburg sollte auf lokalen Seiten klar benannt sein.",
      economyNarrative:
        "Der Wandel vom Bergbau hin zu Logistik und Dienstleistung fördert Mandate im Arbeits- und Sozialrecht sowie bei Mietkonflikten.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Standortschließung prüft ein Beschäftigter Ansprüche aus Sozialplan und arbeitsrechtlicher Abfindung.",
      faq: standardCityFaq(
        "Dinslaken",
        {
          amtsgericht: "Amtsgericht Dinslaken",
          landgericht: "Landgericht Duisburg",
          oberlandesgericht: "OLG Düsseldorf",
        },
        [
          {
            q: "Welche Instanzen sind für Dinslaken zuständig?",
            a: "Amtsgericht Dinslaken, Landgericht Duisburg und OLG Düsseldorf bilden den relevanten Instanzenzug.",
          },
          {
            q: "Welche Rechtsgebiete sind in Dinslaken besonders gefragt?",
            a: "Im Strukturwandel-Kontext treten vor allem Arbeitsrecht, Sozialrecht und Mietrecht in den Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex ordnet Dinslaken entlang realer Strukturwandelthemen ein — ohne erfundene Fallbeispiele.",
    },
  },
  {
    slug: "castrop-rauxel",
    name: "Castrop-Rauxel",
    bundesland: NRW,
    kreisOrBezirk: "Kreis Recklinghausen",
    stadtTyp: "Kreisstadt",
    population: { approx: 74000, label: "rund 74.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Castrop-Rauxel",
      landgericht: "Landgericht Dortmund",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Chemie", "Logistik", "Ruhrgebiet-Dienstleistungen"],
      profile: "Ruhrgebietsstadt mit gewerblichen Flächen und Logistikachsen",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Umweltrecht", "Sozialrecht"],
    landmarks: ["Europaplatz", "Schloss Bladenhorst"],
    mapCoords: coords(7.31, 51.56),
    nearbySlugs: ["dortmund", "essen", "bochum", "unna"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "castrop-rauxel",
      heroSubtitle:
        "Für Kanzleien in Castrop-Rauxel — wo Chemie, Logistik und Ruhrgebietswandel arbeits- und umweltrechtliche Themen setzen.",
      introParagraphs: [
        "Castrop-Rauxel liegt im Kreis Recklinghausen an zentralen Verkehrsachsen des Ruhrgebiets. Chemienahe Gewerbe, Logistik und Dienstleistungen sind wirtschaftlich prägend.",
        "Arbeits-, Umwelt- und sozialrechtliche Fragen entstehen oft aus betrieblicher Transformation und neuen Standortentwicklungen.",
      ],
      courtsNarrative:
        "Amtsgericht Castrop-Rauxel, Landgericht Dortmund, OLG Hamm. Die Orientierung auf das LG Dortmund ist für viele Mandanten ein wichtiger Informationsteil.",
      economyNarrative:
        "Chemie und Logistik in einer Transformationsregion erzeugen regelmäßig Mandate im Arbeits-, Umwelt- und Sozialrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Nachbarschaftsverband möchte Emissionsfragen rund um eine neue Gewerbeansiedlung rechtlich prüfen lassen.",
      faq: standardCityFaq(
        "Castrop-Rauxel",
        {
          amtsgericht: "Amtsgericht Castrop-Rauxel",
          landgericht: "Landgericht Dortmund",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Warum führt der Instanzenzug von Castrop-Rauxel über Dortmund?",
            a: "Die Gerichtsorganisation in NRW weist Castrop-Rauxel dem Landgericht Dortmund zu; die Oberinstanz ist das OLG Hamm.",
          },
          {
            q: "Welche Themen sind in Castrop-Rauxel rechtlich typisch?",
            a: "Im lokalen Umfeld sind besonders Arbeitsrecht sowie umwelt- und sozialrechtliche Fragen sichtbar.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex arbeitet Castrop-Rauxel mit Fokus auf reale Standortfaktoren auf — ohne erfundene Erfolgsnarrative.",
    },
  },
  {
    slug: "gummersbach",
    name: "Gummersbach",
    bundesland: NRW,
    kreisOrBezirk: "Oberbergischer Kreis",
    stadtTyp: "Kreisstadt",
    population: { approx: 52000, label: "rund 52.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Gummersbach",
      landgericht: "Landgericht Köln",
      oberlandesgericht: "OLG Köln",
    },
    economy: {
      sectors: ["Maschinenbau", "Industrie", "Mittelstand"],
      profile: "Kreisstadt im Bergischen Land mit produzierendem Schwerpunkt",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht"],
    landmarks: ["Schloss Homburg", "Aggertalsperre"],
    mapCoords: coords(7.57, 51.03),
    nearbySlugs: ["solingen", "wuppertal", "siegen", "luedenscheid"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "gummersbach",
      heroSubtitle:
        "Für Kanzleien in Gummersbach — wo Maschinenbau und Mittelstand im Bergischen Land typische Mandate erzeugen.",
      introParagraphs: [
        "Gummersbach ist Kreisstadt des Oberbergischen Kreises und wirtschaftlich vom Maschinenbau sowie vom industriellen Mittelstand geprägt.",
        "Arbeits- und handelsrechtliche Konflikte entstehen häufig entlang von Produktionsaufträgen, Lieferbeziehungen und Personalthemen.",
      ],
      courtsNarrative:
        "Amtsgericht Gummersbach, Landgericht Köln, OLG Köln. Die Zuständigkeit über Köln ist für viele Mandanten erklärungsbedürftig.",
      economyNarrative:
        "Maschinenbau und mittelständische Industrie führen regelmäßig zu Mandaten im Arbeits- und Handelsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Zulieferbetrieb möchte wegen Zahlungsverzug eines Auftraggebers kurzfristig handelsrechtliche Schritte einleiten.",
      faq: standardCityFaq(
        "Gummersbach",
        {
          amtsgericht: "Amtsgericht Gummersbach",
          landgericht: "Landgericht Köln",
          oberlandesgericht: "OLG Köln",
        },
        [
          {
            q: "Welche Gerichte sind für Gummersbach zuständig?",
            a: "Der Instanzenzug verläuft über AG Gummersbach, LG Köln und OLG Köln.",
          },
          {
            q: "Welche Rechtsgebiete sind in Gummersbach besonders naheliegend?",
            a: "Im Umfeld von Maschinenbau und Mittelstand treten vor allem Arbeits- und Handelsrecht hervor.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex fasst Gummersbachs Rechts- und Wirtschaftsprofil transparent zusammen — ohne erfundene Fallreferenzen.",
    },
  },
  {
    slug: "kleve",
    name: "Kleve",
    bundesland: NRW,
    kreisOrBezirk: "Kreis Kleve",
    stadtTyp: "Kreisstadt",
    population: { approx: 54000, label: "rund 54.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Kleve",
      landgericht: "Landgericht Kleve",
      oberlandesgericht: "OLG Düsseldorf",
    },
    economy: {
      sectors: ["Lebensmittel", "Hochschule", "Grenzhandel"],
      keyEmployersOrClusters: ["Hochschule Rhein-Waal"],
      profile: "Grenzstadt mit Hochschulstandort und deutsch-niederländischer Verflechtung",
    },
    primaryLegalArea: "Grenzüberschreitendes Recht",
    secondaryLegalAreas: ["Handelsrecht", "Arbeitsrecht"],
    landmarks: ["Schwanenburg", "Forstgarten"],
    mapCoords: coords(6.13, 51.79),
    nearbySlugs: ["aachen", "krefeld", "koeln", "dinslaken"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "kleve",
      heroSubtitle:
        "Für Kanzleien in Kleve — wo Grenzlage, Hochschule und Handel mit den Niederlanden typische Mandate bestimmen.",
      introParagraphs: [
        "Kleve ist Kreisstadt an der niederländischen Grenze und durch die Hochschule Rhein-Waal auch akademisch geprägt. Lebensmittelwirtschaft und grenznahe Handelsbeziehungen sind wichtige Faktoren.",
        "Grenzüberschreitendes Recht, Handelsrecht und arbeitsrechtliche Fragen treten im Alltag von Unternehmen und Beschäftigten regelmäßig auf.",
      ],
      courtsNarrative:
        "Amtsgericht Kleve, Landgericht Kleve, OLG Düsseldorf. Dass AG und LG in Kleve angesiedelt sind, kann für Mandanten ein klarer Orientierungsvorteil sein.",
      economyNarrative:
        "Grenzhandel, Lebensmittelbranche und Hochschulbezug schaffen Mandate mit internationalem Einschlag und klassischem Wirtschaftsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Händler mit Lieferungen in die Niederlande braucht Unterstützung bei grenzüberschreitenden Vertragsklauseln.",
      faq: standardCityFaq(
        "Kleve",
        {
          amtsgericht: "Amtsgericht Kleve",
          landgericht: "Landgericht Kleve",
          oberlandesgericht: "OLG Düsseldorf",
        },
        [
          {
            q: "Liegen AG und LG für Kleve in derselben Stadt?",
            a: "Ja, sowohl Amtsgericht als auch Landgericht befinden sich in Kleve; die Oberinstanz ist das OLG Düsseldorf.",
          },
          {
            q: "Welche Themen sind in Kleve durch die Grenzlage typisch?",
            a: "Besonders häufig sind grenzüberschreitende Vertragsfragen sowie handels- und arbeitsrechtliche Themen mit NL-Bezug.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex bildet Kleve mit realistischen Grenz- und Wirtschaftsbezugen ab — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "euskirchen",
    name: "Euskirchen",
    bundesland: NRW,
    kreisOrBezirk: "Kreis Euskirchen",
    stadtTyp: "Kreisstadt",
    population: { approx: 60000, label: "rund 60.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Euskirchen",
      landgericht: "Landgericht Bonn",
      oberlandesgericht: "OLG Köln",
    },
    economy: {
      sectors: ["Lebensmittel", "Logistik", "Dienstleistung"],
      profile: "Kreisstadt mit industriellen und logistischen Strukturen im Rheinland",
    },
    primaryLegalArea: "Handelsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Versicherungsrecht"],
    landmarks: ["Hardtburg", "Innenstadt Euskirchen"],
    mapCoords: coords(6.79, 50.66),
    nearbySlugs: ["aachen", "koeln", "bonn", "gummersbach"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "euskirchen",
      heroSubtitle:
        "Für Kanzleien in Euskirchen — wo Lebensmittel, Logistik und Hochwasserfolgen 2021 rechtliche Nachfrage prägen.",
      introParagraphs: [
        "Euskirchen ist Kreisstadt mit gemischter Wirtschaftsstruktur aus Lebensmittelwirtschaft, Logistik und regionalem Dienstleistungssektor. Die Hochwasserereignisse 2021 wirken in vielen Rechtsfragen bis heute nach.",
        "Handels-, Arbeits- und versicherungsrechtliche Themen sind daher für Unternehmen wie Privatmandanten besonders relevant.",
      ],
      courtsNarrative:
        "Amtsgericht Euskirchen, Landgericht Bonn, OLG Köln. Der Weg über Bonn in der zweiten Instanz ist für viele Mandanten nicht selbsterklärend.",
      economyNarrative:
        "Wirtschaftsstruktur und Schadensfolgen nach dem Hochwasser begünstigen Mandate im Handels-, Arbeits- und Versicherungsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Betrieb klärt mit seinem Versicherer die Regulierung von Schäden nach Starkregenereignissen.",
      faq: standardCityFaq(
        "Euskirchen",
        {
          amtsgericht: "Amtsgericht Euskirchen",
          landgericht: "Landgericht Bonn",
          oberlandesgericht: "OLG Köln",
        },
        [
          {
            q: "Warum ist für Euskirchen das LG Bonn zuständig?",
            a: "Die Gerichtsorganisation in NRW ordnet Euskirchen dem Landgerichtsbezirk Bonn zu; Oberinstanz ist das OLG Köln.",
          },
          {
            q: "Welche Rechtsgebiete sind in Euskirchen besonders relevant?",
            a: "Neben Handels- und Arbeitsrecht spielen versicherungsrechtliche Fragen im Kontext von Elementarschäden eine wichtige Rolle.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex strukturiert Euskirchen entlang realer regionaler Entwicklungen — ohne erfundene Referenzen oder Fallzahlen.",
    },
  },
  {
    slug: "bocholt",
    name: "Bocholt",
    bundesland: NRW,
    kreisOrBezirk: "Kreis Borken",
    stadtTyp: "Kreisstadt",
    population: { approx: 71000, label: "rund 71.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Bocholt",
      landgericht: "Landgericht Münster",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Textil", "Maschinenbau", "Grenzhandel"],
      profile: "Industriestadt im Westmünsterland mit Naehe zur niederländischen Grenze",
    },
    primaryLegalArea: "Grenzüberschreitendes Recht",
    secondaryLegalAreas: ["Arbeitsrecht", "Handelsrecht"],
    landmarks: ["TextilWerk Bocholt", "Aasee Bocholt"],
    mapCoords: coords(6.83, 51.84),
    nearbySlugs: ["aachen", "krefeld", "kleve", "ahlen"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "bocholt",
      heroSubtitle:
        "Für Kanzleien in Bocholt — wo Textil, Maschinenbau und Grenznähe zu den Niederlanden das Mandatsprofil formen.",
      introParagraphs: [
        "Bocholt im Kreis Borken verbindet industrielle Tradition mit grenznaher Wirtschaftsdynamik. Textil- und Maschinenbauunternehmen sind ebenso prägend wie der Handel im deutsch-niederländischen Kontext.",
        "Grenzüberschreitendes Recht sowie arbeits- und handelsrechtliche Themen stehen für viele Mandanten im Vordergrund.",
      ],
      courtsNarrative:
        "Amtsgericht Bocholt, Landgericht Münster, OLG Hamm. Der Zuständigkeitsweg über Münster sollte für Mandanten klar kommuniziert sein.",
      economyNarrative:
        "Industrie und Grenzhandel erzeugen Mandate mit internationalem Bezug sowie klassische arbeits- und handelsrechtliche Konflikte.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Maschinenbauer verhandelt mit einem niederländischen Kunden über Gewährleistungsfristen in Lieferverträgen.",
      faq: standardCityFaq(
        "Bocholt",
        {
          amtsgericht: "Amtsgericht Bocholt",
          landgericht: "Landgericht Münster",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Welche Instanzen gelten für Bocholt?",
            a: "Der Instanzenzug verläuft über AG Bocholt, LG Münster und OLG Hamm.",
          },
          {
            q: "Welche Rechtsgebiete sind in Bocholt besonders sichtbar?",
            a: "Typisch sind grenzüberschreitende Vertragsfragen sowie Arbeits- und Handelsrecht im Industrieumfeld.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex beschreibt Bocholt mit realen Grenz- und Wirtschaftsbezugen — ohne erfundene Mandatsreferenzen.",
    },
  },
  {
    slug: "ahlen",
    name: "Ahlen",
    bundesland: NRW,
    kreisOrBezirk: "Kreis Warendorf",
    stadtTyp: "Kreisstadt",
    population: { approx: 52000, label: "rund 52.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Ahlen",
      landgericht: "Landgericht Münster",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Metall", "Leuchten", "Industriegeschichte"],
      profile: "Industriestandort mit Metall- und Leuchtenproduktion im Münsterland",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Industrierecht"],
    landmarks: ["Zeche Westfalen", "Kunstmuseum Ahlen"],
    mapCoords: coords(7.89, 51.63),
    nearbySlugs: ["bocholt", "castrop-rauxel", "iserlohn"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "ahlen",
      heroSubtitle:
        "Für Kanzleien in Ahlen — wo Metall, Leuchtenindustrie und Strukturwandel klassische Industriemandate bringen.",
      introParagraphs: [
        "Ahlen liegt im Kreis Warendorf und ist historisch vom Bergbau, heute vor allem von Metall- und Leuchtenindustrie geprägt.",
        "Arbeits- und industrierechtliche Themen entstehen hier oft bei Schichtarbeit, Werkvertragsmodellen und betrieblichen Umstrukturierungen.",
      ],
      courtsNarrative:
        "Amtsgericht Ahlen, Landgericht Münster, OLG Hamm. Die Einordnung über Münster ist für viele Mandanten ein zentraler Informationspunkt.",
      economyNarrative:
        "Die industrielle Prägung von Ahlen führt zu wiederkehrenden Mandaten im Arbeitsrecht sowie bei branchenspezifischen Industrierechtsfragen.",
      localCaseExample:
        "Stellen Sie sich vor: Nach einer Werksumstellung möchte ein Teamleiter die Wirksamkeit neuer Schichtregelungen prüfen lassen.",
      faq: standardCityFaq(
        "Ahlen",
        {
          amtsgericht: "Amtsgericht Ahlen",
          landgericht: "Landgericht Münster",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Welche Gerichte sind für Ahlen zuständig?",
            a: "Für Ahlen sind AG Ahlen, LG Münster und OLG Hamm die maßgeblichen Instanzen.",
          },
          {
            q: "Welche Rechtsgebiete passen besonders zu Ahlen?",
            a: "Im industriellen Umfeld sind Arbeitsrecht und Industrierecht besonders naheliegend.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex stellt Ahlen auf Basis realer Standortfaktoren dar — ohne erfundene Fallbeispiele oder Referenzen.",
    },
  },
  {
    slug: "unna",
    name: "Unna",
    bundesland: NRW,
    kreisOrBezirk: "Kreis Unna",
    stadtTyp: "Kreisstadt",
    population: { approx: 58000, label: "rund 58.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Unna",
      landgericht: "Landgericht Dortmund",
      oberlandesgericht: "OLG Hamm",
    },
    economy: {
      sectors: ["Logistik", "Lichtindustrie", "Dienstleistungen"],
      profile: "Kreisstadt im östlichen Ruhrraum mit starker Logistiklage",
    },
    primaryLegalArea: "Transportrecht",
    secondaryLegalAreas: ["Arbeitsrecht"],
    landmarks: ["Zentrum für Internationale Lichtkunst", "Burg Unna"],
    mapCoords: coords(7.69, 51.54),
    nearbySlugs: ["hagen", "dortmund", "castrop-rauxel", "iserlohn"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "unna",
      heroSubtitle:
        "Für Kanzleien in Unna — wo Logistik, Lichtindustrie und Ruhrraumnetze transport- und arbeitsrechtliche Themen treiben.",
      introParagraphs: [
        "Unna ist Kreisstadt mit günstiger Lage an mehreren Verkehrsachsen zwischen Ruhrgebiet und Westfalen. Logistik und Lichtindustrie prägen den lokalen Unternehmensmix.",
        "Transport- und arbeitsrechtliche Fragen entstehen häufig bei Lieferketten, Fahrpersonal, Lagerbetrieb und personalbezogenen Konflikten.",
      ],
      courtsNarrative:
        "Amtsgericht Unna, Landgericht Dortmund, OLG Hamm. Gerade bei Transportmandaten sollte der Instanzenzug für Mandanten klar dargestellt werden.",
      economyNarrative:
        "Verkehrslage, Logistik und industrielle Dienstleistungen erzeugen wiederkehrende Mandate im Transportrecht und Arbeitsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Logistikunternehmen will nach Transportschäden Haftungsfragen aus mehreren Lieferkettenverträgen prüfen lassen.",
      faq: standardCityFaq(
        "Unna",
        {
          amtsgericht: "Amtsgericht Unna",
          landgericht: "Landgericht Dortmund",
          oberlandesgericht: "OLG Hamm",
        },
        [
          {
            q: "Welche Gerichte sind für Unna relevant?",
            a: "Der Instanzenzug für Unna verläuft über AG Unna, LG Dortmund und OLG Hamm.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Unnas Wirtschaftsprofil?",
            a: "Durch Logistik und Lichtindustrie sind insbesondere Transportrecht und Arbeitsrecht naheliegend.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex positioniert Unna entlang realer Wirtschafts- und Gerichtsdaten — ohne erfundene Mandatsclaims.",
    },
  },
];

export const nrwFacts: CityFacts[] = cities.map((city) => {
  const { content, ...facts } = city;
  void content;
  return facts;
});

export const nrwContent: Record<string, CityRecord["content"]> =
  Object.fromEntries(cities.map((c) => [c.slug, c.content]));

export const nrwRecords: CityRecord[] = cities.map(({ content, ...facts }) => ({
  ...facts,
  content,
}));
