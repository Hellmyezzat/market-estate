import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import { app } from '../firebase'
import {
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from '../redux/features/user/userSlice'

function Profile() {
  const dispatch = useDispatch()
  const { currentUser, loading, error } = useSelector((state) => state.user)
  const fileRef = useRef(null)
  const [formData, setFormData] = useState({})
  const [file, setFile] = useState(undefined)
  const [uploadPercentage, setUploadPercentage] = useState(0)
  const [uploadError, setUploadError] = useState(false)
  const [updateSuccess, setUpdateSuccess] = useState(false)
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
          setFormData({ ...formData, avatar: downloadURL })
        })
      }
    )
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(updateUserStart())
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success === false) {
        dispatch(updateUserFailure(data.message))
      }
      dispatch(updateUserSuccess(data))
      setUpdateSuccess(true)
    } catch (error) {
      dispatch(updateUserFailure(error))
    }
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-semibold my-7">Profile</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          ref={fileRef}
          hidden
          onChange={(e) => setFile(e.target.files[0])}
        />
        <img
          src={formData?.avatar || currentUser.avatar}
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

        <input
          className="border p-3 rounded-lg"
          id="username"
          type="text"
          placeholder="username"
          defaultValue={currentUser.username}
          onChange={handleChange}
        />
        <input
          className="border p-3 rounded-lg"
          id="email"
          type="email"
          placeholder="email"
          defaultValue={currentUser.email}
          onChange={handleChange}
        />
        <input
          className="border p-3 rounded-lg"
          id="password"
          type="password"
          placeholder="password"
          defaultValue={currentUser.password}
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white rounded-lg p-3
                 uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? 'Loading...' : 'Update'}
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
      <p className="text-red-700">{error ? error : ''}</p>
      <p className="text-green-700">
        {updateSuccess ? 'User is updated successfully!' : ''}
      </p>
    </div>
  )
}

export default Profile
