import { useState, useEffect } from 'react'
import getDrivers from 'src/@core/domain/usecases/getDrivers'

function useGetDrivers() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [drivers, setDrivers] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchDrivers() {
      setLoading(true)

      const [err, data] = await getDrivers({ page })

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

  return { loading, error, drivers, page, prevPage, nextPage }
}

export default useGetDrivers
