import React from "react";
import Image from "next/image";
import { profiles } from "@/lib/profiles";
import Tippy from "@tippyjs/react";

export const Command = ({
  profile,
  command,
  title,
}: {
  profile: string;
  command: string;
  title?: string;
}) => {
  const actual_title = `/${command} ${title ? title : ""}`;
  const data = profiles[profile];
  const picture = data[0];
  const color = data[1];
  let bot: boolean;

  if (data[2] === "true") {
    bot = true;
  } else {
    bot = false;
  }

  return (
    <div className="ml-12 flex translate-y-2 flex-row items-center gap-0.5">
      <Image
        src={picture}
        height={18}
        width={18}
        alt={`${profile}'s profile picture`}
        className="ml-1.5 aspect-square h-[16px] min-h-[16px] w-[16px] min-w-[16px] rounded-full sm:min-h-[18px] sm:min-w-[18px]"
      />

      <button
        className={`text-base font-medium hover:underline sm:text-lg text-[${color}]`}
      >
        {profile}
      </button>

      <span className="mx-0.5 text-base text-zinc-400 sm:text-lg">used</span>

      <Tippy content={<span className="text-zinc-400">{actual_title}</span>}>
        <button className="flex items-center justify-center text-base font-medium text-blue-500 hover:underline sm:text-lg">
          /{command}
        </button>
      </Tippy>
    </div>
  );
};