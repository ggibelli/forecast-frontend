import React, { useEffect, Suspense } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import moment from 'moment'
import { useImage } from 'react-image'
import { useParams } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip'
import SingleForecast from './SingleForecast'
import { fetchSpot } from '../reducers/spotDetail'
import { fetchForecast } from '../reducers/forecastSpot'

const SpotDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const surfSpot = useSelector((state) => state.spotDetail)
  const forecast = useSelector((state) => state.forecastSpot)
  const { data } = forecast
  const forecastId = surfSpot.data.forecast && surfSpot.data.forecast.id
  useEffect(() => {
    if (id) dispatch(fetchSpot(id))
  }, [id, dispatch])
  useEffect(() => {
    if (forecastId) dispatch(fetchForecast(forecastId))
  }, [forecastId, dispatch])

  const MyImageComponent = React.forwardRef(function MyComponent(props, ref) {
    const { src } = useImage({
      srcList: props.src,
    })
    return (
      <div {...props}>
        <img src={src} ref={ref} alt={props.text} />
      </div>
    )
  })

  const gridStyle = {
    width: 672,
  }
  const scrollingWrapper = {
    width: '100%',
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  }
  const card = {
    flex: '0 0 auto',
    padding: 2.5,
  }

  if (!surfSpot.isLoading) {
    return (
      <>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item style={gridStyle} xs={12} sm={8}>
            {forecast.isLoading ? (
              <Skeleton variant="rect" width="100%" height="70vh" />
            ) : (
              <div style={scrollingWrapper}>
                {Object.entries(data).length !== 0 &&
                  data.forecast.map((time) => (
                    <div key={time.time} style={card}>
                      <Card>
                        <CardHeader
                          title={moment(time.time).format(
                            'MMM Do YY, h:mm:ss a',
                          )}
                        />
                        <CardContent>
                          <SingleForecast data={time.data} />
                        </CardContent>
                      </Card>
                    </div>
                  ))}
              </div>
            )}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Suspense
              fallback={<Skeleton variant="rect" width="100%" height="100%" />}
            >
              <Tooltip title="can">
                <MyImageComponent
                  src={surfSpot.data.tile_url}
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
