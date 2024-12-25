"use server";

import { format } from "date-fns-tz";

export async function getServerTime() {
  // Get the current date and time in UTC
  const nowUtc = new Date();

  // Format the date to a readable string, adjusted for Brasília time (BRT)
  const formattedDate = format(nowUtc, "yyyy-MM-dd HH:mm:ssXXX", {
    timeZone: "America/Sao_Paulo",
  });

  // Return the actual Date object, not the formatted string
  return new Date(formattedDate);
}
