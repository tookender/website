import { NextResponse } from "next/server";
import { DateTime } from "luxon";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const timezone = searchParams.get("timezone");

  if (!timezone) {
    return NextResponse.json(
      { error: "Timezone is required" },
      { status: 400 }
    );
  }

  // Use Luxon to get the current time in the specified timezone
  const now = DateTime.now().setZone(timezone);

  return NextResponse.json({
    time: now.toFormat("HH:mm:ss"),
    date: now.toFormat("cccc, LLLL d, yyyy"),
  });
}