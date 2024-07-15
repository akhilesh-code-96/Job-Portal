import React, { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const intervalRef = useRef<number | null>(null);
  const wordsArray = words.split(" ");

  useEffect(() => {
    const animateWords = () => {
      animate(
        "span",
        { opacity: 1 },
        { duration: 2, delay: stagger(0.2) }
      ).then(() => {
        // Fade out immediately after fading in
        animate(
          "span",
          { opacity: 0 },
          { duration: 2, delay: stagger(0.2) }
        ).then(() => {
          // Restart the animation after fading out
          animateWords();
        });
      });
    };

    animateWords();
    intervalRef.current = window.setInterval(() => {
      animateWords();
    }, 5000); // Restart animation every 5 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white text-black opacity-0 text-3xl md:text-4xl lg:text-5xl"
            style={{
              backgroundImage: `linear-gradient(to right, #6b46c1, #9f5f80)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-3xl md:text-4xl lg:text-5xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
