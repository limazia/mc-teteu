"use client";

import { useState, useEffect } from "react";
import { EmojiRain } from "@/components/emoji-rain";
import { AudioPlayer } from "@/components/audio-player";
import { Background } from "@/components/background";
import { getChristmasInfo } from "./actions";

export default function Page() {
  const [currentDay, setCurrentDay] = useState<number>(0);
  const [daysUntilChristmas, setDaysUntilChristmas] = useState<number>(0);
  const [isChristmas, setIsChristmas] = useState<boolean>(false);

  useEffect(() => {
    async function checkChristmas() {
      const { currentDay, daysUntilChristmas, isChristmas } = await getChristmasInfo();
      setCurrentDay(currentDay);
      setDaysUntilChristmas(daysUntilChristmas);
      setIsChristmas(isChristmas);
    }

    checkChristmas();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center px-14 max-w-4xl">
      {isChristmas && <EmojiRain />}

      <div className={`flex flex-col items-center py-8 ${isChristmas ? "space-y-32" : "space-y-8"}`}>
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
    </main>
  );
}
