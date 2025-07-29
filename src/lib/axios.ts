import axios from 'axios';

const serverUrl = {
    development: 'http://localhost:3000',

  production: 'https://p01--mentores-backend-api--brg9tw85vflp.code.run/',
};

export const api = axios.create({
  baseURL: serverUrl.development,
  withCredentials: true,
});
