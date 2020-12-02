export async function signUp ({ email, password }, { authService }) {
  const user = await authService.createUserWithEmailAndPassword(email, password);
  // create profile
  return user;
}
