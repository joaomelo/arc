import { sign, verify } from 'jsonwebtoken';

interface TokenPayload {
  data: TokenData
}

interface TokenData {
  id: string,
  email: string
}

// TODO move TO ENV FILE
const jwtSecret = 'provisionalsceret';

function verifyToken(token: string): TokenData {
  const payload = verify(token, jwtSecret) as TokenPayload;
  const tokenData = payload.data;
  return tokenData;
}

function signToken(tokenData: TokenData): string {
  const exp = Math.floor(Date.now() / 1000) + (15 * 60); //expires in 15 minutes
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


export { signToken, verifyToken };