import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import SurfSpotDetail from '../SurfspotDetail'
import LoginForm from '../LoginForm'
import RegistrationForm from '../RegistrationForm'
import Homepage from '../Homepage'

// cambio modo di caricare componente al route cosi che prenda :name o qualcosa del genere props e cambio anche path

const Routes = () => (
  <Switch>
    <Route path="/surfspots/:id" component={SurfSpotDetail} />
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={RegistrationForm} />
    <Route path={['/:area/:id', '/']} component={Homepage} />
  </Switch>
)

export default Routes
