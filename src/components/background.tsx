"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { unstable_noStore as noStore } from "next/cache";

import { getChristmasCountdown } from "@/utils/christmas";
import { getImageForDate } from "@/utils/images";

export function Background() {
  const [image, setImage] = useState<string | null>(null);
  const [countdownText, setCountdownText] = useState("");

  useEffect(() => {
    // Atualiza o countdown
    const updateCountdown = () => {
      const { countdownText } = getChristmasCountdown();
      setCountdownText(countdownText);
    };

    // Atualiza imediatamente e depois a cada segundo
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    async function getCurrentImage() {
      noStore();
      const now = new Date();
      const image = getImageForDate(now);

      setImage(image);
    }

    getCurrentImage();
  }, []);

  return (
    <div className="w-full space-y-6">
      <Image
        src={`/photos/${image}`}
        alt="Imagem do dia"
        width={1920}
        height={1080}
        className="w-full h-full object-cover rounded-xl"
        priority
      />

      <div className="text-center text-4xl font-bold">
        <span className="text-red-500 animate-pulse">{countdownText}</span>
      </div>
    </div>
  );
}
