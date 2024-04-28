import { TokenSession, auth } from "@/auth"
import { redirect } from "next/navigation"
 
export default async function Dashboard() {
  const session = await auth() as TokenSession

  if (!session) {
    redirect("/api/auth/signin")
  }
 
  return (
    <div>
      <h1>{session.accessToken}</h1>
    </div>
  )
}