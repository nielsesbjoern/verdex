"use client";

/**
 * Fictional, deliberately dated law-firm website ("Before").
 *
 * Purely a demonstration component for the Before/After showcase. The firm,
 * names and contact details are invented and anonymised — see the disclaimer
 * rendered by `BeforeAfterShowcase`.
 */
export function MockSiteBefore() {
  return (
    <div
      className="min-h-full w-full bg-[#e9eef3] text-[#1a1a1a]"
      style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
    >
      {/* Header with glossy blue gradient */}
      <header
        className="border-b-2 border-[#0a2a55]"
        style={{
          background: "linear-gradient(180deg,#2a5a9e 0%,#0a2a55 100%)",
        }}
      >
        <div className="mx-auto flex max-w-[920px] items-center justify-between gap-3 px-4 py-3">
          <div className="text-white">
            <div className="text-xl font-bold tracking-tight drop-shadow sm:text-2xl">
              &#9878; Kanzlei Brandt &amp; Kollegen
            </div>
            <div className="text-[11px] italic text-[#cfe0f5]">
              Rechtsanw&auml;lte &middot; Notar &middot; seit 1987
            </div>
          </div>
          <div className="hidden text-right text-[11px] leading-tight text-[#cfe0f5] sm:block">
            Tel. 030 / 12 34 56 &middot; Fax 030 / 12 34 57
            <br />
            info@kanzlei-brandt-beispiel.de
          </div>
        </div>

        {/* Beveled navigation bar */}
        <nav className="bg-[#0a2a55]">
          <ul className="mx-auto flex max-w-[920px] flex-wrap text-[12px] text-white">
            {[
              "Startseite",
              "Über uns",
              "Rechtsgebiete",
              "Team",
              "Honorar",
              "Anfahrt",
              "Kontakt",
              "Impressum",
            ].map((item, i) => (
              <li
                key={item}
                className={`border-r border-[#2a5a9e] px-3 py-1.5 hover:bg-[#1c3f73] ${
                  i === 0 ? "bg-[#1c3f73] font-bold" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Body: main + sidebar */}
      <div className="mx-auto grid max-w-[920px] grid-cols-1 gap-4 px-4 py-5 sm:grid-cols-[1fr_210px]">
        <main>
          <h1 className="mb-2 text-[24px] font-bold text-[#0a2a55] underline">
            Herzlich Willkommen!
          </h1>
          <p className="mb-3 text-justify text-[13px] leading-[1.5]">
            Die Kanzlei Brandt &amp; Kollegen ist Ihr kompetenter und
            zuverl&auml;ssiger Partner in allen Rechtsfragen. Seit &uuml;ber 35
            Jahren beraten und vertreten wir Privatpersonen sowie kleine und
            mittelst&auml;ndische Unternehmen in der gesamten Region. Vertrauen
            Sie auf unsere langj&auml;hrige Erfahrung und unser Engagement.
          </p>
          <p className="mb-4 text-justify text-[13px] leading-[1.5]">
            Vereinbaren Sie noch heute einen Termin. Wir nehmen uns Zeit
            f&uuml;r Ihr Anliegen!
          </p>

          <table className="mb-4 w-full border-collapse text-[12px]">
            <tbody>
              {[
                ["Arbeitsrecht", "Kündigung, Abfindung, Aufhebungsvertrag"],
                ["Familienrecht", "Scheidung, Unterhalt, Sorgerecht"],
                ["Erbrecht", "Testament, Pflichtteil, Nachlass"],
                ["Verkehrsrecht", "Unfall, Bußgeld, Führerschein"],
              ].map(([area, desc]) => (
                <tr key={area}>
                  <td className="w-[120px] border border-[#9fb6d4] bg-[#dbe6f3] px-2 py-1 align-top font-bold text-[#0a2a55]">
                    {area}
                  </td>
                  <td className="border border-[#9fb6d4] bg-white px-2 py-1">
                    {desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="border border-dashed border-[#b00000] bg-[#fff6f6] p-2 text-[12px] text-[#b00000]">
            <b>NEU:</b> Erstberatung jetzt auch telefonisch m&ouml;glich! Rufen
            Sie uns an.
          </div>

          <p className="mt-4 text-justify text-[12px] leading-[1.5] text-[#333]">
            Unsere Kanzlei legt gr&ouml;&szlig;ten Wert auf eine pers&ouml;nliche
            Betreuung. In einem pers&ouml;nlichen Gespr&auml;ch ermitteln wir
            gemeinsam mit Ihnen die beste Vorgehensweise f&uuml;r Ihren Fall. Wir
            freuen uns auf Ihren Anruf oder Ihre E-Mail.
          </p>
        </main>

        {/* Sidebar */}
        <aside className="space-y-3 text-[12px]">
          <div className="border border-[#9fb6d4] bg-white">
            <div className="bg-[#0a2a55] px-2 py-1 font-bold text-white">
              &Ouml;ffnungszeiten
            </div>
            <div className="px-2 py-2 leading-[1.6]">
              Mo&ndash;Do: 9&ndash;17 Uhr
              <br />
              Fr: 9&ndash;13 Uhr
              <br />
              und nach Vereinbarung
            </div>
          </div>
          <div className="border border-[#9fb6d4] bg-white p-2 text-center">
            <div className="font-bold text-[#0a2a55]">Besucher</div>
            <div className="mt-1 inline-block bg-black px-2 py-0.5 font-mono text-[13px] text-[#39ff14]">
              000147823
            </div>
          </div>
          <div className="border border-[#9fb6d4] bg-[#fffbe6] p-2 text-center text-[11px] italic">
            &bdquo;Recht haben und Recht bekommen sind zweierlei.&ldquo;
          </div>
        </aside>
      </div>

      <footer className="border-t border-[#9fb6d4] bg-[#d4dfee] px-4 py-2 text-center text-[11px] text-[#445566]">
        &copy; 2009 Kanzlei Brandt &amp; Kollegen &middot; Letzte
        Aktualisierung: 14.03.2011 &middot; Optimiert f&uuml;r Internet Explorer
        6 &middot; 1024&times;768
      </footer>
    </div>
  );
}
