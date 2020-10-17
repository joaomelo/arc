import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost:3000',
  validateStatus: status => status < 500
});

export async function post (route, payload) {
  const result = await client.post(route, payload);

  if (result.status !== 200) { throw new Error(result.data); }

  return result.data;
}
