import { useEffect, useState } from 'react'
import getUserRides from 'src/legacy/@core/domain/usecases/getRidesUser'

function useUserRides(id) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [rides, setRides] = useState([])
  const [pagination, setPagination] = useState(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    async function fetchUserRides() {
      setLoading(true)
      const [err, data] = await getUserRides(id, page)

      console.log({ data })

      if (err) {
        setError(err)
      } else {
        setRides(data?.rides ?? [])
        setTotalPages(data?.pagination?.total_pages ?? 1)
        setPagination(data?.pagination ?? {})
      }
      setLoading(false)
    }
    fetchUserRides()
  }, [id, page])

  function handlePageChange(e, newPageCrude) {
    const newPage = newPageCrude + 1
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage)
    } else {
      setError(new Error('Página no válida'))
    }
  }

  return { loading, error, pagination, rides, page, totalPages, handlePageChange }
}

export default useUserRides
