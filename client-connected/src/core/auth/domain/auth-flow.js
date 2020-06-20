import { publish } from '__cli/core/auth/domain/@joaomelo/bus';
import { AUTH_EVENTS } from '../common';
import { createService } from '../services';
import { setCurrentUser } from './current-user';

let authMachine;

function igniteAuth () {
  const updateAuthState = ({ user, status }) => {
    setCurrentUser(user);

    publish(AUTH_EVENTS.AUTH_STATUS_CHANGED, { user, status });
    if (status === 'SIGNIN') publish(AUTH_EVENTS.USER_LOGGEDIN, { user });
  };

  authMachine = createService(updateAuthState);
}

function getAuthStatus () {
  return authMachine.authStatus;
}

async function login (email, password) {
  let result = '';

  try {
    await authMachine.service.signInWithEmailAndPassword(email, password);
  } catch (e) {
    result = e.message;
  };

  return result;
}

function logout () {
  return authMachine.service.signOut();
};

export { igniteAuth, getAuthStatus, login, logout };
