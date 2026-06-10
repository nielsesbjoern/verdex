"use client";

import { useLang } from "@/lib/LanguageProvider";
import { BackLink } from "./BackLink";
import { Faq } from "./Faq";

/** `/faq` page: the standalone FAQ with the FAQPage structured data. */
export function FaqPageContent() {
  const { t } = useLang();

  return (
    <article className="pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <BackLink href="/" label={t.nav.backHome} />
        <Faq />
      </div>
    </article>
  );
}
