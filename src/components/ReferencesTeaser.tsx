"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import { FadeIn } from "./FadeIn";

/**
 * Compact teaser on the home page that points to the full `/referenzen`
 * before/after case study — keeps the landing page short.
 */
export function ReferencesTeaser() {
  const { t, lang } = useLang();
  const sc = t.showcase;

  return (
    <section className="relative border-t border-neutral-100 py-24 lg:py-32 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <FadeIn key={`rt-head-${lang}`} className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              {sc.eyebrow}
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-100">
              {sc.titleA}{" "}
              <span className="font-normal italic text-neutral-700 dark:text-neutral-300">
                {sc.titleItalic}
              </span>
            </h2>
          </FadeIn>

          <FadeIn key={`rt-body-${lang}`} delay={0.1} className="lg:col-span-5">
            <p className="border-l-2 border-forest-deep pl-6 font-serif text-xl italic leading-snug text-neutral-900 dark:border-forest-light dark:text-neutral-100">
              {sc.teaserLead}
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
              {sc.teaserBody}
            </p>
            <Link
              href="/referenzen"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-forest-deep px-6 py-3 text-sm font-medium text-white transition-all duration-500 ease-editorial hover:bg-forest-deep/90 dark:bg-forest-light dark:text-ink dark:hover:bg-forest-light/90"
            >
              {sc.reveal}
              <ArrowRight
                size={16}
                className="transition-transform duration-500 ease-editorial group-hover:translate-x-1"
              />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
