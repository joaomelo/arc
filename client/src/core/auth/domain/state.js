import { BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { AUTH_STATUSES, AUTH_EVENTS } from './types';

const authState = {
  status: AUTH_STATUSES.SIGNEDOUT,
  userData: null
};

const authStateSubject = new BehaviorSubject({ ...authState, oldStatus: null, oldUserData: null });

function triggerAuthStateChange (event, payload) {
  const oldStatus = authState.status;
  const oldUserData = authState.userData ? { ...authState.userData } : null;

  switch (event) {
    case AUTH_EVENTS.USER_SIGNEDOUT: {
      authState.status = AUTH_STATUSES.SIGNEDOUT;
      authState.userData = null;
      break;
    }

    case AUTH_EVENTS.USER_SIGNEDIN: {
      const jwtToken = payload;
      authState.status = AUTH_STATUSES.SIGNEDIN;
      authState.userData = extractUserData(jwtToken);
      break;
    }

    case AUTH_EVENTS.USER_EMAIL_UPDATED: {
      const newEmail = payload;
      authState.userData.email = newEmail;
      break;
    }

    default: {
      throw new Error(`"triggerAuthStateChange" was invoked with unknown event: ${event}`);
    }
  }

  authStateSubject.next({ ...authState, oldStatus, oldUserData });
}

function extractUserData (jwtToken) {
  const decoded = jwtDecode(jwtToken);

  const userData = {
    token: jwtToken,
    id: decoded.data.id,
    email: decoded.data.email
  };

  return userData;
}

export { authState, authStateSubject, triggerAuthStateChange };
