import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import NavBar from './NavBar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Notification from './Notification'
import ContinentList from './ContinentList'
import CountryList from './CountryList'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import RegionList from './RegionList'
import SurfspotDetail from './SurfspotDetail'
import SpotList from './SpotList'
import Container from '@material-ui/core/Container'
import DrawerLinkList from './DrawerLinkList'


const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

function ResponsiveDrawer(props) {
  const { window } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <DrawerLinkList />
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar handleDrawerToggle={handleDrawerToggle} NavClass={classes.appBar} />
      
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container fixed>
        <Switch>
          <Route path="/continents/:id" component={ContinentList} />
          <Route path="/countries/:id" component={CountryList} />
          <Route path="/regions/:id" component={RegionList} />
          <Route path="/countries/:id" component={CountryList} />
          <Route path="/surfspots/:id" component={SurfspotDetail} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={RegistrationForm} />
          <Route path="/" component={SpotList} />
        </Switch>
        </Container>
      </main>
    </div>
  )
}
export default ResponsiveDrawer
