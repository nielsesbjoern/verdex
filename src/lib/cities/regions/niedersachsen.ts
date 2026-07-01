import { lonLatToMapCoords } from "../germanyMap";
import type { CityFacts, CityRecord } from "../types";
import { NI, standardCityFaq } from "./niedersachsen-shared";

type CityDef = CityFacts & {
  content: CityRecord["content"];
};

function coords(lon: number, lat: number) {
  return { ...lonLatToMapCoords(lon, lat), anchor: "start" as const };
}

const cities: CityDef[] = [
  {
    slug: "hameln",
    name: "Hameln",
    bundesland: NI,
    kreisOrBezirk: "Landkreis Hameln-Pyrmont",
    stadtTyp: "Kreisstadt",
    population: { approx: 57000, label: "rund 57.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Hameln",
      landgericht: "Landgericht Hannover",
      oberlandesgericht: "OLG Celle",
    },
    economy: {
      sectors: ["Maschinenbau", "Tourismus", "Weserregion"],
      profile: "Weserstadt mit Rattenfänger-Tourismus und Maschinenbau",
    },
    primaryLegalArea: "Tourismusrecht",
    secondaryLegalAreas: ["Handelsrecht", "Arbeitsrecht"],
    landmarks: ["Rattenfänger-Haus", "Weserrenaissance-Altstadt"],
    mapCoords: coords(9.35, 52.1),
    nearbySlugs: ["hannover", "hildesheim", "peine", "celle"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "hameln",
      heroSubtitle:
        "Für Kanzleien an der Weser — wo Rattenfänger-Tourismus, Maschinenbau und Weserrenaissance typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Hameln verbindet Weserrenaissance-Altstadt mit Rattenfänger-Tourismus und Maschinenbau. Saisonbetriebe, Gastronomie und Mittelstand prägen das Mandatsumfeld in der Region Hannover-Umland.",
        "Tourismus-, Handels- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu saisonalen Verträgen, Gewerbe und Arbeitsfragen.",
      ],
      courtsNarrative:
        "Amtsgericht Hameln, Landgericht Hannover, OLG Celle. Der Sprung nach Hannover ist für Mandanten nicht offensichtlich — eine verständliche Darstellung schafft Vertrauen.",
      economyNarrative:
        "Tourismus, Maschinenbau und Weserregion erzeugen Mandate in Tourismus-, Handels- und Arbeitsrecht. Kanzleien sollten das online erkennbar machen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Gastronom prüft neue Lärmschutzauflagen für die Außenterrasse — er sucht 'Gastronomierecht Hameln'.",
      faq: standardCityFaq(
        "Hameln",
        {
          amtsgericht: "Amtsgericht Hameln",
          landgericht: "Landgericht Hannover",
          oberlandesgericht: "OLG Celle",
        },
        [
          {
            q: "Warum ist für Hameln das LG Hannover zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Niedersachsen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Branchen prägen Hameln?",
            a: "Tourismus (Rattenfänger), Maschinenbau und Mittelstand erzeugen typischerweise Mandate in Tourismus-, Handels- und Arbeitsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Hameln und die Weserregion — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "lingen",
    name: "Lingen (Ems)",
    bundesland: NI,
    kreisOrBezirk: "Landkreis Emsland",
    stadtTyp: "Kreisstadt",
    population: { approx: 57000, label: "rund 57.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Lingen (Ems)",
      landgericht: "Landgericht Osnabrück",
      oberlandesgericht: "OLG Oldenburg",
    },
    economy: {
      sectors: ["Energie", "Raffinerie", "Maschinenbau"],
      keyEmployersOrClusters: ["Rosen"],
      profile: "Energiestandort im Emsland mit Kraftwerk, Wasserstoff und Raffinerie",
    },
    primaryLegalArea: "Energie- und Umweltrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Industrierecht"],
    landmarks: ["Marktplatz", "Emsland Arena"],
    mapCoords: coords(7.32, 52.52),
    nearbySlugs: ["emden", "nordhorn", "cloppenburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "lingen",
      heroSubtitle:
        "Für Kanzleien im Emsland — wo Energie, Raffinerie und Wasserstoff typische Mandatsfelder bilden.",
      introParagraphs: [
        "Lingen (Ems) ist Energiestandort im Emsland. Kraftwerk, Raffinerie, Wasserstoffprojekte und Maschinenbau (Rosen) prägen Wirtschaft und Arbeitsmarkt.",
        "Energie-, Umwelt- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Genehmigungen, Betriebsfragen und Arbeitsverträgen.",
      ],
      courtsNarrative:
        "Amtsgericht Lingen (Ems), Landgericht Osnabrück, OLG Oldenburg. Der Sprung nach Osnabrück ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Energie, Raffinerie und Industrie machen Energie- und Umweltrecht zum Kernsuchfeld — daneben Arbeitsrecht in Großbetrieben.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Genehmigungsänderung am Kraftwerksstandort sucht ein Anwohner 'Umweltrecht Lingen'.",
      faq: standardCityFaq(
        "Lingen (Ems)",
        {
          amtsgericht: "Amtsgericht Lingen (Ems)",
          landgericht: "Landgericht Osnabrück",
          oberlandesgericht: "OLG Oldenburg",
        },
        [
          {
            q: "Welche Rechtsgebiete passen zu Lingen?",
            a: "Energie- und Umweltrecht stehen im Kraftwerks- und Raffinerie-Kontext oft im Vordergrund — daneben Arbeitsrecht.",
          },
          {
            q: "Warum ist für Lingen das LG Osnabrück zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Niedersachsen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Lingen und das Emsland — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "nordhorn",
    name: "Nordhorn",
    bundesland: NI,
    kreisOrBezirk: "Landkreis Grafschaft Bentheim",
    stadtTyp: "Kreisstadt",
    population: { approx: 54000, label: "rund 54.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Nordhorn",
      landgericht: "Landgericht Osnabrück",
      oberlandesgericht: "OLG Oldenburg",
    },
    economy: {
      sectors: ["Textil", "Logistik", "Grenzhandel Niederlande"],
      profile: "Kreisstadt an der niederländischen Grenze mit Textiltradition",
    },
    primaryLegalArea: "Grenzüberschreitendes Recht",
    secondaryLegalAreas: ["Arbeitsrecht", "Handelsrecht"],
    landmarks: ["Vechtesee", "Tierpark Nordhorn"],
    mapCoords: coords(7.07, 52.43),
    nearbySlugs: ["lingen", "emden"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "nordhorn",
      heroSubtitle:
        "Für Kanzleien an der Grenze — wo Textiltradition, Logistik und Niederlande-Nähe typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Nordhorn ist Kreisstadt in der Grafschaft Bentheim — unmittelbar an der niederländischen Grenze. Textiltradition, Logistik und Grenzhandel prägen die Wirtschaft.",
        "Grenzüberschreitendes Recht und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu NL-Bezügen und lokalen Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Nordhorn, Landgericht Osnabrück, OLG Oldenburg. Der Bezug zu Osnabrück ist für Mandanten selten bekannt.",
      economyNarrative:
        "Textil, Logistik und Grenzhandel machen grenzüberschreitendes Recht und Arbeitsrecht zu relevanten Suchthemen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Textilhändler streitet mit niederländischem Lieferanten — der Inhaber sucht 'Grenzrecht Nordhorn'.",
      faq: standardCityFaq(
        "Nordhorn",
        {
          amtsgericht: "Amtsgericht Nordhorn",
          landgericht: "Landgericht Osnabrück",
          oberlandesgericht: "OLG Oldenburg",
        },
        [
          {
            q: "Spielt die Grenze zu den Niederlanden eine Rolle?",
            a: "Wirtschaftlich und mandatsbezogen ja — Ihre Website kann grenzüberschreitende Bezüge benennen, ohne juristische Vorab-Beratung zu ersetzen.",
          },
          {
            q: "Welche Branchen prägen Nordhorn?",
            a: "Textiltradition, Logistik und Grenzhandel erzeugen typischerweise Mandate in grenzüberschreitendem Recht und Arbeitsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Nordhorn und die Grafschaft Bentheim — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "celle",
    name: "Celle",
    bundesland: NI,
    kreisOrBezirk: "Landkreis Celle",
    stadtTyp: "Kreisstadt",
    population: { approx: 69000, label: "rund 69.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Celle",
      landgericht: "Landgericht Lüneburg",
      oberlandesgericht: "OLG Celle",
    },
    economy: {
      sectors: ["Erdöl/Bohrtechnik", "Verwaltung", "Tourismus"],
      keyEmployersOrClusters: ["Baker Hughes"],
      profile: "OLG-Sitz mit Bohrtechnik, Verwaltung und Fachwerk-Tourismus",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Verwaltungsrecht"],
    landmarks: ["Celler Schloss", "Fachwerk-Altstadt"],
    mapCoords: coords(10.06, 52.62),
    nearbySlugs: ["hannover", "hamburg", "lueneburg", "peine"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "celle",
      heroSubtitle:
        "Für Kanzleien am OLG-Sitz — wo Baker Hughes, Verwaltung und Fachwerk-Altstadt typische Mandatsfelder bilden.",
      introParagraphs: [
        "Celle ist Kreisstadt und Sitz des OLG Celle. Erdöl- und Bohrtechnik (Baker Hughes), Verwaltung und Tourismus prägen die Wirtschaft — die Fachwerk-Altstadt ist das sichtbare Wahrzeichen.",
        "Arbeits-, Handels- und Verwaltungsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und regionalen Schwerpunkten.",
      ],
      courtsNarrative:
        "Amtsgericht Celle, Landgericht Lüneburg, OLG Celle (Sitz in Celle). Das OLG liegt in derselben Stadt — für Mandanten ein seltener Vorteil. Der Sprung zum LG Lüneburg ist weniger bekannt.",
      economyNarrative:
        "Bohrtechnik, Verwaltung und Tourismus machen Arbeitsrecht zum Kernsuchfeld — daneben Handels- und Verwaltungsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Betriebsänderung im Bohrtechnikwerk sucht ein Ingenieur 'Arbeitsrecht Celle'.",
      faq: standardCityFaq(
        "Celle",
        {
          amtsgericht: "Amtsgericht Celle",
          landgericht: "Landgericht Lüneburg",
          oberlandesgericht: "OLG Celle",
        },
        [
          {
            q: "Liegt das OLG in Celle?",
            a: "Ja — Celle ist Sitz des OLG Celle. Das ist ein starker Vertrauensfaktor für Mandanten aus der Region.",
          },
          {
            q: "Welches Landgericht ist für Celle zuständig?",
            a: "Das Landgericht Lüneburg — nicht Celle selbst. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Celle und die Region — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "cuxhaven",
    name: "Cuxhaven",
    bundesland: NI,
    kreisOrBezirk: "Landkreis Cuxhaven",
    stadtTyp: "Kreisstadt",
    population: { approx: 48000, label: "rund 48.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Cuxhaven",
      landgericht: "Landgericht Stade",
      oberlandesgericht: "OLG Celle",
    },
    economy: {
      sectors: ["Seehafen/Fischerei", "Offshore-Wind", "Nordsee-Tourismus"],
      profile: "Nordseehafenstadt mit Fischerei, Offshore und Tourismus",
    },
    primaryLegalArea: "See- und Fischereirecht",
    secondaryLegalAreas: ["Tourismusrecht", "Saisonarbeitsrecht"],
    landmarks: ["Kugelbake", "Alte Liebe"],
    mapCoords: coords(8.7, 53.87),
    nearbySlugs: ["bremerhaven", "stade", "wilhelmshaven"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "cuxhaven",
      heroSubtitle:
        "Für Kanzleien an der Nordsee — wo Seehafen, Fischerei und Offshore-Wind typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Cuxhaven ist Kreisstadt an der Nordsee. Seehafen, Fischerei, Offshore-Windkraft und Tourismus prägen die Wirtschaft — Kugelbake und Alte Liebe sind die Wahrzeichen.",
        "See-, Fischerei- und Saisonarbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu maritimen und touristischen Fragestellungen.",
      ],
      courtsNarrative:
        "Amtsgericht Cuxhaven, Landgericht Stade, OLG Celle. Der Sprung nach Stade ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Seehafen, Fischerei und Offshore erzeugen Mandate in See-, Fischerei- und Saisonarbeitsrecht — daneben Tourismusrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Fischereibetrieb streitet über Fangquoten — der Kapitän sucht 'Fischereirecht Cuxhaven'.",
      faq: standardCityFaq(
        "Cuxhaven",
        {
          amtsgericht: "Amtsgericht Cuxhaven",
          landgericht: "Landgericht Stade",
          oberlandesgericht: "OLG Celle",
        },
        [
          {
            q: "Welche Rechtsgebiete passen zu Cuxhaven?",
            a: "See-, Fischerei- und Saisonarbeitsrecht stehen im Hafen- und Tourismus-Kontext oft im Vordergrund.",
          },
          {
            q: "Warum ist für Cuxhaven das LG Stade zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Niedersachsen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Cuxhaven und die Nordseeküste — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "goslar",
    name: "Goslar",
    bundesland: NI,
    kreisOrBezirk: "Landkreis Goslar",
    stadtTyp: "Kreisstadt",
    population: { approx: 47000, label: "rund 47.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Goslar",
      landgericht: "Landgericht Braunschweig",
      oberlandesgericht: "OLG Braunschweig",
    },
    economy: {
      sectors: ["Bergbau-Tradition", "Tourismus", "Recycling/Metall"],
      profile: "UNESCO-Welterbestadt mit Rammelsberg und Tourismus",
    },
    primaryLegalArea: "Tourismusrecht",
    secondaryLegalAreas: ["Bergrecht", "Denkmalschutzrecht"],
    landmarks: ["UNESCO-Welterbe Altstadt", "Erzbergwerk Rammelsberg", "Kaiserpfalz"],
    mapCoords: coords(10.43, 51.91),
    nearbySlugs: ["braunschweig", "wolfenbuettel", "peine"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "goslar",
      heroSubtitle:
        "Für Kanzleien am Harz — wo UNESCO-Welterbe, Rammelsberg und Tourismus typische Mandatsfelder bilden.",
      introParagraphs: [
        "Goslar ist UNESCO-Welterbestadt am Harz. Bergbau-Tradition (Rammelsberg), Tourismus und Recycling/Metall prägen die Wirtschaft — Kaiserpfalz und Altstadt sind die Wahrzeichen.",
        "Tourismus-, Berg- und Denkmalschutzrecht sind hier zentral. Mandanten erwarten online Orientierung zu Sanierung, Tourismus und Bergbaufragen.",
      ],
      courtsNarrative:
        "Amtsgericht Goslar, Landgericht Braunschweig, OLG Braunschweig. Der Sprung nach Braunschweig ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Tourismus, Bergbau-Tradition und Denkmalschutz erzeugen Mandate in Tourismus-, Berg- und Denkmalschutzrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Hotelier in der Altstadt prüft Denkmalschutzauflagen — er sucht 'Denkmalschutzrecht Goslar'.",
      faq: standardCityFaq(
        "Goslar",
        {
          amtsgericht: "Amtsgericht Goslar",
          landgericht: "Landgericht Braunschweig",
          oberlandesgericht: "OLG Braunschweig",
        },
        [
          {
            q: "Welche Rechtsgebiete passen zu Goslar?",
            a: "Tourismus-, Berg- und Denkmalschutzrecht stehen im Welterbe-Kontext oft im Vordergrund.",
          },
          {
            q: "Warum ist für Goslar das LG Braunschweig zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Niedersachsen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Goslar und den Harz — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "wilhelmshaven",
    name: "Wilhelmshaven",
    bundesland: NI,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 75400, label: "rund 75.400", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Wilhelmshaven",
      landgericht: "Landgericht Oldenburg",
      oberlandesgericht: "OLG Oldenburg",
    },
    economy: {
      sectors: ["Tiefwasserhafen", "LNG", "Marine", "Chemie"],
      keyEmployersOrClusters: ["JadeWeserPort"],
      profile: "Tiefwasserhafenstadt mit JadeWeserPort, LNG-Terminal und Marine",
    },
    primaryLegalArea: "See- und Hafenrecht",
    secondaryLegalAreas: ["Speditionsrecht", "Energierecht"],
    landmarks: ["JadeWeserPort", "Kaiser-Wilhelm-Brücke"],
    mapCoords: coords(8.11, 53.53),
    nearbySlugs: ["osnabrueck", "oldenburg", "bremerhaven", "emden"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "wilhelmshaven",
      heroSubtitle:
        "Für Kanzleien am JadeWeserPort — wo Tiefwasserhafen, LNG und Marine typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Wilhelmshaven ist kreisfreie Stadt mit dem JadeWeserPort — einem der wenigen deutschen Tiefwasserterminals. LNG-Terminal, Marine und Chemie prägen die Wirtschaft.",
        "See-, Hafen- und Speditionsrecht sind hier zentral. Mandanten aus Reederei, Hafen und Logistik erwarten online Orientierung zu maritimen und energierechtlichen Fragen.",
      ],
      courtsNarrative:
        "Amtsgericht Wilhelmshaven, Landgericht Oldenburg, OLG Oldenburg. Der Sprung nach Oldenburg ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Tiefwasserhafen, LNG und Marine machen See-, Hafen- und Speditionsrecht zum Kernsuchfeld — daneben Energierecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Spediteur streitet über Frachtschäden im Hafen — der Disponent sucht 'Speditionsrecht Wilhelmshaven'.",
      faq: standardCityFaq(
        "Wilhelmshaven",
        {
          amtsgericht: "Amtsgericht Wilhelmshaven",
          landgericht: "Landgericht Oldenburg",
          oberlandesgericht: "OLG Oldenburg",
        },
        [
          {
            q: "Welche Rechtsgebiete passen zu Wilhelmshaven?",
            a: "See-, Hafen- und Speditionsrecht stehen im JadeWeserPort-Kontext oft im Vordergrund — daneben Energierecht.",
          },
          {
            q: "Warum ist für Wilhelmshaven das LG Oldenburg zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Niedersachsen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Wilhelmshaven und den JadeWeserPort — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "lueneburg",
    name: "Lüneburg",
    bundesland: NI,
    kreisOrBezirk: "Landkreis Lüneburg",
    stadtTyp: "Kreisstadt",
    population: { approx: 76000, label: "rund 76.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Lüneburg",
      landgericht: "Landgericht Lüneburg",
      oberlandesgericht: "OLG Celle",
    },
    economy: {
      sectors: ["Universität", "Tourismus", "Verwaltung"],
      profile: "Salzstadt und Hansestadt mit Universität und Tourismus",
    },
    primaryLegalArea: "Mietrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Tourismusrecht"],
    landmarks: ["Wasserturm", "Altes Rathaus", "Senkungsgebiet"],
    mapCoords: coords(10.41, 53.25),
    nearbySlugs: ["hamburg", "celle", "stade"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "lueneburg",
      heroSubtitle:
        "Für Kanzleien in der Salzstadt — wo Universität, Hanse-Tourismus und Senkungsgebiet typische Mandatsfelder bilden.",
      introParagraphs: [
        "Lüneburg ist Salzstadt, Hansestadt und Universitätsstandort. Tourismus, Verwaltung und ein angespannter Wohnungsmarkt prägen das Mandatsumfeld — das Senkungsgebiet ist ein sichtbares Wahrzeichen.",
        "Miet-, Arbeits- und Tourismusrecht sind hier zentral. Mandanten erwarten online Orientierung zu Wohnraum, Arbeitsverträgen und Gastronomie.",
      ],
      courtsNarrative:
        "Amtsgericht Lüneburg, Landgericht Lüneburg, OLG Celle. Beide Instanzen liegen in Lüneburg — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Universität, Tourismus und Verwaltung machen Mietrecht zum Kernsuchfeld — daneben Arbeits- und Tourismusrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Student streitet über Kaution nach WG-Wechsel — er sucht 'Mietrecht Lüneburg'.",
      faq: standardCityFaq(
        "Lüneburg",
        {
          amtsgericht: "Amtsgericht Lüneburg",
          landgericht: "Landgericht Lüneburg",
          oberlandesgericht: "OLG Celle",
        },
        [
          {
            q: "Liegen AG und LG in Lüneburg?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Region.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Lüneburg?",
            a: "Mietrecht, Arbeitsrecht und Tourismusrecht stehen im Universitäts- und Salzstadt-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Lüneburg und die Region — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "hildesheim",
    name: "Hildesheim",
    bundesland: NI,
    kreisOrBezirk: "Landkreis Hildesheim",
    stadtTyp: "Kreisstadt",
    population: {
      approx: 100000,
      label: "rund 100.000",
      year: 2024,
      zensusStrittig: true,
    },
    courts: {
      amtsgericht: "Amtsgericht Hildesheim",
      landgericht: "Landgericht Hildesheim",
      oberlandesgericht: "OLG Celle",
    },
    economy: {
      sectors: ["Automotive/Elektronik", "Universität"],
      keyEmployersOrClusters: ["Bosch", "KSM"],
      profile: "Großstadt an der Grenzschwelle mit Automotive und UNESCO-Welterbe",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Vertragsrecht"],
    landmarks: ["UNESCO-Welterbe Mariendom", "St. Michaelis", "Marktplatz"],
    mapCoords: coords(9.95, 52.15),
    nearbySlugs: ["hannover", "braunschweig", "hameln", "peine"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "hildesheim",
      heroSubtitle:
        "Für Kanzleien in der Domstadt — wo Bosch, KSM und UNESCO-Welterbe typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Hildesheim liegt an der Großstadt-Grenze — das Melderegister weist teils höhere Zahlen aus als der Zensus. Bosch, KSM und die Universität prägen den Arbeitsmarkt; Mariendom und St. Michaelis sind UNESCO-Welterbe.",
        "Arbeits- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Industrie, Gerichten und Rechtsgebieten.",
      ],
      courtsNarrative:
        "Amtsgericht Hildesheim, Landgericht Hildesheim, OLG Celle. Beide Instanzen liegen in Hildesheim.",
      economyNarrative:
        "Automotive, Elektronik und Universität machen Arbeitsrecht zum Kernsuchfeld — daneben Handels- und Vertragsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Betriebsänderung bei Bosch sucht ein Mitarbeiter 'Arbeitsrecht Hildesheim'.",
      faq: standardCityFaq(
        "Hildesheim",
        {
          amtsgericht: "Amtsgericht Hildesheim",
          landgericht: "Landgericht Hildesheim",
          oberlandesgericht: "OLG Celle",
        },
        [
          {
            q: "Liegen AG und LG in Hildesheim?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Region.",
          },
          {
            q: "Welche Branchen prägen Hildesheim?",
            a: "Automotive/Elektronik (Bosch, KSM) und Universität erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Hildesheim und die Region — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "wolfenbuettel",
    name: "Wolfenbüttel",
    bundesland: NI,
    kreisOrBezirk: "Landkreis Wolfenbüttel",
    stadtTyp: "Kreisstadt",
    population: { approx: 52000, label: "rund 52.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Wolfenbüttel",
      landgericht: "Landgericht Braunschweig",
      oberlandesgericht: "OLG Braunschweig",
    },
    economy: {
      sectors: ["Spirituosen", "Verlag/Bibliothekswesen"],
      keyEmployersOrClusters: ["Jägermeister"],
      profile: "Residenzstadt mit Jägermeister und Herzog August Bibliothek",
    },
    primaryLegalArea: "Handels- und Markenrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Urheberrecht"],
    landmarks: ["Herzog August Bibliothek", "Schloss Wolfenbüttel"],
    mapCoords: coords(10.54, 52.16),
    nearbySlugs: ["braunschweig", "goslar", "peine", "hildesheim"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "wolfenbuettel",
      heroSubtitle:
        "Für Kanzleien in der Residenzstadt — wo Jägermeister, Markenrecht und Herzog August Bibliothek typische Mandatsfelder bilden.",
      introParagraphs: [
        "Wolfenbüttel ist Residenzstadt mit Jägermeister-Standort und Herzog August Bibliothek. Spirituosen, Verlagswesen und Mittelstand prägen die Wirtschaft.",
        "Handels-, Marken- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Marken, Verträgen und Arbeitsfragen.",
      ],
      courtsNarrative:
        "Amtsgericht Wolfenbüttel, Landgericht Braunschweig, OLG Braunschweig. Der Sprung nach Braunschweig ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Spirituosen (Jägermeister) und Verlagswesen machen Handels- und Markenrecht zum Kernsuchfeld — daneben Arbeitsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Getränkehersteller prüft Markenverletzung — der Geschäftsführer sucht 'Markenrecht Wolfenbüttel'.",
      faq: standardCityFaq(
        "Wolfenbüttel",
        {
          amtsgericht: "Amtsgericht Wolfenbüttel",
          landgericht: "Landgericht Braunschweig",
          oberlandesgericht: "OLG Braunschweig",
        },
        [
          {
            q: "Welche Rechtsgebiete passen zu Wolfenbüttel?",
            a: "Handels- und Markenrecht stehen im Spirituosen-Kontext oft im Vordergrund — daneben Arbeitsrecht.",
          },
          {
            q: "Warum ist für Wolfenbüttel das LG Braunschweig zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Niedersachsen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Wolfenbüttel und die Region — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "peine",
    name: "Peine",
    bundesland: NI,
    kreisOrBezirk: "Landkreis Peine",
    stadtTyp: "Kreisstadt",
    population: { approx: 50000, label: "rund 50.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Peine",
      landgericht: "Landgericht Hildesheim",
      oberlandesgericht: "OLG Celle",
    },
    economy: {
      sectors: ["Stahlindustrie", "Logistik"],
      keyEmployersOrClusters: ["Salzgitter-Gruppe"],
      profile: "Stahlstandort in der Salzgitter-Region",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Industrierecht", "Handelsrecht"],
    landmarks: ["Eulenmarkt", "Kreisel"],
    mapCoords: coords(10.39, 52.32),
    nearbySlugs: ["hannover", "hildesheim", "wolfenbuettel", "celle"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "peine",
      heroSubtitle:
        "Für Kanzleien in der Stahlregion — wo Salzgitter-Gruppe, Logistik und Industrie typische Mandatsfelder bilden.",
      introParagraphs: [
        "Peine ist Kreisstadt in der Salzgitter-Region. Stahlindustrie (Salzgitter-Gruppe) und Logistik prägen den Arbeitsmarkt — Arbeitsrecht ist hier kein Randthema.",
        "Mandanten aus Werk und Mittelstand erwarten online schnelle Orientierung zu Arbeits- und Industriefragen.",
      ],
      courtsNarrative:
        "Amtsgericht Peine, Landgericht Hildesheim, OLG Celle. Der Sprung nach Hildesheim ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Stahlindustrie und Logistik machen Arbeitsrecht zum Kernsuchfeld — daneben Industrie- und Handelsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Schichtmodell-Änderung im Stahlwerk sucht ein Mitarbeiter 'Arbeitsrecht Peine'.",
      faq: standardCityFaq(
        "Peine",
        {
          amtsgericht: "Amtsgericht Peine",
          landgericht: "Landgericht Hildesheim",
          oberlandesgericht: "OLG Celle",
        },
        [
          {
            q: "Welche Branchen prägen Peine?",
            a: "Stahlindustrie (Salzgitter-Gruppe) und Logistik erzeugen typischerweise Mandate in Arbeits- und Industrierecht.",
          },
          {
            q: "Warum ist für Peine das LG Hildesheim zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Niedersachsen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Peine und die Salzgitter-Region — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "stade",
    name: "Stade",
    bundesland: NI,
    kreisOrBezirk: "Landkreis Stade",
    stadtTyp: "Kreisstadt",
    population: { approx: 48000, label: "rund 48.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Stade",
      landgericht: "Landgericht Stade",
      oberlandesgericht: "OLG Celle",
    },
    economy: {
      sectors: ["Luftfahrt", "Chemie", "Elbehafen"],
      keyEmployersOrClusters: ["Airbus", "Dow"],
      profile: "Hafenstadt an der Elbe mit Airbus, Dow und Chemie",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Umweltrecht", "Handelsrecht"],
    landmarks: ["Hansehafen", "Schwedenspeicher"],
    mapCoords: coords(9.48, 53.6),
    nearbySlugs: ["cuxhaven", "lueneburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "stade",
      heroSubtitle:
        "Für Kanzleien an der Elbe — wo Airbus, Dow und Hansehafen typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Stade ist Kreisstadt an der Elbe. Airbus, Dow und der Hansehafen prägen die Wirtschaft — Chemie und Luftfahrt erzeugen ein industrielles Mandatsumfeld.",
        "Arbeits-, Umwelt- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Industrie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Stade, Landgericht Stade, OLG Celle. Beide Instanzen liegen in Stade — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Luftfahrt, Chemie und Hafen machen Arbeitsrecht zum Kernsuchfeld — daneben Umwelt- und Handelsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Umweltauflagen-Änderung im Chemiewerk sucht ein Betriebsrat 'Umweltrecht Stade'.",
      faq: standardCityFaq(
        "Stade",
        {
          amtsgericht: "Amtsgericht Stade",
          landgericht: "Landgericht Stade",
          oberlandesgericht: "OLG Celle",
        },
        [
          {
            q: "Liegen AG und LG in Stade?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Region.",
          },
          {
            q: "Welche Branchen prägen Stade?",
            a: "Luftfahrt (Airbus), Chemie (Dow) und Elbehafen erzeugen typischerweise Mandate in Arbeits-, Umwelt- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Stade und die Elbregion — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "emden",
    name: "Emden",
    bundesland: NI,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 49000, label: "rund 49.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Emden",
      landgericht: "Landgericht Aurich",
      oberlandesgericht: "OLG Oldenburg",
    },
    economy: {
      sectors: ["Seehafen", "Automotive", "Windkraft"],
      keyEmployersOrClusters: ["VW-Werk Emden"],
      profile: "Seehafenstadt mit VW-Werk und Windkraft",
    },
    primaryLegalArea: "See- und Hafenrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Energierecht"],
    landmarks: ["Ratsdelft", "Kunsthalle Emden"],
    mapCoords: coords(7.21, 53.37),
    nearbySlugs: ["oldenburg", "wilhelmshaven", "lingen"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "emden",
      heroSubtitle:
        "Für Kanzleien am Dollart — wo Seehafen, VW-Werk und Windkraft typische Mandatsfelder bilden.",
      introParagraphs: [
        "Emden ist kreisfreie Seehafenstadt am Dollart. VW-Werk, Windkraft und Hafenwirtschaft prägen den Arbeitsmarkt — Ratsdelft und Kunsthalle sind die Wahrzeichen.",
        "See-, Hafen- und Arbeitsrecht sind hier zentral. Mandanten aus Werk, Hafen und Logistik erwarten online Orientierung zu maritimen und arbeitsrechtlichen Fragen.",
      ],
      courtsNarrative:
        "Amtsgericht Emden, Landgericht Aurich, OLG Oldenburg. Der Sprung nach Aurich ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Seehafen, Automotive (VW) und Windkraft machen See-, Hafen- und Arbeitsrecht zu relevanten Suchthemen.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Betriebsänderung im VW-Werk sucht ein Mitarbeiter 'Arbeitsrecht Emden'.",
      faq: standardCityFaq(
        "Emden",
        {
          amtsgericht: "Amtsgericht Emden",
          landgericht: "Landgericht Aurich",
          oberlandesgericht: "OLG Oldenburg",
        },
        [
          {
            q: "Welche Rechtsgebiete passen zu Emden?",
            a: "See-, Hafen- und Arbeitsrecht stehen im VW- und Hafen-Kontext oft im Vordergrund.",
          },
          {
            q: "Warum ist für Emden das LG Aurich zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Niedersachsen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Emden und Ostfriesland — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "cloppenburg",
    name: "Cloppenburg",
    bundesland: NI,
    kreisOrBezirk: "Landkreis Cloppenburg",
    stadtTyp: "Kreisstadt",
    population: { approx: 38000, label: "rund 38.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Cloppenburg",
      landgericht: "Landgericht Oldenburg",
      oberlandesgericht: "OLG Oldenburg",
    },
    economy: {
      sectors: ["Agrar/Ernährung", "Geflügel/Fleisch", "Mittelstand"],
      profile: "Agrar- und Ernährungsstandort im Oldenburger Münsterland",
    },
    primaryLegalArea: "Agrarrecht",
    secondaryLegalAreas: ["Lebensmittelrecht", "Arbeitsrecht"],
    landmarks: ["Museumsdorf Cloppenburg"],
    mapCoords: coords(8.05, 52.85),
    nearbySlugs: ["oldenburg", "lingen", "emden"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "cloppenburg",
      heroSubtitle:
        "Für Kanzleien im Oldenburger Münsterland — wo Agrar, Geflügel/Fleisch und Mittelstand typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Cloppenburg ist Kreisstadt im Oldenburger Münsterland — etwas unter dem üblichen Einwohner-Zielband, aber wirtschaftlich relevant für Agrar und Ernährungswirtschaft. Geflügel, Fleisch und Mittelstand prägen den Markt.",
        "Agrar-, Lebensmittel- und Arbeitsrecht sind hier zentral. Mandanten aus Landwirtschaft und Verarbeitung suchen gezielt nach Kanzleien mit regionalem Bezug.",
      ],
      courtsNarrative:
        "Amtsgericht Cloppenburg, Landgericht Oldenburg, OLG Oldenburg. Der Sprung nach Oldenburg ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Agrarwirtschaft, Geflügel/Fleisch und Mittelstand erzeugen Mandate in Agrar-, Lebensmittel- und Arbeitsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Geflügelbetrieb prüft neue Kennzeichnungspflichten — der Inhaber sucht 'Lebensmittelrecht Cloppenburg'.",
      faq: standardCityFaq(
        "Cloppenburg",
        {
          amtsgericht: "Amtsgericht Cloppenburg",
          landgericht: "Landgericht Oldenburg",
          oberlandesgericht: "OLG Oldenburg",
        },
        [
          {
            q: "Welche Branchen prägen Cloppenburg?",
            a: "Agrar- und Ernährungswirtschaft (Geflügel/Fleisch) und Mittelstand erzeugen typischerweise Mandate in Agrar- und Lebensmittelrecht.",
          },
          {
            q: "Warum ist für Cloppenburg das LG Oldenburg zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Niedersachsen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Cloppenburg und das Oldenburger Münsterland — ohne erfundene Referenzen.",
    },
  },
];

export const niedersachsenFacts: CityFacts[] = cities.map((city) => {
  const { content, ...facts } = city;
  void content;
  return facts;
});

export const niedersachsenContent: Record<string, CityRecord["content"]> =
  Object.fromEntries(cities.map((c) => [c.slug, c.content]));

export const niedersachsenRecords: CityRecord[] = cities.map(
  ({ content, ...facts }) => ({ ...facts, content }),
);

