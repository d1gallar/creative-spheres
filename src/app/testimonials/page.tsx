"use client";

import TestimonialSlider from "@/components/TestimonialSlider";
import VerticalBox from "@/components/VerticalBox";
import FadeIn from "@/components/animations/FadeIn";
import FadeRight from "@/components/animations/FadeRight";
import TextWrapUp from "@/components/animations/TextUpWrap";
import Link from "next/link";
import React from "react";

export default function TestimonialPage() {
  return (
    <>
      <main className="flex min-h-fit flex-col items-start justify-center pt-32 px-5 md:px-10 py-5 md:py-20 md:min-h-screen overflow-x-clip">
        <VerticalBox className="w-full sm:w-50 h-full text-wrap gap-16">
          <TextWrapUp className="w-full text-5xl 2xsm:text-5xl sm:text-7xl md:text-8xl font-suisse-bold uppercase">
            From Our Partners
          </TextWrapUp>
          <FadeIn className="flex flex-col gap-16">
            <TestimonialSlider />
          </FadeIn>
        </VerticalBox>
      </main>
      <hr className="text-center max-w-[70rem] sm:max-w-[90rem] bg-[#EEEEEE] h-[1.2px] px-5 md:px-10 m-auto" />
      <FadeRight>
        <section className="bg-white w-full h-fit px-5 py-10 md:p-10 flex flex-col gap-5 sm:gap-10">
          <h1 className="sm:w-2/3 w-full text-4xl 2xsm:text-5xl sm:text-7xl md:text-8xl font-suisse-bold uppercase">
            Ready to transform your brand?
          </h1>
          <Link
            className="w-fit text-2xl hover-underline-animation"
            href="/contact"
          >
            Let&apos;s work together
          </Link>
        </section>
      </FadeRight>
      <hr className="text-center max-w-[70rem] sm:max-w-[90rem] bg-[#EEEEEE] h-[1.2px] px-5 md:px-10 m-auto" />
    </>
  );
}
