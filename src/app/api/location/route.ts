import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  const ip = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(',')[0]
  const res = await fetch(`https://ipinfo.io/${ip}/json?token=c34d1c9b484916`, {
    headers: {
      "Content-Type": "application/json",
    }
  })

  const data = await res.json()
  return Response.json({ data })
}
