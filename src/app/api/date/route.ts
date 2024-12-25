import { NextResponse } from "next/server";
import { format } from "date-fns-tz";

export async function GET() {
  // Get the current date and time in UTC
  const nowUtc = new Date();

  // Format the date to a readable string, adjusted for Brasília time (BRT)
  const formattedDate = format(nowUtc, "yyyy-MM-dd HH:mm:ssXXX", {
    timeZone: "America/Sao_Paulo",
  });

  return NextResponse.json(formattedDate);
}
