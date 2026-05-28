"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Dict, type Lang } from "./i18n";

const STORAGE_KEY = "verdex-lang";

type Ctx = {
  lang: Lang;
  setLang: (next: Lang) => void;
  t: Dict;
};

const LanguageContext = createContext<Ctx | null>(null);

function detectInitial(): Lang {
  // SSR-safe default — actual detection runs in effect.
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitial);

  // On mount: restore from localStorage, fall back to browser preference.
  useEffect(() => {
    let next: Lang | null = null;

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "de") {
      next = stored;
    } else if (window.navigator.language?.toLowerCase().startsWith("de")) {
      next = "de";
    }

    if (next && next !== lang) setLangState(next);
    // Run only once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep <html lang="..."> in sync for accessibility & SEO.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage might be disabled (private mode, quota) — non-fatal.
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within <LanguageProvider>.");
  }
  return ctx;
}
