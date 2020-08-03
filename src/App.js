import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import storage from './utils/storage'
import { initializeSpots } from './reducers/surfspotsReducer'
import { login } from './reducers/userReducer'

import Routes from './components/Routes'
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeSpots())
    const loadUser = storage.loadUser()
    if (loadUser) {
      dispatch(login(loadUser))
    }
  }, [dispatch])

  return (
    <Router>
      <Routes />
    </Router>
  )
}

export default App
