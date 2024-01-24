import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useFormHandler = (apiEndpoint, successRedirect) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const res = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success === false) {
        setLoading(false)
        setError(data.message)
        return
      }
      setLoading(false)
      setError(null)
      navigate(successRedirect)
    } catch (error) {
      setLoading(false)
      setError(error.message)
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

export default useFormHandler
