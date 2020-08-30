import { apolloClient } from '__cli/core/apollo';
import { AUTH_STATUSES, authState, triggerAuthStateChange, extractUserData } from './state';
import { UpdateEmail, UpdatePassword } from './update.gql';

async function updateEmail (newEmail, password) {
  const currentEmail = authState.userData.email;

  if (newEmail === currentEmail) return Promise.reject(new Error('New email must differ from current'));
  if (!password) return Promise.reject(new Error('Must provide current password to confirm'));

  console.log({ newEmail, password });

  const result = await apolloClient.mutate({
    mutation: UpdateEmail,
    variables: {
      input: {
        newEmail,
        password
      }
    }
  });

  console.log(result);

  const jwtToken = result.data.updateEmail;
  const newUserData = extractUserData(jwtToken);

  triggerAuthStateChange(AUTH_STATUSES.SIGNEDIN, newUserData);
}

async function updatePassword (newPassword, password) {
  if (newPassword === password) return Promise.reject(new Error('New password must differ from current'));
  if (!password) return Promise.reject(new Error('Must provide current password to confirm'));

  await apolloClient.mutate({
    mutation: UpdatePassword,
    variables: {
      input: {
        newPassword,
        password
      }
    }
  });
}

export {
  updateEmail,
  updatePassword
};
