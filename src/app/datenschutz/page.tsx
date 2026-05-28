"use client";

import { LegalDocument } from "@/components/LegalDocument";
import { useLang } from "@/lib/LanguageProvider";

export default function PrivacyPage() {
  const { t, lang } = useLang();
  return (
    <LegalDocument
      key={lang}
      eyebrow={t.legal.privacy.eyebrow}
      title={t.legal.privacy.title}
      intro={t.legal.privacy.intro}
      sections={t.legal.privacy.sections}
    />
  );
}
