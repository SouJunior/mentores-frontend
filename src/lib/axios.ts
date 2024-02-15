import axios from 'axios'

const serverUrl = 'https://mentores-backend.soujunior.tech'
// const serverUrl = 'http://localhost:3003'

export const api = axios.create({
  baseURL: serverUrl,
})
