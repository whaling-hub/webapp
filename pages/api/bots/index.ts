// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fetch from 'node-fetch';
import path from "path";
import { SERVICE_API_URL } from "../../../constant";

type Data = {
  message: string;
  success: boolean;
  data?: any;
};

type UpstreamData = {
  message: string;
  success: boolean;
  data: null | unknown[];
}

async function getBotsHandler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { address } = req.query;

  if (req.method !== "GET" || !address || !address.length) {
    res.status(400).json({ success: false, message: "address is required" });
    return;
  }

  const addr = Array.isArray(address) ? address[0] : address;

  try {
    const url = SERVICE_API_URL.bots + `?query=${addr}`
    const upstream = await fetch(url, {
      method: "GET",
    });
    const data: UpstreamData = await upstream.json();
    
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'server error', success: false });
  }
}

async function createBotHandler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { type, limit, address, token_address } = req.body ?? {};
    
  try {
    const upstream = await fetch(SERVICE_API_URL.bots, {
      method: "POST",
      body: {
        type,
        limit,
        address,
        token_address,
      } as any,
    });
    const data = await upstream.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "server error", success: false });
  }
}

async function updateBotHandler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id, type, limit, address, token_address } = req.body ?? {};
  
  try {
    const url = path.join(SERVICE_API_URL.bots, id);
    const upstream = await fetch(url, {
      method: "PUT",
      body: {
        type,
        limit,
        address,
        token_address,
      } as any,
    });
    const data = await upstream.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "server error", success: false });
  }
}

async function deleteBotHandler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.body ?? {};

  try {
    const url = path.join(SERVICE_API_URL.bots, id);
    const upstream = await fetch(url, { method: 'DELETE' });
    const data = await upstream.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "server error", success: false });
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getBotsHandler(req, res);
    case "POST":
      return createBotHandler(req, res);
    case "PUT":
      return updateBotHandler(req, res);
    case "DELETE":
      return deleteBotHandler(req, res);
    default:
      res.status(400).json({ message: 'unspported method', success: false})
  }
}
