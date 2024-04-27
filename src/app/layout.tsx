import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";

import { Providers } from "./providers";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { GeistSans } from "geist/font/sans";
import "nprogress/nprogress.css";

export const viewport: Viewport = {
  themeColor: "#43B581",
};

export const metadata: Metadata = {
  keywords:
    "korino, korino development, korii bot, korino pvp, korino website, web developer, github, typescript",
  themeColor: "#10b981",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${GeistSans.className} antialiased`}>
        <Navbar />

        <Providers>{children}</Providers>

        <Footer
          commitHash={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}
          commitMessage={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE}
        />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
