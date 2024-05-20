"use client";
import { usePathname } from 'next/navigation'
 
export default function Page() {
  const router = usePathname()
  return <p>Post: {router}</p>
}