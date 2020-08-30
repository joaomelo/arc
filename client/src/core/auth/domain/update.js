// import { authState } from './state';

function updateEmail (newEmail, password) {
  console.log({ newEmail, password });
  return Promise.resolve();
  // const currentEmail = authState.userData.email;

  // if (newEmail === currentEmail) return Promise.reject(new Error('New email must differ from current'));
  // if (!password) return Promise.reject(new Error('Must provide current password to confirm'));

  // return reauthenticate({ email: currentEmail, password })
  //   .then(({ user }) => user.updateEmail(newEmail))
  //   .then(() => {
  //     triggerAuthStateChange(AUTH_EVENTS.USER_EMAIL_UPDATED, newEmail);
  //     return sendEmailVerification();
  //   });
}

function updatePassword (newPassword, password) {
  console.log({ newPassword, password });
  return Promise.resolve();
  // if (newPassword === password) return Promise.reject(new Error('New password must differ from current'));
  // if (!password) return Promise.reject(new Error('Must provide current password to confirm'));

  // const email = authState.userData.email;

  // return reauthenticate({ email, password })
  //   .then(({ user }) => user.updatePassword(newPassword));
}

export {
  updateEmail,
  updatePassword
};
