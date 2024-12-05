import { motion } from "framer-motion";

import { images } from "@/utils/images";

interface BackgroundProps {
  currentDay: number;
}

export function Background({ currentDay }: BackgroundProps) {
  return (
    <motion.div
      className="w-full rounded-md"
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{
        duration: 2,
        ease: "easeOut",
        repeatType: "mirror",
      }}
    >
      <motion.img
        src={`${images[currentDay]}.png`}
        alt="MC Teteu"
        className="w-full object-contain rounded-md"
        initial={{ filter: "contrast(0.5) brightness(0.5)" }}
        animate={{
          filter: "contrast(1) brightness(1)",
        }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </motion.div>
  );
}
