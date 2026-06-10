"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import { FadeIn } from "./FadeIn";
import nielsPortrait from "../../public/niels-optimized.jpg";

/**
 * Standalone founder / about page. Designed to live at `/about`, not as an
 * inline section, so it carries its own top-of-page chrome (back link,
 * eyebrow as page label, generous vertical padding to clear the fixed nav).
 */
export function About() {
  const { t, lang } = useLang();

  return (
    <article className="relative pt-40 lg:pt-48 pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn key={`about-back-${lang}`}>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-forest-deep transition-colors duration-300 ease-editorial"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 ease-editorial group-hover:-translate-x-1"
            />
            {t.about.backToHome}
          </Link>
        </FadeIn>

        <FadeIn key={`about-eyebrow-${lang}`} delay={0.05}>
          <p className="mt-12 lg:mt-16 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            {t.about.eyebrow}
          </p>
        </FadeIn>

        <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Portrait — left column */}
          <FadeIn
            key={`about-photo-${lang}`}
            delay={0.1}
            className="lg:col-span-5"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100">
              <Image
                src={nielsPortrait}
                alt={t.about.photoAlt}
                fill
                priority
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={68}
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Text — right column, all body as flowing prose */}
          <FadeIn
            key={`about-text-${lang}`}
            delay={0.15}
            className="lg:col-span-7"
          >
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-deep">
              {t.about.name}
            </p>

            <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl text-neutral-900 leading-[1.05] tracking-tight">
              {t.about.titleA}
              <br />
              <span className="italic font-normal text-neutral-700">
                {t.about.titleItalic}
              </span>
            </h1>

            <div className="mt-10 lg:mt-12 space-y-6 max-w-2xl">
              {t.about.paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-neutral-600">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </article>
  );
}
