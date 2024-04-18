"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Image } from "@nextui-org/image";
import { signOut } from "next-auth/react";

interface AvatarProps {
  img: any;
}

export const Avatar = ({ img }: AvatarProps) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Image
          src={img}
          width={64}
          height={64}
          alt="Profile picture"
          className="size-6 h-fit w-fit cursor-pointer rounded-full px-2 py-1"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Account Actions">
        <DropdownItem key="profile">Profile</DropdownItem>
        <DropdownItem key="settings">Account Settings</DropdownItem>
        <DropdownItem
          key="logout"
          className="text-danger"
          color="danger"
          onClick={() => signOut()}
        >
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
