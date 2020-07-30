import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Notification from './components/Notification'
import ContinentList from './components/ContinentList'
import CountryList from './components/CountryList'
import LoginForm from './components/LoginForm'
import RegionList from './components/RegionList'
import SurfspotDetail from './components/SurfspotDetail'
import SurfspotList from './components/SurfspotsList'
import storage from './utils/storage'
import { setNotification } from './reducers/notificationReducer'
import { initializeSpots } from './reducers/surfspotsReducer'
import { login, logout } from './reducers/userReducer'

const App = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeSpots())
    const loadUser = storage.loadUser()
    if (loadUser) {
      dispatch(login(loadUser))
    }
  }, [dispatch])

  const handleLogout = () => {
    dispatch(logout())
    storage.logoutUser()
  }

  if (!user) {
    return (
      <div>
        <h2>Login to application</h2>

        <Notification />
        <LoginForm />
      </div>
    )
  }

  const padding = {
    padding: 5,
  }

  const navStyle = {
    margin: 10,
    padding: 10,
    backgroundColor: 'lightgray',
  }

  return (
    <Router>
      <div style={navStyle}>
        <Link style={padding} to="/">
          All the spots
        </Link>
        <span>
          {user.name} logged in <button onClick={handleLogout}>logout</button>
        </span>
      </div>

      <h2>Surf Forecast App</h2>

      <Notification />

      <Switch>
        <Route path="/continents/:id">
          <ContinentList />
        </Route>
        <Route path="/countries/:id">
          <CountryList />
        </Route>
        <Route path="/regions/:id">
          <RegionList />
        </Route>
        <Route path="/countries/:id">
          <CountryList />
        </Route>
        <Route path="/surfspots/:id">
          <SurfspotDetail />
        </Route>
        <Route path="/">
          <SurfspotList />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
