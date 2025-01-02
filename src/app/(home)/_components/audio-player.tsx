"use client";

import { useState, useRef } from "react";
import { Pause, Play } from "lucide-react";

import { Button } from "@/components/ui/button";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationState, setAnimationState] = useState<string>("paused");

  function togglePlay() {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setAnimationState("paused");
    } else {
      audioRef.current.play();
      setAnimationState("running");
    }

    setIsPlaying(!isPlaying);
  }

  return (
    <div className="fixed left-5 top-5 md:top-auto md:bottom-5 z-50">
      <div className="w-[280px] flex flex-col items-center p-3 bg-white border rounded-md relative overflow-hidden shadow-md">
        <div className="absolute top-0 left-0 opacity-20">
          <div
            className="ocean"
            style={{ animationPlayState: animationState }}
          />
        </div>

        <div className="flex items-center gap-3 w-full z-50">
          <img
            src="thumbnail.jpg"
            alt="MC Teteu - Dingo Bell"
            className="w-14 h-14 object-cover rounded-md "
          />

          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-sm text-gray-500 truncate">MC Teteu</span>
            <span className="text-base font-bold truncate">Dingo Bell</span>
          </div>

          <Button size="icon" onClick={togglePlay}>
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            <span className="sr-only">{isPlaying ? "Pausar" : "Tocar"}</span>
          </Button>
        </div>

        <audio ref={audioRef} src="teteu.mp3" />
      </div>
    </div>
  );
}
