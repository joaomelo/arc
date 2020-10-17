import { LOCALES } from '__com/i18n';
import { signToken } from '__ser/core/jwt';
import { hash } from '__ser/core/crypt';
import { AppError } from '__ser/core/error';
import { USERS_ERRORS } from './errors';
import {
  isEmailInUse,
  secureFindOrFailByEmail,
  createUser
} from './data';

async function signIn (email, password) {
  const user = await secureFindOrFailByEmail(email, password);
  const token = signToken({
    id: user._id,
    email: user.email
  });
  return token;
}

async function signUp (email, password) {
  if (await isEmailInUse(email)) throw new AppError({ ...USERS_ERRORS.EMAIL_ALREADY_IN_USE });

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
