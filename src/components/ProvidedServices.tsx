"use client";

import React, { useRef } from "react";
import VerticalBox from "./VerticalBox";
import HorizontalBox from "./HorizontalBox";
import { useInView } from "react-intersection-observer";
import FadeUp from "./animations/FadeUp";
import Placeholder from "@/components/Placeholder";

export default function ProvidedServicesSection() {
  const heightRef = useRef<HTMLDivElement | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      className="bg-[#FDFDFD] w-full h-fit p-5 md:p-10 flex flex-col gap-5 sm:gap-10"
      ref={ref}
    >
      <VerticalBox className="gap-3">
        <p className="text-sm sm:text-lg tracking-[-2%]">Services</p>
        <h2 className="text-black font-semibold text-2xl sm:text-5xl tracking-[-2%]">
          Our Provided Services
        </h2>
      </VerticalBox>
      {!inView && (
        <Placeholder
          height={heightRef.current ? heightRef.current.clientHeight : 0}
        />
      )}
      {inView && (
        <div className="pb-10" ref={heightRef}>
          <VerticalBox className="w-full gap-4 hidden sm:flex pb-5">
            <HorizontalBox className="w-full h-fit gap-4 items-center justify-start">
              <p className="w-full text-sm font-semibold sm:text-lg tracking-[-2%]">
                Service
              </p>
              <p className="w-full text-sm font-semibold sm:text-lg tracking-[-2%]">
                Details
              </p>
            </HorizontalBox>
          </VerticalBox>
          <hr className="w-full bg-[#EEEEEE] h-[1.2px]" />
          <FadeUp delay={0.2}>
            <VerticalBox className="w-full py-12 gap-4 text-[#9D9D9D] hover:text-black hover:cursor-pointer">
              <div className="w-full h-fit flex flex-col sm:flex-row gap-4 items-start justify-start">
                <h4 className="w-full text-lg font-semibold sm:text-3xl tracking-[-2%]">
                  UI Design
                </h4>
                <p className="w-full text-sm sm:text-lg tracking-[1%]">
                  From crafting aesthetically pleasing layouts to ensuring
                  optimal user flow, our UI design service goes beyond
                  aesthetics to prioritize usability and a delightful user
                  experience.
                </p>
              </div>
            </VerticalBox>
            <hr className="w-full bg-[#EEEEEE] h-[1.2px]" />
          </FadeUp>
          <FadeUp delay={0.4}>
            <VerticalBox className="w-full py-12 gap-4 text-[#9D9D9D] hover:text-black hover:cursor-pointer">
              <div className="w-full h-fit flex flex-col sm:flex-row gap-4 items-start justify-start">
                <h4 className="w-full text-lg font-semibold sm:text-3xl tracking-[-2%]">
                  Illustration
                </h4>
                <p className="w-full text-sm sm:text-lg tracking-[1%]">
                  Our skilled illustrators bring narratives to life through
                  captivating and bespoke visuals that leave a lasting imprint.
                </p>
              </div>
            </VerticalBox>
            <hr className="w-full bg-[#EEEEEE] h-[1.2px]" />
          </FadeUp>
          <FadeUp delay={0.6}>
            <VerticalBox className="w-full py-12 gap-4 text-[#9D9D9D] hover:text-black hover:cursor-pointer">
              <div className="w-full h-fit flex flex-col sm:flex-row gap-4 items-start justify-start">
                <h4 className="w-full text-lg font-semibold sm:text-3xl tracking-[-2%]">
                  Branding
                </h4>
                <p className="w-full text-sm sm:text-lg tracking-[1%]">
                  Whether you&apos;re launching a new brand or revamping an
                  existing one, we can help elevate your brand identity so that
                  it stands out in the competitive landscape.
                </p>
              </div>
            </VerticalBox>
            <hr className="w-full bg-[#EEEEEE] h-[1.2px]" />
          </FadeUp>
        </div>
      )}
    </section>
  );
}
