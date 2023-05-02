import axios from 'src/@core/utils/axios'

async function getDrivers() {
  try {
    const response = await axios.post('/drivers/search')

    console.log({ response })

    return [null, response.data]
  } catch (error) {
    console.error(error)

    return [new Error('Error al optener los conductores'), null]
  }
}

export default getDrivers
