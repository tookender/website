"use client";
import React from "react";
import Image from "next/image";
import { IconBrandGithub } from "@tabler/icons-react";

export const Navbar = ({ title }: { title: string }) => {
  return (
    <header className="flex flex-col fixed top-0 justify-around items-center w-full h-16 border-b border-b-white/10 bg-black/80 backdrop-blur-sm z-50">
      <nav className="w-full flex items-center max-w-[1400px] relative flex-1">
        <div className="flex flex-row items-center w-full gap-4 sm:gap-6 ml-2 sm:ml-4 xxl:ml-0">
          {/* prettier-ignore */}
          <a className="group flex flex-row justify-center items-center gap-2 mr-2 sm:mr-4" href="/">
            {/* prettier-ignore */}
            <Image className="rounded-full brightness-95 group-hover:brightness-100 duration-150" src="/avatar.webp" alt="Korino Logo" width={50} height={50}/>
            <h1 className="text-xl font-bold text-neutral-300 group-hover:text-white duration-150">{title}</h1>
          </a>

          <NavbarElement text="Korino PvP" href="/pvp" />
          <NavbarElement text="Korii Bot" href="/bot" />
        </div>

        <div className="flex items-center gap-3 mr-2 sm:mr-4 xxl:mr-0">
          <a
            href="https://github.com/tookender/Korino-Website"
            aria-label="Korino Website Github"
            className="text-neutral-300 hover:text-white hover:scale-105 duration-150"
            target="_blank"
          >
            <IconBrandGithub />
          </a>
        </div>
      </nav>
    </header>
  );
};

export const NavbarElement = ({
  text,
  href,
}: {
  text: string;
  href: string;
}) => {
  return (
    <a
      className="relative text-sm text-neutral-400 hover:text-white duration-150 ease-in"
      href={href}
    >
      {text}
    </a>
  );
};
