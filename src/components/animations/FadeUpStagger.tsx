import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeUpStagerProps = {
  children: ReactNode | ReactNode[];
  className?: string;
};

const variants = {
  hidden: {
    y: "50%",
    opacity: 0,
    transition: {
      type: "ease-in",
      duration: 350,
    },
  },
  animate: {
    y: "0%",
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      type: "ease-in",
    },
  },
};

export function FadeUpStaggerChild({ children, className }: FadeUpStagerProps) {
  return (
    <motion.div className={`${className}`} variants={variants}>
      {children}
    </motion.div>
  );
}

export function FadeUpStagger({ children, className }: FadeUpStagerProps) {
  return (
    <motion.div
      className={`${className}`}
      variants={variants}
      initial="hidden"
      animate="animate"
    >
      {children}
    </motion.div>
  );
}
