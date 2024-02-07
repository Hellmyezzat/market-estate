import React from 'react'

function CreateListingButton({loading}) {
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

export default CreateListingButton