import axios from 'axios'

const serverUrl = 'https://mentores-backend.soujunior.tech'

export const api = axios.create({
  baseURL: serverUrl,
})
