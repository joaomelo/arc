import { CREDENTIALS_UNRECOGNIZED } from '__com/users';
import { compare } from '__ser/core/crypt';
import { createDataFunctions } from '__ser/core/db';
import { AppError } from '__ser/core/error';

export const { insertDoc, updateDocById, getDocById, getDocByQuery } = createDataFunctions('users');

export async function isEmailInUse (email) {
  const user = await getDocByQuery({ email });
  return !!user;
}

export async function validateOrFail (user, password) {
  const isSamePassword = await compare(password, user.password);
  if (!isSamePassword) throw new AppError(CREDENTIALS_UNRECOGNIZED);
}

export async function secureFindOrFailByEmail (email, password) {
  const user = await getDocByQuery({ email });
  if (!user) throw new AppError(CREDENTIALS_UNRECOGNIZED);

  await validateOrFail(user, password);

  return user;
}

export async function secureFindOrFailById (userId, password) {
  const user = await getDocById(userId);
  if (!user) throw new AppError(CREDENTIALS_UNRECOGNIZED);

  await validateOrFail(user, password);

  return user;
}
