import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeRightProps = {
  children: ReactNode | ReactNode[];
  className?: string;
};

export default function FadeRight({ children, className }: FadeRightProps) {
  return (
    <motion.div
      className={`${className}`}
      initial={{ x: "-50%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: 0, opacity: 1 }}
      transition={{ type: "ease-out", duration: 0.35 }}
      key="fadeInRight"
    >
      {children}
    </motion.div>
  );
}
