import React from 'react'
import ContainerListing from './ContainerListing'

function ListingDetailsForm() {
  return (
    <ContainerListing>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-3 rounded-lg"
          id="name"
          maxLength="62"
          minLength="10"
          required
        />
        <textarea
          type="text"
          placeholder="Description"
          className="border p-3 rounded-lg"
          id="description"
          required
        />
        <input
          type="text"
          placeholder="Address"
          className="border p-3 rounded-lg"
          id="address"
          required
        />
      </div>
    </ContainerListing>
  )
}

export default ListingDetailsForm
