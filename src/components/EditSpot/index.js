import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import FormSpot from '../FormComponents/FormSpot'
import { fetchSpot } from '../../reducers/spotDetail'

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

const EditSpot = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(fetchSpot(id))
  }, [id, dispatch])
  const { data } = useSelector((state) => state.spotDetail)
  const classes = useStyles()
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edit spot
        </Typography>
        {Object.entries(data).length > 0 ? <FormSpot spot={data} /> : null}
      </div>
    </Container>
  )
}

export default EditSpot
