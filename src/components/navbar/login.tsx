"use client";

import { signIn } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      className="rounded-md bg-blue-500 px-2 py-1"
      onClick={() => signIn("github")}
      title="Login with GitHub"
    >
      Login
    </button>
  );
};
