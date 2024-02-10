import React from 'react'

function Wrong({error}) {
  return (
    <>
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!</p>
      )}
    </>
  )
}

export default Wrong