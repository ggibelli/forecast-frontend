import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import surfspotsReducer from '../reducers/nestedSurfspots'
import notificationReducer from '../reducers/notification'
import loginReducer from '../reducers/login'
import spotDetailReducer from '../reducers/spotDetail'
import spotSearchReducer from '../reducers/allSpotsSearch'
import forecastReducer from '../reducers/forecastSpot'
import mapsReducer from '../reducers/maps'
import userReducer from '../reducers/userDetail'

const reducer = combineReducers({
  surfspots: surfspotsReducer,
  notification: notificationReducer,
  currentUser: loginReducer,
  spotDetail: spotDetailReducer,
  spotsSearch: spotSearchReducer,
  forecastSpot: forecastReducer,
  mapToShow: mapsReducer,
  userProfile: userReducer,
})

const render = (
  ui,
  { initialState, store = createStore(reducer, initialState), ...options } = {},
) => {
  const utils = rtlRender(<Provider store={store}>{ui}</Provider>, options)

  return utils
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
