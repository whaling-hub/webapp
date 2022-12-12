import type { NextApiRequest, NextApiResponse } from "next";
import { verifyMessage } from "../../../services/login";

interface Data {
  message: string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { address, signature } = req.body ?? {};
  if (req.method !== "POST" || !address || !signature) {
    res.status(400).end();
    return;
  }

  try {
    // TODO: Read message from redis
    const message = '';
    const isVerified = await verifyMessage(message, address, signature);

    if (isVerified) {
      res.status(200).json({ message: isVerified.toString() });
    } else {
      res.status(400).json({ message: isVerified.toString() });
    }
  } catch (err) {
     res.status(500).end({ error: err });
  }

}
