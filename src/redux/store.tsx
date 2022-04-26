import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from "redux-thunk"

import { rootReducers } from './root-reducer'

const milddlewares: any = [thunk]

if (process.env.NODE_ENV === "development") milddlewares.push(logger)

const composedEnhancers = compose(applyMiddleware(...milddlewares))

export const store = createStore(
  rootReducers, undefined, composedEnhancers
)