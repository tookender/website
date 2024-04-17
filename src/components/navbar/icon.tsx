import React from "react";

interface NavbarIconProps {
  id?: string;
  title: string;
  href?: string;
  blank?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const NavbarIcon = ({
  id,
  title,
  href,
  blank,
  className,
  children,
}: NavbarIconProps) => {
  if (href) {
    return (
      <a
        href={href}
        title={title}
        target={blank ? "_blank" : "_self"}
        className={`text-neutral-300 duration-150 hover:scale-105 hover:text-white active:scale-95 ${className}`}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        id={id}
        title={title}
        className={`text-neutral-300 duration-150 hover:scale-105 hover:text-white active:scale-95 ${className}`}
      >
        {children}
      </button>
    );
  }
};
