import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://korino.dev"),
  title: "Korino",
  description: "Website to showcase Korino Projects.",
  openGraph: {
    title: "Korino Website",
    description:
      "Website to showcase Korino projects such as Korino PvP, Korii Bot, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar title={metadata.title} />
        {children}
      </body>
    </html>
  );
}
