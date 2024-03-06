import { NextApiRequest, NextApiResponse } from "next";

// prettier-ignore
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  try {
    const ipAddress = req.headers['x-forwarded-for'] as string || req.connection.remoteAddress || 'Unknown';
    const userAgent = req.headers['user-agent'];
  
    // Code for IPAPI.co (30k requests per month)
    // const locationData = await (await fetch(`https://ipapi.co/${ipAddress}/json/`)).json();
    // const { network, version, city, region, country_name, in_eu, postal, latitude, longitude, timezone, currency_name, country_calling_code, asn, org } = locationData;#
    // const data: string = `Hello ${userAgent} \n\n${ipAddress} (${network} - ${version})\n${country_name}, ${region} (EU: ${in_eu})\n${city} (${postal})\nLA ${latitude} LO ${longitude}\n${timezone} ${currency_name} ${country_calling_code}\n${asn} - ${org}`;

  
    // Code for IP-API.com (45 requests per minute)
    const locationData = await (await fetch(`http://ip-api.com/json/${ipAddress}?fields=status,message,continent,country,regionName,city,zip,lat,lon,timezone,offset,currency,isp,org,as,reverse,mobile,proxy,hosting,query`)).json();
    const { country, city, continent, regionName, zip, lat, lon, timezone, currency, as, org, reverse, mobile, proxy, hosting, isp } = locationData;
    const data: string = `Hello ${userAgent} \n\n${ipAddress}\n${continent}, ${country}, ${regionName}\n${city} (${zip})\nLAT ${lat} LON ${lon}\n${timezone} ${currency}\n${as} - ${org}\n${isp}\n${reverse}\n\nMOBILE: ${mobile}\nPROXY: ${proxy}\nHOSTING: ${hosting}`;
  
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("error")
  }
}
