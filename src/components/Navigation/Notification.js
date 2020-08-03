import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'

const Notification = () => {
  const notification = useSelector((state) => state.notification)
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }))
  const classes = useStyles()

  if (!notification) {
    return null
  }

  return (
    <div className={classes.root}>
      <Alert severity={notification.type}>{notification.message}</Alert>
    </div>
  )
}

export default Notification
