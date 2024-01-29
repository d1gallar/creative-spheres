import React from "react";

type IconProps = {
  theme?: "dark" | "light";
  className?: string;
};

export default function ResearchIcon({
  className,
  theme = "light",
}: IconProps) {
  return (
    <svg
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <g clipPath="url(#clip0_14_388)">
        <path
          d="M23.6428 1.28564V16.7142L32.8743 28.4656C33.3239 29.0347 33.604 29.719 33.6825 30.44C33.7609 31.161 33.6344 31.8895 33.3176 32.542C33.0008 33.1944 32.5065 33.7442 31.8914 34.1285C31.2762 34.5127 30.5652 34.7157 29.84 34.7142H7.15998C6.43471 34.7157 5.72371 34.5127 5.10859 34.1285C4.49346 33.7442 3.99912 33.1944 3.68231 32.542C3.3655 31.8895 3.23905 31.161 3.31748 30.44C3.3959 29.719 3.67602 29.0347 4.12569 28.4656L13.3571 16.7142V1.28564M9.49998 1.28564H27.5"
          stroke={`${theme === "light" ? "black" : "white"}`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_14_388">
          <rect width="36" height="36" fill="none" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}
