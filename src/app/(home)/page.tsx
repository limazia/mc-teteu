import { getChristmasInfo } from "./actions";

import { AudioPlayer } from "./_components/audio-player";
import { Background } from "./_components/background";
import { BackgroundLines } from "@/components/ui/background-lines";

export default async function Page() {
  const { isChristmas } = await getChristmasInfo();

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <AudioPlayer />

      <BackgroundLines>
        <div className="relative">
          <Background />
        </div>
      </BackgroundLines>
    </div>
  );
}
