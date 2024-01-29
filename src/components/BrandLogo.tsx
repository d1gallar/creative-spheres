import React from "react";
import Link from "next/link";
import Image from "next/image";

type BrandLogoProps = {
  theme?: "dark" | "light";
  className?: string;
}

export default function BrandLogo({theme="light", className}: BrandLogoProps) {
  return (
    <Link className={`min-w-fit h-10 w-fit hover:cursor-pointer ${className}`} href="/">
      {theme === "light" ? (
        <Image src="/BrandLogo.svg" priority={true} loading="eager" className="h-full w-auto" height="56" width="227" alt="Creative Spheres Logo" />
      ):(
        <Image src="/BrandLogoDark.svg" priority={true} loading="eager" className="h-full w-auto" height="56" width="227" alt="Creative Spheres Logo" />
      )}
    </Link>
  );
}
