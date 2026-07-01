"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GERMANY_PATH } from "@/lib/cities/germanyMap";
import type { MapMarker } from "@/lib/cities/germanyMap";
import { areCityPagesPubliclyAccessible, hrefForCity } from "@/lib/cities/citiesMeta";

type GermanyCityMapProps = {
  markers: MapMarker[];
  highlightSlug?: string;
  /** Highlight multiple cities (e.g. Bundesland hub pages). */
  highlightSlugs?: string[];
  /** When true, live cities are clickable links. */
  interactive?: boolean;
  ariaLabel: string;
  className?: string;
};

export function GermanyCityMap({
  markers,
  highlightSlug,
  highlightSlugs,
  interactive = false,
  ariaLabel,
  className = "mx-auto w-full max-w-[320px] lg:max-w-[380px]",
}: GermanyCityMapProps) {
  const reduce = useReducedMotion();
  const highlightedSet = new Set(
    highlightSlugs ?? (highlightSlug ? [highlightSlug] : []),
  );
  const hasHighlight = highlightedSet.size > 0;
  const visibleMarkers = hasHighlight
    ? markers.filter((marker) => highlightedSet.has(marker.slug))
    : markers;

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
      {visibleMarkers.map((marker, i) => {
        const highlighted = hasHighlight || visibleMarkers.length === 1;
        const anchor = marker.anchor ?? "start";
        const labelX = anchor === "end" ? marker.x - 2.6 : marker.x + 2.6;

        const dot = (
          <>
            {!reduce && highlighted && (
              <motion.circle
                cx={marker.x}
                cy={marker.y}
                fill="none"
                stroke="currentColor"
                strokeWidth={0.6}
                initial={{ r: 2, opacity: 0.7 }}
                animate={{ r: 7, opacity: 0 }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            )}
            {!reduce && !hasHighlight && (
              <motion.circle
                cx={marker.x}
                cy={marker.y}
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
            <circle
              cx={marker.x}
              cy={marker.y}
              r={highlighted ? 2.2 : 1.4}
              fill="currentColor"
            />
            <text
              x={labelX}
              y={marker.y + 1}
              textAnchor={anchor}
              className="fill-neutral-500 dark:fill-neutral-400"
              style={{
                fontSize: highlighted ? "3.6px" : "3.2px",
                letterSpacing: "0.04em",
                fontWeight: highlighted ? 600 : 400,
              }}
            >
              {marker.name}
            </text>
          </>
        );

        if (interactive && marker.live && areCityPagesPubliclyAccessible()) {
          return (
            <a
              key={marker.slug}
              href={hrefForCity(marker.slug)}
              aria-label={marker.name}
            >
              <g className="cursor-pointer transition-opacity hover:opacity-80">
                {dot}
              </g>
            </a>
          );
        }

        return <g key={marker.slug}>{dot}</g>;
      })}
    </svg>
  );
}
