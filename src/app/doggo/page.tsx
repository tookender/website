import { Metadata } from "next";
import { DoggoClient } from "@/components/doggo/dog-client";

export const metadata: Metadata = {
  title: "doggo pictures",
  description: "lots of cute pictures of my dog",
  openGraph: {
    title: "doggo pictures",
    description: "lots of cute pictures of my dog",
    url: "https://korino.dev",
    images: [
      {
        url: "/dogs/dog1.webp",
        width: 2016,
        height: 1512,
        alt: "my doggo",
      },
    ],
  },
}

export default function DoggoPage() {
  return (
    <>
      {/* so minimal :D */}
      <DoggoClient />
    </>
  );
}
