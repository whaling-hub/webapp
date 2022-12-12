import type { NextApiRequest, NextApiResponse } from "next";
import { serialize, CookieSerializeOptions } from "cookie";
import authMessage from "../../../services/auth-message";
import { signToken } from "../../../services/jwt";
import { verifyMessage } from "../../../services/login";

interface Data {
  message: string;
  success: boolean;
}

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);

  if (typeof options.maxAge === "number") {
    options.expires = new Date(Date.now() + options.maxAge * 1000);
  }

  res.setHeader("Set-Cookie", serialize(name, stringValue, options));
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { address, signature } = req.body ?? {};
  if (req.method !== "POST" || !address || !signature) {
    res.status(400).json({ message: 'request error', success: false});
    return;
  }

  try {
    const message = authMessage.getMessageByAddr(address);
    const isVerified = await verifyMessage(message, address, signature);

    if (isVerified) {
      setTimeout(() => {
        authMessage.deleteMessageByAddr(address);
      });
      // 生成 jwt
      const jwtToken = signToken(address);
        setCookie(res, 'jwt_token', jwtToken, {
          path: "/",
          maxAge: 2592000,
        });
      res.status(200).json({ success: isVerified, message: 'ok' });
    } else {
      res.status(400).json({ success: isVerified, message: 'invalid signature' });
    }
  } catch (err) {
     res.status(500).end({ error: err });
  }

}
