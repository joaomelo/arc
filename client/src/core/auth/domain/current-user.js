import { extractUsernameFromEmail } from '__cli/core/auth/domain/client/src/common/helpers';

const state = {
  currentUser: null
};

function setCurrentUser (newUser) {
  state.currentUser = newUser;
}

function getCurrentUser () {
  return state.currentUser;
}

function getCurrentUsername () {
  const email = state.currentUser.email;
  const username = extractUsernameFromEmail(email);
  return username;
}

export { setCurrentUser, getCurrentUser, getCurrentUsername };
