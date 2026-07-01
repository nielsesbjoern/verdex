import { lonLatToMapCoords } from "../germanyMap";
import type { CityFacts, CityRecord } from "../types";
import { TH, TH_OLG, standardCityFaq } from "./thueringen-shared";

type CityDef = CityFacts & {
  content: CityRecord["content"];
};

function coords(lon: number, lat: number) {
  return { ...lonLatToMapCoords(lon, lat), anchor: "start" as const };
}

const cities: CityDef[] = [
  {
    slug: "gera",
    name: "Gera",
    bundesland: TH,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 94000, label: "rund 94.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Gera",
      landgericht: "Landgericht Gera",
      oberlandesgericht: TH_OLG,
    },
    economy: {
      sectors: ["Maschinenbau", "Logistik", "Gesundheitswirtschaft"],
      profile: "Ostthüringer Industriestadt mit Maschinenbau und Logistik",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Sozialrecht"],
    landmarks: ["Höhler", "Otto-Dix-Geburtsstadt"],
    mapCoords: coords(12.08, 50.88),
    nearbySlugs: ["jena", "altenburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "gera",
      heroSubtitle:
        "Für Kanzleien in Ostthüringen — wo Maschinenbau, Logistik und Otto-Dix-Stadt typische Mandatsfelder bilden.",
      introParagraphs: [
        "Gera ist kreisfreie Stadt in Ostthüringen. Maschinenbau, Logistik und Gesundheitswirtschaft prägen die Wirtschaft — die Höhler und die Otto-Dix-Tradition prägen das Stadtbild.",
        "Arbeits-, Handels- und Sozialrecht sind hier zentral. Mandanten erwarten online Orientierung zu Industrie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Gera, Landgericht Gera, Thüringer OLG (Sitz Jena). Beide Instanzen liegen in Gera — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Maschinenbau, Logistik und Gesundheitswirtschaft machen Arbeitsrecht zum Kernsuchfeld — daneben Handels- und Sozialrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Betriebsänderung im Maschinenbau sucht ein Mitarbeiter 'Arbeitsrecht Gera'.",
      faq: standardCityFaq(
        "Gera",
        {
          amtsgericht: "Amtsgericht Gera",
          landgericht: "Landgericht Gera",
          oberlandesgericht: TH_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Gera?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das Thüringer OLG hat seinen Sitz in Jena.",
          },
          {
            q: "Welche Branchen prägen Gera?",
            a: "Maschinenbau, Logistik und Gesundheitswirtschaft erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Gera und Ostthüringen — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "jena",
    name: "Jena",
    bundesland: TH,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: {
      approx: 108000,
      label: "rund 108.000",
      year: 2024,
      zensusStrittig: true,
    },
    courts: {
      amtsgericht: "Amtsgericht Jena",
      landgericht: "Landgericht Gera",
      oberlandesgericht: TH_OLG,
    },
    economy: {
      sectors: ["Optik/Photonik", "Universität", "Forschung"],
      keyEmployersOrClusters: ["Carl Zeiss", "Jenoptik", "Schott"],
      profile: "Optik- und Forschungsstadt mit Universität und Thüringer OLG-Sitz",
    },
    primaryLegalArea: "Gewerblicher Rechtsschutz",
    secondaryLegalAreas: ["Arbeitsrecht", "Mietrecht"],
    landmarks: ["JenTower", "Zeiss-Planetarium"],
    mapCoords: coords(11.59, 50.93),
    nearbySlugs: ["erfurt", "gera", "weimar", "altenburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "jena",
      heroSubtitle:
        "Für Kanzleien an der Saale — wo Zeiss, Jenoptik und Thüringer OLG typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Jena ist kreisfreie Stadt an der Großstadt-Grenze und Sitz des Thüringer OLG. Carl Zeiss, Jenoptik, Schott und die Universität prägen Wirtschaft und Forschung — JenTower und Zeiss-Planetarium sind die Wahrzeichen.",
        "Gewerblicher Rechtsschutz, Arbeits- und Mietrecht sind hier zentral. Mandanten erwarten online Orientierung zu Optikcluster, Studentenwohnmarkt und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Jena, Landgericht Gera, Thüringer OLG (Sitz Jena). Das OLG liegt in Jena — für Mandanten aus Thüringen ein zentraler Bezug. Das LG Gera ist für Jena erstinstanzlich in der Berufung zuständig.",
      economyNarrative:
        "Optik, Photonik und Forschung machen gewerblichen Rechtsschutz zum Kernsuchfeld — daneben Arbeits- und Mietrecht im Universitätsumfeld.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Optikhersteller prüft Patentverletzung — der Geschäftsführer sucht 'Patentrecht Jena Zeiss'.",
      faq: standardCityFaq(
        "Jena",
        {
          amtsgericht: "Amtsgericht Jena",
          landgericht: "Landgericht Gera",
          oberlandesgericht: TH_OLG,
        },
        [
          {
            q: "Liegt das Thüringer OLG in Jena?",
            a: "Ja — Jena ist Sitz des Thüringer OLG. Das ist ein starker Vertrauensfaktor für Mandanten aus Thüringen.",
          },
          {
            q: "Warum ist für Jena das LG Gera zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Thüringen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Jena und die Saale-Region — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "nordhausen",
    name: "Nordhausen",
    bundesland: TH,
    kreisOrBezirk: "Landkreis Nordhausen",
    stadtTyp: "Kreisstadt",
    population: { approx: 42000, label: "rund 42.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Nordhausen",
      landgericht: "Landgericht Mühlhausen",
      oberlandesgericht: TH_OLG,
    },
    economy: {
      sectors: ["Maschinenbau", "Spirituosen", "Tabak"],
      profile: "Harzrand-Stadt mit Nordhäuser Korn und Maschinenbau",
    },
    primaryLegalArea: "Handelsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Gewerberecht"],
    landmarks: ["Roland-Statue", "Harzquerbahn"],
    mapCoords: coords(10.79, 51.5),
    nearbySlugs: ["muelhausen", "suhl"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "nordhausen",
      heroSubtitle:
        "Für Kanzleien am Harz — wo Nordhäuser Korn, Maschinenbau und Harzquerbahn typische Mandatsfelder bilden.",
      introParagraphs: [
        "Nordhausen ist Kreisstadt im Landkreis Nordhausen am Harz. Maschinenbau, Spirituosen (Nordhäuser Korn) und Tabak prägen die Wirtschaft — Roland-Statue und Harzquerbahn sind die Wahrzeichen.",
        "Handels- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Industrie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Nordhausen, Landgericht Mühlhausen, Thüringer OLG (Sitz Jena). Der Sprung nach Mühlhausen ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Maschinenbau, Spirituosen und Tabak erzeugen Mandate in Handels- und Arbeitsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Spirituosenhersteller prüft neue Kennzeichnungspflichten — der Geschäftsführer sucht 'Lebensmittelrecht Nordhausen'.",
      faq: standardCityFaq(
        "Nordhausen",
        {
          amtsgericht: "Amtsgericht Nordhausen",
          landgericht: "Landgericht Mühlhausen",
          oberlandesgericht: TH_OLG,
        },
        [
          {
            q: "Warum ist für Nordhausen das LG Mühlhausen zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Thüringen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Branchen prägen Nordhausen?",
            a: "Maschinenbau, Spirituosen und Tabak erzeugen typischerweise Mandate in Handels- und Arbeitsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Nordhausen und den Harz — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "muelhausen",
    name: "Mühlhausen",
    bundesland: TH,
    kreisOrBezirk: "Unstrut-Hainich-Kreis",
    stadtTyp: "Große Kreisstadt",
    population: { approx: 36000, label: "rund 36.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Mühlhausen",
      landgericht: "Landgericht Mühlhausen",
      oberlandesgericht: TH_OLG,
    },
    economy: {
      sectors: ["Mittelstand", "Landwirtschaft", "Tourismus"],
      profile: "Reformationsstadt mit Mittelstand und Landwirtschaft",
    },
    primaryLegalArea: "Agrarrecht",
    secondaryLegalAreas: ["Handelsrecht", "Tourismusrecht"],
    landmarks: ["Stadtmauer", "Müntzer-Gedenkstätte"],
    mapCoords: coords(10.45, 51.21),
    nearbySlugs: ["nordhausen", "eisenach"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "muelhausen",
      heroSubtitle:
        "Für Kanzleien in der Unstrut-Region — wo Müntzer-Stadt, Landwirtschaft und Mittelstand typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Mühlhausen liegt im Unstrut-Hainich-Kreis — knapp unter dem üblichen Einwohner-Zielband, aber mit eigenem Landgericht gerichtlich relevant. Mittelstand, Landwirtschaft und Tourismus prägen die Wirtschaft.",
        "Agrar- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Landwirtschaft und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Mühlhausen, Landgericht Mühlhausen, Thüringer OLG (Sitz Jena). Beide Instanzen liegen in Mühlhausen — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Landwirtschaft, Mittelstand und Tourismus erzeugen Mandate in Agrar-, Handels- und Tourismusrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Landwirt prüft neue Düngemittelvorschriften — er sucht 'Agrarrecht Mühlhausen'.",
      faq: standardCityFaq(
        "Mühlhausen",
        {
          amtsgericht: "Amtsgericht Mühlhausen",
          landgericht: "Landgericht Mühlhausen",
          oberlandesgericht: TH_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Mühlhausen?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das Thüringer OLG hat seinen Sitz in Jena.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Mühlhausen?",
            a: "Agrar- und Handelsrecht stehen im ländlichen Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Mühlhausen und die Unstrut-Region — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "gotha",
    name: "Gotha",
    bundesland: TH,
    kreisOrBezirk: "Landkreis Gotha",
    stadtTyp: "Kreisstadt",
    population: { approx: 45000, label: "rund 45.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Gotha",
      landgericht: "Landgericht Erfurt",
      oberlandesgericht: TH_OLG,
    },
    economy: {
      sectors: ["Versicherung", "Fahrzeugbau", "Verlagswesen"],
      profile: "Residenzstadt mit Versicherungstradition und Straßenbahnbau",
    },
    primaryLegalArea: "Versicherungsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Vertragsrecht"],
    landmarks: ["Schloss Friedenstein"],
    mapCoords: coords(10.7, 50.95),
    nearbySlugs: ["erfurt", "weimar", "eisenach"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "gotha",
      heroSubtitle:
        "Für Kanzleien in Mittelthüringen — wo Versicherungstradition, Straßenbahnbau und Schloss Friedenstein typische Mandatsfelder bilden.",
      introParagraphs: [
        "Gotha ist Kreisstadt im Landkreis Gotha. Versicherungstradition, Fahrzeugbau (Straßenbahn) und Verlagswesen prägen die Wirtschaft — Schloss Friedenstein ist das Wahrzeichen.",
        "Versicherungs- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Policen, Verträgen und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Gotha, Landgericht Erfurt, Thüringer OLG (Sitz Jena). Der Sprung nach Erfurt ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Versicherungen, Fahrzeugbau und Verlagswesen erzeugen Mandate in Versicherungs- und Handelsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Versicherungsnehmer prüft Leistungsablehnung — er sucht 'Versicherungsrecht Gotha'.",
      faq: standardCityFaq(
        "Gotha",
        {
          amtsgericht: "Amtsgericht Gotha",
          landgericht: "Landgericht Erfurt",
          oberlandesgericht: TH_OLG,
        },
        [
          {
            q: "Welches Landgericht ist für Gotha zuständig?",
            a: "Das Landgericht Erfurt. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Gotha?",
            a: "Versicherungs- und Handelsrecht stehen im Versicherungs- und Verlags-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Gotha und Mittelthüringen — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "eisenach",
    name: "Eisenach",
    bundesland: TH,
    kreisOrBezirk: "Wartburgkreis",
    stadtTyp: "Kreisstadt",
    population: { approx: 42000, label: "rund 42.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Eisenach",
      landgericht: "Landgericht Meiningen",
      oberlandesgericht: TH_OLG,
    },
    economy: {
      sectors: ["Automotive", "Tourismus"],
      profile: "Wartburgstadt mit Automotive-Zulieferern und UNESCO-Welterbe",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Tourismusrecht", "Handelsrecht"],
    landmarks: ["UNESCO-Welterbe Wartburg", "Bachhaus"],
    mapCoords: coords(10.32, 50.98),
    nearbySlugs: ["muelhausen", "gotha", "suhl"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "eisenach",
      heroSubtitle:
        "Für Kanzleien an der Wartburg — wo Automotive, Bachstadt und UNESCO-Welterbe typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Eisenach ist Kreisstadt im Wartburgkreis. Automotive-Zulieferer (Opel/BMW-Umfeld) und Tourismus prägen die Wirtschaft — Wartburg und Bachhaus sind UNESCO-Welterbe.",
        "Arbeits- und Tourismusrecht sind hier zentral. Mandanten erwarten online Orientierung zu Automotive, Gastronomie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Eisenach, Landgericht Meiningen, Thüringer OLG (Sitz Jena). Der Sprung nach Meiningen ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Automotive und Tourismus machen Arbeitsrecht zum Kernsuchfeld — daneben Tourismusrecht rund um Wartburg und Bachstadt.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Gastronom nahe der Wartburg prüft neue Lärmschutzauflagen — er sucht 'Gastronomierecht Eisenach'.",
      faq: standardCityFaq(
        "Eisenach",
        {
          amtsgericht: "Amtsgericht Eisenach",
          landgericht: "Landgericht Meiningen",
          oberlandesgericht: TH_OLG,
        },
        [
          {
            q: "Warum ist für Eisenach das LG Meiningen zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Thüringen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Eisenach?",
            a: "Arbeitsrecht (Automotive) und Tourismusrecht stehen im Wartburg-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Eisenach und den Wartburgkreis — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "weimar",
    name: "Weimar",
    bundesland: TH,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 65000, label: "rund 65.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Weimar",
      landgericht: "Landgericht Erfurt",
      oberlandesgericht: TH_OLG,
    },
    economy: {
      sectors: ["Kultur/Tourismus", "Bauhaus-Universität", "Verwaltung"],
      profile: "Klassische Kulturstadt mit Bauhaus und UNESCO-Welterbe",
    },
    primaryLegalArea: "Urheberrecht",
    secondaryLegalAreas: ["Tourismusrecht", "Mietrecht"],
    landmarks: ["UNESCO Klassisches Weimar", "Goethe-/Schillerhaus", "Bauhaus"],
    mapCoords: coords(11.33, 50.98),
    nearbySlugs: ["erfurt", "jena", "gotha"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "weimar",
      heroSubtitle:
        "Für Kanzleien in der Kulturstadt — wo Goethe, Bauhaus und Tourismus typische Mandatsfelder bilden.",
      introParagraphs: [
        "Weimar ist kreisfreie Kulturstadt. UNESCO-Welterbe Klassisches Weimar, Bauhaus-Universität und Tourismus prägen Wirtschaft und Mandatsumfeld — Goethe- und Schillerhaus sind die Wahrzeichen.",
        "Urheber-, Tourismus- und Mietrecht sind hier zentral. Mandanten erwarten online Orientierung zu Kultur, Gastronomie und Studentenwohnmarkt.",
      ],
      courtsNarrative:
        "Amtsgericht Weimar, Landgericht Erfurt, Thüringer OLG (Sitz Jena). Der Sprung nach Erfurt ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Kultur, Tourismus und Bauhaus-Universität erzeugen Mandate in Urheber-, Tourismus- und Mietrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Veranstalter prüft Nutzungsrechte für Live-Übertragung — er sucht 'Urheberrecht Weimar'.",
      faq: standardCityFaq(
        "Weimar",
        {
          amtsgericht: "Amtsgericht Weimar",
          landgericht: "Landgericht Erfurt",
          oberlandesgericht: TH_OLG,
        },
        [
          {
            q: "Welches Landgericht ist für Weimar zuständig?",
            a: "Das Landgericht Erfurt. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Weimar?",
            a: "Urheber-, Tourismus- und Mietrecht stehen im Kultur- und Universitätskontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Weimar und die Kulturregion — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "suhl",
    name: "Suhl",
    bundesland: TH,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 37000, label: "rund 37.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Suhl",
      landgericht: "Landgericht Meiningen",
      oberlandesgericht: TH_OLG,
    },
    economy: {
      sectors: ["Waffen/Feinmechanik", "Fahrzeugbau", "Thüringer-Wald-Tourismus"],
      profile: "Waffenstadt im Thüringer Wald mit Feinmechanik-Tradition",
    },
    primaryLegalArea: "Gewerblicher Rechtsschutz",
    secondaryLegalAreas: ["Arbeitsrecht", "Handelsrecht"],
    landmarks: ["Waffenmuseum", "Ottilienbad"],
    mapCoords: coords(10.69, 50.61),
    nearbySlugs: ["nordhausen", "eisenach"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "suhl",
      heroSubtitle:
        "Für Kanzleien im Thüringer Wald — wo Waffenmuseum, Feinmechanik und Fahrzeugbau typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Suhl ist kreisfreie Stadt im Thüringer Wald — knapp unter dem üblichen Einwohner-Zielband. Waffen- und Feinmechanik-Tradition, Fahrzeugbau und Wald-Tourismus prägen die Wirtschaft.",
        "Gewerblicher Rechtsschutz und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Industrie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Suhl, Landgericht Meiningen, Thüringer OLG (Sitz Jena). Der Sprung nach Meiningen ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Feinmechanik, Fahrzeugbau und Tourismus erzeugen Mandate in gewerblichem Rechtsschutz und Arbeitsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Feinmechanikbetrieb prüft Markenverletzung — der Geschäftsführer sucht 'Markenrecht Suhl'.",
      faq: standardCityFaq(
        "Suhl",
        {
          amtsgericht: "Amtsgericht Suhl",
          landgericht: "Landgericht Meiningen",
          oberlandesgericht: TH_OLG,
        },
        [
          {
            q: "Warum ist für Suhl das LG Meiningen zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Thüringen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Suhl?",
            a: "Gewerblicher Rechtsschutz und Arbeitsrecht stehen im Feinmechanik-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Suhl und den Thüringer Wald — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "altenburg",
    name: "Altenburg",
    bundesland: TH,
    kreisOrBezirk: "Landkreis Altenburger Land",
    stadtTyp: "Kreisstadt",
    population: { approx: 31000, label: "rund 31.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Altenburg",
      landgericht: "Landgericht Gera",
      oberlandesgericht: TH_OLG,
    },
    economy: {
      sectors: ["Spielkarten", "Maschinenbau", "Agrar"],
      profile: "Skat-Stadt mit Spielkartenherstellung und Maschinenbau",
    },
    primaryLegalArea: "Handelsrecht",
    secondaryLegalAreas: ["Agrarrecht", "Markenrecht"],
    landmarks: ["Residenzschloss", "Skatbrunnen"],
    mapCoords: coords(12.44, 50.99),
    nearbySlugs: ["gera", "jena"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "altenburg",
      heroSubtitle:
        "Für Kanzleien in der Skat-Stadt — wo Spielkarten, Maschinenbau und Agrar typische Mandatsfelder bilden.",
      introParagraphs: [
        "Altenburg ist Kreisstadt im Altenburger Land — unter dem üblichen Einwohner-Zielband, aber als Skat-Stadt und Spielkartenherstellungsstandort bekannt. Maschinenbau und Agrar ergänzen das Profil.",
        "Handels- und Agrarrecht sind hier zentral. Mandanten erwarten online Orientierung zu Industrie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Altenburg, Landgericht Gera, Thüringer OLG (Sitz Jena). Der Sprung nach Gera ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Spielkartenherstellung, Maschinenbau und Agrar erzeugen Mandate in Handels-, Agrar- und Markenrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Spielkartenhersteller prüft Markenverletzung — der Inhaber sucht 'Markenrecht Altenburg'.",
      faq: standardCityFaq(
        "Altenburg",
        {
          amtsgericht: "Amtsgericht Altenburg",
          landgericht: "Landgericht Gera",
          oberlandesgericht: TH_OLG,
        },
        [
          {
            q: "Warum ist für Altenburg das LG Gera zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Thüringen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Branchen prägen Altenburg?",
            a: "Spielkartenherstellung, Maschinenbau und Agrar erzeugen typischerweise Mandate in Handels- und Agrarrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Altenburg und das Altenburger Land — ohne erfundene Referenzen.",
    },
  },
];

export const thueringenFacts: CityFacts[] = cities.map((city) => {
  const { content, ...facts } = city;
  void content;
  return facts;
});

export const thueringenContent: Record<string, CityRecord["content"]> =
  Object.fromEntries(cities.map((c) => [c.slug, c.content]));

export const thueringenRecords: CityRecord[] = cities.map(
  ({ content, ...facts }) => ({ ...facts, content }),
);
