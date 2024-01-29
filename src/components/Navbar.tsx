"use client";
import React from "react";
import { usePathname } from "next/navigation";
import CollapseOpenButton from "./CollapseOpenButton";
import HorizontalBox from "./HorizontalBox";
import BrandLogo from "./BrandLogo";
import NavMenu from "./NavMenu";
import FadeDown from "./animations/FadeDown";

export default function NavBar() {
  const pathname = usePathname();
  let navTheme = "bg-white text-black";
  const isContact = pathname == "/contact";
  if (isContact) navTheme = "bg-black text-white";
  return (
    <FadeDown className="w-full h-fit fixed z-10">
      <nav
        className={`px-4 py-4 flex w-full h-fit fixed z-10 opacity-1 ${navTheme}`}
      >
        <HorizontalBox className="w-full justify-between items-center">
          {isContact ? (
            <>
              <BrandLogo theme="dark" />
              <NavMenu theme="dark" />
              <CollapseOpenButton theme="dark" />
            </>
          ) : (
            <>
              <BrandLogo theme="light" />
              <NavMenu theme="light" />
              <CollapseOpenButton theme="light" />
            </>
          )}
        </HorizontalBox>
      </nav>
      <div className="w-full relative h-16"></div>
    </FadeDown>
  );
}
