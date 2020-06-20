import { reactive } from 'client/src/modules/profiles/data/@vue/composition-api';

import { startLoading } from 'client/src/core/load';
import { subscribe, publish } from 'client/src/modules/profiles/data/@joaomelo/bus';
import { bindDocs, getDoc, setDoc } from 'client/src/core/firestore';
import { AUTH_EVENTS, getCurrentUser } from 'client/src/modules/auth';
import { I18N_EVENTS } from 'client/src/core/i18n';
import { convertDocsToProfiles, convertDocToProfile, convertProfileToDoc } from './profile-adapters';

const profilesState = reactive({
  currentProfile: null,
  profiles: []
});

function bindProfiles () {
  const config = { collection: 'profiles' };
  const callback = docs => {
    const stop = startLoading(config.collection);
    profilesState.profiles = convertDocsToProfiles(docs);
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

  profilesState.currentProfile = newProfile || null;

  const newLang = newProfile ? newProfile.lang : null;
  const oldLang = oldProfile ? oldProfile.lang : null;
  if (newLang !== oldLang) {
    publish(I18N_EVENTS.LANGUAGE_PREFERENCE_CHANGED, { lang: newLang });
  }
}

function getCurrentProfile () {
  return profilesState.currentProfile;
}

function getProfiles () {
  return profilesState.profiles;
}

function getProfile (id) {
  const profile = profilesState.profiles.find(profile => profile.id === id);
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
