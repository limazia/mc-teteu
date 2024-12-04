"use client";

import { Background } from "@/components/background";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <Background />
        <motion.div
          className="absolute overflow-hidden bottom-0 z-50"
          initial={{ filter: "blur(20px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            repeatType: "mirror",
          }}
        >
          <motion.img
            src="teteu.png" // Substitua pelo seu caminho de imagem
            alt="Descongelando"
            className="w-full h-full object-cover"
            initial={{ filter: "contrast(0.5) brightness(0.5)" }}
            animate={{
              filter: "contrast(1) brightness(1)",
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ height: "100%" }}
            animate={{ height: "0%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>
      </div>

      <div className="w-full p-4 bg-transparent border-2 text-center mt-12 rounded-md">
        <a
          href="https://youtu.be/mMo8DvW9DP8?t=6"
          target="_blank"
          className="text-white text-2xl font-bold"
        >
          MC Teteu - Dingo Bell
        </a>
      </div>
    </>
  );
}
