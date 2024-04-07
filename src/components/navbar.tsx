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
    pathname = "/home";
  } else {
    pathname.replace("/", "");
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
      <header className="fixed top-0 z-50 flex h-14 w-full flex-col items-center justify-around border-b border-b-zinc-800 bg-background/60 backdrop-blur">
        <nav className="relative flex w-full max-w-[1400px] flex-1 items-center">
          <div className="ml-2 flex w-full flex-row items-center gap-4 sm:ml-4 sm:gap-6 xxl:ml-0">
            <Link
              className="mr-2 flex flex-row items-center justify-center gap-2 sm:mr-4"
              href="/"
            >
              <Image
                className="rounded-full"
                src="/avatars/ender.webp"
                alt="Korino Logo"
                width={40}
                height={40}
              />

              <h1
                className="text-base font-bold text-neutral-300 duration-150 group-hover:text-white"
                id="title"
              >
                korino{pathname}
              </h1>
            </Link>

            <NavbarElement text="Korino PvP" href="/pvp" />
            <NavbarElement text="Korii Bot" href="/bot" />
            <NavbarElement text="Ender" href="/ender" />
          </div>

          <div className="mr-2 flex items-center gap-3 sm:mr-4 xxl:mr-0">
            <Link
              href="/doggo"
              title="DOG PICTURES :D"
              className="text-neutral-300 duration-150 hover:scale-105 hover:text-white"
            >
              <IconDog />
            </Link>
            <a
              href="https://github.com/tookender/website"
              title="Korino Website Github"
              className="text-neutral-300 duration-150 hover:scale-105 hover:text-white"
              target="_blank"
            >
              <IconBrandGithub />
            </a>
            <button className="z-[999] sm:hidden" id="menuButton">
              <IconMenuDeep />
            </button>
          </div>
        </nav>
      </header>
      <menu
        className={`h-screen w-screen items-center justify-center bg-gradient-to-br from-neutral-900 to-black  ${
          menuOpen ? "flex" : "hidden"
        }`}
        id="menu"
      >
        <div className="flex flex-col gap-4">
          <MenuElement text="Korino" href="/" />
          <MenuElement text="Korino PvP" href="/pvp" />
          <MenuElement text="Korii Bot" href="/bot" />
          <MenuElement text="Doggo pics :D" href="/doggo" />
        </div>
      </menu>
    </main>
  );
};

const NavbarElement = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      className="relative hidden text-sm text-neutral-400 duration-150 ease-in hover:text-white sm:block"
      href={href}
    >
      {text}
    </Link>
  );
};

const MenuElement = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      className="z-50 text-6xl font-bold text-neutral-400 duration-500 hover:text-white"
      href={href}
    >
      {text}
    </Link>
  );
};
