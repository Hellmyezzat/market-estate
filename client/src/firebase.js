// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'market-estate-9b0fd.firebaseapp.com',
  projectId: 'market-estate-9b0fd',
  storageBucket: 'market-estate-9b0fd.appspot.com',
  messagingSenderId: '675972930570',
  appId: '1:675972930570:web:24fd8326ac8b7f7faf93f3',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
