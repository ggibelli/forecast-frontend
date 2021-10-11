import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const SimpleTextField = ({ state, id, label, helperText }) => (
  <TextField
    {...state}
    variant="outlined"
    required
    fullWidth
    id={id}
    label={label}
    helperText={helperText}
    autoFocus
  />
)

SimpleTextField.propTypes = {
  state: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
}

export default SimpleTextField
