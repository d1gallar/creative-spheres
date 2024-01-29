"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import ArrowRightIcon from "@/components/ArrowRightIcon";
import HorizontalBox from "@/components/HorizontalBox";
import {
  TestimonialCard,
  TestimonialCardRef,
} from "@/components/TestimonialCard";
import useCarousel from "@/hooks/useCarousel";
import { v4 as uuidv4 } from "uuid";

type Testimonial = {
  author: string;
  description: string;
};

const testimonials: Array<Testimonial> = [
  {
    author: "Sarah M.",
    description:
      "From a revamped logo to a seamless website redesign, they captured our brand essence perfectly. The results speak for themselves – increased user engagement, positive feedback, and a refreshed brand identity that truly stands out.",
  },
  {
    author: "Alex K.",
    description:
      "Their UI/UX design transformed our app into an intuitive and visually stunning platform. The collaborative process and timely delivery showcased their professionalism.",
  },
  {
    author: "Emily T.",
    description:
      "Their commitment to social responsibility aligned perfectly with our values. They went beyond aesthetics, crafting a brand identity that resonated with our mission.",
  },
  {
    author: "James R.",
    description:
      "Their designs not only boosted our online presence but also contributed to increased sales.",
  },
  {
    author: "Maya S.",
    description:
      "The illustrations created by their team captured the spirit of our events perfectly. ",
  },
];

const formatIndices = (length: number) => {
  if (typeof length !== "number" || length < 0) {
    return "Invalid input";
  }
  const formattedLength = length + 1 < 10 ? `0${length + 1}` : `${length + 1}`;
  return formattedLength;
};

export default function TestimonialSlider() {
  const { currentIndex, next, prev, goToIndex } = useCarousel({
    items: testimonials,
  });

  const childRef = useRef(null);
  const [childWidth, setChildWidth] = useState(0);

  useLayoutEffect(() => {
    const updateChildWidth = () => {
      if (childRef.current) {
        const width = (childRef?.current as HTMLDivElement)?.getBoundingClientRect().width;
        setChildWidth(width);
      }
    };

    updateChildWidth();

    window.addEventListener("resize", updateChildWidth);

    return () => {
      window.removeEventListener("resize", updateChildWidth);
    };
  }, []);

  // Update the currentIndex when the slider value changes
  const handleSliderChange = (e: { target: { value: any } }) => {
    goToIndex(Number(e.target.value));
  };

  const size = testimonials.length;
  const currentIndexFormatted = formatIndices(currentIndex);
  const maxLength = formatIndices(testimonials.length - 1);
  const percent = Math.round(((currentIndex + 1) / size) * 100);

  const calcTranslate = (childWidth + 16) * currentIndex;

  return (
    <>
      <div
        className="w-full flex flex-row flex-grow-0 gap-4 overflow-x-visible no-scrollbar transition-all duration-500 linear"
        style={{
          transform: `translateX(-${calcTranslate}px)`,
        }}
      >
        {testimonials.map((testimonial: Testimonial, i: number) => (
          <TestimonialCard
            key={uuidv4().toString()}
            className="min-w-full sm:min-w-[40rem] sm:max-w-[80rem] p-8 border-[1px] rounded-md border-[#e2e2e2] flex flex-col gap-4"
          >
            <p className="font-suisse-medium text-lg">{testimonial.author}</p>
            <q className="font-suisse-regular text-lg">
              {testimonial.description}
            </q>
          </TestimonialCard>
        ))}
        <TestimonialCardRef
          key={uuidv4().toString()}
          className="absolute min-w-full sm:min-w-[40rem] sm:max-w-[80rem] p-8 border-[1px] rounded-md border-[#e2e2e2] flex-col gap-4 opacity-0 -z-1"
          ref={childRef}
        >
          <p className="font-suisse-medium text-lg">
            {/* {testimonials[0].author} */}
          </p>
          <q className="font-suisse-regular text-lg">
            {/* {testimonials[0].description} */}
          </q>
        </TestimonialCardRef>
      </div>
      <HorizontalBox className="w-full h-fit gap-4">
        <div className="h-16 flex items-center justify-start gap-2">
          <p className="font-suisse-medium text-lg">{currentIndexFormatted}</p>
          <hr className="h-[2.5px] bg-black w-4 border-none" />
          <p className="font-suisse-medium text-lg">{maxLength}</p>
        </div>
        <div className="h-16 w-full">
          <input
            type="range"
            className="hidden"
            min={0}
            max={size}
            value={currentIndex}
            onChange={handleSliderChange}
          />
          <div className="flex items-center w-full h-full">
            <div className={`relative h-0.5 bg-slate-50 rounded-full w-full`}>
              <div
                className="absolute z-2 h-0.5 bg-black rounded-full transition-all duration-500 linear"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        </div>
        <HorizontalBox className="items-center gap-4">
          <button
            role="button"
            aria-label="Previous"
            className="flex items-center justify-center bg-black rounded-full w-14 h-14 hover:opacity-80"
            onClick={() => currentIndex > 0 && prev()}
          >
            <ArrowRightIcon theme="dark" className="w-5 h-5 rotate-180" />
          </button>
          <button
            role="button"
            aria-label="Next"
            className="flex items-center justify-center bg-black rounded-full w-14 h-14 hover:opacity-80"
            onClick={() => currentIndex < size - 1 && next()}
          >
            <ArrowRightIcon theme="dark" className="w-5 h-5" />
          </button>
        </HorizontalBox>
      </HorizontalBox>
    </>
  );
}
