"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/ThemeProvider";
import { useLang } from "@/lib/LanguageProvider";

type ThemeToggleProps = {
  /** Color theme of the surrounding chrome (navbar is forest-green = "dark"). */
  theme?: "light" | "dark";
  className?: string;
};

export function ThemeToggle({
  theme = "dark",
  className,
}: ThemeToggleProps) {
  const { theme: current, toggle } = useTheme();
  const { lang } = useLang();
  const [mounted, setMounted] = useState(false);

  // Icon depends on resolved theme, which is only known after hydration.
  useEffect(() => setMounted(true), []);

  const onDarkChrome = theme === "dark";
  const color = onDarkChrome
    ? "text-white hover:text-white/70"
    : "text-neutral-900 hover:text-forest-deep dark:text-neutral-200 dark:hover:text-forest-light";

  const label =
    lang === "de"
      ? current === "dark"
        ? "Helles Design aktivieren"
        : "Dunkles Design aktivieren"
      : current === "dark"
      ? "Switch to light mode"
      : "Switch to dark mode";

  const showMoon = mounted ? current === "light" : false;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 ease-editorial ${color} ${
        className ?? ""
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={showMoon ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {showMoon ? <Moon size={18} /> : <Sun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
