"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { GermanyBundeslandMap } from "@/components/cities/GermanyBundeslandMap";
import { BUNDESLAENDER } from "@/lib/cities/bundeslaender";
import type { Bundesland } from "@/lib/cities/bundeslaender";
import {
  bundeslandNameToSlug,
  hrefForBundesland,
} from "@/lib/cities/bundeslandMeta";
import { areBundeslandPagesPubliclyAccessible } from "@/lib/cities/cityPagesRollout";
import { getLiveCityRecords } from "@/lib/cities/citiesMeta";
import type { CityRecord } from "@/lib/cities/types";
import { useLang } from "@/lib/LanguageProvider";

function normalizeSearch(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss")
    .trim();
}

function cityMatchesQuery(city: CityRecord, query: string): boolean {
  if (!query) return true;
  const haystack = normalizeSearch(
    [
      city.name,
      city.bundesland,
      city.kreisOrBezirk,
      city.primaryLegalArea,
      ...city.secondaryLegalAreas,
    ].join(" "),
  );
  return haystack.includes(query);
}

/** City search + Bundesländer map — rendered on `/deutschlandweit#staedte`. */
export function RegionsDirectory() {
  const { t } = useLang();
  const cities = getLiveCityRecords();
  const bundeslandPagesPublic = areBundeslandPagesPubliclyAccessible();
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeSearch(query);

  const citiesByBundesland = useMemo(() => {
    const grouped = Object.fromEntries(
      BUNDESLAENDER.map((bl) => [bl, [] as CityRecord[]]),
    ) as Record<Bundesland, CityRecord[]>;

    for (const city of cities) {
      if (grouped[city.bundesland as Bundesland]) {
        grouped[city.bundesland as Bundesland].push(city);
      }
    }

    return grouped;
  }, [cities]);

  const filteredBundeslaender = useMemo(() => {
    return BUNDESLAENDER.filter((bl) => {
      if (!normalizedQuery) return true;
      if (normalizeSearch(bl).includes(normalizedQuery)) return true;
      return citiesByBundesland[bl].some((city) =>
        cityMatchesQuery(city, normalizedQuery),
      );
    });
  }, [citiesByBundesland, normalizedQuery]);

  const [openStates, setOpenStates] = useState<Set<Bundesland>>(
    () => new Set(),
  );

  const highlightedBundeslaender = useMemo(
    () => Array.from(openStates),
    [openStates],
  );

  const toggleState = (bl: Bundesland) => {
    setOpenStates((prev) => {
      const next = new Set(prev);
      if (next.has(bl)) next.delete(bl);
      else next.add(bl);
      return next;
    });
  };

  const handleSearchChange = (value: string) => {
    setQuery(value);
    const q = normalizeSearch(value);
    if (!q) {
      setOpenStates(new Set());
      return;
    }
    setOpenStates(
      new Set(
        BUNDESLAENDER.filter(
          (bl) =>
            normalizeSearch(bl).includes(q) ||
            citiesByBundesland[bl].some((city) => cityMatchesQuery(city, q)),
        ),
      ),
    );
  };

  const totalCityMatches = useMemo(() => {
    if (!normalizedQuery) return 0;
    return cities.filter((city) => cityMatchesQuery(city, normalizedQuery))
      .length;
  }, [cities, normalizedQuery]);

  const nameClassName =
    "text-[15px] font-medium text-neutral-900 transition-colors duration-300 ease-editorial hover:text-forest-deep sm:text-base dark:text-neutral-100 dark:hover:text-forest-light";

  return (
    <section
      id="staedte"
      className="scroll-mt-32 border-t border-neutral-100 pt-16 lg:pt-20 dark:border-white/10"
    >
      <FadeIn>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
          {t.cities.regionsEyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
          {t.cities.regionsTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
          {t.cities.regionsBody}
        </p>
      </FadeIn>

      <FadeIn delay={0.05} className="mt-10">
        <label htmlFor="city-search" className="sr-only">
          {t.cities.searchLabel}
        </label>
        <div className="relative">
          <Search
            size={18}
            aria-hidden
            className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500"
          />
          <input
            id="city-search"
            type="search"
            value={query}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder={t.cities.searchPlaceholder}
            className="w-full rounded-2xl border border-neutral-200 bg-white py-4 pl-12 pr-5 text-[15px] text-neutral-900 outline-none transition-colors duration-300 ease-editorial placeholder:text-neutral-400 focus:border-forest-deep dark:border-white/10 dark:bg-ink-surface dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:border-forest-light"
          />
        </div>
        {normalizedQuery && (
          <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
            {totalCityMatches === 0
              ? t.cities.searchNoResults
              : t.cities.searchResults.replace(
                  "{count}",
                  String(totalCityMatches),
                )}
          </p>
        )}
      </FadeIn>

      <FadeIn delay={0.1} className="mt-12 lg:mt-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <GermanyBundeslandMap
            highlightedBundeslaender={highlightedBundeslaender}
            ariaLabel={t.cities.bundeslaenderTitle}
            className="mx-auto w-full max-w-[320px] lg:sticky lg:top-32 lg:max-w-none"
          />

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              {t.cities.bundeslaenderTitle}
            </h3>

            {normalizedQuery && totalCityMatches === 0 ? (
              <p className="mt-8 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                {t.cities.searchNoResultsHint}
              </p>
            ) : (
              <div className="mt-6 border-t border-neutral-200 dark:border-white/10">
                {filteredBundeslaender.map((bundesland) => {
                  const open = openStates.has(bundesland);
                  const hubHref = bundeslandPagesPublic
                    ? hrefForBundesland(bundeslandNameToSlug(bundesland))
                    : null;

                  return (
                    <div
                      key={bundesland}
                      className="flex items-center justify-between gap-4 border-b border-neutral-200 py-5 dark:border-white/10"
                    >
                      {hubHref ? (
                        <Link href={hubHref} className={nameClassName}>
                          {bundesland}
                        </Link>
                      ) : (
                        <span className="text-[15px] font-medium text-neutral-900 sm:text-base dark:text-neutral-100">
                          {bundesland}
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={() => toggleState(bundesland)}
                        aria-expanded={open}
                        aria-label={`${bundesland} ${open ? "einklappen" : "hervorheben"}`}
                        className="shrink-0 rounded-full p-1 text-neutral-400 transition-colors duration-300 ease-editorial hover:text-forest-deep dark:hover:text-forest-light"
                      >
                        <ChevronDown
                          size={18}
                          aria-hidden
                          className={`transition-transform duration-500 ease-editorial ${
                            open ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
