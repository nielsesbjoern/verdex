"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { useLang } from "@/lib/LanguageProvider";

const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

type CityFaqProps = {
  items: { q: string; a: string }[];
  cityName: string;
  titleOverride?: string;
};

export function CityFaq({ items, cityName, titleOverride }: CityFaqProps) {
  const { t } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  });

  return (
    <section className="mt-20 lg:mt-24">
      <FadeIn>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
          {t.cities.sections.faq}
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
          {titleOverride ?? t.cities.faqTitle.replace("{city}", cityName)}
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-10">
        <dl className="border-t border-neutral-200 dark:border-white/10">
          {items.map((item, i) => {
            const open = openIdx === i;
            return (
              <div
                key={item.q}
                className="border-b border-neutral-200 dark:border-white/10"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`city-faq-panel-${i}`}
                    className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-medium text-neutral-900 transition-colors duration-300 ease-editorial group-hover:text-forest-deep sm:text-base dark:text-neutral-100 dark:group-hover:text-forest-light">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={18}
                      aria-hidden
                      className={`shrink-0 text-neutral-400 transition-transform duration-500 ease-editorial ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </dt>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.dd
                      id={`city-faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EDITORIAL_EASE }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                        {item.a}
                      </p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </dl>
      </FadeIn>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />
    </section>
  );
}
