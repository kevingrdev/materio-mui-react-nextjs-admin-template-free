import axios from 'axios'
import { getFromLocalStorage } from './localStorage'

const instance = axios.create({
  baseURL: 'https://admin-api.prontoapp.tech',
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(config => {
  const token = getFromLocalStorage('accessToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default instance
