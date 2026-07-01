import { lonLatToMapCoords } from "../germanyMap";
import type { CityFacts, CityRecord } from "../types";
import { BY, standardCityFaq } from "./bayern-shared";

type CityDef = CityFacts & {
  content: CityRecord["content"];
};

function coords(lon: number, lat: number) {
  return { ...lonLatToMapCoords(lon, lat), anchor: "start" as const };
}

const cities: CityDef[] = [
  {
    slug: "kempten",
    name: "Kempten (Allgäu)",
    bundesland: BY,
    kreisOrBezirk: "Schwaben",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 70000, label: "rund 70.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Kempten",
      landgericht: "Landgericht Kempten (Allgäu)",
      oberlandesgericht: "OLG München",
    },
    economy: {
      sectors: ["Milchwirtschaft/Lebensmittel", "Tourismus", "Mittelstand"],
      profile:
        "Allgäuer Mittelzentrum mit Lebensmittelwirtschaft und Tourismus-Drehscheibe",
    },
    primaryLegalArea: "Agrar- und Lebensmittelrecht",
    secondaryLegalAreas: ["Tourismusrecht", "Handelsrecht"],
    landmarks: ["Residenz", "Allgäu"],
    mapCoords: coords(10.32, 47.72),
    nearbySlugs: ["augsburg", "memmingen", "kaufbeuren", "neu-ulm"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "kempten",
      heroSubtitle:
        "Für Kanzleien im Allgäu — wo Milchwirtschaft, Alpentourismus und mittelständische Betriebe unterschiedliche Mandatsfelder verbinden.",
      introParagraphs: [
        "Kempten ist eines der wirtschaftlichen Zentren im Allgäu: Lebensmittel- und Milchwirtschaft, Tourismus und ein breiter Mittelstand prägen den Markt. Die Residenzstadt verbindet lange Handelsgeschichte mit moderner Regionalwirtschaft.",
        "Mandanten suchen oft gezielt nach Agrar- oder Lebensmittelrecht, Gastronomie und Tourismus — oder nach Arbeitsrecht in regionalen Betrieben. Wer das online nicht erkennbar macht, verliert den ersten Klick.",
      ],
      courtsNarrative:
        "Mandate aus Kempten werden erstinstanzlich vor dem Amtsgericht Kempten geführt, in der Berufung vor dem Landgericht Kempten (Allgäu), als Oberlandesgericht ist das OLG München zuständig. Amts- und Landgericht liegen in derselben Stadt — für Mandanten ein seltener Vorteil.",
      economyNarrative:
        "Milchwirtschaft, Lebensmittelverarbeitung und Allgäu-Tourismus erzeugen Mandate in Agrar-, Gewerbe- und Gastronomierecht. Kanzleien mit Schwerpunkten in diesen Feldern profitieren von einer Website, die Allgäu-Kontext und Rechtsgebiete zusammenführt.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Milchverarbeiter prüft neue Lieferverträge mit Landwirten — der Geschäftsführer sucht abends 'Lebensmittelrecht Kempten'. So könnte ein typisches Suchszenario aussehen.",
      faq: standardCityFaq(
        "Kempten (Allgäu)",
        {
          amtsgericht: "Amtsgericht Kempten",
          landgericht: "Landgericht Kempten (Allgäu)",
          oberlandesgericht: "OLG München",
        },
        [
          {
            q: "Liegen AG und LG für Kempten in derselben Stadt?",
            a: "Ja — Amts- und Landgericht Kempten (Allgäu) sind lokal benennbar. Das erleichtert Mandanten die Orientierung und ist ein starker Vertrauensfaktor auf Ihrer Website.",
          },
          {
            q: "Welche Rechtsgebiete passen zum Allgäu?",
            a: "Neben Agrar- und Lebensmittelrecht sind Tourismus-, Gastronomie- und Arbeitsrecht in regionalen Betrieben häufige Suchthemen — abhängig von der Ausrichtung Ihrer Kanzlei.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Kempten und das Allgäu strukturiert — Gerichte, Wirtschaft, typisches Suchverhalten. Daraus entsteht ein Auftritt, der lokal nachvollziehbar wirkt, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "memmingen",
    name: "Memmingen",
    bundesland: BY,
    kreisOrBezirk: "Schwaben",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 45000, label: "rund 45.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Memmingen",
      landgericht: "Landgericht Memmingen",
      oberlandesgericht: "OLG München",
    },
    economy: {
      sectors: ["Logistik", "Maschinenbau", "Luftverkehr"],
      keyEmployersOrClusters: ["Allgäu Airport"],
      profile: "Logistik-Knotenpunkt im Allgäu mit Maschinenbau und Flughafen",
    },
    primaryLegalArea: "Speditions- und Transportrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Handelsrecht"],
    landmarks: ["Marktplatz", "Steuerhaus"],
    mapCoords: coords(10.18, 47.99),
    nearbySlugs: ["augsburg", "kempten", "kaufbeuren"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "memmingen",
      heroSubtitle:
        "Für Kanzleien an der Logistik-Achse Allgäu — wo Transport, Maschinenbau und Flughafen unterschiedliche Mandatsfelder erzeugen.",
      introParagraphs: [
        "Memmingen verbindet historische Altstadt mit moderner Logistikinfrastruktur. Der Allgäu Airport, Speditionen und Maschinenbau machen die Stadt zu einem wirtschaftlichen Drehkreuz zwischen München und Bodensee.",
        "Transport- und Arbeitsrecht sind hier keine Randthemen — Mandanten aus Logistik und Industrie suchen gezielt nach Kanzleien, die das verstehen.",
      ],
      courtsNarrative:
        "Erstinstanzlich Amtsgericht Memmingen, in der Berufung Landgericht Memmingen, OLG München. Beide Instanzen liegen in Memmingen — ein klarer regionaler Bezug für Mandanten.",
      economyNarrative:
        "Logistik, Spedition und Maschinenbau prägen das Mandatsumfeld. Kanzleien mit Schwerpunkten in Transport-, Arbeits- oder Handelsrecht sollten das online erkennbar machen — statt generischer Rechtsgebiete-Listen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Spediteur streitet über Frachtschäden nach einem Unfall auf der A96 — der Disponent sucht 'Transportrecht Memmingen'.",
      faq: standardCityFaq(
        "Memmingen",
        {
          amtsgericht: "Amtsgericht Memmingen",
          landgericht: "Landgericht Memmingen",
          oberlandesgericht: "OLG München",
        },
        [
          {
            q: "Ist Memmingen ein eigenes Landgericht?",
            a: "Ja — das Landgericht Memmingen ist für die Region zuständig. Das ist für Mandanten selten bekannt und ein wertvoller Orientierungspunkt auf Ihrer Seite.",
          },
          {
            q: "Welche Branchen prägen Memmingen?",
            a: "Logistik, Spedition, Maschinenbau und der Allgäu Airport erzeugen typischerweise Mandate in Transport-, Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Memmingen und die Allgäu-Logistikachse — sachlich, ohne erfundene Referenzen oder Portfolio-Ansprüche.",
    },
  },
  {
    slug: "neu-ulm",
    name: "Neu-Ulm",
    bundesland: BY,
    kreisOrBezirk: "Landkreis Neu-Ulm",
    stadtTyp: "Kreisstadt",
    population: { approx: 60000, label: "rund 60.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Neu-Ulm",
      landgericht: "Landgericht Memmingen",
      oberlandesgericht: "OLG München",
    },
    economy: {
      sectors: ["Industrie", "Handel", "Grenzregion Ulm"],
      profile:
        "Industriestadt an der Donau, Doppelstadt mit Ulm über die Landesgrenze",
    },
    primaryLegalArea: "Handels- und Arbeitsrecht",
    secondaryLegalAreas: ["Gesellschaftsrecht", "Vertragsrecht"],
    landmarks: ["Donauufer", "Edwin-Scharff-Haus"],
    mapCoords: coords(10.0, 48.4),
    nearbySlugs: ["augsburg", "kempten", "memmingen", "kaufbeuren"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "neu-ulm",
      heroSubtitle:
        "Für Kanzleien an der Donau — wo bayerische Industrie und die Ulmer Nachbarschaft ein gemeinsames Wirtschaftsgebiet bilden.",
      introParagraphs: [
        "Neu-Ulm und Ulm bilden eine Doppelstadt über die Grenze von Bayern und Baden-Württemberg. Industrie, Handel und Pendlerströme verbinden beide Ufer der Donau zu einem zusammenhängenden Arbeitsmarkt.",
        "Mandanten suchen oft handels- oder arbeitsrechtliche Beratung — manchmal ohne zu wissen, dass das zuständige Landgericht in Memmingen liegt, nicht in Ulm.",
      ],
      courtsNarrative:
        "Amtsgericht Neu-Ulm, Landgericht Memmingen, OLG München. Der Sprung von Neu-Ulm nach Memmingen ist für Mandanten nicht offensichtlich — eine verständliche Darstellung schafft Vertrauen.",
      economyNarrative:
        "Industrie und Handel an der Donau erzeugen klassische Mandate in Arbeits-, Handels- und Vertragsrecht. Kanzleien, die die Ulmer Nachbarschaft und den bayerischen Gerichtsbezirk zusammen benennen, wirken kompetent statt generisch.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Neu-Ulmer Mittelständler verhandelt mit einem baden-württembergischen Lieferanten — der Inhaber sucht 'Handelsrecht Neu-Ulm'.",
      faq: standardCityFaq(
        "Neu-Ulm",
        {
          amtsgericht: "Amtsgericht Neu-Ulm",
          landgericht: "Landgericht Memmingen",
          oberlandesgericht: "OLG München",
        },
        [
          {
            q: "Warum ist für Neu-Ulm das LG Memmingen zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Bayern — nicht der sichtbaren Nachbarschaft zu Ulm. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Spielt die Grenze zu Baden-Württemberg eine Rolle?",
            a: "Wirtschaftlich ja — rechtlich bleibt der bayerische Gerichtsbezirk maßgeblich. Ihre Website kann beides benennen, ohne juristische Vorab-Beratung zu ersetzen.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Neu-Ulm und die Donau-Region — Gerichte, Wirtschaft, typisches Suchverhalten — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "schweinfurt",
    name: "Schweinfurt",
    bundesland: BY,
    kreisOrBezirk: "Unterfranken",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 54000, label: "rund 54.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Schweinfurt",
      landgericht: "Landgericht Schweinfurt",
      oberlandesgericht: "OLG Bamberg",
    },
    economy: {
      sectors: [
        "Wälzlager/Automotive",
        "Automobilzulieferer",
        "Strukturwandel",
      ],
      keyEmployersOrClusters: ["Schaeffler", "SKF", "ZF"],
      profile:
        "Industriestadt mit Wälzlager- und Zuliefertradition im Strukturwandel",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Insolvenzrecht", "Sozialplanrecht"],
    landmarks: ["Markt", "Friedrich-Rückert-Denkmal"],
    mapCoords: coords(10.23, 50.04),
    nearbySlugs: ["nuernberg", "aschaffenburg", "bamberg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "schweinfurt",
      heroSubtitle:
        "Für Kanzleien in der Industriestadt — wo Betriebsübergänge, Sozialpläne und Arbeitsrecht im Strukturwandel zentral sind.",
      introParagraphs: [
        "Schweinfurt lebt von Wälzlager- und Automobilzulieferindustrie — und vom damit verbundenen Strukturwandel. Schaeffler, SKF und ZF prägen den Arbeitsmarkt; Restrukturierungen sind kein Randthema.",
        "Mandanten suchen oft gezielt Arbeitsrecht, Insolvenzrecht oder Sozialplanrecht — besonders nach Ankündigungen von Betriebsänderungen oder Transfergesellschaften.",
      ],
      courtsNarrative:
        "Amtsgericht Schweinfurt, Landgericht Schweinfurt, OLG Bamberg. Beide Instanzen liegen in Schweinfurt — ein klarer regionaler Bezug, den Mandanten selten kennen.",
      economyNarrative:
        "Automotive-Zulieferer und Strukturwandel machen Arbeitsrecht zum Kernsuchfeld. Kanzleien mit Erfahrung in Betriebsübergängen und Sozialplänen sollten das online erkennbar machen — ohne konkrete Fallbehauptungen.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Restrukturierungsankündigung sucht ein Werksmitarbeiter 'Arbeitsrecht Schweinfurt Transfergesellschaft'.",
      faq: standardCityFaq(
        "Schweinfurt",
        {
          amtsgericht: "Amtsgericht Schweinfurt",
          landgericht: "Landgericht Schweinfurt",
          oberlandesgericht: "OLG Bamberg",
        },
        [
          {
            q: "Welche Rechtsgebiete sind in Schweinfurt besonders gefragt?",
            a: "Arbeitsrecht, Insolvenzrecht und Sozialplanrecht stehen im Zusammenhang mit Industriestrukturwandel oft im Vordergrund — abhängig von Ihrer Kanzleiausrichtung.",
          },
          {
            q: "Ist Schweinfurt ein eigenes Landgericht?",
            a: "Ja — das Landgericht Schweinfurt ist für Unterfranken-Industriemandate zuständig. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Schweinfurt und die Industrieregion Unterfranken — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "passau",
    name: "Passau",
    bundesland: BY,
    kreisOrBezirk: "Niederbayern",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 53000, label: "rund 53.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Passau",
      landgericht: "Landgericht Passau",
      oberlandesgericht: "OLG München",
    },
    economy: {
      sectors: ["Tourismus", "Universität", "Donau-Schifffahrt"],
      profile:
        "Dreiflüssestadt mit Tourismus, Universität und Nähe zu Österreich",
    },
    primaryLegalArea: "Tourismus- und Gaststättenrecht",
    secondaryLegalAreas: ["Grenzüberschreitendes Recht", "Mietrecht"],
    landmarks: ["Dom St. Stephan", "Veste Oberhaus"],
    mapCoords: coords(13.43, 48.57),
    nearbySlugs: ["regensburg", "landshut", "neumarkt-in-der-oberpfalz"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "passau",
      heroSubtitle:
        "Für Kanzleien an der Dreiflüssestadt — wo Donau-Tourismus, Universität und österreichische Nachbarschaft zusammentreffen.",
      introParagraphs: [
        "Passau liegt dort, wo Inn, Ilz und Donau zusammenfließen. Tourismus, Universität und Donau-Schifffahrt prägen die Wirtschaft — dazu kommt die Nähe zu Österreich als zusätzliches Mandatsfeld.",
        "Gastronomie, Hotellerie und saisonale Vermietung erzeugen typische Suchanfragen zu Tourismus- und Gaststättenrecht — oft verbunden mit grenzüberschreitenden Fragen.",
      ],
      courtsNarrative:
        "Amtsgericht Passau, Landgericht Passau, OLG München. Beide Instanzen liegen in der Dreiflüssestadt — für Mandanten ein seltener Vorteil.",
      economyNarrative:
        "Tourismus, Schifffahrt und Universität machen Passau rechtlich vielfältig. Kanzleien mit Schwerpunkten in Gastronomie-, Tourismus- oder grenzüberschreitendem Recht profitieren von einem Auftritt, der die Passauer Besonderheiten benennt.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Gastwirt an der Donau prüft neue Lärmschutzauflagen für die Außenterrasse — er nachts 'Gaststättenrecht Passau' googelt.",
      faq: standardCityFaq(
        "Passau",
        {
          amtsgericht: "Amtsgericht Passau",
          landgericht: "Landgericht Passau",
          oberlandesgericht: "OLG München",
        },
        [
          {
            q: "Spielt die Nähe zu Österreich eine Rolle?",
            a: "Wirtschaftlich und mandatsbezogen ja — Ihre Website kann grenzüberschreitende Bezüge benennen, ohne juristische Vorab-Beratung zu ersetzen.",
          },
          {
            q: "Welche Branchen prägen Passau?",
            a: "Tourismus, Gastronomie, Donau-Schifffahrt und die Universität erzeugen typischerweise Mandate in Tourismus-, Gaststätten- und Mietrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Passau und Niederbayern — Gerichte, Wirtschaft, typisches Suchverhalten — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "landshut",
    name: "Landshut",
    bundesland: BY,
    kreisOrBezirk: "Niederbayern",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 75000, label: "rund 75.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Landshut",
      landgericht: "Landgericht Landshut",
      oberlandesgericht: "OLG München",
    },
    economy: {
      sectors: ["Automotive", "Mittelstand"],
      keyEmployersOrClusters: ["BMW-Werk Landshut"],
      profile: "Niederbayerisches Zentrum mit BMW-Werk und starkem Mittelstand",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Vertragsrecht"],
    landmarks: ["Burg Trausnitz", "Landshuter Hochzeit"],
    mapCoords: coords(12.15, 48.54),
    nearbySlugs: ["muenchen", "regensburg", "passau", "freising"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "landshut",
      heroSubtitle:
        "Für Kanzleien in Niederbayern — wo BMW-Werk, Mittelstand und historische Altstadt einen gemischten Mandatsmarkt bilden.",
      introParagraphs: [
        "Landshut verbindet gotische Altstadt mit modernem Automotive-Standort. Das BMW-Werk und ein breiter Mittelstand machen Arbeitsrecht zu einem zentralen Suchfeld — neben klassischem Handelsrecht.",
        "Mandanten aus Werk und Mittelstand erwarten online schnelle Orientierung zu Arbeits- und Vertragsfragen.",
      ],
      courtsNarrative:
        "Amtsgericht Landshut, Landgericht Landshut, OLG München. Beide Instanzen liegen in Landshut — ein klarer regionaler Bezug für Mandanten.",
      economyNarrative:
        "Automotive und Mittelstand dominieren. Kanzleien mit Schwerpunkten in Arbeits- oder Handelsrecht sollten das online erkennbar machen — statt generischer Rechtsgebiete-Listen.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Schichtmodell-Änderung im Werk sucht ein Mitarbeiter 'Arbeitsrecht Landshut'.",
      faq: standardCityFaq(
        "Landshut",
        {
          amtsgericht: "Amtsgericht Landshut",
          landgericht: "Landgericht Landshut",
          oberlandesgericht: "OLG München",
        },
        [
          {
            q: "Welche Wirtschaft prägt Landshut?",
            a: "Das BMW-Werk und ein breiter Mittelstand erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
          {
            q: "Liegen AG und LG in Landshut?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Region.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Landshut und Niederbayern — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "rosenheim",
    name: "Rosenheim",
    bundesland: BY,
    kreisOrBezirk: "Oberbayern",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 64000, label: "rund 64.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Rosenheim",
      landgericht: "Landgericht Traunstein",
      oberlandesgericht: "OLG München",
    },
    economy: {
      sectors: ["Holz/Bau", "Handel", "Alpen-Tourismus"],
      profile: "Tor zu den Alpen mit Holz-, Bau- und Tourismuswirtschaft",
    },
    primaryLegalArea: "Bau- und Handwerksrecht",
    secondaryLegalAreas: ["Tourismusrecht", "Handelsrecht"],
    landmarks: ["Mittertor", "Innpromenade"],
    mapCoords: coords(12.13, 47.86),
    nearbySlugs: ["muenchen", "dachau", "freising"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "rosenheim",
      heroSubtitle:
        "Für Kanzleien am Inn — wo Holzbau, Handwerk und Alpen-Tourismus typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Rosenheim ist das wirtschaftliche Tor zu den Alpen. Holz- und Bauindustrie, Handel und Tourismus prägen den Markt — dazu kommen Handwerksbetriebe im Umland.",
        "Bau- und Handwerksrecht sind hier keine Randthemen. Mandanten suchen gezielt nach Kanzleien, die regionale Wirtschaft und Rechtsgebiete zusammenführen.",
      ],
      courtsNarrative:
        "Amtsgericht Rosenheim, Landgericht Traunstein, OLG München. Der Sprung von Rosenheim nach Traunstein ist für Mandanten nicht offensichtlich — eine verständliche Darstellung schafft Vertrauen.",
      economyNarrative:
        "Holzbau, Handwerk und Alpen-Tourismus erzeugen Mandate in Bau-, Handwerks- und Tourismusrecht. Kanzleien mit diesen Schwerpunkten profitieren von einem Auftritt, der Rosenheim und den Gerichtsbezirk Traunstein benennt.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Bauunternehmer streitet über Nachträge an einem Hotelprojekt — der Bauleiter sucht 'Baurecht Rosenheim'.",
      faq: standardCityFaq(
        "Rosenheim",
        {
          amtsgericht: "Amtsgericht Rosenheim",
          landgericht: "Landgericht Traunstein",
          oberlandesgericht: "OLG München",
        },
        [
          {
            q: "Warum ist für Rosenheim das LG Traunstein zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Bayern — nicht dem Stadtnamen auf dem Briefkopf. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Branchen prägen Rosenheim?",
            a: "Holz- und Bauindustrie, Handwerk, Handel und Alpen-Tourismus erzeugen typischerweise Mandate in Bau-, Handwerks- und Tourismusrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Rosenheim und Oberbayern — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "bayreuth",
    name: "Bayreuth",
    bundesland: BY,
    kreisOrBezirk: "Oberfranken",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 74000, label: "rund 74.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Bayreuth",
      landgericht: "Landgericht Bayreuth",
      oberlandesgericht: "OLG Bamberg",
    },
    economy: {
      sectors: ["Universität", "Maschinenbau", "Festspiel-Tourismus"],
      profile: "Universitäts- und Festspielstadt mit Maschinenbau",
    },
    primaryLegalArea: "Urheber- und Veranstaltungsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Handelsrecht"],
    landmarks: ["Festspielhaus", "Markgräfliches Opernhaus (UNESCO)"],
    mapCoords: coords(11.58, 49.95),
    nearbySlugs: ["nuernberg", "bamberg", "hof", "coburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "bayreuth",
      heroSubtitle:
        "Für Kanzleien in der Festspielstadt — wo Wagner-Tourismus, Universität und Maschinenbau unterschiedliche Mandatsfelder verbinden.",
      introParagraphs: [
        "Bayreuth lebt von Wagner-Festspielen, Universität und Maschinenbau. Saisonale Veranstaltungen, Kulturbetrieb und Industrie erzeugen ein breites Mandatsfeld — von Urheberrecht bis Arbeitsrecht.",
        "Mandanten suchen oft gezielt nach Veranstaltungs-, Urheber- oder Arbeitsrecht — besonders im Festspiel-Kontext.",
      ],
      courtsNarrative:
        "Amtsgericht Bayreuth, Landgericht Bayreuth, OLG Bamberg. Beide Instanzen liegen in Bayreuth — ein klarer regionaler Bezug.",
      economyNarrative:
        "Festspiel-Tourismus, Universität und Maschinenbau machen Urheber-, Veranstaltungs- und Arbeitsrecht zu relevanten Suchthemen. Kanzleien sollten das online erkennbar machen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Veranstalter prüft Nutzungsrechte für Live-Übertragungen — der Produzent sucht 'Urheberrecht Bayreuth'.",
      faq: standardCityFaq(
        "Bayreuth",
        {
          amtsgericht: "Amtsgericht Bayreuth",
          landgericht: "Landgericht Bayreuth",
          oberlandesgericht: "OLG Bamberg",
        },
        [
          {
            q: "Welche Rechtsgebiete passen zu Bayreuth?",
            a: "Urheber- und Veranstaltungsrecht stehen im Festspiel-Kontext oft im Vordergrund — daneben Arbeits- und Handelsrecht in Maschinenbau und Universität.",
          },
          {
            q: "Ist Bayreuth ein eigenes Landgericht?",
            a: "Ja — das Landgericht Bayreuth ist für Oberfranken zuständig. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Bayreuth und Oberfranken — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "bamberg",
    name: "Bamberg",
    bundesland: BY,
    kreisOrBezirk: "Oberfranken",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 77000, label: "rund 77.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Bamberg",
      landgericht: "Landgericht Bamberg",
      oberlandesgericht: "OLG Bamberg",
    },
    economy: {
      sectors: ["Brauerei/Lebensmittel", "Tourismus", "Automotive"],
      keyEmployersOrClusters: ["Bosch"],
      profile: "UNESCO-Altstadt mit Brauerei-Tradition und Automotive-Standort",
    },
    primaryLegalArea: "Lebensmittel- und Gewerberecht",
    secondaryLegalAreas: ["Denkmalschutzrecht", "Arbeitsrecht"],
    landmarks: ["Altes Rathaus", "Dom", "UNESCO-Welterbe"],
    mapCoords: coords(10.9, 49.9),
    nearbySlugs: ["nuernberg", "bayreuth", "coburg", "schweinfurt"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "bamberg",
      heroSubtitle:
        "Für Kanzleien in der Welterbestadt — wo Brauerei, Denkmalschutz und Bosch-Standort typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Bamberg verbindet UNESCO-Altstadt mit Brauerei-Tradition und modernem Automotive-Standort. Tourismus, Lebensmittelwirtschaft und Denkmalschutz erzeugen ein vielfältiges Mandatsfeld.",
        "Mandanten suchen oft Lebensmittel-, Gewerbe- oder Denkmalschutzrecht — manchmal im Kontext von Sanierung oder Brauereibetrieb.",
      ],
      courtsNarrative:
        "Amtsgericht Bamberg, Landgericht Bamberg, OLG Bamberg. Alle drei Instanzen sind in Bamberg angesiedelt — für Mandanten ein seltener Vorteil.",
      economyNarrative:
        "Brauerei, Lebensmittel, Tourismus und Bosch machen Lebensmittel-, Gewerbe- und Denkmalschutzrecht zu relevanten Suchthemen. Kanzleien sollten das online erkennbar machen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Brauereibesitzer prüft neue Kennzeichnungspflichten — der sucht abends 'Lebensmittelrecht Bamberg'.",
      faq: standardCityFaq(
        "Bamberg",
        {
          amtsgericht: "Amtsgericht Bamberg",
          landgericht: "Landgericht Bamberg",
          oberlandesgericht: "OLG Bamberg",
        },
        [
          {
            q: "Liegt das OLG für Bamberg in der Stadt?",
            a: "Ja — AG, LG und OLG Bamberg sind lokal benennbar. Das ist ein starker Vertrauensfaktor für Mandanten aus Oberfranken.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Bamberg?",
            a: "Lebensmittel- und Gewerberecht, Denkmalschutzrecht und Arbeitsrecht stehen im Brauerei- und Welterbe-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Bamberg und Oberfranken — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "aschaffenburg",
    name: "Aschaffenburg",
    bundesland: BY,
    kreisOrBezirk: "Unterfranken",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 71000, label: "rund 71.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Aschaffenburg",
      landgericht: "Landgericht Aschaffenburg",
      oberlandesgericht: "OLG Bamberg",
    },
    economy: {
      sectors: ["Industrie", "Logistik", "Rhein-Main-Nähe"],
      profile: "Industriestadt im Rhein-Main-Umfeld mit Textil- und Maschinenbau",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Verkehrsrecht"],
    landmarks: ["Schloss Johannisburg"],
    mapCoords: coords(9.15, 49.98),
    nearbySlugs: ["muenchen", "schweinfurt", "bamberg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "aschaffenburg",
      heroSubtitle:
        "Für Kanzleien am Main — wo Rhein-Main-Pendler, Industrie und Logistik einen gemischten Mandatsmarkt bilden.",
      introParagraphs: [
        "Aschaffenburg liegt im Einzugsgebiet des Rhein-Main-Gebiets. Industrie, Logistik und Pendlerströme nach Frankfurt prägen den Arbeitsmarkt — dazu kommen Textil- und Maschinenbau.",
        "Arbeitsrecht und Pendlerfragen sind hier zentral. Mandanten erwarten online schnelle Orientierung zu Arbeits- und Verkehrsrecht.",
      ],
      courtsNarrative:
        "Amtsgericht Aschaffenburg, Landgericht Aschaffenburg, OLG Bamberg. Beide Instanzen liegen in Aschaffenburg.",
      economyNarrative:
        "Industrie, Logistik und Rhein-Main-Nähe machen Arbeitsrecht zum Kernsuchfeld — daneben Handelsrecht und verkehrsrechtliche Fragen für Pendler.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Pendler streitet über Fahrtkostenerstattung nach Homeoffice-Umstellung — er sucht 'Arbeitsrecht Aschaffenburg'.",
      faq: standardCityFaq(
        "Aschaffenburg",
        {
          amtsgericht: "Amtsgericht Aschaffenburg",
          landgericht: "Landgericht Aschaffenburg",
          oberlandesgericht: "OLG Bamberg",
        },
        [
          {
            q: "Welche Wirtschaft prägt Aschaffenburg?",
            a: "Industrie, Logistik und die Nähe zum Rhein-Main-Gebiet erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
          {
            q: "Ist Aschaffenburg ein eigenes Landgericht?",
            a: "Ja — das Landgericht Aschaffenburg ist für die Region zuständig. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Aschaffenburg und Unterfranken — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "kaufbeuren",
    name: "Kaufbeuren",
    bundesland: BY,
    kreisOrBezirk: "Schwaben",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 45000, label: "rund 45.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Kaufbeuren",
      landgericht: "Landgericht Kempten (Allgäu)",
      oberlandesgericht: "OLG München",
    },
    economy: {
      sectors: ["Mittelstand", "Allgäu"],
      profile: "Historische Allgäu-Stadt mit breitem Mittelstand",
    },
    primaryLegalArea: "Handelsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Gesellschaftsrecht"],
    landmarks: ["historische Altstadt", "Fünfknopfturm"],
    mapCoords: coords(10.62, 47.88),
    nearbySlugs: ["kempten", "memmingen"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "kaufbeuren",
      heroSubtitle:
        "Für Kanzleien in der Allgäu-Stadt — wo mittelständische Betriebe und historische Altstadt einen klassischen Mandatsmarkt bilden.",
      introParagraphs: [
        "Kaufbeuren ist eine der ältesten Städte im Allgäu. Mittelstand, Handel und regionale Betriebe prägen den Markt — ohne Großkonzern-Dominanz, aber mit typischen Kanzleimandaten.",
        "Handels- und Arbeitsrecht sind hier die Kernsuchfelder. Mandanten erwarten einen Auftritt, der Allgäu-Kontext und Rechtsgebiete verbindet.",
      ],
      courtsNarrative:
        "Amtsgericht Kaufbeuren, Landgericht Kempten (Allgäu), OLG München. Der Sprung nach Kempten ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Mittelstand und Allgäu-Wirtschaft erzeugen klassische Mandate in Handels-, Arbeits- und Gesellschaftsrecht. Kanzleien sollten das online erkennbar machen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Einzelhändler prüft neue Mietvertragsklauseln — der Inhaber sucht 'Handelsrecht Kaufbeuren'.",
      faq: standardCityFaq(
        "Kaufbeuren",
        {
          amtsgericht: "Amtsgericht Kaufbeuren",
          landgericht: "Landgericht Kempten (Allgäu)",
          oberlandesgericht: "OLG München",
        },
        [
          {
            q: "Warum ist für Kaufbeuren das LG Kempten zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Bayern. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Wirtschaft prägt Kaufbeuren?",
            a: "Mittelstand und regionaler Handel erzeugen typischerweise Mandate in Handels-, Arbeits- und Gesellschaftsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Kaufbeuren und das Allgäu — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "weiden-in-der-oberpfalz",
    name: "Weiden in der Oberpfalz",
    bundesland: BY,
    kreisOrBezirk: "Oberpfalz",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 43000, label: "rund 43.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Weiden i.d.OPf.",
      landgericht: "Landgericht Weiden i.d.OPf.",
      oberlandesgericht: "OLG Nürnberg",
    },
    economy: {
      sectors: ["Glas/Porzellan", "Mittelstand"],
      profile: "Oberpfälzer Zentrum mit Glas- und Porzellantradition",
    },
    primaryLegalArea: "Handelsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Gesellschaftsrecht"],
    landmarks: ["Altes Rathaus", "Max-Reger-Stadt"],
    mapCoords: coords(12.16, 49.67),
    nearbySlugs: ["amberg", "neumarkt-in-der-oberpfalz"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "weiden-in-der-oberpfalz",
      heroSubtitle:
        "Für Kanzleien in der Oberpfalz — wo Glas- und Porzellantradition und Mittelstand klassische Mandatsfelder bilden.",
      introParagraphs: [
        "Weiden in der Oberpfalz ist ein wirtschaftliches Zentrum der Region. Glas- und Porzellanindustrie prägen die Tradition; heute dominieren Mittelstand und Handel das alltägliche Mandatsumfeld.",
        "Handels- und Arbeitsrecht sind hier die Kernsuchfelder. Mandanten erwarten einen Auftritt, der Oberpfalz-Kontext erkennbar macht.",
      ],
      courtsNarrative:
        "Amtsgericht Weiden i.d.OPf., Landgericht Weiden i.d.OPf., OLG Nürnberg. Beide Instanzen liegen in Weiden — ein klarer regionaler Bezug.",
      economyNarrative:
        "Glas- und Porzellantradition sowie Mittelstand erzeugen Mandate in Handels-, Arbeits- und Gesellschaftsrecht. Kanzleien sollten das online erkennbar machen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Porzellanhersteller prüft neue Exportverträge — der Geschäftsführer sucht 'Handelsrecht Weiden'.",
      faq: standardCityFaq(
        "Weiden in der Oberpfalz",
        {
          amtsgericht: "Amtsgericht Weiden i.d.OPf.",
          landgericht: "Landgericht Weiden i.d.OPf.",
          oberlandesgericht: "OLG Nürnberg",
        },
        [
          {
            q: "Ist Weiden ein eigenes Landgericht?",
            a: "Ja — das Landgericht Weiden i.d.OPf. ist für die Oberpfalz zuständig. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
          {
            q: "Welche Wirtschaft prägt Weiden?",
            a: "Glas- und Porzellantradition sowie Mittelstand erzeugen typischerweise Mandate in Handels- und Arbeitsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Weiden und die Oberpfalz — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "amberg",
    name: "Amberg",
    bundesland: BY,
    kreisOrBezirk: "Oberpfalz",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 42000, label: "rund 42.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Amberg",
      landgericht: "Landgericht Amberg",
      oberlandesgericht: "OLG Nürnberg",
    },
    economy: {
      sectors: ["Elektronik", "Glasindustrie"],
      keyEmployersOrClusters: ["Siemens"],
      profile: "Mittelalterliche Stadt mit Elektronik- und Glasindustrie",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Vertragsrecht"],
    landmarks: ["Stadtbrille", "mittelalterliche Stadtmauer"],
    mapCoords: coords(11.86, 49.44),
    nearbySlugs: ["weiden-in-der-oberpfalz", "neumarkt-in-der-oberpfalz"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "amberg",
      heroSubtitle:
        "Für Kanzleien in der Oberpfalz — wo Siemens-Standort, Glasindustrie und historische Altstadt zusammentreffen.",
      introParagraphs: [
        "Amberg verbindet mittelalterliche Stadtmauer mit moderner Elektronik- und Glasindustrie. Siemens und regionale Betriebe prägen den Arbeitsmarkt.",
        "Arbeits- und Handelsrecht sind hier zentral. Mandanten erwarten online schnelle Orientierung zu Arbeits- und Vertragsfragen.",
      ],
      courtsNarrative:
        "Amtsgericht Amberg, Landgericht Amberg, OLG Nürnberg. Beide Instanzen liegen in Amberg.",
      economyNarrative:
        "Elektronik, Glasindustrie und Mittelstand machen Arbeitsrecht zum Kernsuchfeld — daneben Handels- und Vertragsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Betriebsänderung im Elektronikwerk sucht ein Mitarbeiter 'Arbeitsrecht Amberg'.",
      faq: standardCityFaq(
        "Amberg",
        {
          amtsgericht: "Amtsgericht Amberg",
          landgericht: "Landgericht Amberg",
          oberlandesgericht: "OLG Nürnberg",
        },
        [
          {
            q: "Welche Branchen prägen Amberg?",
            a: "Elektronik (Siemens), Glasindustrie und Mittelstand erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
          {
            q: "Ist Amberg ein eigenes Landgericht?",
            a: "Ja — das Landgericht Amberg ist für die Region zuständig. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Amberg und die Oberpfalz — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "ansbach",
    name: "Ansbach",
    bundesland: BY,
    kreisOrBezirk: "Mittelfranken",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 42000, label: "rund 42.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Ansbach",
      landgericht: "Landgericht Ansbach",
      oberlandesgericht: "OLG Nürnberg",
    },
    economy: {
      sectors: ["Verwaltung", "Mittelstand", "US-Garnison"],
      profile: "Regierungssitz Mittelfrankens mit Verwaltung und Mittelstand",
    },
    primaryLegalArea: "Verwaltungsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Handelsrecht"],
    landmarks: ["Markgrafenresidenz", "Hofgarten"],
    mapCoords: coords(10.57, 49.3),
    nearbySlugs: ["nuernberg", "neumarkt-in-der-oberpfalz", "amberg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "ansbach",
      heroSubtitle:
        "Für Kanzleien in Mittelfranken — wo Regierungssitz, Verwaltung und US-Garnison ein breites Mandatsfeld bilden.",
      introParagraphs: [
        "Ansbach ist Regierungssitz Mittelfrankens. Verwaltung, Mittelstand und die US-Garnison prägen den Markt — dazu kommt eine historische Residenzstadt.",
        "Verwaltungs- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu behördlichen und arbeitsrechtlichen Fragen.",
      ],
      courtsNarrative:
        "Amtsgericht Ansbach, Landgericht Ansbach, OLG Nürnberg. Beide Instanzen liegen in Ansbach.",
      economyNarrative:
        "Verwaltung, Mittelstand und Garnison machen Verwaltungs- und Arbeitsrecht zu relevanten Suchthemen. Kanzleien sollten das online erkennbar machen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Mittelständler widerspricht einer behördlichen Auflage — der Inhaber sucht 'Verwaltungsrecht Ansbach'.",
      faq: standardCityFaq(
        "Ansbach",
        {
          amtsgericht: "Amtsgericht Ansbach",
          landgericht: "Landgericht Ansbach",
          oberlandesgericht: "OLG Nürnberg",
        },
        [
          {
            q: "Warum ist Ansbach als Regierungssitz relevant?",
            a: "Verwaltungsmandate und behördliche Verfahren sind hier häufiger als in rein industriellen Städten — abhängig von Ihrer Kanzleiausrichtung.",
          },
          {
            q: "Ist Ansbach ein eigenes Landgericht?",
            a: "Ja — das Landgericht Ansbach ist für Mittelfranken zuständig. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Ansbach und Mittelfranken — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "hof",
    name: "Hof",
    bundesland: BY,
    kreisOrBezirk: "Oberfranken",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 46000, label: "rund 46.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Hof",
      landgericht: "Landgericht Hof",
      oberlandesgericht: "OLG Bamberg",
    },
    economy: {
      sectors: ["Textil", "Automobilzulieferer", "Logistik"],
      profile: "Grenznahe Industriestadt mit Textil- und Zuliefertradition",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Insolvenzrecht", "Handelsrecht"],
    landmarks: ["Theresienstein", "Hofer Filmtage"],
    mapCoords: coords(11.91, 50.32),
    nearbySlugs: ["bayreuth", "coburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "hof",
      heroSubtitle:
        "Für Kanzleien an der oberfränkischen Grenze — wo Textil, Automotive-Zulieferer und Strukturwandel typische Mandatsfelder bilden.",
      introParagraphs: [
        "Hof liegt an der Grenze zu Sachsen und Thüringen. Textil-, Automobilzuliefer- und Logistikbranche prägen die Wirtschaft — oft im Kontext von Strukturwandel.",
        "Arbeits- und Insolvenzrecht sind hier zentral. Mandanten suchen gezielt nach Kanzleien, die Industriestrukturwandel verstehen.",
      ],
      courtsNarrative:
        "Amtsgericht Hof, Landgericht Hof, OLG Bamberg. Beide Instanzen liegen in Hof.",
      economyNarrative:
        "Textil, Zulieferindustrie und Logistik machen Arbeitsrecht zum Kernsuchfeld — daneben Insolvenzrecht bei Betriebsübergängen.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Insolvenzantrag eines Zulieferers sucht ein Arbeitnehmer 'Arbeitsrecht Hof Insolvenz'.",
      faq: standardCityFaq(
        "Hof",
        {
          amtsgericht: "Amtsgericht Hof",
          landgericht: "Landgericht Hof",
          oberlandesgericht: "OLG Bamberg",
        },
        [
          {
            q: "Welche Rechtsgebiete sind in Hof besonders gefragt?",
            a: "Arbeitsrecht und Insolvenzrecht stehen im Zusammenhang mit Industriestrukturwandel oft im Vordergrund.",
          },
          {
            q: "Ist Hof ein eigenes Landgericht?",
            a: "Ja — das Landgericht Hof ist für die Region zuständig. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Hof und Oberfranken — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "coburg",
    name: "Coburg",
    bundesland: BY,
    kreisOrBezirk: "Oberfranken",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 41000, label: "rund 41.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Coburg",
      landgericht: "Landgericht Coburg",
      oberlandesgericht: "OLG Bamberg",
    },
    economy: {
      sectors: ["Versicherungen", "Automotive"],
      keyEmployersOrClusters: ["HUK-Coburg", "Brose"],
      profile: "Versicherungs- und Automotive-Standort an der thüringischen Grenze",
    },
    primaryLegalArea: "Versicherungsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Handelsrecht"],
    landmarks: ["Veste Coburg"],
    mapCoords: coords(10.96, 50.26),
    nearbySlugs: ["bamberg", "hof", "bayreuth"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "coburg",
      heroSubtitle:
        "Für Kanzleien in Coburg — wo HUK-Coburg, Brose und die Veste ein Mandatsfeld aus Versicherungs- und Arbeitsrecht bilden.",
      introParagraphs: [
        "Coburg ist Versicherungs- und Automotive-Standort an der thüringischen Grenze. HUK-Coburg und Brose prägen den Arbeitsmarkt — dazu kommt die historische Veste als Wahrzeichen.",
        "Versicherungs- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Policen, Schadensfällen und Arbeitsfragen.",
      ],
      courtsNarrative:
        "Amtsgericht Coburg, Landgericht Coburg, OLG Bamberg. Beide Instanzen liegen in Coburg.",
      economyNarrative:
        "Versicherungen und Automotive machen Versicherungsrecht zum Kernsuchfeld — daneben Arbeitsrecht in Großbetrieben.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Versicherungsnehmer prüft Leistungsablehnung nach Unfall — er sucht 'Versicherungsrecht Coburg'.",
      faq: standardCityFaq(
        "Coburg",
        {
          amtsgericht: "Amtsgericht Coburg",
          landgericht: "Landgericht Coburg",
          oberlandesgericht: "OLG Bamberg",
        },
        [
          {
            q: "Welche Rechtsgebiete passen zu Coburg?",
            a: "Versicherungsrecht und Arbeitsrecht stehen im Zusammenhang mit HUK-Coburg und Brose oft im Vordergrund.",
          },
          {
            q: "Ist Coburg ein eigenes Landgericht?",
            a: "Ja — das Landgericht Coburg ist für die Region zuständig. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Coburg und Oberfranken — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "straubing",
    name: "Straubing",
    bundesland: BY,
    kreisOrBezirk: "Niederbayern",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 48000, label: "rund 48.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Straubing",
      landgericht: "Landgericht Regensburg",
      oberlandesgericht: "OLG Nürnberg",
    },
    economy: {
      sectors: ["Agrar/Lebensmittel", "Bioökonomie"],
      profile: "Gäubodenstadt mit Agrar- und Lebensmittelwirtschaft",
    },
    primaryLegalArea: "Agrar- und Lebensmittelrecht",
    secondaryLegalAreas: ["Handelsrecht", "Arbeitsrecht"],
    landmarks: ["Stadtturm", "Gäubodenvolksfest"],
    mapCoords: coords(12.57, 48.88),
    nearbySlugs: ["regensburg", "landshut", "passau"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "straubing",
      heroSubtitle:
        "Für Kanzleien im Gäuboden — wo Agrarwirtschaft, Bioökonomie und Gäubodenvolksfest typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Straubing liegt im fruchtbaren Gäuboden. Agrar- und Lebensmittelwirtschaft, Bioökonomie und das Gäubodenvolksfest prägen die regionale Identität.",
        "Agrar- und Lebensmittelrecht sind hier keine Randthemen. Mandanten aus Landwirtschaft und Verarbeitung suchen gezielt nach Kanzleien mit regionalem Bezug.",
      ],
      courtsNarrative:
        "Amtsgericht Straubing, Landgericht Regensburg, OLG Nürnberg. Der Sprung nach Regensburg ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Agrarwirtschaft, Lebensmittel und Bioökonomie erzeugen Mandate in Agrar-, Gewerbe- und Handelsrecht. Kanzleien sollten das online erkennbar machen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Landwirt prüft neue Düngemittelvorschriften — er sucht 'Agrarrecht Straubing'.",
      faq: standardCityFaq(
        "Straubing",
        {
          amtsgericht: "Amtsgericht Straubing",
          landgericht: "Landgericht Regensburg",
          oberlandesgericht: "OLG Nürnberg",
        },
        [
          {
            q: "Warum ist für Straubing das LG Regensburg zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Bayern. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Branchen prägen Straubing?",
            a: "Agrar- und Lebensmittelwirtschaft sowie Bioökonomie erzeugen typischerweise Mandate in Agrar- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Straubing und Niederbayern — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "dachau",
    name: "Dachau",
    bundesland: BY,
    kreisOrBezirk: "Landkreis Dachau",
    stadtTyp: "Kreisstadt",
    population: { approx: 48000, label: "rund 48.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Dachau",
      landgericht: "Landgericht München II",
      oberlandesgericht: "OLG München",
    },
    economy: {
      sectors: ["München-Speckgürtel", "Mittelstand", "Pendler"],
      profile: "Kreisstadt im Speckgürtel Münchens mit Pendlerströmen",
    },
    primaryLegalArea: "Mietrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Nachbarrecht"],
    landmarks: ["Schloss Dachau", "KZ-Gedenkstätte"],
    mapCoords: coords(11.43, 48.26),
    nearbySlugs: ["muenchen", "freising", "rosenheim"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "dachau",
      heroSubtitle:
        "Für Kanzleien im Münchner Speckgürtel — wo angespannter Wohnungsmarkt, Pendler und Mittelstand typische Mandatsfelder bilden.",
      introParagraphs: [
        "Dachau liegt im Speckgürtel Münchens. Pendlerströme, angespannter Wohnungsmarkt und Mittelstand prägen den Markt — ein klassisches Ballungsraum-Mandatsfeld.",
        "Miet- und Arbeitsrecht sind hier zentral. Mandanten erwarten online schnelle Orientierung zu Miete, Kündigung und Arbeitsfragen.",
      ],
      courtsNarrative:
        "Amtsgericht Dachau, Landgericht München II, OLG München. Der Bezug zu München II ist für Mandanten selten bekannt.",
      economyNarrative:
        "Speckgürtel-Wirtschaft und Pendler machen Mietrecht zum Kernsuchfeld — daneben Arbeitsrecht und Nachbarrecht in dicht besiedelten Gebieten.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Mieter erhält Mieterhöhung nach Modernisierung — er sucht 'Mietrecht Dachau'.",
      faq: standardCityFaq(
        "Dachau",
        {
          amtsgericht: "Amtsgericht Dachau",
          landgericht: "Landgericht München II",
          oberlandesgericht: "OLG München",
        },
        [
          {
            q: "Welches Landgericht ist für Dachau zuständig?",
            a: "Das Landgericht München II — nicht München I. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
          {
            q: "Welche Rechtsgebiete passen zum Speckgürtel?",
            a: "Mietrecht und Arbeitsrecht stehen im Ballungsraum oft im Vordergrund — daneben Nachbarrecht in dicht besiedelten Gebieten.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Dachau und den Münchner Speckgürtel — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "freising",
    name: "Freising",
    bundesland: BY,
    kreisOrBezirk: "Landkreis Freising",
    stadtTyp: "Kreisstadt",
    population: { approx: 50000, label: "rund 50.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Freising",
      landgericht: "Landgericht Landshut",
      oberlandesgericht: "OLG München",
    },
    economy: {
      sectors: ["Flughafen München", "Brauerei", "Forschung/TU"],
      keyEmployersOrClusters: ["Weihenstephan"],
      profile: "Flughafenstadt mit Brauerei-Tradition und TU-Standort",
    },
    primaryLegalArea: "Luftverkehrsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Nachbarrecht"],
    landmarks: ["Mariendom", "Weihenstephan"],
    mapCoords: coords(11.75, 48.4),
    nearbySlugs: ["muenchen", "landshut", "dachau"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "freising",
      heroSubtitle:
        "Für Kanzleien an der Isar — wo Flughafen, Weihenstephan-Brauerei und Fluglärm typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Freising verbindet Domstadt mit Flughafen München, Weihenstephan-Brauerei und TU-Standort. Fluglärm, Nachbarschaft und Flughafen-Arbeitsplätze prägen das Mandatsumfeld.",
        "Luftverkehrs-, Arbeits- und Nachbarrecht sind hier zentral. Mandanten erwarten online Orientierung zu Fluglärm, Arbeitsfragen und Nachbarschaftsstreit.",
      ],
      courtsNarrative:
        "Amtsgericht Freising, Landgericht Landshut, OLG München. Der Sprung nach Landshut ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Flughafen, Brauerei und Forschung machen Luftverkehrs- und Arbeitsrecht zu relevanten Suchthemen — daneben Nachbarrecht im Fluglärm-Kontext.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Anwohner widerspricht Flugbahnanpassung — er sucht 'Nachbarrecht Freising Fluglärm'.",
      faq: standardCityFaq(
        "Freising",
        {
          amtsgericht: "Amtsgericht Freising",
          landgericht: "Landgericht Landshut",
          oberlandesgericht: "OLG München",
        },
        [
          {
            q: "Warum ist für Freising das LG Landshut zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Bayern. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Freising?",
            a: "Luftverkehrsrecht, Arbeitsrecht und Nachbarrecht stehen im Flughafen-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Freising und Oberbayern — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "neumarkt-in-der-oberpfalz",
    name: "Neumarkt in der Oberpfalz",
    bundesland: BY,
    kreisOrBezirk: "Landkreis Neumarkt i.d.OPf.",
    stadtTyp: "Kreisstadt",
    population: { approx: 41000, label: "rund 41.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Neumarkt i.d.OPf.",
      landgericht: "Landgericht Nürnberg-Fürth",
      oberlandesgericht: "OLG Nürnberg",
    },
    economy: {
      sectors: ["Bauwirtschaft", "Holzwerkstoffe"],
      keyEmployersOrClusters: ["Max Bögl", "Pfleiderer"],
      profile: "Bau- und Industriestandort in der Oberpfalz",
    },
    primaryLegalArea: "Baurecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Handelsrecht"],
    landmarks: ["Residenz", "Altstadt"],
    mapCoords: coords(11.46, 49.28),
    nearbySlugs: ["amberg", "weiden-in-der-oberpfalz"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "neumarkt-in-der-oberpfalz",
      heroSubtitle:
        "Für Kanzleien in der Oberpfalz — wo Max Bögl, Pfleiderer und Bauwirtschaft typische Mandatsfelder bilden.",
      introParagraphs: [
        "Neumarkt in der Oberpfalz ist ein Bau- und Industriestandort. Max Bögl, Pfleiderer und die regionale Bauwirtschaft prägen den Arbeitsmarkt.",
        "Bau- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Bauprojekten, Verträgen und Arbeitsfragen.",
      ],
      courtsNarrative:
        "Amtsgericht Neumarkt i.d.OPf., Landgericht Nürnberg-Fürth, OLG Nürnberg. Der Bezug zu Nürnberg-Fürth ist für Mandanten selten bekannt.",
      economyNarrative:
        "Bauwirtschaft und Holzwerkstoffe machen Baurecht zum Kernsuchfeld — daneben Arbeitsrecht in Großbetrieben.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Bauherr streitet über Bauverzug — er sucht 'Baurecht Neumarkt'.",
      faq: standardCityFaq(
        "Neumarkt in der Oberpfalz",
        {
          amtsgericht: "Amtsgericht Neumarkt i.d.OPf.",
          landgericht: "Landgericht Nürnberg-Fürth",
          oberlandesgericht: "OLG Nürnberg",
        },
        [
          {
            q: "Welches Landgericht ist für Neumarkt zuständig?",
            a: "Das Landgericht Nürnberg-Fürth — nicht Weiden oder Amberg. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
          {
            q: "Welche Branchen prägen Neumarkt?",
            a: "Bauwirtschaft (Max Bögl), Holzwerkstoffe (Pfleiderer) und Mittelstand erzeugen typischerweise Mandate in Bau- und Arbeitsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Neumarkt und die Oberpfalz — ohne erfundene Referenzen.",
    },
  },
];

export const bayernFacts: CityFacts[] = cities.map((city) => {
  const { content, ...facts } = city;
  void content;
  return facts;
});

export const bayernContent: Record<string, CityRecord["content"]> =
  Object.fromEntries(cities.map((c) => [c.slug, c.content]));

export const bayernRecords: CityRecord[] = cities.map(
  ({ content, ...facts }) => ({ ...facts, content }),
);