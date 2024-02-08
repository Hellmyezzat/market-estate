import { useState } from 'react'
import { useSelector } from 'react-redux'

const useShowListings = () => {
  const { currentUser } = useSelector((state) => state.user)
  const [userListings, setUserListings] = useState([])
  const [hiddenListing, setHiddenListing] = useState(true)
  const [showListingsError, setShowListingsError] = useState(false)

  const handleShowListing = async () => {
    try {
      const res = await fetch(`/api/user/listings/${currentUser._id}`)
      const data = await res.json()
      if (data.success === false) {
        setShowListingsError(true)
        return
      }
      setUserListings(data)
      setHiddenListing(false)
    } catch (error) {
      setShowListingsError(error)
    }
  }
  const handleToggleListings = () => {
    setHiddenListing(hiddenListing)
    if (hiddenListing) {
      handleShowListing()
    } else {
      setUserListings([])
      setHiddenListing(true)
    }
  }

  const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: 'DELETE',
      })
      const data = await res.json()
      if (data.success === false) {
        console.log(data.message)
        return
      }

      setUserListings((prevListing) =>
        prevListing.filter((list) => list._id !== listingId)
      )
    } catch (error) {
      console.log(error)
    }
  }

  return {
    handleToggleListings,
    hiddenListing,
    showListingsError,
    userListings,
    currentUser,
    handleListingDelete,
  }
}

export default useShowListings
