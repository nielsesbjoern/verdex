/**
 * Phase-2-Rollout: 20 priorisierte Städte (Tier 1 Stadtstaaten + Tier 2 Landeshauptstäfte/regionale Zentren).
 * nearbySlugs dürfen nur live Slugs oder andere Phase-2-Slugs referenzieren.
 */

export type Phase2Tier = "stadtstaat" | "landeshauptstadt" | "regionalzentrum";

export type Phase2Entry = {
  priority: 1 | 2 | 3;
  tier: Phase2Tier;
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

/** Alle 20 Phase-2-Städte in Rollout-Reihenfolge. */
export const PHASE_2_CITIES: Phase2Entry[] = [
  // —— Tier 1: fehlende Bundesländer (Stadtstaaten) ——
  {
    priority: 1,
    tier: "stadtstaat",
    slug: "berlin",
    name: "Berlin",
    bundesland: "Berlin",
    populationApprox: 3700000,
    populationLabel: "rund 3,7 Mio.",
    rationale:
      "Einziges Bundesland ohne Stadtseite; Kammergericht als OLG. Über Zielband — bewusste Ausnahme für 16/16-Abdeckung.",
    nearbySlugs: ["potsdam", "frankfurt-oder", "cottbus"],
    backlinkFrom: ["oranienburg", "frankfurt-oder", "brandenburg-an-der-havel"],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "stadtstaat",
    slug: "hamburg",
    name: "Hamburg",
    bundesland: "Hamburg",
    populationApprox: 1900000,
    populationLabel: "rund 1,9 Mio.",
    rationale:
      "Stadtstaat ohne Seite; eigenes OLG. Über Zielband — Ausnahme für Bundesland-Vollständigkeit.",
    nearbySlugs: ["norderstedt", "pinneberg", "neumuenster", "lueneburg"],
    backlinkFrom: ["norderstedt", "pinneberg", "lueneburg"],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "stadtstaat",
    slug: "bremen",
    name: "Bremen",
    bundesland: "Bremen",
    populationApprox: 570000,
    populationLabel: "rund 570.000",
    rationale: "Stadtstaat; Hansestadt mit LG/OLG vor Ort.",
    nearbySlugs: ["bremerhaven", "oldenburg", "wilhelmshaven"],
    backlinkFrom: [],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "stadtstaat",
    slug: "bremerhaven",
    name: "Bremerhaven",
    bundesland: "Bremen",
    populationApprox: 113000,
    populationLabel: "rund 113.000",
    rationale: "Im Zielband; Seehafen ergänzt Bremen im gleichen Bundesland.",
    nearbySlugs: ["bremen", "wilhelmshaven", "cuxhaven"],
    backlinkFrom: ["wilhelmshaven", "cuxhaven"],
  },
  // —— Tier 2: Landeshauptstädte & LG/OLG-Knoten ——
  {
    priority: 2,
    tier: "landeshauptstadt",
    slug: "schwerin",
    name: "Schwerin",
    bundesland: "Mecklenburg-Vorpommern",
    populationApprox: 99000,
    populationLabel: "rund 99.000",
    rationale:
      "Landeshauptstadt MV; LG-Sitz — Wismar/Stralsund verweisen bereits auf LG Schwerin.",
    nearbySlugs: ["luebeck", "wismar", "guestrow", "rostock"],
    backlinkFrom: ["wismar", "stralsund", "guestrow", "neubrandenburg"],
  },
  {
    priority: 2,
    tier: "landeshauptstadt",
    slug: "erfurt",
    name: "Erfurt",
    bundesland: "Thüringen",
    populationApprox: 214000,
    populationLabel: "rund 214.000",
    rationale:
      "Landeshauptstadt; LG Erfurt — Gotha/Weimar verweisen bereits darauf.",
    nearbySlugs: ["weimar", "gotha", "jena", "muelhausen"],
    backlinkFrom: ["gotha", "weimar", "jena"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "rostock",
    name: "Rostock",
    bundesland: "Mecklenburg-Vorpommern",
    populationApprox: 209000,
    populationLabel: "rund 209.000",
    rationale: "Hansestadt; OLG-Bezirk MV. Ergänzt Schwerin an der Ostseeküste.",
    nearbySlugs: ["schwerin", "stralsund", "guestrow", "wismar"],
    backlinkFrom: ["stralsund", "guestrow", "greifswald"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "landeshauptstadt",
    slug: "potsdam",
    name: "Potsdam",
    bundesland: "Brandenburg",
    populationApprox: 183000,
    populationLabel: "rund 183.000",
    rationale: "Landeshauptstadt BB; LG Potsdam — nahe Berlin.",
    nearbySlugs: ["berlin", "brandenburg-an-der-havel", "oranienburg"],
    backlinkFrom: [
      "oranienburg",
      "brandenburg-an-der-havel",
      "eberswalde",
      "frankfurt-oder",
    ],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "landeshauptstadt",
    slug: "mainz",
    name: "Mainz",
    bundesland: "Rheinland-Pfalz",
    populationApprox: 218000,
    populationLabel: "rund 218.000",
    rationale: "Landeshauptstadt RLP; Medien/Verwaltung; LG Mainz.",
    nearbySlugs: ["frankfurt-am-main", "wiesbaden", "darmstadt", "worms"],
    backlinkFrom: ["worms", "speyer", "bad-kreuznach", "frankenthal-pfalz"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "landeshauptstadt",
    slug: "saarbruecken",
    name: "Saarbrücken",
    bundesland: "Saarland",
    populationApprox: 180000,
    populationLabel: "rund 180.000",
    rationale:
      "Landeshauptstadt SL; LG/OLG-Sitz — alle fünf SL-Seiten verweisen auf LG Saarbrücken.",
    nearbySlugs: ["neunkirchen", "voelklingen", "saarlouis", "homburg"],
    backlinkFrom: [
      "neunkirchen",
      "voelklingen",
      "saarlouis",
      "homburg",
      "st-ingbert",
    ],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "landeshauptstadt",
    slug: "magdeburg",
    name: "Magdeburg",
    bundesland: "Sachsen-Anhalt",
    populationApprox: 240000,
    populationLabel: "rund 240.000",
    rationale:
      "Landeshauptstadt ST; LG Magdeburg — Wernigerode/Halberstadt verweisen bereits darauf.",
    nearbySlugs: [
      "halle-saale",
      "wernigerode",
      "halberstadt",
      "dessau-rosslau",
    ],
    backlinkFrom: ["wernigerode", "halberstadt", "bernburg", "stendal"],
    aboveTargetBand: true,
  },
  // —— Tier 3: starke Ergänzungen im/nah am Zielband ——
  {
    priority: 3,
    tier: "regionalzentrum",
    slug: "neumuenster",
    name: "Neumünster",
    bundesland: "Schleswig-Holstein",
    populationApprox: 82000,
    populationLabel: "rund 82.000",
    rationale: "Größte SH-Stadt ohne Seite; zwischen Hamburg und Kiel.",
    nearbySlugs: ["kiel", "norderstedt", "itzehoe", "hamburg"],
    backlinkFrom: ["norderstedt", "itzehoe", "rendsburg"],
  },
  {
    priority: 3,
    tier: "regionalzentrum",
    slug: "trier",
    name: "Trier",
    bundesland: "Rheinland-Pfalz",
    populationApprox: 110000,
    populationLabel: "rund 110.000",
    rationale: "Universitätsstadt; LG Trier; Mosel-Region.",
    nearbySlugs: ["koblenz", "landau-in-der-pfalz", "bad-kreuznach"],
    backlinkFrom: ["landau-in-der-pfalz", "bad-kreuznach"],
  },
  {
    priority: 3,
    tier: "regionalzentrum",
    slug: "koblenz",
    name: "Koblenz",
    bundesland: "Rheinland-Pfalz",
    populationApprox: 114000,
    populationLabel: "rund 114.000",
    rationale: "OLG Koblenz-Sitz; Rhein-Mosel-Knoten.",
    nearbySlugs: ["trier", "neuwied", "bad-kreuznach", "mainz"],
    backlinkFrom: ["neuwied", "bad-kreuznach"],
  },
  {
    priority: 3,
    tier: "regionalzentrum",
    slug: "oldenburg",
    name: "Oldenburg",
    bundesland: "Niedersachsen",
    populationApprox: 170000,
    populationLabel: "rund 170.000",
    rationale: "OLG Oldenburg-Bezirk; Wilhelmshaven/Emden verweisen auf LG Oldenburg.",
    nearbySlugs: ["osnabrueck", "wilhelmshaven", "emden", "bremerhaven"],
    backlinkFrom: ["wilhelmshaven", "emden", "cloppenburg"],
    aboveTargetBand: true,
  },
  {
    priority: 3,
    tier: "regionalzentrum",
    slug: "regensburg",
    name: "Regensburg",
    bundesland: "Bayern",
    populationApprox: 153000,
    populationLabel: "rund 153.000",
    rationale: "Universität/Industrie; LG Regensburg — Straubing verweist bereits darauf.",
    nearbySlugs: ["muenchen", "straubing", "landshut", "neumarkt-in-der-oberpfalz"],
    backlinkFrom: ["straubing", "landshut"],
    aboveTargetBand: true,
  },
  {
    priority: 3,
    tier: "regionalzentrum",
    slug: "reutlingen",
    name: "Reutlingen",
    bundesland: "Baden-Württemberg",
    populationApprox: 116000,
    populationLabel: "rund 116.000",
    rationale: "Textil-/Mittelstandstradition; Region Stuttgart.",
    nearbySlugs: ["stuttgart", "goeppingen", "schwaebisch-gmuend", "fellbach"],
    backlinkFrom: ["goeppingen", "schwaebisch-gmuend"],
  },
  {
    priority: 3,
    tier: "regionalzentrum",
    slug: "heilbronn",
    name: "Heilbronn",
    bundesland: "Baden-Württemberg",
    populationApprox: 126000,
    populationLabel: "rund 126.000",
    rationale: "LG-Sitz; Bietigheim-Bissingen verweist bereits auf LG Heilbronn.",
    nearbySlugs: ["stuttgart", "bietigheim-bissingen", "schwaebisch-gmuend", "reutlingen"],
    backlinkFrom: ["bietigheim-bissingen"],
  },
  {
    priority: 3,
    tier: "regionalzentrum",
    slug: "darmstadt",
    name: "Darmstadt",
    bundesland: "Hessen",
    populationApprox: 159000,
    populationLabel: "rund 159.000",
    rationale: "Wissenschaftsstadt; LG Darmstadt — Rüsselsheim verweist bereits darauf.",
    nearbySlugs: ["frankfurt-am-main", "ruesselsheim", "mainz", "bad-homburg"],
    backlinkFrom: ["ruesselsheim", "hanau"],
    aboveTargetBand: true,
  },
  {
    priority: 3,
    tier: "regionalzentrum",
    slug: "siegen",
    name: "Siegen",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 102000,
    populationLabel: "rund 102.000",
    rationale: "Universität; LG Siegen im Süden NRW.",
    nearbySlugs: ["koeln", "gummersbach", "luedenscheid", "iserlohn"],
    backlinkFrom: ["gummersbach"],
  },
];

export const PHASE_2_SLUGS = PHASE_2_CITIES.map((c) => c.slug);

/** Optional slug overrides for nearbySlugs in the plan metadata. */
const PLAN_SLUG_FIX: Record<string, string[]> = {};

export function getPhase2NearbySlugs(slug: string): string[] {
  const entry = PHASE_2_CITIES.find((c) => c.slug === slug);
  if (!entry) return [];
  return PLAN_SLUG_FIX[slug] ?? entry.nearbySlugs;
}

export type NearbyValidationResult = {
  ok: boolean;
  errors: string[];
  warnings: string[];
};

/** Prüft Phase-2-nearbySlugs gegen live Slugs + Phase-2-Batch. */
export function validatePhase2Plan(
  liveSlugs: string[],
  existingNearbyBySlug: Record<string, string[] | undefined> = {},
): NearbyValidationResult {
  const allowed = new Set([...liveSlugs, ...PHASE_2_SLUGS]);
  const errors: string[] = [];
  const warnings: string[] = [];

  for (const entry of PHASE_2_CITIES) {
    const nearby = getPhase2NearbySlugs(entry.slug);
    for (const ref of nearby) {
      if (!allowed.has(ref)) {
        errors.push(`${entry.slug}: nearbySlugs enthält unbekannten Slug "${ref}"`);
      }
    }
    for (const ref of entry.backlinkFrom) {
      if (!liveSlugs.includes(ref) && !PHASE_2_SLUGS.includes(ref)) {
        warnings.push(
          `${entry.slug}: backlinkFrom "${ref}" ist weder live noch Phase-2`,
        );
      }
    }
    if (nearby.length > 4) {
      warnings.push(`${entry.slug}: mehr als 4 nearbySlugs (${nearby.length})`);
    }
  }

  const backlinksNeeded = new Map<string, Set<string>>();
  for (const entry of PHASE_2_CITIES) {
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
          `Backlink fehlt: ${slug}.nearbySlugs sollte "${target}" enthalten (Phase-2-Plan)`,
        );
      }
    }
  }

  return { ok: errors.length === 0, errors, warnings };
}

/** Aggregierte Backlink-Updates für bestehende Städte. */
export function getPhase2BacklinkUpdates(): Record<string, string[]> {
  const updates: Record<string, string[]> = {};
  for (const entry of PHASE_2_CITIES) {
    for (const from of entry.backlinkFrom) {
      if (!updates[from]) updates[from] = [];
      if (!updates[from].includes(entry.slug)) {
        updates[from].push(entry.slug);
      }
    }
  }
  return updates;
}
