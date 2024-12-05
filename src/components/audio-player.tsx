import { useState, useRef } from "react";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationState, setAnimationState] = useState<string>("paused");

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setAnimationState("paused");
    } else {
      audioRef.current.play();
      setAnimationState("running");
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full flex flex-col items-center p-6 bg-white rounded-md space-y-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 opacity-20">
        <div className="ocean" style={{ animationPlayState: animationState }} />
      </div>

      <span className="text-2xl font-bold text-center relative z-10">
        MC Teteu - Dingo Bell
      </span>

      <audio ref={audioRef} src="teteu.mp3" className="mb-4" />

      <button
        onClick={togglePlay}
        className="flex items-center gap-1.5 px-6 py-2 bg-blue-500 text-white rounded-full transition ease-linear duration-300 hover:bg-blue-600 relative z-10"
      >
        {isPlaying ? "Pausar" : "Tocar"}
      </button>
    </div>
  );
}