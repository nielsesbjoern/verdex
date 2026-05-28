"use client";

import { LegalDocument } from "@/components/LegalDocument";
import { useLang } from "@/lib/LanguageProvider";

export default function ImprintPage() {
  const { t, lang } = useLang();
  return (
    <LegalDocument
      key={lang}
      eyebrow={t.legal.imprint.eyebrow}
      title={t.legal.imprint.title}
      sections={t.legal.imprint.sections}
    />
  );
}
