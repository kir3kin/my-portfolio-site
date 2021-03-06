import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoadingStatus } from '../../interfaces/loading.interface'
import { ChosensType, Technology } from '../../interfaces/technology.interface';
import { ProjectsAPI } from '../API/projectsAPI';
import { RootState } from '../store'

interface iTechnologyListState {
  technologies: Technology[],
  status: LoadingStatus,
  chosens: ChosensType
}

const initialState: iTechnologyListState = {
  technologies: [],
  status: "empty",
  chosens: []
}

export const getTechnologies = createAsyncThunk(
  'technologyList/fetchTechnologies',
  async () => await ProjectsAPI.fetchTechnologies()
)

export const technologiesSlice = createSlice({
  name: 'projectList',
  initialState,
  reducers: {
    setDefaultChosen: (state, action: PayloadAction<string[]>) => {
      state.chosens = action.payload
    },
    toggleTech: (state, action: PayloadAction<string>) => {
      const temp = state.chosens.findIndex(chosen => chosen === action.payload)

      if (temp >= 0)
        state.chosens = state.chosens.filter(chosen => chosen !== action.payload)
      else
        state.chosens.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTechnologies.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getTechnologies.fulfilled, (state, action) => {
        state.status = 'loaded'
        state.technologies = action.payload
      })
      .addCase(getTechnologies.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const { toggleTech, setDefaultChosen } = technologiesSlice.actions

// select only visible techs
export const selectTechnologyList = (state: RootState) => ({
  techs: state.technologyList.technologies
  .filter(tech => !tech.isHiden)// get only visible techs
  .sort((tech1, tech2) => {// sort by Tech Type
    return Number(tech1.techType.id) - Number(tech2.techType.id)
  }),
  status: state.technologyList.status
})

// select all techs
export const selectFullTechnologyList = (state: RootState) => state.technologyList.technologies
export const selectChosen = (state: RootState) => state.technologyList.chosens

export default technologiesSlice.reducer