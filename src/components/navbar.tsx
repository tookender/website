"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconBrandGithub, IconDog, IconMenuDeep } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  let pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  if (pathname == "/") {
    pathname = "home";
  } else {
    pathname.replace("/", "")
  }

  const toggleScrolling = () => {
    if (menuOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }

    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const button = document.getElementById("menuButton") as HTMLButtonElement;

    button.addEventListener("click", toggleScrolling);
  });

  return (
    <main>
      <header className="flex flex-col fixed top-0 justify-around items-center w-full h-14 border-b border-b-zinc-800 bg-black/60 backdrop-blur z-50">
        <nav className="w-full flex items-center max-w-[1400px] relative flex-1">
          <div className="flex flex-row items-center w-full gap-4 sm:gap-6 ml-2 sm:ml-4 xxl:ml-0">
            <Link
              className="flex flex-row justify-center items-center gap-2 mr-2 sm:mr-4"
              href="/"
            >
              <Image
                className="rounded-full"
                src="/avatar.webp"
                alt="Korino Logo"
                width={40}
                height={40}
              />

              <h1 className="text-base font-bold text-neutral-300 group-hover:text-white duration-150">
                korino/
              </h1>
            </Link>

            <NavbarElement text="Korino PvP" href="/pvp" />
            <NavbarElement text="Korii Bot" href="/bot" />
          </div>

          <div className="flex items-center gap-3 mr-2 sm:mr-4 xxl:mr-0">
            <Link
              href="/doggo"
              title="DOG PICTURES :D"
              className="text-neutral-300 hover:text-white hover:scale-105 duration-150"
            >
              <IconDog />
            </Link>
            <a
              href="https://github.com/tookender/website"
              title="Korino Website Github"
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
      </header>
      <menu
        className={`h-screen w-screen bg-neutral-900/10 backdrop-blur-sm items-center justify-center  ${
            menuOpen ? "flex" : "hidden"
          }`}
          id="menu"
        >
        <h1 className="text-6xl">Testing</h1>
      </menu>
    </main>
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
