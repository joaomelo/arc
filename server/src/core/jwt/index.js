import { sign, verify } from 'jsonwebtoken';

const jwtSecret = process.env.SECRET;

export function signToken (tokenData) {
  const exp = Math.floor(Date.now() / 1000) + (15 * 60); // expires in 15 minutes
  const token = sign(
    {
      exp,
      data: {
        id: tokenData.id,
        email: tokenData.email
      }
    },
    jwtSecret
  );
  return token;
}

export function extractDataFromTokenOrFail (token) {
  // returns the payload decoded if the signature is valid.
  // if not, it will throw the error.
  const payload = verify(token, jwtSecret);
  const tokenData = payload.data;
  return tokenData;
}
