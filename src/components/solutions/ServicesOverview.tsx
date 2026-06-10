"use client";

import { useLang } from "@/lib/LanguageProvider";
import { FadeIn } from "@/components/FadeIn";
import { BackLink } from "@/components/BackLink";
import { SolutionCards } from "./SolutionCards";

/** `/leistungen` overview page: intro + the solution cards as links. */
export function ServicesOverview() {
  const { t, lang } = useLang();

  return (
    <article className="relative pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <BackLink href="/" label={t.nav.backHome} />

        <FadeIn
          key={`services-intro-${lang}`}
          delay={0.05}
          className="mt-12 max-w-3xl lg:mt-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {t.solutions.eyebrow}
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-neutral-100">
            {t.solutions.titleA}
            <br />
            <span className="font-normal italic text-neutral-700 dark:text-neutral-300">
              {t.solutions.titleB}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
            {t.solutions.intro}
          </p>
        </FadeIn>

        <div className="mt-16 lg:mt-20">
          <SolutionCards headingLevel="h2" />
        </div>
      </div>
    </article>
  );
}
