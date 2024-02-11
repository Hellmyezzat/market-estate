import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to={'/'}>
      <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
        <span className="text-slate-500">Helmy</span>
        <span className="text-slate-700">Estate</span>
      </h1>
    </Link>
  )
}

export default Logo