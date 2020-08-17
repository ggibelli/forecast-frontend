import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Popper from '@material-ui/core/Popper'
import { makeStyles } from '@material-ui/core/styles'
import convertDegrees from '../utils/degreesToDirection'
import forecastInfoText from '../utils/forecastInfoText'

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}))

const SingleForecast = ({ data }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState({
    openedPopoverId: null,
    anchorEl: null,
  })

  const handlePopoverOpen = (event, popoverId) => {
    setAnchorEl({
      openedPopoverId: popoverId,
      anchorEl: event.target,
    })
  }

  const handlePopoverClose = () => {
    setAnchorEl({
      openedPopoverId: null,
      anchorEl: null,
    })
  }

  const open = Boolean(anchorEl)

  const info = Object.assign({}, ...data)

  return (
    <>
      <Typography
        aria-owns={open ? 'mouse-over-popover-wave' : undefined}
        aria-haspopup="true"
        onMouseEnter={(e) => handlePopoverOpen(e, forecastInfoText[0].id)}
        onMouseLeave={handlePopoverClose}
        variant="body1"
        component="p"
      >
        Wave height: {info.waveHeight.toFixed(2)} m
        <br />
        Wave period: {info.wavePeriod.toFixed(2)} s
        <br />
        Wave direction: {convertDegrees(info.waveDirection)}
      </Typography>
      <Popper
        id="mouse-over-popover-wave"
        placement="bottom-start"
        open={anchorEl.openedPopoverId === forecastInfoText[0].id}
        anchorEl={anchorEl.anchorEl}
      >
        <div className={classes.paper} style={{ whiteSpace: 'pre-wrap' }}>
          {forecastInfoText[0].wave}
        </div>
      </Popper>
      <Typography
        aria-owns={open ? 'mouse-over-popover-swell' : undefined}
        aria-haspopup="true"
        onMouseEnter={(e) => handlePopoverOpen(e, forecastInfoText[1].id)}
        onMouseLeave={handlePopoverClose}
        variant="body1"
        component="p"
      >
        Swell height: {info.swellHeight.toFixed(2)} m
        <br />
        Swell period: {info.swellPeriod.toFixed(2)} s
        <br />
        Swell direction: {convertDegrees(info.swellDirection)}
      </Typography>
      <Typography
        aria-owns={open ? 'mouse-over-popover-swell' : undefined}
        aria-haspopup="true"
        onMouseEnter={(e) => handlePopoverOpen(e, forecastInfoText[1].id)}
        onMouseLeave={handlePopoverClose}
        variant="body2"
        component="p"
      >
        Secondary swell height: {info.secondarySwellHeight.toFixed(2)} m
        <br />
        Secondary swell period: {info.secondarySwellPeriod.toFixed(2)} s
        <br />
        Secondary swell direction:{' '}
        {convertDegrees(info.secondarySwellDirection)}
      </Typography>
      <Popper
        id="mouse-over-popover-swell"
        placement="bottom-start"
        open={anchorEl.openedPopoverId === forecastInfoText[1].id}
        anchorEl={anchorEl.anchorEl}
      >
        <div className={classes.paper} style={{ whiteSpace: 'pre-wrap' }}>
          {forecastInfoText[1].swell}
        </div>
      </Popper>
      <Typography
        aria-owns={open ? 'mouse-over-popover-wind' : undefined}
        aria-haspopup="true"
        onMouseEnter={(e) => handlePopoverOpen(e, forecastInfoText[2].id)}
        onMouseLeave={handlePopoverClose}
        variant="body2"
        component="p"
      >
        Wind gust: {info.gust.toFixed(2)} m/s
        <br />
        Wind speed: {info.windSpeed.toFixed(2)} m/s
        <br />
        Wind direction: {convertDegrees(info.windDirection)}
      </Typography>
      <Typography color="textSecondary">
        Air temp.: {info.airTemperature.toFixed(2)} Celcius
        <br />
        Water temp.: {info.waterTemperature.toFixed(2)} Celcius
        <br />
        Precipitation: {info.precipitation.toFixed(2)}%
        <br />
        Cloud cover: {info.cloudCover.toFixed(2)}%
      </Typography>
      <Popper
        id="mouse-over-popover-wind"
        placement="bottom-start"
        open={anchorEl.openedPopoverId === forecastInfoText[2].id}
        anchorEl={anchorEl.anchorEl}
      >
        <div className={classes.paper} style={{ whiteSpace: 'pre-wrap' }}>
          {forecastInfoText[2].wind}
        </div>
      </Popper>
    </>
  )
}

export default SingleForecast

SingleForecast.propTypes = {
  data: PropTypes.array.isRequired,
}
