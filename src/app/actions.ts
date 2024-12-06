"use server";

import { format } from "date-fns-tz";

type ChristmasInfo = {
  currentDay: number;
  daysUntilChristmas: number;
  isChristmas: boolean;
};

export async function getChristmasInfo(): Promise<ChristmasInfo> {
  const nowUtc = new Date();
  const formattedDate = format(nowUtc, "yyyy-MM-dd HH:mm:ssXXX", {
    timeZone: "America/Sao_Paulo",
  });
  const currentDate = new Date(formattedDate);

  const currentDay = currentDate.getDate();

  const daysUntilChristmas = 25 - currentDay;

  const isChristmas = currentDay === 25;

  return {
    currentDay,
    daysUntilChristmas,
    isChristmas,
  };
}
