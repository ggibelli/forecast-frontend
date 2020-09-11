import React, { useEffect, Suspense } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'
import { useParams } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip'
import { fetchSpot } from '../reducers/spotDetail'
import { fetchForecast } from '../reducers/forecastSpot'
import spinner from '../static/spinner.gif'
import { setNotification } from '../reducers/notification'
import ImageComponent from './ImageComponent'
import ForecastChart from './ForecastChart'
import Starred from './Starred'

// aggiungo no spot found!!!!
const SpotDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const surfSpot = useSelector((state) => state.spotDetail)
  const { errorMessage, isLoading } = useSelector((state) => state.forecastSpot)
  const forecastId = surfSpot.data.forecast ? surfSpot.data.forecast.id : null
  useEffect(() => {
    if (id) dispatch(fetchSpot(id))
  }, [id, dispatch])
  useEffect(() => {
    if (forecastId) dispatch(fetchForecast(forecastId))
  }, [forecastId, dispatch])
  useEffect(() => {
    if (errorMessage) dispatch(setNotification(errorMessage, 'error'))
  }, [dispatch, errorMessage])
  const tileImage = forecastId ? surfSpot.data.tile_url : spinner

  const forecastNotReady = () =>
    errorMessage ? (
      <div>{errorMessage}</div>
    ) : (
      <Skeleton variant="rect" width="100%" height="70vh" />
    )

  if (!surfSpot.isLoading) {
    return (
      <div style={{ marginTop: 6 }}>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            {!isLoading && !errorMessage ? (
              <>
                <Starred spotId={id} />
                <ForecastChart />
              </>
            ) : (
              forecastNotReady()
            )}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Suspense
              fallback={<Skeleton variant="rect" width="100%" height="50%" />}
            >
              <Tooltip title="Coastal view">
                <ImageComponent src={tileImage} text="Surf spot map tile" />
              </Tooltip>
            </Suspense>
            <div>
              Wave type: {surfSpot.data.type ? surfSpot.data.type : 'unknown'}{' '}
            </div>
            <div>
              Wave direction:{' '}
              {surfSpot.data.direction ? surfSpot.data.direction : 'unknown'}{' '}
            </div>
            <div>
              Bottom: {surfSpot.data.bottom ? surfSpot.data.bottom : 'unknown'}{' '}
            </div>
            <div>
              Best swell direction:{' '}
              {surfSpot.data.good_swell_direction
                ? surfSpot.data.good_swell_direction
                : 'unknown'}{' '}
            </div>
            <div>
              Best wind direction:{' '}
              {surfSpot.data.good_wind_direction
                ? surfSpot.data.good_wind_direction
                : 'unknown'}{' '}
            </div>
            <div>
              Best tide:{' '}
              {surfSpot.data.best_tide_position
                ? surfSpot.data.best_tide_position
                : 'unknown'}{' '}
            </div>
            <div>
              Dangers:{' '}
              {surfSpot.data.dangers ? surfSpot.data.dangers : 'unknown'}{' '}
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Skeleton variant="rect" width="100%" height="70vh" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Skeleton variant="rect" width="100%" height="70vh" />
        </Grid>
      </Grid>
    </div>
  )
}

export default SpotDetail
