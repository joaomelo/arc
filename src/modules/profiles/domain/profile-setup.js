import { subscribe } from '@joaomelo/bus';
import { AUTH_EVENTS } from '@src/modules/auth';
import { pullUserProfile, createUserProfile } from '../data';

function bindProfileSetup () {
  subscribe(AUTH_EVENTS.USER_LOGGEDIN, setupProfile, true);
}

async function setupProfile ({ user }) {
  const profile = await pullUserProfile(user);
  if (!profile) {
    createUserProfile(user);
  }
}

export { bindProfileSetup };
