import { useState, useRef } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full flex flex-col items-center p-6 bg-white rounded-md space-y-4">
      <span className="text-2xl font-bold text-center">MC Teteu - Dingo Bell</span>

      <audio ref={audioRef} src="teteu.mp3" className="mb-4" />

      <button
        onClick={togglePlay}
        className="flex items-center gap-1.5 px-6 py-2 bg-blue-500 text-white rounded-full transition ease-linear duration-300 hover:bg-blue-600"
      >
        {isPlaying ? "Pausar" : "Tocar"}
      </button>
    </div>
  );
}
