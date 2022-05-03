import { combineReducers } from 'redux'

import taskManagerReducer from './task-manager/taskReducer'

export const rootReducers = combineReducers({
  taskManagerData: taskManagerReducer
})

export type RootState = ReturnType<typeof rootReducers>