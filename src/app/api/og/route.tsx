import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const targetDate = new Date("2025-12-25");
  const today = new Date();
  const diffTime = targetDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

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
            Faltam {diffDays} dias para o Natal! 🎄
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 675,
    }
  );
}
