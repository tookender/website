import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-t-[#333] py-12 z-50 relative bg-black text-center text-neutral-300">
      <p className="text-balance text-center text-sm">
        Built by{" "}
        <Link className="hover:text-white duration-150 underline" href="/ender">
          Ender
        </Link>
        . The source code is available on{" "}
        <Link
          className="hover:text-white duration-150 underline"
          href="https://github.com/tookender/website"
        >
          GitHub
        </Link>
        .
      </p>

      <hr className="my-6 w-full md:w-1/3 mx-auto border-[#333]" />

      <p className="text-balance text-center text-sm">
        &copy; {currentYear}{" "}
        <Link className="hover:text-white duration-150 underline" href="/">
          Korino
        </Link>
        . All Rights Reserved.
      </p>

      <a href="https://winworldpc.com/product/netscape-navigator/30x" target="_blank" className="flex items-center justify-center">
        <Image src="/netscape.webp" alt="This page is best viewed with Netscape." width={88} height={31} className="mt-4"/>
      </a>
    </footer>
  );
};
