import axios from 'axios';
import { isProduction } from '__com/meta';
import { queryToken } from '__cli/modules/auth/domain/queries';

const client = axios.create({
  baseURL: 'http://localhost:3000',
  validateStatus: status => status < 500
});

client.interceptors.request.use(config => {
  const token = queryToken();
  if (token) {
    config.headers.Authorization = `Baerer ${token}`;
  }
  return config;
});

export async function request (method, route, payload) {
  if (!isProduction()) {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    await delay(500);
  }

  const result = await client[method](route, payload);
  if (result.status !== 200) throw new Error(result.data);
  return result.data;
}
