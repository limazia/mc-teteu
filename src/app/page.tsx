"use client";

import { useState, useEffect } from "react";

import { Background } from "@/components/background";
import { AudioPlayer } from "@/components/audio-player";

export default function HomePage() {
  const [currentDay, setCurrentDay] = useState<number>(new Date().getDate());
  const [daysUntilChristmas, setDaysUntilChristmas] = useState<number>(
    25 - currentDay
  );
  const [isChristmas, setIsChristmas] = useState<boolean>(false);

  useEffect(() => {
    const today = new Date().getDate();
    setCurrentDay(today);
    setDaysUntilChristmas(25 - today);

    if (today === 25) {
      setIsChristmas(true);
    }
  }, []);

  return (
    <div className="flex flex-col items-center space-y-6 py-12">
      <AudioPlayer />

      <Background currentDay={currentDay} />

      <div className="text-center pb-10">
        <h1 className="text-black text-3xl font-medium uppercase">
          {isChristmas ? (
            "Feliz Natal!"
          ) : (
            <>
              Faltam <b>{daysUntilChristmas}</b> dias para o Mc Teteu
              descongelar! 🎤❄️
            </>
          )}
        </h1>
      </div>
    </div>
  );
}
