"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import { FadeIn } from "./FadeIn";

export function Contact() {
  const { t, lang } = useLang();

  return (
    <section
      id="contact"
      className="relative py-32 lg:py-40 border-t border-neutral-100"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        {/* Heading block — centered */}
        <div className="text-center">
          <FadeIn key={`contact-eyebrow-${lang}`}>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              {t.contact.eyebrow}
            </p>
          </FadeIn>

          <FadeIn key={`contact-title-${lang}`} delay={0.1}>
            <h2 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.02] tracking-tight">
              {t.contact.titleA}
              <br />
              <span className="italic font-normal text-neutral-700">
                {t.contact.titleB}
              </span>
            </h2>
          </FadeIn>

          <FadeIn key={`contact-body-${lang}`} delay={0.2}>
            <p className="mx-auto mt-10 max-w-xl text-lg text-neutral-500 leading-relaxed">
              {t.contact.body}
            </p>
          </FadeIn>
        </div>

        {/* Form */}
        <FadeIn delay={0.3} className="mt-20 lg:mt-24">
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- */

function ContactForm() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firm, setFirm] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;

    const subjectParts = [name.trim(), firm.trim()].filter(Boolean).join(" · ");
    const subject = `${t.contact.form.subjectPrefix} ${subjectParts}`;

    const bodyLines = [
      `${t.contact.form.name}: ${name}`,
      `${t.contact.form.email}: ${email}`,
      `${t.contact.form.firm}: ${firm}`,
    ];
    if (phone.trim()) {
      bodyLines.push(`${t.contact.form.phone}: ${phone}`);
    }
    bodyLines.push("", `${t.contact.form.message}:`, message);

    const href =
      `mailto:${t.contact.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    // Open user's email client with a draft. No server round-trip needed.
    window.location.href = href;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-t border-neutral-200 pt-16 text-center">
        <Check
          className="mx-auto text-forest-deep"
          size={40}
          strokeWidth={1.5}
        />
        <h3 className="mt-6 font-serif text-3xl sm:text-4xl text-neutral-900 leading-tight tracking-tight">
          {t.contact.form.successTitle}
        </h3>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-neutral-500">
          {t.contact.form.successBody}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={false}
      className="border-t border-neutral-200 pt-14 lg:pt-16"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
        <Field
          name="name"
          label={t.contact.form.name}
          required
          value={name}
          onChange={setName}
          autoComplete="name"
        />
        <Field
          name="email"
          label={t.contact.form.email}
          type="email"
          required
          value={email}
          onChange={setEmail}
          autoComplete="email"
        />
        <Field
          name="firm"
          label={t.contact.form.firm}
          required
          value={firm}
          onChange={setFirm}
          autoComplete="organization"
        />
        <Field
          name="phone"
          label={t.contact.form.phone}
          type="tel"
          value={phone}
          onChange={setPhone}
          autoComplete="tel"
          optionalLabel={t.contact.form.optional}
        />
      </div>

      <div className="mt-10">
        <Field
          name="message"
          label={t.contact.form.message}
          required
          as="textarea"
          rows={6}
          value={message}
          onChange={setMessage}
        />
      </div>

      <div className="mt-12 flex items-start gap-3">
        <input
          id="cf-consent"
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1.5 h-4 w-4 cursor-pointer accent-forest-deep"
        />
        <label
          htmlFor="cf-consent"
          className="cursor-pointer text-[13px] sm:text-sm leading-relaxed text-neutral-600"
        >
          {t.contact.form.consentBefore}
          <Link
            href="/datenschutz"
            className="underline underline-offset-4 hover:text-forest-deep transition-colors duration-300 ease-editorial"
          >
            {t.contact.form.consentLink}
          </Link>
          {t.contact.form.consentAfter}
        </label>
      </div>

      <div className="mt-12">
        <button
          type="submit"
          disabled={!consent}
          className="group inline-flex items-center gap-3 rounded-full bg-forest-deep px-8 py-4 text-sm font-medium text-white transition-all duration-500 ease-editorial hover:bg-forest-deep/90 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-forest-deep"
        >
          {t.contact.form.submit}
          <ArrowRight
            size={16}
            className="transition-transform duration-500 ease-editorial group-hover:translate-x-1"
          />
        </button>
      </div>
    </form>
  );
}

/* --------------------------------------------------------- */

type FieldProps = {
  /** Stable English field name — used for the input id and HTML name attribute. */
  name: string;
  /** Localised label rendered above the input. */
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: "text" | "email" | "tel";
  as?: "input" | "textarea";
  rows?: number;
  autoComplete?: string;
  /** Localised "(optional)" hint shown when `required` is false. */
  optionalLabel?: string;
};

function Field({
  name,
  label,
  value,
  onChange,
  required,
  type = "text",
  as = "input",
  rows,
  autoComplete,
  optionalLabel,
}: FieldProps) {
  const id = `cf-${name}`;
  const inputClasses =
    "mt-3 block w-full bg-transparent border-0 border-b border-neutral-300 px-0 py-2.5 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-forest-deep transition-colors duration-300 ease-editorial";

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500"
      >
        {label}
        {!required && optionalLabel && (
          <span className="ml-2 lowercase tracking-normal text-neutral-400">
            ({optionalLabel})
          </span>
        )}
      </label>

      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={rows ?? 5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          className={`${inputClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          className={inputClasses}
        />
      )}
    </div>
  );
}
