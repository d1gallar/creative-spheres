import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeUpProps = {
  children: ReactNode | ReactNode[];
  className?: string;
  delay?: number;
};

export default function FadeUp({
  children,
  className,
  delay = 0,
}: FadeUpProps) {
  return (
    <motion.div
      className={`${className}`}
      initial={{ y: "50%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: 0, opacity: 1 }}
      transition={{ type: "ease-out", duration: 0.35, delay }}
      key="fadeInRight"
    >
      {children}
    </motion.div>
  );
}
