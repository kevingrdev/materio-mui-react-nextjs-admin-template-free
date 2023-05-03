// https://admin-api.prontoapp.tech/core/admin/drivers/5c592ce99b5a34a93150755d/change-status
// {"status":"BANNED","reason":"Prueba","initiated_by":{"email":"Gabriel","name":"gabriel@prontoapp.com.mx"}}
import axios from 'src/@core/utils/axios'
import { getFromLocalStorage } from 'src/@core/utils/localStorage'

async function updateDriverStatus(id, status, reason) {
  try {
    const res = getFromLocalStorage('userInfo')

    const initiatedBy = {
      email: res.name,
      name: res.email
    }

    console.log({ initiatedBy })

    const response = await axios.post(`/core/admin/drivers/${id}/change-status`, {
      status,
      reason,
      initiated_by: initiatedBy
    })

    return [null, response.data]
  } catch (error) {
    console.log({ error })

    return [new Error('Error al actualizar el estatus del conductor'), null]
  }
}

export default updateDriverStatus
