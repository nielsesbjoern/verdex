import { lonLatToMapCoords } from "../germanyMap";
import type { CityFacts, CityRecord } from "../types";
import { ST, ST_OLG, standardCityFaq } from "./sachsen-anhalt-shared";

type CityDef = CityFacts & {
  content: CityRecord["content"];
};

function coords(lon: number, lat: number) {
  return { ...lonLatToMapCoords(lon, lat), anchor: "start" as const };
}

const cities: CityDef[] = [
  {
    slug: "dessau-rosslau",
    name: "Dessau-Roßlau",
    bundesland: ST,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 75400, label: "rund 75.400", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Dessau-Roßlau",
      landgericht: "Landgericht Dessau-Roßlau",
      oberlandesgericht: ST_OLG,
    },
    economy: {
      sectors: ["Maschinenbau", "Pharma", "Verwaltung"],
      keyEmployersOrClusters: ["Umweltbundesamt"],
      profile: "Bauhaus-Stadt mit Maschinenbau, Pharma und Umweltbundesamt",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Umweltrecht", "Verwaltungsrecht"],
    landmarks: ["UNESCO-Welterbe Bauhaus Dessau", "Gartenreich Dessau-Wörlitz"],
    mapCoords: coords(12.25, 51.81),
    nearbySlugs: ["halle-saale", "lutherstadt-wittenberg", "stendal"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "dessau-rosslau",
      heroSubtitle:
        "Für Kanzleien an Elbe und Mulde — wo Bauhaus, Umweltbundesamt und Industrie typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Dessau-Roßlau ist kreisfreie Stadt und UNESCO-Welterbe-Standort. Maschinenbau, Pharma und das Umweltbundesamt prägen Wirtschaft und Verwaltung — Bauhaus Dessau und Gartenreich sind die Wahrzeichen.",
        "Arbeits-, Umwelt- und Verwaltungsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Behörden, Industrie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Dessau-Roßlau, Landgericht Dessau-Roßlau, OLG Naumburg. Beide Instanzen liegen in derselben Stadt — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Maschinenbau, Pharma und Umweltbundesamt erzeugen Mandate in Arbeits-, Umwelt- und Verwaltungsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Pharmaunternehmen prüft neue Umweltauflagen — der Compliance-Beauftragte sucht 'Umweltrecht Dessau'.",
      faq: standardCityFaq(
        "Dessau-Roßlau",
        {
          amtsgericht: "Amtsgericht Dessau-Roßlau",
          landgericht: "Landgericht Dessau-Roßlau",
          oberlandesgericht: ST_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Dessau-Roßlau?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Region.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Dessau-Roßlau?",
            a: "Arbeitsrecht, Umweltrecht und Verwaltungsrecht stehen im Umfeld von Umweltbundesamt und Industrie oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Dessau-Roßlau und Anhalt — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "lutherstadt-wittenberg",
    name: "Lutherstadt Wittenberg",
    bundesland: ST,
    kreisOrBezirk: "Landkreis Wittenberg",
    stadtTyp: "Kreisstadt",
    population: { approx: 45000, label: "rund 45.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Wittenberg",
      landgericht: "Landgericht Dessau-Roßlau",
      oberlandesgericht: ST_OLG,
    },
    economy: {
      sectors: ["Chemie", "Tourismus/Reformation"],
      profile: "Reformationsstadt mit Agro-/Spezialchemie und Tourismus",
    },
    primaryLegalArea: "Tourismusrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Umweltrecht"],
    landmarks: ["UNESCO Schlosskirche (Thesentür)", "Lutherhaus"],
    mapCoords: coords(12.65, 51.87),
    nearbySlugs: ["halle-saale", "dessau-rosslau", "merseburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "lutherstadt-wittenberg",
      heroSubtitle:
        "Für Kanzleien an der Elbe — wo Reformation, Chemie und UNESCO-Welterbe typische Mandatsfelder bilden.",
      introParagraphs: [
        "Lutherstadt Wittenberg ist Kreisstadt und UNESCO-Welterbe-Standort der Reformation. Agro- und Spezialchemie sowie Reformationstourismus prägen Wirtschaft und Mandatsumfeld.",
        "Tourismus-, Arbeits- und Umweltrecht sind hier zentral. Mandanten erwarten online Orientierung zu Saisonbetrieben, Chemie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Wittenberg, Landgericht Dessau-Roßlau, OLG Naumburg. Der Sprung nach Dessau-Roßlau ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Chemie und Reformationstourismus erzeugen Mandate in Tourismus-, Arbeits- und Umweltrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Gastronom nahe der Schlosskirche prüft neue Lärmschutzauflagen — er sucht 'Gastronomierecht Wittenberg'.",
      faq: standardCityFaq(
        "Lutherstadt Wittenberg",
        {
          amtsgericht: "Amtsgericht Wittenberg",
          landgericht: "Landgericht Dessau-Roßlau",
          oberlandesgericht: ST_OLG,
        },
        [
          {
            q: "Warum ist für Wittenberg das LG Dessau-Roßlau zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Sachsen-Anhalt. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Wittenberg?",
            a: "Tourismusrecht, Arbeitsrecht und Umweltrecht stehen im Chemie- und Reformationstourismus-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Wittenberg und die Elbregion — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "stendal",
    name: "Stendal",
    bundesland: ST,
    kreisOrBezirk: "Landkreis Stendal",
    stadtTyp: "Kreisstadt",
    population: { approx: 38000, label: "rund 38.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Stendal",
      landgericht: "Landgericht Stendal",
      oberlandesgericht: ST_OLG,
    },
    economy: {
      sectors: ["Zellstoff/Industrie", "Bahn", "Agrar Altmark"],
      profile: "Altmark-Kreisstadt mit Zellstoffindustrie und Backsteingotik",
    },
    primaryLegalArea: "Agrarrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Industrierecht"],
    landmarks: ["Dom", "Rathaus", "Tangermünder Tor"],
    mapCoords: coords(11.41, 52.6),
    nearbySlugs: ["magdeburg", "dessau-rosslau", "wernigerode"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "stendal",
      heroSubtitle:
        "Für Kanzleien in der Altmark — wo Zellstoff, Bahn und Agrarregion typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Stendal ist Kreisstadt in der Altmark — knapp unter dem üblichen Einwohner-Zielband, aber wirtschaftlich relevant. Zellstoffindustrie, Bahn und Agrarregion prägen den Markt.",
        "Agrar-, Arbeits- und Industrierecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten und regionalen Schwerpunkten.",
      ],
      courtsNarrative:
        "Amtsgericht Stendal, Landgericht Stendal, OLG Naumburg. Beide Instanzen liegen in Stendal — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Zellstoff, Bahn und Agrarwirtschaft erzeugen Mandate in Agrar-, Arbeits- und Industrierecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Landwirt in der Altmark prüft neue Düngemittelvorschriften — er sucht 'Agrarrecht Stendal'.",
      faq: standardCityFaq(
        "Stendal",
        {
          amtsgericht: "Amtsgericht Stendal",
          landgericht: "Landgericht Stendal",
          oberlandesgericht: ST_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Stendal?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Altmark.",
          },
          {
            q: "Welche Branchen prägen Stendal?",
            a: "Zellstoffindustrie, Bahn und Agrarwirtschaft erzeugen typischerweise Mandate in Agrar-, Arbeits- und Industrierecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Stendal und die Altmark — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "wernigerode",
    name: "Wernigerode",
    bundesland: ST,
    kreisOrBezirk: "Landkreis Harz",
    stadtTyp: "Große Kreisstadt",
    population: { approx: 32000, label: "rund 32.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Wernigerode",
      landgericht: "Landgericht Magdeburg",
      oberlandesgericht: ST_OLG,
    },
    economy: {
      sectors: ["Tourismus/Harz", "Pharma", "Mikroelektronik"],
      profile: "Harz-Touristenstadt mit Schloss und Brockenbahn",
    },
    primaryLegalArea: "Tourismusrecht",
    secondaryLegalAreas: ["Handelsrecht", "Mietrecht"],
    landmarks: ["Schloss Wernigerode", "Brockenbahn"],
    mapCoords: coords(10.79, 51.84),
    nearbySlugs: ["magdeburg", "halberstadt", "stendal"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "wernigerode",
      heroSubtitle:
        "Für Kanzleien am Harz — wo Schloss, Brockenbahn und Bunte Stadt typische Mandatsfelder bilden.",
      introParagraphs: [
        "Wernigerode liegt im Landkreis Harz — unter dem üblichen Einwohner-Zielband, aber als Touristenmagnet wirtschaftlich relevant. Harz-Tourismus, Pharma und Mikroelektronik prägen das Mandatsumfeld.",
        "Tourismus- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Saisonbetrieben, Gastronomie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Wernigerode, Landgericht Magdeburg, OLG Naumburg. Der Sprung nach Magdeburg ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Harz-Tourismus, Pharma und Mikroelektronik erzeugen Mandate in Tourismus-, Handels- und Mietrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Ferienhausvermieter streitet über Stornobedingungen — der Eigentümer sucht 'Tourismusrecht Wernigerode'.",
      faq: standardCityFaq(
        "Wernigerode",
        {
          amtsgericht: "Amtsgericht Wernigerode",
          landgericht: "Landgericht Magdeburg",
          oberlandesgericht: ST_OLG,
        },
        [
          {
            q: "Warum ist für Wernigerode das LG Magdeburg zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Sachsen-Anhalt. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Rechtsgebiete passen zum Harz?",
            a: "Tourismus- und Handelsrecht stehen im Harz-Tourismus-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Wernigerode und den Harz — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "halberstadt",
    name: "Halberstadt",
    bundesland: ST,
    kreisOrBezirk: "Landkreis Harz",
    stadtTyp: "Große Kreisstadt",
    population: { approx: 38000, label: "rund 38.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Halberstadt",
      landgericht: "Landgericht Magdeburg",
      oberlandesgericht: ST_OLG,
    },
    economy: {
      sectors: ["Lebensmittel", "Mittelstand"],
      profile: "Domstadt mit Halberstädter Würstchen und Mittelstand",
    },
    primaryLegalArea: "Handelsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Lebensmittelrecht"],
    landmarks: ["Dom", "Gleimhaus"],
    mapCoords: coords(11.05, 51.9),
    nearbySlugs: ["magdeburg", "wernigerode", "bernburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "halberstadt",
      heroSubtitle:
        "Für Kanzleien im Harz — wo Lebensmitteltradition, Dom und Mittelstand typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Halberstadt liegt im Landkreis Harz — knapp unter dem üblichen Einwohner-Zielband. Lebensmittel (Halberstädter Würstchen), Mittelstand und Dom prägen die Stadt.",
        "Handels- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Lebensmittelwirtschaft und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Halberstadt, Landgericht Magdeburg, OLG Naumburg. Der Sprung nach Magdeburg ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Lebensmittel und Mittelstand erzeugen Mandate in Handels-, Arbeits- und Lebensmittelrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Lebensmittelhersteller prüft neue Kennzeichnungspflichten — der Geschäftsführer sucht 'Lebensmittelrecht Halberstadt'.",
      faq: standardCityFaq(
        "Halberstadt",
        {
          amtsgericht: "Amtsgericht Halberstadt",
          landgericht: "Landgericht Magdeburg",
          oberlandesgericht: ST_OLG,
        },
        [
          {
            q: "Welches Landgericht ist für Halberstadt zuständig?",
            a: "Das Landgericht Magdeburg. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
          {
            q: "Welche Branchen prägen Halberstadt?",
            a: "Lebensmittel und Mittelstand erzeugen typischerweise Mandate in Handels- und Arbeitsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Halberstadt und den Harz — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "bernburg",
    name: "Bernburg (Saale)",
    bundesland: ST,
    kreisOrBezirk: "Salzlandkreis",
    stadtTyp: "Große Kreisstadt",
    population: { approx: 31000, label: "rund 31.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Bernburg",
      landgericht: "Landgericht Magdeburg",
      oberlandesgericht: ST_OLG,
    },
    economy: {
      sectors: ["Chemie", "Maschinenbau"],
      profile: "Chemiestandort an der Saale mit Soda/Sole-Tradition",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Industrierecht", "Umweltrecht"],
    landmarks: ["Schloss Bernburg", "Saaleufer"],
    mapCoords: coords(11.73, 51.79),
    nearbySlugs: ["magdeburg", "halberstadt", "merseburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "bernburg",
      heroSubtitle:
        "Für Kanzleien an der Saale — wo Chemie, Soda/Sole und Schloss Bernburg typische Mandatsfelder bilden.",
      introParagraphs: [
        "Bernburg (Saale) liegt im Salzlandkreis — unter dem üblichen Einwohner-Zielband, aber als Chemiestandort wirtschaftlich relevant. Soda/Sole, Chemie und Maschinenbau prägen den Markt.",
        "Arbeits- und Industrierecht sind hier zentral. Mandanten erwarten online Orientierung zu Chemie, Gerichten und Rechtsgebieten.",
      ],
      courtsNarrative:
        "Amtsgericht Bernburg, Landgericht Magdeburg, OLG Naumburg. Der Sprung nach Magdeburg ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Chemie und Maschinenbau machen Arbeitsrecht zum Kernsuchfeld — daneben Industrie- und Umweltrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Umweltauflagen-Änderung im Chemiewerk sucht ein Betriebsrat 'Umweltrecht Bernburg'.",
      faq: standardCityFaq(
        "Bernburg (Saale)",
        {
          amtsgericht: "Amtsgericht Bernburg",
          landgericht: "Landgericht Magdeburg",
          oberlandesgericht: ST_OLG,
        },
        [
          {
            q: "Welches Landgericht ist für Bernburg zuständig?",
            a: "Das Landgericht Magdeburg. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
          {
            q: "Welche Branchen prägen Bernburg?",
            a: "Chemie (Soda/Sole) und Maschinenbau erzeugen typischerweise Mandate in Arbeits- und Industrierecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Bernburg und den Salzlandkreis — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "naumburg-saale",
    name: "Naumburg (Saale)",
    bundesland: ST,
    kreisOrBezirk: "Burgenlandkreis",
    stadtTyp: "Kreisstadt",
    population: { approx: 32000, label: "rund 32.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Naumburg",
      landgericht: "Landgericht Halle",
      oberlandesgericht: ST_OLG,
    },
    economy: {
      sectors: ["Weinbau", "Tourismus"],
      profile: "OLG-Sitz mit Saale-Unstrut-Weinbau und UNESCO-Dom",
    },
    primaryLegalArea: "Weinrecht",
    secondaryLegalAreas: ["Agrarrecht", "Tourismusrecht"],
    landmarks: ["UNESCO-Welterbe Naumburger Dom", "Uta von Naumburg"],
    mapCoords: coords(11.81, 51.15),
    nearbySlugs: ["weissenfels", "merseburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "naumburg-saale",
      heroSubtitle:
        "Für Kanzleien am OLG-Sitz — wo Saale-Unstrut-Wein, UNESCO-Dom und Tourismus typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Naumburg (Saale) ist Kreisstadt im Burgenlandkreis und Sitz des OLG Naumburg — unter dem üblichen Einwohner-Zielband, aber gerichtlich zentral für Sachsen-Anhalt. Weinbau (Saale-Unstrut) und Tourismus prägen die Wirtschaft.",
        "Agrar-, Wein- und Tourismusrecht sind hier zentral. Mandanten erwarten online Orientierung zum OLG-Sitz und regionalen Schwerpunkten.",
      ],
      courtsNarrative:
        "Amtsgericht Naumburg, Landgericht Halle, OLG Naumburg (Sitz in Naumburg). Das OLG liegt in derselben Stadt — für Mandanten aus Sachsen-Anhalt ein seltener Vorteil. Der Sprung zum LG Halle ist weniger bekannt.",
      economyNarrative:
        "Weinbau und Tourismus erzeugen Mandate in Agrar-, Wein- und Tourismusrecht — besonders bei Weingüter-Nachfolge und Ferienvermietung.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Weingut prüft Hofübergabe — der Winzer sucht 'Erbrecht Naumburg Wein'.",
      faq: standardCityFaq(
        "Naumburg (Saale)",
        {
          amtsgericht: "Amtsgericht Naumburg",
          landgericht: "Landgericht Halle",
          oberlandesgericht: ST_OLG,
        },
        [
          {
            q: "Liegt das OLG in Naumburg?",
            a: "Ja — Naumburg ist Sitz des OLG Naumburg. Das ist ein starker Vertrauensfaktor für Mandanten aus Sachsen-Anhalt.",
          },
          {
            q: "Welches Landgericht ist für Naumburg zuständig?",
            a: "Das Landgericht Halle — nicht Naumburg selbst. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Naumburg und die Saale-Unstrut-Region — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "merseburg",
    name: "Merseburg",
    bundesland: ST,
    kreisOrBezirk: "Saalekreis",
    stadtTyp: "Kreisstadt",
    population: { approx: 33000, label: "rund 33.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Merseburg",
      landgericht: "Landgericht Halle",
      oberlandesgericht: ST_OLG,
    },
    economy: {
      sectors: ["Chemie", "Hochschule"],
      profile: "Chemiedreieck-Leuna mit Hochschule Merseburg",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Umweltrecht", "Industrierecht"],
    landmarks: ["Dom und Schloss Merseburg"],
    mapCoords: coords(11.99, 51.35),
    nearbySlugs: ["naumburg-saale", "lutherstadt-wittenberg", "weissenfels"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "merseburg",
      heroSubtitle:
        "Für Kanzleien im Chemiedreieck — wo Leuna, Hochschule und Industrie typische Mandatsfelder bilden.",
      introParagraphs: [
        "Merseburg ist Kreisstadt im Saalekreis — unter dem üblichen Einwohner-Zielband, aber Zentrum des mitteldeutschen Chemiedreiecks (Leuna). Hochschule und Chemie prägen Wirtschaft und Arbeitsmarkt.",
        "Arbeits-, Umwelt- und Industrierecht sind hier zentral. Mandanten erwarten online Orientierung zu Chemie, Gerichten und Rechtsgebieten.",
      ],
      courtsNarrative:
        "Amtsgericht Merseburg, Landgericht Halle, OLG Naumburg. Der Sprung nach Halle ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Chemie (Leuna/Chemiedreieck) und Hochschule machen Arbeitsrecht zum Kernsuchfeld — daneben Umwelt- und Industrierecht.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Umweltauflagen-Änderung im Chemiepark sucht ein Mitarbeiter 'Umweltrecht Merseburg'.",
      faq: standardCityFaq(
        "Merseburg",
        {
          amtsgericht: "Amtsgericht Merseburg",
          landgericht: "Landgericht Halle",
          oberlandesgericht: ST_OLG,
        },
        [
          {
            q: "Welches Landgericht ist für Merseburg zuständig?",
            a: "Das Landgericht Halle. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
          {
            q: "Welche Branchen prägen Merseburg?",
            a: "Chemie (Leuna/Chemiedreieck) und Hochschule erzeugen typischerweise Mandate in Arbeits-, Umwelt- und Industrierecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Merseburg und das Chemiedreieck — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "weissenfels",
    name: "Weißenfels",
    bundesland: ST,
    kreisOrBezirk: "Burgenlandkreis",
    stadtTyp: "Große Kreisstadt",
    population: { approx: 38000, label: "rund 38.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Weißenfels",
      landgericht: "Landgericht Halle",
      oberlandesgericht: ST_OLG,
    },
    economy: {
      sectors: ["Lebensmittel/Fleisch", "Schuh-Tradition", "Logistik"],
      profile: "Burgenlandkreis-Stadt mit Fleischwirtschaft und Logistik",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Lebensmittelrecht", "Handelsrecht"],
    landmarks: ["Schloss Neu-Augustusburg"],
    mapCoords: coords(11.98, 51.2),
    nearbySlugs: ["naumburg-saale", "merseburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "weissenfels",
      heroSubtitle:
        "Für Kanzleien an der Saale — wo Fleischwirtschaft, Schuhtradition und Logistik typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Weißenfels liegt im Burgenlandkreis — knapp unter dem üblichen Einwohner-Zielband. Lebensmittel (Fleisch), Schuh-Tradition und Logistik prägen die Wirtschaft — Schloss Neu-Augustusburg ist das Wahrzeichen.",
        "Arbeits- und Lebensmittelrecht sind hier zentral. Mandanten erwarten online Orientierung zu Industrie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Weißenfels, Landgericht Halle, OLG Naumburg. Der Sprung nach Halle ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Fleischwirtschaft, Schuh-Tradition und Logistik erzeugen Mandate in Arbeits-, Lebensmittel- und Handelsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Fleischverarbeiter prüft neue Kennzeichnungspflichten — der Geschäftsführer sucht 'Lebensmittelrecht Weißenfels'.",
      faq: standardCityFaq(
        "Weißenfels",
        {
          amtsgericht: "Amtsgericht Weißenfels",
          landgericht: "Landgericht Halle",
          oberlandesgericht: ST_OLG,
        },
        [
          {
            q: "Welches Landgericht ist für Weißenfels zuständig?",
            a: "Das Landgericht Halle. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
          {
            q: "Welche Branchen prägen Weißenfels?",
            a: "Fleischwirtschaft, Schuh-Tradition und Logistik erzeugen typischerweise Mandate in Arbeits- und Lebensmittelrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Weißenfels und den Burgenlandkreis — ohne erfundene Referenzen.",
    },
  },
];

export const sachsenAnhaltFacts: CityFacts[] = cities.map((city) => {
  const { content, ...facts } = city;
  void content;
  return facts;
});

export const sachsenAnhaltContent: Record<string, CityRecord["content"]> =
  Object.fromEntries(cities.map((c) => [c.slug, c.content]));

export const sachsenAnhaltRecords: CityRecord[] = cities.map(
  ({ content, ...facts }) => ({ ...facts, content }),
);
