"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import {
  SOLUTIONS,
  hrefForSlug,
  type SolutionId,
} from "./solutions/solutionsMeta";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

type SimpleLink = { label: string; href: string };

export function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const solLabel = (id: SolutionId) =>
    id === "websites"
      ? t.solutions.tabWebsites
      : id === "authority"
      ? t.solutions.tabAuthority
      : t.solutions.tabAmicus;

  // Sub-links inside the expandable "Solutions" group.
  const solutionLinks: SimpleLink[] = [
    ...SOLUTIONS.map((s) => ({
      label: solLabel(s.id),
      href: hrefForSlug(s.slug),
    })),
    { label: t.nav.allSolutions, href: "/leistungen" },
  ];

  // Flat links shown below the group.
  const flatLinks: SimpleLink[] = [
    { label: t.nav.references, href: "/referenzen" },
    { label: t.nav.process, href: "/ablauf" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.faq, href: "/faq" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click + Escape
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (
        menuRef.current?.contains(e.target as Node) ||
        buttonRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  const itemClass =
    "block px-5 py-2.5 text-sm text-neutral-700 hover:text-forest-deep hover:bg-neutral-50 transition-colors duration-200 ease-editorial";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-editorial ${
        scrolled
          ? "bg-forest-deep/95 backdrop-blur-md border-b border-white/10"
          : "bg-forest-deep border-b border-transparent"
      }`}
    >
      <div className="pl-6 pr-4 sm:pl-8 sm:pr-6 lg:pl-12 lg:pr-8">
        <nav className="flex h-28 lg:h-32 items-center justify-between">
          <Link
            href="/"
            aria-label="Verdex home"
            className="flex items-center -my-3"
          >
            <Logo variant="white" height={47} priority />
          </Link>

          <div className="relative flex items-center gap-2 sm:gap-3">
            <ThemeToggle theme="dark" />
            <LanguageToggle theme="dark" />
            <button
              ref={buttonRef}
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-haspopup="menu"
              aria-controls="main-nav-menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 text-white hover:text-white/70 transition-colors duration-300 ease-editorial"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            {open && (
              <div
                id="main-nav-menu"
                ref={menuRef}
                role="menu"
                className="absolute right-0 top-full mt-3 w-72 origin-top-right rounded-xl border border-neutral-200 bg-white py-3 shadow-lg shadow-neutral-900/[0.06] animate-fade-up"
              >
                <ul className="flex flex-col">
                  {/* Expandable "Solutions" group */}
                  <li role="none">
                    <button
                      type="button"
                      aria-expanded={groupOpen}
                      onClick={() => setGroupOpen((v) => !v)}
                      className="flex w-full items-center justify-between px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors duration-200 ease-editorial hover:bg-neutral-50"
                    >
                      {t.nav.solutions}
                      <ChevronDown
                        size={15}
                        className={`text-neutral-400 transition-transform duration-300 ease-editorial ${
                          groupOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {groupOpen && (
                      <ul className="mb-1 border-l border-neutral-200 pl-3 ml-5">
                        {solutionLinks.map((link) => (
                          <li key={link.href} role="none">
                            <Link
                              role="menuitem"
                              href={link.href}
                              onClick={closeMenu}
                              className={itemClass}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {flatLinks.map((link) => (
                    <li key={link.href} role="none">
                      <Link
                        role="menuitem"
                        href={link.href}
                        onClick={closeMenu}
                        className={itemClass}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-2 border-t border-neutral-200 px-3 pt-3 pb-1">
                  <a
                    href="/#contact"
                    onClick={closeMenu}
                    className="block w-full rounded-full bg-forest-deep px-5 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 ease-editorial hover:bg-forest-deep/90"
                  >
                    {t.nav.cta}
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
