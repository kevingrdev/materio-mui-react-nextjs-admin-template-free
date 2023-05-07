import { useEffect, useState } from 'react'

import getDriver from '../domain/usecases/getDriverDeail'

function useDriver(id) {
  const [driver, setDriver] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchDriver() {
      try {
        const [err, data] = await getDriver(id)

        setDriver(data.data.driver ?? null)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchDriver()
  }, [id])

  async function reload() {
    try {
      setLoading(true)
      const [err, data] = await getDriver(id)

      setDriver(data.data.driver ?? null)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return { driver, loading, error, reload }
}

export default useDriver
