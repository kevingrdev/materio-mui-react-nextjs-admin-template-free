// https://admin-api.prontoapp.tech/ride-hailing/admin/rides/rider/645214fcf18b3d83509b02c5

import axios from 'src/@core/utils/axios'

async function getUserRides(id, page = 1) {
  try {
    const ridesResponse = await axios.get(`/ride-hailing/admin/rides/rider/${id}`, {
      params: { page }
    })

    console.log({ ridesResponse })

    const ridesData = ridesResponse.data.data

    return [null, ridesData]
  } catch (error) {
    return [new Error('Error al obtener los viajes del usuario'), null]
  }
}

export default getUserRides
