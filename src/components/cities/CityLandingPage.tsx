"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Gauge, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { BackLink } from "@/components/BackLink";
import { FadeIn } from "@/components/FadeIn";
import { CityFaq } from "@/components/cities/CityFaq";
import { GermanyCityMap } from "@/components/cities/GermanyCityMap";
import { LocalSerpPreview } from "@/components/cities/LocalSerpPreview";
import {
  getCityFacts,
  hrefForCity,
} from "@/lib/cities/citiesMeta";
import { hrefForSlug } from "@/components/solutions/solutionsMeta";
import type { CityRecord } from "@/lib/cities/types";
import { absoluteUrl } from "@/lib/site";
import { useLang } from "@/lib/LanguageProvider";

type CityLandingPageProps = {
  city: CityRecord;
};

export function CityLandingPage({ city }: CityLandingPageProps) {
  const { t } = useLang();
  const { content } = city;
  const markers = [
    {
      slug: city.slug,
      name: city.name,
      x: city.mapCoords.x,
      y: city.mapCoords.y,
      anchor: city.mapCoords.anchor,
      live: true,
    },
  ];

  const nearbyCities = (city.nearbySlugs ?? [])
    .map((slug) => getCityFacts(slug))
    .filter((c): c is NonNullable<typeof c> => c?.status === "live");

  const jsonLd = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Kanzlei-Website-Entwicklung",
      provider: {
        "@type": "Organization",
        name: "Verdex",
      },
      areaServed: {
        "@type": "City",
        name: city.name,
        containedInPlace: {
          "@type": "State",
          name: city.bundesland,
        },
      },
      audience: {
        "@type": "Audience",
        audienceType: "Rechtsanwälte und Kanzleien",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Verdex",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: t.cities.regionsTitle,
          item: absoluteUrl("/deutschlandweit#staedte"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: city.name,
          item: absoluteUrl(hrefForCity(city.slug)),
        },
      ],
    },
  ]);

  return (
    <article className="relative pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <BackLink
          href="/deutschlandweit#staedte"
          label={t.cities.backToRegions}
        />

        {/* Hero */}
        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              {t.cities.eyebrow.replace("{bundesland}", city.bundesland)}
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl lg:text-6xl">
              {t.cities.heroTitle.replace("{city}", city.name)}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
              {content.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
              <span className="rounded-full border border-neutral-200 px-3 py-1 dark:border-white/10">
                {city.population.label} EW
              </span>
              {city.stadtTyp && (
                <span className="rounded-full border border-neutral-200 px-3 py-1 dark:border-white/10">
                  {city.stadtTyp}
                </span>
              )}
              <span className="rounded-full border border-neutral-200 px-3 py-1 dark:border-white/10">
                {city.primaryLegalArea}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-5">
            <GermanyCityMap
              markers={markers}
              highlightSlug={city.slug}
              ariaLabel={t.cities.mapAria.replace("{city}", city.name)}
            />
          </FadeIn>
        </div>

        {/* Intro */}
        <FadeIn className="mt-16 max-w-3xl space-y-6">
          {content.introParagraphs.map((p) => (
            <p
              key={p.slice(0, 40)}
              className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300"
            >
              {p}
            </p>
          ))}
        </FadeIn>

        {/* Courts */}
        <Section
          eyebrow={t.cities.sections.courts}
          title={t.cities.courtsTitle.replace("{city}", city.name)}
        >
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            {content.courtsNarrative}
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            <FactCard label="Amtsgericht" value={city.courts.amtsgericht} />
            <FactCard label="Landgericht" value={city.courts.landgericht} />
            <FactCard
              label="Oberlandesgericht"
              value={city.courts.oberlandesgericht}
            />
          </dl>
          {city.courts.besonderheiten && city.courts.besonderheiten.length > 0 && (
            <ul className="mt-6 space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
              {city.courts.besonderheiten.map((note) => (
                <li key={note} className="flex gap-2">
                  <span aria-hidden className="text-forest-deep dark:text-forest-light">
                    ·
                  </span>
                  {note}
                </li>
              ))}
            </ul>
          )}
        </Section>

        {/* Economy */}
        <Section
          eyebrow={t.cities.sections.economy}
          title={t.cities.economyTitle.replace("{city}", city.name)}
        >
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            {content.economyNarrative}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {city.economy.sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full bg-neutral-100 px-4 py-1.5 text-sm text-neutral-700 dark:bg-white/5 dark:text-neutral-300"
              >
                {sector}
              </span>
            ))}
          </div>
          {city.landmarks.length > 0 && (
            <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
              {t.cities.landmarksLabel}: {city.landmarks.join(" · ")}
            </p>
          )}
        </Section>

        {/* Services */}
        <Section
          eyebrow={t.cities.sections.services}
          title={t.cities.servicesTitle.replace("{city}", city.name)}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <ServiceCard
              icon={Sparkles}
              title={t.solutions.tabWebsites}
              body={t.solutions.cards.websitesShort}
              href="/leistungen/websites"
              cta={t.solutions.cards.learnMore}
            />
            <ServiceCard
              icon={MapPin}
              title={t.solutions.tabAuthority}
              body={t.solutions.cards.authorityShort}
              href={hrefForSlug("sicherheit")}
              cta={t.solutions.cards.learnMore}
            />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <MiniFeature icon={Gauge} label={t.solutions.websites.features[1].title} />
            <MiniFeature icon={ShieldCheck} label={t.solutions.authority.shieldFeatures[0].title} />
            <MiniFeature icon={Sparkles} label={t.solutions.websites.features[0].title} />
          </div>
        </Section>

        {/* Local case */}
        <Section
          eyebrow={t.cities.sections.localExample}
          title={t.cities.localExampleTitle.replace("{city}", city.name)}
        >
          <blockquote className="border-l-2 border-forest-deep pl-6 font-serif text-xl italic leading-relaxed text-neutral-700 dark:border-forest-light dark:text-neutral-200 sm:text-2xl">
            {content.localCaseExample}
          </blockquote>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
            {t.cities.localExampleDisclaimer}
          </p>
        </Section>

        {/* SERP preview */}
        <div className="mt-20 lg:mt-24">
          <LocalSerpPreview
            cityName={city.name}
            primaryLegalArea={city.primaryLegalArea}
          />
        </div>

        {/* FAQ */}
        <CityFaq items={content.faq} cityName={city.name} />

        {/* Why Verdex */}
        <Section
          eyebrow={t.cities.sections.whyVerdex}
          title={t.cities.whyVerdexTitle.replace("{city}", city.name)}
        >
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            {content.whyVerdexParagraph}
          </p>
        </Section>

        {/* Nearby / regions */}
        {nearbyCities.length > 0 ? (
          <Section
            eyebrow={t.cities.sections.nearby}
            title={t.cities.nearbyTitle.replace("{city}", city.name)}
          >
            <ul className="flex flex-wrap gap-3">
              {nearbyCities.map((nearby) => (
                <li key={nearby.slug}>
                  <Link
                    href={hrefForCity(nearby.slug)}
                    className="inline-flex rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700 transition-colors duration-300 ease-editorial hover:border-forest-deep hover:text-forest-deep dark:border-white/10 dark:text-neutral-300 dark:hover:border-forest-light dark:hover:text-forest-light"
                  >
                    {nearby.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        ) : (
          <Section
            eyebrow={t.cities.sections.nearby}
            title={t.cities.moreRegionsTitle}
          >
            <p className="max-w-2xl text-neutral-500 dark:text-neutral-400">
              {t.cities.moreRegionsBody}
            </p>
            <Link
              href="/deutschlandweit#staedte"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest-deep transition-colors duration-300 ease-editorial hover:text-forest-deep/80 dark:text-forest-light dark:hover:text-forest-light/80"
            >
              {t.cities.backToRegions}
              <ArrowRight size={14} />
            </Link>
          </Section>
        )}

        {/* CTA */}
        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-neutral-100 pt-10 dark:border-white/10 lg:mt-20">
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-forest-deep px-7 py-3.5 text-sm font-medium text-white transition-all duration-500 ease-editorial hover:bg-forest-deep/90 dark:bg-forest-light dark:text-ink dark:hover:bg-forest-light/90"
          >
            {t.cities.cta.replace("{city}", city.name)}
            <ArrowRight
              size={16}
              className="transition-transform duration-500 ease-editorial group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/deutschlandweit#staedte"
            className="text-sm text-neutral-500 transition-colors duration-300 ease-editorial hover:text-forest-deep dark:text-neutral-400 dark:hover:text-forest-light"
          >
            {t.cities.backToRegions}
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </article>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <FadeIn className="mt-20 lg:mt-24">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-3xl font-serif text-3xl tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </FadeIn>
  );
}

function FactCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 p-5 dark:border-white/10">
      <dt className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
        {label}
      </dt>
      <dd className="mt-2 text-sm font-medium leading-snug text-neutral-900 dark:text-neutral-100">
        {value}
      </dd>
    </div>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  body,
  href,
  cta,
}: {
  icon: typeof Sparkles;
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-neutral-200 p-6 transition-all duration-500 ease-editorial hover:border-forest-deep/30 hover:shadow-sm dark:border-white/10 dark:hover:border-forest-light/30"
    >
      <Icon
        size={20}
        className="text-forest-deep dark:text-forest-light"
        aria-hidden
      />
      <h3 className="mt-4 font-serif text-xl text-neutral-900 dark:text-neutral-100">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
        {body}
      </p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-forest-deep transition-transform duration-300 ease-editorial group-hover:translate-x-1 dark:text-forest-light">
        {cta}
        <ArrowRight size={14} />
      </span>
    </Link>
  );
}

function MiniFeature({
  icon: Icon,
  label,
}: {
  icon: typeof Sparkles;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-neutral-50 px-4 py-3 dark:bg-white/5">
      <Icon
        size={16}
        className="shrink-0 text-forest-deep dark:text-forest-light"
        aria-hidden
      />
      <span className="text-sm text-neutral-600 dark:text-neutral-300">
        {label}
      </span>
    </div>
  );
}
