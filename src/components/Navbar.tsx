"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";

export function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Use absolute hashes (/#...) so the links also work from sub-pages
  // like /impressum and /datenschutz — they navigate home and scroll.
  const navLinks = [
    { id: "solutions", label: t.nav.solutions, href: "/#solutions" },
    { id: "about", label: t.nav.about, href: "/about" },
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-editorial ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-neutral-200/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="pl-6 pr-4 sm:pl-8 sm:pr-6 lg:pl-12 lg:pr-8">
        <nav className="flex h-28 lg:h-32 items-center justify-between">
          <Link
            href="/"
            aria-label="Verdex home"
            className="flex items-center -my-3"
          >
            <Logo height={47} priority />
          </Link>

          <div className="relative flex items-center gap-4">
            <LanguageToggle />
            <button
              ref={buttonRef}
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-haspopup="menu"
              aria-controls="main-nav-menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 text-neutral-900 hover:text-forest-deep transition-colors duration-300 ease-editorial"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            {open && (
              <div
                id="main-nav-menu"
                ref={menuRef}
                role="menu"
                className="absolute right-0 top-full mt-3 w-64 origin-top-right rounded-xl border border-neutral-200 bg-white shadow-lg shadow-neutral-900/[0.06] py-3 animate-fade-up"
              >
                <ul className="flex flex-col">
                  {navLinks.map((link, i) => (
                    <li key={`${link.label}-${i}`} role="none">
                      <a
                        role="menuitem"
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block px-5 py-2.5 text-sm text-neutral-700 hover:text-forest-deep hover:bg-neutral-50 transition-colors duration-200 ease-editorial"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-2 border-t border-neutral-200 px-3 pt-3 pb-1">
                  <a
                    href="/#contact"
                    onClick={() => setOpen(false)}
                    className="block w-full text-center text-sm font-medium text-white bg-forest-deep px-5 py-2.5 rounded-full hover:bg-forest-deep/90 transition-all duration-300 ease-editorial"
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
