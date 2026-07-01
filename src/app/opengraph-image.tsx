import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Verdex — Websites & digitale Positionierung für Kanzleien";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "#102512",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#8fb290",
            marginBottom: 32,
          }}
        >
          Verdex
        </div>
        <div
          style={{
            fontSize: 64,
            lineHeight: 1.08,
            fontWeight: 600,
            maxWidth: 900,
          }}
        >
          Moderne Websites & lokale Sichtbarkeit für Kanzleien
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            lineHeight: 1.45,
            color: "rgba(255,255,255,0.72)",
            maxWidth: 820,
          }}
        >
          DSGVO-konform · deutschlandweit remote · auf die Anwaltspraxis
          zugeschnitten
        </div>
      </div>
    ),
    { ...size },
  );
}
