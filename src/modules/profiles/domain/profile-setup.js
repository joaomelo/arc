import { subscribe } from '@/core/bus';
import { AUTH_EVENTS } from '@/modules/auth';
import { setCurrentProfile, pullUserProfile, createUserProfile } from '../data';

function bindProfileSetup () {
  subscribe(AUTH_EVENTS.AUTH_STATUS_CHANGED, setupProfile, true);
}

async function setupProfile ({ user }) {
  if (!user) {
    setCurrentProfile(null);
  } else {
    let profile = await pullUserProfile(user);
    if (!profile) {
      profile = await createUserProfile(user);
    }
    setCurrentProfile(profile);
  }
}

export { bindProfileSetup };
