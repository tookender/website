"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react"

import { GiHamburgerMenu } from "react-icons/gi";
import { FaBook, FaDog, FaImage, FaPen } from "react-icons/fa6";
import { BsFolder, BsGithub, BsHexagonFill, BsPerson } from "react-icons/bs";

import Image from "next/image";
import { CopyButtons } from "./copy";
import { SidebarItem } from "./item";
import { SignIn } from "@/components/auth/sign-in";
import { SignOut } from "@/components/auth/sign-out";
import {Popover, PopoverTrigger, PopoverContent } from "@heroui/react";

export const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession()
  const [isLoaded, setIsLoaded] = useState(false);

  const setLoaded = () => setIsLoaded(true);
  
  useEffect(() => {
    setTimeout(setLoaded, 1000)
  })

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
        className={`md:flex flex-col justify-between min-w-[13.2rem] h-[100dvh] bg-[#191919] duration-500 ease-in-out border-r border-neutral-800 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative absolute top-0 left-0`}
      >
        <div>
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

            <SidebarItem text="Home" link="/" title="Navigate to home">
              <BsPerson className="text-lg" />
            </SidebarItem>

            <SidebarItem text="About" link="/about" title="Info about me">
              <BsFolder className="text-lg" />
            </SidebarItem>

            <h1 className="text-[15px] mt-6 mb-2 font-semibold text-neutral-400">
              Projects
            </h1>

            <SidebarItem text="Korii Bot" link="/bot" title="My Discord bot">
              <BsHexagonFill className="text-lg" />
            </SidebarItem>

            <SidebarItem text="Vocab" link="/vocab" title="Vocabulary Quiz">
              <FaBook className="text-lg" />
            </SidebarItem>

            <SidebarItem text="Notes" link="/notes" title="Notes-taking App">
              <FaPen className="text-lg" />
            </SidebarItem>

            <SidebarItem text="Image Converter" link="https://converter.korino.dev" title="Free Image Converter">
              <FaImage className="text-lg" />
            </SidebarItem>

            <h1 className="text-[15px] mt-6 mb-2 font-semibold text-neutral-400">
              Miscellaneous
            </h1>

            <SidebarItem text="Dog Pictures" link="/doggo" title="Dog pictures">
              <FaDog className="text-lg" />
            </SidebarItem>


            <SidebarItem text="GitHub" link="https://github.com/tookender" title="My GitHub">
              <BsGithub className="text-lg" />
            </SidebarItem>

            <CopyButtons />
          </div>
        </div>

        <div className={`flex flex-row items-center h-[52px] w-full border-t border-neutral-800 ${!session?.user ? "justify-center" : ""}`}>
          {session?.user ? (
            <Popover placement="top" showArrow={true}>
              <PopoverTrigger className="ring-0">
                <button className="flex flex-row items-center justify-center gap-2 mx-2 hover:bg-[#242424] pl-2 pr-4 py-1 duration-200 cursor-pointer rounded-md">
                  <img alt="Profile Picture" height={32} width={32} className="w-8 h-8 rounded-full" src={session.user.image ? session.user.image : "/dogs/dog13.webp"}/>
                  <h1 className="text-sm font-semibold text-neutral-200">
                    {session.user.name}
                  </h1>
                </button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <SignOut/>
                </div>
              </PopoverContent>
            </Popover>
            ) : (
            <SignIn isLoaded={isLoaded}/>
          )}
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
