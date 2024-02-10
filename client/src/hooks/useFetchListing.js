import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const useFetchListing = () => {
  const { listingId } = useParams()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [listing, setListing] = useState(null)

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true)
        const res = await fetch(`/api/listing/get/${listingId}`)
        const data = await res.json()
        if (data.success == false) {
          setError(true)
          setLoading(false)
          return
        }
        setListing(data)
        setLoading(false)
        setError(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }

    fetchListing()
  }, [listingId])

  return {
    error,
    loading,
    listing,
  }
}

export default useFetchListing
