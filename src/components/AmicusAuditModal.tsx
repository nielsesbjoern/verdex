"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import type {
  BottleneckId,
  CaseVolumeId,
  PracticeAreaId,
  TimePerCaseId,
} from "@/lib/i18n";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type AuditState = {
  practiceArea?: PracticeAreaId;
  caseVolume?: CaseVolumeId;
  bottleneck?: BottleneckId;
  timePerCase?: TimePerCaseId;
  hourlyRate: number;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function AmicusAuditModal({ isOpen, onClose }: Props) {
  const { t, lang } = useLang();
  const [step, setStep] = useState(1);
  const [typed, setTyped] = useState("");
  const [state, setState] = useState<AuditState>({
    hourlyRate: t.audit.steps.hourlyRate.defaultValue,
  });

  const steps = t.audit.steps;
  const selectedCaseVolume = steps.caseVolume.options.find(
    (o) => o.id === state.caseVolume
  );
  const selectedTime = steps.timePerCase.options.find((o) => o.id === state.timePerCase);
  const selectedBottleneck = steps.bottleneck.options.find(
    (o) => o.id === state.bottleneck
  );
  const selectedArea = state.practiceArea
    ? t.audit.simulation.cases[state.practiceArea]
    : undefined;

  const hoursSaved = useMemo(() => {
    if (!selectedCaseVolume || !selectedTime || !selectedBottleneck) return 0;
    return selectedCaseVolume.value * selectedTime.value * selectedBottleneck.factor;
  }, [selectedBottleneck, selectedCaseVolume, selectedTime]);

  const moneySaved = useMemo(() => hoursSaved * state.hourlyRate, [hoursSaved, state.hourlyRate]);

  const isStepValid =
    (step === 1 && !!state.practiceArea) ||
    (step === 2 && !!state.caseVolume) ||
    (step === 3 && !!state.bottleneck) ||
    (step === 4 && !!state.timePerCase) ||
    step === 5;

  useEffect(() => {
    if (!isOpen) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = old;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setState({ hourlyRate: t.audit.steps.hourlyRate.defaultValue });
      setTyped("");
    }
  }, [isOpen, t.audit.steps.hourlyRate.defaultValue]);

  useEffect(() => {
    if (step !== 6 || !selectedArea || !state.bottleneck) {
      setTyped("");
      return;
    }
    const source = selectedArea.tasks[state.bottleneck];
    const full = `${source.intro}\n\n• ${source.findings.join("\n• ")}`;
    let i = 0;
    const timer = setInterval(() => {
      i += 2;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(timer);
    }, 12);
    return () => clearInterval(timer);
  }, [step, selectedArea, state.bottleneck]);

  const canShowResults =
    !!state.practiceArea && !!state.caseVolume && !!state.bottleneck && !!state.timePerCase;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="fixed inset-0 z-[100] bg-white text-[#111111]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="amicus-audit-title"
        >
          <div className="h-full overflow-y-auto">
            <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 lg:py-14">
              <div className="flex items-start justify-between border-b border-neutral-100 pb-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                    {t.audit.badge}
                  </p>
                  <h2
                    id="amicus-audit-title"
                    className="mt-4 font-serif text-4xl lg:text-5xl leading-tight"
                  >
                    Amicus AI
                  </h2>
                </div>
                <button
                  aria-label={t.audit.closeLabel}
                  onClick={onClose}
                  className="p-1 text-neutral-500 hover:text-[#102512] transition-colors"
                >
                  <X size={22} strokeWidth={1.4} />
                </button>
              </div>

              {step <= 5 ? (
                <div className="pt-10 lg:pt-14">
                  <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                    {t.audit.stepLabel} {step} {t.audit.stepOf} 5
                  </p>
                  <StepContent
                    step={step}
                    state={state}
                    setState={setState}
                    langKey={lang}
                    onAdvance={() => setStep((s) => Math.min(6, s + 1))}
                  />
                  <div className="mt-12 flex items-center justify-between border-t border-neutral-100 pt-8">
                    <button
                      onClick={() => setStep((s) => Math.max(1, s - 1))}
                      disabled={step === 1}
                      className="text-sm text-neutral-500 hover:text-[#102512] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      {t.audit.back}
                    </button>
                    {step === 5 && (
                      <button
                        onClick={() => {
                          if (canShowResults) setStep(6);
                        }}
                        disabled={!isStepValid}
                        className="rounded-full bg-[#102512] px-6 py-3 text-sm font-medium text-white disabled:opacity-40"
                      >
                        {t.audit.finish}
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <ResultsView
                  hourlyRate={state.hourlyRate}
                  hoursSaved={hoursSaved}
                  moneySaved={moneySaved}
                  typed={typed}
                  state={state}
                  onRestart={() => setStep(1)}
                />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function StepContent({
  step,
  state,
  setState,
  langKey,
  onAdvance,
}: {
  step: number;
  state: AuditState;
  setState: React.Dispatch<React.SetStateAction<AuditState>>;
  langKey: string;
  onAdvance: () => void;
}) {
  const { t } = useLang();
  const S = t.audit.steps;
  // Card cards a little taller so they don't look cramped after the
  // factor/value secondary text was removed.
  const card =
    "rounded-2xl border border-neutral-100 px-6 py-8 text-base font-medium transition-colors text-left";
  const active = "border-[#102512] bg-[#102512] text-white";
  const idle = "hover:border-[#102512]/40";

  /**
   * Save the user's choice for the current step and auto-advance to the next
   * one. A small delay lets the green selection state render so the click
   * still feels acknowledged before the screen changes.
   */
  function selectAndAdvance(patch: Partial<AuditState>) {
    setState((v) => ({ ...v, ...patch }));
    window.setTimeout(onAdvance, 220);
  }

  if (step === 1) {
    return (
      <>
        <h3 className="mt-6 font-serif text-3xl lg:text-4xl">{S.practiceArea.title}</h3>
        <p className="mt-3 text-neutral-500">{S.practiceArea.sub}</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {S.practiceArea.options.map((o) => {
            const isActive = state.practiceArea === o.id;
            return (
              <button
                key={`${langKey}-${o.id}`}
                onClick={() => selectAndAdvance({ practiceArea: o.id })}
                className={`${card} ${isActive ? active : idle}`}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      </>
    );
  }

  if (step === 2) {
    return (
      <>
        <h3 className="mt-6 font-serif text-3xl lg:text-4xl">{S.caseVolume.title}</h3>
        <p className="mt-3 text-neutral-500">{S.caseVolume.sub}</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {S.caseVolume.options.map((o) => {
            const isActive = state.caseVolume === o.id;
            return (
              <button
                key={`${langKey}-${o.id}`}
                onClick={() => selectAndAdvance({ caseVolume: o.id })}
                className={`${card} ${isActive ? active : idle}`}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      </>
    );
  }

  if (step === 3) {
    return (
      <>
        <h3 className="mt-6 font-serif text-3xl lg:text-4xl">{S.bottleneck.title}</h3>
        <p className="mt-3 text-neutral-500">{S.bottleneck.sub}</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {S.bottleneck.options.map((o) => {
            const isActive = state.bottleneck === o.id;
            return (
              <button
                key={`${langKey}-${o.id}`}
                onClick={() => selectAndAdvance({ bottleneck: o.id })}
                className={`${card} ${isActive ? active : idle}`}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      </>
    );
  }

  if (step === 4) {
    return (
      <>
        <h3 className="mt-6 font-serif text-3xl lg:text-4xl">{S.timePerCase.title}</h3>
        <p className="mt-3 text-neutral-500">{S.timePerCase.sub}</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {S.timePerCase.options.map((o) => {
            const isActive = state.timePerCase === o.id;
            return (
              <button
                key={`${langKey}-${o.id}`}
                onClick={() => selectAndAdvance({ timePerCase: o.id })}
                className={`${card} ${isActive ? active : idle}`}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <>
      <h3 className="mt-6 font-serif text-3xl lg:text-4xl">{S.hourlyRate.title}</h3>
      <p className="mt-3 text-neutral-500">{S.hourlyRate.sub}</p>
      <div className="mt-10 rounded-2xl border border-neutral-100 p-8">
        <div className="flex items-end justify-between">
          <p className="text-sm text-neutral-500">{S.hourlyRate.unit}</p>
          <p className="text-4xl font-serif text-[#102512]">{state.hourlyRate} €</p>
        </div>
        <input
          type="range"
          min={S.hourlyRate.min}
          max={S.hourlyRate.max}
          step={S.hourlyRate.step}
          value={state.hourlyRate}
          onChange={(e) => setState((v) => ({ ...v, hourlyRate: Number(e.target.value) }))}
          className="mt-6 w-full accent-[#102512]"
        />
        <div className="mt-3 flex justify-between text-xs text-neutral-500">
          <span>{S.hourlyRate.min} €</span>
          <span>{S.hourlyRate.max} €</span>
        </div>
      </div>
    </>
  );
}

function ResultsView({
  hoursSaved,
  moneySaved,
  typed,
  state,
  hourlyRate,
  onRestart,
}: {
  hoursSaved: number;
  moneySaved: number;
  typed: string;
  state: AuditState;
  hourlyRate: number;
  onRestart: () => void;
}) {
  const { t } = useLang();
  if (!state.practiceArea || !state.bottleneck) return null;
  const sim = t.audit.simulation.cases[state.practiceArea].tasks[state.bottleneck];

  return (
    <div className="pt-10 lg:pt-14">
      <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
        {t.audit.results.eyebrow}
      </p>
      <h3 className="mt-6 font-serif text-4xl lg:text-5xl leading-tight">
        {t.audit.results.title}{" "}
        <span className="italic font-normal">{t.audit.results.titleItalic}</span>
      </h3>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MetricCard
          label={t.audit.results.hoursLabel}
          value={hoursSaved}
          suffix={` ${t.audit.results.hoursUnit}`}
          tone="dark"
        />
        <MetricCard
          label={t.audit.results.moneyLabel}
          value={moneySaved}
          prefix="€ "
          suffix={` ${t.audit.results.perMonth}`}
          tone="green"
        />
      </div>

      <div className="mt-10 rounded-2xl border border-neutral-100 p-8">
        <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
          {t.audit.results.simulationTitle}
        </p>
        <p className="mt-2 text-sm text-neutral-500">{t.audit.results.simulationCaption}</p>
        <div className="mt-6 border border-neutral-100 bg-neutral-50 p-5">
          <p className="text-sm text-neutral-500">{sim.intro}</p>
          <pre className="mt-4 whitespace-pre-wrap text-sm leading-relaxed font-sans text-[#111111] min-h-[140px]">
            {typed}
            <span className="inline-block w-2 h-4 bg-[#102512] ml-1 animate-pulse" />
          </pre>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="/#contact"
          className="inline-flex items-center rounded-full bg-[#102512] px-7 py-3.5 text-sm font-medium text-white"
        >
          {t.audit.results.cta}
        </a>
        <button onClick={onRestart} className="text-sm text-neutral-500 hover:text-[#102512]">
          {t.audit.restart}
        </button>
      </div>
      <p className="mt-4 text-xs text-neutral-500">
        {t.audit.results.disclaimer} • {hourlyRate} €/h
      </p>
    </div>
  );
}

function MetricCard({
  label,
  value,
  prefix = "",
  suffix = "",
  tone,
}: {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  tone: "dark" | "green";
}) {
  return (
    <div className={`rounded-2xl border p-8 ${tone === "green" ? "border-[#102512]/20" : "border-neutral-100"}`}>
      <p className="text-sm text-neutral-500">{label}</p>
      <p className={`mt-4 font-serif text-5xl ${tone === "green" ? "text-[#102512]" : "text-[#111111]"}`}>
        {prefix}
        <CountUp to={value} />
        {suffix}
      </p>
    </div>
  );
}

function CountUp({ to }: { to: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 900;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setN(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <>{Math.round(n).toLocaleString("de-DE")}</>;
}

