import { subscribe } from '@/core/bus';
import { AUTH_EVENTS } from '@/modules/auth';
import { pullUserProfile, createUserProfile } from '../data';

function bindProfileSetup () {
  subscribe(AUTH_EVENTS.USER_LOGGEDIN, setupProfile, true);
}

async function setupProfile ({ user }) {
  let profile = await pullUserProfile(user);
  if (!profile) {
    profile = await createUserProfile(user);
  }
}

export { bindProfileSetup };
