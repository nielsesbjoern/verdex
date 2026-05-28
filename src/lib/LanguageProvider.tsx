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
  // Must match the server-rendered markup. Reading localStorage or browser
  // language during the first client render causes hydration mismatches.
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitial);

  // Restore the user's language only after hydration.
  useEffect(() => {
    let next: Lang | null = null;

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "de") {
        next = stored;
      }
    } catch {
      // localStorage might be disabled — browser preference can still apply.
    }

    if (!next && window.navigator.language?.toLowerCase().startsWith("de")) {
      next = "de";
    }

    if (next && next !== lang) setLangState(next);
    // Run only once after hydration.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep <html lang="..."> in sync.
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
