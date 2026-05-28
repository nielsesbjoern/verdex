"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";

const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const { t, lang } = useLang();

  return (
    <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <motion.h1
            key={`title-${lang}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: EDITORIAL_EASE,
            }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] text-neutral-900 leading-[1.02] tracking-tight"
          >
            {t.hero.titleLine1}
            <br />
            <span className="italic font-normal text-neutral-700">
              {t.hero.titleItalic}
            </span>{" "}
            {t.hero.titleLine2Rest}
            <br />
            {t.hero.titleLine3}
          </motion.h1>

          <motion.p
            key={`subtitle-${lang}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: EDITORIAL_EASE,
            }}
            className="mt-10 max-w-2xl text-lg sm:text-xl text-neutral-500 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: EDITORIAL_EASE,
            }}
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-forest-deep px-7 py-3.5 text-sm font-medium text-white hover:bg-forest-deep/90 transition-all duration-500 ease-editorial"
            >
              {t.hero.ctaPrimary}
              <ArrowRight
                size={16}
                className="transition-transform duration-500 ease-editorial group-hover:translate-x-1"
              />
            </a>
            <a
              href="#solutions"
              className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-forest-deep transition-colors duration-300 ease-editorial"
            >
              {t.hero.ctaSecondary}
              <span
                aria-hidden
                className="block h-px w-6 bg-neutral-900 transition-all duration-500 ease-editorial group-hover:w-10 group-hover:bg-forest-deep"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
