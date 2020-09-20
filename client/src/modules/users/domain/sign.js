import jwtDecode from 'jwt-decode';
import { client } from '__cli/core/client';

function signUp (email, password) {
  const route = 'sign-up';
  return sign(route, email, password);
}

function signIn (email, password) {
  const route = 'sign-in';
  return sign(route, email, password);
}

async function sign (route, email, password) {
  const result = await client.post(
    `/users/${route}`,
    { email, password }
  );

  if (result.status !== 200) throw new Error(result.statusText);

  const jwtToken = jwtDecode(result.data);
  const userData = {
    token: jwtToken,
    id: jwtToken.data.id,
    email: jwtToken.data.email
  };

  return userData;
}

export {
  signUp,
  signIn
};
