"use client";

import { useState, useEffect, useRef } from "react";
import { differenceInCalendarDays } from "date-fns";

import { cn } from "@/utils/cn";

import { Background } from "@/components/background";
import { AudioPlayer } from "@/components/audio-player";
import { EmojiRain } from "@/components/emoji-rain";

export default function HomePage() {
  const [currentDay, setCurrentDay] = useState<number>(0);
  const [daysUntilChristmas, setDaysUntilChristmas] = useState<number>(0);
  const [isChristmas, setIsChristmas] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const serverDate = new Date();
    setCurrentDay(serverDate.getDate());

    const christmasDate = new Date(serverDate.getFullYear(), 11, 25);
    const daysLeft = differenceInCalendarDays(christmasDate, serverDate);
    setDaysUntilChristmas(daysLeft);

    if (serverDate.getDate() === 25 && serverDate.getMonth() === 11) {
      setIsChristmas(true);

      // Tocar o som de foguete quando for Natal
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
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

        <audio ref={audioRef} src="/foguete.mp3" />
      </div>
    </>
  );
}
