import React from "react";

interface CardProps {
  title: string;
  description: string;
  link: string;
  target?: string;
  children: React.ReactNode;
}

export const Card = ({
  title,
  description,
  link,
  target,
  children,
}: CardProps) => {
  return (
    <a
      className="flex w-[90vw] flex-col rounded-xl border border-white/[0.2] bg-black p-6 duration-500 
              hover:translate-x-2 hover:border-white/[0.3] md:min-h-52 md:w-full md:max-w-sm md:hover:-translate-y-2 md:hover:translate-x-0"
      href={link}
      target={target}
    >
      {children}
      <h1 className="mt-2 text-xl font-bold">{title}</h1>
      <p className="mt-1 text-sm text-neutral-400">{description}</p>
    </a>
  );
};
