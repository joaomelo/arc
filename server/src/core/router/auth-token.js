import { extractDataFromTokenOrFail } from '__ser/core/jwt';
import { AppError } from '__ser/core/error';
import { ROUTER_ERRORS } from './errors';

export function authenticateToken (req, res, next) {
  // clear userId field to avoid injected values from client
  // should only be populated from decoded token in the server
  req.userId = null;

  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    try {
      const tokenData = extractDataFromTokenOrFail(token);
      const userId = tokenData.id;
      req.userId = userId;
    } catch {
      const error = new AppError(ROUTER_ERRORS.INVALID_TOKEN);
      next(error);
    }
  }

  next();
}
