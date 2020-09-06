import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Switch from '@material-ui/core/Switch'
import {
  filterChangeCountries,
  filterChangeBool,
} from '../reducers/filterCreatedSpots'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}))

export default function CheckboxesGroup() {
  const dispatch = useDispatch()
  const { createdSpots } = useSelector((state) => state.userProfile)
  const filter = useSelector((state) => state.filter)
  // find a solution for the filter to save state closing the popover
  const classes = useStyles()
  const countries = createdSpots.map((spot) => spot.country.name)
  const countriesObjects = countries.reduce(
    (o, key) => ({ ...o, [key]: false }),
    {},
  )

  const [state, setState] = React.useState(countriesObjects)

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }
  useEffect(() => {
    dispatch(filterChangeCountries(state))
  }, [state, dispatch])

  const [checked, setChecked] = React.useState(false)

  const handleCheck = () => {
    setChecked(!checked)
  }
  useEffect(() => {
    dispatch(filterChangeBool(checked))
  }, [checked, dispatch])

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Only spots from</FormLabel>
        <FormGroup>
          {countries.map((country) => (
            <FormControlLabel
              key={country}
              control={
                <Checkbox
                  checked={state.country}
                  onChange={handleChange}
                  name={country}
                />
              }
              label={country}
            />
          ))}
          <FormControlLabel
            control={
              <Switch checked={checked} onChange={handleCheck} name="Secret" />
            }
            label="Secret Spots"
          />
        </FormGroup>
      </FormControl>
    </div>
  )
}
