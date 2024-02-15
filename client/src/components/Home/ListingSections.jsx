import { Link } from 'react-router-dom'
import ListingItem from '../Search/ListingItem'

function ListingSection({ title, listing, link }) {
  return (
    <>
      {listing && listing.length > 0 && (
        <>
          <div className="my-3">
            <h2 className="text-2xl font-semibold text-slate-600">{title}</h2>
            <Link to={link} className="text-sm text-blue-800 hover:underline">
              Show more ...
            </Link>
          </div>
          <div className="flex flex-wrap gap-4">
            {listing.map((listing) => (
              <ListingItem listing={listing} key={listing._id} />
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default ListingSection
