"use client";

import React from "react";
import VerticalBox from "./VerticalBox";
import FadeRight from "./animations/FadeRight";
import TextUpWrap from "./animations/TextUpWrap";
import AnimateTextDisperse from "./AnimateTextDisperse";

export default function AboutHeroSection() {
  return (
    <main className="flex min-h-fit flex-col items-start justify-center py-20 px-5 md:px-10 md:py-20 md:min-h-screen ">
      <VerticalBox className="w-full sm:w-50 h-full text-wrap gap-10 md:gap-20">
        <div>
          <TextUpWrap className="text-4xl 2xsm:text-5xl sm:text-7xl md:text-8xl font-suisse-bold uppercase">
            We don&apos;t
          </TextUpWrap>
          <TextUpWrap className="text-4xl 2xsm:text-5xl sm:text-7xl md:text-8xl font-suisse-bold uppercase">
            just design.
          </TextUpWrap>
          <TextUpWrap className="text-4xl 2xsm:text-5xl sm:text-7xl md:text-8xl font-suisse-bold uppercase">
            We innovate.
          </TextUpWrap>
        </div>
        <FadeRight>
          <div className="w-full flex flex-col gap-8 md:flex-row md:justify-between items-end">
            <p className="w-full font-suisse-regular md:w-1/2 2xsm:text-normal xsm:text-lg sm:text-2xl">
              Join us in crafting a visual narrative that goes beyond the
              ordinary, where creativity knows no bounds, and every design is a
              testament to our commitment to excellence.
            </p>
          </div>
        </FadeRight>
      </VerticalBox>
    </main>
  );
}
