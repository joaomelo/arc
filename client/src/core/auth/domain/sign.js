import { gql } from '@apollo/client/core';
import { apolloClient } from '__cli/core/apollo';
import { AUTH_STATUSES, triggerAuthStateChange, extractUserData } from './state';

async function signUp (credentials) {
  const SignUp = gql`
    mutation SignUp ($input: SignInput!){
      signUp(input: $input)
    }
  `;

  return sign(credentials, SignUp);
}

function signIn (credentials) {
  const SignIn = gql`
    mutation SignIn ($input: SignInput!){
      signIn(input: $input)
    }
  `;

  return sign(credentials, SignIn);
}

async function sign ({ email, password }, mutation) {
  const result = await apolloClient.mutate({
    mutation,
    variables: {
      input: {
        email,
        password
      }
    }
  });

  // data propery name differs between signup and signin mutations
  const jwtToken = Object.values(result.data)[0];
  const newUserData = extractUserData(jwtToken);

  triggerAuthStateChange(AUTH_STATUSES.SIGNEDIN, newUserData);
}

function signOut () {
  apolloClient.clearStore(); // clear apollo client cache
  triggerAuthStateChange(AUTH_STATUSES.SIGNEDOUT);
}

export {
  signUp,
  signIn,
  signOut
};
