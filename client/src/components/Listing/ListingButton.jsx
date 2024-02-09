import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ListingButton({ loading }) {
  const { listingId } = useParams()

  if (listingId) {
    return (
      <button
        disabled={loading}
        className="uppercase p-3 bg-slate-700 text-white rounded-lg
          hover:opacity-95 disabled:opacity-80"
      >
        {loading ? 'Updating...' : 'update listing'}
      </button>
    )
  }

  return (
    <button
      disabled={loading}
      className="uppercase p-3 bg-slate-700 text-white rounded-lg
          hover:opacity-95 disabled:opacity-80"
    >
      {loading ? 'Creating...' : 'create listing'}
    </button>
  )
}

export default ListingButton
