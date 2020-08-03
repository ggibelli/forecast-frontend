import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <Navigation>{children}</Navigation>
    <Footer />
  </>
)

export default Layout
