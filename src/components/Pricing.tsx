"use client";

import { ArrowRight, Check } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import { FadeIn } from "./FadeIn";
import { Magnetic } from "./Magnetic";

/**
 * "Investment" section — three entry-level package anchors ("from …") shown on
 * the /leistungen overview. Deliberately shows starting prices only; the full
 * module-level price list lives in the offer sent after the first conversation.
 */
export function Pricing() {
  const { t, lang } = useLang();
  const p = t.pricing;

  return (
    <section
      id="preise"
      className="relative scroll-mt-32 border-t border-neutral-100 pt-24 lg:pt-32 dark:border-white/10"
    >
      <FadeIn key={`pricing-intro-${lang}`} className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
          {p.eyebrow}
        </p>
        <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-neutral-100">
          {p.titleA}
          <br />
          <span className="font-normal italic text-neutral-700 dark:text-neutral-300">
            {p.titleItalic}
          </span>
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
          {p.intro}
        </p>
      </FadeIn>

      <div className="mt-16 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">
        {p.plans.map((plan, i) => {
          const highlighted = plan.recommended === true;
          return (
            <FadeIn
              key={`${plan.name}-${lang}`}
              delay={i * 0.1}
              className={`group relative flex flex-col rounded-2xl border p-8 transition-colors duration-500 ease-editorial ${
                highlighted
                  ? "border-forest-deep bg-neutral-50/60 dark:border-forest-light dark:bg-white/[0.03]"
                  : "border-neutral-200 dark:border-white/10"
              }`}
            >
              {highlighted && (
                <span className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-forest-deep px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white dark:bg-forest-light dark:text-ink">
                  {p.recommendedLabel}
                </span>
              )}

              <h3 className="font-serif text-2xl tracking-tight text-neutral-900 sm:text-[28px] dark:text-neutral-100">
                {plan.name}
              </h3>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  {p.fromLabel}
                </span>
                <span className="font-serif text-4xl tracking-tight text-neutral-900 dark:text-neutral-100">
                  {plan.price}
                </span>
              </div>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                {p.oneTimeNote}
              </p>

              <p className="mt-6 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                {plan.tagline}
              </p>

              <ul className="mt-7 flex flex-col gap-3 border-t border-neutral-200 pt-7 dark:border-white/10">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300"
                  >
                    <Check
                      size={16}
                      aria-hidden
                      className="mt-1 shrink-0 text-forest-deep dark:text-forest-light"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn
        delay={0.1}
        className="mt-12 flex flex-col gap-8 border-t border-neutral-100 pt-10 dark:border-white/10 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="max-w-md">
          <p className="flex items-baseline gap-2">
            <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {p.recurring.label}
            </span>
            <span className="font-serif text-xl text-neutral-900 dark:text-neutral-100">
              {p.recurring.price}
            </span>
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
            {p.recurring.note}
          </p>
        </div>

        <Magnetic>
          <a
            href="/#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-forest-deep px-7 py-3.5 text-sm font-medium text-white transition-all duration-500 ease-editorial hover:bg-forest-deep/90 dark:bg-forest-light dark:text-ink dark:hover:bg-forest-light/90"
          >
            {p.cta}
            <ArrowRight
              size={16}
              className="transition-transform duration-500 ease-editorial group-hover:translate-x-1"
            />
          </a>
        </Magnetic>
      </FadeIn>

      <p className="mt-10 max-w-2xl text-xs leading-relaxed text-neutral-400 dark:text-neutral-500">
        {p.footnote}
      </p>
    </section>
  );
}
