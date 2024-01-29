"use client";

import React from "react";
import BrandLogo from "./BrandLogo";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

type FooterLink = {
  link: string;
  label: string;
  inDomain: boolean;
};

type FooterGroupProps = {
  title: string;
  links: Array<FooterLink>;
};

const FooterGroup = (props: FooterGroupProps) => {
  const { title, links } = props;

  return (
    <div className="w-fit flex flex-col gap-4">
      <p className="text-black uppercase font-semibold text-sm sm:text-base">
        {title}
      </p>
      <ul className="flex flex-col gap-2">
        {links &&
          links.length > 0 &&
          links.map(({ link, label, inDomain }) => (
            <li key={uuidv4().toString()}>
              <Link
                href={link}
                className="text-[#484848] font-medium text-sm sm:text-base hover:text-black cursor-pointer"
              >
                {label}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

const pages = {
  title: "Our Pages",
  links: [
    {
      link: "/",
      label: "Home",
      inDomain: true,
    },
    {
      link: "/about",
      label: "About Us",
      inDomain: true,
    },
    {
      link: "/contact",
      label: "Contact Us",
      inDomain: true,
    },
    {
      link: "/projects",
      label: "Projects",
      inDomain: true,
    },
    {
      link: "/testimonials",
      label: "Testimonials",
      inDomain: true,
    },
  ],
};

const socials = {
  title: "Social Media",
  links: [
    {
      link: "https://www.facebook.com",
      label: "Facebook",
      inDomain: false,
    },
    {
      link: "https://www.instagram.com",
      label: "Instagram",
      inDomain: false,
    },
    {
      link: "https://www.youtube.com",
      label: "Youtube",
      inDomain: false,
    },
    {
      link: "https://www.tiktok.com",
      label: "Tik Tok",
      inDomain: false,
    },
  ],
};

const company = {
  title: "Company",
  links: [
    {
      link: "/terms",
      label: "Terms of Service",
      inDomain: true,
    },
    {
      link: "/privacypolicy",
      label: "Privacy Policy",
      inDomain: true,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white w-full h-fit px-5 py-10 md:p-10 flex flex-col gap-6 justify-start xsm:items-center md:flex-row md:justify-between md:items-start">
      <BrandLogo />
      <div className="flex flex-row justify-start items-start h-full w-fit gap-6 flex-wrap flex-1 sm:justify-end">
        <FooterGroup title={pages.title} links={pages.links} />
        <FooterGroup title={socials.title} links={socials.links} />
        <FooterGroup title={company.title} links={company.links} />
      </div>
    </footer>
  );
}
