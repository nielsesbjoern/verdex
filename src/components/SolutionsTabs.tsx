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

          {/* Two solution cards — side by side */}
          <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <SolutionCard
              eyebrow={t.solutions.cards.eyebrowWebsites}
              title={t.solutions.tabWebsites}
              description={t.solutions.cards.websitesShort}
              ctaLabel={t.solutions.cards.learnMore}
              delay={0.1}
              onClick={() => setActiveSolution("websites")}
            />
            <SolutionCard
              variant="dark"
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
  variant?: "light" | "dark";
  onClick: () => void;
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
  const isDark = variant === "dark";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EDITORIAL_EASE }}
      className={`group overflow-hidden text-left rounded-3xl px-8 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 transition-all duration-500 ease-editorial hover:-translate-y-1 focus:outline-none ${
        isDark
          ? "bg-forest-deep text-white border border-forest-deep hover:shadow-[0_40px_80px_-25px_rgba(16,37,18,0.55)] focus-visible:ring-2 focus-visible:ring-white/40"
          : "bg-white border-2 border-forest-deep/15 hover:border-forest-deep hover:shadow-[0_30px_70px_-20px_rgba(16,37,18,0.22)] focus-visible:border-forest-deep focus-visible:ring-2 focus-visible:ring-forest-deep/30"
      }`}
    >
      {/* Eyebrow */}
      <p
        className={`text-xs font-medium uppercase tracking-[0.22em] ${
          isDark ? "text-white/70" : "text-forest-deep"
        }`}
      >
        {eyebrow}
      </p>

      {/* Title — reserve enough height for 2 lines so both cards align
          regardless of whether the localised title wraps. */}
      <h3
        className={`mt-16 sm:mt-20 lg:mt-24 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight min-h-[5rem] sm:min-h-[6.5rem] lg:min-h-[8rem] ${
          isDark ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`mt-6 max-w-md text-base lg:text-[17px] leading-relaxed ${
          isDark ? "text-white/70" : "text-neutral-500"
        }`}
      >
        {description}
      </p>

      {/* CTA */}
      <div
        className={`mt-12 lg:mt-16 inline-flex items-center gap-3 text-sm font-medium transition-colors duration-300 ease-editorial ${
          isDark
            ? "text-white/90 group-hover:text-white"
            : "text-neutral-900 group-hover:text-forest-deep"
        }`}
      >
        {ctaLabel}
        <span
          aria-hidden
          className={`block h-px w-8 transition-all duration-500 ease-editorial group-hover:w-16 ${
            isDark
              ? "bg-white/60 group-hover:bg-white"
              : "bg-neutral-900 group-hover:bg-forest-deep"
          }`}
        />
      </div>
    </motion.button>
  );
}
