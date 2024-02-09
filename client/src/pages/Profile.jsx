import { DeleteAccount, ImageChange, ProfileForm, ShowListings, SignOut } from '../components/Profile'
import useUpdateProfile from '../hooks/useUpdateProfile'
import { Link } from 'react-router-dom'

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
    <div className="p-3 max-w-lg mx-auto flex flex-col gap-4">
      <h1 className="text-center text-3xl font-semibold my-7">Profile</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <ImageChange
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
        <ProfileForm handleChange={handleChange} loading={loading} />
        <Link
          to={'/create-listing'}
          className="bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95"
        >
          Create Listing
        </Link>
      </form>
      <div className="flex justify-between mt-5">
        <DeleteAccount />
        <SignOut />
      </div>
      {/* <p className="text-red-700">{error ? error : ''}</p> */}
      <p className="text-green-700">
        {updateSuccess ? 'User is updated successfully!' : ''}
      </p>
      <ShowListings />
    </div>
  )
}

export default Profile
