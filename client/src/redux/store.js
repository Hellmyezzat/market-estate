import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice' // Update the path to your userSlice

import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

//  Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
})

// Configuration for redux-persist storage
const persistConfig = {
  key: 'root', // Primary key for persisting the state
  storage, // Type of storage used (e.g., localStorage or sessionStorage)
  version: 1, // Version to trigger rehydration when changes occur
}

// Create a new reducer using redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Configure the Redux store
export const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), // Ignore serializable check for Redux Toolkit
})

// Create a persistor for the store
export const persistor = persistStore(store)

// // You can also use getState() directly to get the current state
// console.log('Current state:', store.getState())

// // Use subscribe to monitor changes in the state
// store.subscribe(() => {
//   console.log('State updated:', store.getState())
// })
