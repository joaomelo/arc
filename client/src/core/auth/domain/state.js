import { subscribe, publish } from '@joaomelo/bus';
import { AUTH_STATUSES, AUTH_EVENTS } from './types';
import { authService, extractUserData } from './service';

const authState = {
  status: AUTH_STATUSES.UNSOLVED,
  userData: null
};

authService.onAuthStateChanged(user => {
  const AUTH_EVENT = user
    ? AUTH_EVENTS.USER_SIGNEDIN
    : AUTH_EVENTS.USER_SIGNEDOUT;
  triggerAuthStateChanged(AUTH_EVENT, user);
});

function triggerAuthStateChanged (event, user) {
  const oldStatus = authState.status;
  const oldUserData = authState.userData;

  switch (event) {
    case AUTH_EVENTS.USER_SIGNEDOUT:
      authState.status = AUTH_STATUSES.SIGNEDOUT;
      authState.userData = null;
      break;

    case AUTH_EVENTS.USER_SIGNEDIN:
      authState.status = user.emailVerified
        ? AUTH_STATUSES.SIGNEDIN
        : AUTH_STATUSES.PENDING;
      authState.userData = extractUserData(user);
      break;

    default:
      throw new Error(`"triggerAuthStateChanged" was invoked with unknow event: ${event}`);
  }

  publish(AUTH_EVENTS.AUTH_STATE_CHANGED, { ...authState, oldStatus, oldUserData });
}

function subscribeToAuthStateChanged (observer) {
  return subscribe(AUTH_EVENTS.AUTH_STATE_CHANGED, observer, true);
}

export { authState, subscribeToAuthStateChanged };
