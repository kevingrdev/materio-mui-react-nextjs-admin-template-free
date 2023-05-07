import { useEffect, useState } from 'react'
import getUser from 'src/legacy/@core/domain/usecases/getUserDetail'

function useUser(id) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function fetchUser() {
      setLoading(true)
      const [err, data] = await getUser(id)
      if (err) {
        setError(err)
      } else {
        setUser(data)
      }
      setLoading(false)
    }
    fetchUser()
  }, [id])

  return { loading, error, user }
}

export default useUser
