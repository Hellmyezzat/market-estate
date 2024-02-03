import { DeleteAccount, ImageChange, SignOut } from '../components/Profile'
import useUpdateProfile from '../hooks/useUpdateProfile'

function Profile() {
  const {
    formData,
    setFormData,
    updateSuccess,
    handleChange,
    handleSubmit,
    currentUser,
    loading,
    error,
  } = useUpdateProfile()

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-semibold my-7">Profile</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <ImageChange
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
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
        <DeleteAccount />
        <SignOut />
      </div>
      {/* <p className="text-red-700">{error ? error : ''}</p> */}
      <p className="text-green-700">
        {updateSuccess ? 'User is updated successfully!' : ''}
      </p>
    </div>
  )
}

export default Profile
