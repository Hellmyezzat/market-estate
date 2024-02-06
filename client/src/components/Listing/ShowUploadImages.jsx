import Shadow from './Shadow'

function ShowUploadImages({ listingData, setListingData }) {
  const handleRemoveImage = (index) => {
    setListingData({
      ...listingData,
      imageUrls: listingData.imageUrls.filter((_, i) => i !== index),
    })
  }

  return (
    <>
      {listingData.imageUrls.length > 0 && (
        <Shadow>
          {listingData.imageUrls.map((url, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 border rounded-lg my-2"
            >
              <img
                src={url}
                alt=""
                className="w-20 h-20 object-cover rounded-lg"
              />
              <button
                onClick={() => handleRemoveImage(index)}
                type="button"
                className="bg-red-700 text-white py-2 px-4 rounded-md"
              >
                Delete
              </button>
            </div>
          ))}
        </Shadow>
      )}
    </>
  )
}

export default ShowUploadImages
