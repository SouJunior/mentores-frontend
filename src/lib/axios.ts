import axios from 'axios'

const serverUrl = 'https://mentores-backend.onrender.com'
const localUrl = "http://localhost:3001"

export const api = axios.create({
  baseURL: localUrl,
})
