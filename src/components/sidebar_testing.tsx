import React from "react";
import Link from "next/link";
import Image from "next/image";

// Just a proof of concept sidebar, that I might use for other projects
// Doesn't have any real functionality as of now.

export const Sidebar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 mt-16 flex h-screen w-16 flex-col items-center bg-[#060607] shadow-lg">
      <div className="my-2 h-0.5 w-8 rounded-[1px] bg-[#0e0e10]" />
      <ul className="flex flex-col items-center gap-4">
        <SidebarIcon image="/dogs/dog1.webp" text="Tooltip" link="" />
        <SidebarIcon image="/dogs/dog2.webp" text="Tooltip" link="" />
        <SidebarIcon image="/dogs/dog3.webp" text="Tooltip" link="" />
        <SidebarIcon image="/dogs/dog4.webp" text="Tooltip" link="" />
        <SidebarIcon image="/dogs/dog5.webp" text="Tooltip" link="" />
        <SidebarIcon image="/dogs/dog6.webp" text="Tooltip" link="" />
        <SidebarIcon image="/dogs/dog7.webp" text="Tooltip" link="" />
      </ul>
    </nav>
  );
};

const SidebarIcon = ({
  image,
  text,
  link,
}: {
  image: string;
  text: string;
  link: string;
}) => {
  return (
    <div className="relative flex items-center justify-center">
      <Link className="peer rounded-full" href={link}>
        <Image
          src={image}
          height={48}
          width={48}
          alt="Hi"
          className="aspect-square rounded-3xl transition-[border-radius] duration-500 hover:rounded-xl active:translate-y-[1px]"
        />
      </Link>
      <span className="absolute left-full top-0 ml-2 whitespace-nowrap rounded-lg bg-[#0b0b0b] p-2 font-semibold text-neutral-200 opacity-0 transition-opacity duration-500 peer-hover:opacity-100">
        {text}
      </span>
    </div>
  );
};
