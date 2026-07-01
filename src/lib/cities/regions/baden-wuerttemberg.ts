import { lonLatToMapCoords } from "../germanyMap";
import type { CityFacts, CityRecord } from "../types";
import { BW, standardCityFaq } from "./baden-wuerttemberg-shared";

type CityDef = CityFacts & {
  content: CityRecord["content"];
};

function coords(lon: number, lat: number) {
  return { ...lonLatToMapCoords(lon, lat), anchor: "start" as const };
}

const cities: CityDef[] = [
  {
    slug: "friedrichshafen",
    name: "Friedrichshafen",
    bundesland: BW,
    kreisOrBezirk: "Bodenseekreis",
    stadtTyp: "Kreisstadt",
    population: { approx: 63000, label: "rund 63.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Tettnang",
      landgericht: "Landgericht Ravensburg",
      oberlandesgericht: "OLG Stuttgart",
    },
    economy: {
      sectors: [
        "Luftfahrt/Hochtechnologie",
        "Automotive-Zulieferer",
        "Messe/Tourismus",
        "Bodensee-Tourismus",
      ],
      keyEmployersOrClusters: ["ZF Friedrichshafen", "Airbus", "MTU"],
      profile:
        "Bodenseestadt mit starker Luftfahrt- und Zulieferindustrie sowie Messe- und Tourismuswirtschaft",
    },
    primaryLegalArea: "Arbeits- und Konzernrecht",
    secondaryLegalAreas: ["Patent- und Handelsrecht", "Reise- und Tourismusrecht"],
    landmarks: ["Zeppelin Museum", "Bodensee-Uferpromenade"],
    mapCoords: coords(9.48, 47.65),
    nearbySlugs: ["ravensburg", "konstanz"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "friedrichshafen",
      heroSubtitle:
        "Für Kanzleien zwischen Zeppelin-Museum und Werksgelände — ein Auftritt, der Industrie-Know-how und Bodensee-Nähe gleichermaßen trägt.",
      introParagraphs: [
        "Friedrichshafen verbindet Großindustrie am Bodensee mit Messegeschäft und Tourismus. ZF, Luftfahrtcluster und saisonale Gäste prägen den Alltag — dazu kommen Zulieferer und mittelständische Betriebe im Umland.",
        "Mandanten suchen oft gezielt: Arbeitsrecht nach Betriebsänderung, Verträge im Konzernumfeld, Reise- und Event-Streitigkeiten rund um die Messe. Wer das online nicht erkennbar macht, verliert den ersten Klick.",
      ],
      courtsNarrative:
        "Mandate aus Friedrichshafen werden erstinstanzlich vor dem Amtsgericht Tettnang geführt, in der Berufung vor dem Landgericht Ravensburg, als Oberlandesgericht ist das OLG Stuttgart zuständig. Der Weg über Tettnang statt eines Amtsgerichts in der Kernstadt ist für Mandanten selten offensichtlich — eine verständliche Darstellung schafft Vertrauen.",
      economyNarrative:
        "Luftfahrt, Automotive und Messewirtschaft dominieren neben dem Bodensee-Tourismus. Kanzleien mit Mandanten aus Werk, Zulieferkette oder Hotellerie brauchen einen Auftritt, der Arbeitsrecht, Handels- und Vertragsfragen sowie Tourismusrecht erkennbar verbindet — ohne generische Rechtsgebiete-Listen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Zulieferer diskutiert mit dem Werk über Lieferverzug und Qualitätsmängel nach einem Produktionsstopp — der Einkaufsleiter sucht abends 'Handelsrecht Friedrichshafen'. So könnte ein typisches Suchszenario aussehen.",
      faq: standardCityFaq(
        "Friedrichshafen",
        {
          amtsgericht: "Amtsgericht Tettnang",
          landgericht: "Landgericht Ravensburg",
          oberlandesgericht: "OLG Stuttgart",
        },
        [
          {
            q: "Warum ist für Friedrichshafen das AG Tettnang zuständig?",
            a: "Die gerichtliche Zuständigkeit folgt der Organisationsstruktur in Baden-Württemberg — nicht immer dem Stadtnamen auf dem Briefkopf. Eine Kanzlei-Website kann das verständlich erklären, ohne juristische Vorab-Beratung zu ersetzen.",
          },
          {
            q: "Welche Rechtsgebiete sind am Bodensee besonders relevant?",
            a: "Neben Arbeitsrecht in Großbetrieben sind Handels- und Vertragsrecht, Reise-/Tourismusrecht und gewerblicher Rechtsschutz häufige Suchthemen — abhängig von der Ausrichtung Ihrer Kanzlei.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Friedrichshafen und den Bodenseeraum strukturiert — Gerichte, Wirtschaft, typisches Suchverhalten. Daraus entsteht ein Auftritt, der lokal nachvollziehbar wirkt, ohne erfundene Referenzen.",
    },
  },
  {
    slug: "konstanz",
    name: "Konstanz",
    bundesland: BW,
    kreisOrBezirk: "Landkreis Konstanz",
    stadtTyp: "Kreisstadt",
    population: { approx: 86900, label: "rund 86.900", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Konstanz",
      landgericht: "Landgericht Konstanz",
      oberlandesgericht: "OLG Karlsruhe",
    },
    economy: {
      sectors: ["Universität/Forschung", "Tourismus", "Pharma/Optik", "Grenzhandel Schweiz"],
      profile: "Universitäts- und Tourismusstadt am Bodensee mit starker Schweizer Nachbarschaft",
    },
    primaryLegalArea: "Grenzüberschreitendes Recht",
    secondaryLegalAreas: ["Miet- und WEG-Recht", "Reiserecht"],
    landmarks: ["Konstanzer Münster", "Imperia-Statue", "Bodensee"],
    mapCoords: coords(9.18, 47.66),
    nearbySlugs: ["freiburg", "friedrichshafen", "ravensburg", "loerrach"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "konstanz",
      heroSubtitle:
        "Für Kanzleien an der Schweizer Grenze — wo WEG-Streit, Grenzgänger und Bodensee-Tourismus oft im selben Suchfeld landen.",
      introParagraphs: [
        "Konstanz lebt von Universität, Tourismus und Nähe zur Schweiz. Angespannter Wohnungsmarkt, Grenzgänger und saisonale Vermietung machen die Stadt rechtlich vielfältig — nicht nur klassisches Kanzleimandat.",
        "Wer 'Anwalt Konstanz' googelt, erwartet oft schnelle Orientierung zu Miete, Nachbarschaft oder grenzüberschreitenden Fragen. Die Website entscheidet, ob Sie als spezialisiert wahrgenommen werden.",
      ],
      courtsNarrative:
        "In Konstanz liegen Amts- und Landgericht in derselben Stadt — erstinstanzlich das Amtsgericht Konstanz, in der Berufung das Landgericht Konstanz, Oberlandesgericht Karlsruhe. Für Mandanten ist das ein seltener Vorteil: beide Instanzen sind lokal benennbar.",
      economyNarrative:
        "Forschung, Pharma, Optik und Tourismus treffen auf grenznahen Handel und Wohnraumknappheit. Kanzleien mit Schwerpunkten in Miet-/WEG-Recht, Reiserecht oder Schweizer Bezug profitieren von einer Website, die genau diese Mischung adressiert.",
      localCaseExample:
        "Stellen Sie sich vor: Eine Eigentümergemeinschaft nahe der Schweizer Grenze streitet über Airbnb-Nutzung und Hausgeld — ein Eigentümer sucht 'WEG Anwalt Konstanz'. Ein klares Online-Profil entscheidet über den ersten Kontakt.",
      faq: standardCityFaq(
        "Konstanz",
        {
          amtsgericht: "Amtsgericht Konstanz",
          landgericht: "Landgericht Konstanz",
          oberlandesgericht: "OLG Karlsruhe",
        },
        [
          {
            q: "Lohnt sich ein grenzüberschreitender Schwerpunkt auf der Website?",
            a: "Wenn Ihre Kanzlei Mandanten mit Schweizer Bezug betreut, ist das ein echtes Differenzierungsmerkmal in Konstanz — sachlich formuliert und ohne unzulässige Werbung.",
          },
          {
            q: "Ist Konstanz am OLG Stuttgart oder Karlsruhe?",
            a: "Konstanz gehört zum Bezirk des OLG Karlsruhe — nicht Stuttgart. Diese Zuordnung gehört auf eine seriöse regionale Kanzlei-Seite.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex arbeitet die Besonderheiten Konstanz' heraus — Grenze, Gerichte, Wohnungsmarkt — und übersetzt sie in einen präzisen Kanzlei-Auftritt ohne Template-Look.",
    },
  },
  {
    slug: "villingen-schwenningen",
    name: "Villingen-Schwenningen",
    bundesland: BW,
    kreisOrBezirk: "Schwarzwald-Baar-Kreis",
    population: { approx: 89000, label: "rund 89.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Villingen-Schwenningen",
      landgericht: "Landgericht Konstanz",
      oberlandesgericht: "OLG Karlsruhe",
    },
    economy: {
      sectors: ["Medizintechnik", "Feinmechanik", "Uhrenindustrie-Tradition"],
      profile: "Doppelstadt im Schwarzwald mit Medizintechnik- und Feinmechanik-Cluster",
    },
    primaryLegalArea: "Medizinprodukterecht",
    secondaryLegalAreas: ["Arbeits- und Handelsrecht"],
    landmarks: ["Historische Doppelstadt", "Schwarzwald"],
    mapCoords: coords(8.45, 48.06),
    nearbySlugs: ["freiburg", "konstanz", "ravensburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "villingen-schwenningen",
      heroSubtitle:
        "Für Kanzleien in der Doppelstadt — zwischen Medizintechnik, Feinmechanik und Schwarzwald-Mittelstand.",
      introParagraphs: [
        "Villingen-Schwenningen vereint zwei historische Kerne zu einem der größten Oberzentren im Schwarzwald. Medizintechnik und Präzisionsfertigung prägen die Wirtschaft — daneben klassischer Mittelstand.",
        "Mandanten aus Produktion und Entwicklung suchen oft spezialisierte Anlaufstellen. Ohne sichtbaren Schwerpunkt wirkt jede Kanzlei auf den ersten Blick austauschbar.",
      ],
      courtsNarrative:
        "Erstinstanzlich das Amtsgericht Villingen-Schwenningen, in der Berufung das Landgericht Konstanz, OLG Karlsruhe. Der Instanzenweg führt für Berufungen nach Konstanz — für Mandanten ein praktischer, aber selten erklärter Weg.",
      economyNarrative:
        "Medizintechnik und Feinmechanik stehen im Zentrum — mit hohen Anforderungen an Compliance, Verträge und Arbeitsrecht in technischen Betrieben. Ein Kanzlei-Auftritt sollte das widerspiegeln, wenn es Ihre Ausrichtung trifft.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Medizintechnik-Zulieferer prüft nach einer behördlichen Rückfrage seine Produktkennzeichnung — der Geschäftsführer sucht 'Medizinprodukterecht Anwalt'. Sichtbarkeit beginnt vor dem Mandat.",
      faq: standardCityFaq(
        "Villingen-Schwenningen",
        {
          amtsgericht: "Amtsgericht Villingen-Schwenningen",
          landgericht: "Landgericht Konstanz",
          oberlandesgericht: "OLG Karlsruhe",
        },
        [
          {
            q: "Welche Branchen prägen Mandatsanfragen in VS?",
            a: "Medizintechnik, Feinmechanik und regionaler Mittelstand — dazu Arbeitsrecht in größeren Betrieben. Ihre Website sollte Ihre tatsächlichen Schwerpunkte zeigen, nicht alle Rechtsgebiete.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert VS als Wirtschaftsstandort und übersetzt das in einen Auftritt, der technische Branchen und regionale Gerichtswege verständlich macht.",
    },
  },
  {
    slug: "sindelfingen",
    name: "Sindelfingen",
    bundesland: BW,
    kreisOrBezirk: "Landkreis Böblingen",
    population: { approx: 64000, label: "rund 64.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Böblingen",
      landgericht: "Landgericht Stuttgart",
      oberlandesgericht: "OLG Stuttgart",
    },
    economy: {
      sectors: ["Automotive", "Mercedes-Benz-Hauptwerk", "Zulieferer"],
      profile: "Automotive-Standort im Stuttgarter Speckgürtel",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handels- und Vertragsrecht"],
    landmarks: ["Mercedes-Benz-Werk", "Altes Rathaus"],
    mapCoords: coords(9.0, 48.71),
    nearbySlugs: ["stuttgart", "leonberg", "fellbach"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "sindelfingen",
      heroSubtitle:
        "Für Kanzleien im Stuttgarter Speckgürtel — wo Großwerk, Zulieferer und Pendler denselben Markt teilen.",
      introParagraphs: [
        "Sindelfingen ist eng mit dem Mercedes-Benz-Hauptwerk verbunden — dazu ein dichtes Netz aus Zulieferern und Dienstleistern. Arbeitsrechtliche Fragen und Vertragsstreitigkeiten gehören hier zum Alltag vieler Mandanten.",
        "Pendler und Fachkräfte suchen mobil und oft unter Zeitdruck. Eine Website muss in Sekunden zeigen, dass Ihre Kanzlei den lokalen Wirtschaftsalltag versteht.",
      ],
      courtsNarrative:
        "Mandate aus Sindelfingen werden erstinstanzlich vor dem Amtsgericht Böblingen geführt, in der Berufung vor dem Landgericht Stuttgart, OLG Stuttgart. Der Bezug zu Böblingen statt Sindelfingen im Amtsgerichtsnamen sollte für Mandanten erklärt werden.",
      economyNarrative:
        "Automotive dominiert: Werk, Zulieferkette, Transformation. Kanzleien mit Arbeitsrecht oder Handelsrecht im Mittelstand brauchen einen Auftritt, der Seriosität ausstrahlt — besonders gegenüber betrieblichen Mandanten.",
      localCaseExample:
        "Stellen Sie sich vor: Nach einer Betriebsversammlung sucht ein Abteilungsleiter 'Kündigungsschutz Anwalt Sindelfingen'. Wer online präzise und vertrauenswürdig wirkt, wird eher kontaktiert.",
      faq: standardCityFaq(
        "Sindelfingen",
        {
          amtsgericht: "Amtsgericht Böblingen",
          landgericht: "Landgericht Stuttgart",
          oberlandesgericht: "OLG Stuttgart",
        },
        [
          {
            q: "Warum AG Böblingen für Sindelfingen?",
            a: "Die Amtsgerichtsbezirke folgen der Justizorganisation, nicht der Stadtgrenze. Das gehört auf eine gute regionale Kanzlei-Seite — kurz und verständlich.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex verbindet regionale Recherche mit einem Auftritt, der Automotive-Standorte wie Sindelfingen sachlich adressiert — ohne übertriebene Erfahrungsversprechen.",
    },
  },
  {
    slug: "aalen",
    name: "Aalen",
    bundesland: BW,
    kreisOrBezirk: "Ostalbkreis",
    stadtTyp: "Kreisstadt",
    population: { approx: 68000, label: "rund 68.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Aalen",
      landgericht: "Landgericht Ellwangen (Jagst)",
      oberlandesgericht: "OLG Stuttgart",
    },
    economy: {
      sectors: ["Maschinenbau", "Optik", "Mittelstand"],
      keyEmployersOrClusters: ["Carl Zeiss"],
      profile: "Ostwürttembergischer Industriestandort mit Optik- und Maschinenbau-Tradition",
    },
    primaryLegalArea: "Gewerblicher Rechtsschutz",
    secondaryLegalAreas: ["Arbeits- und Handelsrecht"],
    landmarks: ["Limesmuseum", "UNESCO-Welterbe Limes"],
    mapCoords: coords(10.09, 48.84),
    nearbySlugs: ["schwaebisch-gmuend", "goeppingen"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "aalen",
      heroSubtitle:
        "Für Kanzleien in Ostwürttemberg — zwischen Limes, Optikindustrie und solidem Mittelstand.",
      introParagraphs: [
        "Aalen ist Kreisstadt im Ostalbkreis mit starker Industrie- und Optiktradition. Maschinenbau, Zulieferer und mittelständische Betriebe prägen das Umland — weniger Großstadt, dafür enge Wirtschaftsnetzwerke.",
        "Mandanten erwarten regionale Verankerung und erkennbare Schwerpunkte. Eine generische Kanzlei-Homepage reicht selten aus, um Vertrauen vor dem Erstgespräch aufzubauen.",
      ],
      courtsNarrative:
        "Erstinstanzlich das Amtsgericht Aalen, in der Berufung das Landgericht Ellwangen (Jagst), OLG Stuttgart. Ellwangen als LG-Standort ist für viele Mandanten unbekannt — eine klare Erklärung auf der Website schafft Orientierung.",
      economyNarrative:
        "Optik, Maschinenbau und Mittelstand bedeuten oft Verträge, IP-Fragen und Arbeitsrecht in technischen Betrieben. Wer gewerblichen Rechtsschutz oder Handelsrecht anbietet, sollte das online sichtbar machen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Mittelständler entdeckt markenähnliche Bezeichnungen beim Wettbewerb — der GF sucht 'Markenrecht Anwalt Aalen'. Präzision auf der Website zählt.",
      faq: standardCityFaq(
        "Aalen",
        {
          amtsgericht: "Amtsgericht Aalen",
          landgericht: "Landgericht Ellwangen (Jagst)",
          oberlandesgericht: "OLG Stuttgart",
        },
        [
          {
            q: "Was unterscheidet Aalen von Stuttgarter Kanzleimärkten?",
            a: "Weniger Großkanzlei-Dichte, stärkerer Mittelstand — Mandanten suchen oft persönliche, regional verankerte Anlaufstellen. Das sollte Ihr Auftritt transportieren.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Aalen und Ostwürttemberg bis in die Gerichts- und Wirtschaftsstruktur — und baut daraus einen Auftritt, der lokal glaubwürdig wirkt.",
    },
  },
  {
    slug: "schwaebisch-gmuend",
    name: "Schwäbisch Gmünd",
    bundesland: BW,
    kreisOrBezirk: "Ostalbkreis",
    population: { approx: 62000, label: "rund 62.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Schwäbisch Gmünd",
      landgericht: "Landgericht Ellwangen (Jagst)",
      oberlandesgericht: "OLG Stuttgart",
    },
    economy: {
      sectors: ["Edelmetall/Schmuck", "Maschinenbau"],
      profile: "Stauferstadt mit Edelmetall-Tradition und Maschinenbau",
    },
    primaryLegalArea: "Handelsrecht",
    secondaryLegalAreas: ["Arbeitsrecht", "Erbrecht"],
    landmarks: ["Heilig-Kreuz-Münster", "Älteste Stauferstadt"],
    mapCoords: coords(9.8, 48.8),
    nearbySlugs: ["reutlingen", "aalen", "goeppingen"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "schwaebisch-gmuend",
      heroSubtitle:
        "Für Kanzleien in der ältesten Stauferstadt — Edelmetall-Tradition, Maschinenbau und regionaler Mittelstand.",
      introParagraphs: [
        "Schwäbisch Gmünd verbindet historische Altstadt mit industrieller Substanz. Edelmetall- und Schmucktradition sowie Maschinenbau prägen viele Familienunternehmen in der Region.",
        "Mandanten aus Handel und Produktion suchen oft verlässliche, langfristige Kanzleipartner — die Website ist der erste Vertrauenstest.",
      ],
      courtsNarrative:
        "Amtsgericht Schwäbisch Gmünd, Landgericht Ellwangen (Jagst) in der Berufung, OLG Stuttgart. Der gemeinsame LG-Bezirk mit Aalen verbindet den Ostalbkreis juristisch.",
      economyNarrative:
        "Handels- und Gesellschaftsrecht, Erbfolge in Familienbetrieben und Arbeitsrecht in produzierenden Unternehmen sind typische Themenfelder — abhängig von Ihrer Kanzleiausrichtung.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Schmuckgroßhändler prüft neue Lieferbedingungen mit internationalen Partnern — gesucht wird 'Handelsrecht Schwäbisch Gmünd'.",
      faq: standardCityFaq(
        "Schwäbisch Gmünd",
        {
          amtsgericht: "Amtsgericht Schwäbisch Gmünd",
          landgericht: "Landgericht Ellwangen (Jagst)",
          oberlandesgericht: "OLG Stuttgart",
        },
        [
          {
            q: "Eignet sich Schwäbisch Gmünd für Erbrecht auf der Website?",
            a: "Bei Familienbetrieben in Edelmetall und Maschinenbau ist Erbrecht oft ein relevantes Suchthema — wenn es zu Ihrem Profil passt, sollte es sichtbar sein.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex übersetzt die regionale Wirtschaftsstruktur Schwäbisch Gmünds in einen präzisen Kanzlei-Auftritt — recherchiert, nicht erfunden.",
    },
  },
  {
    slug: "goeppingen",
    name: "Göppingen",
    bundesland: BW,
    kreisOrBezirk: "Landkreis Göppingen",
    stadtTyp: "Kreisstadt",
    population: { approx: 58000, label: "rund 58.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Göppingen",
      landgericht: "Landgericht Ulm",
      oberlandesgericht: "OLG Stuttgart",
    },
    economy: {
      sectors: ["Maschinenbau", "Modellbau/Spielwaren"],
      keyEmployersOrClusters: ["Schuler", "Märklin"],
      profile: "Filstal-Stadt mit Maschinenbau und Märklin-Tradition",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Insolvenzrecht", "Handelsrecht"],
    landmarks: ["Hohenstaufen", "Märklin"],
    mapCoords: coords(9.75, 48.7),
    nearbySlugs: ["reutlingen", "schwaebisch-gmuend", "ravensburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "goeppingen",
      heroSubtitle:
        "Für Kanzleien im Filstal — Maschinenbau, Markenikon Märklin und Mittelstand mit Substanz.",
      introParagraphs: [
        "Göppingen steht für industrielle Tradition im Filstal — Schuler, Märklin und ein breiter Maschinenbau-Mittelstand. Strukturwandel und Sanierung sind hier keine abstrakten Themen.",
        "Mandanten aus Betrieb und Verwaltung suchen Klarheit bei Kündigung, Insolvenznähe oder Vertragsstreit. Online muss das Profil Ihrer Kanzlei sofort erkennbar sein.",
      ],
      courtsNarrative:
        "Erstinstanzlich das Amtsgericht Göppingen, in der Berufung das Landgericht Ulm, OLG Stuttgart. Berufungen führen ins Ulmer Landgericht — ein wichtiger regionaler Hinweis für Mandanten.",
      economyNarrative:
        "Maschinenbau und Insolvenznähe in strukturwandelnden Branchen machen Arbeits- und Insolvenzrecht zu relevanten Suchfeldern — neben klassischem Handelsrecht im Mittelstand.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Gerüchten über Restrukturierung sucht ein Betriebsrat-Mitglied 'Insolvenzrecht Anwalt Göppingen'. Wer präsent ist, wird gefunden.",
      faq: standardCityFaq(
        "Göppingen",
        {
          amtsgericht: "Amtsgericht Göppingen",
          landgericht: "Landgericht Ulm",
          oberlandesgericht: "OLG Stuttgart",
        },
        [
          {
            q: "Warum LG Ulm für Göppingen?",
            a: "Die Landgerichtsbezirke in BW folgen historisch gewachsenen Strukturen. Mandanten schätzen eine kurze, korrekte Darstellung auf Ihrer Website.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Göppingen als Filstal-Standort und baut einen Auftritt, der Industrie-Mittelstand und Gerichtswege verständlich verbindet.",
    },
  },
  {
    slug: "ravensburg",
    name: "Ravensburg",
    bundesland: BW,
    kreisOrBezirk: "Landkreis Ravensburg",
    stadtTyp: "Kreisstadt",
    population: { approx: 50300, label: "rund 50.300", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Ravensburg",
      landgericht: "Landgericht Ravensburg",
      oberlandesgericht: "OLG Stuttgart",
    },
    economy: {
      sectors: ["Spiele/Handel", "Mittelstand", "Tourismus"],
      keyEmployersOrClusters: ["Ravensburger AG"],
      profile: "Oberschwäbische Kreisstadt mit Marken- und Handelstradition",
    },
    primaryLegalArea: "Markenrecht",
    secondaryLegalAreas: ["Handelsrecht", "Erbrecht"],
    landmarks: ["Mehlsack-Turm", "Mittelalterliche Türme"],
    mapCoords: coords(9.61, 47.78),
    nearbySlugs: ["freiburg", "friedrichshafen", "konstanz"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "ravensburg",
      heroSubtitle:
        "Für Kanzleien in oberschwäbischer Kreisstadt — Handel, Marken und Familienunternehmen.",
      introParagraphs: [
        "Ravensburg verbindet mittelalterliche Altstadt mit moderner Markenwirtschaft. Ravensburger AG steht stellvertretend für einen robusten oberschwäbischen Mittelstand.",
        "Marken-, handels- und erbrechtliche Fragen treffen hier auf klassische Kanzleimandate. Wer online unscharf bleibt, verliert gegen spezialisiertere Wahrnehmung.",
      ],
      courtsNarrative:
        "Amts- und Landgericht liegen in Ravensburg — erstinstanzlich und in der Berufung vor Ort, OLG Stuttgart. Für Mandanten ein seltener Vorteil: LG und AG in der Kreisstadt.",
      economyNarrative:
        "Handel, Marken und Familienunternehmen prägen die Region. Eine Website kann genau diese Schwerpunkte tragen, wenn sie zur Kanzlei passen.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Händler widerspricht der Abmahnung wegen Produktbezeichnungen — gesucht wird 'Markenrecht Anwalt Ravensburg'.",
      faq: standardCityFaq(
        "Ravensburg",
        {
          amtsgericht: "Amtsgericht Ravensburg",
          landgericht: "Landgericht Ravensburg",
          oberlandesgericht: "OLG Stuttgart",
        },
        [
          {
            q: "Sind AG und LG in Ravensburg identisch?",
            a: "Nein — unterschiedliche Instanzen, aber beide in Ravensburg. Das ist für Mandate aus dem Landkreis praktisch und sollte verständlich erklärt werden.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Ravensburg und den oberschwäbischen Raum — und formt daraus einen Auftritt ohne erfundene Mandatsgeschichten.",
    },
  },
  {
    slug: "offenburg",
    name: "Offenburg",
    bundesland: BW,
    kreisOrBezirk: "Ortenaukreis",
    stadtTyp: "Kreisstadt",
    population: { approx: 59000, label: "rund 59.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Offenburg",
      landgericht: "Landgericht Offenburg",
      oberlandesgericht: "OLG Karlsruhe",
    },
    economy: {
      sectors: ["Medien/Druck", "Weinbau", "Grenznähe Frankreich"],
      keyEmployersOrClusters: ["Hubert Burda Media"],
      profile: "Medienstandort in der Ortenau mit Weinbau und Frankreich-Nähe",
    },
    primaryLegalArea: "Medien- und Urheberrecht",
    secondaryLegalAreas: ["Agrarrecht", "Grenzüberschreitendes Recht"],
    landmarks: ["Hauptstraße", "Weinregion Ortenau"],
    mapCoords: coords(7.94, 48.47),
    nearbySlugs: ["freiburg", "karlsruhe", "baden-baden", "rastatt"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "offenburg",
      heroSubtitle:
        "Für Kanzleien in der Ortenau — Medien, Wein und Grenze zu Frankreich in einem Markt.",
      introParagraphs: [
        "Offenburg ist Kreisstadt mit Medienwirtschaft, Weinbau und Nähe zu Frankreich. Burda steht für ein Umfeld, in dem Urheber- und Medienrecht keine Nischenthemen sind.",
        "Grenzpendler und Winzer, Verlage und Mittelstand teilen sich das regionale Suchverhalten — Spezialisierung online zahlt sich aus.",
      ],
      courtsNarrative:
        "Amts- und Landgericht Offenburg, OLG Karlsruhe. Beide Instanzen in der Kreisstadt — ein klarer, mandantenfreundlicher Instanzenweg.",
      economyNarrative:
        "Medienrecht, Agrar-/Weinrecht und grenzüberschreitende Fragen prägen viele Suchanfragen — je nach Kanzleiprofil. Eine präzise Website filtert die richtigen Mandanten vor.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Winzer streitet über Flächenbezeichnungen im Etikett — gesucht wird 'Agrarrecht Anwalt Offenburg'.",
      faq: standardCityFaq(
        "Offenburg",
        {
          amtsgericht: "Amtsgericht Offenburg",
          landgericht: "Landgericht Offenburg",
          oberlandesgericht: "OLG Karlsruhe",
        },
        [
          {
            q: "Gehört Offenburg zum OLG Stuttgart?",
            a: "Nein — Offenburg liegt im Bezirk des OLG Karlsruhe. Diese Zuordnung gehört auf jede seriöse regionale Seite.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Offenburg und die Ortenau und übersetzt Medien-, Agrar- und Grenzbezug in einen ehrlichen Kanzlei-Auftritt.",
    },
  },
  {
    slug: "rastatt",
    name: "Rastatt",
    bundesland: BW,
    kreisOrBezirk: "Landkreis Rastatt",
    stadtTyp: "Kreisstadt",
    population: { approx: 50000, label: "rund 50.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Rastatt",
      landgericht: "Landgericht Baden-Baden",
      oberlandesgericht: "OLG Karlsruhe",
    },
    economy: {
      sectors: ["Automotive", "Mercedes-Benz-Werk"],
      profile: "Automotive-Standort in der Oberrheinregion",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht"],
    landmarks: ["Barock-Residenzschloss Rastatt"],
    mapCoords: coords(8.2, 48.86),
    nearbySlugs: ["freiburg", "karlsruhe", "rastatt", "offenburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "rastatt",
      heroSubtitle:
        "Für Kanzleien zwischen Residenzschloss und Werk — Automotive und Oberrhein-Mittelstand.",
      introParagraphs: [
        "Rastatt verbindet barocke Geschichte mit modernem Automotive-Standort. Das Mercedes-Benz-Werk prägt den Arbeitsmarkt — dazu Zulieferer und Dienstleister in der Region.",
        "Arbeitsrechtliche und handelsrechtliche Mandate sind hier Alltag. Mandanten erwarten online dieselbe Präzision wie im Gespräch.",
      ],
      courtsNarrative:
        "Amtsgericht Rastatt, in der Berufung Landgericht Baden-Baden, OLG Karlsruhe. Berufungen führen nach Baden-Baden — für Mandanten ein kurzer, erklärungsbedürftiger Weg.",
      economyNarrative:
        "Automotive und regionaler Mittelstand dominieren. Kanzleien mit Arbeitsrechtsschwerpunkt sollten das für Rastatt sichtbar machen, wenn es ihr Profil trifft.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Schichtpläneänderung sucht ein Teamleiter 'Arbeitsrecht Anwalt Rastatt'.",
      faq: standardCityFaq(
        "Rastatt",
        {
          amtsgericht: "Amtsgericht Rastatt",
          landgericht: "Landgericht Baden-Baden",
          oberlandesgericht: "OLG Karlsruhe",
        },
        [
          {
            q: "Warum LG Baden-Baden für Rastatt?",
            a: "Landgerichtsbezirke umfassen oft mehrere Städte. Eine kurze Erklärung auf der Website verhindert Missverständnisse bei Mandanten.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Rastatt und die Oberrheinregion — Automotive, Gerichte, Suchverhalten — ohne erfundene Referenzen.",
    },
  },
  {
    slug: "baden-baden",
    name: "Baden-Baden",
    bundesland: BW,
    kreisOrBezirk: "Stadtkreis",
    population: { approx: 57000, label: "rund 57.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Baden-Baden",
      landgericht: "Landgericht Baden-Baden",
      oberlandesgericht: "OLG Karlsruhe",
    },
    economy: {
      sectors: ["Tourismus/Kur", "Medien", "Gesundheit"],
      profile: "Weltbekannter Kur- und Kulturort mit vermögender Klientel",
    },
    primaryLegalArea: "Erbrecht",
    secondaryLegalAreas: ["Gewerbemietrecht", "Tourismusrecht"],
    landmarks: ["Kurhaus", "Festspielhaus", "UNESCO Welterbe Great Spa Towns"],
    mapCoords: coords(8.24, 48.76),
    nearbySlugs: ["freiburg", "karlsruhe", "offenburg", "rastatt"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "baden-baden",
      heroSubtitle:
        "Für Kanzleien in der Kurstadt — Tourismus, Kultur und anspruchsvolle Mandantschaft.",
      introParagraphs: [
        "Baden-Baden ist internationaler Kur- und Kulturort — mit Medien, Gesundheitswirtschaft und einer Klientel, die diskret und qualitätsorientiert sucht.",
        "Erbrecht, Gewerbemiete in Hotellerie und tourismusnahe Verträge sind typische Suchfelder — abhängig von Ihrer Ausrichtung. Der erste Eindruck online muss zur Erwartung passen.",
      ],
      courtsNarrative:
        "Amts- und Landgericht Baden-Baden, OLG Karlsruhe — beide Instanzen in der Kurstadt. Für Mandate aus Baden-Baden ein klar lokaler Instanzenweg.",
      economyNarrative:
        "Kur, Tourismus und vermögende Privatmandanten prägen das Umfeld. Eine Website sollte Seriosität und Spezialisierung ausstrahlen — ohne protzige Werbung.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Erbfall im Familienhotel sucht ein Erbe 'Erbrecht Anwalt Baden-Baden' — diskret und nachts.",
      faq: standardCityFaq(
        "Baden-Baden",
        {
          amtsgericht: "Amtsgericht Baden-Baden",
          landgericht: "Landgericht Baden-Baden",
          oberlandesgericht: "OLG Karlsruhe",
        },
        [
          {
            q: "Eignet sich Baden-Baden für Erbrecht-SEO?",
            a: "Wenn Erbrecht Ihr Schwerpunkt ist, ist die Kurstadt ein plausibles Suchfeld — sachlich formuliert und im Einklang mit BRAO-Werberichtlinien.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Baden-Baden als Standort und baut einen Auftritt, der Kultur, Tourismus und Gerichtsstruktur respektvoll abbildet.",
    },
  },
  {
    slug: "bruchsal",
    name: "Bruchsal",
    bundesland: BW,
    kreisOrBezirk: "Landkreis Karlsruhe",
    population: { approx: 46000, label: "rund 46.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Bruchsal",
      landgericht: "Landgericht Karlsruhe",
      oberlandesgericht: "OLG Karlsruhe",
    },
    economy: {
      sectors: ["Maschinenbau", "Logistik"],
      keyEmployersOrClusters: ["SEW-Eurodrive"],
      profile: "Kraichgau-Stadt mit Maschinenbau und Logistik",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht"],
    landmarks: ["Barockschloss Bruchsal"],
    mapCoords: coords(8.58, 49.12),
    nearbySlugs: ["heidelberg", "karlsruhe", "mannheim", "rastatt"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "bruchsal",
      heroSubtitle:
        "Für Kanzleien im Kraichgau — Maschinenbau, Logistik und Nähe zu Karlsruhe.",
      introParagraphs: [
        "Bruchsal verbindet barockes Schloss mit industrieller Substanz — SEW-Eurodrive und Logistik prägen den Arbeitsmarkt. Viele Pendler arbeiten in Karlsruhe, wohnen im Kraichgau.",
        "Mandanten suchen oft regional verankerte Kanzleien mit erkennbarem Schwerpunkt — nicht die nächste Großstadt-Generika-Seite.",
      ],
      courtsNarrative:
        "Amtsgericht Bruchsal, Landgericht Karlsruhe in der Berufung, OLG Karlsruhe. Berufungen führen nach Karlsruhe — wichtig für Mandanten aus dem Landkreis.",
      economyNarrative:
        "Maschinenbau und Logistik bedeuten Arbeits- und Handelsrecht in technischen Betrieben. Wer das online zeigt, spricht die richtige Klientel an.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Logistikleiter prüft Haftungsklauseln in Speditionsverträgen — 'Handelsrecht Bruchsal'.",
      faq: standardCityFaq(
        "Bruchsal",
        {
          amtsgericht: "Amtsgericht Bruchsal",
          landgericht: "Landgericht Karlsruhe",
          oberlandesgericht: "OLG Karlsruhe",
        },
        [
          {
            q: "Konkurriert Bruchsal mit Karlsruer Kanzleien online?",
            a: "Ja — deshalb lohnt sich ein Auftritt, der Bruchsal und den Kraichgau klar benennt, statt unsichtbar zu bleiben.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Bruchsal und den Kraichgau und formt daraus einen lokal verankerten Kanzlei-Auftritt.",
    },
  },
  {
    slug: "loerrach",
    name: "Lörrach",
    bundesland: BW,
    kreisOrBezirk: "Landkreis Lörrach",
    stadtTyp: "Kreisstadt",
    population: { approx: 50000, label: "rund 50.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Lörrach",
      landgericht: "Landgericht Freiburg im Breisgau",
      oberlandesgericht: "OLG Karlsruhe",
    },
    economy: {
      sectors: ["Grenzhandel Schweiz", "Pharma-Pendler", "Einzelhandel"],
      profile: "Dreiländereck-Stadt mit Basel-Nähe",
    },
    primaryLegalArea: "Grenzüberschreitendes Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht"],
    landmarks: ["Burg Rötteln", "Dreiländereck"],
    mapCoords: coords(7.66, 47.55),
    nearbySlugs: ["freiburg", "konstanz", "offenburg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "loerrach",
      heroSubtitle:
        "Für Kanzleien im Dreiländereck — Grenzgänger, Basel-Nähe und Marktplatz im Süden.",
      introParagraphs: [
        "Lörrach profitiert von der Nähe zu Basel und der Schweiz — Grenzgänger, Pharma und Einzelhandel prägen den Alltag. Rechtliche Fragen überschreiten oft Ländergrenzen.",
        "Mandanten erwarten Kanzleien, die Grenzthemen sachlich ansprechen können — ohne unseriöse Versprechen.",
      ],
      courtsNarrative:
        "Amtsgericht Lörrach, Landgericht Freiburg im Breisgau, OLG Karlsruhe. Berufungen führen nach Freiburg — für Südbaden typisch.",
      economyNarrative:
        "Grenzüberschreitendes Arbeitsrecht und Handelsfragen mit Schweizer Bezug sind prägnante Suchthemen — wenn Ihre Kanzlei das abdeckt, sollte es online sichtbar sein.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Grenzgänger erhält Kündigung vom Schweizer Arbeitgeber — gesucht wird 'Grenzgänger Anwalt Lörrach'.",
      faq: standardCityFaq(
        "Lörrach",
        {
          amtsgericht: "Amtsgericht Lörrach",
          landgericht: "Landgericht Freiburg im Breisgau",
          oberlandesgericht: "OLG Karlsruhe",
        },
        [
          {
            q: "Dürfen wir Grenzgänger-Themen bewerben?",
            a: "Ja, sachlich und im Rahmen der BRAO — ohne Erfolgsversprechen und ohne Beratung in Schweizer Recht vorzutäuschen, wenn Sie das nicht anbieten.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Lörrach im Dreiländereck und baut einen Auftritt, der Grenz- und Gerichtsbezug ehrlich darstellt.",
    },
  },
  {
    slug: "leonberg",
    name: "Leonberg",
    bundesland: BW,
    kreisOrBezirk: "Landkreis Böblingen",
    population: { approx: 49000, label: "rund 49.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Leonberg",
      landgericht: "Landgericht Stuttgart",
      oberlandesgericht: "OLG Stuttgart",
    },
    economy: {
      sectors: ["Automotive-Zulieferer", "Bosch-Standort"],
      profile: "Stuttgarter Speckgürtel mit Automotive-Fokus",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht"],
    landmarks: ["Pomeranzengarten", "Altstadt"],
    mapCoords: coords(9.02, 48.8),
    nearbySlugs: ["stuttgart", "sindelfingen", "fellbach"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "leonberg",
      heroSubtitle:
        "Für Kanzleien im Stuttgarter Speckgürtel — Automotive, Bosch-Umfeld und historische Altstadt.",
      introParagraphs: [
        "Leonberg liegt im dichten Speckgürtel Stuttgarts — Automotive-Zulieferer und Bosch prägen die Wirtschaft. Viele Mandanten pendeln, suchen aber lokal.",
        "Arbeitsrecht und Handelsrecht sind Kernsuchfelder. Eine präzise Website filtert Mandanten vor dem Erstgespräch.",
      ],
      courtsNarrative:
        "Amtsgericht Leonberg, Landgericht Stuttgart, OLG Stuttgart — ein klar stuttgarter Instanzenweg mit lokalem Amtsgericht.",
      economyNarrative:
        "Automotive-Zulieferer und Mittelstand im Speckgürtel brauchen Kanzleien, die online genauso professionell wirken wie im persönlichen Gespräch.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Betriebsratssitzung sucht ein Abteilungsleiter 'Betriebsrat Anwalt Leonberg'.",
      faq: standardCityFaq(
        "Leonberg",
        {
          amtsgericht: "Amtsgericht Leonberg",
          landgericht: "Landgericht Stuttgart",
          oberlandesgericht: "OLG Stuttgart",
        },
        [
          {
            q: "Unterscheidet sich Leonberg von Stuttgart online?",
            a: "Ja — viele Mandanten suchen bewusst nach 'Leonberg' oder 'Speckgürtel'. Ein regionaler Auftritt ist kein Nachteil, sondern Filter.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Leonberg als Speckgürtel-Standort und übersetzt das in einen fokussierten Kanzlei-Auftritt.",
    },
  },
  {
    slug: "fellbach",
    name: "Fellbach",
    bundesland: BW,
    kreisOrBezirk: "Rems-Murr-Kreis",
    population: { approx: 46000, label: "rund 46.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Waiblingen",
      landgericht: "Landgericht Stuttgart",
      oberlandesgericht: "OLG Stuttgart",
    },
    economy: {
      sectors: ["Weinbau", "Mittelstand", "Messe"],
      profile: "Rems-Murr-Stadt mit Weinbergen und Stuttgarter Nähe",
    },
    primaryLegalArea: "Agrarrecht",
    secondaryLegalAreas: ["Handelsrecht", "Arbeitsrecht"],
    landmarks: ["Weinberge", "Schwabenlandhalle"],
    mapCoords: coords(9.28, 48.81),
    nearbySlugs: ["stuttgart", "leonberg", "sindelfingen"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "fellbach",
      heroSubtitle:
        "Für Kanzleien zwischen Weinberg und Messe — Rems-Murr und Stuttgarter Nähe.",
      introParagraphs: [
        "Fellbach verbindet Weinbau am Hang mit Messe- und Mittelstandsgeschäft im Rems-Murr-Kreis. Stuttgarter Nähe prägt Pendler und Klientel.",
        "Agrar-, handels- und arbeitsrechtliche Mandate mischen sich. Wer online nur 'allgemeine Rechtsberatung' zeigt, gewinnt selten den ersten Klick.",
      ],
      courtsNarrative:
        "Erstinstanzlich Amtsgericht Waiblingen — nicht Fellbach im Namen — Landgericht Stuttgart, OLG Stuttgart. Der Waiblinger Bezirk sollte für Mandanten erklärt werden.",
      economyNarrative:
        "Weinbau, Messewirtschaft und Mittelstand machen Agrar- und Handelsrecht zu relevanten Schwerpunkten — je nach Kanzleiprofil.",
      localCaseExample:
        "Stellen Sie sich vor: Ein Winzer streitet über Pachtvertrag und Rebflächen — 'Agrarrecht Fellbach'.",
      faq: standardCityFaq(
        "Fellbach",
        {
          amtsgericht: "Amtsgericht Waiblingen",
          landgericht: "Landgericht Stuttgart",
          oberlandesgericht: "OLG Stuttgart",
        },
        [
          {
            q: "Warum AG Waiblingen für Fellbach?",
            a: "Amtsgerichtsbezirke umfassen mehrere Gemeinden. Eine kurze Erklärung schafft Vertrauen bei Erstmandanten.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Fellbach und den Rems-Murr-Kreis — Weinbau, Messe, Gerichte — für einen ehrlichen regionalen Auftritt.",
    },
  },
  {
    slug: "bietigheim-bissingen",
    name: "Bietigheim-Bissingen",
    bundesland: BW,
    kreisOrBezirk: "Landkreis Ludwigsburg",
    population: { approx: 43000, label: "rund 43.000", year: 2024 },
    courts: {
      amtsgericht: "Amtsgericht Besigheim",
      landgericht: "Landgericht Heilbronn",
      oberlandesgericht: "OLG Stuttgart",
    },
    economy: {
      sectors: ["Automotive", "Maschinenbau"],
      keyEmployersOrClusters: ["Bosch", "Dürr"],
      profile: "Doppelstadt im Enzkreis-Umfeld mit Automotive und Maschinenbau",
    },
    primaryLegalArea: "Arbeitsrecht",
    secondaryLegalAreas: ["Handelsrecht"],
    landmarks: ["Historisches Fachwerk-Stadtzentrum"],
    mapCoords: coords(9.22, 48.96),
    nearbySlugs: ["stuttgart", "heilbronn", "sindelfingen", "leonberg"],
    rolloutPhase: 2,
    status: "live",
    content: {
      slug: "bietigheim-bissingen",
      heroSubtitle:
        "Für Kanzleien in der Doppelstadt — Fachwerk-Altstadt, Bosch, Dürr und Enzkreis-Mittelstand.",
      introParagraphs: [
        "Bietigheim-Bissingen vereint zwei Stadtkerne zu einem wirtschaftlich relevanten Standort zwischen Ludwigsburg und Heilbronn. Automotive und Maschinenbau dominieren.",
        "Mandanten aus Werk und Mittelstand suchen oft arbeits- und handelsrechtliche Beratung — die Website ist der erste Filter.",
      ],
      courtsNarrative:
        "Amtsgericht Besigheim, Landgericht Heilbronn, OLG Stuttgart. Der Instanzenweg über Besigheim und Heilbronn ist für Mandanten selten bekannt.",
      economyNarrative:
        "Bosch, Dürr und Zulieferer machen Arbeitsrecht zum zentralen Suchfeld — neben Handelsrecht in mittelständischen Betrieben.",
      localCaseExample:
        "Stellen Sie sich vor: Nach Restrukturierungsankündigung sucht ein Ingenieur 'Arbeitsrecht Bietigheim'.",
      faq: standardCityFaq(
        "Bietigheim-Bissingen",
        {
          amtsgericht: "Amtsgericht Besigheim",
          landgericht: "Landgericht Heilbronn",
          oberlandesgericht: "OLG Stuttgart",
        },
        [
          {
            q: "Gehört Bietigheim zum LG Stuttgart?",
            a: "Nein — Heilbronn ist der Landgerichtsbezirk. Das ist ein wichtiger regionaler Fakt für Ihre Seite.",
          },
        ],
      ),
      whyVerdexParagraph:
        "Verdex recherchiert Bietigheim-Bissingen und die Region zwischen Ludwigsburg und Heilbronn — sachlich, ohne erfundene Referenzen.",
    },
  },
];

export const badenWuerttembergFacts: CityFacts[] = cities.map((city) => {
  const { content, ...facts } = city;
  void content;
  return facts;
});

export const badenWuerttembergContent: Record<string, CityRecord["content"]> =
  Object.fromEntries(cities.map((c) => [c.slug, c.content]));

export const badenWuerttembergRecords: CityRecord[] = cities.map(
  ({ content, ...facts }) => ({ ...facts, content }),
);
