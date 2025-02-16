export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const coordinates = searchParams.get("coordinates")

  if (!coordinates) {
    return Response.json({ error: "Missing coordinates paramter" }, { status: 400 })
  }

  const [lat, lon] = coordinates.split(",").map(coordinate => coordinate.trim())

  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=en&units=metric&appid=${process.env.OPENWEATHERMAP_API_KEY}`, {
    headers: {
      "Content-Type": "application/json",
    }
  })

  const data = await res.json()
  return Response.json({ data })
}
