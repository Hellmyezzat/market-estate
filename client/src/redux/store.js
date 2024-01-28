import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

// You can also use getState() directly to get the current state
console.log('Current state:', store.getState())

// Use subscribe to monitor changes in the state
store.subscribe(() => {
  console.log('State updated:', store.getState())
})
