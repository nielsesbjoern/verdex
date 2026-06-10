"use client";

import { useLang } from "@/lib/LanguageProvider";
import { FadeIn } from "./FadeIn";
import { SolutionCards } from "./solutions/SolutionCards";

/** Home "Solutions" section — heading + the three cards linking to detail pages. */
export function SolutionsTabs() {
  const { t, lang } = useLang();

  return (
    <section
      id="solutions"
      className="relative py-24 lg:py-32 border-t border-neutral-100 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn key={`intro-${lang}`} className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {t.solutions.eyebrow}
          </p>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl text-neutral-900 leading-[1.05] tracking-tight dark:text-neutral-100">
            {t.solutions.titleA}
            <br />
            <span className="italic font-normal text-neutral-700 dark:text-neutral-300">
              {t.solutions.titleB}
            </span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-neutral-500 leading-relaxed dark:text-neutral-400">
            {t.solutions.intro}
          </p>
        </FadeIn>

        <div className="mt-16 lg:mt-20">
          <SolutionCards />
        </div>
      </div>
    </section>
  );
}
