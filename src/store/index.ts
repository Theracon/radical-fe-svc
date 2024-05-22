import { configureStore } from '@reduxjs/toolkit'
import appReducer from './app/appSlice'
import userReducer from './user/userSlice'
import bookReducer from './book/bookSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    book: bookReducer
  }
})

// Export the return type of the getState and dispath methods
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
