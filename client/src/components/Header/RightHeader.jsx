import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function RightHeader() {
  const { currentUser } = useSelector((state) => state.user)
  return (
    <ul className="flex gap-4 items-center">
      <Link to={'/'}>
        <li className="hidden sm:inline text-slate-700 hover:underline">
          Home
        </li>
      </Link>
      <Link to={'/about'}>
        <li className="hidden sm:inline text-slate-700 hover:underline">
          About
        </li>
      </Link>

      <Link to={'/profile'}>
        {currentUser ? (
          <img
            src={currentUser.avatar}
            className="h-9 w-9 rounded-full object-cover"
          />
        ) : (
          <li className=" sm:inline text-slate-700 hover:underline">Sign in</li>
        )}
      </Link>
    </ul>
  )
}

export default RightHeader