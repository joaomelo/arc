import { hash, compare } from 'bcryptjs';
import { signToken } from '../../core/jwt';
import { User, Locale } from './user';

async function createUser(email: string, password: string): Promise<User> {
  //TODO: what if there alreay exists this email
  //TODO: what if its a invalid email
  //TODO: what if the password is insecure
  //TODO: make en locale defaulted in the model class
  //move hasing to hook? => https://typeorm.io/#/listeners-and-subscribers/beforeinsert

  const hashedPassword = await hash(password, 12);

  const user = User.create({
    email,
    password: hashedPassword,
    locale: Locale.en
  });
  await user.save();

  return user;
}

async function signIn(email: string, password: string): Promise<string> {
  //TODO study and implement better way to store JWT sign secret

  const user = await User.findOneOrFail({ email });
  const isSamePassword = await compare(password, user.password);
  if (!isSamePassword) throw new Error("failed to sign user");

  const token = signToken({
    id: user.id,
    email: user.email  
  });

  return token;
}

async function signUp(email: string, password: string): Promise<string> {
  await createUser(email, password);
  const token = await signIn(email, password);
  return token;
}

export { createUser, signUp, signIn };