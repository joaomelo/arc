import { hash } from '__ser/core/crypt';
import { User, Locale } from './user';
import { secureFindOrFailById } from './secure-find';
import { signIn } from './sign';

async function updateEmail(userId: string, newEmail: string, password: string): Promise<string> {
  const user = await secureFindOrFailById(userId, password);
  user.email = newEmail;
  await user.save();
  const token = await signIn(newEmail, password);
  return token;
}

async function updatePassword(userId: string, newPassword: string, password: string): Promise<string> {
  const user = await secureFindOrFailById(userId, password);
  user.password = await hash(newPassword);
  await user.save();
  const token = await signIn(user.email, newPassword);
  return token;
}

async function updateLocale(userId: string, locale: Locale): Promise<User> {
  const user = await User.findOneOrFail(userId);
  user.locale = locale;
  await user.save();
  return user;
}

export {
  updateEmail,
  updatePassword,
  updateLocale
};