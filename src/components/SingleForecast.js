import React from 'react'
import Typography from '@material-ui/core/Typography'

const SingleForecast = ({ data }) => {
  const info = Object.assign({}, ...data)
  return (
    <>
      <Typography color="textSecondary">
        Air temperature: {info.airTemperature.toFixed(2)} Celcius
        <br />
        Water temperature: {info.waterTemperature.toFixed(2)} Celcius
        <br />
        Precipitation: {info.precipitation.toFixed(2)}%
        <br />
        Cloud cover: {info.cloudCover.toFixed(2)}%
      </Typography>
      <Typography variant="body1" component="p">
        Wave height: {info.waveHeight.toFixed(2)} m
        <br />
        Wave period: {info.wavePeriod.toFixed(2)} s
        <br />
        Wave direction: {info.waveDirection.toFixed(2)} degrees
      </Typography>
      <Typography variant="body1" component="p">
        Primary swell height: {info.swellHeight.toFixed(2)} m
        <br />
        Primary swell period: {info.swellPeriod.toFixed(2)} s
        <br />
        Primary swell direction: {info.swellDirection.toFixed(2)} degrees
      </Typography>
      <Typography variant="body2" component="p">
        Secondary swell height: {info.secondarySwellHeight.toFixed(2)} m
        <br />
        Secondary swell period: {info.secondarySwellPeriod.toFixed(2)} s
        <br />
        Secondary swell direction: {info.secondarySwellDirection.toFixed(2)} degrees
      </Typography>
      <Typography variant="body2" component="p">
        Wind gust: {info.gust.toFixed(2)} m/s
        <br />
        Wind speed: {info.windSpeed.toFixed(2)} m/s
        <br />
        Wind direction: {info.windDirection.toFixed(2)} degrees
      </Typography>
    </>
  )
}
export default SingleForecast
