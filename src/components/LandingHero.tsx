"use client";

import React from "react";
import VerticalBox from "./VerticalBox";
import FadeRight from "./animations/FadeRight";
import FadeLeft from "./animations/FadeLeft";
import Link from "next/link";
import DiagonalArrowIcon from "./DiagonalArrowIcon";
import { useHover } from "@uidotdev/usehooks";

export default function LandingHeroSection() {
  const [ref, hovering] = useHover();

  return (
    <main className="flex min-h-fit md:min-h-screen flex-col items-start justify-center px-5 py-20 md:px-10 md:py-12">
      <VerticalBox className="w-full sm:w-50 h-full text-wrap gap-10 md:gap-20">
        <FadeRight>
          <h1 className="w-full md:w-2/3 text-5xl 2xsm:text-5xl sm:text-7xl font-suisse-medium">
            Designing for the Future,<br></br> Where Imagination Meets
            Innovation!
          </h1>
        </FadeRight>
        <div className="w-full flex flex-col gap-8 md:flex-row md:justify-between items-end">
          <FadeRight className="w-full md:w-1/2">
            <p className="2xsm:text-normal xsm:text-lg sm:text-2xl">
              We&apos;re not just a design agency. Our passion lies in
              transforming ideas into captivating designs that leave a lasting
              impression.
            </p>
          </FadeRight>
          <FadeLeft>
            <Link
              className="md:mr-10 px-4 py-2 sm:px-6 sm:py-3 h-fit w-fit text-lg border-black border-solid border-2 rounded-full hover:text-white hover:bg-black flex flex-row gap-3 items-center font-medium cursor-pointer"
              ref={ref}
              href="/contact"
            >
              {hovering ? (
                <DiagonalArrowIcon theme="dark" className="w-8 h-8" />
              ) : (
                <DiagonalArrowIcon className="w-8 h-8" />
              )}
              <span>Let&apos;s Talk!</span>
            </Link>
          </FadeLeft>
        </div>
      </VerticalBox>
    </main>
  );
}
