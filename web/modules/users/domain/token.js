import jwtDecode from 'jwt-decode';

export function extractUserDataFromToken (token) {
  const jwtToken = jwtDecode(token);

  const userData = {
    token,
    id: jwtToken.data.id,
    email: jwtToken.data.email
  };

  return userData;
}
