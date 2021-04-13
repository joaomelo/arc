// export const updateEmailCommand = async (payload, { dispatch, request }) => {
//   const token = await request('post', 'users/update-email', payload);
//   const userData = extractUserDataFromToken(token);
//   dispatch(sign(userData));
//   return i18n.t('auth.email-updated');
// };

// export const updatePasswordCommand = async (payload, { dispatch, request }) => {
//   const token = await request('post', 'users/update-password', payload);
//   const userData = extractUserDataFromToken(token);
//   dispatch(sign(userData));
//   return i18n.t('auth.password-updated');
// };

// export const updatePreferencesCommand = async (payload, { dispatch, request }) => {
//   await request('post', 'users/update-preferences', payload);
//   dispatch(updatePreferences(payload));
//   return i18n.t('auth.preferences-updated');
// };

// export async function updateEmail ({ newEmail, email, password }) {
//   if (await isEmailInUse(newEmail)) throw new AppError(EMAIL_ALREADY_IN_USE);
//   const user = await secureFindOrFailByEmail(email, password);

//   await updateDocById(user._id, { email: newEmail });

//   const token = await signIn({ email: newEmail, password });
//   return token;
// }

// export async function updatePassword ({ newPassword, email, password }) {
//   const user = await secureFindOrFailByEmail(email, password);
//   const newHashedPassword = await hash(newPassword);
//   await updateDocById(user._id, { password: newHashedPassword });
//   const token = await signIn({ email, password: newPassword });
//   return token;
// }

// export async function updatePreferences (payload, { userId }) {
//   await updateDocById(userId, { preferences: payload });
// }

// export async function getPreferences (payload, { userId }) {
//   const user = await getDocById(userId);
//   return user.preferences;
// }
