import { PrimaryButton, SecondaryButton } from "@/components/button";
import Image from "next/image";
import { TbHome, TbDog } from "react-icons/tb";

export default function NotFound() {
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
            <TbHome height={22} width={22} />
          </PrimaryButton>

          <SecondaryButton text="doggo pics :D" link="/doggo">
            <TbDog height={22} width={22} />
          </SecondaryButton>
        </div>
      </div>
    </>
  );
}
