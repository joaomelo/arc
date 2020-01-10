import { store } from '@/core/store';
import { AUTH_STATUS } from '../common';
import { igniteService, fireLogin, fireLogout } from '../services';

function igniteAuth () {
  const updateAuthState = user => {
    const newAuthStatus = user ? AUTH_STATUS.LOGGEDIN : AUTH_STATUS.LOGGEDOUT;
    store.commit('setCurrentUser', user);
    store.commit('setAuthStatus', newAuthStatus);
  };

  igniteService(updateAuthState);
}

function login (email, password) {
  return fireLogin(email, password);
};

function logout () {
  fireLogout();
};

export { igniteAuth, login, logout };
