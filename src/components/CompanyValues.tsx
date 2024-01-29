"use client";
import React, { Ref, RefObject, useEffect, useRef, useState } from "react";
import VerticalBox from "./VerticalBox";
import FadeUp from "./animations/FadeUp";
import { useInView } from "react-intersection-observer";
import Placeholder from "./Placeholder";

export default function CompanyValuesSection() {
  const [targetHeight, setTargetHeight] = useState(0);
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  const heightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heightRef.current && targetHeight === 0) {
      const height = heightRef.current.clientHeight;
      setTargetHeight((prevHeight) => {
        if (prevHeight === 0) {
          return height;
        }
        return prevHeight;
      });
    }
  }, [targetHeight]);

  return (
    <section
      className="relative bg-[#FDFDFD] w-full h-fit p-5 md:p-20 flex flex-col gap-16"
      ref={ref}
    >
      <h1 className="w-full text-left xsm:text-center text-4xl 2xsm:text-5xl sm:text-7xl md:text-8xl font-suisse-bold uppercase">
        Our Values
      </h1>
      {!inView && (
        <Placeholder
          height={heightRef.current ? heightRef.current.clientHeight : 0}
        />
      )}
      {inView && (
        <div
          className="flex flex-col lg:flex-row gap-8 sm:gap-8"
          ref={heightRef}
        >
          <FadeUp delay={0.2} className="w-full h-fit">
            <VerticalBox className="w-full">
              <h1 className="w-full text-2xl 2xsm:text-4xl sm:text-4xl md:text-3xl my-4 font-suisse-medium">
                01. Collaborative Innovation
              </h1>
              <p className="w-full text-lg my-4 sm:text-lg font-suisse-regular text-[#7a7a7a]">
                We foster an environment where every team member&apos;s voice is
                heard, and diverse perspectives come together to fuel
                creativity. We believe that the best ideas emerge from the
                synergy of collective minds, promoting a culture of openness,
                shared insights, and collaborative problem-solving.
              </p>
            </VerticalBox>
          </FadeUp>
          <FadeUp delay={0.4} className="w-full h-fit">
            <VerticalBox className="w-full">
              <h2 className="w-full text-2xl 2xsm:text-4xl sm:text-4xl md:text-3xl my-4 font-suisse-medium">
                02. Agile Workflow
              </h2>
              <p className="w-full text-lg my-4 sm:text-lg font-suisse-regular text-[#7a7a7a]">
                Our agency operates on an agile workflow that allows us to adapt
                swiftly to the dynamic demands of the creative industry. We
                value flexibility and responsiveness, enabling us to navigate
                projects with efficiency and deliver high-quality results within
                timelines. This agile approach empowers our team to embrace
                change, iterate rapidly, and stay at the forefront of design
                trends and technologies.
              </p>
            </VerticalBox>
          </FadeUp>
          <FadeUp delay={0.6} className="w-full h-fit">
            <VerticalBox className="w-full">
              <h2 className="w-full text-2xl 2xsm:text-4xl sm:text-4xl md:text-3xl my-4 font-suisse-medium">
                03. Client-Centric Ethos
              </h2>
              <p className="w-full text-lg my-4 sm:text-lg font-suisse-regular text-[#7a7a7a]">
                Our agency is built on a client-centric ethos, where
                understanding and exceeding client expectations are paramount.
                We prioritize clear communication, transparent processes, and a
                deep understanding of our clients&apos; goals. technologies.
              </p>
            </VerticalBox>
          </FadeUp>
        </div>
      )}
    </section>
  );
}
