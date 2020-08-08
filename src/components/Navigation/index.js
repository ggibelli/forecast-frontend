import React from 'react'
import PropTypes from 'prop-types'
import Drawer from './Drawer'

const Navigation = ({ children }) => <Drawer>{children}</Drawer>

Navigation.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Navigation
