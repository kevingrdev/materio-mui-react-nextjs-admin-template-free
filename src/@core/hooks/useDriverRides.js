import { useEffect, useState } from 'react'
import getDriverRides from 'src/@core/domain/usecases/getRidesDriver'

function useDriverRides(id) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [rides, setDriverRides] = useState([])
  const [pagination, setPagination] = useState(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    async function fetchDriverRides() {
      console.log('--fetchDriverRides--')
      setLoading(true)
      const [err, data] = await getDriverRides(id, page)

      if (err) {
        setError(err)
      } else {
        setDriverRides(data?.rides ?? [])

        // console.log({ pagination: data?.pagination })
        setTotalPages(data?.pagination?.total_pages ?? 1)
        setPagination(data?.pagination ?? {})

        // setTotalPages(Math.ceil(data. / 5))
      }
      setLoading(false)
    }
    fetchDriverRides()
  }, [id, page])

  function handlePageChange(e, newPageCrude) {
    const newPage = newPageCrude + 1
    console.log({ e, newPage, totalPages })
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage)
    } else {
      setError(new Error('Página no válida'))
    }
  }

  return { loading, error, pagination, rides, page, totalPages, handlePageChange }
}

export default useDriverRides
