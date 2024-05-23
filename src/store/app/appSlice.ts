import { createSlice } from '@reduxjs/toolkit'

interface IAppState {
  loading: boolean
  cooling: boolean
  requestCount: number
  lastRequestTimeStamp: Date | undefined
}

const initialState: IAppState = {
  loading: false,
  cooling: false,
  lastRequestTimeStamp: undefined,
  requestCount: 0
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setCooling: (state, action) => {
      state.cooling = action.payload
    },
    setRequestCount: (state, action) => {
      state.requestCount = action.payload
    },
    setLastRequestTimeStamp: (state, action) => {
      state.lastRequestTimeStamp = action.payload
    }
  }
})

export const { setLoading, setCooling, setRequestCount, setLastRequestTimeStamp } = appSlice.actions

export default appSlice.reducer
