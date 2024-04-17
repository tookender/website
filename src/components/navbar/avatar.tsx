"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Image } from "@nextui-org/image";

interface AvatarProps {
  img: any;
}

export const Avatar = ({ img }: AvatarProps) => {
  console.log(`IMAGE: ${img}`);
  return (
    <Dropdown>
      <DropdownTrigger>
        <Image
          src={img}
          width={64}
          height={64}
          alt="Profile picture"
          className="size-6 cursor-pointer rounded-full px-2 py-1 duration-300 active:scale-95"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="profile">Profile</DropdownItem>
        <DropdownItem key="settings">Account Settings</DropdownItem>
        <DropdownItem key="logout" className="text-danger" color="danger">
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
