import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Notification from './components/Notification'
import ContinentList from './components/ContinentList'
import CountryList from './components/CountryList'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import RegionList from './components/RegionList'
import SurfspotDetail from './components/SurfspotDetail'
import SpotList from './components/SpotList'
import storage from './utils/storage'
import { setNotification } from './reducers/notificationReducer'
import { initializeSpots } from './reducers/surfspotsReducer'
import { login, logout } from './reducers/userReducer'
import Drawer from './components/Drawer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  const user = useSelector((state) => state.currentUser)
  const dispatch = useDispatch()
  const loc = useSelector((state) => state.SpotDetail)
  console.log(loc)

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

  console.log(user)





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
      
      <Drawer />

      <Footer />
        

        <h2>Surf Forecast App</h2>

        <Notification />
        
    </Router>
  )
}

export default App
