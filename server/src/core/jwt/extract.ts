import { verify } from 'jsonwebtoken';
import { TokenData, TokenPayload, jwtSecret } from './common';

function verifyToken(token: string): TokenData {
  const payload = verify(token, jwtSecret) as TokenPayload;
  const tokenData = payload.data;
  return tokenData;
}

function extractUserIdFromToken(token: string): string {
  let userId = '';

  if (token) {
    const tokenData = verifyToken(token);
    userId = tokenData.id;
  }

  return userId;
}

export { extractUserIdFromToken };