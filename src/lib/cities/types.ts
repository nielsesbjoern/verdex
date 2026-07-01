export type CourtChain = {
  amtsgericht: string;
  landgericht: string;
  oberlandesgericht: string;
  besonderheiten?: string[];
};

export type CityFacts = {
  slug: string;
  name: string;
  bundesland: string;
  kreisOrBezirk: string;
  stadtTyp?: string;
  population: {
    approx: number;
    label: string;
    year: number;
    zensusStrittig?: boolean;
  };
  courts: CourtChain;
  economy: {
    sectors: string[];
    keyEmployersOrClusters?: string[];
    profile: string;
  };
  primaryLegalArea: string;
  secondaryLegalAreas: string[];
  landmarks: string[];
  mapCoords: { x: number; y: number; anchor?: "start" | "end" };
  nearbySlugs?: string[];
  rolloutPhase: 1 | 2 | 3 | 4;
  status: "live" | "draft" | "planned";
};

export type CityContent = {
  slug: string;
  heroSubtitle: string;
  introParagraphs: string[];
  courtsNarrative: string;
  economyNarrative: string;
  localCaseExample: string;
  faq: { q: string; a: string }[];
  whyVerdexParagraph: string;
};

export type CityRecord = CityFacts & { content: CityContent };

export type BundeslandPageRecord = {
  slug: string;
  name: string;
  stadtTyp: string;
  populationLabel: string;
  courts: CourtChain;
  economy: {
    sectors: string[];
    profile: string;
  };
  primaryLegalAreas: string[];
  mapHighlightSlugs: string[];
  content: {
    heroSubtitle: string;
    introParagraphs: string[];
    courtsNarrative: string;
    economyNarrative: string;
    whyVerdexParagraph: string;
    faq: { q: string; a: string }[];
  };
};
