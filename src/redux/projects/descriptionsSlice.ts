import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface iProjectDescriptions {
  [key: string]: boolean
}
const initialState: iProjectDescriptions = {}

export const descriptionsSlice = createSlice({
  name: 'descriptions',
  initialState,
  reducers: {
		registerProjectDescription(
      state,
      action: PayloadAction<string>
    ) {
      state = {
        ...state,
        ...{[action.payload]: false}
      }
    },
		toggleProjectDescription(
			state,
			action: PayloadAction<string>
		) {
			state[action.payload] = !state[action.payload]
		}
	},
})

export const { registerProjectDescription, toggleProjectDescription } = descriptionsSlice.actions

export const selectDescriptionStatus = () => {
  return createSelector(
    (state: RootState) => state.descriptions,
    (_: any, projectName: string) => projectName,
    (descriptions, projectName) => descriptions[projectName]
  )
}


export default descriptionsSlice.reducer