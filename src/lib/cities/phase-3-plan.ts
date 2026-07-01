/**
 * Phase-3-Rollout: 25 priorisierte Großstädte (>300k bzw. fehlende Landeshauptstäfte).
 * nearbySlugs dürfen nur live Slugs, Phase-2-Slugs oder andere Phase-3-Slugs referenzieren.
 */

export type Phase3Tier = "grossstadt" | "landeshauptstadt" | "regionalzentrum";

export type Phase3Entry = {
  priority: 1 | 2;
  tier: Phase3Tier;
  slug: string;
  name: string;
  bundesland: string;
  populationApprox: number;
  populationLabel: string;
  /** Kurzbegründung für die Priorität */
  rationale: string;
  /** Geplante nearbySlugs (max. 4 empfohlen) */
  nearbySlugs: string[];
  /** Bestehende live Slugs, deren nearbySlugs um diesen slug ergänzt werden sollten */
  backlinkFrom: string[];
  aboveTargetBand?: boolean;
  zensusStrittig?: boolean;
};

/** Alle 25 Phase-3-Städte in Rollout-Reihenfolge. */
export const PHASE_3_CITIES: Phase3Entry[] = [
  // —— Tier 1: deutsche Großstädte >500.000 ——
  {
    priority: 1,
    tier: "grossstadt",
    slug: "muenchen",
    name: "München",
    bundesland: "Bayern",
    populationApprox: 1578000,
    populationLabel: "rund 1,58 Mio.",
    rationale:
      "Größte Stadt ohne Seite; OLG München. Bewusste Ausnahme weit über dem Zielband.",
    nearbySlugs: ["regensburg", "dachau", "freising", "landshut"],
    backlinkFrom: [
      "dachau",
      "freising",
      "landshut",
      "regensburg",
      "rosenheim",
      "aschaffenburg",
    ],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "koeln",
    name: "Köln",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 1087000,
    populationLabel: "rund 1,09 Mio.",
    rationale:
      "Größte NRW-Lücke; OLG Köln. Zentraler Rhein-Knoten zwischen Ruhr und Bonn.",
    nearbySlugs: ["euskirchen", "siegen", "bonn", "duesseldorf"],
    backlinkFrom: ["euskirchen", "siegen", "kleve"],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "frankfurt-am-main",
    name: "Frankfurt am Main",
    bundesland: "Hessen",
    populationApprox: 759000,
    populationLabel: "rund 759.000",
    rationale:
      "Finanzmetropole; OLG Frankfurt. Größte hessische Lücke neben Darmstadt.",
    nearbySlugs: ["darmstadt", "mainz", "bad-homburg", "hanau"],
    backlinkFrom: ["darmstadt", "bad-homburg", "hanau", "ruesselsheim", "mainz"],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "stuttgart",
    name: "Stuttgart",
    bundesland: "Baden-Württemberg",
    populationApprox: 635000,
    populationLabel: "rund 635.000",
    rationale:
      "Landeshauptstadt BW; OLG Stuttgart. Ergänzt die bestehenden Mittelzentren im Umland.",
    nearbySlugs: ["sindelfingen", "fellbach", "leonberg", "bietigheim-bissingen"],
    backlinkFrom: [
      "sindelfingen",
      "fellbach",
      "leonberg",
      "bietigheim-bissingen",
      "reutlingen",
      "heilbronn",
    ],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "duesseldorf",
    name: "Düsseldorf",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 623000,
    populationLabel: "rund 623.000",
    rationale: "Landeshauptstadt NRW; LG Düsseldorf. Rhein-Ruhr-Knoten.",
    nearbySlugs: ["dinslaken", "moenchengladbach", "duisburg", "koeln"],
    backlinkFrom: ["dinslaken"],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "leipzig",
    name: "Leipzig",
    bundesland: "Sachsen",
    populationApprox: 601000,
    populationLabel: "rund 601.000",
    rationale:
      "Größte sächsische Stadt ohne Seite; LG Leipzig. Ergänzt Dresden und Chemnitz.",
    nearbySlugs: ["freital", "riesa", "chemnitz", "dresden"],
    backlinkFrom: ["freital", "riesa", "pirna"],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "dortmund",
    name: "Dortmund",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 588000,
    populationLabel: "rund 588.000",
    rationale: "Ruhrgebiet; LG Dortmund. Verbindet Essen, Bochum und das südliche NRW.",
    nearbySlugs: ["castrop-rauxel", "unna", "bochum", "essen"],
    backlinkFrom: ["castrop-rauxel", "unna", "herford"],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "essen",
    name: "Essen",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 578000,
    populationLabel: "rund 578.000",
    rationale: "Ruhrgebiet; LG Essen. Zentral zwischen Duisburg und Dortmund.",
    nearbySlugs: ["bochum", "duisburg", "dinslaken", "dortmund"],
    backlinkFrom: ["dinslaken", "castrop-rauxel"],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "dresden",
    name: "Dresden",
    bundesland: "Sachsen",
    populationApprox: 563000,
    populationLabel: "rund 563.000",
    rationale: "Landeshauptstadt Sachsen; OLG Dresden. Ergänzt Leipzig und Chemnitz.",
    nearbySlugs: ["freital", "pirna", "riesa", "leipzig"],
    backlinkFrom: ["freital", "pirna", "riesa", "freiberg"],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "hannover",
    name: "Hannover",
    bundesland: "Niedersachsen",
    populationApprox: 535000,
    populationLabel: "rund 535.000",
    rationale:
      "Landeshauptstadt Niedersachsen; LG Hannover. Größte Lücke neben Oldenburg.",
    nearbySlugs: ["hildesheim", "celle", "peine", "braunschweig"],
    backlinkFrom: ["hildesheim", "celle", "peine", "hameln"],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "nuernberg",
    name: "Nürnberg",
    bundesland: "Bayern",
    populationApprox: 523000,
    populationLabel: "rund 523.000",
    rationale:
      "Zweites Bayern-Zentrum; LG Nürnberg. Ergänzt München und Regensburg.",
    nearbySlugs: ["bayreuth", "bamberg", "ansbach", "augsburg"],
    backlinkFrom: ["bayreuth", "bamberg", "ansbach", "schweinfurt"],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "duisburg",
    name: "Duisburg",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 501000,
    populationLabel: "rund 501.000",
    rationale: "Ruhrgebiet; Hafenstadt am Rhein. Verbindet Essen und Düsseldorf.",
    nearbySlugs: ["essen", "bochum", "moenchengladbach", "duesseldorf"],
    backlinkFrom: [],
    aboveTargetBand: true,
  },
  // —— Tier 2: starke Großstädte 250k–400k & fehlende Landeshauptstäfte ——
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "bochum",
    name: "Bochum",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 364000,
    populationLabel: "rund 364.000",
    rationale: "Ruhrgebiet; LG Bochum. Universitäts- und Mittelstandszentrum.",
    nearbySlugs: ["essen", "dortmund", "castrop-rauxel", "duisburg"],
    backlinkFrom: ["castrop-rauxel"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "wuppertal",
    name: "Wuppertal",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 358000,
    populationLabel: "rund 358.000",
    rationale: "Bergisches Land; LG Wuppertal. Verbindet Ruhr und Rhein.",
    nearbySlugs: ["gummersbach", "siegen", "duesseldorf", "bochum"],
    backlinkFrom: ["gummersbach", "luedenscheid", "iserlohn"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "bielefeld",
    name: "Bielefeld",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 334000,
    populationLabel: "rund 334.000",
    rationale: "Ostwestfalen; LG Bielefeld. Ergänzt Gütersloh und Minden.",
    nearbySlugs: ["muenster", "guetersloh", "herford", "minden"],
    backlinkFrom: ["guetersloh", "herford", "minden", "detmold", "lippstadt"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "bonn",
    name: "Bonn",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 331000,
    populationLabel: "rund 331.000",
    rationale: "Ehemalige Bundeshauptstadt; LG Bonn. Rhein-Knoten südlich von Köln.",
    nearbySlugs: ["koeln", "euskirchen", "siegen", "mainz"],
    backlinkFrom: ["euskirchen"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "mannheim",
    name: "Mannheim",
    bundesland: "Baden-Württemberg",
    populationApprox: 309000,
    populationLabel: "rund 309.000",
    rationale: "Metropolregion Rhein-Neckar; LG Mannheim.",
    nearbySlugs: ["frankenthal-pfalz", "worms", "speyer", "karlsruhe"],
    backlinkFrom: ["frankenthal-pfalz", "worms", "speyer", "bruchsal"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "karlsruhe",
    name: "Karlsruhe",
    bundesland: "Baden-Württemberg",
    populationApprox: 308000,
    populationLabel: "rund 308.000",
    rationale: "Oberlandesgericht Karlsruhe; Technologie und Verwaltung.",
    nearbySlugs: ["mannheim", "bruchsal", "rastatt", "baden-baden"],
    backlinkFrom: ["bruchsal", "rastatt", "baden-baden", "offenburg"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "augsburg",
    name: "Augsburg",
    bundesland: "Bayern",
    populationApprox: 301000,
    populationLabel: "rund 301.000",
    rationale: "LG Augsburg; zweites Zentrum in Schwaben neben München.",
    nearbySlugs: ["neu-ulm", "kempten", "memmingen", "muenchen"],
    backlinkFrom: ["neu-ulm", "kempten", "memmingen"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "landeshauptstadt",
    slug: "wiesbaden",
    name: "Wiesbaden",
    bundesland: "Hessen",
    populationApprox: 290000,
    populationLabel: "rund 290.000",
    rationale: "Landeshauptstadt Hessen; LG Wiesbaden. Ergänzt Frankfurt und Mainz.",
    nearbySlugs: ["mainz", "darmstadt", "bad-homburg", "frankfurt-am-main"],
    backlinkFrom: ["mainz", "bad-homburg"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "moenchengladbach",
    name: "Mönchengladbach",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 271000,
    populationLabel: "rund 271.000",
    rationale: "Niederrhein; LG Mönchengladbach. Verbindet Düsseldorf und Köln.",
    nearbySlugs: ["duesseldorf", "duisburg", "koeln", "bonn"],
    backlinkFrom: [],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "braunschweig",
    name: "Braunschweig",
    bundesland: "Niedersachsen",
    populationApprox: 248000,
    populationLabel: "rund 248.000",
    rationale: "Wissenschafts- und Industriestandort; LG Braunschweig.",
    nearbySlugs: ["wolfenbuettel", "goslar", "hildesheim", "hannover"],
    backlinkFrom: ["wolfenbuettel", "goslar", "hildesheim"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "landeshauptstadt",
    slug: "kiel",
    name: "Kiel",
    bundesland: "Schleswig-Holstein",
    populationApprox: 246000,
    populationLabel: "rund 246.000",
    rationale:
      "Landeshauptstadt SH; OLG Kiel. Größte Lücke im nördlichsten Bundesland.",
    nearbySlugs: ["flensburg", "neumuenster", "rendsburg", "elmshorn"],
    backlinkFrom: ["flensburg", "neumuenster", "rendsburg", "elmshorn", "pinneberg"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "chemnitz",
    name: "Chemnitz",
    bundesland: "Sachsen",
    populationApprox: 243000,
    populationLabel: "rund 243.000",
    rationale: "LG Chemnitz; Industriestadt im Erzgebirgsvorland.",
    nearbySlugs: ["zwickau", "plauen", "freiberg", "leipzig"],
    backlinkFrom: ["zwickau", "plauen", "freiberg"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "freiburg",
    name: "Freiburg",
    bundesland: "Baden-Württemberg",
    populationApprox: 234000,
    populationLabel: "rund 234.000",
    rationale: "Universitätsstadt; LG Freiburg. Tor zum Breisgau und Schwarzwald.",
    nearbySlugs: ["loerrach", "offenburg", "konstanz", "baden-baden"],
    backlinkFrom: ["loerrach", "offenburg", "konstanz", "baden-baden", "ravensburg"],
    aboveTargetBand: true,
  },
];

export const PHASE_3_SLUGS = PHASE_3_CITIES.map((c) => c.slug);

/** Optional slug overrides for nearbySlugs in the plan metadata. */
const PLAN_SLUG_FIX: Record<string, string[]> = {};

export function getPhase3NearbySlugs(slug: string): string[] {
  const entry = PHASE_3_CITIES.find((c) => c.slug === slug);
  if (!entry) return [];
  return PLAN_SLUG_FIX[slug] ?? entry.nearbySlugs;
}

export type NearbyValidationResult = {
  ok: boolean;
  errors: string[];
  warnings: string[];
};

/** Prüft Phase-3-nearbySlugs gegen live Slugs + Phase-3-Batch. */
export function validatePhase3Plan(
  liveSlugs: string[],
  existingNearbyBySlug: Record<string, string[] | undefined> = {},
): NearbyValidationResult {
  const allowed = new Set([...liveSlugs, ...PHASE_3_SLUGS]);
  const errors: string[] = [];
  const warnings: string[] = [];

  for (const entry of PHASE_3_CITIES) {
    const nearby = getPhase3NearbySlugs(entry.slug);
    for (const ref of nearby) {
      if (!allowed.has(ref)) {
        errors.push(`${entry.slug}: nearbySlugs enthält unbekannten Slug "${ref}"`);
      }
    }
    for (const ref of entry.backlinkFrom) {
      if (!liveSlugs.includes(ref) && !PHASE_3_SLUGS.includes(ref)) {
        warnings.push(
          `${entry.slug}: backlinkFrom "${ref}" ist weder live noch Phase-3`,
        );
      }
    }
    if (nearby.length > 4) {
      warnings.push(`${entry.slug}: mehr als 4 nearbySlugs (${nearby.length})`);
    }
  }

  const backlinksNeeded = new Map<string, Set<string>>();
  for (const entry of PHASE_3_CITIES) {
    for (const from of entry.backlinkFrom) {
      if (!backlinksNeeded.has(from)) backlinksNeeded.set(from, new Set());
      backlinksNeeded.get(from)!.add(entry.slug);
    }
  }

  for (const [slug, targets] of Array.from(backlinksNeeded.entries())) {
    const nearby = existingNearbyBySlug[slug];
    if (!nearby) continue;
    for (const target of Array.from(targets)) {
      if (!nearby.includes(target)) {
        warnings.push(
          `Backlink fehlt: ${slug}.nearbySlugs sollte "${target}" enthalten (Phase-3-Plan)`,
        );
      }
    }
  }

  return { ok: errors.length === 0, errors, warnings };
}

/** Aggregierte Backlink-Updates für bestehende Städte. */
export function getPhase3BacklinkUpdates(): Record<string, string[]> {
  const updates: Record<string, string[]> = {};
  for (const entry of PHASE_3_CITIES) {
    for (const from of entry.backlinkFrom) {
      if (!updates[from]) updates[from] = [];
      if (!updates[from].includes(entry.slug)) {
        updates[from].push(entry.slug);
      }
    }
  }
  return updates;
}
