import {
  CreateListingButton,
  ImageUploadSection,
  ListingDetailsForm,
  ListingTypeOptions,
  PropertyDetails,
} from '../components/Listing'
import useFormListing from '../hooks/useFormListing'

function CreateListing() {
  const {
    listingData,
    setListingData,
    handleChange,
    handleSubmit,
    error,
    setError,
    loading,
    setLoading,
  } = useFormListing()
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a Listing
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row  gap-4"
      >
        <div className="flex flex-col gap-4 flex-1">
          <ListingDetailsForm
            handleChange={handleChange}
            listingData={listingData}
            setListingData={setListingData}
          />
          <ListingTypeOptions
            handleChange={handleChange}
            listingData={listingData}
            setListingData={setListingData}
          />
          <PropertyDetails
            handleChange={handleChange}
            listingData={listingData}
            setListingData={setListingData}
          />
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <ImageUploadSection
            listingData={listingData}
            setListingData={setListingData}
          />
          <CreateListingButton loading={loading} />
          {error && <p className="text-red-700 text-sm">{error}</p>}
        </div>
      </form>
    </main>
  )
}

export default CreateListing
