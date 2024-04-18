"use client";

import { signIn } from "next-auth/react";
import { Session } from "next-auth";

export const LoginButton = () => {
  return (
    <button
      className="rounded-md bg-blue-500 px-2 py-1"
      onClick={() => signIn()}
      title="Login with GitHub"
    >
      Login
    </button>
  );
};
