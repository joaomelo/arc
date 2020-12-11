export function extractUser (fireauthUser) {
  const user = {
    email: fireauthUser.email
  };

  return user;
}
