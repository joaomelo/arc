import { LOCALES } from '__com/i18n';
import { signToken } from '__ser/core/jwt';
import { hash } from '__ser/core/crypt';
import { AppError } from '__ser/core/error';
import { USERS_ERRORS } from './errors';
import { isEmailInUse, secureFindOrFailByEmail, createUser, updateUserById, getUserById } from './data';

export async function signIn ({ email, password }) {
  const user = await secureFindOrFailByEmail(email, password);
  const token = signToken({
    id: user._id,
    email: user.email
  });
  return token;
}

export async function signUp ({ email, password }) {
  if (await isEmailInUse(email)) throw new AppError({ ...USERS_ERRORS.EMAIL_ALREADY_IN_USE });

  const user = {
    email,
    password: await hash(password),
    locale: LOCALES.EN.value
  };

  await createUser(user);

  const token = await signIn({ email, password });
  return token;
}

export async function updateEmail ({ newEmail, email, password }) {
  if (await isEmailInUse(newEmail)) throw new AppError({ ...USERS_ERRORS.EMAIL_ALREADY_IN_USE });
  const user = await secureFindOrFailByEmail(email, password);

  await updateUserById(user._id, { email: newEmail });

  const token = await signIn({ email: newEmail, password });
  return token;
}

export async function updatePassword ({ newPassword, email, password }) {
  const user = await secureFindOrFailByEmail(email, password);
  const newHashedPassword = await hash(newPassword);
  await updateUserById(user._id, { password: newHashedPassword });
  const token = await signIn({ email, password: newPassword });
  return token;
}

export async function updatePreferences (payload, { userId }) {
  await updateUserById(userId, { preferences: payload });
}

export async function getPreferences (payload, { userId }) {
  const user = await getUserById(userId);
  return user.preferences;
}
