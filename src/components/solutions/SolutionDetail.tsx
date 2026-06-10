"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  EyeOff,
  Gauge,
  MapPin,
  Radar,
  Scale,
  ShieldCheck,
  Sparkles,
  Swords,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import { useAmicusAudit } from "@/lib/AmicusAuditContext";
import { FadeIn } from "@/components/FadeIn";
import { BackLink } from "@/components/BackLink";
import type { SolutionId } from "./solutionsMeta";

const EASE = [0.16, 1, 0.3, 1] as const;

const WEBSITE_ICONS: LucideIcon[] = [Sparkles, Gauge, Wrench];
const AUTHORITY_ICONS: LucideIcon[] = [MapPin, ShieldCheck, Radar];
const AMICUS_ICONS: LucideIcon[] = [Scale, Swords, EyeOff, CalendarClock];

/** Full standalone detail page for one solution (was a modal before). */
export function SolutionDetail({ solutionId }: { solutionId: SolutionId }) {
  const { t, lang } = useLang();
  const { open: openAudit } = useAmicusAudit();

  const eyebrow =
    solutionId === "websites"
      ? t.solutions.cards.eyebrowWebsites
      : solutionId === "authority"
      ? t.solutions.cards.eyebrowAuthority
      : t.solutions.cards.eyebrowAmicus;

  return (
    <article className="relative pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <BackLink
          href="/leistungen"
          label={t.solutions.deepDive.backToOverview}
        />

        <FadeIn delay={0.05}>
          <p className="mt-12 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400 lg:mt-16">
            {eyebrow}
          </p>
        </FadeIn>

        <motion.div
          key={`${solutionId}-${lang}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="mt-6"
        >
          {solutionId === "websites" ? (
            <WebsitesContent />
          ) : solutionId === "authority" ? (
            <AuthorityContent />
          ) : (
            <AmicusContent onRunAudit={openAudit} />
          )}
        </motion.div>

        {/* CTA footer */}
        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-neutral-100 pt-10 dark:border-white/10 lg:mt-20">
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-forest-deep px-7 py-3.5 text-sm font-medium text-white transition-all duration-500 ease-editorial hover:bg-forest-deep/90 dark:bg-forest-light dark:text-ink dark:hover:bg-forest-light/90"
          >
            {t.solutions.deepDive.primaryCta}
            <ArrowRight
              size={16}
              className="transition-transform duration-500 ease-editorial group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/leistungen"
            className="ml-auto text-sm text-neutral-500 transition-colors duration-300 ease-editorial hover:text-forest-deep dark:text-neutral-400 dark:hover:text-forest-light"
          >
            {t.solutions.deepDive.backToOverview}
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------- */

function DetailHeading({ title }: { title: string }) {
  return (
    <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl lg:text-6xl">
      {title}
    </h1>
  );
}

function WebsitesContent() {
  const { t } = useLang();
  return (
    <>
      <DetailHeading title={t.solutions.websites.title} />
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
        {t.solutions.websites.body}
      </p>
      <FeatureGrid
        features={t.solutions.websites.features}
        icons={WEBSITE_ICONS}
        cols={3}
      />
    </>
  );
}

function AuthorityContent() {
  const { t } = useLang();
  return (
    <>
      <DetailHeading title={t.solutions.authority.title} />
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
        {t.solutions.authority.body}
      </p>
      <FeatureGrid
        features={t.solutions.authority.features}
        icons={AUTHORITY_ICONS}
        cols={3}
      />
    </>
  );
}

function AmicusContent({ onRunAudit }: { onRunAudit: () => void }) {
  const { t } = useLang();
  return (
    <>
      <DetailHeading title={t.solutions.amicus.title} />
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
        {t.solutions.amicus.body}
      </p>

      <div className="mt-10">
        <button
          onClick={onRunAudit}
          className="group inline-flex items-center gap-3 rounded-full bg-forest-deep px-7 py-3.5 text-sm font-medium text-white transition-all duration-500 ease-editorial hover:bg-forest-deep/90 dark:bg-forest-light dark:text-ink dark:hover:bg-forest-light/90"
        >
          {t.solutions.deepDive.runAuditCta}
          <ArrowRight
            size={16}
            className="transition-transform duration-500 ease-editorial group-hover:translate-x-1"
          />
        </button>
      </div>

      <div className="mt-16 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-deep dark:text-forest-light">
          {t.solutions.amicus.deploymentEyebrow}
        </p>
        <h2 className="mt-4 font-serif text-2xl leading-snug tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl">
          {t.solutions.amicus.deploymentTitle}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
          {t.solutions.amicus.deploymentBody}
        </p>
      </div>

      <div className="mt-12 max-w-2xl border-l-2 border-forest-deep pl-6 dark:border-forest-light">
        <p className="font-serif text-xl italic leading-snug text-neutral-900 dark:text-neutral-100">
          {t.solutions.amicus.noteTitle}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
          {t.solutions.amicus.noteBody}
        </p>
      </div>

      <FeatureGrid
        features={t.solutions.amicus.features}
        icons={AMICUS_ICONS}
        cols={2}
      />
    </>
  );
}

/* ---------------------------------------------------------- */

function FeatureGrid({
  features,
  icons,
  cols,
}: {
  features: { title: string; description: string }[];
  icons: LucideIcon[];
  cols: 2 | 3;
}) {
  const gridCols =
    cols === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";

  return (
    <div className={`mt-16 grid grid-cols-1 gap-x-10 gap-y-12 ${gridCols}`}>
      {features.map((f, i) => {
        const Icon = icons[i] ?? Sparkles;
        return (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            className="border-t border-neutral-200 pt-6 dark:border-white/10"
          >
            <Icon
              size={22}
              strokeWidth={1.5}
              className="text-forest-deep dark:text-forest-light"
            />
            <h2 className="mt-6 font-serif text-2xl leading-tight tracking-tight text-neutral-900 dark:text-neutral-100">
              {f.title}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
              {f.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
