import React from "react";

export const Card = ({
  title,
  description,
  children,
  link,
}: {
  title: string;
  description: string;
  image: string;
  children?: React.ReactNode;
  link: string;
  link2?: string;
}) => {
  return (
    <a
      className="flex flex-col p-6 rounded-xl w-[90vw] md:w-full md:max-w-sm md:min-h-52 bg-black 
              border border-white/[0.2] hover:border-white/[0.3] hover:translate-x-2 md:hover:-translate-y-2 md:hover:translate-x-0 duration-500"
      href={link}
    >
      {children}
      <h1 className="mt-2 text-xl font-bold">{title}</h1>
      <p className="mt-1 text-sm text-neutral-400">{description}</p>
    </a>
  );
};
