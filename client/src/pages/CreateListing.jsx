import { useState } from 'react'
import {
  CreateListingButton,
  ImageUploadSection,
  ListingDetailsForm,
  ListingTypeOptions,
  PropertyDetails,
} from '../components/Listing'

function CreateListing() {
  const [listingData, setListingData] = useState({
    imageUrls: [],
  })
  console.log(listingData);
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a Listing
      </h1>
      <form className="flex flex-col lg:flex-row  gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <ListingDetailsForm />
          <ListingTypeOptions />
          <PropertyDetails />
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <ImageUploadSection
            listingData={listingData}
            setListingData={setListingData}
          />
          <CreateListingButton />
        </div>
      </form>
    </main>
  )
}

export default CreateListing
