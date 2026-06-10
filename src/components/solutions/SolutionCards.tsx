"use client";

import { useRef } from "react";
import Link from "next/link";
import { useLang } from "@/lib/LanguageProvider";
import { FadeIn } from "@/components/FadeIn";
import {
  SOLUTIONS,
  hrefForSlug,
  type SolutionId,
  type SolutionVariant,
} from "./solutionsMeta";

/**
 * The three solution cards rendered as links to their detail pages.
 * Shared by the home preview and the `/leistungen` overview.
 */
export function SolutionCards({
  headingLevel = "h3",
}: {
  headingLevel?: "h2" | "h3";
}) {
  const { t } = useLang();

  const copy: Record<
    SolutionId,
    { eyebrow: string; title: string; description: string }
  > = {
    websites: {
      eyebrow: t.solutions.cards.eyebrowWebsites,
      title: t.solutions.tabWebsites,
      description: t.solutions.cards.websitesShort,
    },
    authority: {
      eyebrow: t.solutions.cards.eyebrowAuthority,
      title: t.solutions.tabAuthority,
      description: t.solutions.cards.authorityShort,
    },
    amicus: {
      eyebrow: t.solutions.cards.eyebrowAmicus,
      title: t.solutions.tabAmicus,
      description: t.solutions.cards.amicusShort,
    },
  };

  return (
    <div
      className={`grid grid-cols-1 gap-6 lg:gap-10 ${
        SOLUTIONS.length === 3
          ? "md:grid-cols-2 lg:grid-cols-3"
          : "md:grid-cols-2"
      }`}
    >
      {SOLUTIONS.map((s, i) => (
        <FadeIn key={s.id} delay={0.1 + i * 0.1}>
          <SolutionCard
            href={hrefForSlug(s.slug)}
            variant={s.variant}
            eyebrow={copy[s.id].eyebrow}
            title={copy[s.id].title}
            description={copy[s.id].description}
            ctaLabel={t.solutions.cards.learnMore}
            headingLevel={headingLevel}
          />
        </FadeIn>
      ))}
    </div>
  );
}

type CardStyle = {
  container: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  line: string;
  /** Radial-gradient colour for the cursor spotlight overlay. */
  spot: string;
};

const CARD_STYLES: Record<SolutionVariant, CardStyle> = {
  light: {
    container:
      "bg-white border-2 border-forest-deep/15 hover:border-forest-deep hover:shadow-[0_30px_70px_-20px_rgba(16,37,18,0.22)] focus-visible:border-forest-deep focus-visible:ring-2 focus-visible:ring-forest-deep/30 dark:bg-ink-surface dark:border-white/10 dark:hover:border-forest-light dark:focus-visible:border-forest-light dark:focus-visible:ring-forest-light/30",
    eyebrow: "text-forest-deep dark:text-forest-light",
    title: "text-neutral-900 dark:text-neutral-100",
    description: "text-neutral-500 dark:text-neutral-400",
    cta: "text-neutral-900 group-hover:text-forest-deep dark:text-neutral-100 dark:group-hover:text-forest-light",
    line: "bg-neutral-900 group-hover:bg-forest-deep dark:bg-neutral-100 dark:group-hover:bg-forest-light",
    spot: "rgba(16,37,18,0.10)",
  },
  gray: {
    container:
      "bg-neutral-100 border-2 border-transparent hover:border-forest-deep hover:shadow-[0_30px_70px_-20px_rgba(16,37,18,0.22)] focus-visible:border-forest-deep focus-visible:ring-2 focus-visible:ring-forest-deep/30 dark:bg-white/[0.05] dark:hover:border-forest-light dark:focus-visible:border-forest-light dark:focus-visible:ring-forest-light/30",
    eyebrow: "text-forest-deep dark:text-forest-light",
    title: "text-neutral-900 dark:text-neutral-100",
    description: "text-neutral-500 dark:text-neutral-400",
    cta: "text-neutral-900 group-hover:text-forest-deep dark:text-neutral-100 dark:group-hover:text-forest-light",
    line: "bg-neutral-900 group-hover:bg-forest-deep dark:bg-neutral-100 dark:group-hover:bg-forest-light",
    spot: "rgba(16,37,18,0.10)",
  },
  dark: {
    container:
      "bg-forest-deep text-white border border-forest-deep hover:shadow-[0_40px_80px_-25px_rgba(16,37,18,0.55)] focus-visible:ring-2 focus-visible:ring-white/40",
    eyebrow: "text-white/70",
    title: "text-white",
    description: "text-white/70",
    cta: "text-white/90 group-hover:text-white",
    line: "bg-white/60 group-hover:bg-white",
    spot: "rgba(255,255,255,0.12)",
  },
};

function SolutionCard({
  href,
  eyebrow,
  title,
  description,
  ctaLabel,
  variant,
  headingLevel,
}: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  variant: SolutionVariant;
  headingLevel: "h2" | "h3";
}) {
  const styles = CARD_STYLES[variant];
  const ref = useRef<HTMLAnchorElement>(null);
  const HeadingTag = headingLevel;

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      className={`group relative block h-full overflow-hidden rounded-3xl px-8 py-12 text-left transition-all duration-500 ease-editorial hover:-translate-y-1 focus:outline-none sm:px-10 sm:py-14 lg:px-12 lg:py-14 ${styles.container}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-editorial group-hover:opacity-100"
        style={{
          background: `radial-gradient(440px circle at var(--mx, 50%) var(--my, 50%), ${styles.spot}, transparent 60%)`,
        }}
      />

      <span className="relative z-10 block">
        <span
          className={`block text-xs font-medium uppercase tracking-[0.22em] ${styles.eyebrow}`}
        >
          {eyebrow}
        </span>

        <HeadingTag
          className={`mt-14 min-h-[4.5rem] font-serif text-3xl leading-[1.04] tracking-tight sm:mt-16 sm:min-h-[5.5rem] sm:text-4xl lg:mt-20 lg:min-h-[6.5rem] lg:text-5xl ${styles.title}`}
        >
          {title}
        </HeadingTag>

        <span
          className={`mt-6 block max-w-md text-base leading-relaxed lg:text-[17px] ${styles.description}`}
        >
          {description}
        </span>

        <span
          className={`mt-12 inline-flex items-center gap-3 text-sm font-medium transition-colors duration-300 ease-editorial lg:mt-14 ${styles.cta}`}
        >
          {ctaLabel}
          <span
            aria-hidden
            className={`block h-px w-8 transition-all duration-500 ease-editorial group-hover:w-16 ${styles.line}`}
          />
        </span>
      </span>
    </Link>
  );
}
