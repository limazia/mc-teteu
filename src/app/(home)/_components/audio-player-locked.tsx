import { Lock } from "lucide-react";

export function AudioPlayerLocked() {
  return (
    <div className="fixed left-5 top-5 md:top-auto md:bottom-5 z-50">
      <div className="w-[400px] flex flex-col items-center p-3 bg-white border rounded-md relative overflow-hidden shadow-md">
        <div className="flex items-center gap-3 w-full z-50 blur-lg select-none">
          <div className="flex flex-col">
            <p className="font-bold">Ei, apressadinho!</p>
            <p>Espere o Natal para tocar essa música 🎄🎶</p>
          </div>
        </div>

        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <Lock className="size-12 text-gray-500" />
        </div>
      </div>
    </div>
  );
}
