import React from 'react'
import Shadow from './Shadow'

function PropertyDetails() {
  return (
    <Shadow>
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <input
            type="number"
            id="bedrooms"
            min="1"
            max="10"
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <p>Beds</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            id="bathrooms"
            min="1"
            max="10"
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <p>Baths</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            id="regularPrice"
            min="1"
            max="10"
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <div className="flex flex-col items-center">
            <p>Regular Price</p>
            <span className="text-sm">($ / month)</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            id="discountPrice"
            min="1"
            max="10"
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <div className="flex flex-col items-center">
            <p>Discount Price</p>
            <span className="text-sm">($ / month)</span>
          </div>
        </div>
      </div>
    </Shadow>
  )
}

export default PropertyDetails
