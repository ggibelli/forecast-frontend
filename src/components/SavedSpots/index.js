import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import StarIcon from '@material-ui/icons/Star'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { getProfile } from '../../reducers/userDetail'
import TableSpotsStarred from './TableSpotsStarred'

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
}))

const StarredSpots = () => {
  const classes = useStyles()
  const user = useSelector((state) => state.currentUser)
  const profile = useSelector((state) => state.userProfile)
  const dispatch = useDispatch()
  useEffect(() => {
    if (user) dispatch(getProfile(user.id))
  }, [dispatch, user])

  if (!profile) return null
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <StarIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Saved Spots
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {profile.starredSpots.length > 0 ? (
              <TableSpotsStarred />
            ) : (
              <Typography component="p">No starred spots yet...</Typography>
            )}
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default StarredSpots
