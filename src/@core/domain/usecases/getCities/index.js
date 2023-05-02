import axios from 'src/@core/utils/axios'

async function getCities({ page = 1 }) {
  try {
    const response = await axios.get('/core/admin/zones/cities', {
      params: {
        page,
        status: ['ACCEPT', 'RETENTION', 'NEW', 'BLOCKED_BY_PAYMENT', 'BLOCKED']
      }
    })

    console.log({ response })

    return [null, response.data]
  } catch (error) {
    console.error(error)

    return [new Error('Error al optener las ciudades'), null]
  }
}

export default getCities
