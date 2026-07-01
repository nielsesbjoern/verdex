"use client";

import { FadeIn } from "@/components/FadeIn";
import { useLang } from "@/lib/LanguageProvider";

type LocalSerpPreviewProps = {
  cityName: string;
  primaryLegalArea: string;
};

/** Mock before/after local search snippet for a city page. */
export function LocalSerpPreview({
  cityName,
  primaryLegalArea,
}: LocalSerpPreviewProps) {
  const { t } = useLang();
  const query = t.cities.serp.query
    .replace("{legalArea}", primaryLegalArea.toLowerCase())
    .replace("{city}", cityName);

  return (
    <FadeIn>
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 dark:border-white/10 dark:bg-ink-surface">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
          {t.cities.serp.eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-2xl tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
          {t.cities.serp.title.replace("{city}", cityName)}
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
          {t.cities.serp.body.replace("{city}", cityName)}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <SerpCard
            variant="before"
            label={t.cities.serp.beforeLabel}
            title={`Anwalt ${cityName} — Startseite`}
            url={`www.kanzlei-${cityName.toLowerCase()}.de`}
            snippet={t.cities.serp.beforeSnippet.replace("{city}", cityName)}
          />
          <SerpCard
            variant="after"
            label={t.cities.serp.afterLabel}
            title={`${primaryLegalArea} · Kanzlei ${cityName}`}
            url={`www.kanzlei-beispiel.de/${primaryLegalArea.toLowerCase().replace(/\s+/g, "-")}`}
            snippet={t.cities.serp.afterSnippet
              .replace("{city}", cityName)
              .replace("{legalArea}", primaryLegalArea)}
            query={query}
          />
        </div>
        <p className="mt-6 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
          {t.cities.serp.disclaimer}
        </p>
      </div>
    </FadeIn>
  );
}

function SerpCard({
  variant,
  label,
  title,
  url,
  snippet,
  query,
}: {
  variant: "before" | "after";
  label: string;
  title: string;
  url: string;
  snippet: string;
  query?: string;
}) {
  const muted = variant === "before";

  return (
    <div
      className={`rounded-xl border p-5 ${
        muted
          ? "border-neutral-200 bg-white opacity-70 dark:border-white/10 dark:bg-ink-raised"
          : "border-forest-deep/20 bg-white shadow-sm dark:border-forest-light/20 dark:bg-ink-raised"
      }`}
    >
      <p
        className={`text-[11px] font-medium uppercase tracking-[0.18em] ${
          muted
            ? "text-neutral-400 dark:text-neutral-500"
            : "text-forest-deep dark:text-forest-light"
        }`}
      >
        {label}
      </p>
      {query && (
        <p className="mt-4 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-600 dark:border-white/10 dark:text-neutral-300">
          {query}
        </p>
      )}
      <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-500">{url}</p>
      <p
        className={`mt-1 text-base font-medium ${
          muted
            ? "text-neutral-600 dark:text-neutral-400"
            : "text-forest-deep dark:text-forest-light"
        }`}
      >
        {title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
        {snippet}
      </p>
      {!muted && (
        <div className="mt-3 flex items-center gap-1 text-amber-500">
          {"★★★★★".split("").map((star, i) => (
            <span key={i} className="text-sm">
              {star}
            </span>
          ))}
          <span className="ml-2 text-xs text-neutral-400">Google Maps</span>
        </div>
      )}
    </div>
  );
}
