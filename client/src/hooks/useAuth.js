import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from '../redux/features/user/userSlice'

const useAuth = (apiEndpoint, successRedirect) => {
  const dispatch = useDispatch()
  const { error, loading } = useSelector((state) => state.user)

  const navigate = useNavigate()
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(signInStart())
      const res = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success === false) {
        dispatch(signInFailure(data.message))
        return
      }
      dispatch(signInSuccess(data))
      navigate(successRedirect)
    } catch (error) {
      dispatch(signInFailure(error))
    }
  }

  return {
    formData,
    error,
    loading,
    handleChange,
    handleSubmit,
  }
}

export default useAuth
