import { NextRequest, userAgent } from "next/server";

export async function GET(request: NextRequest) {
  const ipAddress = request.ip;
  const you = userAgent(request).ua;

  const location = await (
    await fetch(
      `http://ip-api.com/json/${ipAddress}?fields=status,message,continent,country,regionName,city,zip,lat,lon,timezone,offset,currency,isp,org,as,reverse,mobile,proxy,hosting,query`,
    )
  ).json();

  // const data: string = `Hello ${agent} \n\n${ipAddress}\n${continent}, ${country}, ${regionName}\n${city} (${zip})\nLAT ${lat} LON ${lon}\n${timezone} ${currency}\n${as} - ${org} (${isp})\n${reverse}\n\nMOBILE: ${mobile}\nPROXY: ${proxy}\nHOSTING: ${hosting}`;

  const data = { you, location };
  return Response.json({ data });
}
