"use client";

import { useState } from "react";
import { Lora } from "next/font/google";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Scale,
} from "lucide-react";

/**
 * The same fictional law firm reimagined as a more modern, usable professional
 * site ("After"), with working sub-tabs (Kanzlei, Rechtsgebiete, Team, Kontakt).
 *
 * Uses its own quieter identity: white surfaces, a red accent and near-black
 * text in a classic Lora serif, so it reads like a conservative law firm rather
 * than a Verdex-branded landing page.
 * Demonstration component only; all content is anonymised / invented.
 */

const mockFont = Lora({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

const RED = "#8a1620";
const NAVY = "#161616";
const NAVY_DEEP = "#0f0f0f";
const BRASS = "#8a1620";
const CREAM = "#ffffff";
const PANEL = "#f6f5f3";
const INK = "#161616";
const MUTED = "#5b5f63";
const HAIRLINE = "#e6e3df";

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
      className={`min-h-full w-full ${mockFont.className}`}
      style={{ backgroundColor: CREAM, color: INK }}
    >
      {/* Utility bar */}
      <div
        className="hidden items-center justify-between px-6 py-2.5 text-[12px] sm:flex sm:px-10"
        style={{ backgroundColor: NAVY_DEEP, color: "#d4d1ca" }}
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
                className="block text-lg leading-none"
                style={{ color: NAVY }}
              >
                Brandt &amp; Kollegen
              </span>
              <span
                className="mt-1 block text-[12px]"
                style={{ color: BRASS }}
              >
                Rechtsanwälte · Notar
              </span>
            </span>
          </button>
          <button
            type="button"
            onClick={() => setTab("kontakt")}
            className="hidden items-center gap-2 px-5 py-2.5 text-[13px] font-medium text-white sm:inline-flex"
            style={{ backgroundColor: RED }}
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
                className="relative pb-2 text-[14px] font-medium transition-colors duration-200"
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
      className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden border bg-white"
      style={{ borderColor: HAIRLINE }}
    >
      <div
        className="absolute inset-5"
        style={{ border: `1px solid ${HAIRLINE}` }}
      />
      <div className="relative flex flex-col items-center px-6 text-center">
        <span
          className="flex h-16 w-16 items-center justify-center rounded-full"
          style={{ backgroundColor: CREAM, border: `1px solid ${HAIRLINE}` }}
        >
          <Scale size={28} style={{ color: BRASS }} />
        </span>
        <span
          className="mt-6 text-2xl"
          style={{ color: NAVY }}
        >
          Brandt &amp; Kollegen
        </span>
        <span
          className="mt-3 text-[13px]"
          style={{ color: MUTED }}
        >
          Rechtsanwälte und Notar
        </span>
        <span
          className="mt-6 h-px w-16"
          style={{ backgroundColor: HAIRLINE }}
        />
        <span
          className="mt-4 text-[13px]"
          style={{ color: MUTED }}
        >
          Berlin-Mitte, seit 1987
        </span>
      </div>
    </div>
  );
}

/* ------------------------------- Kanzlei ------------------------------- */

