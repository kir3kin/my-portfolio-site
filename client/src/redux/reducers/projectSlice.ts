import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { Description, iDescInput, iInfoInput, Info, iProject, iShortDataInput, UpdatedShortData } from '@interfaces/project.interface'
import { LoadingStatus } from '@interfaces/loading.interface'

import { RootState } from '../store'
import { ProjectsAPI } from '../API/projects.API'
import { Technology } from '@interfaces/technology.interface'


const initialState: {
  data: iProject | null,
  status: LoadingStatus,
  error: string | undefined
} = {
  data: null,
  status: 'loading',
  error: undefined
}

export const getProject = createAsyncThunk(
  'project/fetchProjectById',
  async (id: string) => await ProjectsAPI.fetchProject(id)
)

// ====== Project's Short Data
export const updateProjectData = createAsyncThunk<
  UpdatedShortData | null, { id: string, input: iShortDataInput }
>(
  'project/updateShortData',
  async (data) => {
    const { id, input } = data
    return await ProjectsAPI.updateProjectShortData(id, input)
  }
)

// ====== Project's Techs
export const updateTechs = createAsyncThunk<
  Technology[] | undefined, { projectId: string, techIds: number[] }
>(
  'project/updateTechs',
  async (data) => {
    const { projectId, techIds } = data
    return await ProjectsAPI.updateProjectTechs(projectId, techIds)
  }
)


// ====== Project's Info
export const createInfo = createAsyncThunk<
  Info | null, {id: string, input: iInfoInput}
>(
  'project/createInfo',
  async (data) => {
    const { id, input } = data
    return await ProjectsAPI.createInfo(id, input)
  }
)

export const updateInfo = createAsyncThunk<
  Info | null, {id: string, input: iInfoInput}
>(
  'project/updateInfo',
  async (data) => {
    const { id, input } = data
    return await ProjectsAPI.updateInfo(id, input)
  }
)

export const deleteInfo = createAsyncThunk<
  string, string
>(
  'project/deleteInfo',
  async (id) => await ProjectsAPI.deleteInfo(id)
)


// ====== Info's Description
export const createDesc = createAsyncThunk<
  Description | null, {id: string, input: iDescInput}
>(
  'project/createDesc',
  async (data) => {
    const {id, input} = data
    return await ProjectsAPI.createDesc(id, input)
  }
)

export const updateDesc = createAsyncThunk<
  Description | null, {id: string, input: iDescInput}
>(
  'project/updateDesc',
  async (data) => {
    const { id, input } = data
    return await ProjectsAPI.updateDesc(id, input)
  }
)

export const deleteDesc = createAsyncThunk<
  Description | null, string
>(
  'project/deleteDesc',
  async (id) => await ProjectsAPI.deleteDesc(id)
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
      .addCase(updateProjectData.fulfilled, (state, action) => {
        if (action.payload && state.data) {
          state.data = { ...state.data, ...action.payload }
        }
      })
      .addCase(updateProjectData.rejected, (state, { error }) => {
        state.error = error.message
      })
      .addCase(createDesc.fulfilled, (state, action) => {
        const newDesc = action.payload ? action.payload : null
        if (state.data?.infos && newDesc) {
          state.data.infos.map((info, i, a) => {
            if (info.id === newDesc.projectInfoId) {
              if (info.descriptions) {
                a[i].descriptions = [ newDesc, ...info.descriptions ]
              } else {
                a[i].descriptions = [ newDesc ]
              }
            }
          })
        }
      })
      .addCase(updateDesc.fulfilled, (state, action) => {
        const updDesc = action.payload ? action.payload : null
        if (state.data?.infos && updDesc) {
          state.data.infos.map(info => {
            if (info.id === updDesc.projectInfoId) {
              info.descriptions?.map((desc, i, a) => {
                if (desc.id === updDesc.id) {
                  a[i] = updDesc
                }
              })
            }
          })
        }
      })
      .addCase(deleteDesc.fulfilled, (state, action) => {
        const delDesc = action.payload ? action.payload : null
        if (state.data?.infos && delDesc) {
          state.data.infos.map((info, i, a) => {
            if (info.id === delDesc.projectInfoId) {
              if (info.descriptions) {
                a[i].descriptions = info.descriptions.filter(desc => desc.id !== delDesc.id)
              }
            }
          })
        }
      })
      .addCase(createInfo.fulfilled, (state, action) => {
        const infos = state.data?.infos ? state.data.infos : []
        const newInfo = action.payload ? action.payload : ''
        
        if (state.data && newInfo) {
          state.data = {
            ...state.data, infos: [ newInfo, ...infos ]
          }
        }
      })
      .addCase(updateInfo.fulfilled, (state, action) => {
        state.data?.infos?.map((info, i, a) => {
          if (info.id === action.payload?.id) {
            a[i] = action.payload
          }
        })
      })
      .addCase(deleteInfo.fulfilled, (state, action) => {
        if (state.data?.infos) {
          state.data.infos = state.data?.infos?.filter(info => info.id !== action.payload)
        }
      })
      .addCase(updateTechs.fulfilled, (state, action) => {
        if (state.data) {
          state.data.technologies = action.payload
        }
      })
      // .addCase(createDesc.rejected, (state, { error }) => {
      //   state.error = error.message
      // })
  },
})

export const {} = projectSlice.actions

export const selectProjectInfo = (state: RootState) => ({
  project: state.project.data?.isHidden ? null : state.project.data,
  status: state.project.status
})

const sortArrayById = <T extends Info | Description>(arr: T[]): T[] => {
  return arr.slice().sort((a, b) => {
    return Number(b.id) - Number(a.id)
  })
}

// TODO: create EntityAdapter instead of all this s..t
export const selectSortedProjectInfo = (state: RootState) => {
  const projectData = {
    project: state.project.data,
    status: state.project.status
  }

  if (projectData.project && projectData.project.infos) {
    const newInfos: Info[] = projectData.project.infos.map(info => {
      if (info.descriptions) {
        const sortedDesc = sortArrayById(info.descriptions)
        return { ...info, descriptions: sortedDesc }
      } else return info
    })
    const sortedInfos = sortArrayById(newInfos)
    projectData.project = { ...projectData.project, infos: sortedInfos }
  }

  return projectData
}

export default projectSlice.reducer