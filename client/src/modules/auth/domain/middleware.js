// import jwtDecode from 'jwt-decode';
// import { client } from '__cli/core/client';

const signMock = (email, password) => ({ token: 'token', id: '0000', email });

export function signUp (email, password) {
  return signMock(email, password);
  // const route = 'sign-up';
  // return sign(route, email, password);
}

export function signIn (email, password) {
  return signMock(email, password);
  // const route = 'sign-in';
  // return sign(route, email, password);
}

// async function sign (route, email, password) {
//   const result = await client.post(
//     `/users/${route}`,
//     { email, password }
//   );

//   if (result.status !== 200) throw new Error(result.data);

//   const jwtToken = jwtDecode(result.data);
//   const userData = {
//     token: jwtToken,
//     id: jwtToken.data.id,
//     email: jwtToken.data.email
//   };

//   return userData;
// }
