import { User } from '@/types/user'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IUserState {
  userIsLoggedIn: boolean
  currentUser: User | null
}

const initialState: IUserState = {
  userIsLoggedIn: false,
  currentUser: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.userIsLoggedIn = action.payload
    },
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload
    }
  }
})

export const { setUserIsLoggedIn, setCurrentUser } = userSlice.actions

export default userSlice.reducer