function KanzleiTab({ onContact }: { onContact: () => void }) {
  const stats = [
    ["1987", "gegründet"],
    ["4", "Fachbereiche"],
    ["9", "Anwält:innen"],
    ["1", "Notariat"],
  ];

  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-16 pt-12 sm:px-10 sm:pt-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h1
              className="text-4xl leading-[1.08] sm:text-5xl lg:text-[56px]"
              style={{ color: NAVY }}
            >
              Rechtsanwälte &amp; Notar in Berlin-Mitte.
            </h1>
            <p
              className="mt-7 max-w-xl text-base leading-relaxed"
              style={{ color: MUTED }}
            >
              Beratung und Vertretung im Arbeitsrecht, Familienrecht, Erbrecht
              und Verkehrsrecht. Persönlich erreichbar, mit festen
              Ansprechpartnern und klaren nächsten Schritten.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <button
                type="button"
                onClick={onContact}
                className="inline-flex items-center gap-3 px-6 py-3.5 text-sm font-medium text-white"
                style={{ backgroundColor: RED }}
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
        className="px-6 py-8 sm:px-10"
        style={{
          backgroundColor: PANEL,
          borderTop: `1px solid ${HAIRLINE}`,
          borderBottom: `1px solid ${HAIRLINE}`,
        }}
      >
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label}>
              <p
                className="text-3xl tracking-tight sm:text-4xl"
                style={{ color: NAVY }}
              >
                {value}
              </p>
              <p
                className="mt-2 text-[13px]"
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
            <h2
              className="text-2xl leading-snug sm:text-3xl"
              style={{ color: NAVY }}
            >
              Beratung, die den Sachverhalt zuerst ordnet.
            </h2>
          </div>
          <div
            className="space-y-4 text-[15px] leading-relaxed"
            style={{ color: MUTED }}
          >
            <p>
              Seit 1987 betreut die Kanzlei Privatpersonen und Unternehmen in
              rechtlichen Fragen, bei denen eine belastbare Einschätzung zählt.
              Im ersten Gespräch klären wir Sachstand, Unterlagen und mögliche
              Vorgehensweisen.
            </p>
            <p>
              Jeder Vorgang erhält eine zuständige Ansprechperson. Fristen,
              Kosten und nächste Schritte werden früh besprochen, damit
              Mandantinnen und Mandanten wissen, woran sie sind.
            </p>
          </div>
        </div>
      </section>

      {/* Practical information */}
      <section className="px-6 py-14 sm:px-10" style={{ backgroundColor: NAVY }}>
        <div className="grid grid-cols-1 gap-8 text-white lg:grid-cols-3">
          {[
            ["Sprechzeiten", "Mo-Fr 9-18 Uhr, Termine nach Vereinbarung."],
            ["Ersteinschätzung", "Kurze telefonische Klärung vor Mandatsbeginn."],
            ["Unterlagen", "Dokumente können vorab digital eingereicht werden."],
          ].map(([title, body]) => (
            <div key={title} className="border-t border-white/20 pt-5">
              <h3 className="text-xl">{title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/75">
                {body}
              </p>
            </div>
          ))}
        </div>
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
      "Kündigung, Abfindung, Aufhebungsvertrag, Zeugnis und laufende arbeitsrechtliche Beratung.",
    ],
    [
      "II",
      "Familienrecht",
      "Scheidung, Unterhalt sowie Sorge- und Umgangsrecht mit klarer Vorbereitung der nächsten Schritte.",
    ],
    [
      "III",
      "Erbrecht",
      "Testament, Pflichtteil, Nachlassabwicklung und Vertretung in erbrechtlichen Auseinandersetzungen.",
    ],
    [
      "IV",
      "Verkehrsrecht",
      "Unfallregulierung, Bußgeldverfahren und Fahrerlaubnisfragen nach Verkehrsvorfällen.",
    ],
  ];

  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20">
      <h2
        className="max-w-2xl text-3xl leading-tight sm:text-4xl"
        style={{ color: NAVY }}
      >
        Rechtliche Beratung in vier Schwerpunkten.
      </h2>
      <p className="mt-5 max-w-2xl text-[15px] leading-relaxed" style={{ color: MUTED }}>
        Die Kanzlei bündelt ihre Arbeit auf Bereiche, in denen häufig schnelle
        Einschätzungen, belastbare Dokumente und klare Kommunikation erforderlich
        sind.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {areas.map(([n, title, body]) => (
          <div
            key={n}
            className="border bg-white p-7 transition-shadow duration-300"
            style={{ backgroundColor: "#fff", border: `1px solid ${HAIRLINE}` }}
          >
            <div className="flex items-baseline justify-between">
              <p className="text-sm" style={{ color: BRASS }}>
                {n}
              </p>
              <span
                className="h-px w-10"
                style={{ backgroundColor: `${BRASS}66` }}
              />
            </div>
            <h3
              className="mt-4 text-2xl"
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
      <h2
        className="max-w-2xl text-3xl leading-tight sm:text-4xl"
        style={{ color: NAVY }}
      >
        Zuständige Ansprechpartner statt anonymer Fallbearbeitung.
      </h2>

      {/* Tier 1 — Partners */}
      <p
        className="mt-12 text-[13px] font-medium"
        style={{ color: MUTED }}
      >
        Partnerinnen &amp; Partner
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {partners.map(([initials, name, role]) => (
          <div
            key={name}
            className="flex items-center gap-5 border bg-white p-6"
            style={{ backgroundColor: "#fff", border: `1px solid ${HAIRLINE}` }}
          >
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg"
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
                className="text-xl"
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
        className="mt-14 text-[13px] font-medium"
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
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-sm"
                style={{
                  backgroundColor: isNotar ? NAVY : PANEL,
                  color: isNotar ? CREAM : NAVY,
                  border: `1px solid ${isNotar ? `${BRASS}88` : HAIRLINE}`,
                }}
              >
                {initials}
              </div>
              <h4
                className="mt-3 text-base leading-tight"
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
      <h2
        className="max-w-2xl text-3xl leading-tight sm:text-4xl"
        style={{ color: NAVY }}
      >
        Kontakt aufnehmen.
      </h2>
      <p className="mt-5 max-w-2xl text-[15px] leading-relaxed" style={{ color: MUTED }}>
        Für neue Mandate genügt zunächst eine kurze Nachricht mit Betreff,
        Fristen und den wichtigsten Unterlagen.
      </p>

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
          className="space-y-4 border bg-white p-7"
          style={{ backgroundColor: "#fff", border: `1px solid ${HAIRLINE}` }}
        >
          {["Name", "E-Mail"].map((label) => (
            <div key={label}>
              <label
                className="block text-[13px] font-medium"
                style={{ color: MUTED }}
              >
                {label}
              </label>
              <div
                className="mt-2 h-10 w-full border bg-white"
                style={{ backgroundColor: CREAM, border: `1px solid ${HAIRLINE}` }}
              />
            </div>
          ))}
          <div>
            <label
              className="block text-[13px] font-medium"
              style={{ color: MUTED }}
            >
              Nachricht
            </label>
            <div
              className="mt-2 h-24 w-full border bg-white"
              style={{ backgroundColor: CREAM, border: `1px solid ${HAIRLINE}` }}
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium text-white"
            style={{ backgroundColor: RED }}
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
            <span className="text-lg" style={{ color: CREAM }}>
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
