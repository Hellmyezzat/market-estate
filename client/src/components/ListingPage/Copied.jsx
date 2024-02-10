import React, { useState } from 'react'
import { FaShare } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'

function Copied() {
      const [copied, setCopied] = useState(false)
    return (
      <div
        onClick={() => {
          navigator.clipboard.writeText(window.location.href)
          setCopied(true)
          setTimeout(() => {
            setCopied(false)
          }, 2000)
        }}
        className="fixed top-[13%] right-[3%] z-10 bg-slate-100 border w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
      >
        {copied ? (
          <TiTick className="size-8 text-green-700" />
        ) : (
          <FaShare className="size-4 text-slate-500" />
        )}
      </div>
    )
  }

export default Copied