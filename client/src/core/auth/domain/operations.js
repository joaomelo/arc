import { AUTH_EVENTS } from './types';
import { authState, triggerAuthStateChanged } from './state';
import { authService, createCredential } from './service';

function signUp ({ email, password }) {
  return authService
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => user.sendEmailVerification());
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
      triggerAuthStateChanged(AUTH_EVENTS.USER_EMAIL_UPDATED, newEmail);
      return sendEmailVerification();
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
  return authService.currentUser.reauthenticateWithCredential(credential);
}

export {
  signUp,
  signIn,
  signOut,
  sendEmailVerification,
  updateEmail,
  updatePassword
};
