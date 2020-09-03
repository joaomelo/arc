import { gql } from '@apollo/client/core';
import { apolloClient } from '__cli/core/apollo';
import { AUTH_STATUSES, authState, triggerAuthStateChange, extractUserData } from './state';

async function updateEmail (newEmail, password) {
  const currentEmail = authState.userData.email;

  if (newEmail === currentEmail) return Promise.reject(new Error('New email must differ from current'));
  if (!password) return Promise.reject(new Error('Must provide current password to confirm'));

  const result = await apolloClient.mutate({
    mutation: gql`
      mutation UpdateEmail ($input: UpdateEmailInput!){
        updateEmail(input: $input)
      }    
    `,
    variables: {
      input: {
        newEmail,
        password
      }
    }
  });

  const jwtToken = result.data.updateEmail;
  const newUserData = extractUserData(jwtToken);

  triggerAuthStateChange(AUTH_STATUSES.SIGNEDIN, newUserData);
}

async function updatePassword (newPassword, password) {
  if (newPassword === password) return Promise.reject(new Error('New password must differ from current'));
  if (!password) return Promise.reject(new Error('Must provide current password to confirm'));

  await apolloClient.mutate({
    mutation: gql`
      mutation UpdatePassword ($input: UpdatePasswordInput!){
        updatePassword(input: $input)
      }
    `,
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
