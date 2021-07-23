import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { iProjects } from '../interfaces/projectsInterface'
import { RootState } from './store'

interface iProjectsState {
  projects: any
}
const initialState: iProjectsState = {
  projects: {}
}

export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    changeInput(
      state,
      action: PayloadAction
    ) {
      state.projects = {
        ...state.projects
      }
    },
  }
})

export const { changeInput } = projectSlice.actions

export const selectState = (state: RootState) => state.project

export default projectSlice.reducer