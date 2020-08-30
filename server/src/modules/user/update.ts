import { signIn } from './sign';

async function updateEmail(userId: string, newEmail: string, password: string): Promise<string> {
  // const token = await signIn(email, password);
  const token = Promise.resolve('teste');
  return token;
}

async function updatePassword(userId: string, newPassword: string, password: string): Promise<string> {
  // const token = await signIn(email, password);
  const token = Promise.resolve('teste');
  return token;
}

export {
  updateEmail,
  updatePassword
};