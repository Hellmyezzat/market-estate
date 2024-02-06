import React from 'react'
import Shadow from './Shadow'

function ListingTypeOptions() {
  return (
    <Shadow>
      <div className="flex gap-6 flex-wrap">
        <div className="flex gap-2">
          <input type="checkbox" id="sale" className="w-5" />
          <span>Sell</span>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="rent" className="w-5" />
          <span>Rent</span>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="parking" className="w-5" />
          <span>Parking spot</span>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="furnished" className="w-5" />
          <span>Furnished</span>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="offer" className="w-5" />
          <span>Offer</span>
        </div>
      </div>
    </Shadow>
  )
}

export default ListingTypeOptions
