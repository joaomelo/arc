import { post } from '__cli/core/client';

export const apiSignIn = payload => post('/users/sign-in', payload);
export const apiSignUp = payload => post('/users/sign-up', payload);
