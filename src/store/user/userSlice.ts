import { createSlice } from '@reduxjs/toolkit'

interface IUserState {
  isLoggedIn: boolean
}

const initialState: IUserState = {
  isLoggedIn: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export default userSlice.reducer
