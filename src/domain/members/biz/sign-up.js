export async function signUp (payload, { authService }) {
  return authService.signUp(payload);
}
