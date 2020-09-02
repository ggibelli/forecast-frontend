import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const SimpleRadioField = ({ state, legend, name, options }) => (
  <>
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend">{legend}</FormLabel>
      <RadioGroup row aria-label="Type" name={name} {...state}>
        {options.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={<Radio color="primary" />}
            label={option}
          />
        ))}
      </RadioGroup>
    </FormControl>
  </>
)

export default SimpleRadioField

