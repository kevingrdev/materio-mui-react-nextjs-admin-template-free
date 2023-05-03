//admin-api.prontoapp.tech/ride-hailing/admin/rides/driver/5d25002479dc3106fb26e5b3

import axios from 'src/@core/utils/axios'

async function getDriverRides(id, page) {
  try {
    console.log('-------')

    const ridesResponse = await axios.get(`/ride-hailing/admin/rides/driver/${id}`, {
      params: { page }
    })
    console.log('-------')
    console.log({ ridesResponse })

    const ridesData = ridesResponse.data.data

    return [null, ridesData]
  } catch (error) {
    return [new Error('Error al obtener los viajes del conductor'), null]
  }
}

export default getDriverRides
