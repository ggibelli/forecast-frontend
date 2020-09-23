import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'
import HomePage from '../HomePage'
import SurfSpotDetail from '../SurfspotDetail'
import LoginForm from '../LoginForm'
import RegistrationForm from '../RegistrationForm'
import Map from '../Map'
import UserProfile from '../UserProfile'
import NewSpot from '../NewSpot'
import EditSpot from '../EditSpot'
import StarredSpots from '../StarredSpots'
import NotFound from '../NotFound'

const Routes = () => (
  <Switch>
    <Route path="/addspot" component={NewSpot} />
    <Route path="/surfspots/:id" component={SurfSpotDetail} />
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={RegistrationForm} />
    <Route path="/profile/:id" component={UserProfile} />
    <Route path="/edit/:id" component={EditSpot} />
    <Route path="/starred" component={StarredSpots} />
    <Route path="/map/:area/:id" component={Map} />
    <Route exact path="/" component={HomePage} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
