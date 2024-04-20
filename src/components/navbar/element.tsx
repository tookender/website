"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavbarElement = ({ text, href }: { text: string; href: string }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`relative hidden text-sm duration-300 ease-in hover:text-white sm:block ${pathname == href ? "text-neutral-200" : "text-neutral-400"}`}
      href={href}
    >
      {text}
    </Link>
  );
};