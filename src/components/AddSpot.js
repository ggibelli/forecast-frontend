import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import customHooks from '../utils/customHooks'
import SimpleTextField from './SimpleTextField'
import SimpleRadioField from './SimpleRadioField'
import MultipleSelectField from './MultipleSelectField'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const AddSpot = () => {
  const dispatch = useDispatch()
  const surfspots = useSelector((state) => state.surfspots)

  const checkValidityName = (name) => {
    if (name.length > 2 || !name) return true
    return false
  }

  const latitudeIsValid = (latitude) => {
    if (!latitude) return true
    return /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/.test(
      latitude,
    )
  }

  const longitudeIsValid = (longitude) => {
    if (!longitude) return true
    return /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/.test(
      longitude,
    )
  }

  const name = customHooks.useField(checkValidityName)
  const latitude = customHooks.useField(latitudeIsValid)
  const longitude = customHooks.useField(longitudeIsValid)
  const isSecret = customHooks.useCheckField()
  const continentField = customHooks.useFieldNoError()
  const countryField = customHooks.useFieldNoError()
  const regionField = customHooks.useFieldNoError()
  const waveTypeField = customHooks.useFieldNoError()
  const waveDirectionField = customHooks.useFieldNoError()
  const seaBottomField = customHooks.useFieldNoError()
  const goodSwellDirectionField = customHooks.useMultipleSelect()
  const goodWindDirectionField = customHooks.useMultipleSelect()
  const bestTidePositionField = customHooks.useMultipleSelect()
  const bestTideMovementField = customHooks.useMultipleSelect()
  const dangersField = customHooks.useMultipleSelect()
  const continents = surfspots
    ? surfspots.map((continent) => ({ name: continent.name, id: continent.id }))
    : null
  const countries = surfspots
    ? surfspots
        .filter((continent) => continent.id === continentField.value)
        .map((continent) => continent.countries)
        .flat()
    : null
  const regions = countries
    ? countries
        .filter((country) => country.id === countryField.value)
        .map((country) => country.regions)
        .flat()
    : null
  const enableRegionField = !!(continentField.value && countryField.value)
  const classes = useStyles()
  const handleSubmit = (event) => {
    console.log(waveTypeField.value)
    event.preventDefault()
  }
  const directions = [
    'North',
    'NorthEast',
    'East',
    'SouthEast',
    'South',
    'SouthWest',
    'West',
    'NorthWest',
  ]
  const tidesMovement = ['Rising tide', 'Falling tide']
  const tides = ['High tide', 'Mid tide', 'Low tide']
  const dangers = [
    'Rocks',
    'Sharks',
    'Localism',
    'Pollution',
    'man-made danger (buoys etc..)',
    'Urchins',
    'Rips',
  ]
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add a new spot
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SimpleTextField
                state={name}
                id="spot-name"
                label="Spot Name"
                helperText="The name must be longer than 2 characters"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SimpleTextField
                state={latitude}
                id="latitude"
                label="Latitude"
                helperText="The latitude range is between 90 and -90"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SimpleTextField
                state={longitude}
                id="longitude"
                label="Longitude"
                helperText="The longitude range is between 180 and -180"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Switch {...isSecret} />}
                label="Secret spot"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl} fullWidth required>
                <InputLabel id="uncontrolled-native">Continent</InputLabel>
                <Select
                  labelId="uncontrolled-native"
                  id="continent"
                  native
                  {...continentField}
                  inputProps={{
                    name: 'continent',
                    id: 'continent',
                  }}
                >
                  <option aria-label="None" value="" />
                  {continents.map((continent) => (
                    <option key={continent.id} value={continent.id}>
                      {continent.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                className={classes.formControl}
                disabled={!continentField.value}
                fullWidth
                required
              >
                <InputLabel htmlFor="uncontrolled-native">Country</InputLabel>
                <Select
                  native
                  {...countryField}
                  inputProps={{
                    name: 'country',
                    id: 'country',
                  }}
                >
                  <option aria-label="None" value="" />
                  {countries.map((filteredCountry) => (
                    <option key={filteredCountry.id} value={filteredCountry.id}>
                      {filteredCountry.name}
                    </option>
                  ))}
                </Select>
                <FormHelperText>Choose the Continent first</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                className={classes.formControl}
                disabled={!enableRegionField}
                fullWidth
                required
              >
                <InputLabel htmlFor="uncontrolled-native">Region</InputLabel>
                <Select
                  native
                  {...regionField}
                  inputProps={{
                    name: 'region',
                    id: 'region',
                  }}
                >
                  <option aria-label="None" value="" />
                  {regions.map((filteredRegion) => (
                    <option key={filteredRegion.id} value={filteredRegion.id}>
                      {filteredRegion.name}
                    </option>
                  ))}
                </Select>
                <FormHelperText>Choose the Country first</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <SimpleRadioField
                state={waveTypeField}
                legend="Type"
                name="type"
                options={[
                  'Beach Break',
                  'Reef Break',
                  'Point Break',
                  'Rivermouth Break',
                ]}
              />
            </Grid>
            <Grid item xs={12}>
              <SimpleRadioField
                state={waveDirectionField}
                legend="Direction"
                name="direction"
                options={['Left', 'Right']}
              />
            </Grid>
            <Grid item xs={12}>
              <SimpleRadioField
                state={seaBottomField}
                legend="Bottom"
                name="bottom"
                options={['Sand', 'Reef', 'Rocks']}
              />
            </Grid>
            <Grid item xs={12}>
              <MultipleSelectField
                state={goodSwellDirectionField}
                id="good-swell"
                label="Good swell direction"
                labelId="good-swell-label"
                options={directions}
              />
            </Grid>
            <Grid item xs={12}>
              <MultipleSelectField
                state={goodWindDirectionField}
                id="good-wind"
                label="Good wind direction"
                labelId="good-wind-label"
                options={directions}
              />
            </Grid>
            <Grid item xs={12}>
              <MultipleSelectField
                state={bestTidePositionField}
                id="best-tide-position"
                label="Best tide position"
                labelId="best-tide-position-label"
                options={tides}
              />
            </Grid>
            <Grid item xs={12}>
              <MultipleSelectField
                state={bestTideMovementField}
                id="best-tide-movement"
                label="Best tide movement"
                labelId="best-tide-movement-label"
                options={tidesMovement}
              />
            </Grid>
            <Grid item xs={12}>
              <MultipleSelectField
                state={dangersField}
                id="dangers"
                label="Dangers"
                labelId="dangers-label"
                options={dangers}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add spot
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default AddSpot
