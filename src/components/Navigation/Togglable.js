import React, { useState, useImperativeHandle } from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => ({ toggleVisibility }))

  if (visible)
    return (
      <div>
          <Button variant="contained" onClick={toggleVisibility}>
            Hide
          </Button>

        {props.children}
      </div>
    )

  return (
    <div>
      <Button variant="contained" onClick={toggleVisibility}>
        {props.buttonLabel}
      </Button>
    </div>
  )
})

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

Togglable.displayName = 'Togglable'

export default Togglable
