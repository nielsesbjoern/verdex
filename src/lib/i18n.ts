/**
 * Verdex translation dictionaries.
 *
 * The `Dict` type is the single source of truth — both `en` and `de` must
 * implement it exactly, so TypeScript catches any missing/extra keys.
 */

export type Lang = "en" | "de";

export const SUPPORTED_LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
];

type Feature = { title: string; description: string };
type Pillar = { title: string; body: string };

/** Stable IDs used across translations and audit logic. */
export type PracticeAreaId = "arbeit" | "familie" | "erb" | "wirtschaft";
export type CaseVolumeId = "s" | "m" | "l" | "xl";
export type BottleneckId = "intake" | "research" | "update";
export type TimePerCaseId = "s" | "m" | "l" | "xl";

type AreaOption = { id: PracticeAreaId; label: string };
type CaseVolumeOption = { id: CaseVolumeId; label: string; value: number };
type BottleneckOption = {
  id: BottleneckId;
  label: string;
  sub: string;
  factor: number;
};
type TimeOption = { id: TimePerCaseId; label: string; value: number };
type SimCase = {
  title: string;
  fileNumber: string;
  tasks: Record<BottleneckId, { intro: string; findings: string[] }>;
};

/**
 * A legal page section. `content` is rendered in order:
 *   - `string`  → `<p>`
 *   - `string[]` → `<ul>` with one `<li>` per item
 */
type LegalSection = {
  heading: string;
  content: (string | string[])[];
};

export type Dict = {
  nav: {
    solutions: string;
    amicus: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleItalic: string;
    titleLine2Rest: string;
    titleLine3: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  solutions: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    intro: string;
    tabWebsites: string;
    tabAmicus: string;
    /** Card view (two side-by-side fields). */
    cards: {
      eyebrowWebsites: string;
      eyebrowAmicus: string;
      websitesShort: string;
      amicusShort: string;
      learnMore: string;
    };
    /** Deep-dive modal shared strings. */
    deepDive: {
      closeLabel: string;
      primaryCta: string;
      runAuditCta: string;
      backToOverview: string;
    };
    websites: {
      title: string;
      body: string;
      features: Feature[];
    };
    amicus: {
      title: string;
      body: string;
      noteTitle: string;
      noteBody: string;
      features: Feature[];
    };
  };
  why: {
    eyebrow: string;
    titleA: string;
    titleItalic: string;
    titleB: string;
    intro: string;
    pillars: Pillar[];
  };
  contact: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    body: string;
    email: string;
    form: {
      name: string;
      email: string;
      firm: string;
      phone: string;
      message: string;
      optional: string;
      consentBefore: string;
      consentLink: string;
      consentAfter: string;
      submit: string;
      subjectPrefix: string;
      successTitle: string;
      successBody: string;
    };
  };
  footer: {
    tagline: string;
    columns: {
      product: string;
      company: string;
      legal: string;
    };
    links: {
      websites: string;
      amicus: string;
      why: string;
      about: string;
      contact: string;
      careers: string;
      imprint: string;
      privacy: string;
    };
    copyright: string;
    madeWith: string;
    b2bDisclaimer: string;
  };
  audit: {
    triggerLabel: string;
    badge: string;
    stepLabel: string;
    stepOf: string;
    back: string;
    next: string;
    finish: string;
    restart: string;
    closeLabel: string;
    summarySelected: string;
    steps: {
      practiceArea: {
        title: string;
        sub: string;
        options: AreaOption[];
      };
      caseVolume: {
        title: string;
        sub: string;
        options: CaseVolumeOption[];
      };
      bottleneck: {
        title: string;
        sub: string;
        options: BottleneckOption[];
      };
      timePerCase: {
        title: string;
        sub: string;
        options: TimeOption[];
      };
      hourlyRate: {
        title: string;
        sub: string;
        unit: string;
        min: number;
        max: number;
        defaultValue: number;
        step: number;
      };
    };
    results: {
      eyebrow: string;
      title: string;
      titleItalic: string;
      hoursLabel: string;
      hoursUnit: string;
      moneyLabel: string;
      moneyUnit: string;
      perMonth: string;
      simulationTitle: string;
      simulationCaption: string;
      cta: string;
      disclaimer: string;
    };
    simulation: {
      cases: Record<PracticeAreaId, SimCase>;
    };
  };
  legal: {
    backToHome: string;
    lastUpdated: string;
    imprint: {
      eyebrow: string;
      title: string;
      sections: LegalSection[];
    };
    privacy: {
      eyebrow: string;
      title: string;
      intro: string;
      sections: LegalSection[];
    };
  };
  a11y: {
    langSwitch: string;
  };
};

