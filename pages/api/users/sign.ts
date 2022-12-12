// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";
import authMessage from "../../../services/auth-message";

interface Data {
  message: string;
  success: boolean;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { address } = req.query;

  if (req.method !== "GET" || !address || !address.length) {
    res.status(400).end();
    return;
  }
  
  const addr = Array.isArray(address) ? address[0] : address;
  
  // 校验地址是否为合法的 EVM 地址
  if (!ethers.utils.isAddress(addr)) {
    res.status(400).json({ success: false, message: 'invalid address' });
  }
  
  const message = authMessage.generate(ethers.utils.getAddress(addr));

  res.status(200).json({ success: true, message });
}
