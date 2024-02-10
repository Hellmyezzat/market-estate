import {
  ImageSlider,
  Copied,
  Loading,
  Wrong,
  ListingDetails,
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
          <ListingDetails listing={listing} />
        </>
      )}
    </main>
  )
}

export default Listing
