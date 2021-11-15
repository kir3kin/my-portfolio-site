import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'
import { ShortProjectData } from '../../interfaces/project.interface';
import { LoadingStatus } from '../../interfaces/loading.interface'
import { Technology } from '../../interfaces/technology.interface';
import { ProjectsAPI } from '../API/projectsAPI';
import { RootState } from '../store'


interface iProjectListState {
  projects: ShortProjectData[],
  technologies: Technology[],
  status: LoadingStatus
}

const initialState: iProjectListState = {
  projects: [],
  technologies: [],
  status: "empty"
}

export const getProjects = createAsyncThunk(
  'projectList/fetchProjects',
  async () => await ProjectsAPI.fetchProjects()
)

export const projectsSlice = createSlice({
  name: 'projectList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.status = 'loaded'
        state.projects = action.payload
      })
      .addCase(getProjects.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const {} = projectsSlice.actions

export const makeSelectProjectsByTechs = () => {
  return createSelector(
    (state: RootState) => state.technologyList.chosens,
    (state: RootState) => state.projectList.projects,
    (chosens, projectList) => {
      return projectList.filter(project => {
        return chosens.every(chosen => {
          return project.technologies.find(techItem => {
            return techItem.id === chosen
          })
        })
      })
    }
  )
}

export const selectProjectList = (state: RootState) => state.projectList.projects
export const selectProjectListStatus = (state: RootState) => state.projectList.status

export default projectsSlice.reducer