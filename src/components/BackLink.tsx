"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "./FadeIn";

/** Consistent "back" affordance for the top of every sub-page. */
export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <FadeIn>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 ease-editorial hover:text-forest-deep dark:text-neutral-400 dark:hover:text-forest-light"
      >
        <ArrowLeft
          size={14}
          className="transition-transform duration-300 ease-editorial group-hover:-translate-x-1"
        />
        {label}
      </Link>
    </FadeIn>
  );
}
