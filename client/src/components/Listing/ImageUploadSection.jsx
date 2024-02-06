import { useState } from 'react'
import Shadow from './Shadow'
import ShowUploadImages from './ShowUploadImages'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import { app } from '../../firebase'

function ImageUploadSection({ listingData, setListingData }) {
  const [files, setFiles] = useState([])
  const [uploading, setUpLoading] = useState(false)
  const [imageUploadError, setImageUploadError] = useState(false)

  const handleImageSubmit = () => {
    if (files.length > 0 && files.length + listingData.imageUrls.length <= 6) {
      setUpLoading(true)
      const promises = []

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]))
      }
      Promise.all(promises)
        .then((urls) => {
          setListingData({
            ...listingData,
            imageUrls: listingData.imageUrls.concat(urls),
          })
          setImageUploadError(false)
          setUpLoading(false)
        })
        .catch((err) => {
          setImageUploadError('Image upload failed (2 mb max per image)')
        })
    } else {
      setImageUploadError('You can only upload 6 images per listing')
    }
  }

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app)
      const fileName = new Date().getTime() + file.name
      const storageRef = ref(storage, fileName)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log(`Upload is ${progress} % done.`)
        },
        (error) => {
          reject(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL)
          })
        }
      )
    })
  }

  return (
    <>
      <Shadow>
        <p className="font-semibold">
          Images:
          <span className="font-normal to-gray-600 ml-2">
            the first image will be cover (max 6)
          </span>
        </p>
        <div className="flex gap-4">
          <input
            onChange={(e) => setFiles(e.target.files)}
            className="p-3 border border-r-gray-300 rounded w-full"
            type="file"
            id="images"
            accept="image/*"
            multiple
          />
          <button
            onClick={handleImageSubmit}
            type="button"
            className={
              'p-3 border text-green-700 border-green-700 rounded uppercase hover:shadow-lg'
            }
            disabled={uploading}
          >
            {uploading ? 'Uploading...' : 'upload'}
          </button>
        </div>
        <p className="text-red-700 text-sm">
          {imageUploadError && imageUploadError}
        </p>
      </Shadow>
      <ShowUploadImages
        listingData={listingData}
        setListingData={setListingData}
      />
    </>
  )
}

export default ImageUploadSection
