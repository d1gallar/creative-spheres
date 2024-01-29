"use client";

import React from "react";
import { useCollapse } from "@/hooks/useCollapse";

type CollapseOpenButtonProps = {
  theme?: "dark" | "light";
};

export default function CollapseOpenButton(props : CollapseOpenButtonProps) {
  const { openCollapse } = useCollapse();
  const {theme} = props;

  return (
    <button
      id="collapseOpenBtn"
      aria-label="Collapse Open Button"
      className="md:hidden block hover:scale-105 px-2 h-full"
      onClick={openCollapse}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path
          d="M4 6H20M7 12H20M10 18H20"
          stroke={theme === "dark" ? "white": "black"}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
