import axios from 'src/legacy/@core/utils/axios'

async function getDrivers({ page = 1 }) {
  try {
    const response = await axios.get('/core/admin/drivers/search', {
      params: {
        page,
        status: ['ACCEPT', 'RETENTION', 'NEW', 'BLOCKED_BY_PAYMENT', 'BLOCKED']
      }
    })

    console.log({ response })

    return [null, response.data]
  } catch (error) {
    console.error(error)

    return [new Error('Error al optener los conductores'), null]
  }
}

export default getDrivers
