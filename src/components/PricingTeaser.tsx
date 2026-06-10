"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageProvider";
import { FadeIn } from "./FadeIn";

/**
 * Slim home-page strip that surfaces the entry-level price (a soft lead filter)
 * and links to the full "Investment" section on /leistungen. Deliberately holds
 * only a single anchor price — no second pricing block on the home page.
 */
export function PricingTeaser() {
  const { t, lang } = useLang();

  return (
    <section className="relative border-t border-neutral-100 py-16 lg:py-20 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn
          key={`pricing-teaser-${lang}`}
          className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-serif text-2xl leading-snug tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
            {t.pricing.teaser.lead}
          </p>
          <Link
            href="/leistungen#preise"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-neutral-900 transition-colors duration-300 ease-editorial hover:text-forest-deep dark:text-neutral-100 dark:hover:text-forest-light"
          >
            {t.pricing.teaser.link}
            <span
              aria-hidden
              className="block h-px w-6 bg-neutral-900 transition-all duration-500 ease-editorial group-hover:w-10 group-hover:bg-forest-deep dark:bg-neutral-100 dark:group-hover:bg-forest-light"
            />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
