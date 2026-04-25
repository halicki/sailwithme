import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "ODDECH i WIATR — Rejs transformacyjny w Grecji 2026";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(180deg, #0a1520 0%, #0f2a42 48%, #132d46 100%)",
          color: "#e8edf2",
          padding: "72px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#8eb8d4",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          <span>Rejs transformacyjny</span>
          <span>Grecja 2026</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontSize: 118,
              lineHeight: 0.95,
              letterSpacing: 16,
              fontWeight: 400,
              textTransform: "uppercase",
            }}
          >
            ODDECH
          </div>
          <div
            style={{
              color: "#8eb8d4",
              fontSize: 40,
              letterSpacing: 12,
              marginLeft: 8,
            }}
          >
            i
          </div>
          <div
            style={{
              fontSize: 118,
              lineHeight: 0.95,
              letterSpacing: 16,
              fontWeight: 400,
              textTransform: "uppercase",
            }}
          >
            WIATR
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 48,
            fontSize: 32,
            lineHeight: 1.35,
            color: "#c5d0db",
          }}
        >
          <span style={{ maxWidth: 680 }}>
            Żeglowanie. Freediving. Breathwork. 20-27 czerwca, Zatoka
            Sarońska.
          </span>
          <span style={{ color: "#8eb8d4", letterSpacing: 4 }}>8-10 miejsc</span>
        </div>
      </div>
    ),
    size
  );
}
