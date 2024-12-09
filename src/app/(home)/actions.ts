"use server";

type ChristmasInfo = {
  currentDay: number;
  daysUntilChristmas: number;
  isChristmas: boolean;
};

export async function getChristmasInfo(): Promise<ChristmasInfo> {
  const nowUtc = new Date();
  const timezone = "America/Sao_Paulo";

  const localTime = new Date(
    nowUtc.toLocaleString("en-US", { timeZone: timezone })
  );

  const currentDay = localTime.getDate();

  const daysUntilChristmas = 25 - currentDay;

  const isChristmas = currentDay === 25;

  return {
    currentDay,
    daysUntilChristmas,
    isChristmas,
  };
}
