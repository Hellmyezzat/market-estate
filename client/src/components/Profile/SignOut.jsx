import { useDispatch } from 'react-redux'
import { signOutUserFailure, signOutUserStart, signOutUserSuccess } from '../../redux/features/user/userSlice'

function SignOut() {
    const dispatch = useDispatch()
      const handleSignOut = async () => {
        try {
          dispatch(signOutUserStart())
          const res = await fetch('/api/auth/signout')
          const data = await res.json()
          if (data.success === false) {
            dispatch(signOutUserFailure(data.message))
            return
          }
          dispatch(signOutUserSuccess())
        } catch (error) {
          dispatch(signOutUserFailure(error))
        }
      }
  return (
    <span onClick={handleSignOut} className="text-white bg-black p-3 rounded-lg cursor-pointer">
      Sign out
    </span>
  )
}

export default SignOut