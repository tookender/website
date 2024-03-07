import { getRandomDog } from "@/utils/doggo";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  url: string;
  description: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = getRandomDog(true)

  res.status(200).json({ url: data[0], description: data[1] });
}
