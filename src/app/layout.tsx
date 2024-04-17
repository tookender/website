import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";

import { Providers } from "./providers";
import { AsyncNavbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { GeistSans } from "geist/font/sans";
import "nprogress/nprogress.css";

export const viewport: Viewport = {
  themeColor: "#43B581",
};

export const metadata: Metadata = {
  keywords:
    "korino, korino development, korii bot, korino pvp, korino website, web developer, github, typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${GeistSans.className} antialiased`}>
        <AsyncNavbar />

        <Providers>{children}</Providers>

        <Footer
          commitHash={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}
          commitMessage={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE}
        />
      </body>
    </html>
  );
}
