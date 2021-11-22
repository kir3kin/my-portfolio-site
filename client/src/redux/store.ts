import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import projectsSlice from './reducers/projectsSlice'
import projectSlice from './reducers/projectSlice'
import technologiesSlice from './reducers/technologiesSlice';
import { localStorageMiddleware } from '../services/localStorage.api';

export const store = configureStore({
  reducer: {
    projectList: projectsSlice,
    technologyList: technologiesSlice,
    project: projectSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
