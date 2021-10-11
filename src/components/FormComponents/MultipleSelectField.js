import React from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const MultipleSelectField = ({ state, id, labelId, label, options }) => (
  <FormControl fullWidth>
    <InputLabel id={labelId}>{label}</InputLabel>
    <Select
      labelId={labelId}
      id={id}
      multiple
      {...state}
      input={<Input />}
      MenuProps={MenuProps}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)

MultipleSelectField.propTypes = {
  state: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}

export default MultipleSelectField
