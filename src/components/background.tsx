import { motion } from "framer-motion";

import { images } from "@/utils/images";
import { cn } from "@/utils/cn";

interface BackgroundProps {
  currentDay: number;
  isChristmas: boolean;
}

export function Background({ currentDay, isChristmas }: BackgroundProps) {
  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const image = images[currentDay] || images["default"];

  return (
    <motion.div
      className={cn(
        "w-full rounded-md z-[99999]",
        isChristmas && "animate-bounce-christmas"
      )}
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{
        duration: 2,
        ease: "easeOut",
        repeatType: "mirror",
      }}
    >
      <motion.img
        src={`photos/${image}.png`}
        alt="MC Teteu"
        className="w-full object-contain rounded-md"
        onContextMenu={handleRightClick}
        initial={{ filter: "contrast(0.5) brightness(0.5)" }}
        animate={{
          filter: "contrast(1) brightness(1)",
        }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </motion.div>
  );
}
