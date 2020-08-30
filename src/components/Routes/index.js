import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import SurfSpotDetail from '../SurfspotDetail'
import LoginForm from '../LoginForm'
import RegistrationForm from '../RegistrationForm'
import Map from '../Map'
import UserProfile from '../UserProfile'

const Routes = () => (
  <Switch>
    <Route path="/surfspots/:id" component={SurfSpotDetail} />
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={RegistrationForm} />
    <Route path="/profile/:id" component={UserProfile} />
    <Route path={['/:area/:id', '/']} component={Map} />
  </Switch>
)

export default Routes
