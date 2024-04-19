import { getRandomDog } from "@/lib/doggo";

export async function GET() {
  const dog = getRandomDog(true);
  const data = { url: dog[0], description: dog[1] };

  return Response.json({ data });
}
