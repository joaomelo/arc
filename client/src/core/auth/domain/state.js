import { BehaviorSubject } from 'rxjs';
import { AUTH_STATUSES } from './types';

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

export { authState, authStateSubject, triggerAuthStateChange };
