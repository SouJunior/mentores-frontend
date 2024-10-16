import axios from 'axios';

const serverUrl = {
  development: 'http://localhost:3000',
  production: 'https://mentores-backend.soujunior.tech',
};

export const api = axios.create({
  baseURL: serverUrl.development,
});