const en: Dict = {
  nav: {
    solutions: "Solutions",
    amicus: "Amicus AI",
    about: "About",
    contact: "Contact",
    cta: "Get in touch",
  },
  hero: {
    eyebrow: "GDPR-compliant · Built in Germany",
    titleLine1: "Modern websites",
    titleItalic: "&",
    titleLine2Rest: "private AI",
    titleLine3: "for law firms.",
    subtitle:
      "Verdex builds the digital backbone of forward-thinking law firms — from elegant client-facing websites to a private AI assistant that never sends a single byte off-premise.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "Our services",
  },
  solutions: {
    eyebrow: "Solutions",
    titleA: "Two products.",
    titleB: "One firm-grade standard.",
    intro:
      "Whether you need a public-facing site that earns trust before the first call, or an AI assistant that stays inside your office — Verdex delivers both.",
    tabWebsites: "Website Solutions",
    tabAmicus: "Amicus AI",
    cards: {
      eyebrowWebsites: "Website",
      eyebrowAmicus: "Private AI",
      websitesShort:
        "Editorial websites that win the first impression — fast, branded, easy to maintain.",
      amicusShort:
        "An on-premise legal AI that never sends a single client document where it shouldn't go.",
      learnMore: "Explore the solution",
    },
    deepDive: {
      closeLabel: "Close",
      primaryCta: "Get in touch",
      runAuditCta: "Run the ROI audit",
      backToOverview: "Back to solutions",
    },
    websites: {
      title: "Websites that win the first impression.",
      body: "A law firm's website is no longer a brochure — it's the first hearing. We design and engineer sites that feel as careful and considered as the legal work behind them.",
      features: [
        {
          title: "Modern Design",
          description:
            "Bespoke, brand-aligned websites built around your firm's voice — no template look, no generic stock imagery.",
        },
        {
          title: "SEO & Performance",
          description:
            "Engineered for sub-second loads and top rankings on the queries your future clients actually search.",
        },
        {
          title: "Easy to Maintain",
          description:
            "A clean CMS layer so your team can update partners, posts and case studies without needing a developer.",
        },
      ],
    },
    amicus: {
      title: "A private AI partner for your practice.",
      body: "Amicus runs on your hardware, in your office. It accelerates the work only an experienced lawyer can do — without ever sending a client document to a third-party server.",
      noteTitle:
        "Everything runs locally. No client data leaves the office — ever.",
      noteBody:
        "Fully compliant with BRAO §43a, GDPR and your firm's confidentiality obligations.",
      features: [
        {
          title: "Case Law Search",
          description:
            "Natural-language search across BGH, BAG and local court rulings — with citations and direct paragraph linking.",
        },
        {
          title: "Opponent Simulator",
          description:
            "Stress-test your arguments against a simulated opposing counsel before you walk into the courtroom.",
        },
        {
          title: "Anonymizer",
          description:
            "One-click redaction of names, addresses, file numbers and signatures across PDFs and documents.",
        },
        {
          title: "Deadline Calculator",
          description:
            "ZPO- and StPO-aware deadline computation, including holidays per Bundesland — never miss a Frist again.",
        },
      ],
    },
  },
  why: {
    eyebrow: "Why Verdex",
    titleA: "Software with a",
    titleItalic: "lawyer's",
    titleB: "standard of care.",
    intro:
      "We chose the legal sector deliberately. It demands the discipline, confidentiality and craftsmanship we care about — and that's exactly what we ship.",
    pillars: [
      {
        title: "Built for German law firms",
        body: "We understand BRAO, FAO advertising rules and the specific workflows of small-to-mid-sized German Kanzleien. No generic SaaS — software shaped by the profession.",
      },
      {
        title: "Privacy-first",
        body: "Everything we ship is engineered around attorney-client privilege. Amicus runs on-premise, our websites are hosted in EU data centers, and nothing trains on your data.",
      },
      {
        title: "Custom-tailored",
        body: "Every engagement starts with a workshop, not a checklist. We adapt to your areas of practice, your tone, and the way your firm actually works.",
      },
    ],
  },
  contact: {
    eyebrow: "Get in touch",
    titleA: "Bring Verdex",
    titleB: "to your firm.",
    body: "A strategic conversation on equal footing. We evaluate your specific needs to determine whether a partnership will deliver maximum value to your firm. Tailored approaches instead of generic pitch decks. Entirely without obligation.",
    email: "nielsesbjornschade@gmail.com",
    form: {
      name: "Name",
      email: "E-mail",
      firm: "Firm",
      phone: "Phone",
      message: "Message",
      optional: "optional",
      consentBefore: "I have read the ",
      consentLink: "privacy policy",
      consentAfter:
        " and consent to my data being processed for the purpose of responding to this enquiry.",
      submit: "Send message",
      subjectPrefix: "Enquiry from",
      successTitle: "Thank you — message ready to send.",
      successBody:
        "Your default mail client should have opened with the message prefilled. If it didn't, please send your enquiry directly to nielsesbjornschade@gmail.com.",
    },
  },
  footer: {
    tagline:
      "Modern websites and a private AI partner for law firms that care about craft and confidentiality.",
    columns: {
      product: "Product",
      company: "Company",
      legal: "Legal",
    },
    links: {
      websites: "Website Solutions",
      amicus: "Amicus AI",
      why: "Why Verdex",
      about: "About",
      contact: "Contact",
      careers: "Careers",
      imprint: "Imprint",
      privacy: "Privacy",
    },
    copyright: "All rights reserved.",
    madeWith: "Made with care for the legal profession.",
    b2bDisclaimer:
      "Our services are intended exclusively for commercial clients, entrepreneurs and freelancers (B2B).",
  },
  audit: {
    triggerLabel: "Amicus AI",
    badge: "Law-firm audit & ROI calculator",
    stepLabel: "Step",
    stepOf: "of",
    back: "Back",
    next: "Continue",
    finish: "Show results",
    restart: "Restart audit",
    closeLabel: "Close audit",
    summarySelected: "Selected",
    steps: {
      practiceArea: {
        title: "Which practice area drives your core workload?",
        sub: "Select your primary area. We'll tailor the simulation accordingly.",
        options: [
          { id: "arbeit", label: "Labour law" },
          { id: "familie", label: "Family law" },
          { id: "erb", label: "Inheritance law" },
          { id: "wirtschaft", label: "Commercial law" },
        ],
      },
      caseVolume: {
        title: "How many active matters do you handle per month?",
        sub: "Pick the closest range.",
        options: [
          { id: "s", label: "< 15", value: 10 },
          { id: "m", label: "15 - 40", value: 27 },
          { id: "l", label: "40 - 80", value: 60 },
          { id: "xl", label: "80+", value: 100 },
        ],
      },
      bottleneck: {
        title: "Where is your biggest bottleneck today?",
        sub: "This factor influences potential time relief.",
        options: [
          { id: "intake", label: "Intake & qualification", sub: "Factor 0.5", factor: 0.5 },
          { id: "research", label: "Research & analysis", sub: "Factor 0.4", factor: 0.4 },
          { id: "update", label: "Client updates", sub: "Factor 0.6", factor: 0.6 },
        ],
      },
      timePerCase: {
        title: "How much time does this bottleneck consume per matter?",
        sub: "Average monthly effort per matter.",
        options: [
          { id: "s", label: "1-3 hrs", value: 2 },
          { id: "m", label: "4-6 hrs", value: 5 },
          { id: "l", label: "7-10 hrs", value: 8.5 },
          { id: "xl", label: "10+ hrs", value: 12 },
        ],
      },
      hourlyRate: {
        title: "What is your effective hourly rate?",
        sub: "Slide to your current blended rate.",
        unit: "€ / hour",
        min: 150,
        max: 450,
        defaultValue: 250,
        step: 10,
      },
    },
    results: {
      eyebrow: "Result",
      title: "Projected monthly",
      titleItalic: "efficiency gain",
      hoursLabel: "Time saved",
      hoursUnit: "hours",
      moneyLabel: "Financial relief",
      moneyUnit: "€",
      perMonth: "per month",
      simulationTitle: "Live workflow simulation",
      simulationCaption: "Stylised preview based on your selected practice area and bottleneck.",
      cta: "Diesen Workflow live testen (Erstgespräch)",
      disclaimer: "This estimate is indicative and based on the selected assumptions.",
    },
    simulation: {
      cases: {
        arbeit: {
          title: "Dismissal protection matter",
          fileNumber: "AMI-LAB-2026-041",
          tasks: {
            intake: { intro: "Amicus structures intake and scores case viability.", findings: ["Employment relationship exceeds six months (§1 KSchG relevance)", "Termination letter timing suggests hearing-gap risk", "Priority checklist generated for first client call"] },
            research: { intro: "Amicus reviews dismissal grounds and evidentiary consistency.", findings: ["Potential inconsistency in documented warning chronology", "Missing proportionality analysis for behavioural termination", "Draft argument map prepared for statement of claim"] },
            update: { intro: "Amicus prepares plain-language client update drafts.", findings: ["Weekly update summary generated in 90 seconds", "Next procedural milestone and expected timelines highlighted", "Questions-to-counsel list attached to reduce back-and-forth"] },
          },
        },
        familie: {
          title: "Post-separation support matter",
          fileNumber: "AMI-FAM-2026-018",
          tasks: {
            intake: { intro: "Amicus organises intake facts into a structured timeline.", findings: ["Income and expense categories pre-mapped for quick review", "Potential disclosure gaps flagged before first hearing", "Document request checklist generated for both parties"] },
            research: { intro: "Amicus aligns fact patterns with current support principles.", findings: ["Preliminary support corridor calculated from available figures", "Parenting-time deviations highlighted for legal relevance", "Argument matrix prepared for negotiation strategy"] },
            update: { intro: "Amicus keeps clients informed with low-friction updates.", findings: ["Case-status digest auto-generated after each filing", "Open decisions listed with plain-language explanations", "Timeline shifts surfaced proactively before client follow-up"] },
          },
        },
        erb: {
          title: "Compulsory portion dispute",
          fileNumber: "AMI-ERB-2026-027",
          tasks: {
            intake: { intro: "Amicus consolidates estate facts and claimant positions.", findings: ["Family constellation visualised with inheritance relevance", "Potential document deficits flagged at intake stage", "Priority evidence plan generated for initial filing"] },
            research: { intro: "Amicus analyses claim basis and valuation dependencies.", findings: ["Preliminary compulsory-portion logic structured per asset class", "Valuation assumptions marked with confidence indicators", "Counter-argument draft assembled for anticipated objections"] },
            update: { intro: "Amicus translates procedural complexity for clients.", findings: ["Estate-inventory progress summarized in client language", "Risk and upside scenarios updated after each submission", "Next action memo drafted for internal team alignment"] },
          },
        },
        wirtschaft: {
          title: "Commercial contract risk review",
          fileNumber: "AMI-COM-2026-033",
          tasks: {
            intake: { intro: "Amicus captures contract context and negotiation priorities.", findings: ["Clause inventory structured by operational impact", "High-exposure sections prioritised for counsel review", "Stakeholder question list generated for kick-off"] },
            research: { intro: "Amicus scans obligations, liabilities, and drafting gaps.", findings: ["Liability-cap language flagged as asymmetrically burdensome", "Termination trigger wording marked for ambiguity risk", "Fallback clause suggestions drafted for negotiation"] },
            update: { intro: "Amicus keeps business-side stakeholders continuously aligned.", findings: ["Executive summary prepared in one-page format", "Pending redline decisions grouped by urgency", "Next-round negotiation brief generated automatically"] },
          },
        },
      },
    },
  },
  legal: {
    backToHome: "Back to home",
    lastUpdated: "Last updated",
    imprint: {
      eyebrow: "Legal notice",
      title: "Imprint",
      sections: [
        {
          heading: "Provider",
          content: [
            "Information pursuant to § 5 of the German Digital Services Act (DDG):",
            "Niels Schade\nHinter dem Rathaus 7\n23966 Wismar\nGermany",
          ],
        },
        {
          heading: "Contact",
          content: [
            "E-mail: nielsesbjornschade@gmail.com\nPhone: +49 151 10393128",
          ],
        },
        {
          heading: "VAT identification number",
          content: [
            "A VAT identification number pursuant to § 27a of the German Value Added Tax Act has not yet been issued.",
          ],
        },
        {
          heading: "Responsible for editorial content",
          content: [
            "Pursuant to § 18 (2) of the German Media State Treaty (MStV):",
            "Niels Schade, Hinter dem Rathaus 7, 23966 Wismar",
          ],
        },
        {
          heading: "Online dispute resolution",
          content: [
            "The European Commission provides a platform for online dispute resolution (ODR) available at https://ec.europa.eu/consumers/odr/. As our services are directed exclusively at commercial clients, we are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board.",
          ],
        },
        {
          heading: "Liability for content",
          content: [
            "As a service provider, we are responsible for our own content on these pages in accordance with § 7 (1) DDG under general laws. According to §§ 8 to 10 DDG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
            "Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this respect is only possible from the point in time at which a concrete infringement of the law becomes known. Upon notification of such violations, we will remove the content immediately.",
          ],
        },
        {
          heading: "Liability for links",
          content: [
            "Our website contains links to external third-party websites over whose content we have no influence. We therefore cannot assume any liability for this external content. The respective provider or operator of the linked pages is always responsible for the content of those pages.",
          ],
        },
        {
          heading: "Copyright",
          content: [
            "The content and works on these pages created by the site operator are subject to German copyright law. Duplication, processing, distribution, or any form of commercialisation of such material beyond the scope of the copyright law requires the prior written consent of its respective author or creator.",
          ],
        },
      ],
    },
    privacy: {
      eyebrow: "Privacy",
      title: "Privacy policy",
      intro:
        "Thank you for your interest in Verdex. Protecting your personal data is a serious concern to us. Below we inform you in detail about how your data is handled.",
      sections: [
        {
          heading: "1. Controller",
          content: [
            "The controller for data processing on this website within the meaning of the General Data Protection Regulation (GDPR) is:",
            "Niels Schade\nHinter dem Rathaus 7\n23966 Wismar\nGermany\nnielsesbjornschade@gmail.com",
          ],
        },
        {
          heading: "2. Server log files",
          content: [
            "When you visit our website, our hosting provider automatically collects information that your browser transmits in so-called server log files. These typically include:",
            [
              "IP address of the requesting computer",
              "Date and time of the request",
              "Time zone difference from GMT",
              "Content of the request (specific page)",
              "Access status / HTTP status code",
              "Volume of data transferred in each case",
              "Website from which the request comes",
              "Browser, language settings, and operating system",
            ],
            "This data is processed to safeguard legitimate interests (Art. 6 (1) (f) GDPR), namely ensuring the secure operation of our website, and is deleted after a short period. It is not merged with other data sources.",
          ],
        },
        {
          heading: "3. Hosting",
          content: [
            // TODO: replace with real hosting provider details
            "Our website is hosted by [Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA]. When the website is accessed, connection data is transmitted to the host. A data processing agreement (DPA) pursuant to Art. 28 GDPR is in place with the host.",
          ],
        },
        {
          heading: "4. Contact by e-mail",
          content: [
            "If you contact us by e-mail, the data you provide (e-mail address, name, message) will be stored for the purpose of processing your enquiry. The legal basis is Art. 6 (1) (b) GDPR (pre-contractual measures) and/or (f) (legitimate interest in answering your enquiry). We do not pass this data on to third parties without your consent.",
          ],
        },
        {
          heading: "5. Language preference (localStorage)",
          content: [
            "This website allows you to choose the display language (German or English). Your language preference is stored exclusively locally in your browser via so-called localStorage, so that the site greets you in your preferred language on return visits. This information is not transmitted to our servers and serves solely for user convenience. No consent is required as this is a technically necessary function (§ 25 (2) no. 2 TDDDG). You can delete this information at any time via your browser settings.",
          ],
        },
        {
          heading: "6. Fonts",
          content: [
            "This website uses the typefaces Geist and Playfair Display. All font files are served exclusively from our own servers. No connection is established to Google servers or other third parties.",
          ],
        },
        {
          heading: "7. SSL / TLS encryption",
          content: [
            "For security reasons and to protect the transmission of confidential content, this site uses SSL or TLS encryption. You can recognise an encrypted connection by the \"https://\" in your browser's address bar.",
          ],
        },
        {
          heading: "8. Your rights",
          content: [
            "You have the right, at any time, to:",
            [
              "Access (Art. 15 GDPR) to the data stored about you",
              "Rectification (Art. 16 GDPR) of inaccurate data",
              "Erasure (Art. 17 GDPR) of your data",
              "Restriction of processing (Art. 18 GDPR)",
              "Data portability (Art. 20 GDPR)",
              "Object to processing (Art. 21 GDPR)",
              "Lodge a complaint with a supervisory authority (Art. 77 GDPR)",
            ],
            "For questions or to exercise your rights, please contact us at: nielsesbjornschade@gmail.com",
          ],
        },
        {
          heading: "9. Updates to this policy",
          content: [
            "We reserve the right to adapt this privacy policy so that it always meets current legal requirements. The latest version applies whenever you visit our website.",
          ],
        },
      ],
    },
  },
  a11y: {
    langSwitch: "Switch language",
  },
};

