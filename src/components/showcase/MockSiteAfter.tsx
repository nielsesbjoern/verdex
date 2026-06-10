"use client";

import { useState } from "react";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Scale,
} from "lucide-react";

/**
 * The same fictional law firm reimagined as a polished, high-end professional
 * site ("After"), with working sub-tabs (Kanzlei, Rechtsgebiete, Team, Kontakt).
 *
 * Uses its OWN identity — warm cream, deep navy and a brass accent, a utility
 * bar, a monogram crest and a credentials band — so it reads as a bespoke,
 * premium client project rather than a copy of the Verdex brand.
 * Demonstration component only; all content is anonymised / invented.
 */

const NAVY = "#16243d";
const NAVY_DEEP = "#101b30";
const BRASS = "#a87e4f";
const CREAM = "#faf8f4";
const PANEL = "#f3efe7";
const INK = "#1c2230";
const MUTED = "#5f6470";
const HAIRLINE = "#e3ddd0";

type TabId = "kanzlei" | "rechtsgebiete" | "team" | "kontakt";

const TABS: { id: TabId; label: string }[] = [
  { id: "kanzlei", label: "Kanzlei" },
  { id: "rechtsgebiete", label: "Rechtsgebiete" },
  { id: "team", label: "Team" },
  { id: "kontakt", label: "Kontakt" },
];

