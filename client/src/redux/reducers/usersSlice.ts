import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UsersAPI } from '@redux/API/users.API'

import { RootState } from '../store'
import { User } from '@interfaces/auth.interface'
import { LoadingStatus } from '@interfaces/loading.interface'

const initialState: {
	status: LoadingStatus,
	data: User[]
} = {
	status: 'idle',
	data: []
}

export const getUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => await UsersAPI.fetchUsers()
)


export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
	extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'idle'
        state.data = action.payload
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export const { } = usersSlice.actions

export const selectUsersData = (state: RootState) => ({
	users: state.users.data,
	status: state.users.status
})

export default usersSlice.reducer