import { store } from '@/core/store';
import { AUTH_STATUS } from '../common';
import { igniteService, login as serviceLogin, logout as serviceLogout } from '../services';

function bindAuthToServiceStatus () {
  const updateAuthState = user => {
    const newAuthStatus = user ? AUTH_STATUS.LOGGEDIN : AUTH_STATUS.LOGGEDOUT;
    store.commit('setCurrentUser', user);
    store.commit('setAuthStatus', newAuthStatus);
  };

  igniteService(updateAuthState);
}

function login (email, password) {
  return serviceLogin(email, password);
};

function logout () {
  serviceLogout();
};

export { bindAuthToServiceStatus, login, logout };
