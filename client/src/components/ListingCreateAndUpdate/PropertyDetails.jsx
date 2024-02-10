import React from 'react'
import Shadow from './Shadow'

function PropertyDetails({ handleChange, listingData, setListingData }) {
  return (
    <Shadow>
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <input
            id="bedrooms"
            onChange={handleChange}
            value={listingData.bedrooms}
            type="number"
            min="1"
            max="10"
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <p>Beds</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="bathrooms"
            onChange={handleChange}
            value={listingData.bathrooms}
            type="number"
            min="1"
            max="1000000"
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <p>Baths</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="regularPrice"
            onChange={handleChange}
            value={listingData.regularPrice}
            type="number"
            min="50"
            max="1000000"
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <div className="flex flex-col items-center">
            <p>Regular Price</p>
            <span className="text-sm">($ / month)</span>
          </div>
        </div>
        {listingData.offer && (
          <div className="flex items-center gap-2">
            <input
              id="discountPrice"
              onChange={handleChange}
              value={listingData.discountPrice}
              type="number"
              min="0"
              max="10"
              required
              className="p-3 border border-gray-300 rounded-lg"
            />
            <div className="flex flex-col items-center">
              <p>Discount Price</p>
              <span className="text-sm">($ / month)</span>
            </div>
          </div>
        )}
      </div>
    </Shadow>
  )
}

export default PropertyDetails
