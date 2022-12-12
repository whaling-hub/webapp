// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  message: string;
}
/**
 * 生成服务端签名信息
 */
const generateMessage = (addr: string) => {
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
  
  // 校验地址是否为合法的 EVM 地址
  const addr = Array.isArray(address) ? address[0] : address;

  const message = generateMessage(addr);
}
