"use client";

import { useState, useEffect } from "react";

import { Background } from "@/components/background";
import { AudioPlayer } from "@/components/audio-player";
import { ConfettiExplosion } from "@/components/confetti-explosion";

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
    <div className="w-full space-y-12 mt-72">
      <AudioPlayer />

      <div className="w-full">
        <Background currentDay={currentDay} />
      </div>

      <div className="text-center pb-12">
        {isChristmas && <ConfettiExplosion />}

        <h1 className="text-white text-3xl font-medium uppercase">
          {isChristmas
            ? "Feliz Natal!"
            : <>Faltam <b>{daysUntilChristmas}</b> dias para o Mc Teteu descongelar!</>}
        </h1>
      </div>
    </div>
  );
}
