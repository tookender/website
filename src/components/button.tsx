import React from "react";

const baseButtonStyles =
  "flex justify-center items-center px-4 py-2 gap-2 text-sm rounded-md duration-300";

export const PrimaryButton = ({
  text,
  link,
  children,
}: {
  text: string;
  link: string;
  children: React.ReactNode;
}) => {
  return (
    <a href={link}>
      <button className={`bg-white text-black ${baseButtonStyles}`}>
        {children}
        <span>{text}</span>
      </button>
    </a>
  );
};

export const SecondaryButton = ({
  text,
  link,
  children,
}: {
  text: string;
  link: string;
  children: React.ReactNode;
}) => {
  return (
    <a href={link}>
      <button
        className={`border border-zinc-800 hover:bg-zinc-800 ${baseButtonStyles}`}
      >
        {children}
        <span>{text}</span>
      </button>
    </a>
  );
};
