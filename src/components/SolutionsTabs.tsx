"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

          {/* Two solution cards — side by side */}
          <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <SolutionCard
              eyebrow={t.solutions.cards.eyebrowWebsites}
              title={t.solutions.tabWebsites}
              description={t.solutions.cards.websitesShort}
              ctaLabel={t.solutions.cards.learnMore}
              delay={0.1}
              onClick={() => setActiveSolution("websites")}
            />
            <SolutionCard
              eyebrow={t.solutions.cards.eyebrowAmicus}
              title={t.solutions.tabAmicus}
              description={t.solutions.cards.amicusShort}
              ctaLabel={t.solutions.cards.learnMore}
              delay={0.2}
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

type SolutionCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  delay: number;
  onClick: () => void;
};

function SolutionCard({
  eyebrow,
  title,
  description,
  ctaLabel,
  delay,
  onClick,
}: SolutionCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EDITORIAL_EASE }}
      className="group relative text-left rounded-2xl border border-neutral-200 bg-white px-8 py-10 lg:px-10 lg:py-12 transition-all duration-500 ease-editorial hover:border-forest-deep hover:-translate-y-0.5 focus:outline-none focus-visible:border-forest-deep focus-visible:ring-1 focus-visible:ring-forest-deep"
    >
      <div className="flex items-start justify-between gap-6">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-deep/60">
          {eyebrow}
        </p>
        <span
          aria-hidden
          className="text-forest-deep transition-transform duration-500 ease-editorial group-hover:-translate-y-1 group-hover:translate-x-1"
        >
          <ArrowUpRight size={20} strokeWidth={1.6} />
        </span>
      </div>

      <h3 className="mt-10 font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-900 leading-[1.05] tracking-tight">
        {title}
      </h3>

      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-neutral-500">
        {description}
      </p>

      <p className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group-hover:text-forest-deep transition-colors duration-300 ease-editorial">
        {ctaLabel}
        <span
          aria-hidden
          className="block h-px w-6 bg-neutral-900 transition-all duration-500 ease-editorial group-hover:w-10 group-hover:bg-forest-deep"
        />
      </p>
    </motion.button>
  );
}
