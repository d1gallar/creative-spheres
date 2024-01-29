import React from "react";
import CompanyValuesSection from "@/components/CompanyValues";
import AboutContactSection from "@/components/AboutContact";
import AboutHeroSection from "@/components/AboutHero";
import AboutUsSection from "@/components/AboutUs";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <section className="w-full sm:scale-100">
        <video
          className="min-w-[300vw] h-auto sm:min-w-full "
          autoPlay
          loop
          muted
          preload="true"
        >
          <source src="VideoCardSection.mov" />
        </video>
      </section>
      <AboutUsSection />
      <CompanyValuesSection />
      <hr className="text-center max-w-[70rem] sm:max-w-[90rem] bg-[#EEEEEE] h-[1.2px] px-5 md:px-10 m-auto" />
      <AboutContactSection />
      <hr className="text-center max-w-[70rem] sm:max-w-[90rem] bg-[#EEEEEE] h-[1.2px] px-5 md:px-10 m-auto" />
    </>
  );
}
