import React from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <Navigation>{children}</Navigation>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
