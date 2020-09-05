import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import StarIcon from '@material-ui/icons/Star'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { getProfile } from '../reducers/userDetail'

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
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfile(id))
  }, [dispatch, id])
  const profile = useSelector((state) => state.userProfile)
  if (!profile) return null
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <StarIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default StarredSpots
