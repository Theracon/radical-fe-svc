import { createSlice } from '@reduxjs/toolkit'

interface IAppState {
  loading: boolean
}

const initialState: IAppState = {
  loading: false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

export const { setLoading } = appSlice.actions

export default appSlice.reducer
