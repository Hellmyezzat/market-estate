import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from '../redux/features/user/userSlice'

// Custom hook for handling form state and submission logic
const useUpdateProfile = () => {
  const dispatch = useDispatch()
  const { currentUser, loading, error } = useSelector((state) => state.user)
  const [formData, setFormData] = useState({})
  const [updateSuccess, setUpdateSuccess] = useState(false)

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

  return {
    formData,
    setFormData,
    updateSuccess,
    handleChange,
    handleSubmit,
    currentUser,
    loading,
    error,
  }
}

export default useUpdateProfile
