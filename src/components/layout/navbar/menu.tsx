"use client";

import { SignIn } from "@/components/auth/sign-in";
import { SignOut } from "@/components/auth/sign-out";

import { CopyButtons, MinimalCopyButtons } from "./copy";
import { CustomNavbarItem } from "./item";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import { FaBook, FaDog, FaImage, FaPen } from "react-icons/fa6";
import { BsFolder, BsGithub, BsHexagonFill, BsPerson } from "react-icons/bs";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Tooltip,
} from "@heroui/react";
import { RiEdit2Fill } from "react-icons/ri";

function nameForPath(path: string) {
  if (path == "/") {
    return "home"
  } else {
    return path.replace("/", "");
  }
}

export function NavigationBar() {
  const { data: session } = useSession()
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleRouteChange = () => {
    setIsMenuOpen(false);
  };

  // close sidebar menu when route changes aka the user clicks on a site
  useEffect(() => {
    handleRouteChange();
  }, [pathname]);

  return (
    <Navbar
      className="bg-transparent border-b"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          className=""
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />

        {/* Mobile Brand */}
        <NavbarBrand>
          <div
            className="ml-2 flex flex-row gap-2 items-center"
          >
            <Image
              src="/ender.webp"
              width={500}
              height={500}
              className="h-9 w-9 rounded-full"
              alt="My profile picture"
            />

            {/* <p className="text-sm font-bold text-inherit">ender</p> */}
            <button className="flex flex-col text-start py-2 pl-2 pr-12 sm:px-24 hover:bg-[#242424] rounded-lg duration-100">
              <p className="text-sm text-neutral-300/70">
                korino /
              </p>

              <p className="text-sm">
                {nameForPath(pathname)}
              </p>
            </button>
          </div>
        </NavbarBrand>
      </NavbarContent>

        {/* Desktop Brand */}
        <NavbarBrand className="hidden sm:flex">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/ender.webp"
              width={500}
              height={500}
              className="h-10 w-10 rounded-full"
              alt="My profile picture"
            />

            {/* <p className="font-bold text-inherit">ender</p> */}
            <div className="flex flex-row text-start">
              <Tooltip content="Navigate back to homepage" delay={1500} closeDelay={100} showArrow={true}>
                <a className="text-sm text-neutral-300/70 p-1 md:p-2 hover:bg-[#242424] rounded-lg duration-100" href="/">
                  korino
                </a>
              </Tooltip>


              <p className="text-sm text-neutral-300/70 p-1 md:p-2">
                /
              </p>

              <Tooltip content={`Navigate to ${nameForPath(pathname)}`} delay={1500} closeDelay={100} showArrow={true}>
                <a className="text-sm p-1 md:p-2 hover:bg-[#242424] rounded-lg duration-100" href={pathname}>
                  {nameForPath(pathname)}
                </a>
              </Tooltip>
            </div>
          </div>
        </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-2" justify="center">
        <CustomNavbarItem text="Home" link="/" title="The home-page">
          <BsPerson className="text-lg" />
        </CustomNavbarItem>

        <CustomNavbarItem
          text="About"
          link="/about"
          title="Information about me"
        >
          <RiEdit2Fill className="text-lg" />
        </CustomNavbarItem>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <div
                className={`flex flex-row items-center gap-2 text-sm px-2 py-2 ${
                  pathname.includes("bot") ||
                  pathname.includes("vocab") ||
                  pathname.includes("notes") ||
                  pathname.includes("converter")
                    ? "text-white"
                    : "text-neutral-400"
                } font-semibold rounded-md duration-300 transition-all hover:text-white`}
              >
                <BsFolder className="text-lg" />
                <button>Projects</button>
              </div>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="bot"
              href="/bot"
              description="A multi-purpose Discord Bot"
            >
              Korii Bot
            </DropdownItem>
            <DropdownItem
              key="vocab"
              href="/vocab"
              description="Program for learning vocabulary"
            >
              Vocabulary Trainer
            </DropdownItem>
            <DropdownItem
              key="notes"
              href="/notes"
              description="Application for keeping notes"
            >
              Notes
            </DropdownItem>
            <DropdownItem
              key="converter"
              href="https://converter.korino.dev"
              description="Convert images into any format"
            >
              Image Converter
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="text-neutral-400 flex flex-row text-lg">
          <a className={`"hover:text-white duration-300 p-2 rounded-md ${pathname.includes("doggo") ? "text-white" : ""}`} href="/doggo">
            <FaDog/>
          </a>

          <MinimalCopyButtons className=""/>

          <a className="hover:text-white duration-300 p-2 rounded-md" target="_blank" href="https://github.com/tookender">
            <BsGithub/>
          </a>
        </NavbarItem>

        <NavbarItem>
          {session?.user ? (
            <Popover placement="top" showArrow={true}>
              <PopoverTrigger className="ring-0">
                <button className="flex flex-row items-center justify-center gap-2 mx-2 hover:bg-[#242424] p-2 duration-200 cursor-pointer rounded-full">
                  <h1 className="text-sm font-semibold text-neutral-200">
                    {session.user.name}
                  </h1>
                  
                  <img
                    alt="Profile Picture"
                    height={32}
                    width={32}
                    className="w-8 h-8 rounded-full"
                    src={
                      session.user.image
                        ? session.user.image
                        : "/dogs/dog13.webp"
                    }
                  />
                </button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <SignOut />
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <SignIn isLoaded={true} />
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="text-lg">
        <h2 className="text-xl font-bold mt-4">General</h2>

        <NavbarMenuItem className="flex flex-row items-center gap-2">
          <BsPerson className="text-lg" />
          <Link href="/">Home Page</Link>
        </NavbarMenuItem>

        <NavbarMenuItem className="flex flex-row items-center gap-2">
          <BsFolder className="text-lg" />
          <Link href="/about">About</Link>
        </NavbarMenuItem>

        <h2 className="text-xl font-bold mt-4">Projects</h2>

        <NavbarMenuItem className="flex flex-row items-center gap-2">
          <BsHexagonFill className="text-lg" />
          <Link href="/bot">Korii Bot</Link>
        </NavbarMenuItem>

        <NavbarMenuItem className="flex flex-row items-center gap-2">
          <FaBook className="text-lg" />
          <Link href="/vocab">Vocabulary Trainer</Link>
        </NavbarMenuItem>

        <NavbarMenuItem className="flex flex-row items-center gap-2">
          <FaPen className="text-lg" />
          <Link href="/notes">Notes</Link>
        </NavbarMenuItem>

        <NavbarMenuItem className="flex flex-row items-center gap-2">
          <FaImage className="text-lg" />
          <Link href="/converter">Image Converer</Link>
        </NavbarMenuItem>

        <h2 className="text-xl font-bold mt-4">Links</h2>

        <NavbarMenuItem className="flex flex-row items-center gap-2">
          <FaDog className="text-lg" />
          <Link href="/doggo">Dog Pictures</Link>
        </NavbarMenuItem>

        <NavbarMenuItem className="flex flex-row items-center gap-2">
          <BsGithub className="text-lg" />
          <Link href="https://github.com/tookender">GitHub</Link>
        </NavbarMenuItem>

        <CopyButtons className="flex flex-row items-center gap-2" />
      </NavbarMenu>
    </Navbar>
  );
}
