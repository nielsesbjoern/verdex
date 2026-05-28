"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";
import { Logo } from "./Logo";

type FooterLink = {
  label: string;
  href: string;
  internal?: boolean;
  newTab?: boolean;
};

export function Footer() {
  const { t } = useLang();

  const columns: { title: string; links: FooterLink[] }[] = [
    {
      title: t.footer.columns.company,
      links: [
        { label: t.footer.links.about, href: "/about", internal: true, newTab: true },
        { label: t.footer.links.contact, href: "/#contact" },
      ],
    },
    {
      title: t.footer.columns.legal,
      links: [
        { label: t.footer.links.imprint, href: "/impressum", internal: true },
        { label: t.footer.links.privacy, href: "/datenschutz", internal: true },
      ],
    },
  ];

  return (
    <footer className="bg-forest-deep text-white">
      {/* Brand plate — outside the centered max-w container so it sits
          flush against the viewport edge on any screen size. */}
      <div className="pt-12 lg:pt-16 pl-2 sm:pl-3 lg:pl-4">
        <Logo variant="white" height={115} />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-12 lg:pb-14">
        <p className="mt-8 max-w-md text-[15px] leading-relaxed text-white/60">
          {t.footer.tagline}
        </p>

        {/* Column grid */}
        <div className="mt-20 grid grid-cols-2 gap-10 lg:grid-cols-4">
          <div className="hidden lg:block" />
          <div className="hidden lg:block" />
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-medium uppercase tracking-[0.22em] text-white/50">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => {
                  const className =
                    "text-sm text-white/80 hover:text-white transition-colors duration-300 ease-editorial";
                  const newTabProps = link.newTab
                    ? { target: "_blank", rel: "noopener noreferrer" as const }
                    : {};
                  return (
                    <li key={link.label}>
                      {link.internal ? (
                        <Link
                          href={link.href}
                          className={className}
                          {...newTabProps}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className={className}
                          {...newTabProps}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* B2B exclusion — required for §13 BGB consumer-law shield */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-sm sm:text-[15px] leading-relaxed text-white/80">
            {t.footer.b2bDisclaimer}
          </p>
        </div>

        {/* Copyright + lang toggle */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Verdex. {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <p className="text-xs text-white/40">{t.footer.madeWith}</p>
            <LanguageToggle theme="dark" />
          </div>
        </div>
      </div>
    </footer>
  );
}
