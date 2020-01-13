import { subscribe } from '@/core/bus';
import { AUTH_EVENTS } from '@/modules/auth';

function bindProfileCreation () {
  subscribe(AUTH_EVENTS.USER_LOGGEDIN, createProfile, true);
}

function createProfile ({ user, status }) {
  if (doesUserHasProfile(user)) return;
  console.log('create profile...');
}

function doesUserHasProfile (user) {
  return false;
}

export { bindProfileCreation };
