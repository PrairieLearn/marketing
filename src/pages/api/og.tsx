import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { plLogoWhiteSvg } from "../../lib/images/pl-logo-white-svg";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#084298",
        padding: "60px",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img
        src={`data:image/svg+xml,${encodeURIComponent(plLogoWhiteSvg)}`}
        width={500}
        height={105}
      />
      <div
        style={{
          color: "white",
          fontSize: 48,
          textAlign: "center",
          marginTop: 40,
          maxWidth: 900,
          lineHeight: 1.3,
          whiteSpace: "pre-wrap",
        }}
      >
        {title || "The most comprehensive\nassessment platform"}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
