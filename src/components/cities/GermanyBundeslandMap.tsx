"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GERMANY_PATH } from "@/lib/cities/germanyMap";
import { BUNDESLAENDER } from "@/lib/cities/bundeslaender";
import type { Bundesland } from "@/lib/cities/bundeslaender";
import { BUNDESLAND_PATHS } from "@/lib/cities/germanyBundeslandPaths";

type GermanyBundeslandMapProps = {
  highlightedBundeslaender?: Bundesland[];
  ariaLabel: string;
  className?: string;
};

export function GermanyBundeslandMap({
  highlightedBundeslaender = [],
  ariaLabel,
  className = "mx-auto w-full max-w-[320px] lg:max-w-[380px]",
}: GermanyBundeslandMapProps) {
  const reduce = useReducedMotion();
  const highlightedSet = new Set(highlightedBundeslaender);
  const hasHighlight = highlightedSet.size > 0;

  return (
    <svg
      viewBox="0 0 100 136"
      role="img"
      aria-label={ariaLabel}
      className={`text-forest-deep dark:text-forest-light ${className}`}
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
      {BUNDESLAENDER.map((bundesland) => {
        const highlighted = highlightedSet.has(bundesland);
        const dimmed = hasHighlight && !highlighted;

        return (
          <path
            key={bundesland}
            d={BUNDESLAND_PATHS[bundesland]}
            fill="currentColor"
            fillOpacity={highlighted ? 0.22 : dimmed ? 0.02 : 0.06}
            stroke="currentColor"
            strokeOpacity={highlighted ? 0.75 : dimmed ? 0.15 : 0.3}
            strokeWidth={highlighted ? 1 : 0.5}
            strokeLinejoin="round"
            className="transition-[fill-opacity,stroke-opacity] duration-500 ease-editorial"
          />
        );
      })}
      {!reduce &&
        highlightedBundeslaender.map((bundesland, i) => {
          const path = BUNDESLAND_PATHS[bundesland];
          const match = path.match(
            /-?\d+(?:\.\d+)?(?:\s+-?\d+(?:\.\d+)?){0,20}/,
          );
          if (!match) return null;
          const coords = match[0].trim().split(/\s+/).map(Number);
          const cx = coords[0];
          const cy = coords[1];
          if (cx === undefined || cy === undefined) return null;

          return (
            <motion.circle
              key={`pulse-${bundesland}`}
              cx={cx}
              cy={cy}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.6}
              initial={{ r: 2, opacity: 0.7 }}
              animate={{ r: 8, opacity: 0 }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.35,
                ease: "easeOut",
              }}
            />
          );
        })}
    </svg>
  );
}
