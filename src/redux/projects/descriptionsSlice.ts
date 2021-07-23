import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
export const selectProjectsStatus = (state: RootState) => state.descriptions
export default descriptionsSlice.reducer