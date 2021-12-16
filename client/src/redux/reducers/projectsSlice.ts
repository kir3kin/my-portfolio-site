import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'

import { ShortProjectData } from '@interfaces/project.interface'
import { LoadingStatus } from '@interfaces/loading.interface'
import { Technology } from '@interfaces/technology.interface'

import { ProjectsAPI } from '../API/projectsAPI'
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

// async function
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
  }
})

// actions
export const {} = projectsSlice.actions

// selectors
type techsCheckType = (
  project: ShortProjectData,
  techs: string[]
) => boolean

const projectHaveAllTechs: techsCheckType = (project, techs) => {
  return techs.every(tech => {// does project have all techs?
    if (project.technologies) {
      return project.technologies.find(techItem => {
        return techItem.id === tech
      })
    } else return false
  })
}

export const makeSelectProjectsByTechs = () => {
  return createSelector(
    (state: RootState) => state.technologyList.chosens,// chosen technologies
    (state: RootState) => state.projectList.projects,// all projects
    (state: RootState) => state.projectList.status,// projects load status
    (chosens, projectList, projectStatus) => ({
      projects: projectList.filter(project => {// 
        return project.isHiden ?
          false : // if project hiden
          projectHaveAllTechs(project, chosens)
      }),
      status: projectStatus
    })
  )
}

export default projectsSlice.reducer