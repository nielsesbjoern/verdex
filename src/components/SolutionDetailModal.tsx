"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  EyeOff,
  Gauge,
  Scale,
  Sparkles,
  Swords,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import { useAmicusAudit } from "@/lib/AmicusAuditContext";

export type SolutionId = "websites" | "amicus";

type Props = {
  solutionId: SolutionId | null;
  onClose: () => void;
};

const EASE = [0.16, 1, 0.3, 1] as const;

const WEBSITE_ICONS: LucideIcon[] = [Sparkles, Gauge, Wrench];
const AMICUS_ICONS: LucideIcon[] = [Scale, Swords, EyeOff, CalendarClock];

export function SolutionDetailModal({ solutionId, onClose }: Props) {
  const { t, lang } = useLang();
  const { open: openAudit } = useAmicusAudit();
  const isOpen = solutionId !== null;

  // Lock body scroll + close on Escape while open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  function handleCtaClick() {
    onClose();
    // Wait a tick for the modal close + body-scroll restore, then jump to contact
    requestAnimationFrame(() => {
      window.location.hash = "#contact";
    });
  }

  function handleRunAudit() {
    onClose();
    // Let the deep-dive modal finish closing (body-scroll restore) before
    // the audit modal takes over — otherwise the scroll-lock effects fight.
    requestAnimationFrame(() => openAudit());
  }

  return (
    <AnimatePresence>
      {isOpen && solutionId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="fixed inset-0 z-[100] bg-white text-neutral-900"
          role="dialog"
          aria-modal="true"
        >
          <div className="h-full overflow-y-auto">
            <div className="mx-auto max-w-5xl px-6 lg:px-10 py-10 lg:py-14">
              {/* Header bar */}
              <div className="flex items-start justify-between border-b border-neutral-100 pb-8">
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  {solutionId === "websites"
                    ? t.solutions.cards.eyebrowWebsites
                    : t.solutions.cards.eyebrowAmicus}
                </p>
                <button
                  aria-label={t.solutions.deepDive.closeLabel}
                  onClick={onClose}
                  className="p-1 text-neutral-500 hover:text-forest-deep transition-colors duration-300 ease-editorial"
                >
                  <X size={22} strokeWidth={1.4} />
                </button>
              </div>

              {/* Body */}
              <motion.div
                key={`${solutionId}-${lang}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
                className="pt-12 lg:pt-16"
              >
                {solutionId === "websites" ? (
                  <WebsitesContent />
                ) : (
                  <AmicusContent />
                )}
              </motion.div>

              {/* CTA footer */}
              <div className="mt-16 lg:mt-20 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-neutral-100 pt-10">
                {solutionId === "amicus" ? (
                  <>
                    <button
                      onClick={handleRunAudit}
                      className="group inline-flex items-center gap-3 rounded-full bg-forest-deep px-7 py-3.5 text-sm font-medium text-white hover:bg-forest-deep/90 transition-all duration-500 ease-editorial"
                    >
                      {t.solutions.deepDive.runAuditCta}
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-500 ease-editorial group-hover:translate-x-1"
                      />
                    </button>
                    <button
                      onClick={handleCtaClick}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-forest-deep transition-colors duration-300 ease-editorial"
                    >
                      {t.solutions.deepDive.primaryCta}
                      <span
                        aria-hidden
                        className="block h-px w-6 bg-neutral-900 transition-all duration-500 ease-editorial group-hover:w-10 group-hover:bg-forest-deep"
                      />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleCtaClick}
                    className="group inline-flex items-center gap-3 rounded-full bg-forest-deep px-7 py-3.5 text-sm font-medium text-white hover:bg-forest-deep/90 transition-all duration-500 ease-editorial"
                  >
                    {t.solutions.deepDive.primaryCta}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-500 ease-editorial group-hover:translate-x-1"
                    />
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="ml-auto text-sm text-neutral-500 hover:text-forest-deep transition-colors duration-300 ease-editorial"
                >
                  {t.solutions.deepDive.backToOverview}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------------------------------------------------- */

function WebsitesContent() {
  const { t } = useLang();
  return (
    <>
      <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-neutral-900 leading-[1.05] tracking-tight max-w-3xl">
        {t.solutions.websites.title}
      </h2>
      <p className="mt-8 max-w-2xl text-lg text-neutral-500 leading-relaxed">
        {t.solutions.websites.body}
      </p>

      <FeatureGrid
        features={t.solutions.websites.features}
        icons={WEBSITE_ICONS}
        cols={3}
      />
    </>
  );
}

function AmicusContent() {
  const { t } = useLang();
  return (
    <>
      <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-neutral-900 leading-[1.05] tracking-tight max-w-3xl">
        {t.solutions.amicus.title}
      </h2>
      <p className="mt-8 max-w-2xl text-lg text-neutral-500 leading-relaxed">
        {t.solutions.amicus.body}
      </p>

      <div className="mt-12 max-w-2xl border-l-2 border-forest-deep pl-6">
        <p className="font-serif text-xl italic text-neutral-900 leading-snug">
          {t.solutions.amicus.noteTitle}
        </p>
        <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
          {t.solutions.amicus.noteBody}
        </p>
      </div>

      <FeatureGrid
        features={t.solutions.amicus.features}
        icons={AMICUS_ICONS}
        cols={2}
      />
    </>
  );
}

/* ---------------------------------------------------------- */

function FeatureGrid({
  features,
  icons,
  cols,
}: {
  features: { title: string; description: string }[];
  icons: LucideIcon[];
  cols: 2 | 3;
}) {
  const gridCols =
    cols === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";

  return (
    <div className={`mt-16 grid grid-cols-1 gap-x-10 gap-y-12 ${gridCols}`}>
      {features.map((f, i) => {
        const Icon = icons[i] ?? Sparkles;
        return (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            className="border-t border-neutral-200 pt-6"
          >
            <Icon size={22} strokeWidth={1.5} className="text-forest-deep" />
            <h4 className="mt-6 font-serif text-2xl text-neutral-900 leading-tight tracking-tight">
              {f.title}
            </h4>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
              {f.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
