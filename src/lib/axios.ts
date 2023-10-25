import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://mentores-backend.onrender.com',
})
