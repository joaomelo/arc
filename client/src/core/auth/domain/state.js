import { BehaviorSubject } from 'rxjs';
import { AUTH_STATUSES, AUTH_EVENTS } from './types';
import { authService, extractUserData } from './service';

const authState = {
  status: AUTH_STATUSES.UNSOLVED,
  userData: null
};

const authStateChanged = new BehaviorSubject(authState);

authService.onAuthStateChanged(user => {
  const AUTH_EVENT = user
    ? AUTH_EVENTS.USER_SIGNEDIN
    : AUTH_EVENTS.USER_SIGNEDOUT;
  triggerAuthStateChanged(AUTH_EVENT, user);
});

function triggerAuthStateChanged (event, payload) {
  const oldStatus = authState.status;
  const oldUserData = authState.userData ? { ...authState.userData } : null;

  switch (event) {
    case AUTH_EVENTS.USER_SIGNEDOUT: {
      authState.status = AUTH_STATUSES.SIGNEDOUT;
      authState.userData = null;
      break;
    }

    case AUTH_EVENTS.USER_SIGNEDIN: {
      const user = payload;
      authState.status = user.emailVerified
        ? AUTH_STATUSES.SIGNEDIN
        : AUTH_STATUSES.PENDING;
      authState.userData = extractUserData(user);
      break;
    }

    case AUTH_EVENTS.USER_EMAIL_UPDATED: {
      const newEmail = payload;
      authState.userData.email = newEmail;
      break;
    }

    default: {
      throw new Error(`"triggerAuthStateChanged" was invoked with unknow event: ${event}`);
    }
  }

  authStateChanged.next({ ...authState, oldStatus, oldUserData });
}

export { authState, authStateChanged, triggerAuthStateChanged };