export function MockSiteAfter() {
  const [tab, setTab] = useState<TabId>("kanzlei");

  return (
    <div
      className="min-h-full w-full font-sans"
      style={{ backgroundColor: CREAM, color: INK }}
    >
      {/* Utility bar */}
      <div
        className="hidden items-center justify-between px-6 py-2 text-[11px] tracking-wide sm:flex sm:px-10"
        style={{ backgroundColor: NAVY_DEEP, color: "#aeb6c4" }}
      >
        <span className="inline-flex items-center gap-2">
          <MapPin size={12} style={{ color: BRASS }} /> Friedrichstraße 1, 10117
          Berlin
        </span>
        <span className="inline-flex items-center gap-5">
          <span className="inline-flex items-center gap-2">
            <Phone size={12} style={{ color: BRASS }} /> 030 / 12 34 56
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock size={12} style={{ color: BRASS }} /> Mo–Fr 9–18 Uhr
          </span>
        </span>
      </div>

      {/* Header */}
      <header className="px-6 pt-5 sm:px-10">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setTab("kanzlei")}
            className="flex items-center gap-3 text-left"
          >
            <span
              className="flex h-11 w-11 items-center justify-center rounded-sm"
              style={{ backgroundColor: NAVY, border: `1px solid ${BRASS}` }}
            >
              <Scale size={18} style={{ color: BRASS }} />
            </span>
            <span>
              <span
                className="block font-serif text-lg leading-none tracking-tight"
                style={{ color: NAVY }}
              >
                Brandt &amp; Kollegen
              </span>
              <span
                className="mt-1 block text-[10px] uppercase tracking-[0.28em]"
                style={{ color: BRASS }}
              >
                Rechtsanwälte · Notar
              </span>
            </span>
          </button>
          <button
            type="button"
            onClick={() => setTab("kontakt")}
            className="hidden items-center gap-2 rounded-sm px-5 py-2.5 text-[12px] font-medium tracking-wide text-white sm:inline-flex"
            style={{ backgroundColor: NAVY }}
          >
            Termin vereinbaren <ArrowRight size={14} />
          </button>
        </div>

        {/* Tab navigation */}
        <nav
          className="mt-5 flex flex-wrap gap-x-7 gap-y-2 text-[13px]"
          style={{ borderTop: `1px solid ${HAIRLINE}`, paddingTop: "0.85rem" }}
        >
          {TABS.map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className="relative pb-2 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200"
                style={{ color: active ? NAVY : MUTED }}
              >
                {item.label}
                {active && (
                  <span
                    className="absolute inset-x-0 bottom-0 h-0.5 rounded-full"
                    style={{ backgroundColor: BRASS }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </header>

      {/* Tab content */}
      {tab === "kanzlei" && <KanzleiTab onContact={() => setTab("kontakt")} />}
      {tab === "rechtsgebiete" && <RechtsgebieteTab />}
      {tab === "team" && <TeamTab />}
      {tab === "kontakt" && <KontaktTab />}

      <SiteFooter onTab={setTab} />
    </div>
  );
}

/* ------------------------------- Crest --------------------------------- */

function Crest() {
  return (
    <div
      className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-sm"
      style={{ backgroundColor: NAVY }}
    >
      {/* Inner frame */}
      <div
        className="absolute inset-3"
        style={{ border: `1px solid ${BRASS}55` }}
      />
      <div className="relative flex flex-col items-center px-6 text-center">
        <span
          className="flex h-16 w-16 items-center justify-center rounded-full"
          style={{ border: `1.5px solid ${BRASS}` }}
        >
          <Scale size={28} style={{ color: BRASS }} />
        </span>
        <span
          className="mt-6 font-serif text-2xl tracking-tight"
          style={{ color: CREAM }}
        >
          Brandt &amp; Kollegen
        </span>
        <span
          className="mt-3 text-[10px] uppercase tracking-[0.32em]"
          style={{ color: BRASS }}
        >
          Anwaltskanzlei
        </span>
        <span
          className="mt-6 h-px w-12"
          style={{ backgroundColor: `${BRASS}66` }}
        />
        <span
          className="mt-4 text-[11px] uppercase tracking-[0.3em]"
          style={{ color: "#aeb6c4" }}
        >
          Est. 1987 · Berlin
        </span>
      </div>
    </div>
  );
}

/* ------------------------------- Kanzlei ------------------------------- */

function KanzleiTab({ onContact }: { onContact: () => void }) {
  const stats = [
    ["37", "Jahre Erfahrung"],
    ["4", "Fachbereiche"],
    ["9", "Anwält:innen"],
    ["98%", "weiterempfohlen"],
  ];

  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-16 pt-12 sm:px-10 sm:pt-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: BRASS }}
            >
              Rechtsanwälte · Berlin · seit 1987
            </p>
            <h1
              className="mt-6 font-serif text-4xl leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: NAVY }}
            >
              Klarheit in jeder
              <br />
              <span className="italic" style={{ color: BRASS }}>
                Rechtsfrage.
              </span>
            </h1>
            <p
              className="mt-7 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: MUTED }}
            >
              Persönliche Beratung mit über 35 Jahren Erfahrung — für Menschen
              und Unternehmen, die eine verlässliche Entscheidung brauchen.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <button
                type="button"
                onClick={onContact}
                className="inline-flex items-center gap-3 rounded-sm px-6 py-3.5 text-sm font-medium text-white"
                style={{ backgroundColor: NAVY }}
              >
                Erstgespräch vereinbaren <ArrowRight size={16} />
              </button>
              <span
                className="inline-flex items-center gap-2 text-sm font-medium"
                style={{ color: NAVY }}
              >
                <Phone size={15} style={{ color: BRASS }} /> 030 / 12 34 56
              </span>
            </div>
          </div>

          <div className="hidden lg:block">
            <Crest />
          </div>
        </div>
      </section>

      {/* Credentials band */}
      <section
        className="px-6 py-10 sm:px-10"
        style={{ backgroundColor: PANEL, borderTop: `1px solid ${HAIRLINE}`, borderBottom: `1px solid ${HAIRLINE}` }}
      >
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label}>
              <p
                className="font-serif text-3xl tracking-tight sm:text-4xl"
                style={{ color: NAVY }}
              >
                {value}
              </p>
              <p
                className="mt-2 text-[11px] uppercase tracking-[0.18em]"
                style={{ color: MUTED }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About blurb */}
      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: BRASS }}
            >
              Die Kanzlei
            </p>
            <h2
              className="mt-5 font-serif text-2xl leading-snug tracking-tight sm:text-3xl"
              style={{ color: NAVY }}
            >
              Eine Kanzlei, die zuhört — und dann liefert.
            </h2>
          </div>
          <div
            className="space-y-4 text-[15px] leading-relaxed"
            style={{ color: MUTED }}
          >
            <p>
              Seit 1987 begleiten wir Mandantinnen und Mandanten durch die
              entscheidenden Momente — vom ersten Gespräch bis zur tragfähigen
              Lösung. Wir nehmen uns Zeit, erklären verständlich und denken
              vorausschauend.
            </p>
            <p>
              Vier Fachbereiche, ein Anspruch: sorgfältige, klare und
              verlässliche Arbeit, auf die Sie sich verlassen können — diskret,
              persönlich und auf Augenhöhe.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 py-20 sm:px-10" style={{ backgroundColor: NAVY }}>
        <p
          className="text-center text-[11px] uppercase tracking-[0.3em]"
          style={{ color: BRASS }}
        >
          Unser Versprechen
        </p>
        <blockquote
          className="mx-auto mt-7 max-w-3xl text-center font-serif text-2xl leading-snug tracking-tight sm:text-3xl"
          style={{ color: CREAM }}
        >
          „Gute Beratung beginnt mit Zuhören — und endet mit einer Entscheidung,
          hinter der Sie stehen können.“
        </blockquote>
        <p
          className="mt-8 text-center text-[12px] uppercase tracking-[0.28em]"
          style={{ color: "#aeb6c4" }}
        >
          Dr. Katharina Brandt · Gründerin
        </p>
      </section>
    </>
  );
}

