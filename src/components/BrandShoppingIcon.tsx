import React from "react";

type IconProps = {
  theme?: "dark" | "light";
  className?: string;
};

export default function BrandShoppingIcon({
  className,
  theme = "light",
}: IconProps) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M10 20C10 17.3478 11.0536 14.8043 12.9289 12.9289C14.8043 11.0536 17.3478 10 20 10H40C42.6522 10 45.1957 11.0536 47.0711 12.9289C48.9464 14.8043 50 17.3478 50 20V40C50 42.6522 48.9464 45.1957 47.0711 47.0711C45.1957 48.9464 42.6522 50 40 50H20C17.3478 50 14.8043 48.9464 12.9289 47.0711C11.0536 45.1957 10 42.6522 10 40V20Z"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={`${theme === "light" ? "black" : "white"}`}
      />
      <path
        d="M22.5 20C22.5 21.9891 23.2902 23.8968 24.6967 25.3033C26.1032 26.7098 28.0109 27.5 30 27.5C31.9891 27.5 33.8968 26.7098 35.3033 25.3033C36.7098 23.8968 37.5 21.9891 37.5 20"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={`${theme === "light" ? "black" : "white"}`}
      />
    </svg>
  );
}
