import React from "react";

const baseButtonStyles =
  "flex justify-center items-center px-4 py-2 gap-2 text-sm rounded-md active:scale-95 duration-300";

interface ButtonProps {
  text: string;
  link: string;
  children: React.ReactNode;
}

export const TransparentButton = ({ text, link, children }: ButtonProps) => {
  return (
    <button type="submit" className="bg-white/5 text-xl backdrop-blur-sm border border-white/10 py-2.5 px-5 rounded-md duration-400 hover:bg-white/10 hover:border-white/20">
      {text}
    </button>
  )
}

export const PrimaryButton = ({ text, link, children }: ButtonProps) => {
  return (
    <a href={link}>
      <button className={`bg-white text-black ${baseButtonStyles}`}>
        {children}
        <span>{text}</span>
      </button>
    </a>
  );
};

export const SecondaryButton = ({ text, link, children }: ButtonProps) => {
  return (
    <a>
      <button
        className={`border border-zinc-800 hover:bg-zinc-800 ${baseButtonStyles}`}
      >
        {children}
        <span>{text}</span>
      </button>
    </a>
  );
};
