import { PrimaryButton, SecondaryButton } from "@/components/button";
import { IconDog, IconHome } from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <Image
          src="/404.webp"
          alt="404 Error Status Dog"
          width={688}
          height={626}
          className="rounded-md duration-500 hover:scale-105 active:scale-95"
        />

        <p className="mt-8 text-center text-xl font-semibold">
          The page you are trying to visit, either does not exist, <br /> or it
          has not yet been implemented.
        </p>

        <div className="mt-6 flex flex-row gap-4 text-2xl font-semibold">
          <PrimaryButton text="Home" link="/">
            <IconHome height={22} width={22} />
          </PrimaryButton>

          <SecondaryButton text="doggo pics :D" link="/doggo">
            <IconDog height={22} width={22} />
          </SecondaryButton>
        </div>
      </div>
    </>
  );
}
