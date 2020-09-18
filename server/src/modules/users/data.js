// import { compare } from '__ser/core/crypt';
// import { User } from './user';

async function secureFindOrFailByEmail (email, password) {
  // const user = await User.findOneOrFail({ email });
  // await validate(user, password);
  // return user;
  return Promise.resolve(
    {
      id: '87981273918',
      email: 'd@d.d'
    }
  );
}

// async function secureFindOrFailById (userId, password) {
//   const user = await User.findOneOrFail(userId);
//   await validate(user, password);
//   return user;
// }

// async function validate(user: User, password): Promise<void> {
//   const isSamePassword = await compare(password, user.password);
//   if (!isSamePassword) throw new Error("failed to validate user credentials");
// }

export {
  secureFindOrFailByEmail
  // secureFindOrFailById
};
