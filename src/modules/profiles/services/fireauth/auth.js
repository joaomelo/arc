import 'firebase/auth';

import { fireApp } from '@/core/fireapp';
import { bus } from '@/core/bus';
import { AUTH_EVENTS } from '../../common';

const service = fireApp.auth();

function igniteService () {
  service.onAuthStateChanged(user => {
    bus.publish(AUTH_EVENTS.SERVICE_STATE_CHANGED, { user });
  });
};

function getCurrentUser () {
  return service.currentUser;
};

function login (email, password) {
  console.log('called fireauth service login');
}

function logout () {
  return service.signOut();
};

export { igniteService, getCurrentUser, login, logout };
