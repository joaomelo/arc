import { i18n } from '__cli/core/i18n';
import { useRequestDispatcher } from '__cli/core/api';
import { sign } from './slice';

const config = {
  method: 'post',
  callback: sign
};

export const useSignIn = () => useRequestDispatcher({
  ...config,
  route: '/auth/sign-in'
});

export const useSignUp = () => useRequestDispatcher({
  ...config,
  route: '/auth/sign-up'
});

export const useUpdateEmail = () => useRequestDispatcher({
  ...config,
  route: 'auth/update-email',
  message: i18n.t('auth.email-updated')
});

export const useUpdatePassword = () => useRequestDispatcher({
  ...config,
  route: 'auth/update-password',
  message: i18n.t('auth.password-updated')
});
