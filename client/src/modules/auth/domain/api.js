import { sign } from './slice';
import { useRequestDispatcher } from '__cli/core/api';

export const useSignIn = () => useRequestDispatcher('post', '/auth/sign-in', sign);
export const useSignUp = () => useRequestDispatcher('post', '/auth/sign-up', sign);
export const useUpdateEmail = () => useRequestDispatcher('post', 'auth/update-email', sign);
export const useUpdatePassword = () => useRequestDispatcher('post', 'auth/update-password', sign);
