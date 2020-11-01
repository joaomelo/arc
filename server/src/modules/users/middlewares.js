import { authenticateToken } from './services';

export function authenticateTokenHandler (req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    try {
      const userId = authenticateToken({ token });
      req.userId = userId;
    } catch (error) {
      next(error);
    }
  }

  next();
}
