"use client";
import React from "react";
import HorizontalBox from "./HorizontalBox";
import { v4 as uuidv4 } from "uuid";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

type NavMenuProps = {
  theme?: "light" | "dark";
};

export default function NavMenu({ theme = "light" }: NavMenuProps) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const themeStyle =
    theme === "dark" ? "border-white text-white" : "border-black text-black";

  const active = `border-b-2 opacity-100 ${themeStyle}`;
  const inactive = `border-b-2 border-transparent opacity-60 hover:opacity-100 transition-opacity ease-in-out`;

  return (
    <ul className={`h-full hidden md:block`}>
      <HorizontalBox className="h-full w-fit items-center gap-4">
        {navLinkGroup.map((item: NavLink) => (
          <li
            key={uuidv4().toString()}
            className={`flex h-full font-medium items-center ${
              isActive(item.link) ? active : inactive
            }`}
          >
            <Link className="cursor-pointer" href={item.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </HorizontalBox>
    </ul>
  );
}
