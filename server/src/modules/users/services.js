import { LOCALES } from '__com/i18n';
import { signToken } from '__ser/core/jwt';
import { hash } from '__ser/core/crypt';
import {
  isEmailInUse,
  secureFindOrFailByEmail,
  createUser
} from './data';

async function signIn (email, password) {
  const user = await secureFindOrFailByEmail(email, password);
  const token = signToken({
    id: user.id,
    email: user.email
  });
  return token;
}

async function signUp (email, password) {
  if (await isEmailInUse(email)) throw new Error('Email already in use');

  const user = {
    email,
    password: await hash(password),
    locale: LOCALES.EN.value
  };

  await createUser(user);

  const token = await signIn(email, password);
  return token;
}

export {
  signUp,
  signIn
};
