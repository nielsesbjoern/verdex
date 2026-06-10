"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Info,
  Magnet,
  Maximize2,
  ShieldCheck,
  TrendingUp,
  X,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import { FadeIn } from "@/components/FadeIn";
import { BackLink } from "@/components/BackLink";
import { MockSiteBefore } from "./MockSiteBefore";
import { MockSiteAfter } from "./MockSiteAfter";

const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;
type Side = "before" | "after";

/** Standalone "References" page: the full before/after example, always shown. */
export function BeforeAfterShowcase() {
  const { t, lang } = useLang();
  const sc = t.showcase;

  const [side, setSide] = useState<Side>("after");
  const [fullscreen, setFullscreen] = useState<Side | null>(null);

  return (
    <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <BackLink href="/" label={t.nav.backHome} />

        {/* Heading + intro */}
        <FadeIn key={`sc-intro-${lang}`} delay={0.05} className="mt-12 max-w-3xl lg:mt-16">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            {sc.eyebrow}
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-neutral-100">
            {sc.titleA}
            <br />
            <span className="font-normal italic text-neutral-700 dark:text-neutral-300">
              {sc.titleItalic}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
            {sc.intro}
          </p>
        </FadeIn>

        {/* Teaser — a short taste of the payoff */}
        <FadeIn
          key={`sc-teaser-${lang}`}
          delay={0.08}
          className="mt-10 max-w-2xl border-l-2 border-forest-deep pl-6 dark:border-forest-light"
        >
          <p className="font-serif text-xl italic leading-snug text-neutral-900 sm:text-2xl dark:text-neutral-100">
            {sc.teaserLead}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
            {sc.teaserBody}
          </p>
        </FadeIn>

        {/* Controls: before/after toggle + open in full */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SegmentedToggle
            side={side}
            setSide={setSide}
            viewLabel={sc.viewLabel}
            labelBefore={sc.labelBefore}
            labelAfter={sc.labelAfter}
          />
          <OpenButton onClick={() => setFullscreen(side)} label={sc.openFull} />
        </div>

        {/* Preview window — shows the active version, click to expand */}
        <div className="mt-6">
          <PreviewWindow
            side={side}
            onExpand={() => setFullscreen(side)}
            expandHint={sc.expandHint}
            labelBefore={sc.labelBefore}
            labelAfter={sc.labelAfter}
          />
        </div>

        {/* Anonymisation / illustrative-example disclaimer (brand green) */}
        <div className="mt-6">
          <div className="flex max-w-2xl items-start gap-3 rounded-xl border border-forest-deep/20 bg-forest-deep/[0.05] px-4 py-3.5 dark:border-forest-light/25 dark:bg-forest-light/10">
            <Info
              size={16}
              className="mt-0.5 shrink-0 text-forest-deep dark:text-forest-light"
              aria-hidden
            />
            <p className="text-[13px] leading-relaxed text-forest-deep dark:text-forest-light">
              {sc.disclaimer}
            </p>
          </div>
        </div>

        {/* Measured SEO impact */}
        <SeoImpact key={`sc-seo-${lang}`} />

        {/* What the scores mean in real life — qualitative, no hard numbers */}
        <ImpactNarrative key={`sc-impact-${lang}`} />
      </div>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {fullscreen && (
          <Fullscreen
            side={fullscreen}
            onClose={() => setFullscreen(null)}
            setSide={setFullscreen}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* --------------------------- Segmented toggle -------------------------- */

function SegmentedToggle({
  side,
  setSide,
  viewLabel,
  labelBefore,
  labelAfter,
}: {
  side: Side;
  setSide: (s: Side) => void;
  viewLabel: string;
  labelBefore: string;
  labelAfter: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-400 dark:text-neutral-500">
        {viewLabel}
      </span>
      <div className="relative inline-flex rounded-full border border-neutral-200 bg-neutral-100 p-1 dark:border-white/10 dark:bg-white/[0.05]">
        {(["before", "after"] as Side[]).map((s) => {
          const isActive = side === s;
          return (
            <button
              key={s}
              type="button"
              onClick={() => setSide(s)}
              aria-pressed={isActive}
              className="relative z-10 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ease-editorial focus:outline-none"
            >
              {isActive && (
                <motion.span
                  layoutId="seg-active"
                  className="absolute inset-0 -z-10 rounded-full bg-forest-deep dark:bg-forest-light"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              <span
                className={
                  isActive
                    ? "text-white dark:text-ink"
                    : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
                }
              >
                {s === "before" ? labelBefore : labelAfter}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ----------------------------- Open button ----------------------------- */

function OpenButton({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors duration-300 ease-editorial hover:border-forest-deep hover:text-forest-deep dark:border-white/20 dark:text-neutral-100 dark:hover:border-forest-light dark:hover:text-forest-light"
    >
      <Maximize2 size={15} />
      {label}
    </button>
  );
}

/* ---------------------------- Preview window --------------------------- */

function PreviewWindow({
  side,
  onExpand,
  expandHint,
  labelBefore,
  labelAfter,
}: {
  side: Side;
  onExpand: () => void;
  expandHint: string;
  labelBefore: string;
  labelAfter: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-[0_30px_70px_-30px_rgba(16,37,18,0.25)] dark:border-white/10">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-white/10 dark:bg-ink-raised">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex flex-1 justify-center">
          <span className="truncate rounded-md bg-white px-3 py-1 text-[11px] text-neutral-400 dark:bg-white/5 dark:text-neutral-500">
            www.brandt-kollegen.de
          </span>
        </div>
        <div className="w-[52px]" aria-hidden />
      </div>

      {/* Viewport — click to open in full. A div (not a button) so the mock
          site's own buttons remain valid markup; the mock is rendered
          pointer-events-none here so any click expands to fullscreen. */}
      <div
        role="button"
        tabIndex={0}
        onClick={onExpand}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onExpand();
          }
        }}
        aria-label={expandHint}
        className="group relative block h-[440px] w-full cursor-pointer overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-forest-deep sm:h-[560px] dark:focus-visible:ring-forest-light"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={side}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EDITORIAL_EASE }}
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            {side === "before" ? <MockSiteBefore /> : <MockSiteAfter />}
          </motion.div>
        </AnimatePresence>

        {/* Active-version badge */}
        <span
          className={`pointer-events-none absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white ${
            side === "before" ? "bg-black/60 backdrop-blur" : "bg-forest-deep"
          }`}
        >
          {side === "before" ? labelBefore : labelAfter}
        </span>

        {/* Hover expand affordance */}
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 ease-editorial group-hover:bg-black/10 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-neutral-900 shadow-lg">
            <Maximize2 size={15} /> {expandHint}
          </span>
        </span>
      </div>
    </div>
  );
}

/* ----------------------------- SEO impact ------------------------------ */

function SeoImpact() {
  const { t, lang } = useLang();
  const seo = t.showcase.seo;

  return (
    <div className="mt-20 lg:mt-28">
      <FadeIn key={`seo-head-${lang}`} className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
          {seo.eyebrow}
        </p>
        <h3 className="mt-6 font-serif text-3xl leading-[1.08] tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
          {seo.title}
        </h3>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
          {seo.caption}
        </p>
      </FadeIn>

      {/* Score bars */}
      <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
        {seo.scores.map((s, i) => (
          <FadeIn key={`${s.label}-${lang}`} delay={i * 0.08}>
            <ScoreBar
              label={s.label}
              before={s.before}
              after={s.after}
              beforeLabel={seo.beforeLabel}
              afterLabel={seo.afterLabel}
            />
          </FadeIn>
        ))}
      </div>

      {/* Highlight chips */}
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {seo.highlights.map((h, i) => (
          <FadeIn key={`${h.label}-${lang}`} delay={i * 0.08}>
            <div className="rounded-2xl border border-neutral-200 px-6 py-6 dark:border-white/10">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
                {h.label}
              </p>
              <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-serif text-lg text-neutral-400 line-through decoration-neutral-300 dark:text-neutral-500 dark:decoration-white/20">
                  {h.before}
                </span>
                <span aria-hidden className="text-neutral-300 dark:text-neutral-600">
                  →
                </span>
                <span className="font-serif text-2xl tracking-tight text-forest-deep sm:text-3xl dark:text-forest-light">
                  {h.after}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <p className="mt-8 text-[12px] italic leading-relaxed text-neutral-400 dark:text-neutral-500">
        {seo.note}
      </p>
    </div>
  );
}

function ScoreBar({
  label,
  before,
  after,
  beforeLabel,
  afterLabel,
}: {
  label: string;
  before: number;
  after: number;
  beforeLabel: string;
  afterLabel: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
          {label}
        </span>
        <span className="font-serif text-sm text-neutral-400 dark:text-neutral-500">
          <span className="line-through decoration-neutral-300 dark:decoration-white/20">
            {before}
          </span>
          <span className="mx-1.5 text-neutral-300 dark:text-neutral-600" aria-hidden>
            →
          </span>
          <span className="text-base text-forest-deep dark:text-forest-light">
            {after}
          </span>
        </span>
      </div>

      <div className="relative mt-3 h-2 overflow-hidden rounded-full bg-neutral-100 dark:bg-white/10">
        {/* Before marker */}
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-neutral-300 dark:bg-white/20"
          style={{ width: `${before}%` }}
        />
        {/* After fill animates in over the before marker */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-forest-deep dark:bg-forest-light"
          initial={{ width: `${before}%` }}
          whileInView={{ width: `${after}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, ease: EDITORIAL_EASE }}
        />
      </div>

      <div className="mt-2 flex justify-between text-[10px] uppercase tracking-[0.18em] text-neutral-400">
        <span>{beforeLabel}</span>
        <span>{afterLabel}</span>
      </div>
    </div>
  );
}

/* --------------------------- Impact narrative -------------------------- */

const IMPACT_ICONS: LucideIcon[] = [TrendingUp, ShieldCheck, Magnet];

function ImpactNarrative() {
  const { t, lang } = useLang();
  const impact = t.showcase.impact;

  return (
    <div className="mt-24 lg:mt-32">
      <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-14 sm:px-10 lg:px-14 lg:py-20 dark:border-white/10 dark:bg-ink-surface">
        <FadeIn key={`impact-head-${lang}`} className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-deep dark:text-forest-light">
            {impact.eyebrow}
          </p>
          <h3 className="mt-6 font-serif text-3xl leading-[1.08] tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] dark:text-neutral-100">
            {impact.title}
            <br />
            <span className="font-normal italic text-neutral-700 dark:text-neutral-300">
              {impact.titleItalic}
            </span>
          </h3>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            {impact.body}
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 lg:mt-16 lg:grid-cols-3">
          {impact.points.map((point, i) => {
            const Icon = IMPACT_ICONS[i] ?? TrendingUp;
            return (
              <FadeIn
                key={`${point.title}-${lang}`}
                delay={i * 0.1}
                className="border-t border-neutral-200 pt-7 dark:border-white/10"
              >
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="text-forest-deep dark:text-forest-light"
                />
                <h4 className="mt-6 font-serif text-2xl leading-tight tracking-tight text-neutral-900 dark:text-neutral-100">
                  {point.title}
                </h4>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {point.body}
                </p>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn key={`impact-closing-${lang}`} delay={0.15}>
          <p className="mt-14 max-w-3xl border-l-2 border-forest-deep pl-6 font-serif text-xl italic leading-snug text-neutral-900 lg:mt-16 lg:text-2xl dark:border-forest-light dark:text-neutral-100">
            {impact.closing}
          </p>
        </FadeIn>
      </div>
    </div>
  );
}

/* ----------------------------- Fullscreen ------------------------------ */

function Fullscreen({
  side,
  onClose,
  setSide,
}: {
  side: Side;
  onClose: () => void;
  setSide: (s: Side) => void;
}) {
  const { t } = useLang();
  const sc = t.showcase;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: EDITORIAL_EASE }}
      className="fixed inset-0 z-[100] flex flex-col bg-neutral-900/90 backdrop-blur"
      role="dialog"
      aria-modal="true"
    >
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex gap-1 rounded-full bg-white/10 p-1 text-[12px]">
            {(["before", "after"] as Side[]).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSide(s)}
                className={`rounded-full px-3 py-1 transition-colors duration-300 ${
                  side === s
                    ? "bg-white text-neutral-900"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {s === "before" ? sc.labelBefore : sc.labelAfter}
              </button>
            ))}
          </div>
          <span className="hidden text-[12px] text-white/50 sm:inline">
            {sc.fullscreenHint}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-white/20"
        >
          {sc.close} <X size={16} />
        </button>
      </div>

      {/* Anonymisation badge (brand green) */}
      <div className="px-4 pb-2 sm:px-6">
        <p className="inline-flex items-start gap-2 rounded-lg bg-forest-light/15 px-3 py-1.5 text-[11px] leading-relaxed text-forest-light">
          <Info size={13} className="mt-px shrink-0" /> {sc.disclaimer}
        </p>
      </div>

      {/* Scrollable full mock site */}
      <div className="flex-1 overflow-y-auto px-2 pb-8 sm:px-6">
        <motion.div
          key={side}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
          className="mx-auto max-w-5xl overflow-hidden rounded-xl bg-white shadow-2xl"
        >
          {side === "before" ? <MockSiteBefore /> : <MockSiteAfter />}
        </motion.div>
      </div>
    </motion.div>
  );
}
