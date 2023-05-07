import axios from 'src/legacy/@core/utils/axios'

// https://admin-api.prontoapp.tech/core/admin/riders/645214fcf18b3d83509b02c5
async function getUser(id) {
  try {
    console.log('-------')

    const response = await axios.get(`/core/admin/riders/${id}`)

    console.log({ response })

    return [null, response.data.data.rider]
  } catch (error) {
    console.log({ error })

    return [new Error('Error al obtener el detalle del usuario'), null]
  }
}

export default getUser
