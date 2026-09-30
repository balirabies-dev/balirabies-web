import { ImageResponse } from "next/og";
export const alt = "BaliRabies — Make Bali home. Keep care close.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
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
      <div style={{ fontSize: 76, display: "flex" }}>Make Bali home.</div>
      <div style={{ fontSize: 76, color: "#006b68", display: "flex" }}>
        Keep care close.
      </div>
      <div style={{ fontSize: 24, marginTop: 40, display: "flex" }}>
        Personal care. Clear next steps.
      </div>
    </div>,
    size,
  );
}
