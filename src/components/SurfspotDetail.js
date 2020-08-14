import React, { useEffect, Suspense } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'
import { useImage } from 'react-image'
import { useParams } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip'
import { fetchSpot } from '../reducers/spotDetail'
import { fetchForecast } from '../reducers/forecastSpot'

const SpotDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const surfSpot = useSelector((state) => state.spotDetail)
  const forecast = useSelector((state) => state.forecastSpot)
  const forecastId = surfSpot.data.forecast && surfSpot.data.forecast.id
  useEffect(() => {
    dispatch(fetchSpot(id))
  }, [id, dispatch])
  useEffect(() => {
    if (forecastId) dispatch(fetchForecast(forecastId))
  }, [forecastId, dispatch])

  const MyImageComponent = React.forwardRef(function MyComponent(props, ref) {
    const { src } = useImage({
      srcList: props.tile,
    })
    return (
      <div {...props}>
        <img src={src} ref={ref} alt={props.text} />
      </div>
    )
  })

  if (!surfSpot.isLoading) {
    return (
      <>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            {forecast.isLoading ? (
              <Skeleton variant="rect" width="100%" height="70vh" />
            ) : (
              <Typography
                component="div"
                style={{ backgroundColor: '#fffff', height: '70vh' }}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Suspense
              fallback={<Skeleton variant="rect" width="100%" height="100%" />}
            >
              <Tooltip title="can">
                <MyImageComponent
                  tile={surfSpot.data.tile_url}
                  text="Surf spot map tile"
                />
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
