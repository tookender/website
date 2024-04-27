import { auth } from "@/auth"
import { redirect } from "next/navigation"
 
export default async function Dashboard() {
  const session = await auth()

  if (!session) {
    redirect("/api/auth/signin")
  }
 
  return (
    <div>
      <h1>{session.user?.name}</h1>
    </div>
  )
}