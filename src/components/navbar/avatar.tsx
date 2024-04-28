"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Image } from "@nextui-org/image";
// import { signOut } from "next-auth/react";

interface AvatarProps {
  img: any;
}

export const Avatar = ({ img }: AvatarProps) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Image
          src={img}
          width={128}
          height={128}
          alt="Profile picture"
          className="cursor-pointer rounded-full size-6 mr-2"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Account Actions">
        <DropdownItem key="profile">Profile</DropdownItem>
        <DropdownItem key="settings">Account Settings</DropdownItem>
        <DropdownItem
          key="logout"
          className="text-danger"
          color="danger"
          // onClick={() => signOut()}
        >
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
