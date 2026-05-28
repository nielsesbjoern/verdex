"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageProvider";

const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

type LegalDocumentProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  sections: {
    heading: string;
    content: (string | string[])[];
  }[];
};

/**
 * Editorial layout for legal pages (Impressum, Datenschutz).
 *
 * `content` items are rendered in order:
 *   - `string`  → `<p>` (with \n → <br/>)
 *   - `string[]` → `<ul>` with one `<li>` per item
 */
export function LegalDocument({
  eyebrow,
  title,
  intro,
  sections,
}: LegalDocumentProps) {
  const { t } = useLang();

  return (
    <article className="pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EDITORIAL_EASE }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            {eyebrow}
          </p>
          <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] tracking-tight">
            {title}
          </h1>
        </motion.div>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: EDITORIAL_EASE,
            }}
            className="mt-10 text-lg text-neutral-500 leading-relaxed"
          >
            {intro}
          </motion.p>
        )}

        <div className="mt-16 space-y-14">
          {sections.map((section, idx) => (
            <motion.section
              key={section.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: idx === 0 ? 0 : 0.05,
                ease: EDITORIAL_EASE,
              }}
              className="border-t border-neutral-200 pt-8"
            >
              <h2 className="font-serif text-2xl sm:text-3xl text-neutral-900 leading-tight tracking-tight">
                {section.heading}
              </h2>
              <div className="mt-6 space-y-5 text-[15px] sm:text-base leading-relaxed text-neutral-700">
                {section.content.map((item, i) =>
                  typeof item === "string" ? (
                    <Paragraph key={i} text={item} />
                  ) : (
                    <ul
                      key={i}
                      className="list-disc list-outside pl-5 space-y-2 marker:text-neutral-400"
                    >
                      {item.map((bullet, bi) => (
                        <li key={bi}>{bullet}</li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            </motion.section>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-neutral-200">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-forest-deep transition-colors duration-300 ease-editorial"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-500 ease-editorial group-hover:-translate-x-1"
            />
            {t.legal.backToHome}
          </Link>
        </div>
      </div>
    </article>
  );
}

/**
 * Renders a paragraph with line-break support: `\n` becomes a `<br/>`.
 */
function Paragraph({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <p>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
}
