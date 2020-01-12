import { publish } from '@/core/bus';
import { AUTH_EVENTS, AUTH_STATUSES } from '../common';
import { igniteService, fireLogin, fireLogout } from '../services';
import { setCurrentUser } from './current-user';

const state = {
  authStatus: AUTH_STATUSES.UNSOLVED
};

function igniteAuth () {
  const updateAuthState = user => {
    setCurrentUser(user);

    const newAuthStatus = user ? AUTH_STATUSES.LOGGEDIN : AUTH_STATUSES.LOGGEDOUT;
    state.authStatus = newAuthStatus;

    const eventPayload = {
      user,
      status: newAuthStatus
    };
    publish(AUTH_EVENTS.AUTH_STATUS_CHANGED, eventPayload);
  };

  igniteService(updateAuthState);
}

function getAuthStatus () {
  return state.authStatus;
}

function login (email, password) {
  return fireLogin(email, password);
};

function logout () {
  fireLogout();
};

export { igniteAuth, getAuthStatus, login, logout };
