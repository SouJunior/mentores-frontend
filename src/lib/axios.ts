import axios from 'axios';

const serverUrl = {
  development: 'http://localhost:8080',
  production: 'https://mentores-backend-6dkc.onrender.com/',
};

export const api = axios.create({
  baseURL: serverUrl.development,
  withCredentials: true
});
