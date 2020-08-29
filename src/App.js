import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import storage from './utils/storage'
import { initializeSpots } from './reducers/nestedSurfspots'
import { initializeSearch } from './reducers/allSpotsSearch'
import { login } from './reducers/login'

import Routes from './components/Routes'
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeSpots())
    dispatch(initializeSearch())
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
