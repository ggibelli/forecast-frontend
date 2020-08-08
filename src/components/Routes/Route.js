import React from 'react'
import PropTypes from 'prop-types'
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

RouteWrapper.propTypes = {
  component: PropTypes.func.isRequired,
}

export default RouteWrapper
