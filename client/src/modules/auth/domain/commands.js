import { i18n } from '__cli/core/i18n';
import { sign, signOut } from './slice';

export const signInCommand = async (payload, { dispatch, request }) => {
  const token = await request('post', '/auth/sign-in', payload);
  dispatch(sign(token));
};

export const signUpCommand = async (payload, { dispatch, request }) => {
  const token = await request('post', '/auth/sign-up', payload);
  dispatch(sign(token));
};

export const signOutCommand = async (payload, { dispatch }) => {
  dispatch(signOut());
};

export const updateEmailCommand = async (payload, { dispatch, request }) => {
  const token = await request('post', 'auth/update-email', payload);
  dispatch(sign(token));
  return i18n.t('auth.email-updated');
};

export const updatePasswordCommand = async (payload, { dispatch, request }) => {
  const token = await request('post', 'auth/update-password', payload);
  dispatch(sign(token));
  return i18n.t('auth.password-updated');
};
