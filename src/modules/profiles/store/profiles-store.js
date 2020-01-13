import { reactive } from '@vue/composition-api';
import { startLoading } from '@/core/load';
import { subscribe } from '@/core/bus';
import { bindDocs } from '@/core/firestore';
import { AUTH_EVENTS } from '@/modules/auth';
import { convertDocsToProfiles } from './adapters';

const state = reactive({
  profiles: []
});

function bindProfiles () {
  const config = { collection: 'profiles' };
  const callback = docs => {
    const stop = startLoading(config.collection);
    state.profiles = convertDocsToProfiles(docs);
    stop();
  };

  subscribe(AUTH_EVENTS.USER_LOGGEDIN, () => bindDocs(callback, config), true);
};

function getProfiles () {
  return state.profiles;
}

function getProfile (id) {
  const profile = state.profiles.find(profile => profile.id === id);
  return profile;
}

export { bindProfiles, getProfiles, getProfile };
