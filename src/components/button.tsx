import React from "react";

export const Button = ({ text, href, id }: { text: string; href?: string, id?: string }) => (
  href ? (
    <a href={href}>
      <button className="py-2 px-4 rounded-md bg-[#0a0a0a] hover:bg-neutral-800 border border-white/10 hover:border-white/20 duration-500" id={id}>
        {text}
      </button>
    </a>
  ) : (
    <button className="py-2 px-4 rounded-md bg-[#0a0a0a] hover:bg-neutral-800 border border-white/10 hover:border-white/20 duration-500" id={id}>
      {text}
    </button>
  )
);
