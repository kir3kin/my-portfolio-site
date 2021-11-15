import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoadingStatus } from '../../interfaces/loading.interface'
import { Technology } from '../../interfaces/technology.interface';
import { ProjectsAPI } from '../API/projectsAPI';
import { RootState } from '../store'


interface iTechnologyListState {
  technologies: Technology[],
  status: LoadingStatus,
  chosens: string[]
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
    toggleTech: (state, action: PayloadAction<string>) => {
      const temp = state.chosens.findIndex(chosen => chosen === action.payload)

      if (temp >= 0) {
        state.chosens = state.chosens.filter(chosen => chosen !== action.payload)
      } else state.chosens.push(action.payload)
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

export const { toggleTech } = technologiesSlice.actions
export const selectChosen = (state: RootState) => state.technologyList.chosens


export const selectTechnologyList = (state: RootState) => state.technologyList.technologies
export const selectTechnologyListStatus = (state: RootState) => state.technologyList.status

export default technologiesSlice.reducer