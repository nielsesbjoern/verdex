"use client";

import { motion } from "framer-motion";
import {
  Globe,
  KeyRound,
  Radar,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";

const EASE = [0.16, 1, 0.3, 1] as const;

const SHIELD_ICONS: LucideIcon[] = [Globe, Radar, KeyRound];
const LAYER_ICONS: LucideIcon[] = [Globe, ShieldCheck, Zap, KeyRound];

type HeadingProps = {
  title: string;
  as?: "h1" | "h2";
  id?: string;
};

function DetailHeading({ title, as = "h1", id }: HeadingProps) {
  const Tag = as;
  const className =
    as === "h1"
      ? "max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl lg:text-6xl"
      : "font-serif text-2xl leading-snug tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl";

  return (
    <Tag id={id} className={className}>
      {title}
    </Tag>
  );
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-deep dark:text-forest-light">
      {children}
    </p>
  );
}

function FeatureGrid({
  features,
  icons,
  cols,
}: {
  features: { title: string; description: string }[];
  icons: LucideIcon[];
  cols: 2 | 3 | 4;
}) {
  const gridCols =
    cols === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : cols === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2";

  return (
    <div className={`mt-10 grid grid-cols-1 gap-x-10 gap-y-12 ${gridCols}`}>
      {features.map((f, i) => {
        const Icon = icons[i] ?? ShieldCheck;
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
            <h3 className="mt-6 font-serif text-2xl leading-tight tracking-tight text-neutral-900 dark:text-neutral-100">
              {f.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
              {f.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

type Props = {
  headingLevel?: "h1" | "h2";
  titleId?: string;
};

export function AuthorityContent({ headingLevel = "h1", titleId }: Props) {
  const { t } = useLang();
  const a = t.solutions.authority;

  return (
    <>
      <DetailHeading title={a.title} as={headingLevel} id={titleId} />
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
        {a.body}
      </p>

      <div className="mt-16 max-w-2xl">
        <SectionEyebrow>{a.shieldEyebrow}</SectionEyebrow>
        <DetailHeading title={a.shieldTitle} as="h2" />
        <p className="mt-4 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
          {a.shieldBody}
        </p>
      </div>
      <FeatureGrid
        features={a.shieldFeatures}
        icons={SHIELD_ICONS}
        cols={3}
      />

      <div className="mt-20 max-w-2xl">
        <SectionEyebrow>{a.layersEyebrow}</SectionEyebrow>
      </div>
      <FeatureGrid features={a.layers} icons={LAYER_ICONS} cols={4} />

      <div className="mt-16 max-w-2xl border-l-2 border-forest-deep pl-6 dark:border-forest-light">
        <p className="font-serif text-xl italic leading-snug text-neutral-900 dark:text-neutral-100">
          {a.noteTitle}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
          {a.noteBody}
        </p>
      </div>
    </>
  );
}
