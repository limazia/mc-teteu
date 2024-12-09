import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const host = process.env.NEXT_PUBLIC_VERCEL_URL;

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
            position: "relative",
          }}
        >
          <div
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
              {title}
            </span>
          </div>
        </div>
      ),
      {
        status: 200,
        headers: {
          "Cache-Control": "s-maxage=3600",
        },
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