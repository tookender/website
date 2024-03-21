import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconBrandGithub, IconDog, IconMenuDeep } from "@tabler/icons-react";

export const Navbar = ({ title }: { title: string }) => {
  useEffect(() => {
    const menuButton = document.getElementById("menuButton") as HTMLButtonElement;
    const menu = document.getElementById("menu") as HTMLMenuElement;

    menuButton.addEventListener("click", (_) => {
      console.log(menu.classList)
      if (menu.classList.contains("opacity-0")) {
        menu.classList.remove("opacity-0");
      } else {
        menu.classList.add("opacity-0");
      }
    });
  });

  return (
    <header className="flex flex-col fixed top-0 justify-around items-center w-full h-12 sm:h-14 border-b border-b-white/10 bg-black/10 backdrop-blur-lg z-50">
      <nav className="w-full flex items-center max-w-[1400px] relative flex-1">
        <div className="flex flex-row items-center w-full gap-4 sm:gap-6 ml-2 sm:ml-4 xxl:ml-0">
          {/* prettier-ignore */}
          <Link className="group flex flex-row justify-center items-center gap-2 mr-2 sm:mr-4" href="/">
            {/* prettier-ignore */}
            <Image className="rounded-full brightness-95 group-hover:brightness-100 duration-150 scale-75 sm:scale-90" src="/avatar.webp" alt="Korino Logo" width={50} height={50}/>
            <h1 className="text-xl font-bold text-neutral-300 group-hover:text-white duration-150">{title}</h1>
          </Link>

          <NavbarElement text="Korino PvP" href="/pvp" />
          <NavbarElement text="Korii Bot" href="/bot" />
        </div>

        <div className="flex items-center gap-3 mr-2 sm:mr-4 xxl:mr-0">
          <Link
            href="/doggo"
            aria-label="DOG PICTURES :D"
            className="text-neutral-300 hover:text-white hover:scale-105 duration-150"
          >
            <IconDog />
          </Link>
          <a
            href="https://github.com/tookender/website"
            aria-label="Korino Website Github"
            className="text-neutral-300 hover:text-white hover:scale-105 duration-150"
            target="_blank"
          >
            <IconBrandGithub />
          </a>
          <button className="sm:hidden z-[999]" id="menuButton">
            <IconMenuDeep />
          </button>
        </div>
      </nav>

      <menu className="fixed flex items-center justify-center w-screen h-screen opacity-0 pointer-events-none z-[999]" id="menu">
        <div className="flex flex-col justify-center items-start gap-2 sm:gap-4 md:gap-6 text-5xl">
          <h1 className="text-5xl text-white">
            Wsg bro {title}
          </h1>
        </div>
      </menu>
    </header>
  );
};

const NavbarElement = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      className="relative text-sm text-neutral-400 hover:text-white duration-150 ease-in hidden sm:block"
      href={href}
    >
      {text}
    </Link>
  );
};
