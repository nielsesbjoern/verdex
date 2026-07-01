"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GERMANY_PATH } from "@/lib/cities/germanyMap";
import { useLang } from "@/lib/LanguageProvider";
import { FadeIn } from "./FadeIn";

/**
 * Compact "remote, nationwide" band: a stylised low-poly Germany outline
 * with pulsing city markers next to a short claim and three hard facts.
 * Deliberately slim — communicates reach without adding a full section.
 */

/*
 * Germany outline — shared with city pages via `@/lib/cities/germanyMap`.
 */

/* City markers at their true coordinates (same projection as the outline). */
const CITIES = [
  { name: "Hamburg", x: 44.9, y: 26.2, anchor: "start" },
  { name: "Berlin", x: 82.1, y: 44.0, anchor: "end" },
  { name: "Köln", x: 11.9, y: 71.4, anchor: "start" },
  { name: "Leipzig", x: 70.9, y: 64.5, anchor: "start" },
  { name: "Frankfurt", x: 30.6, y: 85.8, anchor: "start" },
  { name: "Stuttgart", x: 36.1, y: 108.8, anchor: "start" },
  { name: "München", x: 62.3, y: 119.9, anchor: "start" },
] as const;

export function GermanyReach() {
  const { t, lang } = useLang();
  const reduce = useReducedMotion();

  return (
    <section className="relative border-t border-neutral-100 py-20 lg:py-24 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Map */}
          <FadeIn className="order-2 lg:order-1 lg:col-span-5">
            <svg
              viewBox="0 0 100 136"
              role="img"
              aria-label={t.reach.eyebrow}
              className="mx-auto w-full max-w-[320px] text-forest-deep lg:max-w-[380px] dark:text-forest-light"
            >
              <path
                d={GERMANY_PATH}
                fill="currentColor"
                fillOpacity={0.05}
                stroke="currentColor"
                strokeOpacity={0.45}
                strokeWidth={0.8}
                strokeLinejoin="round"
              />
              {CITIES.map((c, i) => (
                <g key={c.name}>
                  {!reduce && (
                    <motion.circle
                      cx={c.x}
                      cy={c.y}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={0.5}
                      initial={{ r: 1.6, opacity: 0.6 }}
                      animate={{ r: 5, opacity: 0 }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: i * 0.35,
                        ease: "easeOut",
                      }}
                    />
                  )}
                  <circle cx={c.x} cy={c.y} r={1.4} fill="currentColor" />
                  <text
                    x={c.anchor === "end" ? c.x - 2.6 : c.x + 2.6}
                    y={c.y + 1}
                    textAnchor={c.anchor}
                    className="fill-neutral-500 dark:fill-neutral-400"
                    style={{ fontSize: "3.2px", letterSpacing: "0.04em" }}
                  >
                    {c.name}
                  </text>
                </g>
              ))}
            </svg>
            <p className="mx-auto mt-4 max-w-[320px] text-center text-[11px] leading-relaxed text-neutral-400 lg:max-w-[380px] dark:text-neutral-500">
              {t.reach.mapNote}
            </p>
          </FadeIn>

          {/* Copy + facts */}
          <FadeIn
            key={`reach-copy-${lang}`}
            delay={0.1}
            className="order-1 lg:order-2 lg:col-span-7"
          >
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              {t.reach.eyebrow}
            </p>
            <h2 className="mt-6 font-serif text-3xl leading-[1.08] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-100">
              {t.reach.title}{" "}
              <span className="font-normal italic text-neutral-700 dark:text-neutral-300">
                {t.reach.titleItalic}
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
              {t.reach.body}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {t.reach.facts.map((f) => (
                <div
                  key={f.label}
                  className="border-t border-neutral-200 pt-5 dark:border-white/10"
                >
                  <p className="font-serif text-2xl tracking-tight text-forest-deep sm:text-3xl dark:text-forest-light">
                    {f.value}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {f.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
