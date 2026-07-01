/**
 * Phase-4-Rollout: 15 weitere Großstädte (ca. 160k–315k), die nach Phase 3 noch fehlten.
 */

export type Phase4Tier = "grossstadt" | "regionalzentrum";

export type Phase4Entry = {
  priority: 1 | 2;
  tier: Phase4Tier;
  slug: string;
  name: string;
  bundesland: string;
  populationApprox: number;
  populationLabel: string;
  rationale: string;
  nearbySlugs: string[];
  backlinkFrom: string[];
  aboveTargetBand?: boolean;
};

export const PHASE_4_CITIES: Phase4Entry[] = [
  {
    priority: 1,
    tier: "grossstadt",
    slug: "muenster",
    name: "Münster",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 315000,
    populationLabel: "rund 315.000",
    rationale: "Westfälisches Zentrum; LG Münster. Größte Lücke zwischen Bielefeld und Ruhrgebiet.",
    nearbySlugs: ["osnabrueck", "hamm", "bielefeld", "guetersloh"],
    backlinkFrom: ["bielefeld", "guetersloh", "hamm"],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "gelsenkirchen",
    name: "Gelsenkirchen",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 259000,
    populationLabel: "rund 259.000",
    rationale: "Ruhrgebiet; LG Gelsenkirchen. Ergänzt Essen, Bochum und Dortmund.",
    nearbySlugs: ["essen", "bochum", "dortmund", "oberhausen"],
    backlinkFrom: [],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "aachen",
    name: "Aachen",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 249000,
    populationLabel: "rund 249.000",
    rationale: "Grenzstadt mit RWTH; LG Aachen. Ergänzt Köln und die Euregio.",
    nearbySlugs: ["koeln", "euskirchen", "duesseldorf", "kleve"],
    backlinkFrom: ["kleve", "euskirchen"],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "halle-saale",
    name: "Halle (Saale)",
    bundesland: "Sachsen-Anhalt",
    populationApprox: 239000,
    populationLabel: "rund 239.000",
    rationale: "Chemiestandort; LG Halle. Größte Stadt in Sachsen-Anhalt neben Magdeburg.",
    nearbySlugs: ["magdeburg", "leipzig", "dessau-rosslau", "lutherstadt-wittenberg"],
    backlinkFrom: ["magdeburg", "dessau-rosslau", "lutherstadt-wittenberg"],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "krefeld",
    name: "Krefeld",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 227000,
    populationLabel: "rund 227.000",
    rationale: "Textiltradition; LG Krefeld. Niederrhein zwischen Düsseldorf und Mönchengladbach.",
    nearbySlugs: ["duesseldorf", "moenchengladbach", "duisburg", "kleve"],
    backlinkFrom: ["kleve"],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "luebeck",
    name: "Lübeck",
    bundesland: "Schleswig-Holstein",
    populationApprox: 217000,
    populationLabel: "rund 217.000",
    rationale: "Hansestadt; LG Lübeck. Zweites Zentrum in SH neben Kiel.",
    nearbySlugs: ["kiel", "hamburg", "schwerin", "rostock"],
    backlinkFrom: ["schwerin"],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "oberhausen",
    name: "Oberhausen",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 211000,
    populationLabel: "rund 211.000",
    rationale: "Ruhrgebiet; LG Duisburg-Bezirk. Verbindet Essen und Duisburg.",
    nearbySlugs: ["essen", "duisburg", "muelheim", "gelsenkirchen"],
    backlinkFrom: ["dinslaken"],
    aboveTargetBand: true,
  },
  {
    priority: 1,
    tier: "grossstadt",
    slug: "kassel",
    name: "Kassel",
    bundesland: "Hessen",
    populationApprox: 201000,
    populationLabel: "rund 201.000",
    rationale: "Nordhessisches Zentrum; LG Kassel. Ergänzt Hannover und Marburg.",
    nearbySlugs: ["hannover", "marburg", "giessen", "wetzlar"],
    backlinkFrom: ["marburg", "giessen", "fulda"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "hagen",
    name: "Hagen",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 189000,
    populationLabel: "rund 189.000",
    rationale: "Südes Ruhrgebiet; LG Hagen. Verbindet Dortmund und Wuppertal.",
    nearbySlugs: ["dortmund", "wuppertal", "unna", "bochum"],
    backlinkFrom: ["unna"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "hamm",
    name: "Hamm",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 179000,
    populationLabel: "rund 179.000",
    rationale: "Logistik-Knoten; LG Hamm. Zwischen Ruhrgebiet und Münsterland.",
    nearbySlugs: ["muenster", "dortmund", "unna", "bielefeld"],
    backlinkFrom: [],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "muelheim",
    name: "Mülheim an der Ruhr",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 172000,
    populationLabel: "rund 172.000",
    rationale: "Ruhrstadt am Rhein; LG Duisburg. Zwischen Essen und Düsseldorf.",
    nearbySlugs: ["essen", "oberhausen", "duisburg", "duesseldorf"],
    backlinkFrom: [],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "leverkusen",
    name: "Leverkusen",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 166000,
    populationLabel: "rund 166.000",
    rationale: "Chemiestandort Bayer; LG Köln. Rheinisches Industriezentrum.",
    nearbySlugs: ["koeln", "solingen", "wuppertal", "bonn"],
    backlinkFrom: [],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "osnabrueck",
    name: "Osnabrück",
    bundesland: "Niedersachsen",
    populationApprox: 165000,
    populationLabel: "rund 165.000",
    rationale: "Westfälisches Zentrum; LG Osnabrück. Ergänzt Münster und Oldenburg.",
    nearbySlugs: ["muenster", "bielefeld", "hannover", "oldenburg"],
    backlinkFrom: ["oldenburg"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "solingen",
    name: "Solingen",
    bundesland: "Nordrhein-Westfalen",
    populationApprox: 160000,
    populationLabel: "rund 160.000",
    rationale: "Bergisches Land; LG Wuppertal. Klingenstadt zwischen Köln und Wuppertal.",
    nearbySlugs: ["wuppertal", "leverkusen", "koeln", "gummersbach"],
    backlinkFrom: ["gummersbach"],
    aboveTargetBand: true,
  },
  {
    priority: 2,
    tier: "regionalzentrum",
    slug: "heidelberg",
    name: "Heidelberg",
    bundesland: "Baden-Württemberg",
    populationApprox: 160000,
    populationLabel: "rund 160.000",
    rationale: "Universitätsstadt; LG Heidelberg. Rhein-Neckar neben Mannheim.",
    nearbySlugs: ["mannheim", "karlsruhe", "darmstadt", "frankfurt-am-main"],
    backlinkFrom: ["bruchsal"],
    aboveTargetBand: true,
  },
];

export const PHASE_4_SLUGS = PHASE_4_CITIES.map((c) => c.slug);

export function getPhase4NearbySlugs(slug: string): string[] {
  const entry = PHASE_4_CITIES.find((c) => c.slug === slug);
  return entry?.nearbySlugs ?? [];
}

export function validatePhase4Plan(
  liveSlugs: string[],
  existingNearbyBySlug: Record<string, string[] | undefined> = {},
): { ok: boolean; errors: string[]; warnings: string[] } {
  const allowed = new Set([...liveSlugs, ...PHASE_4_SLUGS]);
  const errors: string[] = [];
  const warnings: string[] = [];

  for (const entry of PHASE_4_CITIES) {
    for (const ref of entry.nearbySlugs) {
      if (!allowed.has(ref)) {
        errors.push(`${entry.slug}: nearbySlugs enthält unbekannten Slug "${ref}"`);
      }
      if (ref === entry.slug) {
        errors.push(`${entry.slug}: nearbySlugs enthält eigenen Slug`);
      }
    }
    if (entry.nearbySlugs.length > 4) {
      warnings.push(`${entry.slug}: mehr als 4 nearbySlugs`);
    }
  }

  const backlinksNeeded = new Map<string, Set<string>>();
  for (const entry of PHASE_4_CITIES) {
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
          `Backlink fehlt: ${slug}.nearbySlugs sollte "${target}" enthalten`,
        );
      }
    }
  }

  return { ok: errors.length === 0, errors, warnings };
}
