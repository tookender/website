"use client";

import { CopyButtons } from "./copy";
import { SidebarItem } from "./item";

import { FaDog } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFolder, BsGithub, BsHexagonFill, BsPerson } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleRouteChange = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("menu");
      const button = document.getElementById("button");
      if (
        isOpen &&
        menu &&
        !menu.contains(event.target as Node) &&
        button &&
        !button.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // close sidebar menu when route changes aka the user clicks on a site
  useEffect(() => {
    handleRouteChange();
  }, [pathname]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-10"/>
      )}

      <menu
        id="menu"
        className={`md:flex flex-col min-w-[13.2rem] h-[100dvh] bg-[#191919] duration-500 ease-in-out border-r border-neutral-800 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative absolute top-0 left-0`}
      >
        <button
          className="flex flex-row p-4 gap-2 items-center active:scale-95 duration-300"
        >
          <Image
            src="/ender.webp"
            width={500}
            height={500}
            className="h-10 w-10 rounded-full"
            alt="My profile picture"
          />
          <h1 className="font-semibold text-lg">/tookender\</h1>
        </button>

          <div className="flex flex-col gap-0.5 px-4 py-1">
          <h1 className="text-[15px] mb-2 font-semibold text-neutral-400">
            Home
          </h1>

          <SidebarItem text="Home" link="/" title="Navigate to home" aria-label="Navigate to home">
            <BsPerson className="text-lg" />
          </SidebarItem>

          <SidebarItem text="About" link="/about" title="Info about me" aria-label="Info about me">
            <BsFolder className="text-lg" />
          </SidebarItem>

          <SidebarItem text="Korii Bot" link="/bot" title="My Discord bot" aria-label="My Discord bot">
            <BsHexagonFill className="text-lg" />
          </SidebarItem>

          <h1 className="text-[15px] mt-6 mb-2 font-semibold text-neutral-400">
            Miscellaneous
          </h1>

          <SidebarItem text="Dog Pictures" link="/doggo" title="Dog pictures" aria-label="Dog pictures">
            <FaDog className="text-lg" />
          </SidebarItem>

          {/* <SidebarItem text="Contact" link="/contact" title="Contact me" aria-label="Contact me">
            <BsMailboxFlag className="text-lg" />
          </SidebarItem> */}

          <SidebarItem text="GitHub" link="https://github.com/tookender" title="My GitHub" aria-label="My GitHub">
            <BsGithub className="text-lg" />
          </SidebarItem>

          <CopyButtons />
        </div>
      </menu>

      <button
        onClick={handleClick}
        className={`flex md:hidden fixed top-4 left-4 z-50 ease-in-out transform transition-all duration-500 ${
          isOpen ? "translate-x-52" : ""
        }`}
        id="button"
      >
        <div className="p-2.5 -translate-y-3 -translate-x-3 backdrop-blur-[1px] bg-neutral-800/70 rounded-full">
          <GiHamburgerMenu className="text-3xl" />
        </div>
      </button>
    </>
  );
};
