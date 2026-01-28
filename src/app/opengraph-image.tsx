import { siteConfig } from "@/lib/constants";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "30%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(87,172,39,0.3) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "20%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(132,204,22,0.2) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "96px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            textShadow: "0 0 80px rgba(87, 172, 39, 0.3)",
          }}
        >
          {siteConfig.name.toUpperCase()}
        </h1>
        <p
          style={{
            fontSize: "32px",
            color: "rgba(255, 255, 255, 0.6)",
            marginTop: "16px",
          }}
        >
          {siteConfig.tagline}
        </p>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
