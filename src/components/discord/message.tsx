import React from "react";
import Image from "next/image";
import { IconCheck } from "@tabler/icons-react";
import { profiles } from "@/lib/profiles";

export const Message = ({
  profile,
  date,
  text,
  children,
}: {
  profile: string;
  date: string;
  text?: string;
  children?: React.ReactNode;
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
    <main className="flex flex-col font-whitney">
      <div className="flex flex-row gap-3">
        <button className="rounded-full">
          <Image
            src={picture}
            height={46}
            width={46}
            alt={`${profile}'s profile picture`}
            className="aspect-square rounded-full min-w-[44px] min-h-[44px] w-[44px] h-[44px] sm:min-w-[46px] sm:min-h-[46px] active:translate-y-[1px]"
          />
        </button>

        <div className="flex flex-col">
          <div className="flex flex-row gap-1 items-center">
            <button
              className={`text-md sm:text-lg hover:underline font-medium text-[${color}]`}
            >
              {profile}
            </button>

            <div
              className={`items-center justify-center bg-[#5865f2] text-white rounded-md gap-0.5 h-4 px-1 text-[10px] sm:text-xs leading-[.9375rem] ${
                bot ? "flex" : "hidden"
              }`}
            >
              <IconCheck
                height={12}
                width={12}
                className="relative sm:hidden"
              />
              <IconCheck
                height={14}
                width={14}
                className="hidden sm:relative"
              />
              <span>BOT</span>
            </div>

            <span className="ml-1 text-neutral-400 text-xs sm:text-sm">
              {date}
            </span>
          </div>

          <span className="text-base sm:text-lg font-light leading-[1.375rem]">
            {text}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 -translate-y-3">{children}</div>
    </main>
  );
};
