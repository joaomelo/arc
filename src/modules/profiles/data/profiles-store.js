import { reactive } from '@vue/composition-api';

import { startLoading } from '@/core/load';
import { subscribe } from '@/core/bus';
import { bindDocs, getDoc, setDoc } from '@/core/firestore';
import { AUTH_EVENTS } from '@/modules/auth';
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
    stop();
  };

  subscribe(AUTH_EVENTS.USER_LOGGEDIN, () => bindDocs(callback, config), true);
};

async function createUserProfile (user) {
  const profileData = {
    id: user.uid,
    title: user.email
  };
  const profileDocument = convertProfileToDoc(profileData);
  await setDoc('profiles', profileData.id, profileDocument);
  const profile = pullUserProfile(user);
  return profile;
}

async function pullUserProfile (user) {
  const id = user.uid;
  const doc = await getDoc('profiles', id);
  const profile = convertDocToProfile(doc);
  return profile;
}

function setCurrentProfile (profile) {
  profileState.currentProfile = profile;
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

export {
  bindProfiles,
  createUserProfile,
  pullUserProfile,
  setCurrentProfile,
  getCurrentProfile,
  getProfiles,
  getProfile
};
