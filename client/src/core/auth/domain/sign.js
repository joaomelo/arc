import jwtDecode from 'jwt-decode';
import { AUTH_EVENTS, AUTH_STATUSES } from './types';
import { triggerAuthStateChange } from './state';
import { SignIn, SignUp } from './sign.gql';
import { apolloClient } from '__cli/core/apollo';

async function signUp (credentials) {
  return sign(credentials, SignIn);
}

function signIn (credentials) {
  return sign(credentials, SignUp);
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
  const decodedJwtToken = jwtDecode(jwtToken);

  const newUserData = {
    token: jwtToken,
    id: decodedJwtToken.data.id,
    email: decodedJwtToken.data.email
  };

  triggerAuthStateChange(AUTH_STATUSES.SIGNEDIN, newUserData);
}

function signOut () {
  triggerAuthStateChange(AUTH_EVENTS.USER_SIGNEDOUT);
}

export {
  signUp,
  signIn,
  signOut
};
