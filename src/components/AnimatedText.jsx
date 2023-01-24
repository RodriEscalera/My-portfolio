import React from "react";
import { motion } from "framer-motion";
function AnimatedText({ text, event, size }) {
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{
        color: "white",
        overflow: "hidden",
        display: "flex",
        fontSize: size,
      }}
      variants={container}
      initial={event ? "hidden" : "visible"}
      animate={event ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          style={{ marginRight: "0.4rem" }}
          variants={child}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default AnimatedText;
