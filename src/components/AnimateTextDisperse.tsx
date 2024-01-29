"use client";

import React, { useRef } from "react";
import TextDisperse from "./animations/TextDisperse";
import gsap from "gsap";

export default function AnimateTextDisperse() {
  const background = useRef(null);

  const setBackground = (isActive: boolean) => {
    gsap.to(background.current, { opacity: isActive ? 0.8 : 0 });
  };

  return (
    <div className="flex flex-col gap-2">
      <TextDisperse setBackground={setBackground}>
        <p>Creative</p>
      </TextDisperse>
      <TextDisperse setBackground={setBackground}>
        <p>Sphere</p>
      </TextDisperse>
    </div>
  );
}
