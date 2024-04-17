import Link from "next/link";

export const NavbarElement = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      className="relative hidden text-sm text-neutral-400 duration-150 ease-in hover:text-white sm:block"
      href={href}
    >
      {text}
    </Link>
  );
};