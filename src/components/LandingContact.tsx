"use client";
import React from "react";
import VerticalBox from "./VerticalBox";
import { Button } from "./ui/button";
import Link from "next/link";
import ArrowRightIcon from "@/components/ArrowRightIcon";
import FadeRight from "./animations/FadeRight";

export default function LandingContact() {
  return (
    <section className="bg-white px-5 py-10 md:p-10 gap-5">
      <FadeRight className="w-full h-fit flex flex-col gap-10">
        <VerticalBox className="w-full sm:w-50 h-full text-wrap gap-16 md:gap-10">
          <h1 className="w-full md:w-2/3 text-5xl 2xsm:text-5xl sm:text-7xl font-suisse-medium">
            Need help on your next Project? Let’s Talk!
          </h1>
          <p className="w-full md:w-1/2 2xsm:text-normal xsm:text-lg">
            Choose us to create your next business idea. Set your brand on a
            trajectory of success.
          </p>
        </VerticalBox>
        <Link href="/contact">
          <Button className="w-fit rounded-full flex flex-row gap-2 px-6 py-4">
            <span>Contact</span>
            <ArrowRightIcon theme="dark" className="w-5 h-5" />
          </Button>
        </Link>
      </FadeRight>
    </section>
  );
}
