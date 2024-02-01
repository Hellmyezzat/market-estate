import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import { app } from '../firebase'

function ImageUploading() {
 
  return (
    <>
     
      <p>{uploadPercentage}</p>
      <p>{uploadError}</p>
    </>
  )
}

export default ImageUploading
