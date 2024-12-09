import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const host = process.env.NEXT_PUBLIC_VERCEL_URL;

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "MC Teteu no Natal";

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
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              color: "white",
              marginTop: 30,
              padding: "0 120px",
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
              textShadow:
                "#000 2px -2px 3px, #000 -2px 2px 3px, #000 2px 2px 3px, #000 -2px -2px 3px",
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1201,
        height: 675,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Falha ao gerar a imagem`, {
      status: 500,
    });
  }
}
