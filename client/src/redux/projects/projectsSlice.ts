import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { iProjects, projectsStatusType } from '../../interfaces/projects'
import { fetchProjects } from './projectsAPI';
import { RootState } from '../store'

interface iProjectsState {
  data: iProjects
  status: projectsStatusType
}
const initialState: iProjectsState = {
  data: {},
  status: "empty"
}

export const getProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    const response = await fetchProjects()
    return response.data
  }
)

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.status = 'loaded'
        state.data = action.payload
      })
      .addCase(getProjects.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const {} = projectsSlice.actions
export const selectProjects = (state: RootState) => state.projects.data
export const selectProjectsStatus = (state: RootState) => state.projects.status

export default projectsSlice.reducer