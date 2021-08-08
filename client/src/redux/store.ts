import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import projectsSlice from './projects/projectsSlice'
import descriptionstSlice from './projects/descriptionsSlice'

export const store = configureStore({
  reducer: {
    projects: projectsSlice,
    descriptions: descriptionstSlice,
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
