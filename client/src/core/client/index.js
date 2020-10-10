import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3000',
  validateStatus: status => status < 500
});

export { client };
