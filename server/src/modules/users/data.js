import { compare } from '__ser/core/crypt';
import { db } from '__ser/core/db';

const getUsers = () => db.collection('users');

async function secureFindOrFailByEmail (email, password) {
  const user = await getUsers().findOne({ email });
  await validateOrFail(user, password);
  return user;
}

async function secureFindOrFailById (userId, password) {
  const user = await getUsers().findOne({ _id: userId });
  await validateOrFail(user, password);
  return user;
}

async function validateOrFail (user, password) {
  const isSamePassword = await compare(password, user.password);
  if (!isSamePassword) throw new Error('failed to validate user credentials');
}

export {
  secureFindOrFailByEmail,
  secureFindOrFailById
};
