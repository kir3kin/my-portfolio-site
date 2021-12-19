import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { iProject } from '@interfaces/project.interface'
import { LoadingStatus } from '@interfaces/loading.interface'

import { RootState } from '../store'
import { ProjectsAPI } from '../API/projects.API'


const initialState: {
  data: iProject | null,
  status: LoadingStatus
} = {
  data: null,
  status: 'idle'
}

export const getProject = createAsyncThunk(
  'project/fetchProjectById',
  async (id: string) => await ProjectsAPI.fetchProject(id)
)

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProject.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getProject.fulfilled, (state, action) => {
        state.status = 'idle'
        state.data = action.payload
      })
      .addCase(getProject.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const {} = projectSlice.actions

export const selectProjectInfo = (state: RootState) => ({
  project: state.project.data?.isHiden ? null : state.project.data,
  status: state.project.status
})

export default projectSlice.reducer