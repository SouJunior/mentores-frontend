import axios from 'axios';

type NodeEnv = 'development' | 'production';

const serverUrl = {
  development: 'http://localhost:3003',
  production: 'https://mentores-backend-6dkc.onrender.com/',
};

export const api = axios.create({
  baseURL: serverUrl[process.env.NODE_ENV as NodeEnv],
});
