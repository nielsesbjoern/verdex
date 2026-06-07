"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageProvider";
import { FadeIn } from "./FadeIn";
import {
  SolutionDetailModal,
  type SolutionId,
} from "./SolutionDetailModal";

const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

export function SolutionsTabs() {
  const { t, lang } = useLang();
  const [activeSolution, setActiveSolution] = useState<SolutionId | null>(null);

  return (
    <>
      <section
        id="solutions"
        className="relative py-24 lg:py-32 border-t border-neutral-100"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Section heading */}
          <FadeIn key={`intro-${lang}`} className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              {t.solutions.eyebrow}
            </p>
            <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl text-neutral-900 leading-[1.05] tracking-tight">
              {t.solutions.titleA}
              <br />
              <span className="italic font-normal text-neutral-700">
                {t.solutions.titleB}
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg text-neutral-500 leading-relaxed">
              {t.solutions.intro}
            </p>
          </FadeIn>

          {/* Three solution cards — side by side */}
          <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            <SolutionCard
              eyebrow={t.solutions.cards.eyebrowWebsites}
              title={t.solutions.tabWebsites}
              description={t.solutions.cards.websitesShort}
              ctaLabel={t.solutions.cards.learnMore}
              delay={0.1}
              onClick={() => setActiveSolution("websites")}
            />
            <SolutionCard
              variant="gray"
              eyebrow={t.solutions.cards.eyebrowAuthority}
              title={t.solutions.tabAuthority}
              description={t.solutions.cards.authorityShort}
              ctaLabel={t.solutions.cards.learnMore}
              delay={0.2}
              onClick={() => setActiveSolution("authority")}
            />
            <SolutionCard
              variant="dark"
              eyebrow={t.solutions.cards.eyebrowAmicus}
              title={t.solutions.tabAmicus}
              description={t.solutions.cards.amicusShort}
              ctaLabel={t.solutions.cards.learnMore}
              delay={0.3}
              onClick={() => setActiveSolution("amicus")}
            />
          </div>
        </div>
      </section>

      <SolutionDetailModal
        solutionId={activeSolution}
        onClose={() => setActiveSolution(null)}
      />
    </>
  );
}

type CardVariant = "light" | "gray" | "dark";

type SolutionCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  delay: number;
  variant?: CardVariant;
  onClick: () => void;
};

const CARD_STYLES: Record<
  CardVariant,
  {
    container: string;
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    line: string;
  }
> = {
  light: {
    container:
      "bg-white border-2 border-forest-deep/15 hover:border-forest-deep hover:shadow-[0_30px_70px_-20px_rgba(16,37,18,0.22)] focus-visible:border-forest-deep focus-visible:ring-2 focus-visible:ring-forest-deep/30",
    eyebrow: "text-forest-deep",
    title: "text-neutral-900",
    description: "text-neutral-500",
    cta: "text-neutral-900 group-hover:text-forest-deep",
    line: "bg-neutral-900 group-hover:bg-forest-deep",
  },
  gray: {
    container:
      "bg-neutral-100 border-2 border-transparent hover:border-forest-deep hover:shadow-[0_30px_70px_-20px_rgba(16,37,18,0.22)] focus-visible:border-forest-deep focus-visible:ring-2 focus-visible:ring-forest-deep/30",
    eyebrow: "text-forest-deep",
    title: "text-neutral-900",
    description: "text-neutral-500",
    cta: "text-neutral-900 group-hover:text-forest-deep",
    line: "bg-neutral-900 group-hover:bg-forest-deep",
  },
  dark: {
    container:
      "bg-forest-deep text-white border border-forest-deep hover:shadow-[0_40px_80px_-25px_rgba(16,37,18,0.55)] focus-visible:ring-2 focus-visible:ring-white/40",
    eyebrow: "text-white/70",
    title: "text-white",
    description: "text-white/70",
    cta: "text-white/90 group-hover:text-white",
    line: "bg-white/60 group-hover:bg-white",
  },
};

function SolutionCard({
  eyebrow,
  title,
  description,
  ctaLabel,
  delay,
  variant = "light",
  onClick,
}: SolutionCardProps) {
  const styles = CARD_STYLES[variant];

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EDITORIAL_EASE }}
      className={`group overflow-hidden text-left rounded-3xl px-8 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-14 transition-all duration-500 ease-editorial hover:-translate-y-1 focus:outline-none ${styles.container}`}
    >
      {/* Eyebrow */}
      <p
        className={`text-xs font-medium uppercase tracking-[0.22em] ${styles.eyebrow}`}
      >
        {eyebrow}
      </p>

      {/* Title — reserve enough height for 2 lines so all cards align
          regardless of whether the localised title wraps. */}
      <h3
        className={`mt-14 sm:mt-16 lg:mt-20 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.04] tracking-tight min-h-[4.5rem] sm:min-h-[5.5rem] lg:min-h-[6.5rem] ${styles.title}`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`mt-6 max-w-md text-base lg:text-[17px] leading-relaxed ${styles.description}`}
      >
        {description}
      </p>

      {/* CTA */}
      <div
        className={`mt-12 lg:mt-14 inline-flex items-center gap-3 text-sm font-medium transition-colors duration-300 ease-editorial ${styles.cta}`}
      >
        {ctaLabel}
        <span
          aria-hidden
          className={`block h-px w-8 transition-all duration-500 ease-editorial group-hover:w-16 ${styles.line}`}
        />
      </div>
    </motion.button>
  );
}
