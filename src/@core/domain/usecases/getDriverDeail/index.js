import axios from 'src/@core/utils/axios'

async function getDriver(id) {
  try {
    // https://admin-api.prontoapp.tech/core/admin/drivers/5d25002479dc3106fb26e5b3

    const response = await axios.get(`/core/admin/drivers/${id}`)

    return [null, response.data]
  } catch (error) {
    return [new Error('Error al obtener el detalle del conductor'), null]
  }
}

export default getDriver
