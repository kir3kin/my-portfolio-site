import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthAPI } from '@redux/API/auth.API'

import { AppDispatch, RootState } from '../store'

import { iLoginInput } from '@interfaces/auth.interface'
import { LoadingStatus } from '@interfaces/loading.interface'

const initialState: {
  token: string,
  isAuth: boolean,
  error: string | undefined,
  status: LoadingStatus
} = {
  token: '',
  isAuth: false,
  error: undefined,
  status: 'idle'
}

export const checkAuth = createAsyncThunk<
  boolean, string, { dispatch: AppDispatch }
>(
  'auth/checkAuth',
  async (token, { dispatch }) => {
    const isValid = await AuthAPI.checkToken(token)
    if (isValid) dispatch(saveToken(token))
    return isValid
  }
)

export const userLogin = createAsyncThunk(
  'auth/userLogin',
  async ( userData: iLoginInput ) => await AuthAPI.logIn(userData)
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuth = action.payload
        state.status = 'idle'
      })
      .addCase(checkAuth.rejected, (state, { error }) => {
        state.error = error.message
        state.status = 'failed'
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.token = action.payload
        state.isAuth = true
        state.error = undefined
      })
      .addCase(userLogin.rejected, (state, { error }) => {
        state.token = ''
        state.isAuth = false
        state.error = error.message
      })
  },
})

export const { saveToken } = authSlice.actions

export const selectUserInfo = (state: RootState) => ({
  token: state.auth.token,
  isAuth: state.auth.isAuth,
  error: state.auth.error,
  status: state.auth.status
})

export default authSlice.reducer