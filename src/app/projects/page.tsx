"use client";

import ProjectCard from "@/components/ProjectCard";
import VerticalBox from "@/components/VerticalBox";
import FadeIn from "@/components/animations/FadeIn";
import TextWrapUp from "@/components/animations/TextUpWrap";
import React from "react";

export default function ProjectsPage() {
  return (
    <>
      <main className="flex min-h-fit flex-col items-start justify-center pt-20 pb-10 px-5 md:px-10 md:py-20 md:min-h-screen ">
        <VerticalBox className="w-full sm:w-50 h-full text-wrap gap-4 sm:gap-10 md:gap-16">
          <TextWrapUp className="w-full text-5xl 2xsm:text-5xl sm:text-7xl md:text-8xl font-suisse-bold uppercase">
            Projects
          </TextWrapUp>
          <FadeIn>
            <div className="w-full flex flex-row overflow-x-auto flex-grow-0 overflow-y-visible gap-4 snap-x-mandatory">
              <ProjectCard
                link="#"
                name="Synchro"
                description="Logo Branding"
                theme="light"
                img={"/projectOne.png"}
              />
              <ProjectCard
                link="#"
                name="Chroma"
                description="UI Design"
                theme="light"
                img={"/projectTwo.png"}
                />
              <ProjectCard
                link="#"
                name="Resume"
                description="UX Design"
                theme="light"
                img={"/projectThree.png"}
                />
              <ProjectCard
                link="#"
                name="Harmony"
                description="Iconography"
                theme="light"
                img={"/projectFour.png"}
              />
            </div>
          </FadeIn>
        </VerticalBox>
      </main>
      <hr className="text-center max-w-[70rem] sm:max-w-[90rem] bg-[#EEEEEE] h-[1.2px] px-5 md:px-10 m-auto" />
    </>
  );
}
