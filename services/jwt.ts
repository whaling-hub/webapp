import jwt from "jsonwebtoken";

const privateKey = process.env.JWT_PRIVATE_KEY || 'defaultKey';

export const signToken = (address: string, role = 'basic') => {
  return jwt.sign({ address, role }, privateKey, {
    expiresIn: "7d",
  });
};

export const verifyToken = (token: string) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, privateKey, function (err, payload) {
      if (err) {
        reject(err);
      } else {
        resolve(payload);
      }
    });
  })
}
