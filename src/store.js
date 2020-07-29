import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import surfspotsReducer from './reducers/surfspotsReducer'
import notificationReducer from './reducers/notificationReducer'
import userReducer from './reducers/userReducer'
// import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  surfspots: surfspotsReducer,
  notification: notificationReducer,
  currentUser: userReducer,
  // users: userReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
