import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import surfspotsReducer from './reducers/surfspotsReducer'
import notificationReducer from './reducers/notificationReducer'
import userReducer from './reducers/userReducer'
import spotDetailReducer from './reducers/spotDetailReducer'

const reducer = combineReducers({
  surfspots: surfspotsReducer,
  notification: notificationReducer,
  currentUser: userReducer,
  spotDetail: spotDetailReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
