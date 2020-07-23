import { subscribe, publish } from '@joaomelo/bus';
import { AUTH_EVENTS } from './types';
import { authState } from './state';
import { authService, createCredential, extractUserData } from './service';

function signUp ({ email, password }) {
  return authService
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      const userData = extractUserData(user);
      publish(AUTH_EVENTS.USER_CREATED, userData);

      return user.sendEmailVerification();
    });
}

function signIn ({ email, password }) {
  return authService.signInWithEmailAndPassword(email, password);
}

function signOut () {
  return authService.signOut();
}

function sendEmailVerification () {
  return authService.currentUser.sendEmailVerification();
}

function updateEmail (newEmail, password) {
  const currentEmail = authState.userData.email;

  if (newEmail === currentEmail) return Promise.reject(new Error('New email must differ from current'));
  if (!password) return Promise.reject(new Error('Must provide current password to confirm'));

  return reauthenticate({ email: currentEmail, password })
    .then(({ user }) => user.updateEmail(newEmail))
    .then(() => {
      sendEmailVerification();
      authState.userData.email = newEmail;
      publish(AUTH_EVENTS.USER_UPDATED, { ...authState.userData });
    });
}

function updatePassword (newPassword, password) {
  if (newPassword === password) return Promise.reject(new Error('New password must differ from current'));
  if (!password) return Promise.reject(new Error('Must provide current password to confirm'));

  const email = authState.userData.email;

  return reauthenticate({ email, password })
    .then(({ user }) => user.updatePassword(newPassword));
}

function reauthenticate ({ email, password }) {
  const credential = createCredential({ email, password });
  return authService
    .currentUser
    .reauthenticateWithCredential(credential);
}

function subscribeToUserCreated (observer) {
  return subscribe(AUTH_EVENTS.USER_CREATED, observer);
}

function subscribeToUserUpdated (observer) {
  return subscribe(AUTH_EVENTS.USER_UPDATED, observer);
}

export {
  signUp,
  signIn,
  signOut,
  sendEmailVerification,
  updateEmail,
  updatePassword,
  subscribeToUserCreated,
  subscribeToUserUpdated
};
