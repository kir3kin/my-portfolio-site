import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'

import { iMainProjectData, iProject, ShortProjectData } from '@interfaces/project.interface'
import { LoadingStatus } from '@interfaces/loading.interface'
import { Technology } from '@interfaces/technology.interface'

import { ProjectsAPI } from '../API/projects.API'
import { RootState } from '../store'

const initialState: {
  projects: ShortProjectData[],
  technologies: Technology[],
  status: LoadingStatus,
  mainProjectsData: iMainProjectData[]
} = {
  projects: [],
  technologies: [],
  status: 'idle',
  mainProjectsData: []
}


export const getProjects = createAsyncThunk(
  'projectList/fetchProjects',
  async () => await ProjectsAPI.fetchProjects()
)

export const getProjectsMainData = createAsyncThunk(
  'projectList/fetchProjectsMainData',
  async () => await ProjectsAPI.fetchProjectsMainData()
)

export const createProject = createAsyncThunk(
  'projectList/createProject',
  async (title: string) => await ProjectsAPI.createProject(title)
)

export const removeProject = createAsyncThunk(
  'projectList/removeProject',
  async (id: string) => await ProjectsAPI.removeProject(id)
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
        state.status = 'idle'
        state.projects = action.payload
      })
      .addCase(getProjects.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(getProjectsMainData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getProjectsMainData.fulfilled, (state, action) => {
        state.status = 'idle'
        state.mainProjectsData = action.payload
      })
      .addCase(getProjectsMainData.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(createProject.fulfilled, (state, action) => {
        if (action.payload)
          state.mainProjectsData = [ ...state.mainProjectsData, action.payload ]
      })
      .addCase(removeProject.fulfilled, (state, action) => {
        if (action.payload)
          state.mainProjectsData = state.mainProjectsData.filter(data => data.id !== action.payload?.id)
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


const sortProjectByOrder = <T extends ShortProjectData>(projects: T[]): T[] => {
  const arrForSort = [ ...projects ]
  arrForSort.sort((a,b) => Number(a.showOrder) - Number(b.showOrder))
  return arrForSort
}

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
    (state: RootState) => sortProjectByOrder(state.projectList.projects),// all projects
    (state: RootState) => state.projectList.status,// projects load status
    (chosens, projectList, projectStatus) => ({
      projects: projectList.filter(project => {
        return project.isHidden ?
          false : // if project hiden
          projectHaveAllTechs(project, chosens)
      }),
      status: projectStatus
    })
  )
}

export const selectProjectsData = (state: RootState) => ({
  projects: state.projectList.projects,
  status: state.projectList.status
})

export const selectProjectsMainData = (state: RootState) => ({
  projects: state.projectList.mainProjectsData,
  status: state.projectList.status
})

export default projectsSlice.reducer