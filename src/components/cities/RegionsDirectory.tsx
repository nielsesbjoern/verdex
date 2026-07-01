"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Search } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { BUNDESLAENDER } from "@/lib/cities/bundeslaender";
import { areCityPagesPubliclyAccessible, getLiveCityRecords, hrefForCity } from "@/lib/cities/citiesMeta";
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

function bundeslandId(name: string): string {
  return name
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** City search + Bundesländer accordion — rendered below the map on `/deutschlandweit`. */
export function RegionsDirectory() {
  const { t } = useLang();
  const cities = getLiveCityRecords();
  const cityPagesPublic = areCityPagesPubliclyAccessible();
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeSearch(query);

  const citiesByBundesland = useMemo(() => {
    const grouped = Object.fromEntries(
      BUNDESLAENDER.map((bl) => [bl, [] as CityRecord[]]),
    ) as Record<(typeof BUNDESLAENDER)[number], CityRecord[]>;

    for (const city of cities) {
      if (grouped[city.bundesland as (typeof BUNDESLAENDER)[number]]) {
        grouped[city.bundesland as (typeof BUNDESLAENDER)[number]].push(city);
      }
    }

    for (const bl of BUNDESLAENDER) {
      grouped[bl].sort((a, b) => a.name.localeCompare(b.name, "de"));
    }

    return grouped;
  }, [cities]);

  const filteredBundeslaender = useMemo(() => {
    return BUNDESLAENDER.map((bl) => {
      const matches = citiesByBundesland[bl].filter((city) =>
        cityMatchesQuery(city, normalizedQuery),
      );
      return { bundesland: bl, cities: matches };
    }).filter(({ cities: list }) => !normalizedQuery || list.length > 0);
  }, [citiesByBundesland, normalizedQuery]);

  const [openStates, setOpenStates] = useState<Set<string>>(() => new Set());

  const toggleState = (bl: string) => {
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
        BUNDESLAENDER.filter((bl) =>
          citiesByBundesland[bl].some((city) => cityMatchesQuery(city, q)),
        ),
      ),
    );
  };

  const totalMatches = filteredBundeslaender.reduce(
    (sum, { cities: list }) => sum + list.length,
    0,
  );

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
            {totalMatches === 0
              ? t.cities.searchNoResults
              : t.cities.searchResults.replace(
                  "{count}",
                  String(totalMatches),
                )}
          </p>
        )}
      </FadeIn>

      <FadeIn delay={0.1} className="mt-12 lg:mt-16">
        <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
          {t.cities.bundeslaenderTitle}
        </h3>

        {normalizedQuery && totalMatches === 0 ? (
          <p className="mt-8 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
            {t.cities.searchNoResultsHint}
          </p>
        ) : (
          <div className="mt-6 border-t border-neutral-200 dark:border-white/10">
            {filteredBundeslaender.map(({ bundesland, cities: list }) => {
              const open = openStates.has(bundesland);
              const liveCount = list.length;
              const panelId = `bl-panel-${bundeslandId(bundesland)}`;

              return (
                <div
                  key={bundesland}
                  className="border-b border-neutral-200 dark:border-white/10"
                >
                  <button
                    type="button"
                    onClick={() => toggleState(bundesland)}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-medium text-neutral-900 transition-colors duration-300 ease-editorial group-hover:text-forest-deep sm:text-base dark:text-neutral-100 dark:group-hover:text-forest-light">
                      {bundesland}
                    </span>
                    <ChevronDown
                      size={18}
                      aria-hidden
                      className={`shrink-0 text-neutral-400 transition-transform duration-500 ease-editorial ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Always in the DOM for crawlers; collapsed visually when closed. */}
                  <div
                    id={panelId}
                    className={`grid transition-[grid-template-rows] duration-500 ease-editorial ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                    aria-hidden={!open}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-6">
                        {liveCount === 0 ? (
                          <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                            {t.cities.bundeslandComingSoon}
                          </p>
                        ) : (
                          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {list.map((city) => {
                              const cardClassName =
                                "flex flex-col rounded-xl border border-neutral-200 p-4 dark:border-white/10" +
                                (cityPagesPublic
                                  ? " group transition-all duration-500 ease-editorial hover:border-forest-deep/30 dark:hover:border-forest-light/30"
                                  : "");

                              const cardContent = (
                                <>
                                  <span className="font-serif text-lg text-neutral-900 dark:text-neutral-100">
                                    {city.name}
                                  </span>
                                  <span className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                                    {city.primaryLegalArea}
                                  </span>
                                  {cityPagesPublic && (
                                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-forest-deep dark:text-forest-light">
                                      {t.cities.viewCity.replace(
                                        "{city}",
                                        city.name,
                                      )}
                                      <ArrowRight
                                        size={14}
                                        className="transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                                      />
                                    </span>
                                  )}
                                </>
                              );

                              return (
                                <li key={city.slug}>
                                  {cityPagesPublic ? (
                                    <Link
                                      href={hrefForCity(city.slug)}
                                      tabIndex={open ? undefined : -1}
                                      className={cardClassName}
                                    >
                                      {cardContent}
                                    </Link>
                                  ) : (
                                    <div
                                      className={cardClassName}
                                      tabIndex={open ? undefined : -1}
                                    >
                                      {cardContent}
                                    </div>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </FadeIn>
    </section>
  );
}
