"use client";

import { useState, useEffect } from "react";
import { differenceInCalendarDays } from "date-fns";

import { cn } from "@/utils/cn";

import { Background } from "@/components/background";
import { AudioPlayer } from "@/components/audio-player";
import { EmojiRain } from "@/components/emoji-rain";
import { getServerTime } from "./actions";

export default function Page() {
  const [currentDay, setCurrentDay] = useState<number>(0);
  const [daysUntilChristmas, setDaysUntilChristmas] = useState<number>(0);
  const [isChristmas, setIsChristmas] = useState<boolean>(false);

  useEffect(() => {
    async function isChristmasDay() {
      const date = await getServerTime();
      setCurrentDay(date.getDate());

      const christmasDate = new Date(date.getFullYear(), 11, 25);
      const daysLeft = differenceInCalendarDays(christmasDate, date);
      setDaysUntilChristmas(daysLeft);

      if (date.getDate() === 25 && date.getMonth() === 11) {
        setIsChristmas(true);
      }
    }

    isChristmasDay();
  }, []);

  return (
    <>
      {isChristmas && <EmojiRain />}
      <div
        className={cn(
          "flex flex-col items-center py-8",
          isChristmas ? "space-y-32" : "space-y-8"
        )}
      >
        <AudioPlayer />

        <Background currentDay={currentDay} isChristmas={isChristmas} />

        {!isChristmas && (
          <div className="text-center text-4xl font-bold mb-4">
            Faltam{" "}
            <span className="text-red-500 animate-pulse">
              {daysUntilChristmas}
            </span>{" "}
            dias para o Mc Teteu descongelar! 🎤❄️
          </div>
        )}
      </div>
    </>
  );
}
