import { useState, useEffect } from 'react'

function useSalesData() {
  const [salesData, setSalesData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/kevingrdev/json/master/salesData.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching data')
        }

        return response.json()
      })
      .then(data => {
        setSalesData(data.data)
        setIsLoading(false)
      })
      .catch(error => {
        setError(error)
        setIsLoading(false)
      })
  }, [])

  return { salesData, isLoading, error }
}

export default useSalesData
