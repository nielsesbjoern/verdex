"use client";

import { useLang } from "@/lib/LanguageProvider";
import { BackLink } from "./BackLink";
import { WhyVerdex } from "./WhyVerdex";
import { ProcessBand } from "./ProcessBand";

/** `/ablauf` page: how an engagement runs + why Verdex. */
export function ProcessPageContent() {
  const { t } = useLang();

  return (
    <div className="pt-40 lg:pt-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <BackLink href="/" label={t.nav.backHome} />
      </div>
      <ProcessBand />
      <WhyVerdex />
    </div>
  );
}
