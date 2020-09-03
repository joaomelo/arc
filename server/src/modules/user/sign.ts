import { signToken } from '__ser/core/jwt';
import { hash } from '__ser/core/crypt';
import { User } from './user';
import { secureFindOrFailByEmail } from './secure-find';

async function signIn(email: string, password: string): Promise<string> {
  const user = await secureFindOrFailByEmail(email, password);
  const token = signToken({
    id: user.id,
    email: user.email  
  });
  return token;
}

async function signUp(email: string, password: string): Promise<string> {
  const user = new User();
  user.email = email;
  user.password = await hash(password);
  await user.save();

  const token = await signIn(email, password);
  return token;
}

export { signUp, signIn };