import { compare } from '__ser/core/crypt';
import { db } from '__ser/core/db';
import { AppError } from '__ser/core/error';
import { USERS_ERRORS } from './errors';

const getUsers = () => db.collection('users');

export async function isEmailInUse (email) {
  const user = await getUsers().findOne({ email });
  return !!user;
}

export async function secureFindOrFailByEmail (email, password) {
  const user = await getUsers().findOne({ email });
  if (!user) throw new AppError({ ...USERS_ERRORS.INVALID_CREDENTIALS });

  await validateOrFail(user, password);

  return user;
}

export async function secureFindOrFailById (userId, password) {
  const user = await getUsers().findOne({ _id: userId });
  if (!user) throw new AppError({ ...USERS_ERRORS.INVALID_CREDENTIALS });

  await validateOrFail(user, password);

  return user;
}

export async function validateOrFail (user, password) {
  const isSamePassword = await compare(password, user.password);
  if (!isSamePassword) throw new AppError({ ...USERS_ERRORS.INVALID_CREDENTIALS });
}

export async function createUser (userDoc) {
  await getUsers().insertOne(userDoc);
}

export async function updateUser (_id, userDoc) {
  const result = await getUsers().updateOne({ _id }, { $set: userDoc });
  return result;
}
