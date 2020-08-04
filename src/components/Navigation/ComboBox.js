import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  search: {
    width: 250,
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
    },
  },
}))
export default function Grouped() {
  const classes = useStyles()
  const history = useHistory()
  const surfSpots = useSelector((state) => state.spotsSearch)
  const options = surfSpots.map((spot) => {
    const region = spot.region.name
    const { name, id } = spot
    return {
      region,
      name,
      id,
    }
  })

  const [value, setValue] = React.useState(null)
  const [inputValue, setInputValue] = React.useState('')
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        history.push(`/surfspots/${newValue.id}`)
        setValue(null)
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
      }}
      id="grouped"
      getOptionLabel={(spot) => spot.name}
      options={options.sort((a, b) => a.region.localeCompare(b.region))}
      getOptionSelected={(opt, val) => opt.name === val.name}
      groupBy={(spot) => spot.region}
      className={classes.search}
      renderInput={(params) => (
        <TextField {...params} label="surf spot.." variant="filled" />
      )}
    />
  )
}
