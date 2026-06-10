"use client";

import { useId } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { SUPPORTED_LANGS } from "@/lib/i18n";
import { useLang } from "@/lib/LanguageProvider";

type LanguageToggleProps = {
  className?: string;
  /** Color theme: light = for white backgrounds, dark = for forest-green bg. */
  theme?: "light" | "dark";
};

export function LanguageToggle({
  className,
  theme = "light",
}: LanguageToggleProps) {
  const { lang, setLang, t } = useLang();
  // Unique per-instance id so multiple toggles (navbar + footer) don't
  // share the same framer-motion layoutId and cause the underline to
  // animate between them.
  const groupId = useId();

  const isDark = theme === "dark";
  const inactive = isDark ? "text-white/60" : "text-neutral-500";
  const active = isDark ? "text-white" : "text-neutral-900";
  const hover = isDark ? "hover:text-white" : "hover:text-neutral-900";

  return (
    <LayoutGroup id={`lang-toggle-${groupId}`}>
      <div
        role="group"
        aria-label={t.a11y.langSwitch}
        className={`inline-flex items-center text-xs font-medium tracking-wider ${
          className ?? ""
        }`}
      >
        {SUPPORTED_LANGS.map((l, i) => {
          const isActive = l.code === lang;
          return (
            <span key={l.code} className="flex items-center">
              {i > 0 && (
                <span
                  aria-hidden
                  className={`mx-1 ${isDark ? "text-white/60" : "text-neutral-500"}`}
                >
                  /
                </span>
              )}
              <button
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={isActive}
                className={`relative px-1 py-1 transition-colors duration-300 ease-editorial ${
                  isActive ? active : `${inactive} ${hover}`
                }`}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId={`lang-underline-${groupId}`}
                    className={`absolute -bottom-0.5 left-1 right-1 h-px ${
                      isDark ? "bg-white" : "bg-forest-deep"
                    }`}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 34,
                    }}
                  />
                )}
              </button>
            </span>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
