import React from 'react'
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

export default SimpleTextField
