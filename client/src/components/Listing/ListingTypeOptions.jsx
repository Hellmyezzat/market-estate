import React from 'react'
import Shadow from './Shadow'

function ListingTypeOptions({ handleChange, listingData, setListingData }) {
  return (
    <Shadow>
      <div className="flex gap-6 flex-wrap">
        <div className="flex gap-2">
          <input
            id="sale"
            onChange={handleChange}
            checked={listingData.type === 'sale'}
            type="checkbox"
            className="w-5"
          />
          <span>Sell</span>
        </div>
        <div className="flex gap-2">
          <input
            id="rent"
            onChange={handleChange}
            checked={listingData.type === 'rent'}
            type="checkbox"
            className="w-5"
          />
          <span>Rent</span>
        </div>
        <div className="flex gap-2">
          <input
            id="parking"
            onChange={handleChange}
            checked={listingData.parking}
            type="checkbox"
            className="w-5"
          />
          <span>Parking spot</span>
        </div>
        <div className="flex gap-2">
          <input
            id="furnished"
            onChange={handleChange}
            checked={listingData.furnished}
            type="checkbox"
            className="w-5"
          />
          <span>Furnished</span>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="offer"
            className="w-5"
            onChange={handleChange}
            checked={listingData.offer}
          />
          <span>Offer</span>
        </div>
      </div>
    </Shadow>
  )
}

export default ListingTypeOptions
