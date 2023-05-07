import axios from 'src/legacy/@core/utils/axios'

async function getCities() {
  try {
    const response = await axios.get('/core/admin/zones/cities', {})

    return [null, response.data]
  } catch (error) {
    console.error(error)

    return [new Error('Error al optener las ciudades'), null]
  }
}

export default getCities
