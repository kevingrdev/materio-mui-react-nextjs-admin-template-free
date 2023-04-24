import axios from 'src/@core/utils/axios'
import { saveToLocalStorage } from 'src/@core/utils/localStorage'

function validateParams(user, pass) {
  if (!user || !pass) {
    throw new Error('Debe proporcionar un usuario y contraseña válidos')
  }
}

async function login({ user, pass }) {
  try {
    validateParams(user, pass)

    const response = await axios.post('/auth/login', { email: user, password: pass })
    console.log({ response })
    const { token } = response.data.data.tokens.token
    const userInfo = JSON.stringify(response.data.data.user)

    saveToLocalStorage('accessToken', token)
    saveToLocalStorage('userInfo', userInfo)

    return [null, response.data]
  } catch (error) {
    console.error(error)
    return [new Error('Error al iniciar sesión'), null]
  }
}

export default login
