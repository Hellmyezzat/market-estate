import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { app } from '../../firebase'
import { updateAvatar } from '../../redux/features/user/userSlice'

function ImageChange({ formData, setFormData, handleChange }) {
  const dispatch = useDispatch()
  const { avatar } = useSelector((state) => state.user.currentUser || {})
  const fileRef = useRef(null)
  const [file, setFile] = useState(undefined)
  const [uploadError, setUploadError] = useState(false)
  const [uploadPercentage, setUploadPercentage] = useState(0)
  
  useEffect(() => {
    if (file) {
      handleFileUpload(file)
    }
  }, [file])

  const handleFileUpload = (file) => {
    const storage = getStorage(app)
    const fileName = new Date().getTime() + file.name
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setUploadPercentage(Math.round(progress))
      },
      (error) => {
        setUploadError(true)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          dispatch(updateAvatar(downloadURL))
          setFormData((prevData) => ({ ...prevData, avatar: downloadURL }))
        })
      }
    )
  }
  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={fileRef}
        hidden
        onChange={(e) => {
          setFile(e.target.files[0])
          handleChange(e)
        }}
      />
      <img
        src={avatar || formData.avatar}
        alt="profile"
        onClick={() => fileRef.current.click()}
        className="rounded-full self-center mt-2 h-24 w-24 object-cover cursor-pointer"
      />
      <p className="text-sm self-center">
        {uploadError ? (
          <span className="text-red-700">
            Error Image upload (image must be less than 2 mb)
          </span>
        ) : uploadPercentage > 0 && uploadPercentage < 100 ? (
          <span className="text-slate-700">{`Uploading ${uploadPercentage} %`}</span>
        ) : uploadPercentage === 100 ? (
          <span className="text-green-700">Successfully uploaded!</span>
        ) : (
          ''
        )}
      </p>
    </>
  )
}

export default ImageChange
