import { verifyToken } from '../../core/jwt';
import { User } from './user';

async function findUserByToken(authorizationHeader: string): Promise<User | null> {
  let user = null;

  if (authorizationHeader) {
    const token = authorizationHeader.replace('Bearer ', '');
    const tokenData = verifyToken(token);

    user = await User.findOneOrFail(tokenData.id);
  }

  return user;
}

export { findUserByToken };