import { i18n } from '__cli/core/i18n';
import { extractUserDataFromToken } from './token';
import { sign, signOut, updatePreferences } from './slice';

export const signInCommand = async (payload, { dispatch, request }) => {
  const token = await request('post', 'users/sign-in', payload);
  const userData = extractUserDataFromToken(token);
  dispatch(sign(userData));

  const preferences = await request('get', 'users/preferences');
  dispatch(updatePreferences(preferences));
};

export const signUpCommand = async (payload, { dispatch, request }) => {
  const token = await request('post', 'users/sign-up', payload);
  const userData = extractUserDataFromToken(token);
  dispatch(sign(userData));
};

export const signOutCommand = async (payload, { dispatch }) => {
  dispatch(signOut());
};

export const updateEmailCommand = async (payload, { dispatch, request }) => {
  const token = await request('post', 'users/update-email', payload);
  const userData = extractUserDataFromToken(token);
  dispatch(sign(userData));
  return i18n.t('users.email-updated');
};

export const updatePasswordCommand = async (payload, { dispatch, request }) => {
  const token = await request('post', 'users/update-password', payload);
  const userData = extractUserDataFromToken(token);
  dispatch(sign(userData));
  return i18n.t('users.password-updated');
};

export const updatePreferencesCommand = async (payload, { dispatch, request }) => {
  await request('post', 'users/update-preferences', payload);
  dispatch(updatePreferences(payload));
  return i18n.t('users.preferences-updated');
};
