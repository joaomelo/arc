import { reactive } from '@vue/composition-api';

import { startLoading } from '@/core/load';
import { subscribe, publish } from '@/core/bus';
import { bindDocs, getDoc, setDoc } from '@/core/firestore';
import { AUTH_EVENTS, getCurrentUser } from '@/modules/auth';
import { I18N_EVENTS } from '@/core/i18n';
import { convertDocsToProfiles, convertDocToProfile, convertProfileToDoc } from './adapters';

const profileState = reactive({
  currentProfile: null,
  profiles: []
});

function bindProfiles () {
  const config = { collection: 'profiles' };
  const callback = docs => {
    const stop = startLoading(config.collection);
    profileState.profiles = convertDocsToProfiles(docs);
    setCurrentProfile();
    stop();
  };

  subscribe(AUTH_EVENTS.USER_LOGGEDIN, () => bindDocs(callback, config), true);
};

function createUserProfile (user) {
  const profileData = {
    id: user.uid,
    title: user.email
  };
  const profileDocument = convertProfileToDoc(profileData);
  return setDoc('profiles', profileData.id, profileDocument);
}

async function pullUserProfile (user) {
  const id = user.uid;
  const doc = await getDoc('profiles', id);
  const profile = convertDocToProfile(doc);
  return profile;
}

function setCurrentProfile () {
  const id = getCurrentUser().uid;

  const newProfile = getProfile(id);
  const oldProfile = getCurrentProfile();

  profileState.currentProfile = newProfile || null;

  const newLang = newProfile ? newProfile.lang : null;
  const oldLang = oldProfile ? oldProfile.lang : null;
  if (newLang !== oldLang) {
    publish(I18N_EVENTS.LANGUAGE_PREFERENCE_CHANGED, { lang: newLang });
  }
}

function getCurrentProfile () {
  return profileState.currentProfile;
}

function getProfiles () {
  return profileState.profiles;
}

function getProfile (id) {
  const profile = profileState.profiles.find(profile => profile.id === id);
  return profile;
}

function updateProfile (profile) {
  const doc = convertProfileToDoc(profile);
  setDoc('profiles', profile.id, doc);
}

export {
  bindProfiles,
  createUserProfile,
  pullUserProfile,
  setCurrentProfile,
  getCurrentProfile,
  getProfiles,
  getProfile,
  updateProfile
};
