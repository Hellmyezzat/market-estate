import React from 'react'
import ContainerListing from './ContainerListing'

function ImageUploadSection() {
  return (
    <>
    <ContainerListing>

      <p className="font-semibold">
        Images:
        <span className="font-normal to-gray-600 ml-2">
          the first image will be cover (max 6)
        </span>
      </p>
      <div className="flex gap-4">
        <input
          className="p-3 border border-r-gray-300 rounded w-full"
          type="file"
          id="images"
          accept="image/*"
          multiple
        />
        <button
          className="p-3 text-green-700 border border-green-700
              rounded uppercase hover:shadow-lg disabled:opacity-80"
        >
          Upload
        </button>
      </div>
    </ContainerListing>
    </>
  )
}

export default ImageUploadSection
