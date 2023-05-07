import { useState, useEffect } from 'react'
import getDrivers from 'src/legacy/@core/domain/usecases/getDrivers'
import getCities from 'src/legacy/@core/domain/usecases/getCities'

function useGetDrivers() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [drivers, setDrivers] = useState([])
  const [page, setPage] = useState(1)
  const [cities, setCities] = useState([])

  useEffect(() => {
    async function fetchDrivers() {
      setLoading(true)

      const [err, data] = await getDrivers({ page })
      const [errCities, dataCities] = await getCities({ page })
      setCities(dataCities.data.cities ?? [])
      if (err) {
        setError(err)
      } else {
        setDrivers(data)
      }

      setLoading(false)
    }

    fetchDrivers()
  }, [page])

  const nextPage = () => {
    setPage(p => p + 1)
  }

  const prevPage = () => {
    setPage(p => p - 1)
  }

  return { loading, error, drivers, page, cities, prevPage, nextPage }
}

export default useGetDrivers
