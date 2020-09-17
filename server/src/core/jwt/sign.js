import { sign } from 'jsonwebtoken';
import { jwtSecret } from './common';

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

export { signToken };
