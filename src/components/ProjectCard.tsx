/* trunk-ignore-all(prettier) */
import Link from "next/link";
import React from "react";
import HorizontalBox from "./HorizontalBox";
import VerticalBox from "./VerticalBox";
import DiagonalArrowIcon from "./DiagonalArrowIcon";
import Image from "next/image";

type ProjectCardProps = {
  link: string;
  name: string;
  img?: string;
  theme?: string;
  description: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  const { link, name, description, img, theme } = props;
  return (
    <Link
      className="mt-2 min-w-full 2xs:min-w-[350px] h-fit hover:-translate-y-2 transition-all duration-100 ease-in snap-start flex-none z-0"
      href={link}
    >
      {!img ? (
        <div className="w-full h-[250px] bg-[#3E3E3E] rounded-md"></div>
      ) : (
        /* trunk-ignore(eslint/@next/next/no-img-element) */
        <Image
          src={`${img}`}
          className="w-full h-[250px] rounded-md object-cover aspect-auto"
          width="300"
          height="250"
          alt={`${name}`}
        />
      )}
      <HorizontalBox className="w-full h-fit mt-4 justify-between">
        <VerticalBox className="gap-2">
          <p className="text-sm sm:text-xl font-bold tracking-[-2%] uppercase">
            {name}
          </p>
          <p className="text-sm sm:text-base font-medium tracking-[-2%]">
            {description}
          </p>
        </VerticalBox>
        <span
          className={`h-fit w-fit border-2 p-1 rounded-full ${
            theme === "dark" ? "border-white" : "border-black"
          }`}
        >
          {theme === "dark" ? (
            <DiagonalArrowIcon theme="dark" className="w-6 h-6" />
          ) : (
            <DiagonalArrowIcon theme="light" className="w-6 h-6" />
          )}
        </span>
      </HorizontalBox>
    </Link>
  );
}
