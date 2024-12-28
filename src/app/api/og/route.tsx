import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { getChristmasCountdown } from "@/utils/christmas";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const response = await generateOGResponse();

  response.headers.set(
    "Cache-Control",
    "public, max-age=0, s-maxage=0, must-revalidate"
  );

  return response;
}

async function generateOGResponse() {
  const { ogText } = getChristmasCountdown();
  const host = process.env.NEXT_PUBLIC_VERCEL_URL;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 40,
          color: "black",
          backgroundImage: `url(${host}/og-image.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: 60,
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 30,
              color: "white",
              lineHeight: 1.4,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              padding: "0 20px",
              textTransform: "uppercase",
            }}
          >
            {ogText}
          </span>
        </div> */}
      </div>
    ),
    {
      width: 1201,
      height: 675,
    }
  );
}
