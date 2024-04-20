"use client";

import { signIn } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      className="rounded-md bg-blue-500 px-2 py-1 active:scale-95 hover:scale-105 duration-300"
      onClick={() => signIn()}
      title="Login to Korino"
    >
      Login
    </button>
  );
};
