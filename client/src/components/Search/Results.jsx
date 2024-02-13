import ListingItem from './ListingItem'
import useHandleSearch from '../../hooks/useHandleSearch'

function Results() {
  const { listings, loading } = useHandleSearch()
  return (
    <div className="flex-1">
      <h1 className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">
        Listing results:
      </h1>
      {!loading && listings.length === 0 && (
        <p className="text-xl text-slate-700 text-center p-7">
          No listing found!
        </p>
      )}
      {loading && (
        <p className="text-xl text-slate-700 text-center p-7">Loading...</p>
      )}
      <div className="flex flex-wrap gap-4 p-7">
        {!loading &&
          listings &&
          listings.map((listing) => (
            <ListingItem key={listing._id} listing={listing} />
          ))}
      </div>
      <button className="text-green-700 hover:underline p-7 text-center w-full">
        Show more
      </button>
    </div>
  )
}

export default Results
