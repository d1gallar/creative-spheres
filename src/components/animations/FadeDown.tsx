import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeDownProps = {
  children: ReactNode | ReactNode[];
  className?: string;
};

export default function FadeDown({ children, className }: FadeDownProps) {
  return (
    <motion.div
      className={`${className}`}
      initial={{ y: "-50%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: 0, opacity: 1 }}
      transition={{ type: "ease-out", duration: 0.35 }}
      key="fadeInRight"
    >
      {children}
    </motion.div>
  );
}
