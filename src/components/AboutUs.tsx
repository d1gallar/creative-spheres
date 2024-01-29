import React from "react";
import ArrowRightIcon  from "@/components/ArrowRightIcon";
import VerticalBox from "./VerticalBox";

export default function AboutUsSection() {
  return (
    <section className="relative bg-[#FDFDFD] w-full h-fit p-5 md:p-20 flex flex-col lg:flex-row gap-8 sm:gap-8">
      <div className="w-1/4 hidden sm:block">
        <ArrowRightIcon theme="light" className="w-16 h-16" />
      </div>
      <VerticalBox className="w-full">
        <h2 className="w-full text-2xl 2xsm:text-4xl sm:text-4xl md:text-4xl my-4 font-suisse-medium">
          As a forward-thinking agency, we stay abreast of the latest design
          trends and technologies, ensuring that our clients benefit from
          cutting-edge solutions that keep them ahead of the curve.
        </h2>
        <p className="w-full text-lg my-4 sm:text-2xl font-suisse-thin text-[#7a7a7a]">
          At Creative Sphere Design Co., we take pride in our ability to
          seamlessly merge the artistry of design with the precision of
          strategy. Beyond crafting visually stunning creations, we see each
          project as an opportunity to tell a unique story that resonates with
          your audience on a profound level.{" "}
        </p>
      </VerticalBox>
    </section>
  );
}
