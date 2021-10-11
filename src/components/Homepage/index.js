import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import Togglable from './Togglable'
import MapComponent from './Map'

const HomePage = () => {
  const history = useHistory()
  const countries = useSelector((state) =>
    state.surfspots.map((continent) => continent.countries).flat(),
  )
  const mapRef = React.createRef()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCountry = (id) => {
    history.push(`/map/countries/${id}`)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <Typography variant="body1">
        To find a surfspot you can: <br />
        - Skim through the menu on your left (if you are on mobile you need to
        open it first)
        <br />
        - If you already know the name of the spot you can use the search bar on
        top
        <br />- You can click one of the following{' '}
        <Button
          onClick={handleClick}
          aria-controls="country-menu"
          aria-haspopup="true"
        >
          Countries
        </Button>{' '}
        to open the map of the one you clicked
        <br />
        - Open the map in this page, the browser will need to know your position
        <br />
      </Typography>
      <Menu
        id="country-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {countries.map((country) => (
          <MenuItem key={country.id} onClick={() => handleCountry(country.id)}>
            {country.name}
          </MenuItem>
        ))}
      </Menu>
      <Togglable buttonLabel="show map" ref={mapRef}>
        <MapComponent />
      </Togglable>
    </div>
  )
}

export default HomePage
