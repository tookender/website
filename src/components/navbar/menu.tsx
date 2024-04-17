"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

interface MenuProps {
  children: React.ReactNode;
}

export const Menu = ({ children }: MenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleScrolling = () => {
    if (menuOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }

    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const menuButton = document.getElementById(
      "menuButton",
    ) as HTMLButtonElement;
    menuButton.addEventListener("click", toggleScrolling);
  });

  return (
    <menu
      className={`h-screen w-screen fixed z-[100] items-center justify-center bg-gradient-to-br from-neutral-900 to-black  ${
        menuOpen ? "flex" : "hidden"
      }`}
      id="menu"
    >
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </menu>
  );
};

export const MenuElement = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      className="z-50 text-6xl font-bold text-neutral-400 duration-500 hover:text-white"
      href={href}
    >
      {text}
    </Link>
  );
};
