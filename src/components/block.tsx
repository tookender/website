import React from "react";
import Image from "next/image";

export const Block = ({
  text,
  href,
  image,
  alt,
}: {
  text: string;
  href: string;
  image: string;
  alt: string;
}) => {
  return (
    <a
      href={href}
      className="border border-neutral-700 bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-100 no-underline"
    >
      <Image
        src={`/${image}`}
        className="!mr-1 rounded-full"
        width={14}
        height={14}
        alt="Rustbyte logomark"
      />
      {text}
    </a>
  );
};
