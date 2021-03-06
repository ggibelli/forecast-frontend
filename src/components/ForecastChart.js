import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import WindChart from './WindChart'
import ChartTide from './TideChart'
import PeriodChart from './PeriodChart'
import HeightChart from './HeightChart'
import WeatherTable from './WeatherTable'

const ForecastChart = () => {
  const { data } = useSelector((state) => state.forecastSpot)
  const [showChart, setShowChart] = useState('waveHeight')
  const dateNow = new Date(Date.now())
  const today = dateNow.toISOString().split('T')[0]
  const splittedDate = today.split('-')
  const todayState = Number(splittedDate[2])
  // I set the number of the day splitting the date (pos0 year, pos1 month, pos2 day)
  const [day, setDay] = useState(todayState)
  const [year, month] = splittedDate
  const dayForForecast =
    day < 10 ? `${year}-${month}-0${day}` : `${year}-${month}-${day}`
  const { forecast } = data
  const wrongCoordinates = forecast
    ?.map((el) => el.data.length < 10)
    .every((el) => el === true)
  const timeLabelsForecast = forecast
    ?.map((hour) => hour.time.split('T')[1].split('+')[0].substring(0, 5))
    .reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      [],
    )

  const forecastForTheDay = forecast?.filter((hour) =>
    hour.time.includes(dayForForecast),
  )

  const forecastObject = forecastForTheDay?.map((hour) =>
    Object.assign({}, ...hour.data),
  )

  const handleClickNextDay = () => {
    if (day + 1 >= todayState + 6) return
    setDay(day + 1)
  }

  const handleClickPrevDay = () => {
    if (day - 1 < todayState) return
    setDay(day - 1)
  }

  const handleClickPeriodChart = () => setShowChart('wavePeriod')
  const handleClickHeightChart = () => setShowChart('waveHeight')

  const dataCharts = {
    timeLabelsForecast,
    forecastObject,
  }

  if (wrongCoordinates) return <div>The coordinates of this spot are wrong</div>

  return (
    <>
      <Grid justify="space-between" container>
        <IconButton onClick={handleClickPrevDay} aria-label="previous">
          <NavigateBeforeIcon />
        </IconButton>

        <Typography variant="h6" gutterBottom>
          {dayForForecast}
        </Typography>
        <IconButton onClick={handleClickNextDay} aria-label="next">
          <NavigateNextIcon />
        </IconButton>
        {showChart === 'waveHeight' && forecastObject ? (
          <HeightChart day={dayForForecast} dataChart={dataCharts} />
        ) : null}
        {showChart === 'wavePeriod' ? (
          <PeriodChart day={dayForForecast} dataChart={dataCharts} />
        ) : null}
        <IconButton onClick={handleClickPrevDay} aria-label="previous">
          <NavigateBeforeIcon />
        </IconButton>
        <Button
          onClick={handleClickPeriodChart}
          variant="outlined"
          size="small"
          color="primary"
        >
          Period
        </Button>
        <Button
          onClick={handleClickHeightChart}
          variant="outlined"
          size="small"
          color="primary"
        >
          Height
        </Button>
        <IconButton onClick={handleClickNextDay} aria-label="next">
          <NavigateNextIcon />
        </IconButton>
        {forecastObject ? (
          <WindChart day={dayForForecast} dataChart={dataCharts} />
        ) : null}
        <IconButton onClick={handleClickPrevDay} aria-label="previous">
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton onClick={handleClickNextDay} aria-label="next">
          <NavigateNextIcon />
        </IconButton>
        <ChartTide day={dayForForecast} />
        <IconButton onClick={handleClickPrevDay} aria-label="previous">
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton onClick={handleClickNextDay} aria-label="next">
          <NavigateNextIcon />
        </IconButton>
        {forecastObject ? <WeatherTable dataChart={dataCharts} /> : null}
      </Grid>
    </>
  )
}

export default ForecastChart
