"use client";

import { useLang } from "@/lib/LanguageProvider";
import { RegionsDirectory } from "@/components/cities/RegionsDirectory";
import { BackLink } from "./BackLink";
import { GermanyReach } from "./GermanyReach";

/** Full `/deutschlandweit` page: remote claim, map, facts and city directory. */
export function GermanyReachPageContent() {
  const { t } = useLang();

  return (
    <div className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="pt-40 lg:pt-48">
          <BackLink href="/" label={t.nav.backHome} />
        </div>
      </div>
      <GermanyReach />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <RegionsDirectory />
      </div>
    </div>
  );
}
