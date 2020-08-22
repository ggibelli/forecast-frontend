import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import HeightChart from './HeightChart'
import PeriodChart from './PeriodChart'
import ChartTide from './ChartTide'

const ForecastChart = () => {
  const forecastState = useSelector((state) => state.forecastSpot)
  const [showChart, setShowChart] = useState('waveHeight')
  const dateNow = new Date(Date.now())
  const today = dateNow.toISOString().split('T')[0]
  const splittedDate = today.split('-')
  const todayState = Number(splittedDate[2])
  // I set the number of the day splitting the date (pos0 year, pos1 month, pos2 day)
  const [day, setDay] = useState(todayState)
  const [year, month] = splittedDate
  const dayForForecast = `${year}-${month}-${day}`
  const { data } = forecastState
  const { forecast } = data
  const timeLabelsForecast =
    forecast &&
    forecast
      .map((hour) => hour.time.split('T')[1].split('+')[0].substring(0, 5))
      .reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        [],
      )

  const forecastForTheDay =
    forecast && forecast.filter((hour) => hour.time.includes(day))

  const dayLabelsForecast =
    forecast &&
    forecast
      .map((hour) => hour.time.split('T')[0])
      .reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        [],
      )

  const forecastObject = forecastForTheDay
    ? forecastForTheDay.map((hour) => Object.assign({}, ...hour.data))
    : null

  const waveHeight = forecast
    ? forecastObject.map((hour) => hour.waveHeight.toFixed(2))
    : null

  const swellHeight = forecast
    ? forecastObject.map((hour) => hour.swellHeight.toFixed(2))
    : null

  const secSwellHeight = forecast
    ? forecastObject.map((hour) => hour.secondarySwellHeight.toFixed(2))
    : null

  const wavePeriod = forecast
    ? forecastObject.map((hour) => hour.wavePeriod.toFixed(2))
    : null

  const swellPeriod = forecast
    ? forecastObject.map((hour) => hour.swellPeriod.toFixed(2))
    : null

  const secSwellPeriod = forecast
    ? forecastObject.map((hour) => hour.secondarySwellPeriod.toFixed(2))
    : null

  const handleClickNextDay = () => {
    console.log(day)
    if (day + 1 >= todayState + 5) return
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
    waveHeight,
    swellHeight,
    secSwellHeight,
    wavePeriod,
    swellPeriod,
    secSwellPeriod,
  }

  return (
    <>
      <button onClick={handleClickPrevDay}> ieri </button>
      <button onClick={handleClickNextDay}> domani </button>

      <button onClick={handleClickPeriodChart}> periodo </button>
      <button onClick={handleClickHeightChart}> altezza </button>
      {showChart === 'waveHeight' ? <HeightChart day={dayForForecast} dataChart={dataCharts} /> : null}
      {showChart === 'wavePeriod' ? <PeriodChart day={dayForForecast} dataChart={dataCharts} /> : null}
      <ChartTide day={dayForForecast} />
    </>
  )
}

export default ForecastChart
