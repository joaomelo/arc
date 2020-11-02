import { signIn, signUp, updateEmail, updatePassword, updatePreferences } from './services';

export const feature = {
  name: 'users',
  routes: [
    {
      method: 'post',
      path: '/sign-in',
      service: signIn,
      options: { isPublic: true }
    },
    {
      method: 'post',
      path: '/sign-up',
      service: signUp,
      options: { isPublic: true }
    },
    {
      method: 'post',
      path: '/update-email',
      service: updateEmail
    },
    {
      method: 'post',
      path: '/update-password',
      service: updatePassword
    },
    {
      method: 'post',
      path: '/update-preferences',
      service: updatePreferences
    }
  ]
};
