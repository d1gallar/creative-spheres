import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type TextWrapUpProps = {
  children: ReactNode | ReactNode[];
  className?: string;
  delay?: number;
};

export default function TextWrapUp({
  children,
  className,
  delay = 0,
}: TextWrapUpProps) {
  return (
    <div className="overflow-hidden md:h-[5.3rem]">
      <motion.h1
        className={`${className}`}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: 0 }}
        transition={{ type: "linear", duration: 0.35, delay }}
        key="fadeInRight"
      >
        {children}
      </motion.h1>
    </div>
  );
}
