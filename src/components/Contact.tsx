"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { useLang } from "@/lib/LanguageProvider";
import { FadeIn } from "./FadeIn";
import { Magnetic } from "./Magnetic";

export function Contact() {
  const { t, lang } = useLang();

  return (
    <section
      id="contact"
      className="relative py-32 lg:py-40 border-t border-neutral-100 dark:border-white/10"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        {/* Heading block — centered */}
        <div className="text-center">
          <FadeIn key={`contact-eyebrow-${lang}`}>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              {t.contact.eyebrow}
            </p>
          </FadeIn>

          <FadeIn key={`contact-title-${lang}`} delay={0.1}>
            <h2 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.02] tracking-tight dark:text-neutral-100">
              {t.contact.titleA}
              <br />
              <span className="italic font-normal text-neutral-700 dark:text-neutral-300">
                {t.contact.titleB}
              </span>
            </h2>
          </FadeIn>

          <FadeIn key={`contact-body-${lang}`} delay={0.2}>
            <p className="mx-auto mt-10 max-w-xl text-lg text-neutral-500 leading-relaxed dark:text-neutral-400">
              {t.contact.body}
            </p>
          </FadeIn>

          {/* Low-friction alternative to the form */}
          <FadeIn key={`contact-direct-${lang}`} delay={0.25}>
            <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
              {t.contact.directPrompt}{" "}
              <a
                href={`mailto:${t.contact.email}`}
                className="font-medium text-forest-deep underline underline-offset-4 transition-colors duration-300 ease-editorial hover:text-forest-deep/80 dark:text-forest-light dark:hover:text-forest-light/80"
              >
                {t.contact.email}
              </a>
            </p>
          </FadeIn>
        </div>

        {/* Form */}
        <FadeIn delay={0.3} className="mt-20 lg:mt-24">
          <ContactForm />
        </FadeIn>

        {/* Pointer to the dedicated FAQ page */}
        <FadeIn key={`contact-faq-${lang}`} delay={0.35} className="mt-14 text-center">
          <Link
            href="/faq"
            className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors duration-300 ease-editorial hover:text-forest-deep dark:text-neutral-400 dark:hover:text-forest-light"
          >
            {t.contact.faqLink}
            <span
              aria-hidden
              className="block h-px w-6 bg-neutral-400 transition-all duration-500 ease-editorial group-hover:w-10 group-hover:bg-forest-deep dark:group-hover:bg-forest-light"
            />
          </Link>
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

    // The form backend is temporarily unavailable — instead of silently
    // failing, surface a clear notice pointing to the direct e-mail address.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-t border-neutral-200 pt-16 text-center dark:border-white/10">
        <Mail
          className="mx-auto text-forest-deep dark:text-forest-light"
          size={40}
          strokeWidth={1.5}
        />
        <h3 className="mt-6 font-serif text-3xl sm:text-4xl text-neutral-900 leading-tight tracking-tight dark:text-neutral-100">
          {t.contact.form.unavailableTitle}
        </h3>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
          {t.contact.form.unavailableBody}
        </p>
        <p className="mt-8 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
          {t.contact.form.unavailableEmailPrompt}
        </p>
        <a
          href={`mailto:${t.contact.email}`}
          className="mt-3 inline-block font-serif text-xl text-forest-deep underline underline-offset-4 transition-colors duration-300 ease-editorial hover:text-forest-deep/80 sm:text-2xl dark:text-forest-light dark:hover:text-forest-light/80"
        >
          {t.contact.email}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={false}
      className="border-t border-neutral-200 pt-14 lg:pt-16 dark:border-white/10"
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
          className="cursor-pointer text-[13px] sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
          {t.contact.form.consentBefore}
          <Link
            href="/datenschutz"
            className="underline underline-offset-4 hover:text-forest-deep transition-colors duration-300 ease-editorial dark:hover:text-forest-light"
          >
            {t.contact.form.consentLink}
          </Link>
          {t.contact.form.consentAfter}
        </label>
      </div>

      <div className="mt-12">
        <Magnetic>
          <button
            type="submit"
            disabled={!consent}
            className="group inline-flex items-center gap-3 rounded-full bg-forest-deep px-8 py-4 text-sm font-medium text-white transition-all duration-500 ease-editorial hover:bg-forest-deep/90 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-forest-deep dark:bg-forest-light dark:text-ink dark:hover:bg-forest-light/90 dark:disabled:hover:bg-forest-light"
          >
            {t.contact.form.submit}
            <ArrowRight
              size={16}
              className="transition-transform duration-500 ease-editorial group-hover:translate-x-1"
            />
          </button>
        </Magnetic>
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
    "mt-3 block w-full bg-transparent border-0 border-b border-neutral-300 px-0 py-2.5 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-forest-deep transition-colors duration-300 ease-editorial dark:border-white/15 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:border-forest-light";

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400"
      >
        {label}
        {!required && optionalLabel && (
          <span className="ml-2 lowercase tracking-normal text-neutral-400 dark:text-neutral-500">
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
