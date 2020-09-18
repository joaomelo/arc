import { client } from '__cli/core/client';
// import { AUTH_STATUSES, triggerAuthStateChange, extractUserData } from './state';

// async function signUp (credentials) {
//   const SignUp = gql`
//     mutation SignUp ($input: SignInput!){
//       signUp(input: $input)
//     }
//   `;

//   return sign(credentials, SignUp);
// }

function signIn (credentials) {
  const route = 'sign-in';
  return sign(credentials, route);
}

async function sign (credentials, route) {
  const result = await client.post(
    `/users/${route}`,
    credentials
  );

  console.log(result);

  // data propery name differs between signup and signin mutations
  // const jwtToken = Object.values(result.data)[0];
  // const newUserData = extractUserData(jwtToken);

  // triggerAuthStateChange(AUTH_STATUSES.SIGNEDIN, newUserData);
}

// function signOut () {
//   triggerAuthStateChange(AUTH_STATUSES.SIGNEDOUT);
// }

export {
  // signUp,
  signIn
  // signOut
};
