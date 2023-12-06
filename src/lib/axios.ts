import axios from 'axios'

const serverUrl = 'https://mentores-backend.onrender.com'

export const api = axios.create({
  baseURL: serverUrl,
})