const de: Dict = {
  nav: {
    solutions: "Lösungen",
    amicus: "Amicus AI",
    about: "Über uns",
    contact: "Kontakt",
    cta: "Kontakt aufnehmen",
  },
  hero: {
    eyebrow: "DSGVO-konform · Made in Germany",
    titleLine1: "Moderne Websites",
    titleItalic: "&",
    titleLine2Rest: "private KI",
    titleLine3: "für Kanzleien.",
    subtitle:
      "Verdex baut das digitale Rückgrat zukunftsorientierter Kanzleien — von eleganten Mandantenauftritten bis zu einem privaten KI-Assistenten, der nicht ein einziges Byte aus der Kanzlei lässt.",
    ctaPrimary: "Kontakt aufnehmen",
    ctaSecondary: "Unsere Leistungen",
  },
  solutions: {
    eyebrow: "Lösungen",
    titleA: "Zwei Produkte.",
    titleB: "Ein Kanzlei-Standard.",
    intro:
      "Ob Sie eine repräsentative Website brauchen, die schon vor dem ersten Anruf Vertrauen schafft, oder einen KI-Assistenten, der innerhalb Ihrer Kanzlei bleibt — Verdex liefert beides.",
    tabWebsites: "Website-Lösungen",
    tabAmicus: "Amicus AI",
    cards: {
      eyebrowWebsites: "Website",
      eyebrowAmicus: "Private KI",
      websitesShort:
        "Redaktionelle Websites, die schon beim ersten Eindruck überzeugen — schnell, markengerecht, leicht zu pflegen.",
      amicusShort:
        "Eine On-Premise-KI für Kanzleien, die kein einziges Mandanten-Dokument an Server sendet, wo es nicht hingehört.",
      learnMore: "Lösung im Detail",
    },
    deepDive: {
      closeLabel: "Schließen",
      primaryCta: "Kontakt aufnehmen",
      runAuditCta: "ROI-Audit starten",
      backToOverview: "Zurück zu den Lösungen",
    },
    websites: {
      title: "Websites, die den ersten Eindruck gewinnen.",
      body: "Die Website einer Kanzlei ist längst keine Broschüre mehr — sie ist die erste Verhandlung. Wir gestalten und entwickeln Auftritte, die so sorgfältig wirken wie die juristische Arbeit dahinter.",
      features: [
        {
          title: "Modernes Design",
          description:
            "Maßgeschneiderte, markengerechte Websites rund um die Stimme Ihrer Kanzlei — kein Template-Look, keine generischen Stock-Bilder.",
        },
        {
          title: "SEO & Performance",
          description:
            "Engineered für Ladezeiten unter einer Sekunde und Top-Rankings bei genau den Suchanfragen, die Ihre künftigen Mandanten stellen.",
        },
        {
          title: "Einfach zu pflegen",
          description:
            "Ein schlankes CMS, mit dem Ihr Team Partner, Beiträge und Mandatsthemen aktualisiert — ohne einen Entwickler zu brauchen.",
        },
      ],
    },
    amicus: {
      title: "Ein privater KI-Partner für Ihre Kanzlei.",
      body: "Amicus läuft auf Ihrer Hardware, in Ihrer Kanzlei. Sie beschleunigt die Arbeit, die nur ein erfahrener Anwalt leisten kann — ohne je ein Mandantendokument an einen Drittserver zu senden.",
      noteTitle:
        "Alles läuft lokal. Keine Mandantendaten verlassen die Kanzlei — niemals.",
      noteBody:
        "Vollständig vereinbar mit BRAO §43a, DSGVO und Ihren Verschwiegenheitspflichten.",
      features: [
        {
          title: "Rechtsprechungs-Suche",
          description:
            "Natürlichsprachliche Suche über BGH, BAG und Landesgerichte — mit Fundstellen und direkter Randnummern-Verlinkung.",
        },
        {
          title: "Gegner-Simulator",
          description:
            "Testen Sie Ihre Argumentation gegen eine simulierte Gegenseite, bevor Sie den Sitzungssaal betreten.",
        },
        {
          title: "Anonymisierung",
          description:
            "Schwärzung von Namen, Adressen, Aktenzeichen und Unterschriften in PDFs und Dokumenten — mit einem Klick.",
        },
        {
          title: "Fristen-Rechner",
          description:
            "ZPO- und StPO-konforme Fristberechnung inklusive Feiertage pro Bundesland — keine Frist mehr verpassen.",
        },
      ],
    },
  },
  why: {
    eyebrow: "Warum Verdex",
    titleA: "Software mit dem Anspruch",
    titleItalic: "eines Juristen.",
    titleB: "",
    intro:
      "Wir haben den juristischen Sektor bewusst gewählt. Er verlangt die Disziplin, die Verschwiegenheit und das Handwerk, an dem uns liegt — und genau das liefern wir.",
    pillars: [
      {
        title: "Gebaut für deutsche Kanzleien",
        body: "Wir kennen BRAO, FAO-Werberichtlinien und die spezifischen Abläufe kleiner und mittelgroßer Kanzleien. Kein generisches SaaS — Software, geformt durch den Berufsstand.",
      },
      {
        title: "Datenschutz zuerst",
        body: "Alles, was wir liefern, ist um das anwaltliche Berufsgeheimnis herum entwickelt. Amicus läuft On-Premise, unsere Websites werden in EU-Rechenzentren gehostet — und nichts trainiert auf Ihren Daten.",
      },
      {
        title: "Maßgeschneidert",
        body: "Jede Zusammenarbeit beginnt mit einem Workshop, nicht mit einer Checkliste. Wir passen uns Ihren Rechtsgebieten, Ihrem Ton und Ihrer Arbeitsweise an.",
      },
    ],
  },
  contact: {
    eyebrow: "Lassen Sie uns sprechen",
    titleA: "Bringen Sie Verdex",
    titleB: "in Ihre Kanzlei.",
    body: "Strategischer Austausch auf Augenhöhe. Wir evaluieren Ihren konkreten Bedarf, um festzustellen, ob eine Zusammenarbeit den maximalen Mehrwert für Ihre Kanzlei stiftet. Maßgeschneiderte Ansätze statt generischer Pitch-Decks. Vollkommen unverbindlich.",
    email: "nielsesbjornschade@gmail.com",
    form: {
      name: "Name",
      email: "E-Mail",
      firm: "Kanzlei",
      phone: "Telefon",
      message: "Nachricht",
      optional: "optional",
      consentBefore: "Ich habe die ",
      consentLink: "Datenschutzerklärung",
      consentAfter:
        " zur Kenntnis genommen und willige in die Verarbeitung meiner Daten zur Beantwortung dieser Anfrage ein.",
      submit: "Nachricht senden",
      subjectPrefix: "Anfrage von",
      successTitle: "Vielen Dank — Ihre Nachricht ist bereit.",
      successBody:
        "Ihr Standard-Mailprogramm sollte sich mit der vorausgefüllten Nachricht geöffnet haben. Falls nicht, senden Sie Ihre Anfrage bitte direkt an nielsesbjornschade@gmail.com.",
    },
  },
  footer: {
    tagline:
      "Moderne Websites und ein privater KI-Partner für Kanzleien, denen Handwerk und Verschwiegenheit am Herzen liegen.",
    columns: {
      product: "Produkt",
      company: "Unternehmen",
      legal: "Rechtliches",
    },
    links: {
      websites: "Website-Lösungen",
      amicus: "Amicus AI",
      why: "Warum Verdex",
      about: "Über uns",
      contact: "Kontakt",
      careers: "Karriere",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
    copyright: "Alle Rechte vorbehalten.",
    madeWith: "Mit Sorgfalt für die juristische Berufswelt gebaut.",
    b2bDisclaimer:
      "Unser Angebot richtet sich ausschließlich an gewerbliche Kunden, Unternehmer und Freiberufler (B2B).",
  },
  audit: {
    triggerLabel: "Amicus AI",
    badge: "Kanzlei-Audit & ROI-Rechner",
    stepLabel: "Schritt",
    stepOf: "von",
    back: "Zurück",
    next: "Weiter",
    finish: "Ergebnis anzeigen",
    restart: "Audit neu starten",
    closeLabel: "Audit schließen",
    summarySelected: "Ausgewählt",
    steps: {
      practiceArea: {
        title: "Welches Fachgebiet prägt Ihre tägliche Auslastung?",
        sub: "Wählen Sie Ihren Schwerpunkt. Die Simulation wird darauf angepasst.",
        options: [
          { id: "arbeit", label: "Arbeitsrecht" },
          { id: "familie", label: "Familienrecht" },
          { id: "erb", label: "Erbrecht" },
          { id: "wirtschaft", label: "Wirtschaftsrecht" },
        ],
      },
      caseVolume: {
        title: "Wie viele laufende Mandate bearbeiten Sie pro Monat?",
        sub: "Wählen Sie den passendsten Bereich.",
        options: [
          { id: "s", label: "< 15", value: 10 },
          { id: "m", label: "15 - 40", value: 27 },
          { id: "l", label: "40 - 80", value: 60 },
          { id: "xl", label: "80+", value: 100 },
        ],
      },
      bottleneck: {
        title: "Wo liegt aktuell Ihr größter Engpass?",
        sub: "Dieser Faktor beeinflusst das Entlastungspotenzial.",
        options: [
          { id: "intake", label: "Intake & Qualifizierung", sub: "Faktor 0.5", factor: 0.5 },
          { id: "research", label: "Recherche & Analyse", sub: "Faktor 0.4", factor: 0.4 },
          { id: "update", label: "Mandanten-Update", sub: "Faktor 0.6", factor: 0.6 },
        ],
      },
      timePerCase: {
        title: "Wie viel Zeit bindet dieser Engpass pro Fall?",
        sub: "Durchschnittlicher monatlicher Aufwand pro Mandat.",
        options: [
          { id: "s", label: "1-3 Std.", value: 2 },
          { id: "m", label: "4-6 Std.", value: 5 },
          { id: "l", label: "7-10 Std.", value: 8.5 },
          { id: "xl", label: "10+ Std.", value: 12 },
        ],
      },
      hourlyRate: {
        title: "Wie hoch ist Ihr effektiver Stundensatz?",
        sub: "Stellen Sie Ihren aktuellen Mischsatz ein.",
        unit: "€ / Stunde",
        min: 150,
        max: 450,
        defaultValue: 250,
        step: 10,
      },
    },
    results: {
      eyebrow: "Ergebnis",
      title: "Prognostizierte monatliche",
      titleItalic: "Effizienzsteigerung",
      hoursLabel: "Zeitersparnis",
      hoursUnit: "Stunden",
      moneyLabel: "Finanzielle Entlastung",
      moneyUnit: "€",
      perMonth: "pro Monat",
      simulationTitle: "Live-Workflow-Simulation",
      simulationCaption: "Stilisierte Vorschau basierend auf Fachgebiet und Bottleneck.",
      cta: "Diesen Workflow live testen (Erstgespräch)",
      disclaimer: "Die Berechnung ist eine indikative Schätzung auf Basis Ihrer Angaben.",
    },
    simulation: {
      cases: {
        arbeit: {
          title: "Kündigungsschutzsache",
          fileNumber: "AMI-ARB-2026-041",
          tasks: {
            intake: { intro: "Amicus strukturiert den Intake und bewertet die Falltragfähigkeit.", findings: ["Arbeitsverhältnis besteht länger als sechs Monate (§1 KSchG-Relevanz)", "Zeitpunkt des Kündigungsschreibens deutet auf Anhörungslücke hin", "Prioritäten-Checkliste für Erstgespräch wurde erstellt"] },
            research: { intro: "Amicus analysiert Kündigungsgründe und Beweiskonsistenz.", findings: ["Mögliche Inkonsistenz in der dokumentierten Abmahn-Chronologie", "Verhältnismäßigkeitsprüfung bei verhaltensbedingter Kündigung unvollständig", "Argumentationslandkarte für die Klageschrift vorbereitet"] },
            update: { intro: "Amicus erstellt verständliche Mandanten-Updates.", findings: ["Wöchentliche Statuszusammenfassung in 90 Sekunden erstellt", "Nächster Verfahrensmeilenstein mit Zeithorizont markiert", "Fragenliste zur Kanzleiabstimmung reduziert Rückfragen"] },
          },
        },
        familie: {
          title: "Unterhalt nach Trennung",
          fileNumber: "AMI-FAM-2026-018",
          tasks: {
            intake: { intro: "Amicus ordnet Intake-Daten in eine klare Zeitachse ein.", findings: ["Einkommens- und Ausgabepositionen vorstrukturiert", "Mögliche Auskunftslücken vor dem ersten Termin markiert", "Dokumenten-Checkliste für beide Seiten erstellt"] },
            research: { intro: "Amicus gleicht Sachverhalt mit aktueller Unterhaltslogik ab.", findings: ["Vorläufiger Unterhaltskorridor aus vorhandenen Zahlen berechnet", "Abweichungen bei Betreuungszeiten rechtlich hervorgehoben", "Argumentationsmatrix für Vergleichsstrategie vorbereitet"] },
            update: { intro: "Amicus hält Mandanten mit wenig Aufwand auf dem Laufenden.", findings: ["Status-Digest nach jeder Einreichung automatisch erstellt", "Offene Entscheidungen in klarer Sprache dargestellt", "Zeitplanänderungen proaktiv vor Rückfragen kommuniziert"] },
          },
        },
        erb: {
          title: "Pflichtteilsstreitigkeit",
          fileNumber: "AMI-ERB-2026-027",
          tasks: {
            intake: { intro: "Amicus konsolidiert Nachlassfakten und Anspruchspositionen.", findings: ["Familienkonstellation mit erb-rechtlicher Relevanz visualisiert", "Mögliche Dokumentenlücken bereits im Intake markiert", "Priorisierter Nachweisplan für den Erstvortrag erstellt"] },
            research: { intro: "Amicus analysiert Anspruchsgrundlage und Bewertungsabhängigkeiten.", findings: ["Pflichtteilslogik nach Vermögensklassen vorstrukturiert", "Bewertungsannahmen mit Sicherheitshinweisen markiert", "Gegenargumente für erwartbare Einwände vorbereitet"] },
            update: { intro: "Amicus übersetzt Verfahrenskomplexität in Mandantensprache.", findings: ["Fortschritt beim Nachlassverzeichnis verständlich zusammengefasst", "Risiko- und Chancenszenarien je Eingabe aktualisiert", "Nächster-Aktionsvermerk für Teamabstimmung erstellt"] },
          },
        },
        wirtschaft: {
          title: "Vertragsrisiko-Review",
          fileNumber: "AMI-WIR-2026-033",
          tasks: {
            intake: { intro: "Amicus erfasst Vertragskontext und Verhandlungsprioritäten.", findings: ["Klauselinventar nach operativer Tragweite strukturiert", "Risikostellen für anwaltliche Prüfung priorisiert", "Stakeholder-Fragenkatalog für Kick-off generiert"] },
            research: { intro: "Amicus prüft Pflichten, Haftung und Formulierungslücken.", findings: ["Haftungsbegrenzung als einseitig belastend markiert", "Kündigungstatbestände wegen Auslegungsspielraum hervorgehoben", "Fallback-Klauseln für Verhandlungsrunde vorbereitet"] },
            update: { intro: "Amicus hält Business-Stakeholder kontinuierlich synchron.", findings: ["Management-Zusammenfassung im One-Pager-Format erzeugt", "Offene Redline-Entscheidungen nach Dringlichkeit gebündelt", "Briefing für die nächste Verhandlungsrunde automatisch erstellt"] },
          },
        },
      },
    },
  },
  legal: {
    backToHome: "Zur Startseite",
    lastUpdated: "Stand",
    imprint: {
      eyebrow: "Anbieterkennzeichnung",
      title: "Impressum",
      sections: [
        {
          heading: "Anbieter",
          content: [
            "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG):",
            "Niels Schade\nHinter dem Rathaus 7\n23966 Wismar\nDeutschland",
          ],
        },
        {
          heading: "Kontakt",
          content: [
            "E-Mail: nielsesbjornschade@gmail.com\nTelefon: +49 151 10393128",
          ],
        },
        {
          heading: "Umsatzsteuer-Identifikationsnummer",
          content: [
            "Eine Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz wurde bislang nicht erteilt.",
          ],
        },
        {
          heading: "Redaktionell verantwortlich",
          content: [
            "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:",
            "Niels Schade, Hinter dem Rathaus 7, 23966 Wismar",
          ],
        },
        {
          heading: "Online-Streitbeilegung",
          content: [
            "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Da sich unser Angebot ausschließlich an gewerbliche Kunden richtet, sind wir weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
          ],
        },
        {
          heading: "Haftung für Inhalte",
          content: [
            "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
            "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
          ],
        },
        {
          heading: "Haftung für Links",
          content: [
            "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
          ],
        },
        {
          heading: "Urheberrecht",
          content: [
            "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
          ],
        },
      ],
    },
    privacy: {
      eyebrow: "Datenschutz",
      title: "Datenschutzerklärung",
      intro:
        "Wir freuen uns über Ihr Interesse an Verdex. Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.",
      sections: [
        {
          heading: "1. Verantwortlicher",
          content: [
            "Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:",
            "Niels Schade\nHinter dem Rathaus 7\n23966 Wismar\nDeutschland\nnielsesbjornschade@gmail.com",
          ],
        },
        {
          heading: "2. Server-Logfiles",
          content: [
            "Beim Besuch unserer Website erfasst unser Hostingprovider automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt. In der Regel sind das:",
            [
              "IP-Adresse des anfragenden Rechners",
              "Datum und Uhrzeit der Anfrage",
              "Zeitzonendifferenz zur Greenwich Mean Time (GMT)",
              "Inhalt der Anforderung (konkrete Seite)",
              "Zugriffsstatus / HTTP-Statuscode",
              "Jeweils übertragene Datenmenge",
              "Website, von der die Anforderung kommt",
              "Browser, Spracheinstellungen und Betriebssystem",
            ],
            "Diese Daten werden zur Wahrung berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) zur Sicherstellung des reibungslosen und sicheren Betriebs unserer Website verarbeitet und nach kurzer Zeit gelöscht. Eine Zusammenführung mit anderen Datenquellen erfolgt nicht.",
          ],
        },
        {
          heading: "3. Hosting",
          content: [
            // TODO: tatsächlichen Hoster eintragen
            "Unsere Website wird bei [Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA] gehostet. Beim Aufruf der Website werden Verbindungsdaten an den Hoster übertragen. Es besteht ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO mit dem Hoster.",
          ],
        },
        {
          heading: "4. Kontaktaufnahme per E-Mail",
          content: [
            "Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen mitgeteilten Daten (E-Mail-Adresse, Name, Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. lit. f (berechtigtes Interesse an der Beantwortung Ihrer Anfrage). Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
          ],
        },
        {
          heading: "5. Sprachauswahl (localStorage)",
          content: [
            "Diese Website ermöglicht die Auswahl der Anzeigesprache (Deutsch oder Englisch). Ihre Sprachpräferenz wird ausschließlich lokal in Ihrem Browser im sogenannten localStorage gespeichert, damit die Seite Sie bei wiederholten Besuchen in der gewünschten Sprache empfängt. Diese Information wird nicht an unsere Server übermittelt und dient ausschließlich dem Benutzerkomfort. Eine Einwilligung ist nicht erforderlich, da es sich um eine technisch notwendige Funktion handelt (§ 25 Abs. 2 Nr. 2 TDDDG). Sie können die Information jederzeit über die Einstellungen Ihres Browsers löschen.",
          ],
        },
        {
          heading: "6. Schriftarten",
          content: [
            "Diese Website verwendet die Schriftarten Geist und Playfair Display. Alle Schriftdateien werden ausschließlich von unseren eigenen Servern ausgeliefert. Es findet keine Verbindung zu Google-Servern oder anderen Drittanbietern statt.",
          ],
        },
        {
          heading: "7. SSL-/TLS-Verschlüsselung",
          content: [
            "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Sie erkennen eine verschlüsselte Verbindung an dem „https://“ in der Adresszeile Ihres Browsers.",
          ],
        },
        {
          heading: "8. Ihre Rechte",
          content: [
            "Sie haben jederzeit das Recht auf:",
            [
              "Auskunft (Art. 15 DSGVO) über die zu Ihrer Person gespeicherten Daten",
              "Berichtigung (Art. 16 DSGVO) unrichtiger Daten",
              "Löschung (Art. 17 DSGVO) Ihrer Daten",
              "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
              "Datenübertragbarkeit (Art. 20 DSGVO)",
              "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
              "Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)",
            ],
            "Für Fragen oder die Ausübung Ihrer Rechte wenden Sie sich bitte an: nielsesbjornschade@gmail.com",
          ],
        },
        {
          heading: "9. Aktualität dieser Erklärung",
          content: [
            "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht. Es gilt die jeweils zum Zeitpunkt Ihres Besuchs aktuelle Fassung.",
          ],
        },
      ],
    },
  },
  a11y: {
    langSwitch: "Sprache wechseln",
  },
};

export const translations: Record<Lang, Dict> = { en, de };
