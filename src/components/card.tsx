"use client";
import React from "react";
import Image from "next/image";

export const Card = ({
  title,
  description,
  image,
  children,
  link,
  link2,
}: {
  title: string;
  description: string;
  image: string;
  children?: React.ReactNode;
  link: string;
  link2?: string;
}) => {
  const alt = `Icon of ${title}`;
  return (
  <a
    className="flex flex-col p-6 rounded-xl w-[90vw] md:w-full md:max-w-sm md:min-h-52 bg-black 
              border border-white/[0.2] hover:border-white/[0.3] hover:translate-x-2 md:hover:-translate-y-2 md:hover:translate-x-0 duration-500"
    href={link}>
    {children}
    {/* <Image className="rounded-full" src={image} alt={alt} width={100} height={100}/> */}
    <h1 className="mt-2 text-xl font-bold">{title}</h1>
    <p className="mt-1 text-sm text-neutral-400">{description}</p>
  </a>
  );
};
