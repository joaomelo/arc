import { sign } from 'jsonwebtoken';
import { jwtSecret, TokenData } from './common';

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


export { signToken };