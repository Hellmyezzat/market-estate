import React from 'react'
import { FaBath, FaBed, FaChair, FaMapMarkedAlt, FaParking } from 'react-icons/fa'

function ListingDetails({ listing }) {
  return (
    <>
      <p className="text-2xl font-semibold">
        {listing.name} - $
        {listing.offer
          ? listing.discountPrice.toLocaleString('en-Us')
          : listing.regularPrice.toLocaleString('en-Us')}
        {listing.type === 'rent' && ' / month'}
      </p>
      <p className="flex items-center mt-6 gap-2 text-slate-600 text-sm">
        <FaMapMarkedAlt className="text-green-700" />
        {listing.address}
      </p>
      <div className="flex gap-4">
        <p className="bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
          {listing.type}
        </p>
        {listing.offer && (
          <p className="bg-green-900 text-white w-full max-w-[200px] text-center p-1 rounded-md">
            ${+listing.regularPrice - +listing.discountPrice} OFF
          </p>
        )}
      </div>
      <p className="text-slate-800">
        <span className="font-semibold text-black">Description -</span>
        {listing.description}
      </p>
      <ul className="text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
        <li className="flex items-center gap-1 whitespace-nowrap">
          <FaBed className="text-lg" />
          {listing.bedrooms > 1
            ? `${listing.bedrooms} beds`
            : `${listing.bedrooms} bed`}
        </li>
        <li className="flex items-center gap-1 whitespace-nowrap">
          <FaBath className="text-lg" />
          {listing.bathrooms > 1
            ? `${listing.bathrooms} baths`
            : `${listing.bathrooms} bath`}
        </li>
        <li className="flex items-center gap-1 whitespace-nowrap ">
          <FaParking className="text-lg" />
          {listing.parking ? 'Parking spot' : 'No Parking'}
        </li>
        <li className="flex items-center gap-1 whitespace-nowrap">
          <FaChair className="text-lg" />{' '}
          {listing.furnished ? 'Furnished' : 'Unfurnished'}
        </li>
      </ul>
    </>
  )
}

export default ListingDetails