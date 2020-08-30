import { verifyToken } from '../../core/jwt';

function extractUserIdFromToken(token: string): string {
  let userId = '';

  if (token) {
    const tokenData = verifyToken(token);
    userId = tokenData.id;
  }

  return userId;
}

export { extractUserIdFromToken };