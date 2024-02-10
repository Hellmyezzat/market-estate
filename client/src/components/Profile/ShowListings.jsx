import { Link } from 'react-router-dom'
import useShowListings from '../../hooks/useShowListings'

function ShowListings() {
  const {
    handleToggleListings,
    hiddenListing,
    showListingsError,
    userListings,
    handleListingDelete,
  } = useShowListings()

  return (
    <>
      <button onClick={handleToggleListings} className="text-green-700 w-full">
        {hiddenListing ? 'Show Listings' : 'Hide Listings'}
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
              <Link to={`/listing/${list._id}`}>
                <img
                  src={list.imageUrls[0]}
                  className="h-16 w-16 object-contain"
                />
              </Link>
              <Link
                to={`/listing/${list._id}`}
                className="flex-1 text-slate-700 font-semibold  hover:underline"
              >
                <p>{list.name}</p>
              </Link>
              <div className="flex flex-col gap-2 items-center">
                <button
                  onClick={() => handleListingDelete(list._id)}
                  className="bg-red-700 text-white  px-3 rounded-lg"
                >
                  Delete
                </button>
                <Link to={`/update-listing/${list._id}`}>
                <button className="bg-green-700 text-white px-2 rounded-lg">
                  Edit
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default ShowListings
