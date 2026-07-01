"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageProvider";
import { ContactBriefing } from "./ContactBriefing";
import { FadeIn } from "./FadeIn";

export function Contact() {
  const { t, lang } = useLang();

  return (
    <section
      id="contact"
      className="relative py-32 lg:py-40 border-t border-neutral-100 dark:border-white/10"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        {/* Heading block — centered */}
        <div className="text-center">
          <FadeIn key={`contact-eyebrow-${lang}`}>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              {t.contact.eyebrow}
            </p>
          </FadeIn>

          <FadeIn key={`contact-title-${lang}`} delay={0.1}>
            <h2 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.02] tracking-tight dark:text-neutral-100">
              {t.contact.titleA}
              <br />
              <span className="italic font-normal text-neutral-700 dark:text-neutral-300">
                {t.contact.titleB}
              </span>
            </h2>
          </FadeIn>

          <FadeIn key={`contact-body-${lang}`} delay={0.2}>
            <p className="mx-auto mt-10 max-w-xl text-lg text-neutral-500 leading-relaxed dark:text-neutral-400">
              {t.contact.body}
            </p>
          </FadeIn>

          {/* Low-friction alternative to the briefing */}
          <FadeIn key={`contact-direct-${lang}`} delay={0.25}>
            <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
              {t.contact.directPrompt}{" "}
              <a
                href={`mailto:${t.contact.email}`}
                className="font-medium text-forest-deep underline underline-offset-4 transition-colors duration-300 ease-editorial hover:text-forest-deep/80 dark:text-forest-light dark:hover:text-forest-light/80"
              >
                {t.contact.email}
              </a>
            </p>
          </FadeIn>
        </div>

        {/* Interactive briefing */}
        <FadeIn delay={0.3} className="mt-20 lg:mt-24">
          <ContactBriefing />
        </FadeIn>

        {/* Pointer to the dedicated FAQ page */}
        <FadeIn key={`contact-faq-${lang}`} delay={0.35} className="mt-14 text-center">
          <Link
            href="/faq"
            className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors duration-300 ease-editorial hover:text-forest-deep dark:text-neutral-400 dark:hover:text-forest-light"
          >
            {t.contact.faqLink}
            <span
              aria-hidden
              className="block h-px w-6 bg-neutral-400 transition-all duration-500 ease-editorial group-hover:w-10 group-hover:bg-forest-deep dark:group-hover:bg-forest-light"
            />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
