import { motion } from "framer-motion";

import { images } from "@/utils/images";

interface BackgroundProps {
  currentDay: number;
}

export function Background({ currentDay }: BackgroundProps) {
  return (
    <div className="canvas relative">
      <div className="snowing">
        <div className="small-snow">
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="small"></div>
        </div>
        <div className="medium-snow">
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
          <div className="medium"></div>
        </div>
      </div>

      <div className="tree"></div>
      <div className="tree"></div>
      <div className="tree"></div>
      <div className="tree"></div>
      <div className="tree"></div>
      <div className="tree"></div>
      <div className="tree"></div>
      <div className="tree"></div>
      <div className="tree"></div>
      <div className="tree"></div>
      <div className="tree"></div>
      <div className="tree"></div>
      <div className="house relative">
        <motion.div
          className="relative right-[130px] w-full h-full"
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
            className="teteu w-full h-96 object-contain"
            initial={{ filter: "contrast(0.5) brightness(0.5)" }}
            animate={{
              filter: "contrast(1) brightness(1)",
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </motion.div>

        <div className="front">
          <div className="a"></div>
          <div className="b"></div>
          <div className="c"></div>
          <div className="d"></div>
          <div className="e"></div>

          <span className="f"></span>
          <span className="f"></span>
          <span className="f"></span>
          <span className="f"></span>
          <span className="f"></span>
          <span className="f"></span>
          <div className="g"></div>
          <div className="k"></div>
        </div>
        <div className="side">
          <div className="wall-snow"></div>
          <div className="w-area">
            <div className="w-outer"></div>
            <div className="window">
              <div className="w-inner"></div>
              <div className="w-shadow"></div>
            </div>
          </div>
          <div className="w-area">
            <div className="w-outer"></div>
            <div className="window">
              <div className="w-inner"></div>
              <div className="w-shadow"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="ground-d"></div>
      <div className="ground-a"></div>
      <div className="ground-b"></div>
      <div className="ground-c"></div>
    </div>
  );
}
