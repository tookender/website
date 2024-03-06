import { NextApiRequest, NextApiResponse } from "next";

// prettier-ignore
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  try {
    const ipAddress = req.headers['x-forwarded-for'] as string || req.connection.remoteAddress || 'Unknown';
    const userAgent = req.headers['user-agent'];
  
    const locationData = await (await fetch(`https://ipapi.co/${ipAddress}/json/`)).json();
    const { network, version, city, region, country_name, in_eu, postal, latitude, longitude, timezone, currency_name, country_calling_code, asn, org } = locationData;
  
    const data: string = `Hello ${userAgent} \n\n${ipAddress} (${network} - ${version})\n${country_name}, ${region} (EU: ${in_eu})\n${city} (${postal})\nLA ${latitude} LO ${longitude}\n${timezone} ${currency_name} ${country_calling_code}\n${asn} - ${org}`;
  
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("error")
  }
}
