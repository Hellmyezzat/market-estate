import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ShowListings() {
  const { currentUser } = useSelector((state) => state.user)
  const [showListingsError, setShowListingsError] = useState(false)
  const [userListings, setUserListings] = useState([])
  console.log(userListings)
  const handleShowListing = async () => {
    try {
      const res = await fetch(`/api/user/listings/${currentUser._id}`)
      const data = await res.json()
      if (data.success === false) {
        setShowListingsError(true)
        return
      }
      setUserListings(data)
    } catch (error) {
      setShowListingsError(error)
    }
  }
  return (
    <>
      <button onClick={handleShowListing} className="text-green-700 w-full">
        Show Listings
      </button>
      <p className="text-red-700">
        {showListingsError ? 'Error showing listings' : ''}
      </p>
      {userListings && userListings.length > 0 && (
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-2xl font-semibold">Your Listings</h1>
          {userListings.map((list) => (
            <div
              key={list._id}
              className="border rounded-lg p-3 flex justify-between items-center gap-4"
            >
              <Link to={`/listings/${list._id}`}>
                <img
                  src={list.imageUrls[0]}
                  className="h-16 w-16 object-contain"
                />
              </Link>
              <Link
                to={`/listings/${list._id}`}
                className="flex-1 text-slate-700 font-semibold  hover:underline"
              >
                <p>{list.name}</p>
              </Link>
              <div className="flex flex-col gap-2 items-center">
                <button className="bg-red-700 text-white  px-3 rounded-lg">
                  Delete
                </button>
                <button className="bg-green-700 text-white px-2 rounded-lg">
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default ShowListings
