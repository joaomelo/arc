import { store } from '@/core/store';

function currentUsername () {
  const userEmail = store.state.auth.currentUser.email;
  return extractUsernameFromEmail(userEmail);
}

function extractUsernameFromEmail (email) {
  const pos = email.indexOf('@');
  return email.substring(0, pos);
}

export { currentUsername };
