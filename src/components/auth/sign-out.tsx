"use client"
import { Button } from "@heroui/react"
import { FaUser } from "react-icons/fa6"
import { signOut } from "@/lib/auth-client";

const signInDiscord = async () => {
  await signOut();
};

export const SignOut = () => {
  return (
    <Button variant="bordered" startContent={<FaUser/>} onClick={() => signOut()}>Sign Out</Button>
  )
}