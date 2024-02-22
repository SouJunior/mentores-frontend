import axios from 'axios'

type NodeEnv = 'development' | 'production'

const serverUrl = {
  development: 'http://localhost:3003',
  production: 'https://mentores-backend.soujunior.tech',
}

export const api = axios.create({
  baseURL: serverUrl[process.env.NODE_ENV as NodeEnv],
})
