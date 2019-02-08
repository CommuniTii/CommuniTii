import {
  combineReducers,
  applyMiddleware,
  compose,
  createStore,
  Middleware,
  Store,
  StoreEnhancer
} from "redux"

import reducers from "../reducers"

function initStore<Store>(preloadedState: any = {}) {
  const middlewares: Middleware[] = []
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers: StoreEnhancer[] = [middlewareEnhancer]

  const rootReducer = combineReducers(reducers)

  return createStore(rootReducer, preloadedState, compose(...enhancers))
}

export default initStore
