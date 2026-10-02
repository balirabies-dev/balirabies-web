import { ImageResponse } from "next/og";
import { isLocale } from "../lib/i18n/config";
export const alt = "BaliRabies — Explore Bali with Confidence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const indonesian = isLocale(lang) && lang === "id";
  return new ImageResponse(
    <div
      style={{
        background: "#e4f1ee",
        color: "#16343d",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 90,
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 30,
          color: "#006b68",
          marginBottom: 50,
        }}
      >
        BaliRabies
      </div>
      <div style={{ fontSize: 56, display: "flex" }}>{indonesian ? "Jelajahi Bali" : "Explore Bali"}</div>
      <div style={{ fontSize: 56, color: "#006b68", display: "flex" }}>
        {indonesian ? "dengan Percaya Diri" : "with Confidence"}
      </div>
      <div style={{ fontSize: 24, marginTop: 40, display: "flex" }}>
        {indonesian ? "Informasi rabies untuk wisatawan." : "Rabies information for travelers."}
      </div>
    </div>,
    size,
  );
}
