import React, { useState } from 'react'
import { Polar, Bar, Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import moment from 'moment'

const ChartComponent = () => {
  const forecastState = useSelector((state) => state.forecastSpot)
  const [dayForecast, setDayForecast] = useState({ day: null, forecast: null })
  const [showChart, setShowChart] = useState('waveHeight')

  const { data } = forecastState
  const { forecast, tides } = data
  const timeLabelsForecast =
    forecast &&
    forecast
      .map((hour) => hour.time.split('T')[1].split('+')[0].substring(0, 5))
      .reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        [],
      )

  const dayLabelsForecast =
    forecast &&
    forecast
      .map((hour) => hour.time.split('T')[0])
      .reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        [],
      )

  const timeLabelsTides =
    tides &&
    tides.map((hour) => moment(hour.time).format('MMM Do YY[\n]h:mm:ss a'))

  console.log(dayLabelsForecast, timeLabelsForecast)

  const forecastObject = forecast
    ? forecast.map((hour) => Object.assign({}, ...hour.data))
    : null

  const [day, setDay] = useState({ data: forecastObject, index: 0 })

  const waveHeight = forecast
    ? day.data.map((hour) => hour.waveHeight.toFixed(2))
    : null

  const swellHeight = forecast
    ? day.data.map((hour) => hour.swellHeight.toFixed(2))
    : null

  const secSwellHeight = forecast
    ? day.data.map((hour) => hour.secondarySwellHeight.toFixed(2))
    : null

  const wavePeriod = forecast
    ? day.data.map((hour) => hour.wavePeriod.toFixed(2))
    : null

  const swellPeriod = forecast
    ? day.data.map((hour) => hour.swellPeriod.toFixed(2))
    : null

  const secSwellPeriod = forecast
    ? day.data.map((hour) => hour.secondarySwellPeriod.toFixed(2))
    : null

  const handleClickNextDay = () => {
    if (day.index + 6 >= forecastObject.length) return false
    setDay({ data: forecastObject.slice(day.index + 6), index: day.index + 6 })
  }

  const handleClickPrevDay = () => {
    if (day.index - 6 < 0) return false
    setDay({ data: forecastObject.slice(day.index - 6), index: day.index - 6 })
  }

  const handleClickPeriodChart = () => setShowChart('wavePeriod')
  const handleClickHeightChart = () => setShowChart('waveHeight')

  const dataHeight = {
    labels: timeLabelsForecast,
    datasets: [
      {
        label: 'Wave Height',
        backgroundColor: 'rgba(255,0,132,0.2)',
        borderColor: 'rgba(255,0,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,0,132,0.4)',
        hoverBorderColor: 'rgba(255,0,132,1)',
        data: waveHeight,
      },
      {
        label: 'Swell Height',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: swellHeight,
      },
      {
        label: 'Secondary Swell Height',
        backgroundColor: 'rgba(100,99,255,0.2)',
        borderColor: 'rgba(100,99,255,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(100,99,255,0.4)',
        hoverBorderColor: 'rgba(100,99,255,1)',
        data: secSwellHeight,
      },
    ],
  }

  const dataPeriod = {
    labels: timeLabelsForecast,
    datasets: [
      {
        label: 'Wave Period',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(12,192,192,0.4)',
        borderColor: 'rgba(12,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(12,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(12,192,192,1)',
        pointHoverBorderColor: 'rgba(12,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: wavePeriod,
      },
      {
        label: 'Swell Period',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,77,77,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: swellPeriod,
      },
      {
        label: 'Secondary Swell Period',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255,192,192,0.4)',
        borderColor: 'rgba(255,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: secSwellPeriod,
      },
    ],
  }

  return (
    <>
      
      <button onClick={handleClickPrevDay}> ieri </button>
      <button onClick={handleClickNextDay}> domani </button>

      <button onClick={handleClickPeriodChart}> periodo </button>
      <button onClick={handleClickHeightChart}> altezza </button>
      {showChart === 'waveHeight' ? <Bar data={dataHeight} /> : null}
      {showChart === 'wavePeriod' ? <Line data={dataPeriod} /> : null}
    </>
  )
}

export default ChartComponent
