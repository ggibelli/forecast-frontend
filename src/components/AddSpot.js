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
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

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
  const classes = useStyles()
  const handleSubmit = (event) => {
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
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="spotName"
                variant="outlined"
                required
                fullWidth
                id="spotName"
                label="Spot Name"
                helperText="The spot name must be longer than 2 characters"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="latitude"
                variant="outlined"
                required
                fullWidth
                id="latitude"
                label="Latitude"
                helperText="The latitude range is between 90 and -90"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="longitude"
                variant="outlined"
                required
                fullWidth
                id="longitude"
                label="Longitude"
                helperText="The longitude range is between 180 and -180"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Switch name="isSecret" />}
                label="Secret spot"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl} fullWidth required>
                <InputLabel htmlFor="uncontrolled-native">Continent</InputLabel>
                <Select
                  native
                  defaultValue={30}
                  inputProps={{
                    name: 'continent',
                    id: 'continent',
                  }}
                >
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                className={classes.formControl}
                disabled
                fullWidth
                required
              >
                <InputLabel htmlFor="uncontrolled-native">Country</InputLabel>
                <Select
                  native
                  defaultValue={30}
                  inputProps={{
                    name: 'continent',
                    id: 'continent',
                  }}
                >
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
                <FormHelperText>Choose the Continent first</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                className={classes.formControl}
                disabled
                fullWidth
                required
              >
                <InputLabel htmlFor="uncontrolled-native">Region</InputLabel>
                <Select
                  native
                  defaultValue={30}
                  inputProps={{
                    name: 'continent',
                    id: 'continent',
                  }}
                >
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
                <FormHelperText>Choose the Country first</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">Type</FormLabel>
                <RadioGroup
                  row
                  aria-label="Type"
                  name="type"
                  defaultValue="Beach break"
                >
                  <FormControlLabel
                    value="Beach break"
                    control={<Radio color="primary" />}
                    label="Beach break"
                  />
                  <FormControlLabel
                    value="Reef break"
                    control={<Radio color="primary" />}
                    label="Reef break"
                  />
                  <FormControlLabel
                    value="Point break"
                    control={<Radio color="primary" />}
                    label="Point break"
                  />
                  <FormControlLabel
                    value="Rivermouth break"
                    control={<Radio color="primary" />}
                    label="Rivermouth break"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">Direction</FormLabel>
                <RadioGroup
                  row
                  aria-label="direction"
                  name="direction"
                  defaultValue="Left"
                >
                  <FormControlLabel
                    value="Left"
                    control={<Radio color="primary" />}
                    label="Left"
                  />
                  <FormControlLabel
                    value="Right"
                    control={<Radio color="primary" />}
                    label="Right"
                  />
                  <FormControlLabel
                    value="Both"
                    control={<Radio color="primary" />}
                    label="Both"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">Bottom</FormLabel>
                <RadioGroup
                  row
                  aria-label="bottom"
                  name="bottom"
                  defaultValue="Sand"
                >
                  <FormControlLabel
                    value="Sand"
                    control={<Radio color="primary" />}
                    label="Sand"
                  />
                  <FormControlLabel
                    value="Reef"
                    control={<Radio color="primary" />}
                    label="Reef"
                  />
                  <FormControlLabel
                    value="Rocks"
                    control={<Radio color="primary" />}
                    label="Rocks"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="uncontrolled-native">
                  Good swell direction
                </InputLabel>
                <Select
                  native
                  multiple
                  defaultValue={directions}
                  inputProps={{
                    name: 'good_swell_direction',
                    id: 'good-swell-direction',
                  }}
                >
                  {directions.map((direction) => (
                    <option key={direction} value={direction}>
                      {direction}
                    </option>
                  ))}
                </Select>
                <FormHelperText>Choose the Country first</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="uncontrolled-native">
                  Good wind direction
                </InputLabel>
                <Select
                  native
                  multiple
                  defaultValue={directions}
                  inputProps={{
                    name: 'good_wind_direction',
                    id: 'good-wind-direction',
                  }}
                >
                  {directions.map((direction) => (
                    <option key={direction} value={direction}>
                      {direction}
                    </option>
                  ))}
                </Select>
                <FormHelperText>Choose the Country first</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="uncontrolled-native">
                  Best tide position
                </InputLabel>
                <Select
                  native
                  multiple
                  defaultValue={tides}
                  inputProps={{
                    name: 'best_tide_position',
                    id: 'best-tide-position',
                  }}
                >
                  {tides.map((tide) => (
                    <option key={tide} value={tide}>
                      {tide}
                    </option>
                  ))}
                </Select>
                <FormHelperText>Choose the Country first</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="uncontrolled-native">
                  Best tide movement
                </InputLabel>
                <Select
                  native
                  multiple
                  defaultValue={tidesMovement}
                  inputProps={{
                    name: 'best_tide_movement',
                    id: 'best-tide-movement',
                  }}
                >
                  {tidesMovement.map((tide) => (
                    <option key={tide} value={tide}>
                      {tide}
                    </option>
                  ))}
                </Select>
                <FormHelperText>Choose the Country first</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="uncontrolled-native">Dangers</InputLabel>
                <Select
                  native
                  multiple
                  defaultValue={dangers}
                  inputProps={{
                    name: 'dangers',
                    id: 'dangers',
                  }}
                >
                  {dangers.map((danger) => (
                    <option key={danger} value={danger}>
                      {danger}
                    </option>
                  ))}
                </Select>
                <FormHelperText>Choose the Country first</FormHelperText>
              </FormControl>
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
