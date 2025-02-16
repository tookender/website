export async function GET() {
  const res = await fetch("https://ipinfo.io/json?token=c34d1c9b484916", {
    headers: {
      "Content-Type": "application/json",
    }
  })

  const data = await res.json()
  return Response.json({ data })
}
