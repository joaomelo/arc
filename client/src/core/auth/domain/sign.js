import { AUTH_EVENTS } from './types';
import { triggerAuthStateChange } from './state';
import { signInOperation, signUpOperation } from './sign.gql';
import { apolloClient } from '__cli/core/apollo';

async function signUp (credentials) {
  return sign(credentials, 'signUp');
}

function signIn (credentials) {
  return sign(credentials, 'signIn');
}

async function sign ({ email, password }, key) {
  const mutation = key === 'signIn' ? signInOperation : signUpOperation;

  const result = await apolloClient.mutate({
    mutation,
    variables: {
      input: {
        email,
        password
      }
    }
  });

  const jwtToken = result.data[key];
  triggerAuthStateChange(AUTH_EVENTS.USER_SIGNEDIN, jwtToken);
}

function signOut () {
  triggerAuthStateChange(AUTH_EVENTS.USER_SIGNEDOUT);
}

// function updateEmail (newEmail, password) {
//   const currentEmail = authState.userData.email;

//   if (newEmail === currentEmail) return Promise.reject(new Error('New email must differ from current'));
//   if (!password) return Promise.reject(new Error('Must provide current password to confirm'));

//   return reauthenticate({ email: currentEmail, password })
//     .then(({ user }) => user.updateEmail(newEmail))
//     .then(() => {
//       triggerAuthStateChange(AUTH_EVENTS.USER_EMAIL_UPDATED, newEmail);
//       return sendEmailVerification();
//     });
// }

// function updatePassword (newPassword, password) {
//   if (newPassword === password) return Promise.reject(new Error('New password must differ from current'));
//   if (!password) return Promise.reject(new Error('Must provide current password to confirm'));

//   const email = authState.userData.email;

//   return reauthenticate({ email, password })
//     .then(({ user }) => user.updatePassword(newPassword));
// }

export {
  signUp,
  signIn,
  signOut
  // sendEmailVerification,
  // updateEmail,
  // updatePassword
};
