import { motion } from "framer-motion";
import React, { ReactElement, ReactNode, useState } from "react";

type TextDisperseProps = {
  children: ReactNode;
  setBackground: (isActive: boolean) => void;
};

export default function TextDisperse({
  children,
  setBackground,
}: TextDisperseProps) {
  const [isAnimated, setIsAnimated] = useState(false);

  const getChars = (element: ReactNode) => {
    if (!element) return "";
    let chars: JSX.Element[] = [];

    const word = (element as ReactElement).props.children as string;
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={i}
          variants={disperse}
          animate={isAnimated ? "open" : "closed"}
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });

    return chars;
  };

  const manageMouseEnter = () => {
    setBackground(true);
    setIsAnimated(true);
  };

  const manageMouseLeave = () => {
    setBackground(false);
    setIsAnimated(false);
  };

  const words = getChars(children);
  return (
    <div
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
      className="flex items-center justify-center gap-[0.1rem] space-between font-suisse-bold text-7xl cursor-pointer text-black uppercase"
    >
      {words}
    </div>
  );
}

export const transforms = [
  {
    x: -0.8,

    y: -0.6,

    rotationZ: -29,
  },

  {
    x: -0.2,

    y: -0.4,

    rotationZ: -6,
  },

  {
    x: -0.05,

    y: 0.1,

    rotationZ: 12,
  },

  {
    x: -0.05,

    y: -0.1,

    rotationZ: -9,
  },

  {
    x: -0.1,

    y: 0.55,

    rotationZ: 3,
  },

  {
    x: 0,

    y: -0.1,

    rotationZ: 9,
  },

  {
    x: 0,

    y: 0.15,

    rotationZ: -12,
  },

  {
    x: 0,

    y: 0.15,

    rotationZ: -17,
  },

  {
    x: 0,

    y: -0.65,

    rotationZ: 9,
  },

  {
    x: 0.1,

    y: 0.4,

    rotationZ: 12,
  },

  {
    x: 0,

    y: -0.15,

    rotationZ: -9,
  },

  {
    x: 0.2,

    y: 0.15,

    rotationZ: 12,
  },

  {
    x: 0.8,

    y: 0.6,

    rotationZ: 20,
  },
];

export const disperse = {
  open: (i: number) => ({
    x: transforms[i].x + "em",

    y: transforms[i].y + "em",

    rotateZ: transforms[i].rotationZ,

    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },

    zIndex: 1,
  }),
  closed: {
    x: 0,

    y: 0,

    rotateZ: 0,

    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },

    zIndex: 0,
  },
};
