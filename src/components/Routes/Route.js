import React from 'react'

import { Route } from 'react-router-dom'

import Layout from '../Layout'

const RouteWrapper = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
)

export default RouteWrapper
