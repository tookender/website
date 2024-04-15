"use client";

import { NextUIProvider } from "@nextui-org/react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="mt-14 min-h-screen">
      {children}
      <ProgressBar
        height="2px"
        color="#43B581"
        options={{ showSpinner: false }}
      />
    </NextUIProvider>
  );
}
