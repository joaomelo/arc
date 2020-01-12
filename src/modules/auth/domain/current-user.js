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
  const pos = email.indexOf('@');
  return email.substring(0, pos);
}

export { setCurrentUser, getCurrentUser, getCurrentUsername };
