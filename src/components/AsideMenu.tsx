"use client";

import React from "react";
import CollapseCloseButton from "./CollapseCloseButton";
import VerticalBox from "./VerticalBox";
import { v4 as uuidv4 } from "uuid";
import { usePathname } from "next/navigation";
import { useCollapse } from "@/hooks/useCollapse";
import Link from "next/link";
import BrandLogo from "./BrandLogo";

type NavLink = {
  label: string;
  link: string;
};

const navLinkGroup = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "Testimonials",
    link: "/testimonials",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export default function AsideMenu() {
  const { isCollapsed, closeCollapse } = useCollapse();
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;

  const active = "opacity-100";
  const inactive = "opacity-80 hover:opacity-100";

  if (!isCollapsed) return null;
  return (
    <aside className="top-0 right-0 bg-black w-full md:hidden h-full z-100 animate-slide-left duration-1000 ease-in fixed z-50">
      <CollapseCloseButton />
      <BrandLogo theme="dark" className="absolute top-4 left-4 h-10 mt-1"/>
      <VerticalBox className="w-full h-full items-center justify-center">
        <ul className="w-full h-fit px-4 ">
          {navLinkGroup.map((item: NavLink) => (
            <li key={uuidv4().toString()} className={`font-suisse-bold text-3xl 2xs:text-[2.5rem] leading-[1.05] justify-center flex w-full py-3 px-4 rounded-sm items-center font-black uppercase text-white tracking-[0.1rem] ${isActive(item.link) ? active : inactive}`}>
              <Link href={item.link} onClick={closeCollapse} className="hover:-translate-y-1 transition-translate duration-300">{item.label}</Link>
            </li>
          ))}
        </ul>
      </VerticalBox>
    </aside>
  );
}
