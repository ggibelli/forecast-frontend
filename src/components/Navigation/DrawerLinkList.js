import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'

import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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

  const updateDisplayNameToLabel = (val, keysMap) => {
    if (val == null) return null
    if (Array.isArray(val)) {
      return val.map((item) => updateDisplayNameToLabel(item, keysMap))
    }
    if (typeof val === 'object') {
      return Object.keys(val).reduce((obj, key) => {
        const propKey = updateDisplayNameToLabel(key, keysMap)
        const propVal = updateDisplayNameToLabel(val[key], keysMap)
        obj[propKey] = propVal
        return obj
      }, {})
    }
    if (typeof val === 'string') {
      return keysMap[val] || val
    }
    return val
  }

  const keysToUpdate = {
    countries: 'children',
    regions: 'children',
    surf_spots: 'children',
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
