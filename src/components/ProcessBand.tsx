"use client";

import { useLang } from "@/lib/LanguageProvider";
import { FadeIn } from "./FadeIn";

/**
 * Slim horizontal "how an engagement runs" band — four numbered steps.
 * Kept deliberately compact: law firms are risk-averse, so showing a
 * structured process lowers the barrier to enquiring without adding
 * a full-height section.
 */
export function ProcessBand() {
  const { t, lang } = useLang();

  return (
    <section className="relative border-t border-neutral-100 py-20 lg:py-24 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn key={`process-intro-${lang}`}>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {t.process.eyebrow}
          </p>
          <h2 className="mt-6 font-serif text-3xl leading-[1.08] tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
            {t.process.title}{" "}
            <span className="font-normal italic text-neutral-700 dark:text-neutral-300">
              {t.process.titleItalic}
            </span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <FadeIn
              key={`${step.title}-${lang}`}
              delay={i * 0.08}
              className="border-t border-neutral-200 pt-6 dark:border-white/10"
            >
              <p className="font-serif text-sm italic text-forest-deep dark:text-forest-light">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-xl tracking-tight text-neutral-900 dark:text-neutral-100">
                {step.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                {step.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
