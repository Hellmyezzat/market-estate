import React from 'react'

function Results() {
  return (
    <div className="flex-1">
      <h1 className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">
        Listing results:
      </h1>
      <div className="flex flex-wrap gap-4">
        <p className="text-xl text-slate-700">No listing found!</p>
        <p className="text-xl text-slate-700 text-center">Loading...</p>
        <div>Listing item</div>
        <button className="text-green-700 hover:underline p-7 text-center w-full">
          Show more
        </button>
      </div>
    </div>
  )
}

export default Results
