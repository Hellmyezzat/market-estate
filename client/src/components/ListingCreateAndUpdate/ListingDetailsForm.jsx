import React from 'react'
import Shadow from './Shadow'

function ListingDetailsForm({ handleChange, listingData, setListingData }) {
  return (
    <Shadow>
      <div className="flex flex-col gap-4">
        <input
          id="name"
          onChange={handleChange}
          value={listingData.name}
          type="text"
          placeholder="Name"
          className="border p-3 rounded-lg"
          maxLength="62"
          minLength="10"
          required
        />
        <textarea
          id="description"
          onChange={handleChange}
          value={listingData.description}
          type="text"
          placeholder="Description"
          className="border p-3 rounded-lg"
          required
        />
        <input
          id="address"
          onChange={handleChange}
          value={listingData.address}
          type="text"
          placeholder="Address"
          className="border p-3 rounded-lg"
          required
        />
      </div>
    </Shadow>
  )
}

export default ListingDetailsForm
