import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import surfspotsReducer from './reducers/nestedSurfspots'
import notificationReducer from './reducers/notification'
import userReducer from './reducers/user'
import spotDetailReducer from './reducers/spotDetail'
import spotSearchReducer from './reducers/allSpotsSearch'
import forecastReducer from './reducers/forecastSpot'
import mapsReducer from './reducers/maps'

const reducer = combineReducers({
  surfspots: surfspotsReducer,
  notification: notificationReducer,
  currentUser: userReducer,
  spotDetail: spotDetailReducer,
  spotsSearch: spotSearchReducer,
  forecastSpot: forecastReducer,
  mapToShow: mapsReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
