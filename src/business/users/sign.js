import { EmailAlreadyInUseError } from './errors';

export async function signUp ({ email, password }, { authService }) {
  try {
    const user = await authService.createUserWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        throw new EmailAlreadyInUseError();
      default:
        throw error;
    }
  }
}

export function signOut (payload, { authService }) {
  return authService.signOut();
};

// export const signInCommand = async (payload, { dispatch, request }) => {
//   const token = await request('post', 'users/sign-in', payload);
//   const userData = extractUserDataFromToken(token);
//   dispatch(sign(userData));

//   const preferences = await request('get', 'users/preferences');
//   dispatch(updatePreferences(preferences));
// };

// export async function signIn (credentials) {
//   const { error, value } = credentialsSchema.validate(credentials);
//   if (error) throw new AppError(CREDENTIALS_INVALID, error.details);

//   const { email, password } = value;
//   const user = await secureFindOrFailByEmail(email, password);
//   const token = signToken({
//     id: user._id,
//     email: user.email
//   });
//   return token;
// }

// export async function validateOrFail (user, password) {
//   const isSamePassword = await compare(password, user.password);
//   if (!isSamePassword) throw new AppError(CREDENTIALS_UNRECOGNIZED);
// }

// export async function secureFindOrFailByEmail (email, password) {
//   const user = await getDocByQuery({ email });
//   if (!user) throw new AppError(CREDENTIALS_UNRECOGNIZED);

//   await validateOrFail(user, password);

//   return user;
// }

// export async function secureFindOrFailById (userId, password) {
//   const user = await getDocById(userId);
//   if (!user) throw new AppError(CREDENTIALS_UNRECOGNIZED);

//   await validateOrFail(user, password);

//   return user;
// }
