"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import type {
  BriefGoalId,
  BriefLegalAreaId,
  BriefTimelineId,
  BriefWebsiteStatusId,
} from "@/lib/i18n";
import { Magnetic } from "./Magnetic";
import { buildBriefingMailBody, buildBriefingMailSubject } from "@/lib/briefingMail";

const TOTAL_STEPS = 6;
const EASE = [0.16, 1, 0.3, 1] as const;
const STEP_MS = 0.18;

type BriefingState = {
  firm: string;
  areas: BriefLegalAreaId[];
  areaOther: string;
  websiteStatus?: BriefWebsiteStatusId;
  goal?: BriefGoalId;
  timeline?: BriefTimelineId;
  name: string;
  email: string;
  note: string;
};

const INITIAL_STATE: BriefingState = {
  firm: "",
  areas: [],
  areaOther: "",
  name: "",
  email: "",
  note: "",
};

export function ContactBriefing() {
  const { t, lang } = useLang();
  const prefersReducedMotion = useReducedMotion();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [state, setState] = useState<BriefingState>(INITIAL_STATE);
  const [consent, setConsent] = useState(false);

  const B = t.contact.briefing;
  const inputClasses =
    "mt-3 block w-full bg-transparent border-0 border-b border-neutral-300 px-0 py-2.5 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-forest-deep transition-colors duration-150 ease-out dark:border-white/15 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:border-forest-light";
  const card =
    "rounded-2xl border border-neutral-200 px-6 py-5 text-base font-medium transition-[color,background-color,border-color,transform] duration-150 ease-out text-left active:scale-[0.98] dark:border-white/10";
  const cardActive =
    "border-forest-deep bg-forest-deep text-white dark:border-forest-light dark:bg-forest-light dark:text-ink";
  const cardIdle = "hover:border-forest-deep/40 dark:hover:border-forest-light/40";

  const stepVariants = prefersReducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: (d: number) => ({ opacity: 0, x: d * 20 }),
        animate: { opacity: 1, x: 0 },
        exit: (d: number) => ({ opacity: 0, x: d * -16 }),
      };

  function goTo(next: number) {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  }

  function advance() {
    goTo(Math.min(TOTAL_STEPS, step + 1));
  }

  function selectAndAdvance(patch: Partial<BriefingState>) {
    setState((v) => ({ ...v, ...patch }));
    advance();
  }

  function labelFor<T extends string>(
    options: { id: T; label: string }[],
    id: T | undefined,
    other?: string
  ) {
    if (!id) return "—";
    if (id === "other" && other) return other;
    return options.find((o) => o.id === id)?.label ?? "—";
  }

  function areaLabelsList(
    options: { id: BriefLegalAreaId; label: string }[],
    ids: BriefLegalAreaId[],
    other?: string
  ) {
    if (ids.length === 0) return [];
    const labels = ids
      .filter((id) => id !== "other")
      .map((id) => options.find((o) => o.id === id)?.label)
      .filter(Boolean) as string[];
    if (ids.includes("other")) {
      labels.push(other?.trim() || options.find((o) => o.id === "other")?.label || "—");
    }
    return labels;
  }

  function labelsForAreas(
    options: { id: BriefLegalAreaId; label: string }[],
    ids: BriefLegalAreaId[],
    other?: string
  ) {
    if (ids.length === 0) return "—";
    const labels = ids
      .filter((id) => id !== "other")
      .map((id) => options.find((o) => o.id === id)?.label)
      .filter(Boolean) as string[];
    if (ids.includes("other")) {
      labels.push(other?.trim() || options.find((o) => o.id === "other")?.label || "—");
    }
    return labels.join(", ");
  }

  function toggleArea(id: BriefLegalAreaId) {
    setState((v) => {
      const selected = v.areas.includes(id);
      const areas = selected ? v.areas.filter((a) => a !== id) : [...v.areas, id];
      const areaOther = id === "other" && selected ? "" : v.areaOther;
      return { ...v, areas, areaOther };
    });
  }

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!consent || !state.name.trim() || !state.email.trim()) return;

    const areas = areaLabelsList(B.steps.area.options, state.areas, state.areaOther);
    const websiteLabel = labelFor(B.steps.websiteStatus.options, state.websiteStatus);
    const goalLabel = labelFor(B.steps.goal.options, state.goal);
    const timelineLabel = labelFor(B.steps.timeline.options, state.timeline);

    const body = buildBriefingMailBody({
      labels: B.mailLabels,
      mail: B.mail,
      firm: state.firm.trim(),
      areas,
      websiteStatus: websiteLabel,
      goal: goalLabel,
      timeline: timelineLabel,
      name: state.name.trim(),
      email: state.email.trim(),
      note: state.note.trim() || undefined,
    });

    const subject = buildBriefingMailSubject(B.subjectPrefix, state.firm.trim());
    window.location.href = `mailto:${t.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const isStepValid =
    (step === 1 && state.firm.trim().length > 0) ||
    (step === 2 &&
      state.areas.length > 0 &&
      (!state.areas.includes("other") || state.areaOther.trim().length > 0)) ||
    (step === 3 && !!state.websiteStatus) ||
    (step === 4 && !!state.goal) ||
    (step === 5 && !!state.timeline) ||
    (step === 6 &&
      state.name.trim().length > 0 &&
      state.email.trim().length > 0 &&
      consent);

  function handleFirmKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && state.firm.trim()) {
      e.preventDefault();
      advance();
    }
  }

  return (
    <div className="border-t border-neutral-200 pt-14 lg:pt-16 dark:border-white/10">
      <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
        {B.durationHint}
      </p>

      {/* Progress */}
      <div className="mt-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
          {B.stepLabel} {step} {B.stepOf} {TOTAL_STEPS}
        </p>
        <div className="mt-4 flex gap-2">
          {Array.from({ length: TOTAL_STEPS }, (_, i) => (
            <div
              key={i}
              className={`h-0.5 flex-1 rounded-full transition-colors duration-200 ease-out ${
                i < step
                  ? "bg-forest-deep dark:bg-forest-light"
                  : "bg-neutral-200 dark:bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className="mt-12 min-h-[280px] relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={step}
            custom={direction}
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: STEP_MS, ease: EASE }}
          >
            {step === 1 && (
              <>
                <h3 className="font-serif text-3xl sm:text-4xl text-neutral-900 leading-tight tracking-tight dark:text-neutral-100">
                  {B.steps.firm.title}
                </h3>
                <p className="mt-3 text-neutral-500 dark:text-neutral-400">{B.steps.firm.sub}</p>
                <label htmlFor="cb-firm" className="sr-only">
                  {B.steps.firm.title}
                </label>
                <input
                  id="cb-firm"
                  type="text"
                  value={state.firm}
                  onChange={(e) => setState((v) => ({ ...v, firm: e.target.value }))}
                  onKeyDown={handleFirmKeyDown}
                  placeholder={B.steps.firm.placeholder}
                  autoComplete="organization"
                  className={inputClasses}
                />
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="font-serif text-3xl sm:text-4xl text-neutral-900 leading-tight tracking-tight dark:text-neutral-100">
                  {B.steps.area.title}
                </h3>
                <p className="mt-3 text-neutral-500 dark:text-neutral-400">{B.steps.area.sub}</p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {B.steps.area.options.map((o) => {
                    const isActive = state.areas.includes(o.id);
                    return (
                      <button
                        key={`${lang}-${o.id}`}
                        type="button"
                        onClick={() => toggleArea(o.id)}
                        className={`${card} ${isActive ? cardActive : cardIdle}`}
                      >
                        {o.label}
                      </button>
                    );
                  })}
                </div>
                {state.areas.includes("other") && (
                  <div className="mt-8">
                    <label htmlFor="cb-area-other" className="sr-only">
                      {B.otherPlaceholder}
                    </label>
                    <input
                      id="cb-area-other"
                      type="text"
                      value={state.areaOther}
                      onChange={(e) => setState((v) => ({ ...v, areaOther: e.target.value }))}
                      placeholder={B.otherPlaceholder}
                      className={inputClasses}
                    />
                  </div>
                )}
              </>
            )}

            {step === 3 && (
              <>
                <h3 className="font-serif text-3xl sm:text-4xl text-neutral-900 leading-tight tracking-tight dark:text-neutral-100">
                  {B.steps.websiteStatus.title}
                </h3>
                <p className="mt-3 text-neutral-500 dark:text-neutral-400">
                  {B.steps.websiteStatus.sub}
                </p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {B.steps.websiteStatus.options.map((o) => {
                    const isActive = state.websiteStatus === o.id;
                    return (
                      <button
                        key={`${lang}-${o.id}`}
                        type="button"
                        onClick={() => selectAndAdvance({ websiteStatus: o.id })}
                        className={`${card} ${isActive ? cardActive : cardIdle}`}
                      >
                        {o.label}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <h3 className="font-serif text-3xl sm:text-4xl text-neutral-900 leading-tight tracking-tight dark:text-neutral-100">
                  {B.steps.goal.title}
                </h3>
                <p className="mt-3 text-neutral-500 dark:text-neutral-400">{B.steps.goal.sub}</p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {B.steps.goal.options.map((o) => {
                    const isActive = state.goal === o.id;
                    return (
                      <button
                        key={`${lang}-${o.id}`}
                        type="button"
                        onClick={() => selectAndAdvance({ goal: o.id })}
                        className={`${card} ${isActive ? cardActive : cardIdle}`}
                      >
                        {o.label}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {step === 5 && (
              <>
                <h3 className="font-serif text-3xl sm:text-4xl text-neutral-900 leading-tight tracking-tight dark:text-neutral-100">
                  {B.steps.timeline.title}
                </h3>
                <p className="mt-3 text-neutral-500 dark:text-neutral-400">{B.steps.timeline.sub}</p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {B.steps.timeline.options.map((o) => {
                    const isActive = state.timeline === o.id;
                    return (
                      <button
                        key={`${lang}-${o.id}`}
                        type="button"
                        onClick={() => selectAndAdvance({ timeline: o.id })}
                        className={`${card} ${isActive ? cardActive : cardIdle}`}
                      >
                        {o.label}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {step === 6 && (
              <form onSubmit={handleSend}>
                <h3 className="font-serif text-3xl sm:text-4xl text-neutral-900 leading-tight tracking-tight dark:text-neutral-100">
                  {B.steps.contact.title}
                </h3>
                <p className="mt-3 text-neutral-500 dark:text-neutral-400">{B.steps.contact.sub}</p>

                <dl className="mt-10 space-y-3 border border-neutral-200 rounded-2xl px-6 py-5 dark:border-white/10">
                  <SummaryRow label={B.summaryTitle} value="" heading />
                  <SummaryRow label={B.mailLabels.firm} value={state.firm.trim()} />
                  <SummaryRow
                    label={B.mailLabels.area}
                    value={labelsForAreas(B.steps.area.options, state.areas, state.areaOther)}
                  />
                  <SummaryRow
                    label={B.mailLabels.websiteStatus}
                    value={labelFor(B.steps.websiteStatus.options, state.websiteStatus)}
                  />
                  <SummaryRow
                    label={B.mailLabels.goal}
                    value={labelFor(B.steps.goal.options, state.goal)}
                  />
                  <SummaryRow
                    label={B.mailLabels.timeline}
                    value={labelFor(B.steps.timeline.options, state.timeline)}
                  />
                </dl>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                  <div>
                    <label
                      htmlFor="cb-name"
                      className="block text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400"
                    >
                      {t.contact.form.name}
                    </label>
                    <input
                      id="cb-name"
                      type="text"
                      required
                      value={state.name}
                      onChange={(e) => setState((v) => ({ ...v, name: e.target.value }))}
                      autoComplete="name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cb-email"
                      className="block text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400"
                    >
                      {t.contact.form.email}
                    </label>
                    <input
                      id="cb-email"
                      type="email"
                      required
                      value={state.email}
                      onChange={(e) => setState((v) => ({ ...v, email: e.target.value }))}
                      autoComplete="email"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <label
                    htmlFor="cb-note"
                    className="block text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400"
                  >
                    {B.mailLabels.note}
                    <span className="ml-2 lowercase tracking-normal text-neutral-400 dark:text-neutral-500">
                      ({t.contact.form.optional})
                    </span>
                  </label>
                  <textarea
                    id="cb-note"
                    rows={4}
                    value={state.note}
                    onChange={(e) => setState((v) => ({ ...v, note: e.target.value }))}
                    placeholder={B.steps.contact.notePlaceholder}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <div className="mt-10 flex items-start gap-3">
                  <input
                    id="cb-consent"
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1.5 h-4 w-4 cursor-pointer accent-forest-deep"
                  />
                  <label
                    htmlFor="cb-consent"
                    className="cursor-pointer text-[13px] sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                  >
                    {t.contact.form.consentBefore}
                    <Link
                      href="/datenschutz"
                      className="underline underline-offset-4 hover:text-forest-deep transition-colors duration-150 ease-out dark:hover:text-forest-light"
                    >
                      {t.contact.form.consentLink}
                    </Link>
                    {t.contact.form.consentAfter}
                  </label>
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-neutral-200 pt-8 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => goTo(5)}
                    className="text-sm text-neutral-500 hover:text-forest-deep transition-colors duration-150 ease-out dark:hover:text-forest-light"
                  >
                    {B.back}
                  </button>
                  <Magnetic>
                    <button
                      type="submit"
                      disabled={!isStepValid}
                      className="group inline-flex items-center gap-3 rounded-full bg-forest-deep px-8 py-4 text-sm font-medium text-white transition-all duration-200 ease-out hover:bg-forest-deep/90 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-forest-deep dark:bg-forest-light dark:text-ink dark:hover:bg-forest-light/90 dark:disabled:hover:bg-forest-light"
                    >
                      {B.send}
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                      />
                    </button>
                  </Magnetic>
                </div>
              </form>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation for steps 1–5 */}
      {step < 6 && (
        <div className="mt-12 flex items-center justify-between border-t border-neutral-200 pt-8 dark:border-white/10">
          <button
            type="button"
            onClick={() => goTo(Math.max(1, step - 1))}
            disabled={step === 1}
            className="text-sm text-neutral-500 hover:text-forest-deep transition-colors duration-150 ease-out disabled:opacity-30 disabled:cursor-not-allowed dark:hover:text-forest-light"
          >
            {B.back}
          </button>
          {(step === 1 || step === 2) && (
            <Magnetic>
              <button
                type="button"
                onClick={advance}
                disabled={!isStepValid}
                className="group inline-flex items-center gap-3 rounded-full bg-forest-deep px-8 py-4 text-sm font-medium text-white transition-all duration-200 ease-out hover:bg-forest-deep/90 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-forest-deep dark:bg-forest-light dark:text-ink dark:hover:bg-forest-light/90 dark:disabled:hover:bg-forest-light"
              >
                {B.next}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                />
              </button>
            </Magnetic>
          )}
        </div>
      )}
    </div>
  );
}

function SummaryRow({
  label,
  value,
  heading,
}: {
  label: string;
  value: string;
  heading?: boolean;
}) {
  if (heading) {
    return (
      <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
        {label}
      </dt>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-6 text-sm">
      <dt className="text-neutral-500 dark:text-neutral-400">{label}</dt>
      <dd className="font-medium text-neutral-900 dark:text-neutral-100">{value}</dd>
    </div>
  );
}
