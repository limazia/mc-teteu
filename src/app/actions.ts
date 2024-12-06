"use server";

import { differenceInCalendarDays } from "date-fns";
import { format } from "date-fns-tz";

type ChristmasInfo = {
  currentDay: number;
  daysUntilChristmas: number;
  isChristmas: boolean;
}

export async function getChristmasInfo(): Promise<ChristmasInfo> {
  // Get current date in São Paulo timezone
  const nowUtc = new Date();
  const formattedDate = format(nowUtc, "yyyy-MM-dd HH:mm:ssXXX", {
    timeZone: "America/Sao_Paulo",
  });
  const currentDate = new Date(formattedDate);

  // Get current day
  const currentDay = currentDate.getDate();

  // Calculate days until Christmas
  const christmasDate = new Date(currentDate.getFullYear(), 11, 25);
  const daysUntilChristmas = differenceInCalendarDays(christmasDate, currentDate);

  // Check if it's Christmas
  const isChristmas = currentDate.getDate() === 25 && currentDate.getMonth() === 11;

  return {
    currentDay,
    daysUntilChristmas,
    isChristmas
  };
}
