import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeDownProps = {
  children: ReactNode | ReactNode[];
  className?: string;
};

export default function FadeIn({ children, className }: FadeDownProps) {
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0 }}
      animate={{  opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ type: "fade", duration: 0.35 }}
      key="fadeIn"
    >
      {children}
    </motion.div>
  );
}
