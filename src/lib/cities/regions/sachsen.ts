import { lonLatToMapCoords } from "../germanyMap";
import type { CityFacts, CityRecord } from "../types";
import { SACHSEN_OLG, SN, standardCityFaq } from "./sachsen-shared";

type CityDef = CityFacts & {
  content: CityRecord["content"];
};

function coords(lon: number, lat: number) {
  return { ...lonLatToMapCoords(lon, lat), anchor: "start" as const };
}

const cities: CityDef[] = [
  {
    slug: "goerlitz",
    name: "Görlitz",
    bundesland: SN,
    kreisOrBezirk: "Landkreis Görlitz",
    stadtTyp: "Kreisstadt",
    population: { approx: 56000, label: "rund 56.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Görlitz",
      landgericht: "Landgericht Görlitz",
      oberlandesgericht: SACHSEN_OLG,
    },
    economy: {
      sectors: ["Schienenfahrzeugbau", "Tourismus", "Grenzregion Polen"],
      keyEmployersOrClusters: ["Alstom"],
      profile: "Östlichste Stadt Deutschlands mit Schienenfahrzeugbau und Filmstadt",
    },
    primaryLegalArea: "Grenzüberschreitendes Recht",
    secondaryLegalAreas: ["Arbeitsrecht", "Strukturwandel"],
    landmarks: ["Altstadt (Görliwood)", "Stadtbrücke nach Zgorzelec"],
    mapCoords: coords(14.99, 51.15),
    nearbySlugs: ["bautzen", "zwickau"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "goerlitz",
      heroSubtitle:
        "Für Kanzleien an der Neiße — wo Alstom, Görliwood und polnische Nachbarschaft typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Görlitz ist Kreisstadt und östlichste Stadt Deutschlands. Schienenfahrzeugbau (Alstom), Tourismus und die vollständig erhaltene Altstadt — bekannt als Görliwood — prägen Wirtschaft und Image. Die Stadtbrücke nach Zgorzelec verbindet zwei Rechtsordnungen.",
        "Grenzüberschreitendes Recht und Arbeitsrecht im Strukturwandel sind hier zentral. Mandanten erwarten online Orientierung zu polnischen Bezügen und lokalen Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Görlitz, Landgericht Görlitz, OLG Dresden. Beide Instanzen liegen in Görlitz — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Schienenfahrzeugbau, Tourismus und Grenzlage machen grenzüberschreitendes Recht und Arbeitsrecht zu relevanten Suchthemen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Zulieferer streitet mit polnischem Partner über Lieferverzug — der Geschäftsführer sucht 'Grenzrecht Görlitz'.",
      faq: standardCityFaq(
        "Görlitz",
        {
          amtsgericht: "Amtsgericht Görlitz",
          landgericht: "Landgericht Görlitz",
          oberlandesgericht: SACHSEN_OLG,
        },
        [
          {
            q: "Spielt die Grenze zu Polen eine Rolle?",
            a: "Wirtschaftlich und mandatsbezogen ja — Ihre Website kann grenzüberschreitende Bezüge benennen, ohne juristische Vorab-Beratung zu ersetzen.",
          },
          {
            q: "Liegen AG und LG in Görlitz?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Region.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Görlitz und die Oberlausitz — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "bautzen",
    name: "Bautzen",
    bundesland: SN,
    kreisOrBezirk: "Landkreis Bautzen",
    stadtTyp: "Kreisstadt",
    population: { approx: 38000, label: "rund 38.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Bautzen",
      landgericht: "Landgericht Görlitz",
      oberlandesgericht: SACHSEN_OLG,
      besonderheiten: [
        "Das Amtsgericht Bautzen führt auswärtige Kammern des Landgerichts Görlitz",
      ],
    },
    economy: {
      sectors: ["Schienenfahrzeugbau", "Sorbische Kultur", "Lebensmittel"],
      profile: "Sorbisches Zentrum mit Schienenfahrzeugbau und Lebensmittelwirtschaft",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Vertragsrecht"],
    landmarks: ["Alte Wasserkunst", "Ortenburg", "Sorbisches Zentrum"],
    mapCoords: coords(14.43, 51.18),
    nearbySlugs: ["goerlitz", "freiberg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "bautzen",
      heroSubtitle:
        "Für Kanzleien in der Oberlausitz — wo Schienenfahrzeugbau, sorbische Kultur und Lebensmittel typische Mandatsfelder bilden.",
      introParagraphs: [
        "Bautzen ist Kreisstadt — knapp unter dem üblichen Einwohner-Zielband, aber kulturell und wirtschaftlich relevant. Schienenfahrzeugbau, sorbische Kultur und Lebensmittelwirtschaft prägen den Markt.",
        "Arbeits- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Gerichten — inklusive der Besonderheit auswärtiger LG-Kammern in Bautzen.",
      ],
      courtsNarrative:
        "Amtsgericht Bautzen, Landgericht Görlitz, OLG Dresden. Das Amtsgericht Bautzen führt auswärtige Kammern des Landgerichts Görlitz — ein seltener regionaler Bezug, den eine Kanzlei-Website sachlich erklären kann.",
      economyNarrative:
        "Schienenfahrzeugbau, Lebensmittel und Mittelstand erzeugen Mandate in Arbeits- und Handelsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Betriebsänderung im Schienenfahrzeugbau sucht ein Mitarbeiter 'Arbeitsrecht Bautzen'.",
      faq: standardCityFaq(
        "Bautzen",
        {
          amtsgericht: "Amtsgericht Bautzen",
          landgericht: "Landgericht Görlitz",
          oberlandesgericht: SACHSEN_OLG,
        },
        [
          {
            q: "Was bedeuten auswärtige Kammern des LG Görlitz in Bautzen?",
            a: "Bestimmte Verfahren können in Bautzen geführt werden, obwohl das Landgericht Görlitz der übergeordnete Bezirk ist. Eine verständliche Darstellung schafft Vertrauen — ohne juristische Vorab-Beratung zu ersetzen.",
          },
          {
            q: "Welche Branchen prägen Bautzen?",
            a: "Schienenfahrzeugbau, Lebensmittel und Mittelstand erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Bautzen und die Oberlausitz — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "plauen",
    name: "Plauen",
    bundesland: SN,
    kreisOrBezirk: "Vogtlandkreis",
    stadtTyp: "Kreisstadt",
    population: { approx: 64600, label: "rund 64.600", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Plauen",
      landgericht: "Landgericht Zwickau",
      oberlandesgericht: SACHSEN_OLG,
    },
    economy: {
      sectors: ["Textil/Spitze", "Maschinenbau"],
      profile: "Vogtland-Stadt mit Plauener Spitze und Maschinenbau",
    },
    primaryLegalArea: "Handels- und Markenrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Gewerblicher Rechtsschutz"],
    landmarks: ["Alte Elsterbrücke", "Spitzenmuseum"],
    mapCoords: coords(12.14, 50.5),
    nearbySlugs: ["chemnitz", "zwickau", "freiberg", "bautzen"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "plauen",
      heroSubtitle:
        "Für Kanzleien im Vogtland — wo Plauener Spitze, Textiltradition und Maschinenbau typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Plauen ist Kreisstadt im Vogtlandkreis. Textil und Plauener Spitze prägen die Tradition; Maschinenbau und Mittelstand das heutige Mandatsumfeld.",
        "Handels-, Marken- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu gewerblichem Rechtsschutz und regionalen Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Plauen, Landgericht Zwickau, OLG Dresden. Der Sprung nach Zwickau ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Textiltradition, Spitze und Maschinenbau machen Handels- und Markenrecht zum Kernsuchfeld — daneben Arbeitsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Textilhersteller prüft Markenverletzung durch Importprodukt — er sucht 'Markenrecht Plauen'.",
      faq: standardCityFaq(
        "Plauen",
        {
          amtsgericht: "Amtsgericht Plauen",
          landgericht: "Landgericht Zwickau",
          oberlandesgericht: SACHSEN_OLG,
        },
        [
          {
            q: "Warum ist für Plauen das LG Zwickau zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Sachsen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Rechtsgebiete passen zum Vogtland?",
            a: "Handels- und Markenrecht stehen im Textil- und Spitzen-Kontext oft im Vordergrund — daneben Arbeitsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Plauen und das Vogtland — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "zwickau",
    name: "Zwickau",
    bundesland: SN,
    kreisOrBezirk: "kreisfreie Stadt",
    stadtTyp: "kreisfreie Stadt",
    population: { approx: 88700, label: "rund 88.700", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Zwickau",
      landgericht: "Landgericht Zwickau",
      oberlandesgericht: SACHSEN_OLG,
    },
    economy: {
      sectors: ["Automotive", "E-Mobilität", "Maschinenbau"],
      keyEmployersOrClusters: ["VW-Werk Zwickau"],
      profile: "Automobilstandort mit VW-Werk und E-Auto-Produktion",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Vertragsrecht"],
    landmarks: ["Robert-Schumann-Haus", "Dom St. Marien"],
    mapCoords: coords(12.49, 50.72),
    nearbySlugs: ["chemnitz", "plauen", "freiberg", "goerlitz"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "zwickau",
      heroSubtitle:
        "Für Kanzleien im VW-Land — wo E-Auto-Produktion, Transformation und Maschinenbau typische Mandatsfelder bilden.",
      introParagraphs: [
        "Zwickau ist kreisfreie Stadt und Automobilstandort. Das VW-Werk mit E-Auto-Produktion prägt den Arbeitsmarkt — Transformation und Großwerk machen Arbeitsrecht zum zentralen Suchfeld.",
        "Mandanten aus Werk und Zulieferkette erwarten online schnelle Orientierung zu Arbeits- und Vertragsfragen.",
      ],
      courtsNarrative:
        "Amtsgericht Zwickau, Landgericht Zwickau, OLG Dresden. Beide Instanzen liegen in Zwickau — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Automotive, E-Mobilität und Maschinenbau machen Arbeitsrecht zum Kernsuchfeld — daneben Handels- und Vertragsrecht in Zulieferbetrieben.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Umstellung auf E-Auto-Produktion sucht ein Werksmitarbeiter 'Arbeitsrecht Zwickau VW'.",
      faq: standardCityFaq(
        "Zwickau",
        {
          amtsgericht: "Amtsgericht Zwickau",
          landgericht: "Landgericht Zwickau",
          oberlandesgericht: SACHSEN_OLG,
        },
        [
          {
            q: "Liegen AG und LG in Zwickau?",
            a: "Ja — beide Instanzen sind lokal benennbar. Das ist ein Vertrauensfaktor für Mandanten aus der Region.",
          },
          {
            q: "Welche Branchen prägen Zwickau?",
            a: "Automotive (VW-Werk, E-Mobilität) und Maschinenbau erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Zwickau und Westsachsen — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "freiberg",
    name: "Freiberg",
    bundesland: SN,
    kreisOrBezirk: "Landkreis Mittelsachsen",
    stadtTyp: "Große Kreisstadt",
    population: { approx: 40000, label: "rund 40.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Freiberg",
      landgericht: "Landgericht Chemnitz",
      oberlandesgericht: SACHSEN_OLG,
    },
    economy: {
      sectors: ["Bergbau-Tradition", "Solar/Halbleiter", "Bergakademie"],
      profile: "Bergstadt mit TU Bergakademie und Erzgebirge-Welterbe",
    },
    primaryLegalArea: "Bergrecht",
    secondaryLegalAreas: ["Umweltrecht", "Arbeitsrecht"],
    landmarks: ["UNESCO Montanregion Erzgebirge", "Dom mit Silbermann-Orgeln"],
    mapCoords: coords(13.34, 50.91),
    nearbySlugs: ["dresden", "chemnitz", "zwickau", "freital"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "freiberg",
      heroSubtitle:
        "Für Kanzleien im Erzgebirge — wo Bergakademie, Solar/Halbleiter und UNESCO-Welterbe typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Freiberg liegt im Landkreis Mittelsachsen — im Grenzbereich des Einwohner-Zielbands, aber wissenschaftlich und wirtschaftlich bedeutsam. Bergbau-Tradition, Solar-/Halbleiterindustrie und die TU Bergakademie prägen den Standort.",
        "Berg-, Umwelt- und Arbeitsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Bergbau, Forschung und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Freiberg, Landgericht Chemnitz, OLG Dresden. Der Sprung nach Chemnitz ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Bergbau-Tradition, Solar/Halbleiter und Bergakademie erzeugen Mandate in Berg-, Umwelt- und Arbeitsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Solarhersteller prüft Genehmigungsauflagen — der Geschäftsführer sucht 'Umweltrecht Freiberg'.",
      faq: standardCityFaq(
        "Freiberg",
        {
          amtsgericht: "Amtsgericht Freiberg",
          landgericht: "Landgericht Chemnitz",
          oberlandesgericht: SACHSEN_OLG,
        },
        [
          {
            q: "Warum ist für Freiberg das LG Chemnitz zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Sachsen. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Freiberg?",
            a: "Berg-, Umwelt- und Arbeitsrecht stehen im Erzgebirge- und Forschungs-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Freiberg und Mittelsachsen — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "pirna",
    name: "Pirna",
    bundesland: SN,
    kreisOrBezirk: "Landkreis Sächsische Schweiz-Osterzgebirge",
    stadtTyp: "Große Kreisstadt",
    population: { approx: 38000, label: "rund 38.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Pirna",
      landgericht: "Landgericht Dresden",
      oberlandesgericht: SACHSEN_OLG,
    },
    economy: {
      sectors: ["Tourismus", "Mittelstand"],
      profile: "Tor zur Sächsischen Schweiz mit Canaletto-Altstadt",
    },
    primaryLegalArea: "Tourismusrecht",
    secondaryLegalAreas: ["Handelsrecht", "Mietrecht"],
    landmarks: ["Schloss Sonnenstein", "Canaletto-Altstadt"],
    mapCoords: coords(13.94, 50.96),
    nearbySlugs: ["dresden", "leipzig", "freital", "pirna"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "pirna",
      heroSubtitle:
        "Für Kanzleien an der Elbe — wo Sächsische Schweiz, Canaletto-Altstadt und Tourismus typische Mandatsfelder bilden.",
      introParagraphs: [
        "Pirna ist Große Kreisstadt — knapp unter dem üblichen Einwohner-Zielband, aber das Tor zur Sächsischen Schweiz. Tourismus, Gastronomie und Mittelstand prägen das Mandatsumfeld.",
        "Tourismus- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Saisonbetrieben, Gastronomie und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Pirna, Landgericht Dresden, OLG Dresden. Der Sprung nach Dresden ist für Mandanten nicht offensichtlich.",
      economyNarrative:
        "Tourismus und Mittelstand erzeugen Mandate in Tourismus-, Handels- und Mietrecht — besonders bei Ferienvermietung und Gastronomie.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Ferienhausvermieter streitet über Stornobedingungen — der Eigentümer sucht 'Tourismusrecht Pirna'.",
      faq: standardCityFaq(
        "Pirna",
        {
          amtsgericht: "Amtsgericht Pirna",
          landgericht: "Landgericht Dresden",
          oberlandesgericht: SACHSEN_OLG,
        },
        [
          {
            q: "Welches Landgericht ist für Pirna zuständig?",
            a: "Das Landgericht Dresden — nicht Pirna selbst. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
          {
            q: "Welche Rechtsgebiete passen zu Pirna?",
            a: "Tourismus- und Handelsrecht stehen im Sächsische-Schweiz-Kontext oft im Vordergrund.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Pirna und die Elbregion — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "freital",
    name: "Freital",
    bundesland: SN,
    kreisOrBezirk: "Landkreis Sächsische Schweiz-Osterzgebirge",
    stadtTyp: "Große Kreisstadt",
    population: { approx: 40000, label: "rund 40.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Dippoldiswalde",
      landgericht: "Landgericht Dresden",
      oberlandesgericht: SACHSEN_OLG,
    },
    economy: {
      sectors: ["Stahl/Edelstahl", "Glasindustrie"],
      profile: "Industriestadt bei Dresden mit Stahl und Glas",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Industrierecht", "Handelsrecht"],
    landmarks: ["Schloss Burgk", "Windbergbahn"],
    mapCoords: coords(13.65, 51.01),
    nearbySlugs: ["dresden", "leipzig", "pirna", "freiberg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "freital",
      heroSubtitle:
        "Für Kanzleien bei Dresden — wo Stahl, Edelstahl und Glasindustrie typische Mandatsfelder verbinden.",
      introParagraphs: [
        "Freital liegt im Landkreis Sächsische Schweiz-Osterzgebirge — im Grenzbereich des Einwohner-Zielbands. Stahl, Edelstahl und Glasindustrie prägen die Wirtschaft.",
        "Arbeits- und Industrierecht sind hier zentral. Mandanten in Freital sollten wissen: erstinstanzlich ist das Amtsgericht Dippoldiswalde zuständig — nicht ein AG in Freital.",
      ],
      courtsNarrative:
        "Amtsgericht Dippoldiswalde, Landgericht Dresden, OLG Dresden. Für Mandanten aus Freital ist der AG-Sitz in Dippoldiswalde selten bekannt — eine verständliche Darstellung schafft Vertrauen.",
      economyNarrative:
        "Stahl, Edelstahl und Glasindustrie machen Arbeitsrecht zum Kernsuchfeld — daneben Industrie- und Handelsrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Schichtmodell-Änderung im Stahlwerk sucht ein Mitarbeiter 'Arbeitsrecht Freital'.",
      faq: standardCityFaq(
        "Freital",
        {
          amtsgericht: "Amtsgericht Dippoldiswalde",
          landgericht: "Landgericht Dresden",
          oberlandesgericht: SACHSEN_OLG,
        },
        [
          {
            q: "Warum ist für Freital das AG Dippoldiswalde zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Sachsen — nicht dem Stadtnamen auf dem Briefkopf. Eine Kanzlei-Website kann das verständlich erklären.",
          },
          {
            q: "Welche Branchen prägen Freital?",
            a: "Stahl, Edelstahl und Glasindustrie erzeugen typischerweise Mandate in Arbeits- und Industrierecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Freital und die Region Dresden — sachlich, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "riesa",
    name: "Riesa",
    bundesland: SN,
    kreisOrBezirk: "Landkreis Meißen",
    stadtTyp: "Große Kreisstadt",
    population: { approx: 29000, label: "rund 29.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Riesa",
      landgericht: "Landgericht Dresden",
      oberlandesgericht: SACHSEN_OLG,
    },
    economy: {
      sectors: ["Stahl", "Lebensmittel/Teigwaren", "Sportevents"],
      profile: "Nudelstadt am Elbhafen mit Stahl und SACHSENarena",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht", "Lebensmittelrecht"],
    landmarks: ["SACHSENarena", "Elbhafen"],
    mapCoords: coords(13.29, 51.31),
    nearbySlugs: ["dresden", "leipzig", "freital", "riesa"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "riesa",
      heroSubtitle:
        "Für Kanzleien an der Elbe — wo Stahl, Teigwaren und SACHSENarena typische Mandatsfelder bilden.",
      introParagraphs: [
        "Riesa liegt im Landkreis Meißen — deutlich unter dem üblichen Einwohner-Zielband, aber als Nudelstadt und Elbhafenstandort wirtschaftlich relevant. Stahl, Teigwarenproduktion und Sportevents prägen das Profil.",
        "Arbeits- und Handelsrecht sind hier zentral. Mandanten erwarten online Orientierung zu Industrie, Lebensmittelwirtschaft und Gerichten.",
      ],
      courtsNarrative:
        "Amtsgericht Riesa, Landgericht Dresden, OLG Dresden. Das AG liegt in Riesa — für Mandanten ein klarer regionaler Bezug.",
      economyNarrative:
        "Stahl, Lebensmittel (Teigwaren) und Eventwirtschaft erzeugen Mandate in Arbeits-, Handels- und Lebensmittelrecht.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Teigwarenhersteller prüft neue Kennzeichnungspflichten — der Geschäftsführer sucht 'Lebensmittelrecht Riesa'.",
      faq: standardCityFaq(
        "Riesa",
        {
          amtsgericht: "Amtsgericht Riesa",
          landgericht: "Landgericht Dresden",
          oberlandesgericht: SACHSEN_OLG,
        },
        [
          {
            q: "Welches Landgericht ist für Riesa zuständig?",
            a: "Das Landgericht Dresden. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
          {
            q: "Welche Branchen prägen Riesa?",
            a: "Stahl, Teigwarenproduktion und Eventwirtschaft erzeugen typischerweise Mandate in Arbeits- und Handelsrecht.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Riesa und den Landkreis Meißen — ohne erfundene Referenzen.",
    },
  },
];

export const sachsenFacts: CityFacts[] = cities.map((city) => {
  const { content, ...facts } = city;
  void content;
  return facts;
});

export const sachsenContent: Record<string, CityRecord["content"]> =
  Object.fromEntries(cities.map((c) => [c.slug, c.content]));

export const sachsenRecords: CityRecord[] = cities.map(
  ({ content, ...facts }) => ({ ...facts, content }),
);
