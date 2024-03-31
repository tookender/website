import React from "react";
import Image from "next/image";
import { IconCheck } from "@tabler/icons-react";

export const Message = ({
  author,
  picture,
  date,
  text,
  color,
  bot,
}: {
  author: string;
  picture: string;
  date: string;
  text: string;
  color?: string;
  bot?: boolean,
}) => {
  return (
    <main className="flex flex-row gap-3 font-whitney">
      <button className="rounded-full">
        <Image
          src={picture}
          height={40}
          width={40}
          alt={`${author}'s profile picture`}
          className="aspect-square rounded-full active:translate-y-[1px]"
        />
      </button>

      <div className="flex flex-col">
        <div className="flex flex-row gap-1 items-center">
          <button className={`text-base hover:underline font-medium ${color ? `text-[${color}]` : `text-white`}`}>
            {author}
          </button>

          <div className={`items-center justify-center bg-[#5865f2] text-white rounded-md gap-0.5 h-4 px-1 text-[10px] leading-[.9375rem] ${bot ? "flex" : "hidden"}`}>
            <IconCheck height={12} width={12} />
            <span>BOT</span>
          </div>

          <span className="ml-1 text-neutral-400 text-xs">{date}</span>
        </div>

        <span className="text-base font-light leading-[1.375rem]">{text}</span>
      </div>
    </main>
  );
};