/* ---------------------------- Rechtsgebiete ---------------------------- */

function RechtsgebieteTab() {
  const areas = [
    [
      "I",
      "Arbeitsrecht",
      "Kündigung, Abfindung, Aufhebungsvertrag und Zeugnis — strategisch und auf Augenhöhe begleitet.",
    ],
    [
      "II",
      "Familienrecht",
      "Scheidung, Unterhalt, Sorge- und Umgangsrecht — mit Fingerspitzengefühl und klarer Linie.",
    ],
    [
      "III",
      "Erbrecht",
      "Testament, Pflichtteil und Nachlassabwicklung — vorausschauend gestaltet, sauber durchgesetzt.",
    ],
    [
      "IV",
      "Verkehrsrecht",
      "Unfall, Bußgeld und Führerschein — schnelle Einschätzung, konsequente Vertretung.",
    ],
  ];

  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20">
      <p
        className="text-[11px] font-semibold uppercase tracking-[0.3em]"
        style={{ color: BRASS }}
      >
        Rechtsgebiete
      </p>
      <h2
        className="mt-5 max-w-2xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl"
        style={{ color: NAVY }}
      >
        Vier Schwerpunkte, ein Anspruch.
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {areas.map(([n, title, body]) => (
          <div
            key={n}
            className="rounded-sm p-7 transition-shadow duration-300"
            style={{ backgroundColor: "#fff", border: `1px solid ${HAIRLINE}` }}
          >
            <div className="flex items-baseline justify-between">
              <p className="font-serif text-sm italic" style={{ color: BRASS }}>
                {n}
              </p>
              <span
                className="h-px w-10"
                style={{ backgroundColor: `${BRASS}66` }}
              />
            </div>
            <h3
              className="mt-4 font-serif text-2xl tracking-tight"
              style={{ color: NAVY }}
            >
              {title}
            </h3>
            <p
              className="mt-3 text-[15px] leading-relaxed"
              style={{ color: MUTED }}
            >
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- Team ---------------------------------- */

function TeamTab() {
  const partners = [
    ["KB", "Dr. Katharina Brandt", "Gründerin · Fachanwältin für Arbeitsrecht"],
    ["TR", "Thomas Reinhardt", "Partner · Fachanwalt für Familienrecht"],
    ["JS", "Dr. Julia Sander", "Partnerin · Fachanwältin für Erbrecht"],
    ["AV", "Andreas Vogt", "Partner · Verkehrsrecht"],
  ];

  const associates = [
    ["MK", "Marie Köhler", "Rechtsanwältin · Arbeitsrecht"],
    ["LP", "Lukas Petersen", "Rechtsanwalt · Familienrecht"],
    ["SN", "Sophie Neumann", "Rechtsanwältin · Erbrecht"],
    ["DH", "David Hoffmann", "Rechtsanwalt · Verkehrsrecht"],
    ["FW", "Dr. Friedrich Wendt", "Notar"],
  ];

  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20">
      <p
        className="text-[11px] font-semibold uppercase tracking-[0.3em]"
        style={{ color: BRASS }}
      >
        Team
      </p>
      <h2
        className="mt-5 max-w-2xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl"
        style={{ color: NAVY }}
      >
        Menschen, die für Sie einstehen.
      </h2>

      {/* Tier 1 — Partners */}
      <p
        className="mt-12 text-[11px] font-semibold uppercase tracking-[0.22em]"
        style={{ color: MUTED }}
      >
        Partnerinnen &amp; Partner
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {partners.map(([initials, name, role]) => (
          <div
            key={name}
            className="flex items-center gap-5 rounded-sm p-6"
            style={{ backgroundColor: "#fff", border: `1px solid ${HAIRLINE}` }}
          >
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full font-serif text-lg"
              style={{
                backgroundColor: NAVY,
                color: CREAM,
                border: `1px solid ${BRASS}66`,
              }}
            >
              {initials}
            </div>
            <div>
              <h3
                className="font-serif text-xl tracking-tight"
                style={{ color: NAVY }}
              >
                {name}
              </h3>
              <p
                className="mt-1 text-[13px] leading-relaxed"
                style={{ color: MUTED }}
              >
                {role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tier 2 — Associates & Notary (compact, secondary) */}
      <p
        className="mt-14 text-[11px] font-semibold uppercase tracking-[0.22em]"
        style={{ color: MUTED }}
      >
        Angestellte Anwält:innen &amp; Notariat
      </p>
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
        {associates.map(([initials, name, role]) => {
          const isNotar = role === "Notar";
          return (
            <div key={name} className="text-center">
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full font-serif text-sm"
                style={{
                  backgroundColor: isNotar ? NAVY : PANEL,
                  color: isNotar ? CREAM : NAVY,
                  border: `1px solid ${isNotar ? `${BRASS}88` : HAIRLINE}`,
                }}
              >
                {initials}
              </div>
              <h4
                className="mt-3 font-serif text-base leading-tight tracking-tight"
                style={{ color: NAVY }}
              >
                {name}
              </h4>
              <p
                className="mt-1 text-[12px] leading-snug"
                style={{ color: isNotar ? BRASS : MUTED }}
              >
                {role}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------ Kontakt -------------------------------- */

function KontaktTab() {
  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20">
      <p
        className="text-[11px] font-semibold uppercase tracking-[0.3em]"
        style={{ color: BRASS }}
      >
        Kontakt
      </p>
      <h2
        className="mt-5 max-w-2xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl"
        style={{ color: NAVY }}
      >
        Sprechen wir über Ihr Anliegen.
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Details */}
        <div className="space-y-5 text-[15px]" style={{ color: INK }}>
          <p className="flex items-center gap-3">
            <MapPin size={17} style={{ color: BRASS }} />
            Friedrichstraße 1 · 10117 Berlin
          </p>
          <p className="flex items-center gap-3">
            <Phone size={17} style={{ color: BRASS }} />
            030 / 12 34 56
          </p>
          <p className="flex items-center gap-3">
            <Mail size={17} style={{ color: BRASS }} />
            kanzlei@brandt-kollegen.de
          </p>
          <p className="flex items-center gap-3">
            <Clock size={17} style={{ color: BRASS }} />
            Mo–Fr 9–18 Uhr · und nach Vereinbarung
          </p>
        </div>

        {/* Mock form (visual only) */}
        <div
          className="space-y-4 rounded-sm p-7"
          style={{ backgroundColor: "#fff", border: `1px solid ${HAIRLINE}` }}
        >
          {["Name", "E-Mail"].map((label) => (
            <div key={label}>
              <label
                className="block text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: MUTED }}
              >
                {label}
              </label>
              <div
                className="mt-2 h-10 w-full rounded-sm"
                style={{ backgroundColor: CREAM, border: `1px solid ${HAIRLINE}` }}
              />
            </div>
          ))}
          <div>
            <label
              className="block text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: MUTED }}
            >
              Nachricht
            </label>
            <div
              className="mt-2 h-24 w-full rounded-sm"
              style={{ backgroundColor: CREAM, border: `1px solid ${HAIRLINE}` }}
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-3 rounded-sm px-6 py-3 text-sm font-medium text-white"
            style={{ backgroundColor: NAVY }}
          >
            Nachricht senden <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Footer -------------------------------- */

function SiteFooter({ onTab }: { onTab: (t: TabId) => void }) {
  return (
    <footer
      className="px-6 pt-14 sm:px-10"
      style={{ backgroundColor: NAVY_DEEP, color: "#aeb6c4" }}
    >
      <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-sm"
              style={{ border: `1px solid ${BRASS}` }}
            >
              <Scale size={16} style={{ color: BRASS }} />
            </span>
            <span className="font-serif text-lg" style={{ color: CREAM }}>
              Brandt &amp; Kollegen
            </span>
          </div>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed">
            Rechtsanwälte &amp; Notar in Berlin — seit 1987 an Ihrer Seite.
          </p>
        </div>

        <div>
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: BRASS }}
          >
            Rechtsgebiete
          </p>
          <ul className="mt-4 space-y-2 text-[13px]">
            {["Arbeitsrecht", "Familienrecht", "Erbrecht", "Verkehrsrecht"].map(
              (a) => (
                <li key={a}>
                  <button type="button" onClick={() => onTab("rechtsgebiete")}>
                    {a}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: BRASS }}
          >
            Kontakt
          </p>
          <ul className="mt-4 space-y-2 text-[13px]">
            <li>Friedrichstraße 1, 10117 Berlin</li>
            <li>030 / 12 34 56</li>
            <li>kanzlei@brandt-kollegen.de</li>
          </ul>
        </div>
      </div>

      <div
        className="flex flex-col gap-2 py-6 text-[11px] sm:flex-row sm:items-center sm:justify-between"
        style={{ borderTop: `1px solid #ffffff1a` }}
      >
        <span>© 2026 Brandt &amp; Kollegen. Alle Rechte vorbehalten.</span>
        <span className="inline-flex gap-5">
          <span>Impressum</span>
          <span>Datenschutz</span>
        </span>
      </div>
    </footer>
  );
}
