import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
const useUpdateListing = () => {
  const navigate = useNavigate()
  const { currentUser } = useSelector((state) => state.user)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const { listingId } = useParams()
  const [listingData, setListingData] = useState({
    imageUrls: [],
    name: '',
    description: '',
    address: '',
    type: 'sale',
    bedrooms: 1,
    bathrooms: 1,
    regularPrice: 50,
    discountPrice: 0,
    offer: false,
    parking: false,
    furnished: false,
  })
  console.log(listingData)
  useEffect(() => {
    const fetchListing = async () => {
      const res = await fetch(`/api/listing/get/${listingId}`)
      const data = await res.json()
      if (data.success === false) {
        setError(data.message)
        return
      }
      setListingData(data)
    }
    fetchListing()
    console.log(listingId)
  }, [])
  const handleChange = (e) => {
    if (e.target.id === 'sale' || e.target.id === 'rent') {
      setListingData({ ...listingData, type: e.target.id })
    }
    if (
      e.target.id === 'parking' ||
      e.target.id === 'furnished' ||
      e.target.id === 'offer'
    ) {
      setListingData({ ...listingData, [e.target.id]: e.target.checked })
    }

    if (
      e.target.type === 'number' ||
      e.target.type === 'text' ||
      e.target.type === 'textarea'
    ) {
      setListingData({ ...listingData, [e.target.id]: e.target.value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (listingData.imageUrls.length < 1)
        return setError('You must upload at least one image')
      if (+listingData.regularPrice < +listingData.discountPrice)
        return setError('Discount price must be lower than regular price')
      setLoading(true)
      setError(false)
      const res = await fetch(`/api/listing/update/${listingId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...listingData, userRef: currentUser._id }),
      })

      const data = await res.json
      setLoading(false)
      if (data.success === false) {
        setError(data.message)
      }
      navigate(`/listing/${data._id}`)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return {
    listingData,
    setListingData,
    handleChange,
    handleSubmit,
    error,
    setError,
    loading,
    setLoading,
  }
}

export default useUpdateListing
