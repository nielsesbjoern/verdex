"use client";

import { useLang } from "@/lib/LanguageProvider";
import { FadeIn } from "./FadeIn";

export function WhyVerdex() {
  const { t, lang } = useLang();

  return (
    <section
      id="why"
      className="relative py-24 lg:py-32 border-t border-neutral-100"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn key={`why-intro-${lang}`} className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            {t.why.eyebrow}
          </p>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl text-neutral-900 leading-[1.05] tracking-tight">
            {t.why.titleA}{" "}
            <span className="italic font-normal text-neutral-700">
              {t.why.titleItalic}
            </span>
            {t.why.titleB ? <> {t.why.titleB}</> : null}
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-neutral-500 leading-relaxed">
            {t.why.intro}
          </p>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-16 lg:grid-cols-3">
          {t.why.pillars.map((p, i) => (
            <FadeIn
              key={`${p.title}-${lang}`}
              delay={i * 0.1}
              className="group border-t border-neutral-200 pt-8"
            >
              <p className="font-serif text-sm text-neutral-500 italic">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 font-serif text-2xl sm:text-[28px] text-neutral-900 leading-tight tracking-tight transition-colors duration-500 ease-editorial group-hover:text-forest-deep">
                {p.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">
                {p.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
