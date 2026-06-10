"use client";

import Link from "next/link";
import { AMICUS_VISIBLE } from "@/lib/features";
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
      title: t.footer.columns.product,
      links: [
        { label: t.solutions.tabWebsites, href: "/#solutions" },
        { label: t.solutions.tabAuthority, href: "/#solutions" },
        ...(AMICUS_VISIBLE
          ? [{ label: t.solutions.tabAmicus, href: "/#solutions" }]
          : []),
      ],
    },
    {
      title: t.footer.columns.company,
      links: [
        { label: t.footer.links.about, href: "/about", internal: true },
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
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Logo variant="white" height={68} />
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-white/60">
              {t.footer.tagline}
            </p>
          </div>

          {/* Filled columns give the footer weight without visual clutter. */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => {
                    const className =
                      "text-sm text-white/75 hover:text-white transition-colors duration-300 ease-editorial";
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
        </div>

        {/* B2B exclusion — required for §13 BGB consumer-law shield */}
        <div className="mt-16 border-t border-white/10 pt-8 lg:mt-20">
          <p className="max-w-3xl text-sm leading-relaxed text-white/65">
            {t.footer.b2bDisclaimer}
          </p>
        </div>

        {/* Copyright + lang toggle */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
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
