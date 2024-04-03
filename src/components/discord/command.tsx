import React from "react";
import Image from "next/image";
import { profiles } from "@/lib/profiles";

export const Command = ({
  profile,
  command,
  title,
}: {
  profile: string;
  command: string;
  title?: string;
}) => {
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
    <div className="flex flex-row gap-0.5 items-center ml-12 translate-y-2">
      <Image
        src={picture}
        height={18}
        width={18}
        alt={`${profile}'s profile picture`}
        className="aspect-square rounded-full ml-1.5 min-h-[16px] min-w-[16px] w-[16px] h-[16px] sm:min-h-[18px] sm:min-w-[18px]"
      />

      <button
        className={`text-base sm:text-lg hover:underline font-medium text-[${color}]`}
      >
        {profile}
      </button>

      <span className="text-zinc-400 mx-0.5 text-base sm:text-lg">used</span>

      <button
        className="flex items-center justify-center text-base sm:text-lg hover:underline font-medium text-blue-500"
        title={title}
      >
        /{command}
      </button>
    </div>
  );
};
