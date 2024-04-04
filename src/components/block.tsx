import React from "react";
import Image from "next/image";

interface BlockProps {
  text: string;
  link: string;
  image: string;
  alt: string;
}

export const Block = ({ text, link, image, alt }: BlockProps) => {
  return (
    <a
      href={link}
      className="border border-neutral-700 bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-100 no-underline hover:border-neutral-500 hover:bg-neutral-700 duration-500"
    >
      <Image
        src={`/${image}`}
        className="!mr-1 rounded-full"
        width={14}
        height={14}
        alt={alt}
      />
      {text}
    </a>
  );
};
