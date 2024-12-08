"use client"
import { Button, User } from "@nextui-org/react"
import { signOut } from "next-auth/react"
import { FaUser } from "react-icons/fa6"
 
export const SignOut = () => {
  return (
    <Button color="danger" variant="bordered" startContent={<FaUser/>} onClick={() => signOut()}>Sign Out</Button>
  )
}