import { compare } from 'bcryptjs';
import { User } from './user';

async function secureFindOrFailByEmail (email: string, password: string): Promise<User> {
  const user = await User.findOneOrFail({ email });
  await validate(user, password);
  return user;
}

async function secureFindOrFailById (userId: string, password: string): Promise<User> {
  const user = await User.findOneOrFail(userId);
  await validate(user, password);
  return user;
}

async function validate(user: User, password: string): Promise<void> {
  const isSamePassword = await compare(password, user.password);
  if (!isSamePassword) throw new Error("failed to validate user credentials");
}

export { secureFindOrFailByEmail, secureFindOrFailById };