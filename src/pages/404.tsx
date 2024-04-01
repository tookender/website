import { PrimaryButton, SecondaryButton } from "@/components/button";
import { IconDog, IconHome } from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Image
          src="/404.webp"
          alt="404 Error Status Dog"
          width={688}
          height={626}
          className="rounded-md active:scale-95 hover:scale-105 duration-500"
        />

        <p className="text-center text-xl mt-8 font-semibold">
          The page you are trying to visit, either does not exist, <br /> or
          it has not yet been implemented.
        </p>

        <div className="flex flex-row gap-4 mt-6 text-2xl font-semibold">
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
