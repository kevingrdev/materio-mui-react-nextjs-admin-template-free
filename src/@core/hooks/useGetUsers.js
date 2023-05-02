import { useState, useEffect } from 'react'
import getUsers from 'src/@core/domain/usecases/getUsers'

function useGetUsers() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true)

      const [err, data] = await getUsers({ page })
      console.log({ data })

      if (err) {
        setError(err)
      } else {
        setUsers(data)
      }

      setLoading(false)
    }

    fetchUsers()
  }, [page])

  const nextPage = () => {
    setPage(p => p + 1)
  }

  const prevPage = () => {
    setPage(p => p - 1)
  }

  return { loading, error, users, page, nextPage, prevPage }
}

export default useGetUsers
