import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { TbDog, TbMenuDeep } from "react-icons/tb";
import { auth } from "@/auth";
import { Image } from "@nextui-org/image";
import { Title } from "./navbar/title";
import { NavbarElement } from "./navbar/element";
import { Avatar } from "./navbar/avatar";
import { Menu, MenuElement } from "./navbar/menu";
import { NavbarIcon } from "./navbar/icon";
import { LoginButton } from "./navbar/login";

export async function AsyncNavbar() {
  const session = await auth();
  const menuOpen = false;

  return (
    <main>
      <header className="fixed top-0 z-[101] flex h-14 w-full flex-col items-center justify-around border-b border-b-zinc-800 bg-background-color/60 backdrop-blur">
        <nav className="relative flex w-full max-w-[1400px] flex-1 items-center">
          <div className="ml-2 flex w-full flex-row items-center gap-4 sm:ml-4 sm:gap-6 xxl:ml-0">
            <Link
              className="mr-2 flex flex-row items-center justify-center gap-2 sm:mr-4"
              href="/"
            >
              <Image
                className="rounded-full"
                src="/avatars/ender.webp"
                alt="Korino Logo"
                width={40}
                height={40}
              />

              <Title />
            </Link>

            <NavbarElement text="Korino PvP" href="/pvp" />
            <NavbarElement text="Korii Bot" href="/bot" />
            <NavbarElement text="Ender" href="/ender" />
          </div>

          <div className="mr-2 flex items-center gap-3 sm:mr-4 xxl:mr-0">
            <NavbarIcon title="DOG PICTURES :D" href="/doggo">
              <TbDog className="size-6" />
            </NavbarIcon>

            <NavbarIcon
              title="DOG PICTURES :D"
              href="https://github.com/tookender/website"
              blank={true}
            >
              <SiGithub className="size-6" />
            </NavbarIcon>

            <NavbarIcon
              title="Open the menu"
              className="z-[999] sm:hidden"
              id="menuButton"
            >
              <TbMenuDeep className="size-6" />
            </NavbarIcon>

            <div className={`${session ? "hidden" : ""}`}>
              <LoginButton />
            </div>

            <div className={`${!session ? "hidden" : ""}`}>
              <Avatar
                img={
                  session
                    ? session.user
                      ? session.user.image
                      : "/doggo/dog1.webp"
                    : "/doggo/dog1.webp"
                }
              />
            </div>
          </div>
        </nav>
      </header>
      <Menu>
        <MenuElement text="Korino" href="/" />
        <MenuElement text="Korino PvP" href="/pvp" />
        <MenuElement text="Korii Bot" href="/bot" />
        <MenuElement text="Doggo pics :D" href="/doggo" />
      </Menu>
    </main>
  );
}
