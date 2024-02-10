import {
  ImageSlider,
  Copied,
  Loading,
  Wrong,
  ListingDetails,
  Contact,
} from '../components/ListingPage'
import useFetchListing from '../hooks/useFetchListing'

function Listing() {
  const { error, loading, listing } = useFetchListing()
  return (
    <main>
      <Loading loading={loading} />
      <Wrong error={error} />
      {listing && !loading && !error && (
        <>
          <ImageSlider listing={listing} />
          <Copied />
          <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
            <ListingDetails listing={listing} />
            <Contact listing={listing} />
          </div>
        </>
      )}
    </main>
  )
}

export default Listing
