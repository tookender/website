import React from "react";
import Image from "next/image";
import { IconCheck } from "@tabler/icons-react";
import { profiles } from "@/lib/profiles";
import Tippy from "@tippyjs/react";

interface MessageProps {
  profile: string;
  date: string;
  text?: string;
  children?: React.ReactNode;
}

export const Message = ({ profile, date, text, children }: MessageProps) => {
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
    <main className="flex flex-col font-discord">
      <div className="flex flex-row gap-3">
        <button className="rounded-full">
          <Image
            src={picture}
            height={46}
            width={46}
            alt={`${profile}'s profile picture`}
            className="aspect-square h-[44px] min-h-[44px] w-[44px] min-w-[44px] rounded-full active:translate-y-[1px] sm:min-h-[46px] sm:min-w-[46px]"
          />
        </button>

        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-1">
            <button
              className={`text-md font-medium hover:underline sm:text-lg text-[${color}]`}
            >
              {profile}
            </button>

            <Tippy content={<span>Verified Bot</span>}>
              <div
                className={`h-4 items-center justify-center gap-0.5 rounded-md bg-[#5865f2] px-1 text-[10px] leading-[.9375rem] text-white sm:text-xs ${
                  bot ? "flex" : "hidden"
                }`}
              >
                <IconCheck height={12} width={12} className="block sm:hidden" />
                <IconCheck height={14} width={14} className="hidden sm:block" />
                <span>BOT</span>
              </div>
            </Tippy>

            <span className="ml-1 text-xs text-neutral-400 sm:text-sm">
              {date}
            </span>
          </div>

          <span className="text-base font-light leading-[1.375rem] sm:text-lg">
            {text}
          </span>
        </div>
      </div>

      <div className="flex -translate-y-3 flex-col gap-2">{children}</div>
    </main>
  );
};
