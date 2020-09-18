import { sign, verify } from 'jsonwebtoken';

const jwtSecret = process.env.SECRET;

function signToken (tokenData) {
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

function extractUserIdFromTokenOrFail (token) {
  // returns the payload decoded if the signature is valid. if not, it will throw the error.
  const payload = verify(token, jwtSecret);

  const tokenData = payload.data;
  const userId = tokenData.id;
  return userId;
}

export { signToken, extractUserIdFromTokenOrFail };
