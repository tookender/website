"use client"
import { signIn } from "@/lib/auth-client";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";

interface SignInProps {
  isLoaded: boolean;
}

const signInDiscord = async () => {
  const data = await signIn.social({
      provider: "discord"
  });
  return data;
};
 
export const SignIn = () => {
  return (
    <>
      <Button variant="bordered" onClick={() => signInDiscord()}>
        Sign In
      </Button>
    </>
  )
}