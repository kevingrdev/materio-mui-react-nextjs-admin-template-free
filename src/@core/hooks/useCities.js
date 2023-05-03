import { useState, useEffect } from 'react'

import getCities from 'src/@core/domain/usecases/getCities'

function useCities() {
  const [loading, setLoading] = useState(true)

  //   const [error, setError] = useState(null)

  const [cities, setCities] = useState([])

  useEffect(() => {
    async function fetchCities() {
      setLoading(true)

      const [errCities, dataCities] = await getCities()
      setCities(dataCities.data.cities ?? [])

      setLoading(false)
    }

    fetchCities()
  }, [])

  return { loading, cities }
}

export default useCities
