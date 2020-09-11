import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { getProfile } from '../reducers/userDetail'
import TableSpotProfile from './TableSpotsProfile'

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
}))

const UserProfile = () => {
  const classes = useStyles()
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfile(id))
  }, [dispatch, id])
  const profile = useSelector((state) => state.userProfile)
  if (!profile) return null
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>G</Avatar>
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="firstName"
                variant="outlined"
                defaultValue={profile.firstName}
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="lastName"
                variant="outlined"
                defaultValue={profile.lastName}
                fullWidth
                id="lastName"
                label="Last Name"
                autoFocus
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="username"
                variant="outlined"
                defaultValue={profile.username}
                fullWidth
                id="username"
                label="Username"
                autoFocus
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                variant="outlined"
                defaultValue={profile.email}
                fullWidth
                id="email"
                label="Email"
                autoFocus
                disabled
              />
            </Grid>
            {profile.createdSpots.length > 0 ? (
              <Grid item xs={12}>
                <TableSpotProfile />
              </Grid>
            ) : null}
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default UserProfile
