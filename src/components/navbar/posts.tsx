"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { SiWindows11 } from "react-icons/si";
import { TbChevronDown, TbMessage } from "react-icons/tb";
import { usePathname } from "next/navigation";

export const Posts = () => {
  const pathname = usePathname();

  return (
    <Dropdown>
      <DropdownTrigger className={`text-sm hover:text-white duration-300 cursor-pointer ${pathname.includes("posts") ? "text-neutral-200" : "text-neutral-400"}`}>
        <div className="flex flex-row items-center gap-1">
          <span>Posts</span> <span className="text-[10px] text-red-300">(NEW)</span> <TbChevronDown />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="List of posts"
        className="w-[340px]"
        itemClasses={{
          base: "gap-4",
        }}
      >
        <DropdownItem
          key="list"
          href="/posts"
          description="List of all available posts"
          startContent={<TbMessage className="size-6"/>}
        >
          Posts
        </DropdownItem>
        <DropdownItem
          key="windows"
          href="/posts/windows"
          description="How to get Windows Pro for free"
          startContent={<SiWindows11 className="size-6"/>}
        >
          Windows Pro for free
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}