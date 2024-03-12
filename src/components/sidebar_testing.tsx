import React from "react";
import Link from "next/link";
import Image from "next/image";

// Just a proof of concept sidebar, that I might use for other projects
// Doesn't have any real functionality as of now.

export const Sidebar = () => {
  return (
    <nav className="fixed top-0 left-0 h-screen w-16 flex flex-col items-center bg-[#060607] shadow-lg z-50 mt-16">
      <div className="h-0.5 w-8 rounded-[1px] bg-[#0e0e10] my-2" />
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
      <Link className="rounded-full peer" href={link}>
        <Image
          src={image}
          height={48}
          width={48}
          alt="Hi"
          className="rounded-3xl hover:rounded-xl transition-[border-radius] duration-500 aspect-square active:translate-y-[1px]"
        />
      </Link>
      <span className="absolute top-0 left-full ml-2 p-2 bg-[#0b0b0b] text-neutral-200 rounded-lg whitespace-nowrap opacity-0 peer-hover:opacity-100 transition-opacity duration-500 font-semibold">
        {text}
      </span>
    </div>
  );
};
