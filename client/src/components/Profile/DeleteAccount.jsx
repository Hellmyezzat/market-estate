import { useDispatch, useSelector } from 'react-redux'
import { deleteUserFailure, deleteUserStart, deleteUserSuccess } from '../../redux/features/user/userSlice'

function DeleteAccount() {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(state => state.user)
     const handleDeleteUser = async () => {
       try {
         dispatch(deleteUserStart())
         const res = await fetch(`/api/user/delete/${currentUser._id}`, {
           method: 'DELETE',
         })
         const data = await res.json()
         if (data.success === false) {
           dispatch(deleteUserFailure(data.message))
           return
         }
         dispatch(deleteUserSuccess())
       } catch (error) {
         dispatch(deleteUserFailure(error))
       }
     }
  return (
    <span onClick={handleDeleteUser} className="text-red-700 cursor-pointer">
      Delete account
    </span>
  )
}

export default DeleteAccount