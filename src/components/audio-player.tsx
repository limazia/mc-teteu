import { useState, useRef } from "react";

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
    <div className="flex flex-col items-center p-6 bg-white rounded-md shadow-md">
      <span className="text-2xl font-bold mb-4">MC Teteu - Dingo Bell</span>

      <audio
        ref={audioRef}
        src="teteu.mp3"
        className="mb-4"
      />

      <button
        onClick={togglePlay}
        className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
      >
        {isPlaying ? "Pausar" : "Tocar"}
      </button>
    </div>
  );
}
