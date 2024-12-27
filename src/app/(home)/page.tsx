"use client";

import { AudioPlayer } from "@/components/audio-player";
import { Background } from "@/components/background";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Page() {
  return (
    <BackgroundLines className="flex min-h-screen items-center justify-center py-12 md:py-6 px-5">
      <AudioPlayer />

      <div className="relative">
        <Background />
      </div>
    </BackgroundLines>
  );
}
