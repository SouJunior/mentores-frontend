import axios from 'axios';

const serverUrl = {
  development: 'http://localhost:3003',
  production: 'https://mentores-backend.soujunior.tech',
};

export const api = axios.create({
  baseURL: serverUrl.production,
});
