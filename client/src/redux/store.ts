import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import projectsSlice from './reducers/projectsSlice'
import projectSlice from './reducers/projectSlice'
import technologiesSlice from './reducers/technologiesSlice'
import authSlice from './reducers/authSlice'
import usersSlice from './reducers/usersSlice'

import { localStorageMiddleware } from './middlewares/localStorageMiddleware'

export const store = configureStore({
  reducer: {
    projectList: projectsSlice,
    technologyList: technologiesSlice,
    project: projectSlice,
    auth: authSlice,
    users: usersSlice
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
