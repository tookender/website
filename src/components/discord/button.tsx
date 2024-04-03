import React from "react";

const baseButtonStyles =
  "flex items-center justify-center text-center text-base py-1.5 px-5 w-fit rounded-[4px] text-zinc-200 duration-500";

export const ButtonContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="flex flex-col sm:flex-row gap-2 ml-14">{children}</div>;
};

export const GrayButton = ({ text }: { text: string }) => {
  return (
    <button
      className={`bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 ${baseButtonStyles}`}
    >
      {text}
    </button>
  );
};

export const GreenButton = ({ text }: { text: string }) => {
  return (
    <button
      className={`bg-green-700 hover:bg-green-800 active:bg-green-900 ${baseButtonStyles}`}
    >
      {text}
    </button>
  );
};
