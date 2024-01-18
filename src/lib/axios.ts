import axios from 'axios'

const serverUrl = 'https://mentores-backend.onrender.com'
// const localUrl = "http://localhost:3003"

export const api = axios.create({
  baseURL: serverUrl,
})
