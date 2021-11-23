import { motion } from "framer-motion";

import React from "react";

const MotionSimple = ({ children }) => {
  return (
    <motion.div
      initial={{
        x: 100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: -100,
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionSimple;
