import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  try {
    const ipAddress =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      "Unknown";
    const userAgent = req.headers["user-agent"];

    const locationData = await (
      await fetch(
        `http://ip-api.com/json/${ipAddress}?fields=status,message,continent,country,regionName,city,zip,lat,lon,timezone,offset,currency,isp,org,as,reverse,mobile,proxy,hosting,query`,
      )
    ).json();

    const {
      country,
      city,
      continent,
      regionName,
      zip,
      lat,
      lon,
      timezone,
      currency,
      as,
      org,
      reverse,
      mobile,
      proxy,
      hosting,
      isp,
    } = locationData;

    const data: string = `Hello ${userAgent} \n\n${ipAddress}\n${continent}, ${country}, ${regionName}\n${city} (${zip})\nLAT ${lat} LON ${lon}\n${timezone} ${currency}\n${as} - ${org} (${isp})\n${reverse}\n\nMOBILE: ${mobile}\nPROXY: ${proxy}\nHOSTING: ${hosting}`;

    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("error");
  }
}
