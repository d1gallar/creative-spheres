"use client";
import React from "react";
import ContactForm from "@/components/ContactForm";
import FadeRight from "@/components/animations/FadeRight";
import FadeUp from "@/components/animations/FadeUp";
import FadeIn from "@/components/animations/FadeIn";

export default function ContactPage() {
  return (
    <>
      <div className="w-full h-16 bg-black fixed top-0 left-0 z-1"></div>
      <main className="bg-black text-white flex min-h-fit flex-col items-start justify-center pt-32 px-5 md:px-10 py-5 md:py-20 md:min-h-screen ">
        <FadeRight>
          <h1 className="w-full text-5xl 2xsm:text-5xl sm:text-7xl md:text-8xl font-suisse-bold uppercase">
            Contact Us
          </h1>
        </FadeRight>
        <FadeIn className="w-full h-fit">
          <ContactForm />
        </FadeIn>
      </main>
      <FadeUp>
        <section className="relative bg-[#FDFDFD] w-full h-fit p-5 py-10 md:p-20 flex flex-col gap-2 md:flex-row md:justify-between">
          <h2 className="m-0 w-full text-2xl 2xsm:text-4xl sm:text-4xl md:text-3xl font-suisse-regular">
            Work with us
          </h2>
          <a
            className="w-full text-2xl 2xsm:text-4xl sm:text-4xl md:text-3xl font-suisse-regular underline hover:cursor-pointer md:text-right"
            href="mailto:work@creativespheres.co"
          >
            work@creativespheres.co
          </a>
        </section>
      </FadeUp>
      <hr className="text-center max-w-[70rem] sm:max-w-[90rem] bg-[#EEEEEE] h-[1.2px] px-5 md:px-10 m-auto" />
    </>
  );
}
