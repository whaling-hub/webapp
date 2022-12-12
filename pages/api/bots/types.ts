// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Bot = {
  type: number;
  bot_name: string;
}

type Data = {
  message: string;
  success: boolean;
  data?: null | Bot[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method !== 'GET') {
    res.status(400).json({ message: 'unspported method', success: false});
  }
  
  const bots: Bot[] = [];
  res.status(200).json({ message: "ok", success: false, data: bots });
}
