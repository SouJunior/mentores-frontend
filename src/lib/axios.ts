import axios from 'axios';

const serverUrl = {
  developmentLocal: 'http://localhost:3000',

  development: 'https://p01--mentores-backend-api-dev--bj8pjy8s82zl.code.run',
};

export const api = axios.create({
  baseURL: serverUrl.development,
  withCredentials: true,
});
