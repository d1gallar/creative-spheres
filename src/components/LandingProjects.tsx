import React from "react";
import ProjectCard from "./ProjectCard";
import VerticalBox from "./VerticalBox";

export default function LandingProjectsSection() {
  return (
    <section className="bg-[#151515] text-white w-full h-fit p-5 md:p-10 flex flex-col gap-5 sm:gap-10 overflow-x-clip">
      <VerticalBox className="gap-3">
        <p className="text-sm sm:text-lg tracking-[-2%]">Projects</p>
        <h2 className="font-semibold text-2xl sm:text-5xl tracking-[-2%]">
          Our Projects
        </h2>
      </VerticalBox>
      <div className="w-full flex flex-row overflow-x-auto flex-grow-0 overflow-y-visible gap-4 snap-x-mandatory">
        <ProjectCard
          link="#"
          name="Synchro"
          description="Logo Branding"
          theme="dark"
          img={"./projectOne.png"}
        />
        <ProjectCard
          link="#"
          name="Chroma"
          description="UI Design"
          theme="dark"
          img={"./projectTwo.png"}
        />
        <ProjectCard
          link="#"
          name="Resume"
          description="UX Design"
          theme="dark"
          img={"./projectThree.png"}
        />
        <ProjectCard
          link="#"
          name="Harmony"
          description="Iconography"
          theme="dark"
          img={"./projectFour.png"}
        />
      </div>
    </section>
  );
}
