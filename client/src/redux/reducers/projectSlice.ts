import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { iDescInput, iInfoInput, iProject } from '@interfaces/project.interface'
import { LoadingStatus } from '@interfaces/loading.interface'

import { RootState } from '../store'
import { ProjectsAPI } from '../API/projects.API'


const initialState: {
  data: iProject | null,
  status: LoadingStatus,
  error: string | undefined
} = {
  data: null,
  status: 'idle',
  error: undefined
}

export const getProject = createAsyncThunk(
  'project/fetchProjectById',
  async (id: string) => await ProjectsAPI.fetchProject(id)
)

export const updateProjectData = createAsyncThunk(
  'project/updateData',
  async (id: string, data: any) => {
    await ProjectsAPI.updateProjectData(id, data)
  }
)

export const createDesc = createAsyncThunk<
  string, {id: string, input: iDescInput}
>(
  'project/createDesc',
  async (data) => {
    const {id, input} = data
    return await ProjectsAPI.createDesc(id, input)
  }
)

export const createInfo = createAsyncThunk<
  string, {id: string, input: iInfoInput}
>(
  'project/createInfo',
  async (data) => {
    const {id, input} = data
    return await ProjectsAPI.createInfo(id, input)
  }
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
      .addCase(updateProjectData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateProjectData.fulfilled, (state) => {
        state.status = 'idle'
      })
      .addCase(updateProjectData.rejected, (state, { error }) => {
        state.error = error.message
        state.status = 'failed'
      })
      .addCase(createDesc.rejected, (state, { error }) => {
        state.error = error.message
      })
      .addCase(createInfo.rejected, (state, { error }) => {
        state.error = error.message
      })
  },
})

export const {} = projectSlice.actions

export const selectProjectInfo = (state: RootState) => ({
  project: state.project.data?.isHiden ? null : state.project.data,
  status: state.project.status
})

export default projectSlice.reducer