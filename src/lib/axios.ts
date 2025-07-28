import axios from 'axios';

const serverUrl = {
  development: 'https://p01--mentores-backend-api--brg9tw85vflp.code.run/',
  production: 'https://mentores-backend-6dkc.onrender.com/',
};

export const api = axios.create({
  baseURL: serverUrl.development,
  withCredentials: true,
});
