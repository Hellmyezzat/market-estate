import React from 'react'
import { useSelector } from 'react-redux'

function ProfileForm({ handleChange, loading }) {
  const { currentUser } = useSelector((state) => state.user)
  return (
    <>
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
    </>
  )
}

export default ProfileForm