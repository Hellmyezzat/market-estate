import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice' 


import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

//  Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
})
// Configuration for redux-persist storage
const persistConfig = {
  key: 'root',
  storage, 
  version: 1,
}
// Create a new reducer using redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), // Ignore serializable check for Redux Toolkit
})
// Create a persistor for the store
export const persistor = persistStore(store)


