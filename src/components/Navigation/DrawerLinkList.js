import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import LinearProgress from '@material-ui/core/LinearProgress'

import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import updateDisplayNameToLabel from '../../utils/updateObjectsName'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

export default function NestedList() {
  const spotList = useSelector((state) => state.surfspots)
  const keysToUpdate = {
    countries: 'children',
    regions: 'children',
    surfSpots: 'children',
  }

  const nestedSpotList = updateDisplayNameToLabel(spotList, keysToUpdate)

  const classes = useStyles()
  const [open, setOpen] = React.useState({})

  const handleClick = (param) => {
    setOpen((prevState) => ({ ...prevState, [param]: !prevState[param] }))
  }
  function nestedMenu(items) {
    return items.map((nav) => {
      if (!nav.children) {
        return (
          <div key={nav.id}>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to={`/surfspots/${nav.id}`}
            >
              <ListItemText primary={nav.name} />
            </ListItem>
          </div>
        )
      }
      return (
        <div key={nav.id}>
          <ListItem button onClick={() => handleClick(nav.name)}>
            <ListItemText primary={nav.name} />
            {open[nav.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[nav.name]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {nestedMenu(nav.children)}
            </List>
          </Collapse>
        </div>
      )
    })
  }

  if (nestedSpotList.length === 0) {
    return <LinearProgress />
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          World Surf Spots
        </ListSubheader>
      }
      className={classes.root}
    >
      {nestedMenu(nestedSpotList)}
    </List>
  )
}
