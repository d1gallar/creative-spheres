"use client";

import React from "react";
import FadeRight from "./animations/FadeRight";

export default function AboutContactSection() {
  return (
    <FadeRight>
      <section className="relative bg-[#FDFDFD] w-full h-fit p-5 py-10 md:p-20 flex flex-col gap-2">
        <h2 className="m-0 w-full text-2xl 2xsm:text-4xl sm:text-4xl md:text-3xl font-suisse-regular">
          Work with us
        </h2>
        <a
          className="w-full text-2xl 2xsm:text-4xl sm:text-4xl md:text-3xl font-suisse-regular underline hover:cursor-pointer"
          href="mailto:work@creativespheres.co"
        >
          work@creativespheres.co
        </a>
      </section>
    </FadeRight>
  );
}
