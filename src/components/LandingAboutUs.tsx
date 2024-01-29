"use client";

import React from "react";
import VerticalBox from "./VerticalBox";
import FadeDown from "./animations/FadeDown";
import FadeUp from "./animations/FadeUp";

export default function LandingAboutUsSection() {
  return (
    <section id="about" className="w-full h-fit p-5 md:p-10">
      <FadeDown>
        <VerticalBox className="gap-3">
          <p className="text-sm sm:text-lg tracking-[-2%]">About Us</p>
          <h2 className="text-black font-semibold text-2xl sm:text-5xl tracking-[-2%]">
            At Creative Sphere,{" "}
            <span className="text-[#B9B9B9]">
              we believe in a collaborative process,
            </span>{" "}
            working closely with clients to understand their goals and
            aspirations.
          </h2>
        </VerticalBox>
      </FadeDown>
      <FadeUp>
        <div className="py-12 flex flex-col justify-start items-center gap-4 md:flex-row">
          <VerticalBox className="gap-2">
            <h4 className="font-medium text-md sm:text-xl tracking-[-5%]">
              Cutting-Edge Technology
            </h4>
            <p className="text-sm sm:text-lg tracking-[-5%]">
              Utilizing the latest design tools and technologies to stay at the
              forefront of the ever-evolving design landscape.
            </p>
          </VerticalBox>
          <VerticalBox className="gap-2">
            <h4 className="font-medium text-md sm:text-xl tracking-[-5%]">
              Creative Minds
            </h4>
            <p className="text-sm sm:text-lg tracking-[-5%]">
              A team of 20+ talented designers, each bringing a unique set of
              skills and perspectives to the creative table.
            </p>
          </VerticalBox>
          <VerticalBox className="gap-2">
            <h4 className="font-medium text-md sm:text-xl tracking-[-5%]">
              Award-Winning Designs
            </h4>
            <p className="text-sm sm:text-lg racking-[-5%]">
              Recognized for our excellence in design with multiple industry
              awards and accolades.
            </p>
          </VerticalBox>
        </div>
      </FadeUp>
    </section>
  );
}
