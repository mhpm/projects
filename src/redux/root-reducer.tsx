import { combineReducers } from 'redux'

import taskManagerReducer from './task-manager/taskReducer'

export const rootReducers = combineReducers({
  taskData: taskManagerReducer
})

export type RootState = ReturnType<typeof rootReducers>