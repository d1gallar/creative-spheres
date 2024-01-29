/* eslint-disable @next/next/no-img-element */
/* eslint-disable-next-line @next/next/no-img-element */
"use client";

import React from "react";
import VerticalBox from "./VerticalBox";
import BrandShoppingIcon from "./BrandShoppingIcon";
import UserWebsiteIcon from "./UserWebsiteIcon";
import ResponsiveIcon from "./ResponsiveIcon";
import ResearchIcon from "./ResearchIcon";
import { useHover } from "@uidotdev/usehooks";
import { FadeUpStagger, FadeUpStaggerChild } from "./animations/FadeUpStagger";
import { useInView } from "react-intersection-observer";
import FadeRight from "./animations/FadeRight";

export default function CompanyBenefitsSection() {
  const [gridOne, gridOneHovering] = useHover();
  const [gridTwo, gridTwoHovering] = useHover();
  const [gridThree, gridThreeHovering] = useHover();
  const [gridFour, gridFourHovering] = useHover();
  const { ref, inView } = useInView({threshold: 0, triggerOnce: true});

  return (
    <section className="bg-[#FDFDFD] w-full h-fit p-5 md:p-10 flex flex-col lg:flex-row gap-8 sm:gap-8">
      <FadeRight className="w-full">
        <img
          src="/LandingImage_2.jpg"
          alt="Man working at a studio"
          className="w-full h-auto"
        />
      </FadeRight>
      <VerticalBox className="w-full gap-8 sm:gap-4 lg:justify-start lg:gap-20">
        <VerticalBox className="gap-3">
          <p className="text-sm sm:text-lg tracking-[-2%]">Why Choose Us</p>
          <h2 className="text-black font-semibold text-2xl sm:text-5xl tracking-[-2%]">
            Our Various Benefits
          </h2>
        </VerticalBox>
        <div ref={ref}>
          <VerticalBox className="flex flex-col gap-4">
            {inView && (
              <FadeUpStagger className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4">
                <FadeUpStaggerChild>
                  <button
                    className="w-full flex flex-col justify-start items-start text-left bg-white p-5 rounded-md border-[1px] border-[#f4f4f4] hover:shadow-none hover:bg-[#171717] hover:text-white gap-2 transition-all duration-100 ease-in min-h-[220px]"
                    ref={gridOne}
                  >
                    <div className="flex items-center justify-center h-fit w-full mb-4">
                      {gridOneHovering ? (
                        <UserWebsiteIcon theme="dark" />
                      ) : (
                        <UserWebsiteIcon theme="light" />
                      )}
                    </div>
                    <p className="text-md uppercase font-bold">User Design</p>
                    <p>
                      Focused on creating designs that enhance the user
                      experience.
                    </p>
                  </button>
                </FadeUpStaggerChild>
                <FadeUpStaggerChild>
                  <button
                    className="w-full flex flex-col justify-start items-start text-left bg-white p-5 rounded-md border-[1px] border-[#f4f4f4] hover:shadow-none hover:bg-[#171717] hover:text-white gap-2 transition-all duration-100 ease-in min-h-[220px]"
                    ref={gridTwo}
                  >
                    <div className="flex items-center justify-center h-fit w-full mb-4">
                      {gridTwoHovering ? (
                        <BrandShoppingIcon theme="dark" />
                      ) : (
                        <BrandShoppingIcon theme="light" />
                      )}
                    </div>
                    <p className="text-md uppercase font-bold">
                      Brand Consistency
                    </p>
                    <p>
                      Ensuring a cohesive and consistent brand identity across
                      all design elements.
                    </p>
                  </button>
                </FadeUpStaggerChild>
                <FadeUpStaggerChild>
                  <button
                    className="w-full flex flex-col justify-start items-start text-left bg-white p-5 rounded-md border-[1px] border-[#f4f4f4] hover:shadow-none hover:bg-[#171717] hover:text-white gap-2 transition-all duration-100 ease-in min-h-[220px]"
                    ref={gridThree}
                  >
                    <div className="flex items-center justify-center h-fit w-full mb-4">
                      {gridThreeHovering ? (
                        <ResponsiveIcon theme="dark" />
                      ) : (
                        <ResponsiveIcon theme="light" />
                      )}
                    </div>
                    <p className="text-md uppercase font-bold">
                      Responsive Design
                    </p>
                    <p>
                      Adapting designs to various platforms and devices to
                      customers.
                    </p>
                  </button>
                </FadeUpStaggerChild>
                <FadeUpStaggerChild>
                  <button
                    className="w-full flex flex-col justify-start items-start text-left bg-white p-5 rounded-md border-[1px] border-[#f4f4f4] hover:shadow-none hover:bg-[#171717] hover:text-white gap-2 transition-all duration-100 ease-in min-h-[220px]"
                    ref={gridFour}
                  >
                    <div className="flex items-center justify-center h-fit w-full mb-4">
                      {gridFourHovering ? (
                        <ResearchIcon theme="dark" />
                      ) : (
                        <ResearchIcon theme="light" />
                      )}
                    </div>
                    <p className="text-md uppercase font-bold">
                      Innovative Solutions
                    </p>
                    <p>
                      Pushing creative boundaries to deliver designs that stand
                      out.
                    </p>
                  </button>
                </FadeUpStaggerChild>
              </FadeUpStagger>
            )} 
          </VerticalBox>
        </div>
      </VerticalBox>
    </section>
  );
}
