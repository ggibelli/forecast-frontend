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
import ImageComponent from './ImageComponent'
import ChartWave from './ChartWave'
import ChartTide from './ChartTide'

const SpotDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const surfSpot = useSelector((state) => state.spotDetail)
  const forecastState = useSelector((state) => state.forecastSpot)
  const forecastId = surfSpot.data.forecast ? surfSpot.data.forecast.id : null
  useEffect(() => {
    if (id) dispatch(fetchSpot(id))
  }, [id, dispatch])
  useEffect(() => {
    if (forecastId) dispatch(fetchForecast(forecastId))
  }, [forecastId, dispatch])
  const tileImage = forecastId ? surfSpot.data.tile_url : spinner

  if (!surfSpot.isLoading) {
    return (
      <>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            {forecastState.isLoading ? (
              <Skeleton variant="rect" width="100%" height="70vh" />
            ) : (
              <>
              <ChartWave />
              <ChartTide />
              </>
            )}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Suspense
              fallback={<Skeleton variant="rect" width="100%" height="100%" />}
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
      </>
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
