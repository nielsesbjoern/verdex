"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import { FadeIn } from "./FadeIn";

/** Slim home-page strip linking to the full `/deutschlandweit` page. */
export function ReachTeaser() {
  const { t, lang } = useLang();
  const r = t.reach;

  return (
    <section className="relative border-t border-neutral-100 py-16 lg:py-20 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn
          key={`reach-teaser-${lang}`}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              {r.eyebrow}
            </p>
            <p className="mt-4 font-serif text-2xl leading-snug tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
              {r.teaser.lead}
            </p>
          </div>
          <Link
            href="/deutschlandweit#staedte"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-forest-deep px-6 py-3 text-sm font-medium text-white transition-all duration-500 ease-editorial hover:bg-forest-deep/90 dark:bg-forest-light dark:text-ink dark:hover:bg-forest-light/90"
          >
            {r.teaser.link}
            <ArrowRight
              size={16}
              className="transition-transform duration-500 ease-editorial group-hover:translate-x-1"
            />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
