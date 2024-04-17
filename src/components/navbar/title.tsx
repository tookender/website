"use client";

import { usePathname } from "next/navigation";

export function Title() {
  let pathname = usePathname();
  pathname = pathname ? pathname : "/"

  if (pathname == "/") {
    pathname = "/home";
  } else {
    pathname.replace("/", "");
  }

  return (
    <h1
      className="text-base font-bold text-neutral-300 duration-150 group-hover:text-white"
      id="title"
    >
      korino{pathname}
    </h1>
  );
}
