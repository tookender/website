import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

import { Providers } from "./providers";
import { Footer } from "@/components/layout/footer";
import { NavigationBar } from "@/components/layout/navbar/menu";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="darkreader-lock" />
        <meta
          name="keywords"
          content="ender, ender2k89, tookender, korino.dev, korino, korii bot, korii-bot, web developer, full stack developer"
        />
        <meta name="theme-color" content="#10b981" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>

      <body
        className={`${inter.className} antialiased flex flex-col h-dvh overflow-x-hidden`}
      >
        <SessionProvider>
          <NextTopLoader color={"linear-gradient(to right, #8668ac, #4d7ce5)"} />
          <NavigationBar />

          <div className="w-full overflow-y-auto p-4 flex flex-col">
            <div className="min-h-24" />

            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: "#27272a",
                  color: "#fff",
                  borderRadius: "8px",
                },
              }}
            />
            <Providers>{children}</Providers>
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
