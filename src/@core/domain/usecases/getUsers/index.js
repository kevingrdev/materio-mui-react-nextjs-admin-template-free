import axios from 'src/@core/utils/axios'

async function getUsers({ page = 1 }) {
  try {
    const response = await axios.get('/core/admin/riders/search', {
      params: {
        page
      }
    })

    return [null, response.data]
  } catch (error) {
    console.error(error)

    return [new Error('Error al optener los conductores'), null]
  }
}

export default getUsers
