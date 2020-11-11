import { LOCALES } from '__com/i18n';
import { credentialsSchema, EMAIL_ALREADY_IN_USE, CREDENTIALS_INVALID } from '__com/users';
import { signToken } from '__ser/core/jwt';
import { hash } from '__ser/core/crypt';
import { AppError } from '__ser/core/error';
import { isEmailInUse, secureFindOrFailByEmail, insertDoc, updateDocById, getDocById } from './data';

export async function signIn (credentials) {
  const { error, value } = credentialsSchema.validate(credentials);
  if (error) throw new AppError(CREDENTIALS_INVALID, error.details);

  const { email, password } = value;
  const user = await secureFindOrFailByEmail(email, password);
  const token = signToken({
    id: user._id,
    email: user.email
  });
  return token;
}

export async function signUp ({ email, password }) {
  if (await isEmailInUse(email)) throw new AppError(EMAIL_ALREADY_IN_USE);

  const user = {
    email,
    password: await hash(password),
    locale: LOCALES.EN.value
  };

  await insertDoc(user);
  const token = await signIn({ email, password });
  return token;
}

export async function updateEmail ({ newEmail, email, password }) {
  if (await isEmailInUse(newEmail)) throw new AppError(EMAIL_ALREADY_IN_USE);
  const user = await secureFindOrFailByEmail(email, password);

  await updateDocById(user._id, { email: newEmail });

  const token = await signIn({ email: newEmail, password });
  return token;
}

export async function updatePassword ({ newPassword, email, password }) {
  const user = await secureFindOrFailByEmail(email, password);
  const newHashedPassword = await hash(newPassword);
  await updateDocById(user._id, { password: newHashedPassword });
  const token = await signIn({ email, password: newPassword });
  return token;
}

export async function updatePreferences (payload, { userId }) {
  await updateDocById(userId, { preferences: payload });
}

export async function getPreferences (payload, { userId }) {
  const user = await getDocById(userId);
  return user.preferences;
}
