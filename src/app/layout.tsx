"use client";

import "@/styles/globals.css";

import type { Viewport } from "next";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

import { motion } from "framer-motion";
import { Sidebar } from "@/components/sidebar/menu";
import { Footer } from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#10b981",
};

// // metadata such as title or description is in all page.tsx files
// export const metadata = {
//   keywords:
//     "korino, korino development, korii bot, korino pvp, korino website, web developer, github, typescript",
//   robots: "all",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoaded(true);
  }, [pathname]);

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="keywords" content="korino, " />
        <meta name="darkreader-lock" />
        <meta
          name="keywords"
          content="ender, ender2k89, tookender, korino.dev, korino, korii bot, korii-bot, web developer, full stack developer"
        />
      </head>

      <body className={`${inter.className} antialiased flex h-dvh`}>
        <NextTopLoader color={"linear-gradient(to right, #8668ac, #4d7ce5)"} />

        <Sidebar />

        <div className="w-full overflow-y-auto p-4 flex flex-col">
          <div className="min-h-12" />

          <Toaster />
          
          <motion.main
            className="mx-auto w-full max-w-[950px]"
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
