import { BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';

const AUTH_STATUSES = {
  SIGNEDOUT: 'AUTH_STATUSES.SIGNEDOUT',
  SIGNEDIN: 'AUTH_STATUSES.SIGNEDIN'
};

const authState = {
  status: AUTH_STATUSES.SIGNEDOUT,
  userData: null
};

const authStateSubject = new BehaviorSubject({ ...authState, oldStatus: null, oldUserData: null });

function triggerAuthStateChange (newStatus, newUserData = null) {
  const oldStatus = authState.status;
  const oldUserData = authState.userData ? { ...authState.userData } : null;

  authState.status = newStatus;
  authState.userData = newUserData;

  authStateSubject.next({ ...authState, oldStatus, oldUserData });
}

function extractUserData (jwtToken) {
  const decodedJwtToken = jwtDecode(jwtToken);
  const userData = {
    token: jwtToken,
    id: decodedJwtToken.data.id,
    email: decodedJwtToken.data.email
  };
  return userData;
}

export { AUTH_STATUSES, authState, authStateSubject, triggerAuthStateChange, extractUserData };
